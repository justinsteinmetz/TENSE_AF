// ═══════════════════════════════════════════════════════════════
// TENSE AF — PASSIVE VOICE PACK
// Node 3 standard. Agency, framing, institutional voice.
// No rules displayed. Context carries the grammar signal.
//
// Rounds:
//   pass2-form     — form under pressure (is/was/has been/is being)
//   pass2-agency   — who gets named, who disappears
//   pass2-frame    — active↔passive as a framing decision
//
// pressureClass:
//   high   — ambiguous agency, institutional perfect passive, framing stakes
//   medium — clear passive, known form, single distractor
//   low    — not used (no neutral items in this pack)
// ═══════════════════════════════════════════════════════════════

PACKS.push({
  id: "passive-voice-2",
  name: "The Absent Subject",
  subtitle: "Passive Voice",
  colour: "#8b5cf6",
  tier: "advanced",
  rounds: [

    // ──────────────────────────────────────────────────────────
    // ROUND 1 — Form under pressure
    // The learner reads the context for tense. No labels.
    // Distractors: missing "been", active form, wrong tense of BE.
    // ──────────────────────────────────────────────────────────
    {
      id: "pass2-form",
      name: "Form",
      label: "The structure under pressure",
      rule: ``,
      questions: [
        {
          qid: "pass2-f01",
          pressureClass: "medium",
          context: "The figures ___ overnight — the team arrived to find the results already circulated.",
          text: "The figures ___ before the audit team arrived at 6am.",
          answer: "were audited",
          options: ["were audited", "are audited", "audited the figures", "had the figures audited"],
          afterflavour: "Were audited = passive. No agent. The passive erases who commissioned the audit and why it happened at 6am."
        },
        {
          qid: "pass2-f02",
          pressureClass: "medium",
          context: "Workers are on site. You can hear the drilling from the pavement.",
          text: "The bridge ___ — it will be closed for six weeks.",
          answer: "is being reinforced",
          options: ["is being reinforced", "is reinforced", "has been reinforced", "was reinforced"],
          afterflavour: "Is being reinforced = present progressive passive. In progress now."
        },
        {
          qid: "pass2-f03",
          pressureClass: "high",
          context: "The evidence ___ since the inquiry's first hearing — and it has not changed the outcome.",
          text: "The bridge ___ — it will be closed for six weeks.",
          answer: "has been examined",
          options: ["has been examined", "was examined", "the inquiry examined it", "had been examined"],
          afterflavour: "Has been examined = present perfect passive, ongoing. Was examined = closed. The inquiry examined it = active, names the inquiry as agent. Same evidence, different grammar: different claim."
        },
        {
          qid: "pass2-f04",
          pressureClass: "medium",
          context: "Her application ___ — the portal says so, but nobody has called.",
          text: "The application ___ received by the committee.",
          answer: "has been received",
          options: ["has been received", "was received", "they have received it", "had been received"],
          afterflavour: "Has been received = present perfect passive, consequence now. Was received = closed. They have received it = active, names the institution. The passive keeps the institution out of the sentence."
        },
        {
          qid: "pass2-f05",
          pressureClass: "high",
          context: "Patients ___ under this protocol since 2022 — the results are reviewed quarterly.",
          text: "Patients ___ told the same thing since 2022.",
          answer: "have been monitored",
          options: ["have been monitored", "were monitored", "are monitored", "had been monitored"],
          afterflavour: "Have been monitored = present perfect passive. Ongoing since named point. Were monitored = closed."
        },
        {
          qid: "pass2-f06",
          pressureClass: "medium",
          context: "Your application ___ by the review team — the portal updated three minutes ago.",
          text: "Your case ___ reviewed as we speak.",
          answer: "is being reviewed",
          options: ["is being reviewed", "is reviewed", "the team is reviewing it", "was being reviewed"],
          afterflavour: "Is being reviewed = present progressive passive, in progress. Is reviewed = simple, habitual. The team is reviewing it = active, names the agent. The passive removes the team from the sentence."
        },
        {
          qid: "pass2-f07",
          pressureClass: "high",
          context: "The records ___ before the audit team's appointment — the deletion log shows one user, 11pm on a Sunday.",
          text: "The files ___ stored on private servers before anyone noticed.",
          answer: "had been deleted",
          options: ["had been deleted", "were deleted", "a single user deleted them", "have been deleted"],
          afterflavour: "Had been deleted = past perfect passive, before the audit. Were deleted = past simple. A single user deleted them = active, the log names the agent. The passive in the official report keeps the user out of the lead sentence."
        },
        {
          qid: "pass2-f08",
          pressureClass: "medium",
          context: "Three new stops ___ to the eastern route while you were away.",
          text: "New routes ___ to the network last month — the eastern suburbs now have a direct connection.",
          answer: "were added",
          options: ["were added", "are added", "have been added", "had been added"],
          afterflavour: "Were added = past simple passive. Last month is closed."
        },
      ]
    },

    // ──────────────────────────────────────────────────────────
    // ROUND 2 — Agency and framing
    // Same event, different frame. The distractor is the active form,
    // or the passive that names the wrong thing as subject.
    // ──────────────────────────────────────────────────────────
    {
      id: "pass2-agency",
      name: "Agency",
      label: "Who disappears",
      rule: ``,
      questions: [
        {
          qid: "pass2-a01",
          pressureClass: "high",
          context: "The press release. The phrase that appears after every scandal.",
          text: "'Process failures ___.' 'Mistakes were ___.' 'Shortcomings have ___.'",
          answer: "were identified",
          options: ["were identified", "are identified", "have been acknowledged", "had been noted"],
          afterflavour: "Were identified = passive, closed past. The active would be 'we identified process failures' — but the press release removes the subject."
        },
        {
          qid: "pass2-a02",
          pressureClass: "high",
          context: "The policy ___ before anyone had formally approved it — the authorisation came three weeks later.",
          text: "The policy ___ without consultation or parliamentary oversight.",
          answer: "was implemented",
          options: ["was implemented", "is being implemented", "has been implemented", "was approved then implemented"],
          afterflavour: "Was implemented = past simple passive, closed act. Is being implemented = ongoing now. Has been implemented = recent with present consequence. The sequence matters: implemented first, authorised later."
        },
        {
          qid: "pass2-a03",
          pressureClass: "high",
          context: "The landing cards ___ by the Home Office — the very documents that proved the right to remain.",
          text: "The policy ___ without consultation or parliamentary oversight.",
          answer: "were destroyed",
          options: ["were destroyed", "have been destroyed", "destroyed themselves", "had been destroyed before 2010"],
          afterflavour: "Were destroyed = past simple passive, named implied agent. Have been destroyed = present perfect, would mean consequence still live. The Home Office destroyed them. The passive buries the agent; the context names it."
        },
        {
          qid: "pass2-a04",
          pressureClass: "high",
          context: "The policy ___ without any parliamentary debate or recorded vote.",
          text: "No one ___ been held accountable.",
          answer: "was implemented",
          options: ["was implemented", "the government implemented it", "has been implemented", "had been planned before"],
          afterflavour: "Was implemented = agentless passive past simple. The government implemented it = active, names the agent. Has been implemented = present perfect. Had been planned = past perfect. The passive removes accountability: was implemented."
        },
        {
          qid: "pass2-a05",
          pressureClass: "high",
          context: "The cobalt ___ under contract with the provincial government — the workers were not party to those terms.",
          text: "The cobalt ___ under contract with the provincial government — the workers never saw those terms.",
          answer: "was extracted",
          options: ["was extracted", "the company extracted it", "has been extracted", "had been taken"],
          afterflavour: "Was extracted = passive past simple, agentless. The company extracted it = active. Has been extracted = present perfect. Had been taken = past perfect, different meaning. The contract exists, the agent could be named: the passive chose not to."
        },
        {
          qid: "pass2-a06",
          pressureClass: "medium",
          context: "She ___ the residency without applying — someone had put her name forward.",
          text: "She ___ the residency without applying — a colleague had put her name forward.",
          answer: "was offered",
          options: ["was offered", "was recommended for", "is offered", "had been shortlisted"],
          afterflavour: "Was offered = past simple passive. Was recommended for = passive with different verb, implies the colleague recommended her. Is offered = present. Had been shortlisted = past perfect, earlier stage. She received the offer: was offered."
        },
        {
          qid: "pass2-a07",
          pressureClass: "high",
          context: "Sixty pages ___ before the committee received it — nobody has explained which sections or why.",
          text: "Key sections ___ before the document went to the committee — three pages became one.",
          answer: "were redacted",
          options: ["were redacted", "have been redacted", "are being redacted", "had been redacted before submission"],
          afterflavour: "Were redacted = past simple passive, closed act before a past event. Have been redacted = present perfect, still relevant now. Were redacted before submission = the redaction preceded the committee receiving it. All three are plausible; were redacted is the most precise about timing."
        },
        {
          qid: "pass2-a08",
          pressureClass: "high",
          context: "The tapes ___ in the raid — no copies existed, no backups, no insurance.",
          text: "Fela's master tapes ___ in the raid — nothing survived.",
          answer: "were destroyed",
          options: ["were destroyed", "have been destroyed", "were confiscated then destroyed", "had been destroyed before the raid"],
          afterflavour: "Were destroyed = past simple passive, one night, one act. Have been destroyed = present perfect, loss still relevant (true, but shifts focus from the act to the consequence). Were confiscated then destroyed = two acts; historically plausible but not documented. The raid was the act."
        },
      ]
    },

    // ──────────────────────────────────────────────────────────
    // ROUND 3 — Transformation
    // Active↔passive as a conscious framing choice.
    // The question forces the learner to hear what the frame does.
    // ──────────────────────────────────────────────────────────
    {
      id: "pass2-frame",
      name: "Frame",
      label: "What the choice does",
      rule: ``,
      questions: [
        {
          qid: "pass2-t01",
          pressureClass: "high",
          context: "You want to foreground the action, not the government that funded it.",
          text: "The programme ___ quietly for five years before the audit.",
          answer: "ran",
          options: ["ran", "was run", "has run", "is run"],
          afterflavour: "Active. Unnamed actors preferred it that way."
        },
        {
          qid: "pass2-t02",
          pressureClass: "high",
          context: "You want to foreground who received the action. The funder stays offstage.",
          text: "The programme ___ quietly for five years before the audit.",
          answer: "was run",
          options: ["was run", "ran", "has run", "is run"],
          afterflavour: "Passive. Funder removed. Same five years, different story."
        },
        {
          qid: "pass2-t03",
          pressureClass: "high",
          context: "The memo exists. It implicates the director. The journalist is choosing words carefully.",
          text: "The memo says the decision ___ at board level — but the board minutes don't record a vote.",
          answer: "was taken",
          options: ["was taken", "was approved", "had been decided", "has been taken"],
          afterflavour: "Was taken = agentless past passive. The board level is named but no individual. Was approved would mean the decision was good. Was taken is neutral."
        },
        {
          qid: "pass2-t04",
          pressureClass: "high",
          context: "The same journalist, one paragraph later, has the name.",
          text: "The director ___ the decision without informing the board.",
          answer: "made",
          options: ["made", "was made", "has made", "had made"],
          afterflavour: "Active. Director named. Passive frame dropped."
        },
        {
          qid: "pass2-t05",
          pressureClass: "medium",
          context: "You're writing the match report. The goals are the story, not the scorers.",
          text: "Three goals ___ in the first half — the second from a penalty.",
          answer: "were scored",
          options: ["were scored", "are scored", "have been scored", "scored"],
          afterflavour: "Were scored = past simple passive, result-first. Scored (active) would need a subject — the scorers. Here the goals are the story."
        },
        {
          qid: "pass2-t06",
          pressureClass: "high",
          context: "A press briefing. The spokesperson has been speaking for forty minutes.",
          text: "'It ___ that errors occurred during this period — we take that seriously.'",
          answer: "is acknowledged",
          options: ["is acknowledged", "is agreed", "has been confirmed", "was acknowledged"],
          afterflavour: "Is acknowledged = present passive, ongoing admission. Was acknowledged = closed past. The spokesperson is in present tense — the admission is live."
        },
        {
          qid: "pass2-t07",
          pressureClass: "high",
          context: "After direct questioning, the minister said the data ___ by an independent review.",
          text: "It ___ now confirmed that the data was altered.",
          answer: "has been confirmed",
          options: ["has been confirmed", "was confirmed", "is confirmed", "had been confirmed"],
          afterflavour: "Has been confirmed = present perfect passive. Recent action with current relevance."
        },
        {
          qid: "pass2-t08",
          pressureClass: "high",
          context: "Remediation work ___ ongoing since the 2011 UNEP report — the water quality figures are not included.",
          text: "Remediation work ___ ongoing since the 2011 UNEP report.",
          answer: "has been described as",
          options: ["has been described as", "was described as", "is described as", "had been described as"],
          afterflavour: "Has been described as = impersonal present perfect passive. Described as ongoing — not confirmed as complete. The water quality figures are not included. Present perfect keeps the framing live."
        },
      ]
    }

  ],
  bossQuestions: []
});
