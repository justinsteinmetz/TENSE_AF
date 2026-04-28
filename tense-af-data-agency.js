// ═══════════════════════════════════════════════════════════════
// TENSE AF — AGENCY DISTORTION PACK
// Node 3 standard. No rules displayed. Context carries the signal.
//
// Rounds:
//   ag-vanish   — agent removal: passive as cover story
//   ag-surface  — agent restoration: naming what got unnamed
//   ag-frame    — active↔passive as editorial choice
//
// pressureClass:
//   high   — framing ambiguous, institutional register, no obvious signal
//   medium — structural cue present, some inference required
//   low    — direction clear, form the main task
// ═══════════════════════════════════════════════════════════════

PACKS.push({
  id: "agency-distortion",
  name: "Agency Distortion",
  subtitle: "Passive & Active Framing",
  colour: "#f59e0b",
  tier: "advanced",
  rounds: [
    {
      id: "ag-vanish",
      name: "Where did they go?",
      label: "The agent disappears",
      rule: ``,
      questions: [
        {
          qid: "ag-v01",
          pressureClass: "medium",
          context: "The project's budget ___ — the memo offered no explanation and named no author.",
          text: "The funding ___ cut without explanation.",
          answer: "was cut",
          options: ["was cut", "has been cut", "the director cut", "is cut"],
          afterflavour: "Was cut = agentless past passive. The director cut it = named agent. The memo chose the passive. The passive protects whoever made the call."
        },
        {
          qid: "ag-v02",
          pressureClass: "high",
          context: "The findings ___ to all senior staff — but nobody will say who wrote them.",
          text: "The findings ___ been circulated to all departments.",
          answer: "have been circulated",
          options: ["have been circulated", "were circulated", "were circulated by the director", "are circulated"],
          afterflavour: "Have been circulated = present perfect passive. Still circulating. Still agentless. The third option names an agent — the passive was chosen specifically to avoid that."
        },
        {
          qid: "ag-v03",
          pressureClass: "medium",
          context: "Workers ___ about the restructure by letter — not by their managers.",
          text: "Workers ___ informed by letter.",
          answer: "were informed",
          options: ["were informed", "were informed by HR", "informed themselves", "have been informed"],
          afterflavour: "Were informed = passive, agent absent from sentence. Were informed by HR = agent named. The grammar choice determines accountability."
        },
        {
          qid: "ag-v04",
          pressureClass: "high",
          context: "The overtime rules ___ with no consultation and no advance notice.",
          text: "The rules ___ changed overnight.",
          answer: "were changed",
          options: ["were changed", "the company changed", "have been changed", "are changed"],
          afterflavour: "Were changed = agentless passive. The company changed = active, named agent. The passive was chosen by the company. The active was chosen by the union."
        },
        {
          qid: "ag-v05",
          pressureClass: "low",
          context: "The branch ___ without any public consultation — forty jobs, one morning.",
          text: "The offices ___ closed last October.",
          answer: "were closed",
          options: ["were closed", "the company closed", "have been closed", "are closed"],
          afterflavour: "Were closed = agentless passive. The company closed = named agent. Same event, different grammar. One names the responsible party; one doesn't."
        },
        {
          qid: "ag-v06",
          pressureClass: "high",
          context: "Errors ___ in the statement — but the statement was issued without naming who made them.",
          text: "Mistakes ___ acknowledged in the statement.",
          answer: "were acknowledged",
          options: ["were acknowledged", "were acknowledged by the board", "have been acknowledged", "acknowledged themselves"],
          afterflavour: "Were acknowledged = agentless passive. Were acknowledged by the board = named agent. The acknowledgement happened. The responsibility did not."
        },
        {
          qid: "ag-v07",
          pressureClass: "medium",
          context: "The application ___ — for the third time — without explanation.",
          text: "Her application ___ rejected without explanation.",
          answer: "was rejected",
          options: ["was rejected", "was rejected by the panel", "has been rejected", "they rejected it"],
          afterflavour: "Was rejected = agentless passive. Was rejected by the panel = named agent. The panel exists. The passive keeps them out of the sentence."
        },
        {
          qid: "ag-v08",
          pressureClass: "high",
          context: "The files ___ before the review began — the deletion log shows a single user, 11pm on a Sunday.",
          text: "The files ___ deleted before the review.",
          answer: "were deleted",
          options: ["were deleted", "were deleted by a single user", "have been deleted", "deleted themselves"],
          afterflavour: "Were deleted = passive without agent. Were deleted by a single user = the log already shows the agent. The passive in official communications chose to leave that out."
        }
      ]
    },
    {
      id: "ag-surface",
      name: "Name it",
      label: "Restoring what was removed",
      rule: ``,
      questions: [
        {
          qid: "ag-s01",
          pressureClass: "medium",
          context: "The memo said: 'Targets were not met in Q3.' Rewrite it so the subject is named.",
          text: "The sales team ___ their targets in Q3.",
          answer: "did not meet",
          options: ["did not meet", "has not met", "were not meeting", "failed to meet"],
          afterflavour: "Did not meet = active past simple negative, exact transformation of 'were not met'. Has not met = present perfect, changes tense. Were not meeting = progressive. Failed to meet = adds a different verb. Did not meet is the direct active rewrite."
        },
        {
          qid: "ag-s02",
          pressureClass: "high",
          context: "The official statement said: 'Errors were made in the quarterly report.' Name who made them.",
          text: "The compliance team ___ errors in the quarterly report.",
          answer: "made",
          options: ["made", "produced", "introduced", "allowed"],
          afterflavour: "Made = direct active rewrite of 'were made'. Produced = different claim. Introduced = implies intentionality. Allowed = passive compliance. The transformation is exact: errors were made → the compliance team made errors."
        },
        {
          qid: "ag-s03",
          pressureClass: "medium",
          context: "The police statement said: 'A man was arrested in connection with the incident.' Rewrite it with officers as subject.",
          text: "Officers ___ a 34-year-old man in connection with the incident.",
          answer: "arrested",
          options: ["arrested", "detained", "apprehended", "took into custody"],
          afterflavour: "Arrested = exact active verb from 'was arrested'. Detained = softer, different legal status. Apprehended = formal. Took into custody = accurate but three words. Arrested is the direct active transformation."
        },
        {
          qid: "ag-s04",
          pressureClass: "low",
          context: "The report said: 'Figures in the annual report were misrepresented.' Name who did it.",
          text: "The director of communications ___ the figures in the annual report.",
          answer: "misrepresented",
          options: ["misrepresented", "distorted", "manipulated", "presented incorrectly"],
          afterflavour: "Misrepresented = exact verb from 'were misrepresented'. Distorted = different emphasis. Manipulated = implies intent. Presented incorrectly = accurate but passive in register. The active rewrite uses the same verb."
        },
        {
          qid: "ag-s05",
          pressureClass: "high",
          context: "The report said: 'Safety protocols were bypassed on three occasions.' The union wants the subject named.",
          text: "The shift manager ___ the safety protocols on three occasions.",
          answer: "bypassed",
          options: ["bypassed", "ignored", "circumvented", "set aside"],
          afterflavour: "Bypassed = exact verb from 'were bypassed'. Ignored = implies awareness without action. Circumvented = more deliberate. Set aside = softer. The union chose the same verb as the report but activated it."
        },
        {
          qid: "ag-s06",
          pressureClass: "medium",
          context: "The minutes said: 'An agreement was reached.' The opposition wants to know who reached it.",
          text: "The minister ___ the agreement by casting the deciding vote.",
          answer: "reached",
          options: ["reached", "passed", "carried", "approved"],
          afterflavour: "Reached = direct active transformation of 'was reached'. Passed = typically used of the motion, not the agreement. Carried = same issue. Approved = the minister's support, not the act of reaching. The minister cast the deciding vote: reached."
        }
      ]
    },
    {
      id: "ag-frame",
      name: "Choose the frame",
      label: "Active or passive — it's a decision",
      rule: ``,
      questions: [
        {
          qid: "ag-f01",
          pressureClass: "high",
          context: "Active: 'The board cut the project.' Passive: 'The project ___.'",
          text: "The protesters ___ tear gas by riot police.",
          answer: "was cut",
          options: ["was cut", "has been cut", "is cut", "had been cut"],
          afterflavour: "Was cut = past simple passive, matches 'cut' in the active. Has been cut = present perfect, changes the tense. Is cut = present simple. Had been cut = past perfect. The active is past simple: the passive must match."
        },
        {
          qid: "ag-f02",
          pressureClass: "high",
          context: "Opposition release: 'The government ___ the election.' Government release: 'The election was won.'",
          text: "Riot police ___ tear gas at protesters.",
          answer: "lost",
          options: ["lost", "has lost", "was losing", "had lost"],
          afterflavour: "Lost = past simple active, matches 'was won' (passive past simple) in the government release. Has lost = present perfect. Was losing = progressive. The government chose passive; the opposition chose active. Same tense, different frame."
        },
        {
          qid: "ag-f03",
          pressureClass: "medium",
          context: "Official: 'Proper procedure was not followed.' Union: 'Management ___ proper procedure.'",
          text: "The prisoner ___ while in custody.",
          answer: "did not follow",
          options: ["did not follow", "has not followed", "was not following", "had not followed"],
          afterflavour: "Did not follow = active past simple negative, matches 'was not followed'. Has not followed = present perfect. Was not following = progressive. The official version chose passive; the union chose active. Past simple: did not follow."
        },
        {
          qid: "ag-f04",
          pressureClass: "high",
          context: "Official record: 'The land was cleared.' Resistance account: 'Colonial forces ___ the land.'",
          text: "Millions of people ___ from their land during the colonial period.",
          answer: "cleared", altAnswers:["were removed", "were expelled"],
          options: ["cleared", "had cleared the land earlier", "were clearing it progressively", "have cleared it since"],
          afterflavour: "Cleared = active past simple, matches 'was cleared'. Had cleared = past perfect, changes sequence. Were clearing = progressive. Have cleared since = present perfect. One word, one decision: active voice names the agent."
        },
        {
          qid: "ag-f05",
          pressureClass: "medium",
          context: "The government wants the outcome. The opposition wants the subject.",
          text: "A settlement ___ finally reached after eighteen months.",
          answer: "was reached",
          options: ["was reached", "has been reached", "is reached", "had been reached"],
          afterflavour: "Was reached = past simple passive. After eighteen months. Closed."
        },
        {
          qid: "ag-f06",
          pressureClass: "high",
          context: "You're writing the correction. The original buried the company name.",
          text: "Cobalt ___ from the DRC under conditions that violated international labour standards.",
          answer: "was extracted", altAnswers:["was mined"],
          options: ["was extracted", "extracted", "has been extracting", "had extracted"],
          afterflavour: "Passive — but the location and conditions are named. Passive isn't always evasion."
        }
      ]
    }
  ],
  bossQuestions: []
});
