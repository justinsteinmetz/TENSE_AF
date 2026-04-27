// ═══════════════════════════════════════════════════════════════
// TENSE AF — BASS ENGINE v6 (Zapp / G-funk)
// 
// Sound signatures:
//   - Square wave core (hollow, woody body — not saw)
//   - Pulse Width Modulation via subtle LFO on a second square
//   - Unison detune (two squares, slight offset — wider, richer)
//   - Portamento between consecutive notes (slides, not jumps)
//   - Resonant lowpass (aggressive Q) for filter sweep character
//   - Quick release (clear edge, not muddy)
//   - No sub oscillator — G-funk bass is MID-forward, vocal
// 
// Patterns kept from v5 (syncopated).
// ═══════════════════════════════════════════════════════════════

class BassEngine {
  constructor(ctx, destination) {
    this.ctx = ctx;
    this.dest = destination;
    this.rootFreq = 55;   // A1
    this.mode = 'idle';
    
    this.virtuoso = 0;
    this.lift = 0;
    this.lpfTarget = 1400;  // set by groove._updateContinuous()
    this.detune    = 8;     // set by groove._updateContinuous()
    this.behindBeat = 0.012; // set by groove via semantic timingOffset
    this.attackMult = 1.0;   // set by groove via semantic attackMult
    
    // Track the last played frequency for portamento
    this.lastFreq = null;
    this.lastNoteEndTime = 0;
    
    // 16-step patterns — syncopated, funky
    // -1 = chromatic ghost (one semitone below root)
    // Silence placement: NEVER on step 0 (anchors sacred)
    this.patterns = {
      idle: [
        0,    null, null, null,    // beat 1: root
        null, null, 7,    null,    // & of 2: fifth push
        null, null, null, null,    // beat 3: rest
        0,    null, null, 10       // beat 4: root + forward tension
      ],
      ride: [
        0,    null, null, 7,       // beat 1: root, push to 5th
        null, 5,    -1,   null,    // 16th of 2: 4th, chromatic dirt
        3,    null, null, 7,       // beat 3: m3, push to 5th
        null, null, 7,    10      // & of 4: 5th + forward tension
      ],
      funk: [
        0,    null, null, null,    // beat 1: root — sparse, lots of space
        null, 7,    null, null,    // & of 2: fifth — short, punchy
        null, null, 0,    null,    // beat 3: root again
        null, null, null, 7       // & of 4: fifth — leave space before bar
      ],
      land: [
        0,    null, null, null,
        null, null, null, null,
        null, null, null, null,
        null, null, null, null
      ]
    };
  }

  setMode(mode) {
    this.mode = mode;
  }

  tick(step, t, grooveMode, confidence = 0.5) {
    if (confidence < 0.05 && this.mode === 'idle') return;

    // ── SILENCE SYSTEM ─────────────────────────────────────────────
    // Probabilistic drop ≈12% — funk = absence, prevents loop fatigue
    // RULE: step 0 is never muted (anchor is sacred)
    // RULE: in ride mode, only non-step-0 notes drop
    if (step === 0 && this._muteUntil) {
      this._muteUntil = null;  // clear any pending mute on downbeat
    }
    if (step !== 0) {
      // Phrase boundary drop — deterministic by bar+step (repeatable, not random)
      const dropPhase = (this.bar * 16 + step) % 8;
      if (dropPhase === 3 && this.mode === 'ride') {
        return;  // ride mode: one fixed silence per phrase, not random
      }
    }
    if (this._muteUntil && t < this._muteUntil) return;

    const pattern  = this.patterns[this.mode] || this.patterns.idle;
    const interval = pattern[step];
    if (interval === null || interval === undefined) return;

    // ── TIMING — locked, not random ────────────────────────────────
    // behindBeat set by groove via semantic timingOffset
    // No jitter — repeatable groove identity
    const bt = t + (this.behindBeat || 0.012);

    // ── CHROMATIC GHOST (-1) ────────────────────────────────────────
    // -1 = one semitone below root — chromatic passing tone, not a mistake
    const semitone = interval === -1 ? -1 : interval;
    const freq = this.rootFreq * Math.pow(2, semitone / 12);
    console.log('BASS NOTE', 'step=' + step, 'freq=' + freq.toFixed(1) + 'Hz', 'mode=' + this.mode);

    // Portamento: slide from previous note if connected
    const now = this.ctx.currentTime;
    const portamento = (this.lastFreq !== null && (now - this.lastNoteEndTime) < 0.15);
    const fromFreq = portamento ? this.lastFreq : null;

    // Ghost notes (-1) are quieter and shorter
    const isGhost = interval === -1;

    if (this.mode === 'land' && step === 0) {
      this._playLandNote(freq, bt, fromFreq);
    } else if (this.mode === 'ride') {
      const isAnchor = step === 0;
      this._playRideNote(freq, bt, this.lift > 0.7 && !isGhost, isAnchor, fromFreq, isGhost);
    } else {
      const isAnchor = step === 0;
      this._playIdleNote(freq, bt, isAnchor, fromFreq, isGhost);
    }

    this.lastFreq = freq;

    // ── VIRTUOSO LAYER — deterministic triggers ─────────────────────
    if (this.virtuoso < 0.3) return;

    // Passing note at step 5 when riding high — locked position, no random
    if (this.virtuoso > 0.5 && step === 5 && this.mode === 'ride') {
      const passFreq = this.rootFreq * Math.pow(2, 2 / 12);
      this._playPassingNote(passFreq, bt);
    }

    if (this.virtuoso > 0.7 && step === 5) {
      this._playBurst(bt);
    }
  }

  // ─────────────────────────────────────
  // CORE VOICE — two unison squares + resonant filter + PWM feel
  // Returns { oscs, filter, gain } for the caller to shape envelope
  // ─────────────────────────────────────
  _buildZappVoice(freq, t, fromFreq = null) {
    // Two squares with slight detune = Zapp unison width
    const sq1 = this.ctx.createOscillator();
    const sq2 = this.ctx.createOscillator();
    sq1.type = 'square';
    sq2.type = 'square';
    
    // Detune ±8 cents for unison width
    const dr = this.detune || 8;
    sq1.detune.value = -dr + (Math.random() - 0.5) * 3;
    sq2.detune.value = +dr + (Math.random() - 0.5) * 3;
    
    // Portamento: slide from previous frequency into this one
    if (fromFreq !== null && fromFreq !== freq) {
      sq1.frequency.setValueAtTime(fromFreq, t);
      sq1.frequency.exponentialRampToValueAtTime(freq, t + 0.06);
      sq2.frequency.setValueAtTime(fromFreq, t);
      sq2.frequency.exponentialRampToValueAtTime(freq, t + 0.06);
    } else {
      sq1.frequency.value = freq;
      sq2.frequency.value = freq;
    }
    
    // Gain staging per oscillator
    const g1 = this.ctx.createGain();
    const g2 = this.ctx.createGain();
    g1.gain.value = 0.5;
    g2.gain.value = 0.5;
    sq1.connect(g1);
    sq2.connect(g2);
    
    // Resonant lowpass — G-funk filter
    // baseCutoff driven by groove mode profile (lpfTarget), not hardcoded
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    const modeBase = this.lpfTarget || 1400;
    const baseCutoff = Math.min(modeBase, modeBase * 0.5 + freq * 0.6);
    const virtuosoBoost = this.virtuoso * 200;
    filter.frequency.value = baseCutoff + virtuosoBoost;
    filter.Q.value = 6.5;  // aggressive resonance = the Zapp whistle
    
    // Mild filter movement — a quick open-close on each note (wah character)
    filter.frequency.setValueAtTime(baseCutoff + virtuosoBoost - 80, t);
    filter.frequency.linearRampToValueAtTime(baseCutoff + virtuosoBoost + 120, t + 0.03);
    filter.frequency.exponentialRampToValueAtTime(baseCutoff + virtuosoBoost - 40, t + 0.15);
    
    const outGain = this.ctx.createGain();
    
    g1.connect(filter);
    g2.connect(filter);
    filter.connect(outGain);
    outGain.connect(this.dest);
    
    return { sq1, sq2, outGain, filter };
  }

  // ─────────────────────────────────────
  // IDLE NOTE — Zapp voice, short release
  // ─────────────────────────────────────
  _playIdleNote(freq, t, isAnchor = false, fromFreq = null, isGhost = false) {
    const { sq1, sq2, outGain, filter } = this._buildZappVoice(freq, t, fromFreq);

    // Fix 4: ghost notes — darker filter, faster envelope
    // cutoff * 0.7, attack * 0.6, decay * 0.6 — sounds buried, not clean
    if (isGhost) {
      const ghostCutoff = filter.frequency.value * 0.7;
      filter.frequency.cancelScheduledValues(t);
      filter.frequency.setValueAtTime(ghostCutoff, t);
    }

    const baseAttack = 0.008 * (this.attackMult || 1.0);
    const attackTime = isGhost ? baseAttack * 0.6 : baseAttack;
    // Funk mode: short, punchy notes — Prince bass is staccato not legato
    const isFunk = this.mode === 'funk';
    const peak  = isGhost ? 0.18 : (isAnchor ? 0.42 : 0.32);
    const decay = isGhost ? 0.06 : (isFunk ? 0.055 : (isAnchor ? 0.16 : 0.1));
    
    outGain.gain.setValueAtTime(0, t);
    outGain.gain.linearRampToValueAtTime(peak, t + attackTime);
    outGain.gain.exponentialRampToValueAtTime(0.001, t + decay);
    
    sq1.start(t);
    sq1.stop(t + decay + 0.03);
    sq2.start(t);
    sq2.stop(t + decay + 0.03);
    
    this.lastNoteEndTime = t + decay;
  }

  // ─────────────────────────────────────
  // RIDE NOTE — forward motion, slightly brighter filter
  // ─────────────────────────────────────
  _playRideNote(freq, t, extended = false, isAnchor = false, fromFreq = null, isGhost = false) {
    const { sq1, sq2, outGain, filter } = this._buildZappVoice(freq, t, fromFreq);
    
    // Ride gets brighter filter for momentum
    const baseCutoff = 560 + freq * 0.7 + this.virtuoso * 250;
    filter.frequency.setValueAtTime(baseCutoff - 80, t);
    filter.frequency.linearRampToValueAtTime(baseCutoff + 150, t + 0.04);
    filter.frequency.exponentialRampToValueAtTime(baseCutoff - 20, t + 0.2);

    // Fix 4: ghost notes — override filter to darker, no wah movement
    if (isGhost) {
      const ghostCutoff = (baseCutoff - 80) * 0.7;
      filter.frequency.cancelScheduledValues(t);
      filter.frequency.setValueAtTime(ghostCutoff, t);
    }

    const baseAttack = 0.008 * (this.attackMult || 1.0);
    const attackTime = isGhost ? baseAttack * 0.6 : baseAttack;
    const peak  = isGhost ? 0.16 : (extended ? 0.48 : (isAnchor ? 0.5 : 0.36));
    const decay = isGhost ? 0.06 : (extended ? 0.26 : (isAnchor ? 0.18 : 0.12));
    
    outGain.gain.setValueAtTime(0, t);
    outGain.gain.linearRampToValueAtTime(peak, t + attackTime);
    outGain.gain.exponentialRampToValueAtTime(0.001, t + decay);
    
    // Glide on extended notes — Thundercat whole-step bend
    if (extended && Math.random() > 0.6) {
      const glideTarget = freq * Math.pow(2, 2 / 12);
      sq1.frequency.cancelScheduledValues(t + 0.08);
      sq2.frequency.cancelScheduledValues(t + 0.08);
      sq1.frequency.linearRampToValueAtTime(glideTarget, t + 0.12);
      sq1.frequency.linearRampToValueAtTime(freq, t + 0.22);
      sq2.frequency.linearRampToValueAtTime(glideTarget, t + 0.12);
      sq2.frequency.linearRampToValueAtTime(freq, t + 0.22);
    }
    
    sq1.start(t);
    sq1.stop(t + decay + 0.05);
    sq2.start(t);
    sq2.stop(t + decay + 0.05);
    
    this.lastNoteEndTime = t + decay;
  }

  // ─────────────────────────────────────
  // LAND NOTE — held, weighty, filter stays open longer
  // ─────────────────────────────────────
  _playLandNote(freq, t, fromFreq = null) {
    const { sq1, sq2, outGain, filter } = this._buildZappVoice(freq, t, fromFreq);
    
    // Land gets the most resonant filter sweep — "this is it" moment
    const baseCutoff = 600 + freq * 0.5;
    filter.frequency.setValueAtTime(baseCutoff - 100, t);
    filter.frequency.linearRampToValueAtTime(baseCutoff + 200, t + 0.08);
    filter.frequency.exponentialRampToValueAtTime(baseCutoff - 50, t + 0.5);
    filter.Q.value = 7.5;  // a bit more resonance on the land
    
    outGain.gain.setValueAtTime(0, t);
    outGain.gain.linearRampToValueAtTime(0.6, t + 0.012);
    outGain.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
    
    sq1.start(t);
    sq1.stop(t + 0.6);
    sq2.start(t);
    sq2.stop(t + 0.6);
    
    this.lastNoteEndTime = t + 0.55;
  }

  // ─────────────────────────────────────
  // PASSING NOTE — quick, articulated
  // ─────────────────────────────────────
  _playPassingNote(freq, t) {
    const { sq1, sq2, outGain, filter } = this._buildZappVoice(freq, t, null);
    
    // Brighter, snappier filter for passing tones
    filter.frequency.value = 700 + freq * 0.8;
    filter.Q.value = 5.0;
    
    outGain.gain.setValueAtTime(0, t);
    outGain.gain.linearRampToValueAtTime(0.3 * this.virtuoso, t + 0.005);
    outGain.gain.exponentialRampToValueAtTime(0.001, t + 0.07);
    
    sq1.start(t);
    sq1.stop(t + 0.1);
    sq2.start(t);
    sq2.stop(t + 0.1);
    
    this.lastNoteEndTime = t + 0.07;
  }

  _playBurst(t) {
    // Two quick notes close together — Thundercat signature
    const f1 = this.rootFreq;
    const f2 = this.rootFreq * Math.pow(2, 3 / 12);
    
    this._playPassingNote(f1, t);
    setTimeout(() => {
      if (this.ctx) this._playPassingNote(f2, this.ctx.currentTime + 0.005);
    }, 35);
  }
}
