// ═══════════════════════════════════════════════════════════════
// TENSE AF — GROOVE ENGINE v6
//
// Chain: INPUT → STATE → MODE → GROOVE → OUTPUT
// Groove reads mode profile. Does not call UI or patch.
//
// Mode profile consumed each bar via _updateContinuous():
//   lpf_target   → bass filter cutoff (continuous modulation)
//   detune_range → bass unison spread
//   swing_amount → hat timing offset
//   saturation   → drive bus level
//
// Failure state: detectFailureState() called post-answer.
// Randomness: gated by mode in playStep. No bare Math.random() in hot path.
// ═══════════════════════════════════════════════════════════════

class GrooveEngine {
  constructor(ctx, destination) {
    this.ctx = ctx;
    this.dest = destination;
    
    this.tempo = 88;
    this.step = 0;
    this.bar = 0;
    this.running = false;
    this.timer = null;
    
    // Feel — BASE values. Earned tightness reduces these multiplicatively.
    this.feelBase = {
      kickBase: 0.014,
      snareBase: 0.013,
      hatJitter: 0.018
    };
    this.feel = {
      kickBase: 0.014,
      snareBase: 0.013,
      hatJitter: 0.018
    };
    
    // Four state axes
    this.integrity = 1.0;
    this.damage = 0;
    this.lift = 0;           // 0-1, earned transcendence
    this.virtuoso = 0;       // 0-1, bass expressiveness
    
    // Trust window — buffer against damage after sustained confidence
    this.trustWindow = 0;
    
    // Behavioural memory
    this.alignedStreak = 0;  // tracked for lift/trust
    
    // Interaction state
    this.lastKickDrag = 0;
    this.dropCounter = 0;
    
    this.cogState = null;
    this.mode = 'idle';
    this.modeProfile = (typeof MODES !== 'undefined') ? MODES.control : null;
    this.landPending = false;
    this.bassEngine = null;
    this.audioEngine = null;  // set by AudioEngine after construction

    // Semantic context — set at question load, consumed each bar
    this.semantic   = null;
    this.semInfluence = null;  // output of semanticToAudioInfluence()

    // Hat panner — instability drives spatial drift
    this._hatPanner = null;
    this._hatPanTarget = 0;

    // Continuous audio params — driven by mode profile
    this._lpf = 1400;          // current filter cutoff
    this._detune = 8;          // current detune range
    this._swing = 0.64;        // current swing
    this._saturation = 0.3;    // current saturation

    // Failure state — set by onAnswer(), read by _updateContinuous()
    this._failureState = null;

    this._noiseBuffer = null;
    this._buildNoise();
    // Hat panner — built after context is available
    // Initialised lazily in first tick
    this._semanticComplexity = 1.0;
    this._hatTiltGain = 1.0;
    this._hatPanner = null;
    this._initHatPanner();
  }

  _initHatPanner() {
    // Called in constructor — ctx may not be available yet if called too early.
    // Groove is always instantiated with ctx, so this is safe.
    if (!this.ctx) return;
    try {
      this._hatPanner = this.ctx.createStereoPanner();
      this._hatPanner.pan.value = 0;
      // Route: hatPanner → dest (drums bus)
      // Hat sounds connect through panner instead of direct
      this._hatPanner.connect(this.dest);
    } catch(e) {
      this._hatPanner = null;
    }
  }

  _buildNoise() {
    const len = Math.floor(this.ctx.sampleRate * 0.3);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this._noiseBuffer = buf;
  }

  start() {
    if (this.running) return;
    this.running = true;
    const interval = (60 / this.tempo / 4) * 1000;
    this.timer = setInterval(() => this.tick(), interval);
  }

  stop() {
    if (this.timer) clearInterval(this.timer);
    this.running = false;
  }

  // ─────────────────────────────────────
  // FIELD TEMPO — called by multiplayer engine
  // Restarts tick interval at new BPM. Preserves step position.
  // Called continuously at ~30hz; only restarts when BPM changes
  // beyond a 0.5 BPM threshold to avoid churn.
  // ─────────────────────────────────────
  setTempo(bpm) {
    const target = Math.max(78, Math.min(100, bpm));  // hard bounds
    if (Math.abs(target - this.tempo) < 0.5) return;  // no churn
    this.tempo = target;
    if (!this.running) return;
    if (this.timer) clearInterval(this.timer);
    const interval = (60 / this.tempo / 4) * 1000;
    this.timer = setInterval(() => this.tick(), interval);
  }

  tick() {
    const now = this.ctx.currentTime;
    const t = now + 0.02;
    
    this._updateState();
    
    // Infer mode each bar (stable through the bar)
    if (this.step === 0 && this.cogState && typeof inferMode === 'function') {
      this.modeProfile = inferMode(this.cogState, this);
      this._updateContinuous();
    }
    
    if (this.step === 0) {
      this.bar++;
      if (this.bar % 2 === 0) {
        this.feel.kickBase = this.feelBase.kickBase + 0.002;
      } else {
        this.feel.kickBase = this.feelBase.kickBase - 0.002;
      }
      // Trigger sub note on bar downbeat — enveloped, not constant
      if (this.audioEngine && typeof this.audioEngine.triggerSubNote === 'function') {
        this.audioEngine.triggerSubNote(40);
      }
      console.log('GROOVE STEP', 'bar=' + this.bar);

      // Funk mode bar countdown — exit after 8 bars
      if (this._inFunkMode) {
        this._funkBarsRemaining--;
        if (this._funkBarsRemaining <= 0) this._exitFunkMode();
      }
    }
    
    // FRACTURE phase — drop drums for 1–2 bars
    const phase = this.cogState ? this.cogState.phase : 'entry';
    if (phase === 'fracture') {
      // Drop all drums for one full bar every other bar
      // Spike silence: 100–300ms mid-bar gaps
      if (this.step === 0) {
        // Variation: not perfectly every other bar.
        // Drop probability ~65% if last bar was normal, ~15% if already dropped.
        const dropChance = this._fractureBarDrop ? 0.15 : 0.65;
        this._fractureBarDrop = Math.random() < dropChance;
      }
    } else {
      this._fractureBarDrop = false;
    }

    if (!this._fractureBarDrop) {
      this.playStep(this.step, t);
    } else if (this.step % 8 === 4) {
      // Spike: one snare ghost in the fracture silence (disorienting)
      this._playSnare(t, 0.08);
    }
    this.step = (this.step + 1) % 16;
  }

  // ─────────────────────────────────────
  // STATE UPDATE — integrity, damage, lift, virtuoso, trust window,
  // earned tightness
  // ─────────────────────────────────────
  _updateState() {
    if (!this.cogState) return;
    
    const conf = this.cogState.confidence;
    const instab = this.cogState.instability;
    
    // DAMAGE — slow-bleeding memory
    this.damage += instab * 0.012;
    this.damage *= 0.985;
    this.damage = Math.min(1.0, this.damage);
    
    // INTEGRITY
    let delta;
    if (instab > 0.5) {
      delta = -instab * 0.045 + conf * 0.006;
    } else if (conf > 0.7) {
      delta = 0.035 - this.damage * 0.012 - instab * 0.01;
    } else {
      delta = 0.006 - this.damage * 0.008 - instab * 0.02;
    }
    this.integrity += delta;
    this.integrity = Math.max(0.0, Math.min(1.0, this.integrity));
    
    // LIFT — earned transcendence
    // Rises only when confidence is high AND damage is low AND streak is strong
    if (conf > 0.85 && this.damage < 0.3 && this.alignedStreak >= 4) {
      this.lift = Math.min(1.0, this.lift + 0.04);
    } else {
      this.lift *= 0.97;
    }
    // FRAGILE: collapses fast on instability
    if (instab > 0.5) {
      this.lift *= 0.6;
    }
    
    // VIRTUOSO — bass expressiveness, requires high trust
    if (this.lift > 0.7 && this.integrity > 0.8 && this.damage < 0.3) {
      this.virtuoso = Math.min(1.0, this.virtuoso + 0.06);
    } else {
      this.virtuoso *= 0.9;
    }
    if (instab > 0.4) this.virtuoso *= 0.5;
    
    // EARNED TIGHTNESS — feel values tighten multiplicatively when trusted
    const tightness = Math.min(0.22, this.lift * 0.15 + (conf > 0.8 ? 0.07 : 0));
    this.feel.snareBase = this.feelBase.snareBase * (1 - tightness);
    this.feel.hatJitter = this.feelBase.hatJitter * (1 - tightness * 0.6);
    
    // Push bass engine
    if (this.bassEngine) {
      this.bassEngine.virtuoso = this.virtuoso;
      this.bassEngine.lift = this.lift;
    }
  }

  onCommit() {
    // Called from content layer on commit
    this.integrity = Math.min(1.0, this.integrity + 0.12);
  }

  // Called on aligned answer — feeds streak + trust
  onAligned() {
    this.alignedStreak++;
    // Trust window earned after sustained alignment
    if (this.alignedStreak >= 4) {
      this.trustWindow = 3;
    }
  }

  // Called on misaligned
  onMisaligned() {
    this.alignedStreak = 0;
    // Trust window evaporates immediately
    this.trustWindow = 0;
  }

  // ─────────────────────────────────────
  // KICK
  // ─────────────────────────────────────
  playKick(t, velocity = 1.0) {
    const kt = t;
    
    const click = this.ctx.createOscillator();
    const clickGain = this.ctx.createGain();
    click.type = 'square';
    click.frequency.setValueAtTime(190, kt);
    click.frequency.exponentialRampToValueAtTime(55, kt + 0.025);
    clickGain.gain.setValueAtTime(0.32 * velocity, kt);
    clickGain.gain.exponentialRampToValueAtTime(0.001, kt + 0.035);
    click.connect(clickGain);
    clickGain.connect(this.dest);
    click.start(kt);
    click.stop(kt + 0.04);
    
    const body = this.ctx.createOscillator();
    const bodyGain = this.ctx.createGain();
    body.type = 'sine';
    body.frequency.setValueAtTime(115, kt);
    body.frequency.exponentialRampToValueAtTime(42, kt + 0.13);
    bodyGain.gain.setValueAtTime(0.95 * velocity, kt);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, kt + 0.18);
    body.connect(bodyGain);
    bodyGain.connect(this.dest);
    body.start(kt);
    body.stop(kt + 0.2);
    
    const sub = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    sub.type = 'sine';
    sub.frequency.setValueAtTime(52, kt);
    sub.frequency.exponentialRampToValueAtTime(34, kt + 0.1);
    subGain.gain.setValueAtTime(0.55 * velocity, kt);
    subGain.gain.exponentialRampToValueAtTime(0.001, kt + 0.16);
    sub.connect(subGain);
    subGain.connect(this.dest);
    sub.start(kt);
    sub.stop(kt + 0.18);
  }

  // ─────────────────────────────────────
  // SNARE — crack + rattle. Two layers.
  // Crack: sine pitch drop (200→80Hz, 8ms) — the attack transient
  // Rattle: noise through HP+BP — the wire buzz
  // Ghost: crack suppressed, rattle quieter and shorter
  // ─────────────────────────────────────
  playSnare(t, velocity = 1.0, ghost = false) {
    const st = t;
    const v  = ghost ? 0.28 * velocity : velocity;

    // ── CRACK — sine transient, very short pitch drop ──
    // This is the part that makes it sound like a drum, not a hat
    if (!ghost) {
      const crack = this.ctx.createOscillator();
      const crackGain = this.ctx.createGain();
      crack.type = 'sine';
      crack.frequency.setValueAtTime(200, st);
      crack.frequency.exponentialRampToValueAtTime(80, st + 0.008);
      crackGain.gain.setValueAtTime(0.45 * v, st);
      crackGain.gain.exponentialRampToValueAtTime(0.001, st + 0.012);
      crack.connect(crackGain);
      crackGain.connect(this.dest);
      crack.start(st);
      crack.stop(st + 0.015);
    } else {
      // Ghost: very soft click only — no real crack
      const click = this.ctx.createOscillator();
      const clickGain = this.ctx.createGain();
      click.type = 'sine';
      click.frequency.setValueAtTime(160, st);
      click.frequency.exponentialRampToValueAtTime(80, st + 0.006);
      clickGain.gain.setValueAtTime(0.1 * v, st);
      clickGain.gain.exponentialRampToValueAtTime(0.001, st + 0.008);
      click.connect(clickGain);
      clickGain.connect(this.dest);
      click.start(st);
      click.stop(st + 0.01);
    }

    // ── RATTLE — noise through HP + BP ──
    // HP removes low mud, BP focuses the wire buzz around 3-5kHz
    const noise = this.ctx.createBufferSource();
    noise.buffer = this._noiseBuffer;

    const hp = this.ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 1800;
    hp.Q.value = 0.5;

    const bp = this.ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 4200;
    bp.Q.value = 1.2;

    const rattleGain = this.ctx.createGain();
    const decay = ghost ? 0.04 : 0.09;
    // Noise hits slightly after crack — rattle follows transient
    const rattleOffset = ghost ? 0 : 0.002;
    rattleGain.gain.setValueAtTime(0.7 * v, st + rattleOffset);
    rattleGain.gain.exponentialRampToValueAtTime(0.001, st + rattleOffset + decay);

    noise.connect(hp);
    hp.connect(bp);
    bp.connect(rattleGain);
    rattleGain.connect(this.dest);
    noise.start(st + rattleOffset);
    noise.stop(st + rattleOffset + decay + 0.02);
  }

  // ─────────────────────────────────────
  // CLAP — replaces snare at full lift. Late. Wide. Human.
  // The moment the groove stops being yours alone.
  // ─────────────────────────────────────
  playClap(t, velocity = 1.0) {
    // Three layered noise bursts with slight stereo offset, flam possible
    const baseDelay = 0;
    const layers = [
      { offset: 0, gain: 0.55 * velocity, decay: 0.04 },
      { offset: 0.006, gain: 0.48 * velocity, decay: 0.05 },
      { offset: 0.012, gain: 0.42 * velocity, decay: 0.06 }
    ];
    
    // Human flam — sometimes one of the three is an early pre-slap
    const flam = Math.random() > 0.6;
    if (flam) {
      layers[0].offset = -0.008;
      layers[0].gain *= 0.7;
    }
    
    layers.forEach((layer, i) => {
      const ct = t + layer.offset;
      const noise = this.ctx.createBufferSource();
      noise.buffer = this._noiseBuffer;
      
      const hp = this.ctx.createBiquadFilter();
      hp.type = 'highpass';
      hp.frequency.value = 900 + i * 100;
      hp.Q.value = 0.5;
      
      const bp = this.ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = 1400 + i * 200;
      bp.Q.value = 1.2;
      
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(layer.gain, ct);
      g.gain.exponentialRampToValueAtTime(0.001, ct + layer.decay);
      
      noise.connect(hp);
      hp.connect(bp);
      bp.connect(g);
      g.connect(this.dest);
      noise.start(ct);
      noise.stop(ct + layer.decay + 0.02);
    });
  }

  // ─────────────────────────────────────
  // HAT — noise through HP + BP
  // HP removes low content, BP focuses around 8-10kHz
  // Without BP it's pure air — needs some body
  // ─────────────────────────────────────
  playHat(t, velocity = 0.1, open = false) {
    const noise = this.ctx.createBufferSource();
    noise.buffer = this._noiseBuffer;

    const hp = this.ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = open ? 5500 : 7000;
    hp.Q.value = 0.7;

    const bp = this.ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = open ? 9000 : 10500;
    bp.Q.value = open ? 0.8 : 1.2;

    const g = this.ctx.createGain();
    const decay = open ? 0.14 : 0.024;
    g.gain.setValueAtTime(velocity, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + decay);

    noise.connect(hp);
    hp.connect(bp);
    bp.connect(g);
    g.connect(this.dest);
    noise.start(t);
    noise.stop(t + decay + 0.02);
  }

  // ─────────────────────────────────────
  // COWBELL — conversational accent
  // Square → bandpass ~900Hz, ~60ms total
  // High Q (8) focuses the tone — low Q makes it ring like a bell, not a cowbell
  // Sits behind beat (+15ms built into call site)
  // ─────────────────────────────────────
  _playCowbell(t, velocity = 0.5) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const bp  = this.ctx.createBiquadFilter();
    const g   = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.value = 880;

    bp.type = 'bandpass';
    bp.frequency.value = 920;
    bp.Q.value = 8;  // tight focus — cuts the ring, keeps the clank

    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(velocity, t + 0.003);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.06);  // 60ms — shorter, less ring

    osc.connect(bp);
    bp.connect(g);
    g.connect(this.dest);
    osc.start(t);
    osc.stop(t + 0.07);
  }

  // ─────────────────────────────────────
  // CHORD — D'Angelo voicing. Fragile. Earned. Blooms (staggered notes).
  // Rootless, clustered, detuned. Only appears at peak trust.
  // ─────────────────────────────────────
  playChord(t) {
    // Rootless m9 voicing — bass provides the root
    // Intervals from tonic A (110 Hz up an octave for body = 220):
    //   m3, 5, m7, 9 → [3, 7, 10, 14] semitones
    // Clustered variants: occasional +1 on middle note = "wrongness"
    const baseFreq = 220;  // A3
    const voicing = [3, 7, 10, 14];
    
    // Subtle micro-movement — occasionally shift one interval
    if (Math.random() > 0.6) {
      const idx = 1 + Math.floor(Math.random() * 2);
      voicing[idx] += Math.random() > 0.5 ? 1 : -1;
    }
    
    voicing.forEach((semi, i) => {
      const freq = baseFreq * Math.pow(2, semi / 12);
      // Stagger — chord blooms, doesn't hit
      const noteT = t + i * 0.004;
      
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      const filt = this.ctx.createBiquadFilter();
      
      // Sine + triangle blend
      osc1.type = 'sine';
      osc2.type = 'triangle';
      
      // Per-note detune — imperfection
      const detune = (Math.random() - 0.5) * 8;
      osc1.frequency.value = freq;
      osc2.frequency.value = freq;
      osc1.detune.value = detune;
      osc2.detune.value = detune + (Math.random() - 0.5) * 5;
      
      // Filter the triangle slightly — soften top
      filt.type = 'lowpass';
      filt.frequency.value = 1800 + this.lift * 800;
      filt.Q.value = 0.4;
      
      // Short, soft attack; medium decay
      const vel = 0.08 * this.lift;
      g.gain.setValueAtTime(0, noteT);
      g.gain.linearRampToValueAtTime(vel, noteT + 0.04);
      g.gain.exponentialRampToValueAtTime(0.001, noteT + 0.9);
      
      osc1.connect(filt);
      osc2.connect(filt);
      filt.connect(g);
      g.connect(this.dest);
      
      osc1.start(noteT);
      osc1.stop(noteT + 1.0);
      osc2.start(noteT);
      osc2.stop(noteT + 1.0);
    });
  }

  // ─────────────────────────────────────
  // PLAY STEP — Dilla pocket with integrity + damage + lift
  // ─────────────────────────────────────
  // ─────────────────────────────────────
  // CONTINUOUS AUDIO PARAMS — mode profile → audio engine
  // Called each bar from tick(). Lerps toward mode targets.
  // No event spikes. All change is modulation.
  // ─────────────────────────────────────
  _updateContinuous() {
    const p = this.modeProfile ? this.modeProfile.audio_profile : null;
    if (!p) return;

    // Apply failure state lpf nudge if active
    let lpfTarget = p.lpf_target;
    if (this._failureState && this._failureState.lpf_nudge) {
      lpfTarget = Math.max(300, lpfTarget + this._failureState.lpf_nudge);
    }

    // Lerp all params toward target
    this._lpf         += (lpfTarget      - this._lpf)         * 0.12;
    this._detune      += (p.detune_range - this._detune)      * 0.10;
    this._swing       += (p.swing_amount - this._swing)       * 0.08;
    this._saturation  += (p.saturation   - this._saturation)  * 0.10;

    // Clamp LPF — never below 200Hz (below this loses audible character)
    this._lpf = Math.max(200, this._lpf);

    // Push to bass engine if available
    if (this.bassEngine) {
      this.bassEngine.virtuoso  = this.virtuoso;
      this.bassEngine.lift      = this.lift;
      this.bassEngine.lpfTarget = this._lpf;
      this.bassEngine.detune    = this._detune;
    }

    // ── SEMANTIC MODULATION ──────────────────────────────────────
    // Apply semantic influence on top of mode params.
    // Bounded: never more than ±15% on any parameter.
    if (this.semInfluence) {
      const si = this.semInfluence;

      // STACKING CAP — total semantic influence never exceeds 0.5 magnitude.
      // Compute raw magnitude from all active deltas, derive a scale factor.
      const rawMag = Math.abs(si.timingOffset || 0)
                   + Math.abs((si.attackMult || 1) - 1)
                   + Math.abs(si.tonalTilt || 0)
                   + Math.abs((si.complexityGate || 1) - 1);
      const cap = 0.5;
      const scale = rawMag > cap ? cap / rawMag : 1.0;

      // TIMING OFFSET — tense → drag/push (scaled)
      if (this.bassEngine && typeof si.timingOffset === 'number') {
        const baseBehind = 0.012;
        this.bassEngine.behindBeat = baseBehind * (1 + si.timingOffset * scale);
      }

      // ATTACK MULT — agency → clarity (scaled toward 1.0)
      if (this.bassEngine && typeof si.attackMult === 'number') {
        const scaledMult = 1 + (si.attackMult - 1) * scale;
        this.bassEngine.attackMult = scaledMult;
      }

      // COMPLEXITY GATE — structure (scaled toward 1.0)
      const scaledGate = 1 + (( si.complexityGate || 1) - 1) * scale;
      this._semanticComplexity = scaledGate;

      // TONAL TILT — polarity (scaled)
      if (typeof si.tonalTilt === 'number') {
        this._hatTiltGain = 1.0 + si.tonalTilt * scale;
      }
    }

    // HAT PANNER — instability → spatial drift, stress → narrowing
    if (this.cogState && this._hatPanner) {
      const instab = this.cogState.instability;
      const stress = instab * 0.6 + this.damage * 0.4;
      // Drift: instability widens pan range
      const panRange = Math.min(0.9, instab * 1.2);
      // Narrows under stress: keep centre bias
      const centreBias = stress * 0.3;
      // Slow drift — small step per bar, heavy smoothing (1.8s tc = no snapping)
      this._hatPanTarget += (Math.random() - 0.5) * panRange * 0.03;
      this._hatPanTarget = Math.max(-panRange + centreBias, Math.min(panRange - centreBias, this._hatPanTarget));
      this._hatPanner.pan.setTargetAtTime(this._hatPanTarget, this.ctx.currentTime, 1.8);
    }

    // ── FIELD OFFSETS (multiplayer) ──────────────────────────────
    // Applied after mode profile. Additive. Never overriding.
    if (typeof this._fieldLpfOffset === 'number') {
      this._lpf = Math.max(200, this._lpf + this._fieldLpfOffset);
    }
    if (typeof this._fieldDetuneOffset === 'number') {
      this._detune = Math.max(4, Math.min(24, this._detune + this._fieldDetuneOffset));
    }
    if (typeof this._swingTarget === 'number') {
      this._swing += (this._swingTarget - this._swing) * 0.05;
    }

    // Push CSS vars to visual layer
    if (typeof document !== 'undefined') {
      const vp = this.modeProfile.visual_profile;
      const r = document.documentElement;
      r.style.setProperty('--mode-chromatic', vp.chromatic_drift.toFixed(3));
      r.style.setProperty('--mode-jitter',    vp.jitter.toFixed(3));
      r.style.setProperty('--mode-vignette',  vp.vignette.toFixed(3));
    }
  }

  // ─────────────────────────────────────
  // POST-ANSWER HOOK — called by UI after submit, not during
  // Detects failure state. Applies groove deltas.
  // ─────────────────────────────────────
  onAnswer(correct, decisionTime, weight, trustWindow) {
    weight = weight || 1.0;

    if (correct) {
      this.onAligned();
      this.integrity = Math.min(1, this.integrity + 0.06 * weight);
      this.damage   *= 0.9;
    } else {
      this.onMisaligned();
      const fast = decisionTime < 800;
      const conf = this.cogState ? this.cogState.confidence : 0.5;
      const lowConf = conf < 0.55;
      if (fast && !lowConf) {
        const speedFactor = Math.max(0, 1 - decisionTime / 1200);
        const buffer = (trustWindow > 0) ? 0.5 : 1.0;
        this.integrity = Math.max(0, this.integrity - 0.15 * speedFactor * buffer * weight);
        this.damage    = Math.min(1, this.damage    + 0.10 * speedFactor * buffer * weight);
      }
    }

    // Failure state detection — modulates audio, not groove axes
    if (typeof detectFailureState === 'function') {
      this._failureState = detectFailureState(this.cogState);
    }
  }

  // ─────────────────────────────────────
  // SEMANTIC CONTEXT — called by UI at question load
  // ─────────────────────────────────────
  setSemanticContext(semantic) {
    this.semantic = semantic;
    if (typeof semanticToAudioInfluence === 'function') {
      this.semInfluence = semanticToAudioInfluence(semantic);
    }
  }

  playStep(step, t) {
    const conf  = this.cogState ? this.cogState.confidence  : 0.5;
    const instab = this.cogState ? this.cogState.instability : 0;
    const intg  = this.integrity;
    const chaos = 1 - intg;
    const modeId = this.modeProfile ? this.modeProfile.id : 'control';

    // ─── MODE FLAGS ───
    const modeDrift        = modeId === 'drift';
    const modeSurveillance = modeId === 'surveillance';
    const modeControl      = modeId === 'control';
    const modeDeadpan      = modeSurveillance;
    const modeMeta         = modeControl && this.lift > 0.7;
    const modeContradiction = modeDrift;
    const semComplex = this._semanticComplexity || 1.0;
    const hatGain    = this._hatTiltGain || 1.0;

    // ─── COLLAPSE — staggered, respects scars ───
    if (instab > 0.7 && this.dropCounter === 0) {
      this.dropCounter = 4 + Math.floor(instab * 4);
    }
    if (this.dropCounter > 0) {
      this.dropCounter--;
      const survival = intg * (1 - this.damage * 0.6);
      if (Math.random() > survival) return;
    }

    // ─── TIMING CONSTANTS — locked, not random ───
    // Asymmetric feel baked in. No jitter. Repeatable groove identity.
    const KICK_DRAG  = this.feel.kickBase + this.damage * 0.018 - this.lift * 0.006;
    // Fix 1: snare drag scales with instability — perceptually alive, not static
    const SNARE_LAG  = 0.018 + (instab * 0.012) + (modeContradiction ? 0.012 : 0);
    // Swing offset for 16th-note "and" positions (steps 2,6,10,14)
    const SWING = (this._swing - 0.5) * 0.04;

    // ─── KICK GRID (Quik / West Coast) ───
    // [1,-,-,-, -,-,1,-, -,-,-,-, -,1,-,-]
    // step 0 = anchor, step 6 = push, step 13 = late pickup
    if (step === 0) {
      // Sacred downbeat — fires unless catastrophic
      if (intg > 0.1 || Math.random() > 0.05) {
        this.playKick(t + KICK_DRAG, 1.0);
        this.lastKickDrag = KICK_DRAG;
        console.log('GROOVE STEP', 'kick-step0');
      }
    }
    if (step === 6) {
      // Push kick — suppressed by high damage only
      if (this.damage < 0.7) {
        this.playKick(t + KICK_DRAG, 0.82);
        this.lastKickDrag = KICK_DRAG;
      }
    }
    if (step === 13) {
      // Late pickup — confidence-gated
      if (conf > 0.45 && intg > 0.5) {
        this.playKick(t + KICK_DRAG + 0.004, 0.65);
      }
    }

    // ─── SNARE — steps 4 + 12, dragging ───
    const useClap = this.lift > 0.8 && this.integrity > 0.85 && this.damage < 0.25;
    if (step === 4 || step === 12) {
      const st = t + SNARE_LAG;
      if (useClap) {
        this.playClap(st + 0.018, 0.9);
      } else {
        this.playSnare(st, 0.95);
      }
    }

    // Call-response snare at full lift — step 5
    if (this.lift > 0.85 && step === 5) {
      this.playSnare(t + 0.004, 0.4, true);
    }

    // Ghost snare — step 14, pre-bar tension
    // Gated: virtuoso + semComplex + not deadpan
    if (!modeDeadpan && this.virtuoso > 0.6 && step === 14
        && conf > 0.55 && intg > 0.6
        && Math.random() > (0.5 + (1 - semComplex) * 0.4)) {
      this.playSnare(t + 0.005, 0.26, true);
    }

    // ─── HI-HATS — uneven, human, deterministic ───
    // Base: every even step (8th notes)
    // Off-beat hats (step % 4 === 2): delayed +0.010, velocity 0.62
    // Steps 6 and 14: additional velocity dip to 0.75× — breaks symmetry
    // Fix 5: variable silence offset — dropStep position shifts with instability
    const dropOffset = Math.floor(instab * 3);
    const dropPhase  = (3 + dropOffset) % 8;
    const isDropStep = instab > 0.6 && ((this.bar * 16 + step) % 8 === dropPhase);
    const skipHats   = instab > 0.85 || isDropStep;

    if (!skipHats && step % 2 === 0) {
      const isOffHat  = (step % 4 === 2);
      // Fix 2: steps 6 and 14 get additional velocity reduction — breaks loop symmetry
      const isThinner = (step === 6 || step === 14);
      const hatDelay  = isOffHat ? 0.010 + SWING : SWING;
      const velocity  = (isOffHat ? 0.62 : 1.0) * (isThinner ? 0.75 : 1.0)
                        * (0.06 + conf * 0.06) * hatGain;
      this.playHat(t + hatDelay, Math.min(1.0, velocity));
    }

    // Open hat — step 7, earned
    if (step === 7 && conf > 0.65 && intg > 0.7 && !modeSurveillance) {
      this.playHat(t + 0.010, 0.14, true);
    }

    // Double-time hat layer at lift — odd steps only
    if (this.lift > 0.6 && step % 2 === 1 && !modeSurveillance) {
      const vel = (0.04 + this.lift * 0.06) * hatGain;
      this.playHat(t + SWING * 0.5, Math.min(1.0, vel));
    }

    // ─── COWBELL — voice, not pattern ───
    // Fix 3: step 3 always fires (unless full collapse)
    //        step 11 requires confidence > 0.5 — earned
    //        ghost hits (6,14) require confidence > 0.6 AND instability < 0.5
    //        instability > 0.7 suppresses all — system losing voice
    if (!modeSurveillance && instab < 0.7) {
      const cowbellDelay = 0.015 + (instab > 0.4 ? 0.005 : 0);
      if (step === 3) {
        this._playCowbell(t + cowbellDelay, 0.55);
      }
      if (step === 11 && conf > 0.5) {
        this._playCowbell(t + cowbellDelay, 0.45);
      }
      if (step === 6  && this.virtuoso > 0.6 && conf > 0.6 && instab < 0.5) {
        this._playCowbell(t + cowbellDelay, 0.28);
      }
      if (step === 14 && this.virtuoso > 0.7 && conf > 0.6 && instab < 0.5) {
        this._playCowbell(t + cowbellDelay, 0.22);
      }
    }

    // ─── D'ANGELO CHORDS — rootless, fragile, earned ───
    const chordGate = modeMeta ? 0.6 : 0.75;
    if (step === 0
        && this.lift > chordGate
        && this.integrity > 0.8
        && instab < 0.4
        && this.bar % 2 === 0
        && Math.random() > 0.4) {
      this.playChord(t + 0.012);
    }

    // ─── CHICKEN SCRATCH — funk mode only ───
    // Prince-style muted rhythmic gate on the 16th grid
    // Grid: hits on steps 1, 3, 5, 9, 11, 13 — off-beats and syncopation
    // Velocity varies: strong on 1/9, light on others
    if (this._inFunkMode) {
      const scratchSteps = {
        1: 0.38, 3: 0.28, 5: 0.22, 9: 0.35, 11: 0.26, 13: 0.20
      };
      if (scratchSteps[step] !== undefined && instab < 0.6) {
        this._playChickenScratch(t + 0.002, scratchSteps[step] * (0.7 + conf * 0.4));
      }
    }

    // ─── BASS ───
    if (this.bassEngine) {
      this.bassEngine.tick(step, t, this.mode, conf);
    }

    if (this.landPending && step === 0) {
      this._executeLand(t);
      this.landPending = false;
    }
  }

  // ─────────────────────────────────────
  // DECISION FEEDBACK
  // ─────────────────────────────────────
  // ─────────────────────────────────────
  // FUNK MODE — 8 bars of Prince/Linn character
  // Triggered externally at peak lift sustained.
  // Tightens the kit, adds chicken scratch layer, switches bass to funk pattern.
  // Auto-exits after 8 bars.
  // ─────────────────────────────────────
  enterFunkMode() {
    if (this._inFunkMode) return;  // don't re-enter if already running
    this._inFunkMode = true;
    this._funkBarsRemaining = 8;

    // Tighten the feel values — Linn is precise, not loose
    this._funkSavedFeel = { ...this.feel };
    this.feel.kickBase   = 0.006;   // tighter than normal
    this.feel.snareBase  = 0.018;   // snare stays late but precisely
    this.feel.hatJitter  = 0.004;   // minimal jitter — Linn doesn't waver

    // Switch bass to Prince funk pattern
    if (this.bassEngine) {
      this.bassEngine.setMode('funk');
    }
  }

  _exitFunkMode() {
    this._inFunkMode = false;
    this._funkBarsRemaining = 0;
    // Restore feel
    if (this._funkSavedFeel) {
      this.feel = { ...this._funkSavedFeel };
    }
    if (this.bassEngine) {
      this.bassEngine.setMode('ride');  // return to ride, not idle
    }
  }

  // ─────────────────────────────────────
  // CHICKEN SCRATCH — muted rhythmic gate
  // Bandpass-filtered sawtooth, very fast amplitude pulses
  // Synced to groove steps — sits in the 16th note grid
  // ─────────────────────────────────────
  _playChickenScratch(t, velocity = 0.3) {
    if (!this.ctx) return;
    const osc  = this.ctx.createOscillator();
    const bp   = this.ctx.createBiquadFilter();
    const g    = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.value = 880;   // guitar-ish range

    // Clavinet/chicken scratch character — tight bandpass around 1.2kHz
    bp.type = 'bandpass';
    bp.frequency.value = 1250;
    bp.Q.value = 4.0;

    // Very fast attack, very fast decay — muted string feel
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(velocity, t + 0.003);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.028);  // 28ms — tight mute

    osc.connect(bp);
    bp.connect(g);
    g.connect(this.dest);
    osc.start(t);
    osc.stop(t + 0.035);
  }

  triggerLand() {
    this.mode = 'land';
    this.landPending = true;
    if (this.bassEngine) this.bassEngine.setMode('land');
    this.onCommit();
  }
  
  _executeLand(t) {
    this.playKick(t - 0.005, 1.15);
  }
  
  triggerRide() {
    this.mode = 'ride';
    if (this.bassEngine) this.bassEngine.setMode('ride');
    this.onCommit();
  }
  
  resetMode() {
    this.mode = 'idle';
    if (this.bassEngine) this.bassEngine.setMode('idle');
  }
  
  tick_sound() {
    const t = this.ctx.currentTime + 0.005;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = 'triangle';
    o.frequency.setValueAtTime(1800, t);
    g.gain.setValueAtTime(0.08, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.02);
    o.connect(g);
    g.connect(this.dest);
    o.start(t);
    o.stop(t + 0.025);
  }
  
  onDecisionLoss() {
    this.integrity = Math.max(0.0, this.integrity - 0.05);
  }
}
