// ═══════════════════════════════════════════════════════════════
// TENSE AF — CONDITIONALS (MERGED)
// Simple entry rounds (cond-*) → structural rounds (cond2-*)
// Zero → First → Second → Third → Mixed at each level
// ═══════════════════════════════════════════════════════════════

PACKS.push({
  id: "conditionals-structure",
  name: "Conditional Space",
  subtitle: "Conditionals",
  colour: "#06b6d4",
  tier: "advanced",
  rounds: [

    // ── ENTRY: Zero + First ──────────────────────────────────
    {
      id: "cond-zero-first",
      name: "Zero + First",
      label: "Always true / real possibility",
      rule: `<strong>Zero conditional</strong> (always true): <em>If you heat water, it boils.</em><br><strong>First conditional</strong> (real future): <em>If it rains tomorrow, we'll stay in.</em>`,
      questions: [
        
        
        
        
      ]
    },
    {
      id: "cond-second",
      name: "Second Conditional",
      label: "Hypothetical / unlikely",
      rule: `<strong>Second conditional</strong>: imagine something unreal or unlikely now.<br>Form: <em>If + past simple, would + base verb.</em><span class="rt-eg">If I had the money, I would travel.</span>`,
      questions: [
        
        
        
        
      ]
    },
    {
      id: "cond-third",
      name: "Third Conditional",
      label: "Past regret / impossibility",
      rule: `<strong>Third conditional</strong>: imagine a different past.<br>Form: <em>If + past perfect, would have + past participle.</em><span class="rt-eg">If I had known, I would have called.</span>`,
      questions: [
        
        
        
        
      ]
    },
    {
      id: "cond-mixed",
      name: "Mixed Conditionals",
      label: "Past cause, present result",
      rule: `Mixed conditionals cross time frames. Most common: past condition → present result.<span class="rt-eg">If I had listened to my mother, I would be richer now.</span>`,
      questions: [
        
        
        
        
      ]
    },

    // ── STRUCTURAL: Second ─── (entry second below is removed as duplicate)
    {
      id: "cond-second",
      name: "Second Conditional",
      label: "Hypothetical / unlikely",
      rule: `<strong>Second conditional</strong>: imagine something unreal or unlikely now.<br>Form: <em>If + past simple, would + base verb.</em><span class="rt-eg">If I had the money, I would travel.</span>`,
      questions: [
        
        
        
        
      ]
    },

    // ── ENTRY: Third ─────────────────────────────────────────
    {
      id: "cond-third",
      name: "Third Conditional",
      label: "Past regret / impossibility",
      rule: `<strong>Third conditional</strong>: imagine a different past.<br>Form: <em>If + past perfect, would have + past participle.</em><span class="rt-eg">If I had known, I would have called.</span>`,
      questions: [
        
        
        
        
      ]
    },

    // ── ENTRY: Mixed ─────────────────────────────────────────
    {
      id: "cond-mixed",
      name: "Mixed Conditionals",
      label: "Past cause, present result",
      rule: `Mixed conditionals cross time frames. Most common: past condition → present result.<span class="rt-eg">If I had listened to my mother, I would be richer now.</span>`,
      questions: [
        
        
        
        
      ]
    },

    // ── STRUCTURAL: Zero ─────────────────────────────────────
    {
      id: "cond2-zero",
      name: "Zero — Structural",
      label: "Always. Not sometimes.",
      rule: ``,
      questions: [
        { qid:"cond2-z01", pressureClass:"low", context:"A structural observation. Not a warning — a description.", text:"If behaviour repeats without reflection, responsibility ___ into routine.", answer:"dissolves", options:["dissolves","will dissolve","would dissolve","has dissolved"], afterflavour:"Always true. Present + present. No escape clause." },
        { qid:"cond2-z02", pressureClass:"low", context:"How compliance works. Not opinion — mechanism.", text:"If a system operates without explanation, it still ___ compliance.", answer:"enforces", options:["enforces","will enforce","would enforce","enforced"], afterflavour:"Explanation is optional. Enforcement is not." },
        { qid:"cond2-z03", pressureClass:"low", context:"How power maintains itself. The observation is structural.", text:"If people perform belief, power ___ itself.", answer:"sustains", options:["sustains","will sustain","would sustain","sustained"], afterflavour:"Performance and power: mutual. Present simple confirms the loop." },
        { qid:"cond2-z04", pressureClass:"low", context:"The epistemological claim. Always, not sometimes.", text:"If institutions define knowledge, truth ___ their structure.", answer:"follows", options:["follows","will follow","would follow","followed"], afterflavour:"Truth follows. Present simple. No exception built in." },
        { qid:"cond2-z05", pressureClass:"low", context:"The political claim about narrative. Structural, not occasional.", text:"If one story dominates, alternatives ___.", answer:"disappear", options:["disappear","will disappear","would disappear","disappeared"], afterflavour:"Zero conditional. Always. The alternatives don't wait." },
        { qid:"cond2-z06", pressureClass:"low", context:"The relationship between knowledge and innocence. Structural.", text:"If knowledge is available and ignored, innocence ___ a choice.", answer:"becomes", options:["becomes","will become","would become","became"], afterflavour:"Becomes. Present + present. The choice is always there." },
        { qid:"cond2-z07", pressureClass:"low", context:"What happens when interpretation takes over. Observed pattern.", text:"If interpretation dominates, experience ___.", answer:"weakens", options:["weakens","will weaken","would weaken","weakened"], afterflavour:"Present simple. Not a risk — a condition." },
        { qid:"cond2-z08", pressureClass:"low", context:"What happens to history when it is suppressed. The mechanism.", text:"If history is suppressed, it still ___ the present.", answer:"shapes", options:["shapes","will shape","would shape","shaped"], afterflavour:"Suppression doesn't stop the shaping. Present tense confirms." }
      ]
    },

    // ── STRUCTURAL: First ────────────────────────────────────
    {
      id: "cond2-first",
      name: "First — Structural",
      label: "Real. Still possible. Not yet inevitable.",
      rule: ``,
      questions: [
        { qid:"cond2-f01", pressureClass:"medium", context:"The behaviour is still continuing. The trajectory is real.", text:"If this continues without interruption, responsibility ___ dissolve into routine.", answer: "will dissolve", options: ["will dissolve", "would dissolve", "dissolves", "has dissolved"], afterflavour:"First conditional. Still possible to interrupt. Still possible not to." },
        { qid:"cond2-f02", pressureClass:"medium", context:"The system is currently operating. The outcome is foreseeable.", text:"If systems remain unchanged, outcomes ___ stay consistent.", answer: "will stay consistent", options: ["will stay consistent", "would stay consistent", "stays consistent", "has stayed consistent"], afterflavour:"Will stay. The prediction is grounded in the present condition." },
        { qid:"cond2-f03", pressureClass:"medium", context:"The performance is ongoing. Power is watching.", text:"If people continue performing belief, power ___ persist without being challenged.", answer: "will persist", options: ["will persist", "would persist", "persists", "has persisted"], afterflavour:"Real risk. First conditional confirms the mechanism is live." },
        { qid:"cond2-f04", pressureClass:"medium", context:"The institutional framing of knowledge is ongoing.", text:"If institutions keep defining knowledge, truth ___ follow their structure.", answer: "will follow", options: ["will follow", "would follow", "follows", "has followed"], afterflavour:"Will follow. The condition is real, the result is projected." },
        { qid:"cond2-f05", pressureClass:"medium", context:"The dominant narrative is still dominant. The risk is real.", text:"If one story continues to dominate, perception ___ narrow .", answer: "will narrow", options: ["will narrow", "would narrow", "narrows", "has narrowed"], afterflavour:"Will narrow. Ongoing condition → projected outcome." },
        { qid:"cond2-f06", pressureClass:"medium", context:"The knowledge is available now. The choice is being made now.", text:"If knowledge is ignored now, innocence ___ persist as refusal.", answer: "will persist as refusal", options: ["will persist as refusal", "would persist", "persists", "has persisted"], afterflavour:"First conditional. Refusal is a live option. So is acknowledgement." },
        { qid:"cond2-f07", pressureClass:"medium", context:"History is being denied now. The effect is projected forward.", text:"If history is denied, it ___ continue shaping the present.", answer: "will continue shaping", options: ["will continue shaping", "would continue shaping", "continues shaping", "has continued shaping"], afterflavour:"Will continue. First conditional confirms the unbroken chain." },
        { qid:"cond2-f08", pressureClass:"medium", context:"Interpretation is currently dominant. The warning is real.", text:"If interpretation keeps dominating, direct experience ___ become less legible.", answer: "will become less legible", options: ["will become less legible", "would become less legible", "becomes less legible", "has become less legible"], afterflavour:"Will become. The condition is ongoing. The result isn't certain — but it is real." }
      ]
    },

    // ── STRUCTURAL: Second ───────────────────────────────────
    {
      id: "cond2-second",
      name: "Second — Structural",
      label: "If the present were different.",
      rule: ``,
      questions: [
        { qid:"cond2-s01", pressureClass:"medium", context:"The behaviour is repeating. Imagining it stopped.", text:"If behaviour ___ repeat without reflection, responsibility would dissolve.", answer:"didn't", options:["didn't", "didn't repeat", "doesn't repeat", "hadn't repeated"], afterflavour:"Didn't repeat — past simple in the if. Second conditional." },
        { qid:"cond2-s02", pressureClass:"medium", context:"Imagining a system that requires justification.", text:"If systems required explanation, authority ___ less inevitable.", answer:"would feel", options:["would feel","will feel","would have felt","feels"], afterflavour:"Would feel. Hypothetical now. Not prediction — imagination." },
        { qid:"cond2-s03", pressureClass:"medium", context:"Hypothetical: people stop the performance.", text:"If people ___ performing belief, power would need to justify itself.", answer:"stopped", options:["stopped","stop","had stopped","would stop"], afterflavour:"Stopped — past simple. The hypothetical is in the present." },
        { qid:"cond2-s04", pressureClass:"medium", context:"Imagining knowledge being acknowledged now.", text:"If knowledge ___ acknowledged, innocence would not remain credible.", answer: "were acknowledged", options: ["were acknowledged", "was acknowledged", "are acknowledged", "had been acknowledged"], afterflavour:"Were — not was. Formal hypothetical. Were applies to all persons." },
        { qid:"cond2-s05", pressureClass:"medium", context:"Imagining multiple stories in circulation now.", text:"If multiple stories circulated, perception ___ broader.", answer: "would be", options: ["would be", "will be", "were", "had been"], afterflavour:"Would be broader. Hypothetical present result. Past simple in if-clause, would + base in result." },
        { qid:"cond2-s06", pressureClass:"high", context:"Hypothetical: institutions don't define knowledge.", text:"If institutions ___ define knowledge, truth would develop outside them.", answer:"didn't", options:["didn't", "didn't define", "don't define", "hadn't defined"], afterflavour:"Didn't define — past simple in if. Hypothetical present." },
        { qid:"cond2-s07", pressureClass:"high", context:"Imagining the suppression lifted. The history visible.", text:"If history ___ suppressed, its influence would still be felt.", answer:"weren't", options:["weren't","wasn't","hadn't been","isn't"], afterflavour:"Weren't — formal hypothetical. Were for all persons in second conditional." },
        { qid:"cond2-s08", pressureClass:"high", context:"Imagining systems changed. But the change hasn't happened.", text:"If systems ___ redesigned, would outcomes actually follow?", answer: "were redesigned", options: ["were redesigned", "was redesigned", "are redesigned", "had been redesigned"], afterflavour:"Were redesigned — past simple, hypothetical now." }
      ]
    },

    // ── STRUCTURAL: Third ────────────────────────────────────
    {
      id: "cond2-third",
      name: "Third — Structural",
      label: "A different past. The present unchanged.",
      rule: ``,
      questions: [
        { qid:"cond2-t01", pressureClass:"medium", context:"The behaviour repeated. It wasn't interrupted. This is the result.", text:"If behaviour ___ interrupted, responsibility would not have dissolved.", answer:"had been", options:["had been","was","would have been","has been"], afterflavour:"Had been interrupted — past perfect passive in if. Counterfactual." },
        { qid:"cond2-t02", pressureClass:"medium", context:"The system never required explanation. Compliance held.", text:"If systems had required explanation, compliance ___ held so easily.", answer:"wouldn't have", options:["wouldn't have","won't have","hadn't","wouldn't"], afterflavour:"Wouldn't have held. Result clause needs would have." },
        { qid:"cond2-t03", pressureClass:"medium", context:"People kept performing. Power was never tested.", text:"If people had stopped performing, power ___ to justify itself.", answer:"would have had", options:["would have had","would have","had had","will have had"], afterflavour:"Would have had to justify. Third conditional. Past + would have." },
        { qid:"cond2-t04", pressureClass:"medium", context:"The knowledge was available. It was ignored. Innocence persisted.", text:"If knowledge ___ acknowledged earlier, innocence would not have survived.", answer:"had been", options:["had been","was","would have been","has been"], afterflavour:"Had been acknowledged — passive, past perfect. If-clause." },
        { qid:"cond2-t05", pressureClass:"medium", context:"One story dominated. Other stories disappeared.", text:"If multiple stories ___ told, perception would have expanded.", answer:"had been", options:["had been","were","would have been","have been"], afterflavour:"Had been told — passive past perfect. The untold stories." },
        { qid:"cond2-t06", pressureClass:"high", context:"History was suppressed. Its influence persisted. Imagining otherwise.", text:"If history had not been suppressed, the present ___ structured differently.", answer:"would have been", options:["would have been","would be","had been","will have been"], afterflavour:"Would have been. Third conditional result. Past → past." },
        { qid:"cond2-t07", pressureClass:"high", context:"Systems weren't redesigned. Outcomes held. The counter-argument.", text:"If systems ___ redesigned earlier, outcomes would have changed.", answer:"had been", options:["had been","were","would have been","have been"], afterflavour:"Had been — passive, past perfect. Were is second conditional. The tense tells you which world." },
        { qid:"cond2-t08", pressureClass:"high", context:"Contradiction persisted. The absurd held. What if it hadn't.", text:"If contradiction had been resolved, the absurd ___ disappeared.", answer:"would have", options:["would have","would","had","will have"], afterflavour:"Would have disappeared. Result clause. Would alone is second conditional." }
      ]
    },

    // ── STRUCTURAL: Mixed ────────────────────────────────────
    {
      id: "cond2-mixed",
      name: "Mixed — Structural",
      label: "Past cause. Present condition.",
      rule: ``,
      questions: [
        { qid:"cond2-m01", pressureClass:"high", context:"Behaviour was not interrupted. The present is a result of that.", text:"If repetition had been interrupted earlier, power ___ so entrenched now.", answer:"wouldn't be", options:["wouldn't be","wouldn't have been","won't be","hadn't been"], afterflavour:"Past condition → present state. Wouldn't be — not wouldn't have been." },
        { qid:"cond2-m02", pressureClass:"high", context:"Systems weren't redesigned. We are living with the result.", text:"If systems had been redesigned, outcomes ___ diverge now.", answer: "would diverge", options: ["would diverge", "would have diverged", "will diverge", "diverge"], afterflavour:"Would diverge — present result of past condition. Would have = third conditional." },
        { qid:"cond2-m03", pressureClass:"high", context:"History was suppressed. The present carries it.", text:"If history had not been denied, the present ___ structured this way.", answer: "wouldn't be", options: ["wouldn't be", "wouldn't have been", "won't be", "isn't"], afterflavour:"Wouldn't be — present result of past condition. Wouldn't have been = third conditional only. The present is the consequence." },
        { qid:"cond2-m04", pressureClass:"high", context:"Knowledge was available and ignored. Innocence persists now.", text:"If knowledge had been acknowledged, innocence ___ credible today.", answer:"wouldn't be", options:["wouldn't be","wouldn't have been","won't be","hadn't been"], afterflavour:"Mixed. Past acknowledgement → present credibility. Today confirms the time frame." },
        { qid:"cond2-m05", pressureClass:"high", context:"Explanation was never required. Authority still feels inevitable.", text:"If systems had required explanation, authority ___ inevitable now.", answer:"wouldn't feel", options:["wouldn't feel","wouldn't have felt","won't feel","doesn't feel"], afterflavour:"Wouldn't feel — present state. Wouldn't have felt = third conditional only." },
        { qid:"cond2-m06", pressureClass:"high", context:"The performance continued. Power is still unchallenged.", text:"If people had stopped performing belief, power ___ need to justify itself now.", answer: "would need to justify itself", options: ["would need to justify itself", "would have needed to justify itself", "needs to justify itself", "will need to justify itself"], afterflavour:"Would need now — present consequence of past action." },
        { qid:"cond2-m07", pressureClass:"high", context:"One story was dominant. Perception is still narrow.", text:"If multiple stories had been told, perception ___ broader now.", answer: "would be", options: ["would be", "would have been", "will be", "is"], afterflavour:"Would be broader now. Mixed conditional: past cause, present result. Now is the signal." },
        { qid:"cond2-m08", pressureClass:"high", context:"Truth followed institutional structure. It still does.", text:"If knowledge had formed differently, truth ___ operate differently now.", answer: "would operate differently", options: ["would operate differently", "would have operated differently", "operates differently", "will operate differently"], afterflavour:"Would operate now. Mixed. Past formation → present operation." }
      ]
    }

  ],
  bossQuestions: []
});
