// ═══════════════════════════════════════════════════════════════
// TENSE AF — VISUAL AUGMENT PATCH v6
//
// feels unstable. looks unchanged.
// sub-threshold. no additive light. everything desynced.
// ═══════════════════════════════════════════════════════════════

const visualPatch = (() => {

  // ── STATE ────────────────────────────────────────────────────
  let canvas, ctx2d;
  let raf;
  let lastInteraction = 0;
  let interactionPulse = 0;
  let interactionHeld = false;
  let interactionHoldTimer = null;
  let focusEl = null;
  let focusWarpAlpha = 0;
  let trailFrames = [];

  // Desynced phase oscillators — different seeds, no common factor
  let phaseA = Math.random() * Math.PI * 2;  // luminance body   ~8.3s
  let phaseB = Math.random() * Math.PI * 2;  // luminance card   ~11.7s
  let phaseC = Math.random() * Math.PI * 2;  // shimmer          ~5.1s
  let phaseD = Math.random() * Math.PI * 2;  // grain            ~7.9s
  let phaseE = Math.random() * Math.PI * 2;  // chroma           ~13.3s

  // Discontinuity state
  let discoFrozen = null;     // which var is frozen, null = none
  let discoFreezeEnd = 0;
  let discoNextAt = Date.now() + _randInt(12000, 25000);
  let frozenValue = 0;

  // Audio
  let audioAnalyser = null;
  let audioDataArray = null;
  let audioBands = { low: 0, mid: 0, high: 0 };

  // ── HELPERS ──────────────────────────────────────────────────
  function _rand(min, max) { return min + Math.random() * (max - min); }
  function _randInt(min, max) { return Math.floor(_rand(min, max)); }
  function _clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  function _ctx() { return (typeof audio !== 'undefined' && audio.ctx) ? audio.ctx : null; }

  // ── CANVAS ───────────────────────────────────────────────────
  // blend: normal. op: multiply. opacity 0.015–0.03. no additive light.
  function _buildCanvas() {
    canvas = document.createElement('canvas');
    canvas.id = 'vp-canvas';
    canvas.style.cssText = `
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 3;
      mix-blend-mode: normal;
      opacity: 0.022;
    `;
    document.body.appendChild(canvas);
    ctx2d = canvas.getContext('2d');
    ctx2d.globalCompositeOperation = 'multiply';
    _resize();
    window.addEventListener('resize', _resize);
  }

  function _resize() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx2d.globalCompositeOperation = 'multiply';
  }

  // ── AUDIO ANALYSER ───────────────────────────────────────────
  // Dead-end tap. No output connected back into signal path.
  function _hookAudio() {
    const check = setInterval(() => {
      const c = _ctx();
      if (!c || !audio.master) return;
      try {
        audioAnalyser = c.createAnalyser();
        audioAnalyser.fftSize = 64;
        audioAnalyser.smoothingTimeConstant = 0.9;
        audio.master.connect(audioAnalyser);
        audioDataArray = new Uint8Array(audioAnalyser.frequencyBinCount);
        clearInterval(check);
      } catch(e) { clearInterval(check); }
    }, 600);
  }

  function _readAudio() {
    if (!audioAnalyser || !audioDataArray) return;
    audioAnalyser.getByteFrequencyData(audioDataArray);
    const len = audioDataArray.length;
    const t = Math.floor(len / 3);
    let lo = 0, mi = 0, hi = 0;
    for (let i = 0; i < t; i++) lo += audioDataArray[i];
    for (let i = t; i < t*2; i++) mi += audioDataArray[i];
    for (let i = t*2; i < len; i++) hi += audioDataArray[i];
    const s = 1 / (t * 255);
    // Damped ≤20% influence + ±0.02 noise drift
    const noise = () => _rand(-0.02, 0.02);
    audioBands.low  = _clamp(lo * s * 0.2 + noise(), 0, 0.22);
    audioBands.mid  = _clamp(mi * s * 0.2 + noise(), 0, 0.22);
    audioBands.high = _clamp(hi * s * 0.2 + noise(), 0, 0.22);
  }

  // ── INTERACTIONS ─────────────────────────────────────────────
  function _hookInteractions() {
    document.addEventListener('pointerdown', (e) => {
      lastInteraction = Date.now();
      focusEl = e.target.closest('.option-btn, .q-card, .btn-primary');
      focusWarpAlpha = 1;

      // Interaction pulse: overshoot slightly, decay uneven
      interactionPulse = 1.08;  // overshoot
      clearTimeout(interactionHoldTimer);
      interactionHeld = false;

      // 20% chance: hold at ~0.2 for ~120ms before final decay
      if (Math.random() < 0.2) {
        interactionHeld = true;
        interactionHoldTimer = setTimeout(() => {
          interactionHeld = false;
        }, 120);
      }

      _captureTrail();
    });
  }

  // ── TEMPORAL TRAIL ───────────────────────────────────────────
  // Dark trace. opacity <4%. decay <=120ms. no visible streaks.
  function _captureTrail() {
    if (!focusEl) return;
    const rect = focusEl.getBoundingClientRect();
    trailFrames.push({ rect: { ...rect }, t: Date.now() });
    if (trailFrames.length > 2) trailFrames.shift();
  }

  function _drawTrails(now) {
    trailFrames = trailFrames.filter(f => now - f.t < 120);
    for (const f of trailFrames) {
      const age = (now - f.t) / 120;
      const alpha = 0.035 * (1 - age);  // <4%, multiply blend darkens
      ctx2d.save();
      ctx2d.globalAlpha = alpha;
      ctx2d.fillStyle = 'rgba(0,0,0,1)';  // dark trace, multiply → subtle shadow
      const r = f.rect;
      ctx2d.fillRect(r.left, r.top, r.width, r.height);
      ctx2d.restore();
    }
  }

  // ── FOCUS WARP ───────────────────────────────────────────────
  // Transient only. Radial on movement. Fade <=300ms. No static vignette.
  function _drawFocusWarp(now) {
    if (!focusEl || focusWarpAlpha <= 0.01) return;
    const since = now - lastInteraction;
    if (since > 300) { focusWarpAlpha = 0; return; }
    focusWarpAlpha = Math.max(0, 1 - since / 300);

    const rect = focusEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const r = Math.max(canvas.width, canvas.height) * 0.75;

    // multiply-mode dark radial — compresses edge brightness ≤1.5%
    const alpha = focusWarpAlpha * 0.015;
    ctx2d.save();
    ctx2d.globalAlpha = 1;
    const grad = ctx2d.createRadialGradient(cx, cy, r * 0.25, cx, cy, r);
    grad.addColorStop(0, 'rgba(255,255,255,0)');   // white = no multiply effect
    grad.addColorStop(1, `rgba(0,0,0,${alpha})`);  // dark edge
    ctx2d.fillStyle = grad;
    ctx2d.fillRect(0, 0, canvas.width, canvas.height);
    ctx2d.restore();
  }

  // ── DISCONTINUITY ────────────────────────────────────────────
  // Every 12–25s: freeze one CSS var for ~120ms, others continue.
  function _tickDiscontinuity(now) {
    if (discoFrozen !== null) {
      if (now > discoFreezeEnd) {
        discoFrozen = null;
        discoNextAt = now + _randInt(12000, 25000);
      }
      return;  // currently frozen — don't unfreeze early
    }
    if (now < discoNextAt) return;

    // Choose one var to freeze
    const vars = ['--vp-luminance', '--vp-shimmer', '--vp-grain', '--vp-chroma'];
    discoFrozen = vars[_randInt(0, vars.length)];
    // Read its current value before freezing
    frozenValue = getComputedStyle(document.documentElement)
                    .getPropertyValue(discoFrozen).trim();
    discoFreezeEnd = now + _randInt(100, 140);
  }

  // ── CSS VAR UPDATE ───────────────────────────────────────────
  function _updateVars(now) {
    const root = document.documentElement.style;
    const cog = (typeof cognitiveState !== 'undefined')
      ? { hesitation: cognitiveState.hesitation || 0,
          confidence: cognitiveState.confidence || 0.4,
          instability: cognitiveState.instability || 0 }
      : { hesitation: 0, confidence: 0.4, instability: 0 };

    // Advance phases — different rates, irrational multiples → never resync
    phaseA += 0.000754;   // ~8.3s at 60fps
    phaseB += 0.000536;   // ~11.7s
    phaseC += 0.001223;   // ~5.1s
    phaseD += 0.000789;   // ~7.9s
    phaseE += 0.000374;   // ~13.3s

    // Non-linear shaping — cube root: slow peaks, sharper troughs
    const shapeA = Math.sign(Math.sin(phaseA)) * Math.pow(Math.abs(Math.sin(phaseA)), 0.55);
    const shapeC = Math.sin(phaseC) * Math.cos(phaseC * 0.73);  // Lissajous-like irregularity

    // LUMINANCE — body and card desynced
    const lumBody = 1 + shapeA * 0.025 + audioBands.low * 0.02;
    const lumCard = 1 + Math.sin(phaseB) * 0.022 + audioBands.low * 0.015;

    // SHIMMER
    const shimBase = (Math.abs(shapeC) * 0.4 + audioBands.mid * 0.3)
                     * (0.5 + cog.instability * 0.5);
    const shimmer = _clamp(shimBase, 0, 0.8);

    // GRAIN
    const grain = 0.045 + Math.sin(phaseD) * 0.012 + audioBands.mid * 0.008;

    // CHROMA — container shift only, move off text
    const chroma = _clamp(
      (interactionPulse > 0.1 ? interactionPulse * 0.4 : 0) + audioBands.high * 0.3,
      0, 0.8
    );

    // Apply discontinuity freeze
    const set = (name, val) => {
      if (discoFrozen === name) {
        root.setProperty(name, frozenValue);
      } else {
        root.setProperty(name, val);
      }
    };

    set('--vp-luminance',      lumBody.toFixed(4));
    set('--vp-luminance-card', lumCard.toFixed(4));
    set('--vp-shimmer',        shimmer.toFixed(4));
    set('--vp-grain',          grain.toFixed(4));
    set('--vp-chroma',         chroma.toFixed(4));
    set('--vp-pulse',          interactionPulse.toFixed(4));
  }

  // ── PULSE DECAY ──────────────────────────────────────────────
  function _decayPulse(now) {
    const since = now - lastInteraction;
    if (interactionHeld && since < 300) {
      // Uneven decay — plateau at ~0.2 for the hold window
      if (interactionPulse > 0.22) {
        interactionPulse = Math.max(0.18, interactionPulse - 0.04);
      }
      return;
    }
    if (since < 500) {
      // Overshoot correction first, then uneven decay
      const raw = 1 - since / 500;
      const uneven = raw * raw * (3 - 2 * raw);  // smoothstep — but we break it
      // Break the curve: random micro-hesitation
      const jitter = Math.random() < 0.05 ? 0.03 : 0;
      interactionPulse = Math.max(0, uneven + jitter);
    } else {
      interactionPulse = 0;
    }
  }

  // ── MAIN LOOP ────────────────────────────────────────────────
  function _tick() {
    raf = requestAnimationFrame(_tick);
    const now = Date.now();

    _readAudio();
    _decayPulse(now);
    _tickDiscontinuity(now);
    _updateVars(now);

    ctx2d.clearRect(0, 0, canvas.width, canvas.height);
    _drawTrails(now);
    _drawFocusWarp(now);
  }

  function init() {
    _buildCanvas();
    _hookAudio();
    _hookInteractions();
    requestAnimationFrame(_tick);
  }

  return { init };

})();

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => visualPatch.init(), 800);
});
