// ═══════════════════════════════════════════════════════════════
// TENSE AF — NARRATIVE / MEDIA PACK
// Node 3 standard. Reporting, framing, attribution, editorial time.
// No rules displayed. Context is the grammar signal.
//
// Rounds:
//   narr-announce  — present perfect as news delivery vehicle
//   narr-report    — reporting verbs + tense backshift
//   narr-frame     — framing choices (said/claims/has said/is saying)
//   narr-edit      — editorial tense: what the writer chooses to do
//
// Forms in play:
//   has/have + pp  — news announcement
//   said/told      — closed report
//   has said       — still-standing claim
//   is saying      — ongoing/present position
//   was + pp       — reported passive
//   had + pp       — backshifted in reported speech
//   present simple — direct attribution, universal statement
//
// pressureClass:
//   high   — attribution stakes, framing ambiguity, backshift under political content
//   medium — clear reporting structure, single distractor class
//   low    — not used
// ═══════════════════════════════════════════════════════════════

PACKS.push({
  id: "narrative-media",
  name: "Framed Reality",
  subtitle: "Narrative & Media",
  colour: "#f97316",
  tier: "advanced",
  rounds: [

    // ──────────────────────────────────────────────────────────
    // ROUND 1 — Announcement
    // Present perfect as the tense of news.
    // Distractors: past simple (kills the relevance), present simple (kills the event),
    // present progressive (wrong aspect).
    // ──────────────────────────────────────────────────────────
    {
      id: "narr-announce",
      name: "Announcement",
      label: "The news is now",
      rule: ``,
      questions: [
        
        
        
        
        {
          qid: "narr-a05",
          pressureClass: "medium",
          context: "Yesterday's announcement. It's history now.",
          text: "The chancellor ___ a new austerity package last Tuesday.",
          answer: "announced",
          options: ["announced", "has announced", "announces", "had announced"],
          afterflavour: "Last Tuesday is closed. Past simple."
        }
      ]
    },

    // ──────────────────────────────────────────────────────────
    // ROUND 2 — Reported speech
    // Tense backshift: present → past, perfect → past perfect.
    // Distractors: no backshift (direct speech left in), wrong auxiliary, wrong participle.
    // ──────────────────────────────────────────────────────────
    {
      id: "narr-report",
      name: "Report",
      label: "What they said, shifted back",
      rule: ``,
      questions: [
        {
          qid: "narr-r01",
          pressureClass: "medium",
          context: "She said it at the press conference. You're writing it up.",
          text: "She said that she ___ the outcome.",
          answer: "accepted",
          options: ["accepted", "accepts", "has accepted", "accept"],
          afterflavour: "She said 'I accept' → she said she accepted. Backshift."
        },
        {
          qid: "narr-r02",
          pressureClass: "medium",
          context: "The spokesperson said the situation ___ and that no further action was needed.",
          text: "The spokesperson said the situation ___ and that no further action was needed.",
          answer: "was under control",
          options: ["was under control", "is under control", "has been under control", "had been under control"],
          afterflavour: "Was under control = backshifted from 'is under control'. Is under control = not backshifted, would mean the journalist treats it as current fact. Has been = present perfect. Was under control = the spokesperson's claim, reported at distance."
        },
        {
          qid: "narr-r03",
          pressureClass: "high",
          context: "The company said it ___ any rules — the investigation would determine whether that was true.",
          text: "He claimed that they ___ any rules.",
          answer: "had not broken", altAnswers:["hadn't broken", "had not violated"],
          options: ["had not broken", "have not broken", "didn't break", "hasn't broken"],
          afterflavour: "Had not broken = past perfect, backshifted from 'have not broken'. Have not broken = present perfect, direct quote — not reported. Didn't break = past simple. Hasn't broken = present perfect without subject. Reported speech: past perfect."
        },
        {
          qid: "narr-r04",
          pressureClass: "high",
          context: "She told the inquiry the data ___ before she took up her position.",
          text: "She told the inquiry that the data ___ before her appointment.",
          answer: "had been falsified",
          options: ["had been falsified", "was falsified", "has been falsified", "were falsified"],
          afterflavour: "Had been falsified = passive past perfect, backshifted from 'was falsified'. Was falsified = past simple, direct quote — not reported. Has been = present perfect. Before she took up her position = the sequence is the defence. Past perfect passive."
        },
        {
          qid: "narr-r05",
          pressureClass: "high",
          context: "He says the protocols ___ on three separate occasions — his evidence has been provided to the committee.",
          text: "The minister maintains that no laws ___.",
          answer: "were broken", altAnswers:["have been broken"],
          options: ["were broken", "had been broken", "have been broken", "are broken"],
          afterflavour: "Were broken = past simple passive, in a present-tense reported verb ('says'). Had been broken = past perfect. Have been broken = present perfect, current relevance. Are broken = present, implies currently. He says (present) + were broken (past simple passive) = reporting a past completed act."
        },
        {
          qid: "narr-r06",
          pressureClass: "medium",
          context: "The press release stated that profits ___ by 40% in the previous quarter.",
          text: "The company stated that profits ___ by 40 per cent in the previous quarter.",
          answer: "had risen", altAnswers:["had increased", "had grown"],
          options: ["had risen", "have risen", "rose", "were rising"],
          afterflavour: "Had risen = backshifted from 'have risen'. Have risen = present perfect, not backshifted. Rose = past simple, simple tense shift. Were rising = progressive. Stated (past) + had risen: the backshift marks it as reported, placed before the report."
        },
      ]
    },

    // ──────────────────────────────────────────────────────────
    // ROUND 3 — Framing and attribution
    // said / claims / has said / is saying — different temporal and
    // epistemological positions. The learner picks what the journalist means.
    // Distractors exploit the adjacent tense that changes the claim's standing.
    // ──────────────────────────────────────────────────────────
    {
      id: "narr-frame",
      name: "Frame",
      label: "Attribution is not neutral",
      rule: ``,
      questions: [
        {
          qid: "narr-f01",
          pressureClass: "high",
          context: "He said it once, in 2019, and hasn't repeated or retracted it.",
          text: "In 2019, the director ___ that no tests had been suppressed.",
          answer: "said",
          options: ["said", "has said", "says", "is saying"],
          afterflavour: "Once. Specific year. Past simple."
        },
        {
          qid: "narr-f02",
          pressureClass: "high",
          context: "This is his current, live, repeated position. He's still saying it now.",
          text: "The director ___ that no tests were suppressed — he has said this in every interview since the story broke.",
          answer: "keeps saying",
          options: ["keeps saying", "is saying", "has said", "says"],
          afterflavour: "Keeps saying = repeated ongoing action with slight irritation. Is saying = right now. Has said = at some point. The context says every interview — keeps saying captures the repetition."
        },
        {
          qid: "narr-f04",
          pressureClass: "high",
          context: "She ___ that waiting times have fallen — the statistics published this morning say the opposite.",
          text: "She ___ the decision was made independently.",
          answer: "claims",
          options: ["claims", "says", "states", "confirms"],
          afterflavour: "Claims = journalistic distance, unverified assertion. Says = neutral, no doubt implied. States = formal neutral. Confirms = would mean the journalist accepts it as true. The data contradiction makes claims precise: it signals the journalist's scepticism."
        },
        {
          qid: "narr-f05",
          pressureClass: "high",
          context: "The fact has been independently verified by three sources.",
          text: "Experts ___ the report's central finding — three independent bodies, same conclusion.",
          answer: "have confirmed", altAnswers:["have shown", "have established"],
          options: ["have confirmed", "confirmed", "are confirming", "confirm"],
          afterflavour: "Have confirmed = present perfect. The confirmation has present relevance — the finding stands. Confirmed = closed past event."
        },
        {
          qid: "narr-f06",
          pressureClass: "medium",
          context: "Before founding the organisation, she ___ in three countries and led two UN commissions.",
          text: "Before founding the organisation, she ___ in three countries and led two UN commissions.",
          answer: "had worked", altAnswers:["had lived", "had taught"],
          options: ["had worked", "has worked", "worked", "was working"],
          afterflavour: "Had worked = past perfect, before a named past moment (founding). Has worked = present perfect, implies current relevance. Worked = past simple, correct if the sequence is clear. Was working = progressive. Before founding: past perfect establishes the sequence."
        },
        {
          qid: "narr-f07",
          pressureClass: "high",
          context: "The source said it off the record. The journalist is paraphrasing, not quoting.",
          text: "According to one source, the decision ___ made weeks before the announcement.",
          answer: "had been",
          options:["had been", "had been made", "was made", "has been made"],
          afterflavour: "Narrative past. Earlier than announcement → past perfect passive."
        },
        {
          qid: "narr-f08",
          pressureClass: "high",
          context: "A live interview. She's mid-sentence, speaking now.",
          text: "In the live interview, she ___ that the current funding model is incompatible with long-term stability.",
          answer: "is arguing",
          options: ["is arguing", "argues", "has argued", "argued"],
          afterflavour: "Is arguing = present progressive. She is mid-argument, speaking right now. Argues = general habit."
        },
      ]
    },

    // ──────────────────────────────────────────────────────────
    // ROUND 4 — Editorial tense
    // The writer's own choices: what tense to deploy for analysis,
    // historical summary, ongoing pattern, current interpretation.
    // This is the sharpest round — grammar as a writing decision.
    // ──────────────────────────────────────────────────────────
    {
      id: "narr-edit",
      name: "Editorial",
      label: "The writer's choice",
      rule: ``,
      questions: [
        
        {
          qid: "narr-e02",
          pressureClass: "high",
          context: "A long-form piece. Historical paragraph. The period is named and closed.",
          text: "Between 1948 and 1994, the apartheid state ___ movement through pass laws.",
          answer: "controlled",
          options: ["controlled", "has controlled", "controls", "had controlled"],
          afterflavour: "Named closed era → past simple. The system ended."
        },
        {
          qid: "narr-e03",
          pressureClass: "high",
          context: "Analysis paragraph. The pattern began then and the writer is connecting it to now.",
          text: "Since 2008, wages in the bottom income quartile ___ in real terms across most of the OECD.",
          answer: "have fallen",
          options: ["have fallen", "fell", "are falling", "had fallen"],
          afterflavour: "Have fallen = present perfect. Since 2008 = named starting point, ongoing consequence. Fell = closed past."
        },
        {
          qid: "narr-e05",
          pressureClass: "high",
          context: "Walter Rodney ___ that European development was built on African underdevelopment.",
          text: "Achebe ___ that the African novel must speak from inside the continent.",
          answer: "argued",
          options: ["argued", "argues", "has argued", "had argued"],
          afterflavour: "Argued = past simple, closed — he is dead. Argues = present simple, as if still alive — used in literary present for living authors. Has argued = present perfect, career-long position. Had argued = past perfect, before something else. Obituary, closed life: argued."
        },
        {
          qid: "narr-e06",
          pressureClass: "high",
          context: "Morrison ___ that memory and community are inseparable from identity — a claim her fiction enacts.",
          text: "In his fiction, Achebe ___ that colonialism destroyed a functioning world.",
          answer: "argues",
          options: ["argues", "argued", "has argued", "had argued"],
          afterflavour: "Argues = literary present, used for living or canonical authors whose work is still active. Argued = past simple, as if she is no longer relevant. Has argued = present perfect, completed position. Literary present for an active body of work: argues."
        },
        {
          qid: "narr-e08",
          pressureClass: "high",
          context: "The same analysis piece, two paragraphs earlier. Discussing what happened at the policy's introduction in 2019.",
          text: "When the policy ___ in 2019, smaller operators argued it would drive consolidation.",
          answer: "was introduced",
          options: ["was introduced", "is introduced", "has been introduced", "had been introduced"],
          afterflavour: "Was introduced = past simple passive. In 2019 = closed time."
        },
      ]
    }

  ],
  bossQuestions: []
});
