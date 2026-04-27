// ═══════════════════════════════════════════════════════════════
// TENSE AF — PATCH LAYER (CLEARED)
//
// Previously: parallel audio engine with independent state.
// Violated: EVENT_TRIGGERS, RANDOMNESS_OUTSIDE_MODE, OWN_STREAK.
//
// All logic migrated:
//   crowd bed / idle tension  → groove._updateContinuous()
//   failure state detection   → detectFailureState() in mode.js
//   filter tighten on failure → groove reads mode.audio_profile
//   siren / click / glitch    → removed (trigger spam, forbidden)
//
// This file is a no-op stub. It exists to prevent load errors
// if any external reference remains. Remove once confirmed clean.
// ═══════════════════════════════════════════════════════════════

const audioPatch = {
  init()     {},
  onPress()  {},
  onCorrect(){},
  onWrong()  {}
};
