// ═══════════════════════════════════════════════════════════════
// TENSE AF — SEMANTIC LAYER
//
// Infers semantic tags from question data at question-load time.
// No NLP. Pattern match on pack id, round id, context string.
//
// Output:
//   semantic = {
//     tense:    'past' | 'present' | 'future',
//     modality: 'certain' | 'uncertain' | 'conditional',
//     agency:   'active' | 'passive',
//     polarity: 'positive' | 'negative',
//     structure: 'simple' | 'complex'
//   }
//
// Audio mapping (applied in groove._updateContinuous):
//   tense     → time feel (drag / neutral / push)
//   modality  → harmony (stable / extended / suspended)
//   agency    → attack clarity (full / reduced)
//   polarity  → tonal tilt (high-mid / low-mid)
//   structure → groove complexity gate (minimal / ghost notes)
//
// CONSTRAINT: semantics modulate within bounds only.
// They never override groove lock. Max influence: ±15% on any param.
// ═══════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────
// PACK → TENSE MAP
// Derived from pack id. Round id refines where needed.
// ─────────────────────────────────────────────────────────────
const PACK_TENSE = {
  'present-progressive': 'present',
  'present-simple':      'present',
  'past-simple':         'past',
  'time-in-motion':      'past',      // primary: past progressive
  'open-or-closed':      'present',   // present perfect = present relevance
  'voice-and-agency':    'present',
  'general-patterns':    'present',
  'narrative-media':     'past',
  'node-3':              'present',
  'passive-voice-2':     'past',
  'agency-distortion':   'past',
  'past-perfect':        'past',
  'past-perf-prog':      'past',
  'passive-advanced':    'past',
  'mixed-tenses':        'present',   // varied — neutral
  'conditionals-structure': 'future', // conditional = future-oriented
  'future-forms':        'future',
  'reported-speech':     'past',
  'wish-regret':         'present',   // wish = dissatisfied with now
  'power':               'past'
};

// Round-level overrides — more specific than pack
const ROUND_TENSE = {
  'tim-will':        'future',
  'tim-going-to':    'future',
  'tim-arrangements':'future',
  'tim-discrimination':'future',
  'ws-past':         'past',
  'ws-future':       'future',
  'ws-ifonly':       'past',
  'fut-will':        'future',
  'fut-goingto':     'future',
  'fut-arrange':     'future',
  'fut-timetable':   'future',
  'fut-choice':      'future',
  'cond-second':     'future',
  'cond-third':      'past',
  'cond2-second':    'future',
  'cond2-third':     'past'
};

// ─────────────────────────────────────────────────────────────
// MODALITY INFERENCE
// Pack/round semantics + context text signals
// ─────────────────────────────────────────────────────────────
const PACK_MODALITY = {
  'conditionals-structure': 'conditional',
  'wish-regret':            'conditional',
  'passive-advanced':       'uncertain',   // modal passive
  'mixed-tenses':           'uncertain',
  'narrative-media':        'certain',     // reporting = assertion
  'agency-distortion':      'certain',
  'reported-speech':        'uncertain',   // claimed/insisted = contested
  'future-forms':           'uncertain'    // futures are predictions
};

const ROUND_MODALITY = {
  'cond-second':   'conditional',
  'cond-third':    'conditional',
  'cond2-second':  'conditional',
  'cond2-third':   'conditional',
  'cond-mixed':    'conditional',
  'cond2-mixed':   'conditional',
  'ws-present':    'conditional',
  'ws-past':       'conditional',
  'ws-future':     'conditional',
  'ws-ifonly':     'conditional',
  'rsp-frame':     'uncertain',
  'rsp-verbs':     'uncertain',
  'passa-modal':   'uncertain',
  'passa-impersonal': 'uncertain',
  'tim-will':      'uncertain',
  'narr-announce': 'certain',
  'ag-surface':    'certain'
};

// Context text signals — scanned for modality refinement
const MODALITY_SIGNALS = {
  conditional: ['if ', 'unless ', 'provided ', 'wish ', 'if only ', 'would have', 'could have', 'might have'],
  uncertain:   ['might', 'maybe', 'probably', 'perhaps', 'claimed', 'insisted', 'suggested', 'allegedly'],
  certain:     ['confirmed', 'showed', 'proved', 'acknowledged', 'admitted', 'was', 'were']
};

// ─────────────────────────────────────────────────────────────
// AGENCY INFERENCE — passive vs active round signals
// ─────────────────────────────────────────────────────────────
const PASSIVE_ROUNDS = new Set([
  'voa-form', 'voa-agent', 'voa-frame',
  'pass2-form', 'pass2-agency', 'pass2-frame',
  'passa-perfect', 'passa-modal', 'passa-impersonal', 'passa-framing',
  'ag-vanish', 'pw-focus',
  'pv-form', 'pv-agency', 'pv-frame'
]);
const ACTIVE_ROUNDS = new Set([
  'ag-surface', 'ag-frame',
  'ps-regular', 'ps-irregular', 'ps-questions',
  'papf-form', 'papf-sequence'
]);

// ─────────────────────────────────────────────────────────────
// POLARITY INFERENCE — context text signals
// ─────────────────────────────────────────────────────────────
const NEGATIVE_SIGNALS = [
  "wasn't", "weren't", "didn't", "doesn't", "don't", "hadn't", "couldn't",
  "without", "never", "no ", "not ", "nobody", "nothing", "refused",
  "denied", "rejected", "cut", "destroyed", "lost", "broken", "failed",
  "deported", "suppressed", "disappeared", "died", "collapsed"
];

// ─────────────────────────────────────────────────────────────
// STRUCTURE INFERENCE — complexity signals in text
// ─────────────────────────────────────────────────────────────
const COMPLEX_SIGNALS = [
  ', which ', ', who ', ', when ', ', because ', ', although ', ', before ',
  ', after ', ', until ', ', so that ', 'not only', 'both '
];

// ─────────────────────────────────────────────────────────────
// MAIN FUNCTION
// ─────────────────────────────────────────────────────────────
function analyseSemantic(question, packId, roundId) {
  const ctx    = (question.context || '').toLowerCase();
  const text   = (question.text    || '').toLowerCase();
  const combined = ctx + ' ' + text;

  // ── TENSE ──
  let tense = ROUND_TENSE[roundId]
           || PACK_TENSE[packId]
           || 'present';

  // ── MODALITY ──
  let modality = ROUND_MODALITY[roundId]
              || PACK_MODALITY[packId]
              || 'certain';

  // Text scan refinement — overrides pack default if strong signal
  if (modality === 'certain') {
    for (const sig of MODALITY_SIGNALS.conditional) {
      if (combined.includes(sig)) { modality = 'conditional'; break; }
    }
  }
  if (modality === 'certain') {
    for (const sig of MODALITY_SIGNALS.uncertain) {
      if (combined.includes(sig)) { modality = 'uncertain'; break; }
    }
  }

  // ── AGENCY ──
  let agency = 'active';
  if (PASSIVE_ROUNDS.has(roundId)) agency = 'passive';
  else if (ACTIVE_ROUNDS.has(roundId)) agency = 'active';
  else {
    // Text signal: passive constructions
    if (combined.includes(' was ') && combined.includes('by ')) agency = 'passive';
    else if (combined.includes(' were ') && combined.includes('by ')) agency = 'passive';
    else if (combined.includes('being ') || combined.includes('been ')) {
      // Only flag as passive if no active subject before it
      const hasBeenPassive = /\b(is|was|were|are|been)\s+\w+ed\b/.test(combined);
      if (hasBeenPassive) agency = 'passive';
    }
  }

  // ── POLARITY ──
  let polarity = 'positive';
  let negCount = 0;
  for (const sig of NEGATIVE_SIGNALS) {
    if (combined.includes(sig)) negCount++;
  }
  if (negCount >= 2) polarity = 'negative';

  // ── STRUCTURE ──
  let structure = 'simple';
  let complexCount = 0;
  for (const sig of COMPLEX_SIGNALS) {
    if (combined.includes(sig)) complexCount++;
  }
  // Long context or multiple clause signals = complex
  if (complexCount >= 1 || ctx.length > 80) structure = 'complex';

  return { tense, modality, agency, polarity, structure };
}

// ─────────────────────────────────────────────────────────────
// AUDIO INFLUENCE MAP
// Returns modulation deltas — bounded, additive, never overriding.
//
// All values are fractional offsets from baseline.
// Groove applies these as lerp targets within its own bounds.
// ─────────────────────────────────────────────────────────────
function semanticToAudioInfluence(semantic) {
  if (!semantic) return null;

  return {
    // TENSE → time feel
    // past: +drag (bass slightly behind beat, -10ms offset)
    // present: tightest (no offset change)
    // future: +push (slight forward, +5ms)
    timingOffset: semantic.tense === 'past'    ?  0.10   // 10% more behind-beat
                : semantic.tense === 'future'  ? -0.05   // 5% less drag = forward
                : 0,

    // MODALITY → harmony character
    // certain: stable root voicings, no extensions
    // uncertain: allow 9th/11th extensions in chord voicings
    // conditional: suspend resolution (sus2/sus4 tendency)
    harmonyMode: semantic.modality,   // passed through to chord engine

    // AGENCY → attack clarity
    // active: full attack on bass/drums (1.0 = no change)
    // passive: softer edges (-15% attack gain on bass)
    attackMult: semantic.agency === 'passive' ? 0.85 : 1.0,

    // POLARITY → tonal tilt
    // positive: +5% high-mid presence on FX/hat bus
    // negative: -5% high-mid, low-mid emphasis
    tonalTilt: semantic.polarity === 'negative' ? -0.05 : 0.05,

    // STRUCTURE → groove complexity gate
    // simple: suppress ghost notes (complexity < threshold)
    // complex: allow full ghost note and variation passes
    complexityGate: semantic.structure === 'complex' ? 1.0 : 0.5
  };
}

if (typeof window !== 'undefined') {
  window.analyseSemantic       = analyseSemantic;
  window.semanticToAudioInfluence = semanticToAudioInfluence;
}
