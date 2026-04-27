// ═══════════════════════════════════════════════════════════════
// TENSE AF — DATA: REPORTED SPEECH
// Intermediate. Node 3 standard. No rules displayed.
//
// Theme: what was said, what got changed in the saying.
// Backshift, reporting verbs, the gap between a quote and a report.
// Institutional deflection lives here. So does journalism.
//
// Rounds:
//   rsp-backshift  — tense shift in indirect speech
//   rsp-verbs      — said vs told vs asked vs claimed vs admitted
//   rsp-questions  — reported questions, word order, ask vs want to know
//   rsp-frame      — choosing a reporting verb as editorial decision
//
// pressureClass:
//   high   — reporting verb ambiguous, institutional register, framing stakes
//   medium — backshift clear but distractor plausible
//   low    — form the main task, context points directly
//
// Voice register: Mehdi Hasan x Kat Abu x Boots Riley
// Czech/German/Vietnamese names. Labour clarity. Imperial doublespeak.
// ═══════════════════════════════════════════════════════════════

PACKS.push({
  id: "reported-speech",
  name: "What Was Said",
  subtitle: "Reported Speech",
  colour: "#ec4899",
  tier: "intermediate",
  rounds: [
    {
      id: "rsp-backshift",
      name: "The Shift",
      label: "Tense moves back in time",
      rule: ``,
      questions: [
        {
          qid: "rsp-b01",
          pressureClass: "medium",
          context: "Monday morning. She told her manager the report would be on his desk by Friday. It is Thursday. The manager is asking colleagues if anyone has heard from her.",
          text: "She said she ___ it by Friday — but nobody has heard from her since Tuesday.",
          answer: "would finish",
          options: ["would finish", "will finish", "finishes", "has finished"],
          afterflavour: "Would finish = backshifted from 'will finish' — records what she said on Monday. Will finish = non-backshifted, implies the speaker still believes the commitment holds right now. Finishes = present simple, would mean it's a regular habit. Has finished = present perfect, done — but it isn't done, nobody's heard from her. The grammar records the promise; the context records the doubt."
        },
        {
          qid: "rsp-b02",
          pressureClass: "medium",
          context: "The CEO announced it at the all-staff meeting six weeks ago. The board has since denied it. Nobody has cancelled his security pass.",
          text: "He said he ___ the company at the end of the quarter — the board says that's not confirmed.",
          answer: "was leaving",
          options: ["was leaving", "is leaving", "has left", "would leave"],
          afterflavour: "Was leaving = backshifted from 'is leaving' — faithfully records what he said without endorsing it. Is leaving = not backshifted, implies the reporter treats it as currently true — but the board denies it. Has left = present perfect, done — he hasn't gone yet. Would leave = conditional, implies uncertainty about whether he meant it. Was leaving records the announcement. Is leaving takes a position."
        },
        {
          qid: "rsp-b03",
          pressureClass: "medium",
          context: "The minister said the programme ___ — a position three senior officials had already rejected by the time the article ran.",
          text: "The minister said the policy ___ and that no changes were planned.",
          answer: "was working",
          options: ["was working", "is working", "has been working", "has worked"],
          afterflavour: "Was working = backshifted, creates distance — the journalist is not endorsing the claim. Is working = journalist believes it. Was working + contradictory evidence = the grammar flags the gap."
        },
        {
          qid: "rsp-b04",
          pressureClass: "medium",
          context: "He told the committee he ___ the application three days before the deadline — he needed that on the record.",
          text: "He said he ___ the application three days before the deadline.",
          answer: "had already submitted",
          options: ["had already submitted", "has already submitted", "already submitted", "was submitting"],
          afterflavour: "Had already submitted = past perfect, backshifted from 'have already submitted'. Has already submitted = not backshifted, would mean you're treating his claim as a current fact. He's establishing prior compliance: past perfect."
        },
        {
          qid: "rsp-b05",
          pressureClass: "medium",
          context: "She said she ___ make it tomorrow — something came up.",
          text: "She said she ___ come the following day.",
          answer: "couldn't",
          options: ["couldn't", "can't", "won't", "wouldn't be able to"],
          afterflavour: "Couldn't = backshifted from 'can't'. Can't = not backshifted, direct quote posture. Won't = refusal, not inability. Wouldn't be able to = conditional. She stated inability: couldn't."
        },
        {
          qid: "rsp-b06",
          pressureClass: "high",
          context: "Monday's statement said no decisions ___ — Tuesday's contracts said otherwise.",
          text: "The statement said no decisions ___ been taken — but the contracts were signed on Tuesday.",
          answer: "had been taken",
          options: ["had been taken", "have been taken", "were taken", "had not yet been taken"],
          afterflavour: "Had been taken = backshifted from 'have been taken'. Present perfect passive → past perfect passive in reported speech. Have been taken = not backshifted, would mean the journalist is quoting directly. The statement was a lie, but the grammar faithfully records what it said."
        },
        {
          qid: "rsp-b07",
          pressureClass: "high",
          context: "On day one, the company said it ___ fully with the investigation.",
          text: "The company said it ___ fully with the investigation — it did not.",
          answer: "would cooperate",
          options: ["would cooperate", "will cooperate", "had cooperated", "was cooperating"],
          afterflavour: "Would cooperate = backshifted from 'will cooperate'. The statement is past. Will cooperate = not backshifted, direct quote. Had cooperated = would mean it had already happened. The grammar records the commitment. The 3,000 documents record what happened."
        },
        {
          qid: "rsp-b08",
          pressureClass: "high",
          context: "In his 2019 testimony, Marek said he ___ what happened — the inquiry is now questioning whether that was true.",
          text: "He said he ___ what had happened.",
          answer: "knew",
          options: ["knew", "knows", "had known", "would know"],
          afterflavour: "Knew = backshifted from 'know'. Knows = not backshifted, would mean you believe his claim is still accurate. Had known = past perfect, would place the knowledge before the testimony. 2019 is closed: past simple backshift."
        }
      ]
    },
    {
      id: "rsp-verbs",
      name: "Said or Told",
      label: "Choosing the right reporting verb",
      rule: ``,
      questions: [
        {
          qid: "rsp-v01",
          pressureClass: "low",
          context: "The minister ___ that growth had reached 3.2% — a claim the IMF later disputed.",
          text: "She ___ him she would be late.",
          answer: "announced",
          options: ["announced", "revealed", "admitted", "argued"],
          afterflavour: "Announced = neutral reporting of a claim. Revealed = implies it was previously hidden. Admitted = implies unwillingness — wrong for an official claim. Argued = implies a contested position. Announced is the neutral choice for an official statement."
        },
        {
          qid: "rsp-v02",
          pressureClass: "low",
          context: "He made a public statement. No specific person addressed.",
          text: "He ___ the investigation would be complete by summer.",
          answer: "said",
          options: ["said", "told", "asked", "spoke"],
          afterflavour: "Said, no object. The statement was general."
        },
        {
          qid: "rsp-v03",
          pressureClass: "medium",
          context: "After twenty minutes of qualifications, she finally ___ it was her responsibility.",
          text: "She ___ she had made the wrong decision.",
          answer: "admitted",
          options: ["admitted", "said", "claimed", "acknowledged"],
          afterflavour: "Admitted = reluctant acknowledgement after resistance. Said = neutral, no resistance implied. Claimed = unverified, implies doubt — wrong here since she's saying it herself. Acknowledged = weaker, more formal. The twenty minutes of resistance is what makes admitted precise."
        },
        {
          qid: "rsp-v04",
          pressureClass: "medium",
          context: "The official denied it for six months. The audit report is now public.",
          text: "The official ___ the funds had been allocated correctly.",
          answer: "claimed",
          options: ["admitted", "claimed", "confirmed", "stated"],
          afterflavour: "Claimed = unverified assertion, implies the journalist doubts it — which the audit confirms is right. Admitted = reluctant acknowledgement, opposite of what happened. Confirmed = would mean it was true and established. Stated = neutral, loses the doubt. The audit is the evidence the journalist is working from."
        },
        {
          qid: "rsp-v05",
          pressureClass: "high",
          context: "The spokesperson's statement after the scandal. Careful word choice throughout.",
          text: "The spokesperson ___ the company had always followed proper procedures.",
          answer: "insisted",
          options: ["insisted", "admitted", "confirmed", "acknowledged"],
          afterflavour: "Insisted: repeated assertion under pressure. That's not the same as confirmed."
        },
        {
          qid: "rsp-v06",
          pressureClass: "high",
          context: "The union ___ that the proposed changes undermined safety — their position throughout the dispute.",
          text: "He ___ any knowledge of the payments.",
          answer: "maintained",
          options: ["maintained", "claimed", "argued", "insisted"],
          afterflavour: "Maintained = held a position over time under challenge. Claimed = implies doubt. Argued = implies debate. Insisted = stronger than maintained, implies others were trying to dismiss it. Three weeks of holding the same position: maintained."
        },
        {
          qid: "rsp-v07",
          pressureClass: "high",
          context: "The researcher's findings directly contradicted the government's position. She published anyway.",
          text: "She ___ that the official data had been misrepresented.",
          answer: "argued",
          options: ["argued", "told", "said", "admitted"],
          afterflavour: "Argued: contested claim with evidence. Said is just transmission."
        },
        {
          qid: "rsp-v08",
          pressureClass: "medium",
          context: "The regulator ___ it would investigate the matter fully — six months later, no findings had been published.",
          text: "She ___ the board she would not sign the contract.",
          answer: "promised",
          options: ["promised", "claimed", "stated", "maintained"],
          afterflavour: "Promised = a commitment made before evidence. Claimed = implies the promise was false from the start (plausible). Stated = neutral. Maintained = implies ongoing position. The six months with no findings makes promised the most precise: a commitment not followed through."
        }
      ]
    },
    {
      id: "rsp-questions",
      name: "Asking in Reverse",
      label: "Reported questions change word order",
      rule: ``,
      questions: [
        {
          qid: "rsp-q01",
          pressureClass: "low",
          context: "He told the interviewer where he ___ — a question about declaring his primary residence.",
          text: "She asked him where he ___.",
          answer: "lived",
          options: ["lived", "told her he lived in Brno", "lives in Brno still", "was living at the time"],
          afterflavour: "Lived = backshifted from 'lives'. Told her he lived = reported but redundant structure. Lives = direct speech, not reported. Was living at the time = progressive, changes the meaning. Reported question: statement word order, backshifted."
        },
        {
          qid: "rsp-q02",
          pressureClass: "low",
          context: "The chair asked whether the minister ___ — it was the central question of the session.",
          text: "She asked whether he ___ the report.",
          answer: "had read",
          options: ["had read", "has read it", "read it aloud", "was reading it"],
          afterflavour: "Had read = past perfect, backshifted from 'have read'. Has read = present perfect, not backshifted — would mean the clerk is treating it as still relevant now. Read it aloud = different action. Was reading = progressive, different meaning. Past perfect in reported whether-clause."
        },
        {
          qid: "rsp-q03",
          pressureClass: "medium",
          context: "The journalist asked whether the minister ___ about the payments before authorising the contract.",
          text: "She asked whether the minister ___ about the payments before authorising the contract.",
          answer: "had known",
          options: ["had known", "has known", "knew", "did know"],
          afterflavour: "Had known = backshifted from 'did know'. Past simple → past perfect. No inversion. The whether-clause carries the charge."
        },
        {
          qid: "rsp-q04",
          pressureClass: "medium",
          context: "She asked when the next train ___ — the board had not been updated.",
          text: "She asked the passenger what time the train ___.",
          answer: "arrived",
          options: ["arrived", "was arriving at that moment", "has arrived since", "would arrive soon"],
          afterflavour: "Arrived = backshifted from 'arrives'. Was arriving at that moment = progressive, implies it was already coming. Has arrived since = present perfect, current. Would arrive soon = conditional. Timetable question, backshifted: arrived."
        },
        {
          qid: "rsp-q05",
          pressureClass: "high",
          context: "The inquiry asked who ___ the transfer without board approval.",
          text: "The inquiry asked who ___ the transfer without board approval.",
          answer: "had authorised",
          options: ["had authorised", "has authorised", "authorised", "did authorise"],
          afterflavour: "Had authorised = backshifted from 'did authorise'. The question was about a past action — past simple shifts to past perfect. No inversion. Who + statement word order."
        },
        {
          qid: "rsp-q06",
          pressureClass: "high",
          context: "The investigator asked why the evidence ___ — it was the central question of the inquiry.",
          text: "The investigator asked why the evidence ___ destroyed before the audit.",
          answer: "had been destroyed",
          options: ["had been destroyed", "was destroyed", "has been destroyed", "had destroyed itself"],
          afterflavour: "Had been destroyed = past perfect passive, backshifted from 'was destroyed'. Was destroyed = past simple, not backshifted — would mean the investigator is quoting directly. Has been destroyed = present perfect. Had destroyed itself = wrong agent. Reported question, past perfect passive."
        }
      ]
    },
    {
      id: "rsp-frame",
      name: "The Reporting Verb as Frame",
      label: "Every reporting verb is an editorial decision",
      rule: ``,
      questions: [
        {
          qid: "rsp-f01",
          pressureClass: "high",
          context: "Even after the ruling, the minister ___ that the policy was legally sound.",
          text: "The Home Office ___ the deportations had been carried out lawfully.",
          answer: "maintained",
          options: ["maintained", "admitted", "confirmed", "announced"],
          afterflavour: "Maintained = held a position under direct challenge. Admitted would mean she conceded. Confirmed would mean the court agreed. Announced = first time saying it — she's said it for three years. Only maintained captures the resistance to contrary evidence."
        },
        {
          qid: "rsp-f02",
          pressureClass: "high",
          context: "The document was leaked. The newspaper got it. The company had denied the document existed.",
          text: "The leaked report ___ that safety warnings had been suppressed for three years.",
          answer: "showed",
          options: ["showed", "claimed", "suggested", "admitted"],
          afterflavour: "Showed: documentary evidence. Claimed would imply uncertainty. The document is not uncertain."
        },
        {
          qid: "rsp-f03",
          pressureClass: "high",
          context: "The CEO testified for four hours. Under cross-examination, his account changed twice.",
          text: "The CEO ___ he had not been present at the relevant meeting.",
          answer: "claimed",
          options: ["claimed", "confirmed", "admitted", "explained"],
          afterflavour: "Claimed. Unverified. Contested. The verb signals that."
        },
        {
          qid: "rsp-f04",
          pressureClass: "medium",
          context: "The audit found the discrepancy. The finance director's response to the audit was to agree with its findings.",
          text: "The finance director ___ that the accounts had contained errors.",
          answer: "acknowledged",
          options: ["acknowledged", "claimed", "insisted", "denied"],
          afterflavour: "Acknowledged: reluctant admission of something real. Stronger than said, softer than admitted."
        },
        {
          qid: "rsp-f05",
          pressureClass: "medium",
          context: "The activist had been saying this for years. The study confirmed it. She held a press conference.",
          text: "She ___ the study had vindicated everything campaigners had been saying.",
          answer: "said",
          options: ["said", "claimed", "admitted", "insisted"],
          afterflavour: "Said is neutral here — the evidence is on her side. Claimed would undercut that."
        },
        {
          qid: "rsp-f06",
          pressureClass: "high",
          context: "The government's official position, stated repeatedly, contradicted by satellite imagery released this week.",
          text: "Ministers had ___ for months that no military activity had taken place in the region.",
          answer: "insisted",
          options: ["insisted", "confirmed", "said", "admitted"],
          afterflavour: "Insisted: repeated assertion under pressure, now contradicted. The verb holds the whole arc."
        }
      ]
    }
  ],
  bossQuestions: [
    {
      qid: "rsp-gap01",
      pressureClass: "medium",
      context: "She said she ___ the files the following day.",
      text: "She said she ___ send the files the following day.",
      answer: "would send",
      type: "gap",
      afterflavour: "Would send = would + base verb. Backshifted from 'will send'. The commitment is still pending."
    },
    {
      qid: "rsp-gap02",
      pressureClass: "medium",
      context: "Jakub told the committee he ___ spoken to the lawyer.",
      text: "He said he ___ already spoken to the lawyer.",
      answer: "had already",
      type: "gap",
      afterflavour: "Had already spoken = past perfect. Backshifted from 'have already spoken'. He placed the lawyer call before the committee hearing."
    },
    {
      qid: "rsp-gap03",
      pressureClass: "high",
      context: "The hearing asked whether he ___ the document before signing.",
      text: "The chair asked whether he ___ seen the document.",
      answer: "had seen",
      type: "gap",
      afterflavour: "Had seen = past perfect. Backshifted from 'did see/saw'. Past simple → past perfect in reported questions. No inversion."
    },
    {
      qid: "rsp-gap04",
      pressureClass: "high",
      context: "The company's statement, word for word: 'We have always acted in accordance with the law.' The journalist is writing the story.",
      text: "The company ___ it had always acted in accordance with the law.",
      answer: "claimed",
      type: "gap",
      afterflavour: "Claimed. The statement is self-serving and unverified. The verb does the work."
    }
  ]
});
