// ═══════════════════════════════════════════════════════════════
// TENSE AF — MODE LAYER v2
//
// Single function. No state. Pure mapping.
//
// INPUT:  cognitiveState, groove axes
// OUTPUT: mode object with full output profiles
//
// Three modes — priority order (first match wins):
//   drift        — instability dominant; system losing coherence
//   surveillance — damage dominant; punishment compounding
//   control      — default; system coherent
//
// Each mode defines:
//   id
//   ui_rules     — delay multiplier, prompt mutation flag
//   audio_profile — filter target, detune, swing, saturation
//   visual_profile — chromatic drift, jitter, vignette
//   feedback_style — how afterflavour behaves on failure
// ═══════════════════════════════════════════════════════════════

const MODES = {

  drift: {
    id: 'drift',
    ui_rules: {
      delay_multiplier: 1.6,
      mutate_prompt: true
    },
    audio_profile: {
      lpf_target: 600,
      detune_range: 18,
      swing_amount: 0.72,
      saturation: 0.8
    },
    visual_profile: {
      chromatic_drift: 1.0,
      jitter: 1.0,
      vignette: 0.55
    },
    feedback_style: {
      reduce_guidance: true,
      increase_ambiguity: true
    }
  },

  surveillance: {
    id: 'surveillance',
    ui_rules: {
      delay_multiplier: 1.3,
      mutate_prompt: false
    },
    audio_profile: {
      lpf_target: 900,
      detune_range: 6,
      swing_amount: 0.58,
      saturation: 0.55
    },
    visual_profile: {
      chromatic_drift: 0.3,
      jitter: 0.0,
      vignette: 0.75
    },
    feedback_style: {
      reduce_guidance: true,
      increase_ambiguity: false
    }
  },

  control: {
    id: 'control',
    ui_rules: {
      delay_multiplier: 1.0,
      mutate_prompt: false
    },
    audio_profile: {
      lpf_target: 1400,
      detune_range: 8,
      swing_amount: 0.64,
      saturation: 0.3
    },
    visual_profile: {
      chromatic_drift: 0.0,
      jitter: 0.0,
      vignette: 0.3
    },
    feedback_style: {
      reduce_guidance: false,
      increase_ambiguity: false
    }
  }

};

// ─────────────────────────────────────────────────────────────
// INFERENCE — pure function, no side effects
// Called once per bar by groove tick.
// ─────────────────────────────────────────────────────────────
function inferMode(cogState, groove) {
  const instab = cogState ? cogState.instability : 0;
  const damage = groove   ? groove.damage        : 0;

  if (instab > 0.55)  return MODES.drift;
  if (damage > 0.45)  return MODES.surveillance;
  return MODES.control;
}

// ─────────────────────────────────────────────────────────────
// FAILURE STATE DETECTION — pure function, no side effects
// Called by groove on each answer commit via cogState.
// Returns failure signal object or null.
// ─────────────────────────────────────────────────────────────
function detectFailureState(cogState) {
  if (!cogState) return null;

  const times = cogState.recentDecisionTimes;
  const aligns = cogState.recentAlignments;

  const repeatedHesitation = cogState.hesitation > 0.65
    && times.length >= 3
    && times.every(t => t > 2200);

  const rapidCorrections = aligns.length >= 4
    && aligns.slice(-4).every(a => a === 'misaligned');

  const longLatency = times.length >= 2
    && times.slice(-2).every(t => t > 4000);

  if (!repeatedHesitation && !rapidCorrections && !longLatency) return null;

  return {
    repeatedHesitation,
    rapidCorrections,
    longLatency,
    lpf_nudge: -200,
    reduce_guidance: true
  };
}

if (typeof window !== 'undefined') {
  window.inferMode          = inferMode;
  window.detectFailureState = detectFailureState;
  window.MODES              = MODES;
}
