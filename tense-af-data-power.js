// ═══════════════════════════════════════════════════════════════
// TENSE AF — DATA: POWER & RESPONSIBILITY PACK
// 
// Mixed-type pack: gap-fill + multiple choice.
// Focus: passive voice as political frame. Who did it? Who's hidden?
// ═══════════════════════════════════════════════════════════════

PACKS.push({
  id: "power",
  name: "Power & Responsibility",
  subtitle: "Mixed — Advanced",
  colour: "#ef4444",
  tier: "advanced",

  rounds: [
    {
      id: "power-passive-core",
      name: "Who did it?",
      label: "Agency hidden or revealed",
      rule: `<strong>Passive voice</strong> can hide the agent.<br>"Mistakes were made" never says <em>by whom</em>. Noticing this is a political reading skill.<span class="rt-eg">They fired her. → She was fired.</span>`,
      questions: [
        {
          qid: "pwr01",
          context: "The inquiry has published its report. The minister is at the podium. No names appear anywhere in the statement.",
          text: "Mistakes ___ made — and lessons have been learned.",
          answer: "were",
          options: ["were", "have been", "are being", "had been"],
          afterflavour: "Were made = past simple passive, closed act, no agent. Have been made = present perfect, ongoing consequence. Are being made = still happening now. Had been made = before another past event. Were made forecloses — it's over, it's passive, nobody did it."
        },
        {
          qid: "pwr02",
          context: "The memo in front of you has three names on it. The press release says none of them.",
          text: "The decision ___ taken at board level — no further comment.",
          answer: "was taken",
          options: ["was taken", "had been taken", "has been taken", "is being taken"],
          afterflavour: "Was taken = past simple passive, one act, closed, no agent. Had been taken = past perfect, would imply something else happened after. Has been taken = present perfect, still relevant. Is being taken = right now, ongoing. Was taken: one meeting, one night, nobody named."
        },
        {
          qid: "pwr03",
          context: "The public consultation ran for six weeks. The contract was signed three weeks before it opened. A Freedom of Information request later confirmed the timeline.",
          text: "It ___ that the policy had already been decided before the public consultation opened.",
          answer: "It was reported",
          options: ["It was reported", "It has been reported", "It is reported", "It had been reported"],
          type: "mcq",
          afterflavour: "It was reported = past simple passive impersonal, closed past event. It has been reported = present perfect, ongoing relevance — both work, but was reported for a specific past publication. It is reported = present, implies current ongoing reports. It had been reported = past perfect, would need another past event after."
        },
        {
          qid: "pwr04",
          context: "The department is asking why the process hasn't started. She checks the system. It's already in.",
          text: "The report ___ already been submitted — whoever's holding things up, it isn't her.",
          answer: "has",
          options: ["has", "was", "had", "is"],
          afterflavour: "Has been submitted = present perfect passive. Current consequence: the report is in the system. Was submitted = past simple, closed. Had been submitted = past perfect, would need another past event after. Is being submitted = still happening now — it's done."
        },
        {
          qid: "pwr05",
          context: "Three years of correspondence ___ before the investigators' appointment — the deletion log shows a timestamp.",
          text: "The files ___ before the investigators arrived — three years of correspondence, gone.",
          answer: "were destroyed",
          options: ["were destroyed", "have been destroyed", "were accidentally misplaced", "had been destroyed months earlier"],
          type: "mcq",
          afterflavour: "Were destroyed = past simple passive, one act before the inquiry. Have been destroyed = present perfect, consequence now. Were accidentally misplaced = passive, but changes the nature of the act. Had been destroyed months earlier = past perfect, plausible — but were destroyed is the claim being made."
        },
        {
          qid: "pwr06",
          context: "The Home Office statement on Windrush. Three hundred words. No names. No charges. No apology — only an acknowledgement.",
          text: "Errors ___ acknowledged and compensation ___ offered — but no individual officer ___ named.",
          answer: "were acknowledged",
          options: ["were acknowledged", "have been acknowledged", "are acknowledged", "had been acknowledged"],
          afterflavour: "Were acknowledged = past simple passive, one statement, closed. Have been acknowledged = present perfect, still relevant — both work, but past simple closes the event the way the statement wanted to. Is acknowledged = present, still ongoing. Had been = before another past event. The passive closes it; the active would open a question."
        }
      ]
    },

    {
      id: "power-shift",
      name: "Shift the focus",
      label: "Active → Passive pressure",
      rule: `Converting <strong>active</strong> to <strong>passive</strong> shifts focus from the doer to the receiver. Sometimes that's neutral. Sometimes it's a choice to protect the doer.`,
      questions: [
        {
          qid: "pwr07",
          context: "The investigative report names three executives who destroyed the data. The company statement says none of their names.",
          text: "The data ___ in an overnight server wipe — no further comment on the timeline.",
          answer: "was destroyed",
          options: ["was destroyed", "had been destroyed", "three executives destroyed it", "has been destroyed"],
          afterflavour: "Was destroyed = past simple passive, agentless — the company's preferred version. Three executives destroyed it = active, the investigators' version. Had been destroyed = past perfect, implies something happened after. Has been destroyed = present perfect, consequence ongoing. Same event. Different politics."
        },
        {
          qid: "pwr08",
          context: "Three whistleblowers are being investigated. The government says the source is unknown. A journalist has the documents.",
          text: "The story ___ to the press — the identity of the source ___ unknown.",
          answer: "was leaked",
          options: ["was leaked", "has been leaked", "leaked itself", "a whistleblower leaked"],
          afterflavour: "Was leaked = past simple passive, done, no agent named — the government's version. Has been leaked = present perfect, still live consequence — the journalist's version. Leaked itself = impossible, agency without an agent. A whistleblower leaked = active, names the category. The passive protects. That's why it exists."
        },
        {
          qid: "pwr09",
          context: "The press office is briefing journalists one by one. Approved quotes only. Nothing off-record. The story that appears in the morning is not the story you saw.",
          text: "The narrative ___ carefully managed — every quote approved in advance.",
          answer: "is being",
          options: ["is being", "was", "has been", "will be"],
          afterflavour: "Is being managed = present progressive passive, happening right now, in progress. Was managed = past, closed. Has been managed = present perfect, consequence relevant now but not necessarily still active. Will be managed = future. The press office is active right now: progressive passive."
        },
        {
          qid: "pwr10",
          context: "Shell's operational reports confirm the discharge dates. The delta water is not drinkable. The legal case is ongoing.",
          text: "The Niger Delta ___ contaminated since at least 1958 — the communities are still waiting.",
          answer: "has been",
          options: ["has been", "was", "is being", "had been"],
          afterflavour: "Has been contaminated = present perfect passive, started 1958, still true now. Was contaminated = past simple, would close it — it's not closed. Is being contaminated = progressive, still actively happening — also true, but since 1958 asks for the period. Had been contaminated = past perfect, would need another past event after. The water is still not drinkable: present perfect."
        },
        {
          qid: "pwr11",
          context: "By the time the journalist arrived to report on the third raid, the building had a history. The neighbours knew the pattern.",
          text: "By the time the community meeting happened, the building ___ raided twice that month — nobody was surprised.",
          answer: "had been",
          options: ["had been", "has been", "was", "is being"],
          afterflavour: "Had been raided = past perfect passive — the raids came BEFORE the community meeting. Has been raided = present perfect, consequence still relevant — but the meeting is past, so past perfect. Was raided = past simple, doesn't signal sequence. Is being raided = progressive, right now. By the time signals: past perfect."
        }
      ]
    },

    {
      id: "power-reveal",
      name: "Name the agent",
      label: "When naming matters",
      rule: `<strong>Active voice</strong> names power. When accountability is the point, use active.<span class="rt-eg">Mistakes were made. → The minister lied.</span>`,
      questions: [
        {
          qid: "pwr12",
          context: "Original: 'The decision was made.' Rewrite: 'The finance minister ___ the decision.'",
          text: "Mistakes were made. → The minister ___ the decision.",
          answer: "made",
          options: ["made", "approved", "sanctioned", "authorised"],
          type: "mcq",
          afterflavour: "Made = active, names the minister as agent. Approved = softer, implies someone else originated it. Sanctioned = formal authorisation, slightly different claim. Authorised = formal permission. Made is the direct active rewrite of 'was made' — same verb, active voice."
        },
        {
          qid: "pwr13",
          context: "The company ___ the water table for forty years and called it an acceptable operational cost.",
          text: "Shell ___ the delta for sixty years.",
          answer: "poisoned",
          options: ["poisoned", "has poisoned it systematically", "contaminated", "was poisoning the area"],
          type: "mcq",
          afterflavour: "Poisoned = active past simple, direct accusation. Has poisoned systematically = present perfect, makes it ongoing. Contaminated = accurate but softer, more technical. Was poisoning = progressive, implies it's not still happening. Poisoned + active + named agent = journalistic decision about responsibility."
        },
        {
          qid: "pwr14",
          context: "A journalist refuses the passive evasion in a court statement.",
          text: "The officer ___ the suspect three times before backup arrived.",
          answer: "tasered",
          type: "gap",
          afterflavour: "Named. Counted. Active voice does the work."
        },
        {
          qid: "pwr15",
          context: "Rewrite: 'The cabinet ___  further review.'",
          text: "\"It was suggested that changes be made.\" → \"The committee ___ changes.\"",
          answer: "suggested",
          options: ["suggested", "proposed", "recommended", "implied"],
          type: "mcq",
          afterflavour: "Suggested = active, names the cabinet as agent. Proposed = stronger commitment, slightly different claim. Recommended = authoritative endorsement, overstates. Implied = weaker, suggests indirect communication. Suggested is the direct active rewrite of 'it was suggested'."
        }
      ]
    }
  ],
  bossQuestions: []
});
