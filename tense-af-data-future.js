// ═══════════════════════════════════════════════════════════════
// TENSE AF — DATA: FUTURE FORMS
// Foundation. Mode A + Mode B hybrid.
// Situations carry the signal. Rules displayed for form rounds only.
//
// Theme: how English marks future time — four distinct tools.
// Will vs going to: the decision vs the evidence.
// Present progressive as future: the arrangement.
// Present simple as future: the timetable.
//
// Rounds:
//   fut-will       — spontaneous decisions, promises, predictions (no evidence)
//   fut-goingto    — prior plans, visible evidence
//   fut-arrange    — present progressive for fixed arrangements
//   fut-timetable  — present simple for scheduled events
//   fut-choice     — forced discrimination across all four
//
// pressureClass: low/medium/high
//
// Voice register: Adam Mockler x Boots Riley
// Czech/German/Vietnamese names. Situation first. Grammar invisible.
// ═══════════════════════════════════════════════════════════════

PACKS.push({
  id: "future-forms",
  name: "What Comes Next",
  subtitle: "Future Forms",
  colour: "#f97316",
  tier: "foundation",
  rounds: [
    {
      id: "fut-will",
      name: "Decided Now",
      label: "Spontaneous decisions, promises, and predictions",
      rule: `<strong>Will</strong> is for decisions made <em>at the moment of speaking</em>, promises, and predictions without visible evidence.<span class="rt-eg">I'll get the door. · I promise I'll call. · It'll probably rain.</span>`,
      questions: [
        {
          qid: "fut-w01",
          pressureClass: "low",
          context: "Someone in the next room drops something. Nobody else moves.",
          text: "'I ___ check — nobody else is moving.'",
          answer: "will go and check",
          options: ["will go and check", "am going to check", "am checking", "check"],
          afterflavour: "Will go and check = spontaneous decision. Not planned. Decided now."
        },
        {
          qid: "fut-w02",
          pressureClass: "low",
          context: "She's upset about the news. He's trying to reassure her.",
          text: "'I ___ always be here — you just have to call.'",
          answer: "will always be",
          options: ["will always be", "am going to be", "am being", "would be"],
          afterflavour: "Will = promise. Made now. Not a schedule."
        },
        {
          qid: "fut-w03",
          pressureClass: "low",
          context: "Nobody ordered coffee. The waiter is coming over.",
          text: "'I ___ have the espresso, please — actually, make it a double.'",
          answer: "will have",
          options: ["will have", "am going to have", "am having", "have"],
          afterflavour: "Will have = spontaneous decision at the moment of ordering."
        },
        {
          qid: "fut-w04",
          pressureClass: "medium",
          context: "The forecast doesn't exist. She's looking at the clouds and guessing.",
          text: "'It ___ probably be cold by evening — you should take a layer.'",
          answer: "will probably be",
          options: ["will probably be", "is going to be", "is probably", "becomes"],
          afterflavour: "Will = prediction from personal judgement. No visible evidence yet."
        },
        {
          qid: "fut-w05",
          pressureClass: "medium",
          context: "The invoice hasn't arrived. He's reassuring a colleague.",
          text: "'Don't worry — I ___ sort it out first thing tomorrow morning.'",
          answer: "will sort",
          options: ["will sort", "am going to sort", "am sorting", "sort"],
          afterflavour: "Will sort = promise made at this moment. Not pre-planned."
        },
        {
          qid: "fut-w06",
          pressureClass: "high",
          context: "The negotiation is failing. The other side keeps adding conditions. She's reaching a limit.",
          text: "'If they add another clause, I ___ walk out — I mean it.'",
          answer: "will walk",
          options: ["will walk", "am going to walk", "am walking", "walk"],
          afterflavour: "Will walk = spontaneous warning made now. Going to = had already decided before entering the room."
        }
      ]
    },
    {
      id: "fut-goingto",
      name: "Already Decided or Coming Fast",
      label: "Prior plans and visible evidence",
      rule: `<strong>Going to</strong> is for plans already made before speaking, or for situations where visible evidence makes the outcome clear.<span class="rt-eg">She's going to apply. (decided last week) · He's going to fall. (you can see it)</span>`,
      questions: [
        {
          qid: "fut-g01",
          pressureClass: "low",
          context: "She ___ get the residency permit — she's been through the process twice and her paperwork is complete.",
          text: "She ___ apply for the transfer — she already started the paperwork.",
          answer: "is going to",
          options: ["is going to", "will", "has applied to", "is applying for"],
          afterflavour: "Is going to = prior evidence (complete paperwork, previous experience). Will = prediction from judgement, no prior trajectory. Has applied to = present perfect, states the act. Is applying = in progress. Evidence on the desk: going to."
        },
        {
          qid: "fut-g02",
          pressureClass: "low",
          context: "Those folders ___ fall — nobody is going to catch them in time.",
          text: "Those files ___ fall. Don't touch the desk.",
          answer: "are going to",
          options: ["are going to", "will", "are about to", "look like they're falling"],
          afterflavour: "Are going to = visible evidence of imminent outcome. Will = prediction from judgement, no prior visual. Are about to = accurate but not the target form. Look like they're falling = descriptive present. Visible trajectory: going to."
        },
        {
          qid: "fut-g03",
          pressureClass: "medium",
          context: "They ___ move to the flat on Mánesova — the deposit is paid.",
          text: "They ___ move to the flat near the tram line.",
          answer: "are going to",
          options: ["are going to", "will", "have decided to", "are thinking of moving to"],
          afterflavour: "Are going to = prior decision already made and actioned (deposit paid). Will = decision made at moment of speaking. Have decided to = present perfect, states the decision. Are thinking of = implies it's not settled. Deposit paid: going to."
        },
        {
          qid: "fut-g04",
          pressureClass: "medium",
          context: "His blood pressure reading. The GP's face.",
          text: "The doctor said he ___ need to make some changes.",
          answer: "was going to",
          options: ["was going to", "would", "is going to", "will"],
          afterflavour: "Reported future from a past moment — going to shifts to was going to."
        },
        {
          qid: "fut-g05",
          pressureClass: "high",
          context: "The clouds are black. The wind has picked up. She's been in this valley before.",
          text: "That storm ___ hit before noon.",
          answer: "is going to",
          options: ["is going to", "will", "hits", "is hitting"],
          afterflavour: "Visible evidence — the signs are all there. Going to, not will."
        },
        {
          qid: "fut-g06",
          pressureClass: "high",
          context: "She ___ break the course record — her training times put her two minutes ahead of it.",
          text: "She ___ run the marathon in April — she's been preparing since last year.",
          answer: "is going to",
          options: ["is going to", "will", "is running to", "has trained to"],
          afterflavour: "Is going to = prior evidence (training times). Will = prediction from judgement. Is running to = purpose, not future. Has trained to = present perfect, states preparation. Evidence in the times: going to."
        }
      ]
    },
    {
      id: "fut-arrange",
      name: "Fixed Arrangements",
      label: "Present progressive for confirmed plans",
      rule: `<strong>Present progressive</strong> describes future events that are already arranged — confirmed, often with others involved.<span class="rt-eg">I'm meeting her at six. · They're flying out on Thursday.</span>`,
      questions: [
        {
          qid: "fut-a01",
          pressureClass: "low",
          context: "She booked the table last week. 7 pm. He knows about it.",
          text: "We ___ at the restaurant on Friday. The table is booked.",
          answer: "are eating",
          options: ["are eating", "will eat", "eat", "are going to eat"],
          afterflavour: "Arrangement. Both sides confirmed. Present progressive."
        },
        {
          qid: "fut-a02",
          pressureClass: "low",
          context: "The tickets were bought in January. Their bags are packed.",
          text: "They ___ to Berlin next week. Flights are sorted.",
          answer: "are flying",
          options: ["are flying", "will fly", "fly", "are going to fly"],
          afterflavour: "Confirmed arrangement. Progressive marks that."
        },
        {
          qid: "fut-a03",
          pressureClass: "medium",
          context: "The calendar invite was accepted. Both sides confirmed.",
          text: "She ___ the new manager tomorrow morning.",
          answer: "is meeting",
          options: ["is meeting", "will meet", "meets", "is going to meet"],
          afterflavour: "Both sides confirmed. That's an arrangement. Progressive."
        },
        {
          qid: "fut-a04",
          pressureClass: "medium",
          context: "The builders are already on site. They started yesterday.",
          text: "They ___ the roof next week — they're already on site.",
          answer: "are finishing",
          options: ["are finishing", "will finish", "finish", "are going to finish"],
          afterflavour: "Arranged and underway. Present progressive."
        },
        {
          qid: "fut-a05",
          pressureClass: "high",
          context: "The talks have been scheduled for six weeks. Both delegations have confirmed attendance.",
          text: "The two sides ___ again in Geneva on Monday.",
          answer: "are meeting",
          options: ["are meeting", "will meet", "meet", "are going to meet"],
          afterflavour: "Confirmed arrangement. Progressive. Not a spontaneous plan."
        }
      ]
    },
    {
      id: "fut-timetable",
      name: "On Schedule",
      label: "Present simple for fixed timetables",
      rule: `<strong>Present simple</strong> describes future events on a fixed schedule — timetables, programmes, official times.<span class="rt-eg">The train leaves at 08:42. · The conference starts Monday.</span>`,
      questions: [
        {
          qid: "fut-t01",
          pressureClass: "low",
          context: "She's checking the station board.",
          text: "The train ___ at 08:42.",
          answer: "leaves",
          options: ["leaves", "will leave", "is leaving", "is going to leave"],
          afterflavour: "Timetable. Present simple. This is what the board says."
        },
        {
          qid: "fut-t02",
          pressureClass: "low",
          context: "The programme is printed. The schedule is fixed.",
          text: "The opening ceremony ___ at nine tomorrow morning.",
          answer: "starts",
          options: ["starts", "will start", "is starting", "is going to start"],
          afterflavour: "Scheduled event. Present simple marks institutional time."
        },
        {
          qid: "fut-t03",
          pressureClass: "medium",
          context: "The website says it. The tickets say it. The doors say it.",
          text: "The museum ___ on Mondays.",
          answer: "closes",
          options: ["closes", "will close", "is closing", "is going to close"],
          afterflavour: "Permanent schedule. Present simple."
        },
        {
          qid: "fut-t04",
          pressureClass: "medium",
          context: "It's in the official parliamentary calendar. Not up for debate.",
          text: "Parliament ___ on the fourteenth.",
          answer: "reconvenes",
          options: ["reconvenes", "will reconvene", "is reconvening", "is going to reconvene"],
          afterflavour: "Official timetable. Present simple."
        },
        {
          qid: "fut-t05",
          pressureClass: "high",
          context: "The academic calendar has been set since August. Everyone has it.",
          text: "The semester ___ on the third of September.",
          answer: "begins",
          options: ["begins", "will begin", "is beginning", "is going to begin"],
          afterflavour: "Institutional schedule. Present simple. Unchanging."
        }
      ]
    },
    {
      id: "fut-choice",
      name: "Which Signal?",
      label: "All four futures — read the context",
      rule: ``,
      questions: [
        {
          qid: "fut-c01",
          pressureClass: "high",
          context: "The phone rings. She was already standing — heading to the kitchen. He just walked in the door.",
          text: "'I ___ get it — sit down, you just got in.'",
          answer: "will get",
          options: ["will get", "am going to get", "am getting", "get"],
          afterflavour: "Will get = spontaneous offer formed at this moment — she wasn't getting up for the phone, she was getting up for water. The offer is new. Am going to get = would mean she had already planned to answer it before it rang — she hadn't. Am getting = present progressive, implies she's already mid-action answering it. Get = present simple, wrong. The water is the evidence: going to was for the kitchen, will is for the phone."
        },
        {
          qid: "fut-c02",
          pressureClass: "high",
          context: "Both teams reserved the room last week. The meeting is in both calendars. Tuesday, 3pm. But one side now wants to move it.",
          text: "'We ___ the contract terms on Tuesday — that's been in the diary for a week. If you need a different time, that's a separate conversation.'",
          answer: "are reviewing",
          options: ["are reviewing", "will review", "review", "are going to review"],
          afterflavour: "Are reviewing = present progressive for a confirmed, fixed arrangement — already in the diary, both sides committed. Will review = would imply it's not yet settled, open to change — exactly what the speaker is refusing. Review = present simple, makes it a general habit rather than a specific booked event. Are going to review = prior decision, emphasis on intention — but the arrangement is already in the calendar, progressive is more precise. Are reviewing: it's already locked in."
        },
        {
          qid: "fut-c03",
          pressureClass: "high",
          context: "He's been saving for three years. He asked about delivery slots last Tuesday. His partner thinks he's still deciding.",
          text: "He ___ buy the car — he's already asked about delivery slots. His partner doesn't know yet.",
          answer: "is going to buy",
          options: ["is going to buy", "will buy", "is buying", "has decided to buy"],
          afterflavour: "Is going to buy = prior decision already in motion, physical evidence — delivery slots asked. Will buy = spontaneous or uncertain, as if the decision is forming now — it formed last Tuesday. Is buying = present progressive, implies it's already arranged and confirmed with the dealer. Has decided to buy = states the mental act of decision without implying physical evidence. Going to: the evidence chain exists — savings, dealership visit, delivery enquiry — the outcome is already in motion. Is buying would also work if the purchase were confirmed. His partner's ignorance doesn't change the physics of the decision."
        },
        {
          qid: "fut-c04",
          pressureClass: "high",
          context: "The last bus is scheduled at 23:15. It's now 23:08. The website says on time. The driver's radio says there's a problem at the depot.",
          text: "The timetable says the last bus ___ at 23:15. The driver says it ___ tonight — there's a problem at the depot.",
          answer: "leaves",
          options: ["leaves", "will leave", "is leaving", "isn't leaving"],
          afterflavour: "Leaves = timetable, scheduled fact — what the printed time says, present simple for fixed schedule. Will leave = future prediction, less certain — not wrong but weaker than the timetable form. Is leaving = present progressive arrangement — would mean both sides have confirmed it. Isn't leaving = the driver's information, negating the timetable. The timetable says leaves. The driver's radio says something else entirely. The grammar doesn't resolve which source is right — the situation does."
        },
        {
          qid: "fut-c05",
          pressureClass: "high",
          context: "Black ice. Three bags. He's already shifted his weight to the wrong foot.",
          text: "He ___ fall — look at where his weight is. Or: 'He ___ fall — the road looks clear to me.'",
          answer: "is going to fall",
          options: ["is going to fall", "will fall", "might fall", "is falling"],
          afterflavour: "Is going to fall = visible physical trajectory already established — weight on wrong foot, ice, bags. The outcome is in the physics. Will fall = prediction from judgement — someone who can't see the ice clearly might say this. Might fall = uncertainty, contradicts the visible evidence if you can see the ice. Is falling = progressive, it's already happening — not yet. The second sentence in quotes is someone who can't see what you can see: will, not going to. Same moment, different information. Going to requires the evidence to be observable from your position."
        },
        {
          qid: "fut-c06",
          pressureClass: "high",
          context: "She left the office late. She has been watching the delay board for ten minutes. She calls.",
          text: "'I ___ miss the last connection — the board has been showing delays for twenty minutes. I knew when I left the office.'",
          answer: "am going to miss",
          options: ["am going to miss", "will miss", "am missing", "miss"],
          afterflavour: "Am going to miss = trajectory already visible and established — twenty minutes of delay boards, plus she knew when she left the office. The evidence chain is explicit. Will miss = realisation at this moment of speaking — but she says 'I knew when I left the office', which rules out a spontaneous will. Am missing = present progressive, it's happening now — not yet, she's still on the platform. Miss = present simple, wrong frame. The 'I knew when I left' is the key: going to, not will."
        }
      ]
    }
  ],
  bossQuestions: [
    {
      qid: "fut-gap01",
      pressureClass: "low",
      context: "She is stuck on the Tube. It has been stopped for twenty minutes. She types a message.",
      text: "'I ___ be late — I'm still at the office and the Tube is down.'",
      answer: "will",
      type: "gap",
      afterflavour: "Will = spontaneous decision made at the moment of speaking. Going to would mean she had already decided before getting on the Tube. She just found out: will."
    },
    {
      qid: "fut-gap02",
      pressureClass: "medium",
      context: "She registered for the conference in January. It's now March. The event is next week.",
      text: "She ___ the annual conference next week.",
      answer: "is attending",
      type: "gap",
      afterflavour: "Fixed arrangement, confirmed in advance. Progressive."
    },
    {
      qid: "fut-gap03",
      pressureClass: "medium",
      context: "He's eaten nothing but pastries all week. The doctor's appointment is tomorrow.",
      text: "He ___ feel terrible by Thursday.",
      answer: "is going to",
      type: "gap",
      afterflavour: "Visible evidence — the cause is already in motion. Going to."
    },
    {
      qid: "fut-gap04",
      pressureClass: "high",
      context: "The departure board. 07:55. That is what it says.",
      text: "The flight ___ at 07:55.",
      answer: "departs",
      type: "gap",
      afterflavour: "Timetable. Present simple. It says so on the board."
    },
    {
      qid: "fut-gap05",
      pressureClass: "high",
      context: "She looked at four schools, spoke to three head teachers, and made her choice in November.",
      text: "She ___ send her son to the school on the hill — she decided months ago.",
      answer: "is going to",
      type: "gap",
      afterflavour: "Long-standing prior decision. Going to."
    }
  ]
});
