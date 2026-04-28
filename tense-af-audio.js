// ═══════════════════════════════════════════════════════════════
// TENSE AF — AUDIO ENGINE v3
// 
// Discipline:
//   - Drums are DRY. No reverb on kick/snare/hats.
//   - No ambient pad. No wash. No Enigma.
//   - Only FX (scratches, ticks) have light reverb.
//   - Bass gets no reverb either — it's part of the pocket.
// 
// Subscribes to cognitiveState:
//   - 'commit'  → triggers LAND or RIDE based on choice+node
//   - 'reveal'  → aligned/misaligned feedback
// ═══════════════════════════════════════════════════════════════

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.muted = false;
    this.running = false;
    this.nodes = {};
    this.groove = null;
    this.bass = null;
  }

  init() {
    if (this.ctx) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      
      // Master
      this.master = this.ctx.createGain();
      this.master.gain.setTargetAtTime(0.3, this.ctx.currentTime, 0.005);
      
      // SOFT CLIP — driven by instability. Clean at 0, crunchy at 1.
      this.drive = this.ctx.createWaveShaper();
      this.drive.curve = this._makeDriveCurve(0);  // starts clean
      this.drive.oversample = '2x';
      this.drive.connect(this.master);
      this.driveAmount = 0;
      
      // Gentle glue compression
      this.masterComp = this.ctx.createDynamicsCompressor();
      this.masterComp.threshold.value = -14;
      this.masterComp.knee.value = 8;
      this.masterComp.ratio.value = 3;
      this.masterComp.attack.value = 0.005;
      this.masterComp.release.value = 0.1;
      this.masterComp.connect(this.drive);  // comp → drive → master
      this.master.connect(this.ctx.destination);
      
      // Light reverb — ONLY for FX bus, not drums
      this.reverb = this._buildReverb();
      this.reverb.output.connect(this.masterComp);
      
      // Stereo width node — sits between comp and master
      // Narrows with stress. mid/side technique via two panners.
      this.stereoWidth = this._buildStereoWidth();
      this.masterComp.disconnect();
      this.masterComp.connect(this.stereoWidth.input);
      this.stereoWidth.output.connect(this.drive);
      this._stereoWidthTarget = 1.0;

      // DRY drum bus — straight to compressor, no reverb
      this.nodes.drums = this.ctx.createGain();
      this.nodes.drums.gain.value = 1.0;   // base — mix hierarchy shifts this dynamically
      this.nodes.drums.connect(this.masterComp);
      
      // DRY bass bus — boosted for the fatter bass tone
      this.nodes.bass = this.ctx.createGain();
      this.nodes.bass.gain.value = 1.35;   // base — mix hierarchy shifts this dynamically
      this.nodes.bass.connect(this.masterComp);

      // Mix hierarchy targets — confidence→bass leads, instability→drums leads
      this._bassGainBase  = 1.35;
      this._drumsGainBase = 1.0;
      this._driveAboveThreshold = false;  // threshold-break tracking

      // SUB BUS — 30–60Hz sine, enveloped (not constant)
      // Gain reduced; triggered per bar downbeat with attack/release envelope.
      this.nodes.sub = this.ctx.createGain();
      this.nodes.sub.gain.value = 0.05;
      this.nodes.sub.connect(this.masterComp);
      this._buildSub();

      // SIREN — DISABLED. Gated out until explicitly reactivated.
      this._sirenOsc  = null;
      this._sirenGain = null;
      this._sirenActive = false;
      // _buildSiren() intentionally not called
      
      // FX bus — with reverb send
      this.nodes.fx = this.ctx.createGain();
      this.nodes.fx.connect(this.masterComp);
      const fxSend = this.ctx.createGain();
      fxSend.gain.value = 0.35;
      this.nodes.fx.connect(fxSend);
      fxSend.connect(this.reverb.input);
      
      // Initialise engines
      this.groove = new GrooveEngine(this.ctx, this.nodes.drums);
      this.bass = new BassEngine(this.ctx, this.nodes.bass);
      this.groove.bassEngine = this.bass;
      this.groove.audioEngine = this;  // allows groove to call triggerSubNote
      
      // Subscribe to cognitive state
      if (typeof cognitiveState !== 'undefined') {
        this.groove.cogState = cognitiveState;
        cognitiveState.subscribe((event, state) => this._onCogStateChange(event, state));
      }
      
      console.log('✓ AudioEngine v3 initialised (dry drums, no pad)');
    } catch (err) {
      console.error('AudioEngine init error:', err);
    }
  }

  // ─────────────────────────────────────
  // STEREO WIDTH — mid/side narrowing
  // input → splitter → [mid+side processing] → merger → output
  // width 1.0 = full stereo, 0.0 = mono
  // ─────────────────────────────────────
  _buildStereoWidth() {
    const input  = this.ctx.createGain();
    const output = this.ctx.createGain();
    // Simple implementation: stereo panner pair
    // L channel pulled toward centre as width decreases
    const splitter = this.ctx.createChannelSplitter(2);
    const merger   = this.ctx.createChannelMerger(2);
    const gainL    = this.ctx.createGain();
    const gainR    = this.ctx.createGain();
    gainL.gain.value = 1.0;
    gainR.gain.value = 1.0;
    input.connect(splitter);
    splitter.connect(gainL, 0);
    splitter.connect(gainR, 1);
    gainL.connect(merger, 0, 0);
    gainR.connect(merger, 0, 1);
    merger.connect(output);
    // Store gainL/gainR for continuous update
    this._widthGainL = gainL;
    this._widthGainR = gainR;
    return { input, output };
  }

  // ─────────────────────────────────────
  // SUB — 30–60Hz sine oscillator
  // Starts silent. Triggered per bar downbeat via triggerSubNote().
  // Attack 0.2s, release 0.3s — not constant amplitude.
  // ─────────────────────────────────────
  _buildSub() {
    if (!this.ctx) return;
    const osc  = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const hpf  = this.ctx.createBiquadFilter();
    hpf.type = 'highpass';
    hpf.frequency.value = 25;
    osc.type = 'sine';
    osc.frequency.value = 40;
    gain.gain.value = 0;  // silent until triggered
    osc.connect(hpf);
    hpf.connect(gain);
    gain.connect(this.nodes.sub);
    osc.start();
    this._subOsc  = osc;
    this._subGain = gain;
  }

  // Called by groove on step 0 (bar downbeat)
  triggerSubNote(freq = 40) {
    if (!this.ctx || !this._subOsc || !this._subGain) return;
    const t       = this.ctx.currentTime;
    const attack  = 0.2;
    const sustain = 0.5;
    const release = 0.3;
    this._subOsc.frequency.setTargetAtTime(freq, t, 0.1);
    this._subGain.gain.cancelScheduledValues(t);
    this._subGain.gain.setTargetAtTime(1.0,   t,                    attack  / 3);
    this._subGain.gain.setTargetAtTime(0.001, t + attack + sustain, release / 3);
    console.log('SUB LEVEL', freq.toFixed(1) + 'Hz');
  }

  // ─────────────────────────────────────
  // SIREN — continuous sine, stress-gated
  // Not event-triggered. State drives it.
  // Appears: stress > 0.6. Fades: stress < 0.45.
  // Long notes (2–6s). Frequency drifts slowly.
  // ─────────────────────────────────────
  _buildSiren() {
    if (!this.ctx) return;
    const osc  = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const lpf  = this.ctx.createBiquadFilter();
    lpf.type = 'lowpass';
    lpf.frequency.value = 1200;
    lpf.Q.value = 0.7;
    osc.type = 'sine';
    osc.frequency.value = 220;
    gain.gain.value = 0;   // starts silent
    osc.connect(lpf);
    lpf.connect(gain);
    gain.connect(this.nodes.fx);  // FX bus — gets light reverb
    osc.start();
    this._sirenOsc  = osc;
    this._sirenGain = gain;
    this._sirenActive = false;
    this._sirenPhase  = 0;   // slow drift oscillator
    this._sirenBaseHz = 220;
    // Start slow drift loop
    this._tickSiren();
  }

  _tickSiren() {
    if (!this.ctx || !this._sirenOsc) return;
    this._sirenPhase += 0.0003;  // ~21s period
    const drift = Math.sin(this._sirenPhase) * 25;  // ±25Hz drift — tightened
    this._sirenOsc.frequency.setTargetAtTime(
      this._sirenBaseHz + drift,
      this.ctx.currentTime,
      2.5  // very slow glide
    );
    setTimeout(() => this._tickSiren(), 500);
  }

  _buildReverb() {
    const input = this.ctx.createGain();
    const output = this.ctx.createGain();
    output.gain.value = 0.45;
    
    const delayTimes = [0.029, 0.037, 0.041, 0.043];
    const decays = [0.62, 0.58, 0.55, 0.52];
    
    const pre = this.ctx.createDelay(0.1);
    pre.delayTime.value = 0.015;
    
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 3800;
    lp.Q.value = 0.4;
    
    input.connect(pre);
    delayTimes.forEach((time, i) => {
      const d = this.ctx.createDelay(0.2);
      d.delayTime.value = time;
      const fb = this.ctx.createGain();
      fb.gain.value = decays[i];
      pre.connect(d);
      d.connect(fb);
      fb.connect(d);
      fb.connect(lp);
    });
    lp.connect(output);
    
    return { input, output };
  }

  _onCogStateChange(event, state) {
    // Audio subscribes to state changes and reacts accordingly.
    // This is the ONLY path from cognition to sound.
    const t = this.ctx ? this.ctx.currentTime : 0;
    const stress = Math.max(0, Math.min(1,
      state.hesitation * 0.4 + state.instability * 0.4 + (1 - state.confidence) * 0.2
    ));

    // SUB — frequency: low stress = 40Hz, high stress = 32Hz (heavier, darker)
    if (this._subOsc && this.ctx) {
      const subHz = 40 - stress * 4;  // floor 36Hz — below this loses clarity
      this._subOsc.frequency.setTargetAtTime(subHz, t, 1.5);
    }

    // SIREN — disabled. Block retained for re-enable later.
    // if (this._sirenGain && this.ctx) { ... }

    // STEREO WIDTH — narrows with stress
    if (this._widthGainL && this._widthGainR && this.ctx) {
      // width 1.0 = full, width ~0.4 at max stress
      const width = 1.0 - stress * 0.6;
      const mono  = (1 - width) * 0.5;
      // L and R both pull toward centre
      this._widthGainL.gain.setTargetAtTime(width + mono, t, 0.5);
      this._widthGainR.gain.setTargetAtTime(width + mono, t, 0.5);
    }

    // ── MIX HIERARCHY SHIFT ──────────────────────────────────────
    // confidence ↑ → bass dominates (earned openness)
    // instability ↑ → drums dominate (system takes over)
    // Range: bass 0.9–1.8×base, drums 0.8–1.4×base
    // Slow time constant — leadership shifts over bars, not beats
    if (this.nodes.bass && this.nodes.drums && this.ctx) {
      const conf  = state.confidence;
      const instab = state.instability;
      // Bass gain: rises with confidence, falls with instability
      const bassGain  = this._bassGainBase  * (0.9 + conf * 0.6 - instab * 0.35);
      // Drums gain: falls with confidence, rises with instability
      const drumsGain = this._drumsGainBase * (0.8 + instab * 0.6 - conf * 0.2);
      this.nodes.bass.gain.setTargetAtTime(
        Math.max(0.4, Math.min(2.2, bassGain)),  t, 1.2);
      this.nodes.drums.gain.setTargetAtTime(
        Math.max(0.5, Math.min(1.8, drumsGain)), t, 1.2);
    }

    // CONTINUOUS SONIC TEXTURE
    // Gain scales with confidence — confident play gets louder/fuller
    // Instability drives distortion — hesitation sounds broken
    if (this.master && this.ctx) {
      const targetGain = 0.22 + state.confidence * 0.14;
      this.master.gain.setTargetAtTime(targetGain, t, 0.3);
    }

    // ── DRIVE — threshold break at instability > 0.65 ────────────
    // Below threshold: smooth curve, clamped at 0.3
    // Crossing threshold: one-time perceptual jump to 0.65 saturation
    // Above threshold: stays saturated until instability drops below 0.5
    // Fix 6: crossing down → decay drive to 0 over ~2s, not instant curve swap
    if (this.drive && this.ctx) {
      const instab = state.instability;
      const crossingUp   = instab > 0.65 && !this._driveAboveThreshold;
      const crossingDown = instab < 0.50 &&  this._driveAboveThreshold;

      if (crossingUp) {
        // Perceptual break — jump straight to heavy saturation
        this._driveAboveThreshold = true;
        this.driveAmount = 0.65;
        this.drive.curve = this._makeDriveCurve(0.65);
        this._lastCurveTime = (typeof performance !== 'undefined' ? performance.now() : Date.now());
      } else if (crossingDown) {
        // Release: decay drive amount toward instability over ~2s
        // Each state update nudges driveAmount down — gradual, not snapping
        this._driveAboveThreshold = false;
        this.driveAmount = this.driveAmount * 0.7 + Math.min(0.3, instab) * 0.3;
        this.drive.curve = this._makeDriveCurve(this.driveAmount);
        this._lastCurveTime = (typeof performance !== 'undefined' ? performance.now() : Date.now());
      } else if (!this._driveAboveThreshold) {
        // Normal below-threshold behaviour — smooth curve rebuild
        const newDrive = Math.min(0.3, instab);
        const now = (typeof performance !== 'undefined' ? performance.now() : Date.now());
        const timeForDrift = !this._lastCurveTime || (now - this._lastCurveTime) > 900;
        if (Math.abs(newDrive - this.driveAmount) > 0.08 || (newDrive > 0.15 && timeForDrift)) {
          this.driveAmount = newDrive;
          this.drive.curve = this._makeDriveCurve(newDrive);
          this._lastCurveTime = now;
        }
      }
      // Above threshold: no curve rebuild — stays at 0.65 until crossingDown
    }
    
    if (event === 'prompt-begin') {
      if (this.groove) this.groove.resetMode();
    }
    
    if (event === 'commit') {
      if (this.groove) this.groove.tick_sound();
    }
    
    if (event === 'reveal') {
      setTimeout(() => {
        if (this.groove) this.groove.resetMode();
      }, 2000);
    }
  }

  // WaveShaper curve — ASYMMETRIC soft clip with DRIFT.
  // Bias moves over real time (not just state), so distortion
  // wobbles slightly. Human perception notices movement more than state.
  _makeDriveCurve(amount) {
    const samples = 2048;
    const curve = new Float32Array(samples);
    const k = amount * amount * 40;
    // Time-varying bias — drifts even when amount is static
    const drift = Math.sin((typeof performance !== 'undefined' ? performance.now() : Date.now()) * 0.002) * 0.1;
    const bias = amount * (0.2 + drift);
    const normalize = Math.tanh(1 + k);
    for (let i = 0; i < samples; i++) {
      const x = (i * 2) / samples - 1;
      if (amount < 0.01) {
        curve[i] = x;
      } else {
        curve[i] = Math.tanh((x + bias) * (1 + k)) / normalize;
      }
    }
    return curve;
  }

  start() {
    if (this.running) return;
    if (this.groove) this.groove.start();
    this.running = true;
  }

  stop() {
    if (this.groove) this.groove.stop();
    this.running = false;
  }

  toggleMute() {
    this.muted = !this.muted;
    if (!this.master) return;
    if (this.muted) {
      this.master.gain.setTargetAtTime(0, this.ctx.currentTime, 0.05);
      if (this.groove) this.groove.stop();
    } else {
      this.master.gain.setTargetAtTime(0.3, this.ctx.currentTime, 0.05);
      if (this.groove) this.groove.start();
    }
  }

  // ─────────────────────────────────────
  // TACTILE TICK on touch-down
  // ─────────────────────────────────────
  tick() {
    if (!this.ctx || this.muted || !this.groove) return;
    this.groove.tick_sound();
  }

  // ─────────────────────────────────────
  // LAND / RIDE triggers (called from content layer)
  // ─────────────────────────────────────
  land() {
    if (this.groove) this.groove.triggerLand();
  }
  
  ride() {
    if (this.groove) this.groove.triggerRide();
  }

  // ─────────────────────────────────────
  // MISALIGNMENT: groove stutters briefly
  // ─────────────────────────────────────
  stumble() {
    if (!this.ctx || this.muted || !this.groove) return;
    // Induce snare drift + temporarily cut kick
    this.groove.onDecisionLoss();
    this.groove.onDecisionLoss();
    this.groove.onDecisionLoss();
  }

  // ─────────────────────────────────────
  // Decision-loss (hesitation drift)
  // ─────────────────────────────────────
  onInputDecisionLoss() {
    if (this.groove) this.groove.onDecisionLoss();
  }

  // ─────────────────────────────────────
  // ─────────────────────────────────────
  // SUMMER MADNESS SIREN — streak of 10
  // Slow portamento synth sweep — Moog-ish, not a test tone.
  // Sawtooth through resonant LPF gives it body and harmonic character.
  // Two voices slightly detuned. LFO on frequency (not detune param).
  // Sweeps from A2 (110Hz) up to E4 (330Hz) over 3 seconds.
  // ─────────────────────────────────────
  triggerSiren() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;

    // Total duration: 16s. Four octaves: A1 (55Hz) → A5 (880Hz).
    // Low in the mix — sits underneath the groove, not over it.
    const duration   = 16.0;   // full sweep duration
    const fadeIn     = 1.2;    // slow fade in
    const fadeOut    = 2.5;    // long tail
    const holdEnd    = duration - fadeOut;
    const peakGain   = 0.07;   // low in the mix
    const stopTime   = t + duration + 0.5;

    [0, 4].forEach((detuneHz, i) => {
      const osc    = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const lfo    = this.ctx.createOscillator();
      const lfoAmt = this.ctx.createGain();
      const g      = this.ctx.createGain();

      // Sawtooth — harmonics give it body across the full range
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(55 + detuneHz, t);
      osc.frequency.exponentialRampToValueAtTime(880 + detuneHz, t + duration);

      // Resonant lowpass tracks the sweep — filter opens as pitch climbs
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(150, t);
      filter.frequency.exponentialRampToValueAtTime(3500, t + duration);
      filter.Q.value = 5;

      // Very slow LFO wobble — barely perceptible at this speed, adds life
      lfo.type = 'sine';
      lfo.frequency.value = 0.4 + i * 0.15;   // very slow — ~0.4Hz and 0.55Hz
      lfoAmt.gain.value = 2.5;                  // ±2.5Hz modulation only
      lfo.connect(lfoAmt);
      lfoAmt.connect(osc.frequency);

      // Envelope — slow fade in, hold, long fade out
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(peakGain, t + fadeIn);
      g.gain.setValueAtTime(peakGain, t + holdEnd);
      g.gain.exponentialRampToValueAtTime(0.001, t + duration);

      osc.connect(filter);
      filter.connect(g);
      g.connect(this.nodes.fx);
      lfo.start(t);
      osc.start(t);
      lfo.stop(stopTime);
      osc.stop(stopTime);
    });
  }

  // ─────────────────────────────────────
  // BREAKBEAT — streak of 5
  // One bar of Amen-style break feel, then groove resumes.
  // Schedules 16 steps of a denser kick/snare/hat pattern directly.
  // Does not interrupt the groove engine — plays over it, then stops.
  // ─────────────────────────────────────
  triggerBreakbeat() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime + 0.05;
    // Step duration at 88 BPM, 16th notes
    const step = (60 / 88) / 4;

    // Amen-ish grid (16 steps):
    // Kick:  1, -, -, -, -, -, 1, -, -, 1, -, -, -, -, -, -
    // Snare: -, -, -, -, 1, -, -, -, -, -, -, -, 1, -, -, -
    // Hat:   1, -, 1, 1, -, 1, -, 1, 1, -, 1, 1, -, 1, -, 1  (busy, uneven)
    const kicks  = [0, 6, 9];
    const snares = [4, 12];
    const hats   = [0, 2, 3, 5, 7, 8, 10, 11, 13, 15];

    kicks.forEach(s => {
      const kt = t + s * step;
      if (this.groove) this.groove.playKick(kt, s === 0 ? 1.0 : 0.82);
    });

    snares.forEach(s => {
      const st = t + s * step + 0.020;
      if (this.groove) this.groove.playSnare(st, s === 4 ? 0.95 : 0.75);
    });

    hats.forEach((s, i) => {
      const ht = t + s * step;
      const vel = (i % 3 === 0) ? 0.12 : 0.07;
      if (this.groove) this.groove.playHat(ht, vel);
    });
  }

  // FX (optional reveals — scratches)
  // ─────────────────────────────────────
  scratch() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    const f = this.ctx.createBiquadFilter();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(340, t);
    o.frequency.linearRampToValueAtTime(110, t + 0.1);
    f.type = 'bandpass';
    f.frequency.value = 1400;
    f.Q.value = 2.5;
    g.gain.setValueAtTime(0.14, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
    o.connect(f);
    f.connect(g);
    g.connect(this.nodes.fx);
    o.start(t);
    o.stop(t + 0.15);
  }
}
