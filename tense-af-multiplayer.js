// ═══════════════════════════════════════════════════════════════
// TENSE AF — MULTIPLAYER FIELD ENGINE
//
// MULTIPLAYER_MODE = FIELD_BASED
//
// Architecture:
//   LOCAL:   input → signal → field → audio + UI
//   NETWORK: signal → send (6–8hz)
//            receive → rolling buffer → aggregate → field
//
// fieldState = { tempo, clarity, stability, tension }
// drives: BPM, swing, filterCutoff, bassDetune, inputDelay, feedbackDelay
//
// HARD CONSTRAINTS (from spec):
//   NO randomness
//   ALL effects input-correlated
//   NO player visibility layer
//   NO perfect sync across clients
//   AUDIO unaffected by perceptual gate
//   input never blocked
// ═══════════════════════════════════════════════════════════════

class MultiplayerField {
  constructor() {
    // Transport adapter — set via init()
    this._transport = null;
    this._active    = false;

    // Rolling signal buffer — one entry per received signal per player
    // keyed by playerId, value = most recent playerSignal
    this._buffer = new Map();

    // Local player signal (current answer in progress)
    this._localSignal = {
      speed:      1500,
      accuracy:   1,
      streak:     0,
      hesitation: 0
    };

    // Derived field state
    this.fieldState = {
      tempo:     1.0,
      clarity:   1.0,
      stability: 1.0,
      tension:   0.0
    };

    // Locked parameters
    this._TENSION_LERP       = 0.18;
    this._PERCEPTUAL_THRESH  = 0.01;
    this._TEMPO_RANGE        = [0.9, 1.1];
    this._CLARITY_RANGE      = [0.85, 1.0];
    this._STABILITY_RANGE    = [0.9, 1.0];

    // Previous field for lerp and perceptual gate
    this._prevField = { ...this.fieldState };
    this._prevTension = 0;

    // Clock — drift-safe
    this._prevTime     = performance.now();
    this._effectiveTime = 0;

    // Smoothed median for fastCorrectRate
    this._smoothedMedian = 1500;

    // Send timer
    this._sendTimer = null;

    // UI callback — set by UI layer to receive field updates
    this.onFieldUpdate = null;
  }

  // ─────────────────────────────────────────────────────────────
  // INIT — pass a transport adapter and optional roomId
  // ─────────────────────────────────────────────────────────────
  init(adapter, roomId) {
    this._transport = adapter;
    this._transport.onReceive((peerId, signal) => this._onSignalReceived(peerId, signal));
    this._transport.connect(roomId);

    this._active = true;
    this._startSendLoop();
    this._startFieldLoop();

    console.log(`[field] Multiplayer active. Room: ${roomId}`);
  }

  deactivate() {
    this._active = false;
    if (this._sendTimer)  clearInterval(this._sendTimer);
    if (this._fieldTimer) clearInterval(this._fieldTimer);
    if (this._transport)  this._transport.disconnect();
  }

  // ─────────────────────────────────────────────────────────────
  // SIGNAL — called by UI on each answer commit
  // ─────────────────────────────────────────────────────────────
  recordAnswer(speed, accuracy, streak, hesitation) {
    this._localSignal = {
      speed:      Math.round(speed),
      accuracy:   accuracy ? 1 : 0,
      streak:     streak,
      hesitation: Math.round(hesitation)
    };
    // Include local signal in own buffer immediately
    this._buffer.set('__local__', this._localSignal);
  }

  // ─────────────────────────────────────────────────────────────
  // NETWORK — send at 6–8hz, receive → buffer
  // ─────────────────────────────────────────────────────────────
  _startSendLoop() {
    // 7hz ≈ 143ms interval
    this._sendTimer = setInterval(() => {
      if (this._transport) this._transport.send(this._localSignal);
    }, 143);
  }

  _onSignalReceived(peerId, signal) {
    if (!signal || typeof signal.speed !== 'number') return;
    this._buffer.set(peerId, signal);
  }

  // ─────────────────────────────────────────────────────────────
  // FIELD LOOP — aggregate buffer → fieldState → push to engine
  // Runs at ~30hz (every 33ms). Audio unaffected by perceptual gate.
  // ─────────────────────────────────────────────────────────────
  _startFieldLoop() {
    this._fieldTimer = setInterval(() => {
      this._updateClock();
      const newField = this._aggregate();

      // AUDIO — always update (spec: AUDIO = unaffected by gate)
      this._pushToAudio(newField);

      // UI — perceptual gate suppresses render when delta is tiny
      const delta = this._perceptualDelta(this._prevField, newField);
      if (delta >= this._PERCEPTUAL_THRESH) {
        this._prevField = { ...newField };
        this.fieldState = newField;
        if (this.onFieldUpdate) this.onFieldUpdate(newField);
      } else {
        // Store field without triggering UI
        this.fieldState = newField;
      }
    }, 33);
  }

  // ─────────────────────────────────────────────────────────────
  // AGGREGATE — spec implementation, exact
  // ─────────────────────────────────────────────────────────────
  _aggregate() {
    const signals = Array.from(this._buffer.values());
    const N = Math.max(signals.length, 1);

    // ── WEIGHTED AGGREGATION ──────────────────────────────────
    let weightedSpeed      = 0;
    let weightedHesitation = 0;
    let weightedAccuracy   = 0;
    let weightSum          = 0;

    const allSpeeds      = [];
    const allHesitations = [];

    for (const s of signals) {
      const confidence   = Math.min(Math.log2((s.streak || 0) + 1) * 0.3, 1);
      const activeWeight = s.speed < 2500 ? 1 : 0.3;
      const w            = confidence * activeWeight;

      weightedSpeed      += s.speed      * w;
      weightedHesitation += s.hesitation * w;
      weightedAccuracy   += s.accuracy   * w;
      weightSum          += w;

      allSpeeds.push(s.speed);
      allHesitations.push(s.hesitation);
    }

    // Guard: prevent collapse under low participation
    weightSum = Math.max(weightSum, 0.001);

    const avgSpeed       = weightedSpeed      / weightSum;
    const hesitationAvg  = weightedHesitation / weightSum;
    const errorRate      = 1 - (weightedAccuracy / weightSum);

    // ── FAST CORRECT RATE ─────────────────────────────────────
    const medianSpeed = _median(allSpeeds);
    this._smoothedMedian = _lerp(this._smoothedMedian, medianSpeed, 0.2);
    const fastThreshold  = Math.min(this._smoothedMedian * 0.75, 900);
    let fastCorrectCount = 0;
    for (const s of signals) {
      if (s.accuracy === 1 && s.speed < fastThreshold) fastCorrectCount++;
    }
    const fastCorrectRate = fastCorrectCount / N;

    // ── VARIANCE ─────────────────────────────────────────────
    const rawVariance    = _variance(_flattenSignals(signals));
    const signalVariance = _variance(allSpeeds) * 0.6
                         + _variance(allHesitations) * 0.4;

    // ── TENSION ──────────────────────────────────────────────
    const normVar = _clamp((rawVariance - 0) / (2000000 - 0), 0, 1);
    const tension = _lerp(this._prevTension, normVar, this._TENSION_LERP);
    this._prevTension = tension;

    // ── FIELD STATE ──────────────────────────────────────────
    const tempo = _clamp(
      1 - (hesitationAvg * 0.00005) + (fastCorrectRate * 0.02),
      this._TEMPO_RANGE[0], this._TEMPO_RANGE[1]
    );
    const clarity = _clamp(
      1 - (errorRate * 0.1),
      this._CLARITY_RANGE[0], this._CLARITY_RANGE[1]
    );
    const stability = _clamp(
      1 - (signalVariance * 0.1),
      this._STABILITY_RANGE[0], this._STABILITY_RANGE[1]
    );

    return { tempo, clarity, stability, tension };
  }

  // ─────────────────────────────────────────────────────────────
  // CLOCK — drift-safe, spec-compliant
  // HOST_AUTHORITY = baseTime only
  // FIELD_MODULATES = rate, not scale
  // ─────────────────────────────────────────────────────────────
  _updateClock() {
    const now       = performance.now();
    const deltaTime = (now - this._prevTime) * this.fieldState.tempo;
    this._effectiveTime += deltaTime;
    this._prevTime = now;
  }

  // ─────────────────────────────────────────────────────────────
  // PUSH TO AUDIO — drives groove params directly
  // No event triggers. Continuous modulation only.
  //
  //   BPM     = baseBPM * tempo
  //   swing   = baseSwing + hesitationAvg * 0.0001
  //   lpf     -= errorRate * 200
  //   detune  += tension * smallRange
  // ─────────────────────────────────────────────────────────────
  _pushToAudio(field) {
    if (typeof audio === 'undefined' || !audio.groove) return;
    const groove = audio.groove;

    // BPM — tempo modulates groove interval
    const baseBPM = 88;
    const targetBPM = baseBPM * field.tempo;
    groove.setTempo(targetBPM);

    // Swing — hesitation widens
    // Re-derive hesitationAvg from buffer for swing (local value)
    const signals = Array.from(this._buffer.values());
    let hesSum = 0;
    for (const s of signals) hesSum += s.hesitation;
    const hesitationAvg = signals.length ? hesSum / signals.length : 0;
    const baseSwing = 0.64;
    groove._swingTarget = _clamp(baseSwing + hesitationAvg * 0.0001, 0.54, 0.72);

    // Filter — clarity drives LPF target (errorRate = 1 - clarity + clarity_floor adj)
    const errorRate = 1 - (field.clarity - 0.85) / 0.15;  // invert clarity back to errorRate
    groove._fieldLpfOffset = -(errorRate * 200);

    // Detune — tension drives bass detune range
    const smallRange = 4;  // max ±4 cents of field influence
    groove._fieldDetuneOffset = field.tension * smallRange;
  }

  // ─────────────────────────────────────────────────────────────
  // UI PARAMS — called by UI to get field-derived delays
  // Never blocks input.
  // ─────────────────────────────────────────────────────────────
  getUIParams() {
    const f = this.fieldState;
    return {
      // inputDelay: easeOutQuad(1 - stability) * 40ms
      inputDelay:    _easeOutQuad(1 - f.stability) * 40,
      // feedbackDelay: tension * 120ms * (1/tempo)
      feedbackDelay: f.tension * 120 * (1 / Math.max(f.tempo, 0.01))
    };
  }

  // ─────────────────────────────────────────────────────────────
  // PERCEPTUAL GATE — delta across field dimensions
  // ─────────────────────────────────────────────────────────────
  _perceptualDelta(prev, next) {
    return Math.abs(next.tempo     - prev.tempo)     * 0.4
         + Math.abs(next.stability - prev.stability) * 0.3
         + Math.abs(next.clarity   - prev.clarity)   * 0.1
         + Math.abs(next.tension   - prev.tension)   * 0.6;
  }

  // playerCount — display only.
  // Aggregation does NOT depend on this. Not used for weighting,
  // timing, or effect scaling. Best-effort estimate only.
  get playerCount() {
    return this._transport ? this._transport.playerCount : 1;
  }
}

// ─────────────────────────────────────────────────────────────
// PURE HELPERS — no state, no randomness
// ─────────────────────────────────────────────────────────────
function _clamp(v, lo, hi)   { return Math.max(lo, Math.min(hi, v)); }
function _lerp(a, b, t)      { return a + (b - a) * t; }
function _easeOutQuad(t)     { return t * (2 - t); }

function _median(arr) {
  if (!arr.length) return 0;
  const s = [...arr].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

function _variance(arr) {
  if (arr.length < 2) return 0;
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  return arr.reduce((sum, v) => sum + (v - mean) ** 2, 0) / arr.length;
}

function _flattenSignals(signals) {
  // Returns a flat numeric vector across all signal dimensions for rawVariance
  const out = [];
  for (const s of signals) {
    out.push(s.speed, s.accuracy * 1000, s.streak * 100, s.hesitation);
  }
  return out;
}

// ─────────────────────────────────────────────────────────────
// SINGLETON
// ─────────────────────────────────────────────────────────────
const multiplayerField = new MultiplayerField();

if (typeof window !== 'undefined') {
  window.multiplayerField = multiplayerField;
  window.MultiplayerField = MultiplayerField;
}
