// ═══════════════════════════════════════════════════════════════
// TENSE AF — DATA: ADVANCED TIER
// Node 3 standard. Sharper contexts. Political/structural layering
// where natural (as breath and as pressure).
// ═══════════════════════════════════════════════════════════════

PACKS.push(
// ─────────────────────────────────────────────────────────────
// PAST PERFECT
// ─────────────────────────────────────────────────────────────
{
  id: "past-perfect",
  name: "Before the Before",
  subtitle: "Past Perfect",
  colour: "#3b82f6",
  tier: "advanced",
  rounds: [
    {
      id: "papf-form",
      name: "Had + past participle",
      label: "The past before the past",
      rule: `<strong>Past perfect</strong> describes an action completed <em>before</em> another past action.<br>Form: <strong>had + past participle</strong>.<span class="rt-eg">She had already left when I arrived.</span>`,
      questions: [
        
        
        
        
      
        { qid:"papf-f01", pressureClass:"medium",
          context: "She ___ her keys on the desk — she realised it as she reached the barrier.",
          text:"She ___ her keys on the desk.",
          answer:"had left", options: ["had left", "left them there deliberately", "has left them there before", "was leaving when she remembered"],
          afterflavour: "Had left = past perfect, the earlier action before she reached the barrier. Left them deliberately = past simple, implies intent. Has left before = present perfect, pattern. Was leaving when she remembered = progressive, wrong direction." },
        { qid:"papf-f02", pressureClass:"medium",
          context: "By the time she reached hospital, the infection ___ to three separate sites.",
          text:"By the time he reached the hospital, the infection ___ into his bloodstream.",
          answer:"had spread", options: ["had spread", "spread quickly once treated", "has spread to new sites", "was spreading as they watched"],
          afterflavour: "Had spread = past perfect, before the hospital visit. Spread quickly once treated = past simple, after treatment. Has spread = present perfect, current relevance. Was spreading as they watched = progressive, implies ongoing during the scan. Arrival is the reference point: past perfect for what came before." },
        { qid:"papf-f03", pressureClass:"high",
          context:"The inquiry opened in 2021. The documents were requested in 2022. They were gone.",
          text:"By the time the inquiry requested them, the Home Office ___ the Windrush records.",
          answer:"had destroyed", options:["had destroyed","destroyed","has destroyed","was destroying"],
          afterflavour:"Destroyed before the request. The earlier action gets past perfect." },
        { qid:"papf-f04", pressureClass:"high",
          context:"The compensation offer came. Many of those affected weren't there to receive it.",
          text:"By 2018, several Windrush generation members ___ — before any compensation was paid.",
          answer:"had died", options:["had died","died","have died","were dying"],
          afterflavour:"Died before the compensation. Had + past participle." },
        { qid:"papf-f05", pressureClass:"high",
          context:"Mansa Musa arrived in Cairo in 1324. Egyptian merchants were already nervous.",
          text:"Word of his wealth ___ Cairo before he arrived.",
          answer:"had reached", options:["had reached","reached","has reached","was reaching"],
          afterflavour:"Word arrived first. His arrival came second. Past perfect for the first." }

        ]
    },
    {
      id: "papf-sequence",
      name: "Sequencing Past Events",
      label: "Earlier action, later consequence",
      rule: `When two past events matter, put the <strong>earlier one</strong> in past perfect and the <strong>later one</strong> in past simple.`,
      questions: [
        
        
        
        
      
        { qid:"papf-s01", pressureClass:"medium",
          context:"The fire investigators arrived on Monday. The fire started on Saturday.",
          text:"When investigators arrived, the building ___ for two days.",
          answer:"had been burning", options:["had been burning","was burning","burned","has been burning"],
          afterflavour:"Two days of burning before they arrived. Sequence matters." },
        { qid:"papf-s02", pressureClass:"high",
          context:"The Berlin Conference happened in 1884. African kingdoms had been trading and governing for centuries.",
          text:"By the time European powers drew the map, African civilisations ___ complex trade networks for centuries.",
          answer:"had built", options:["had built","built","have built","were building"],
          afterflavour:"Built before the map. The sequence is the argument." },
        { qid:"papf-s03", pressureClass:"high",
          context:"Gandhi was arrested in 1930 after the Salt March. He had already made the salt.",
          text:"By the time the British arrested him, Gandhi ___ to the sea and made salt in front of thousands.",
          answer:"had walked", options:["had walked","walked","has walked","was walking"],
          afterflavour:"The walk came first. The arrest came second. Past perfect for first." },
        { qid:"papf-s04", pressureClass:"high",
          context:"The Benin Bronzes arrived in European museums in 1897. The court of Benin had created them over centuries.",
          text:"The bronzes that British troops looted in 1897 ___ in the royal court for over four hundred years.",
          answer:"had stood", options:["had stood","stood","have stood","were standing"],
          afterflavour:"Four centuries before the looting. The sequence carries the weight." }

        ]
    },
    {
      id: "papf-minimal",
      name: "Past Perfect vs Past Simple",
      label: "Minimal pairs",
      rule: `Two past events in the same sentence — past perfect for the earlier, past simple for the later. One past event — past simple is enough.`,
      questions: [
        
        
        
        
      
        { qid:"papf-m01", pressureClass:"medium",
          context:"She got the news by text. She hadn't seen it coming.",
          text:"She ___ anything like this would happen.",
          answer:"hadn't expected", options:["hadn't expected","didn't expect","hasn't expected","wasn't expecting"],
          afterflavour:"Hadn't expected — negative past perfect. The surprise is contained in the form." },
        { qid:"papf-m02", pressureClass:"high",
          context: "The figures ___ incorrectly since the restructure — nobody had noticed until the audit.",
          text:"The figures ___ incorrectly since the restructure — nobody had noticed.",
          answer:"had been recorded", options: ["had been recorded", "were recorded correctly at first", "staff had recorded them correctly", "have been recorded"],
          afterflavour: "Had been recorded = past perfect passive, three years before the audit. Were recorded correctly at first = past simple, implies it was initially right. Staff had recorded them = active past perfect, names the agent. Have been recorded = present perfect. Before the audit: past perfect." },
        { qid:"papf-m03", pressureClass:"high",
          context:"Ambedkar burned the Manu Smriti in 1927. The text had been used to justify caste discrimination for centuries.",
          text:"The Manu Smriti ___ the legal basis for caste hierarchy for over a thousand years before Ambedkar burned it.",
          answer:"had provided", options:["had provided","provided","has provided","was providing"],
          afterflavour:"Provided for centuries. The burning came second. Past perfect for the earlier." },
        { qid:"papf-m04", pressureClass:"high",
          context:"The compensation scheme opened in 2019. Many people couldn't prove their right to be in Britain.",
          text:"The Home Office ___ the evidence those people would have needed to prove their status.",
          answer:"had destroyed", options:["had destroyed","destroyed","has destroyed","was destroying"],
          afterflavour:"Destroyed before the need arose. The gap between the two actions is the scandal." }

        ]
    },
    {
      id: "papf-negatives",
      name: "Negatives + Questions",
      label: "Hadn't / had … yet",
      rule: `Negative: <strong>hadn't + past participle</strong>. Question: <strong>Had + subject + past participle?</strong>`,
      questions: [
        
        
        
        
      
        { qid:"papf-n01", pressureClass:"medium",
          context: "She ___ at all the night before — she had been at a family event until 2am.",
          text:"She ___ at all the night before.",
          answer:"hadn't slept", options: ["hadn't slept", "didn't sleep that night", "hasn't slept well since", "wasn't sleeping properly"],
          afterflavour: "Hadn't slept = negative past perfect, before the exam. Didn't sleep that night = past simple, same meaning but loses the sequence. Hasn't slept well since = present perfect, ongoing consequence. The exam is the reference point: past perfect for what preceded it." },
        { qid:"papf-n02", pressureClass:"high",
          context:"The inspector arrived. The company's records were incomplete.",
          text: "___ the company submitted the required environmental disclosures before the inspection was announced?",
          answer: "Had … submitted", options: ["Had … submitted", "Did … submit", "Has … submitted", "Was … submitting"],
          afterflavour: "Had … submitted = past perfect question. Had + subject + past participle. Did = past simple — for the inspection itself. Before the inspection → past perfect." },
        { qid:"papf-n03", pressureClass:"high",
          context: "Many Windrush generation members ___ yet received any compensation when the second review was announced.",
          text:"Many Windrush generation members ___ yet received any compensation when the second review was announced.",
          answer:"hadn't", options: ["hadn't", "didn't receive any", "haven't received any", "weren't receiving"],
          afterflavour: "Hadn't = negative past perfect. The second review announcement is the reference point. Didn't receive = past simple, closes the event. Haven't received = present perfect, would mean still now. Weren't receiving = progressive, implies ongoing process. Before the announcement: past perfect." },
        { qid:"papf-n04", pressureClass:"high",
          context: "Although he ___ to see full caste abolition in his lifetime, his constitution made it illegal.",
          text:"Although he ___ to see full caste abolition in his lifetime, Ambedkar had spent fifty years building its legal foundation.",
          answer:"hadn't lived", options: ["hadn't lived", "didn't live to see it", "hasn't lived to see it", "wasn't living to witness"],
          afterflavour: "Hadn't lived = negative past perfect. The constitution's passage is the reference point. Didn't live to see it = past simple, accurate but loses the past perfect sequence. Hasn't lived = present perfect, wrong — he died. Wasn't living = progressive, awkward." }

        ]
    }
  ],
  bossQuestions: []
},

// ─────────────────────────────────────────────────────────────
// PAST PERFECT PROGRESSIVE
// ─────────────────────────────────────────────────────────────
{
  id: "past-perf-prog",
  name: "Already in Motion",
  subtitle: "Past Perfect Progressive",
  colour: "#0ea5e9",
  tier: "advanced",
  rounds: [
    {
      id: "pppg-form",
      name: "Had been + -ing",
      label: "Activity stretching to a past point",
      rule: `<strong>Had been + -ing</strong> describes an activity that continued up to a specific past moment.<span class="rt-eg">She had been waiting for an hour when he finally arrived.</span>`,
      questions: [
        
        
        
        
      
        { qid:"pppg-frm01", pressureClass:"medium",
          context:"She arrived at the negotiating table. Twelve hours of preparation behind her.",
          text:"She ___ for the confrontation since the leak broke.",
          answer:"had been preparing", options:["had been preparing","prepared","has been preparing","was preparing"],
          afterflavour:"Duration up to a past moment. Had been + -ing." },
        { qid:"pppg-frm02", pressureClass:"high",
          context:"The Aral Sea. Fishing villages. 1960 to 1990.",
          text:"Soviet irrigation projects ___ the Aral Sea's water supply for thirty years before it visibly collapsed.",
          answer:"had been diverting", options:["had been diverting","diverted","have been diverting","were diverting"],
          afterflavour:"Thirty years of diversion before collapse. Duration preceding a past moment." },
        { qid:"pppg-frm03", pressureClass:"high",
          context:"The ozone hole. Scientists were alarmed. The data was already decades old.",
          text:"CFCs ___ the ozone layer since the 1950s before the hole was formally identified in 1985.",
          answer:"had been depleting", options:["had been depleting","depleted","have been depleting","were depleting"],
          afterflavour:"Decades of depletion before formal identification. Had been + -ing." },
        { qid:"pppg-frm04", pressureClass:"high",
          context:"Nguyen Thi Mai. Three years of training. The marathon started at 7am.",
          text:"Nguyen Thi Mai ___ for three years when she crossed the finish line.",
          answer:"had been training", options:["had been training","trained","has been training","was training"],
          afterflavour:"Three years of training up to that finish line. Had been + -ing." }

        ]
    },
    {
      id: "pppg-vs-simple",
      name: "Past Perfect vs Progressive",
      label: "Completion vs activity",
      rule: `<strong>Past perfect</strong> = completed action. <strong>Past perfect progressive</strong> = the activity itself, its duration, or its ongoing state.`,
      questions: [
        
        
        
        
      
        { qid:"pppg-vs01", pressureClass:"medium",
          context: "By the time Morrison published Beloved, she ___ the manuscript for three years.",
          text:"By the time Toni Morrison published Beloved, she ___ the manuscript for three years.",
          answer:"had written", options: ["had written", "had been writing", "was writing throughout", "has been writing since"],
          afterflavour: "Had written = past perfect, completed before publication. Had been writing = past perfect progressive, the activity over duration. Both work here — the three-year duration pushes toward had been writing. Was writing throughout = past progressive, no past perfect. Has been writing since = present perfect progressive, current." },
        { qid:"pppg-vs02", pressureClass:"high",
          context: "The samples showed the pipeline ___ for at least a decade before any legal action succeeded.",
          text:"The soil samples showed the pipeline ___ for at least a decade.",
          answer:"had been leaking", options: ["had been leaking", "had leaked once", "leaked periodically", "was leaking during the inspection"],
          afterflavour: "Had been leaking = past perfect progressive, continuous activity over duration before a past point. Had leaked once = past perfect, single event — contradicts 'at least a decade'. Leaked periodically = past simple, no past perfect. Was leaking during = past progressive, ongoing at a specific moment." },
        { qid:"pppg-vs03", pressureClass:"high",
          context:"The whistleblower came forward. It emerged that the practice had been ongoing.",
          text:"Internal documents showed the company ___ data for years before anyone spoke publicly.",
          answer:"had been falsifying", options:["had been falsifying","had falsified","falsified","was falsifying"],
          afterflavour:"Ongoing activity over time, before a past revelation. Had been + -ing." },
        { qid:"pppg-vs04", pressureClass:"high",
          context:"Wangari Maathai received the Nobel Peace Prize in 2004. The Green Belt Movement was already twenty-eight years old.",
          text:"By the time she won the Nobel Prize, Maathai ___ trees across Kenya for nearly three decades.",
          answer:"had been planting", options:["had been planting","had planted","planted","was planting"],
          afterflavour:"Ongoing activity across decades before a specific past moment. Duration = had been + -ing." }

        ]
    },
    {
      id: "pppg-cause",
      name: "Cause of past state",
      label: "Why they looked like that",
      rule: `Past perfect progressive often explains the <em>cause</em> of a visible past state.<span class="rt-eg">He was out of breath because he'd been running.</span>`,
      questions: [
        
        
        
        
      
        { qid:"pppg-c01", pressureClass:"medium",
          context: "His voice was hoarse because he ___ all morning — twelve hours of patient calls.",
          text:"His voice was hoarse because he ___ all morning.",
          answer:"had been speaking", options: ["had been speaking", "had spoken a lot", "spoke before the interview", "was speaking during the interview"],
          afterflavour: "Had been speaking = past perfect progressive, the cause of the visible state. Had spoken a lot = past perfect, completed — but the hoarseness requires ongoing activity, not a finished act. Spoke before = past simple. Was speaking during = past progressive, wrong time frame." },
        { qid:"pppg-c02", pressureClass:"high",
          context: "The city ___ for over a century because groundwater extraction had never stopped.",
          text:"The city ___ for a century because water had been extracted from the aquifer beneath it.",
          answer:"had been sinking", options: ["had been sinking", "had sunk by two metres", "sank after the 1985 earthquake", "was sinking noticeably"],
          afterflavour: "Had been sinking = past perfect progressive, continuous process over duration. Had sunk by two metres = past perfect, single completed measurement. Sank after 1985 = past simple, one event. Was sinking noticeably = past progressive, background but no duration." },
        { qid:"pppg-c03", pressureClass:"high",
          context:"The Niger Delta. The water had a film on it. People had been living with it for years.",
          text:"The community ___ oil contamination for decades before any legal action succeeded.",
          answer:"had been living with", options:["had been living with","had lived with","lived with","was living with"],
          afterflavour:"Decades of living with it, before a past legal moment. Duration + cause." },
        { qid:"pppg-c04", pressureClass:"high",
          context:"The Tōhoku region of Japan. The warning systems had been built but the sea came anyway.",
          text:"Engineers ___ sea walls for years — but nobody had modelled a wave that size.",
          answer:"had been building", options:["had been building","had built","built","were building"],
          afterflavour:"Years of building before the event. The cause of a state: the walls existed." }

        ]
    },
    {
      id: "pppg-negatives",
      name: "Negatives",
      label: "Hadn't been + -ing",
      rule: `Negative: <strong>hadn't been + -ing</strong>. Often used to explain a negative outcome.`,
      questions: [
        
        
        
        
      
        { qid:"pppg-neg01", pressureClass:"medium",
          context:"The audit caught it immediately. The records were a mess.",
          text:"Nobody ___ the financial controls properly for at least two years.",
          answer:"had been following", options:["had been following","had followed","followed","was following"],
          afterflavour:"Hadn't been following = negative past perfect progressive. Duration of the failure." },
        { qid:"pppg-neg02", pressureClass:"high",
          context:"The system had been failing slowly. The collapse was sudden.",
          text:"The infrastructure ___ proper maintenance since the budget was cut.",
          answer:"hadn't been receiving", options:["hadn't been receiving","didn't receive","hasn't received","wasn't receiving"],
          afterflavour:"Hadn't been receiving = ongoing deprivation before collapse. Negative progressive." },
        { qid:"pppg-neg03", pressureClass:"high",
          context:"She failed the bar exam on her third attempt. Not for lack of intelligence.",
          text:"She ___ the right material — someone had given her the wrong textbook edition.",
          answer:"hadn't been studying", options:["hadn't been studying","didn't study","hasn't been studying","wasn't studying"],
          afterflavour:"Hadn't been studying the right thing. Negative past perfect progressive — the duration of misdirection." },
        { qid:"pppg-neg04", pressureClass:"high",
          context:"The river flooded for the third time in a decade. The reports sat unread.",
          text:"The city ___ the flood barrier recommendations it had received in 2014.",
          answer:"hadn't been implementing", options:["hadn't been implementing","didn't implement","hasn't implemented","wasn't implementing"],
          afterflavour:"Hadn't been implementing. The reports existed. The action did not. Negative past perfect progressive." }

        ]
    }
  ],
  bossQuestions: []
},

// ─────────────────────────────────────────────────────────────
// PASSIVE: PERFECT & MODAL
// ─────────────────────────────────────────────────────────────
{
  id: "passive-advanced",
  name: "Detached Action",
  subtitle: "Advanced Passive",
  colour: "#6366f1",
  tier: "advanced",
  rounds: [
    {
      id: "passa-perfect",
      name: "Perfect Passive",
      label: "Has/have/had been + past participle",
      rule: `Perfect passive: <strong>has/have/had been + past participle</strong>.<span class="rt-eg">The report has been submitted. · The evidence had been destroyed.</span>`,
      questions: [
        
        
        
        
      
        { qid:"adv-pass-p01", pressureClass:"medium",
          context: "Her documents ___ — the portal confirms it, but the decision has not come.",
          text:"Her documents ___ and the decision is pending.",
          answer:"have been received", options: ["have been received", "the office has received them", "were received and filed", "had been received earlier"],
          afterflavour: "Have been received = present perfect passive, recent with consequence. The office has received them = active, names the office as agent. Were received and filed = past simple passive, closed. Had been received earlier = past perfect. The portal result: present perfect passive." },
        { qid:"adv-pass-p02", pressureClass:"high",
          context: "A key memo ___ by journalists before the official inquiry team could access it.",
          text:"A leaked memo ___ that directly contradicts the minister's statement.",
          answer:"has been obtained", options: ["has been obtained", "was obtained", "journalists obtained it", "had been obtained months ago"],
          afterflavour: "Has been obtained = present perfect passive, recent. Journalists obtained it = active, names the agents. Was obtained = past simple passive, closed. Had been obtained months ago = past perfect. The investigation is ongoing: present perfect." },
        { qid:"adv-pass-p03", pressureClass:"high",
          context: "By the time the inquiry requested the critical files, they ___.",
          text:"By the time the inquiry opened, the critical files ___.",
          answer:"had been destroyed", options: ["had been destroyed", "were destroyed", "the Home Office destroyed them", "have been destroyed"],
          afterflavour: "Had been destroyed = past perfect passive, before the request. Were destroyed = past simple. The Home Office destroyed them = active, names the agent. Have been destroyed = present perfect. The request is the reference point: past perfect for what preceded it." },
        { qid:"adv-pass-p04", pressureClass:"high",
          context: "Promises of clean water ___ for over thirty years without the aquifer being restored.",
          text:"Promises of clean water ___ for over thirty years without the aquifer being restored.",
          answer:"had been made", options: ["had been made", "were made", "Shell had made promises", "have been made"],
          afterflavour: "Had been made = past perfect passive, before the current state of non-restoration. Were made = past simple. Shell had made promises = active past perfect, names the agent. Have been made = present perfect. Thirty years before the current failure: past perfect." }

        ]
    },
    {
      id: "passa-modal",
      name: "Modal Passive",
      label: "Must / should / can + be + past participle",
      rule: `Modal passive: <strong>modal + be + past participle</strong>.<span class="rt-eg">This must be signed. · The roof should be repaired.</span>`,
      questions: [
        
        
        
        
      
        { qid:"adv-pass-m01", pressureClass:"medium",
          context: "This form ___ by both parties before proceedings can begin.",
          text:"This form ___ by both parties before proceedings begin.",
          answer:"must be signed", options: ["must be signed", "should be signed by one party first", "has been signed already", "was signed last year"],
          afterflavour: "Must be signed = obligation, passive. Should be signed by one party first = partial compliance, plausible misreading. Has been signed already = present perfect, would mean it's done — it isn't. Was signed last year = past, wrong version." },
        { qid:"adv-pass-m02", pressureClass:"high",
          context: "Under the framework, parent companies ___ for environmental damage caused by their subsidiaries.",
          text:"Under international law, companies ___ liable for environmental damage caused by their subsidiaries.",
          answer: "can be held liable", options: ["can be held liable", "cannot be held liable", "should be held liable", "have been held liable"],
          afterflavour: "Can be held = possibility within the law. Cannot be held = the company's legal argument, plausible competing reading. Should be held = moral obligation, not legal possibility. Have been held = past precedent, different tense." },
        { qid:"adv-pass-m03", pressureClass:"high",
          context: "The official record ___ — someone with archive access and a reason would have needed to do it.",
          text:"Evidence of his attendance ___ — but someone would have needed access to the original logs.",
          answer: "could have been altered", options: ["could have been altered", "must have been altered", "was altered by him", "had been altered before the review"],
          afterflavour: "Could have been altered = past possibility, not certainty. Must have been altered = stronger certainty, also plausible. Was altered by him = names the agent, which the context suggests but doesn't confirm. Had been altered before the review = past perfect, plausible sequence." },
        { qid:"adv-pass-m04", pressureClass:"high",
          context: "The architects of the policy ___ accountable — the framework exists, but it has not been applied.",
          text:"The architects of the policy ___ accountable — the legal framework exists.",
          answer:"should be held", options: ["should be held", "must be held", "could be held", "will be held"],
          afterflavour: "Should be held = moral and legal obligation. Must be held = stronger necessity. Could be held = mere possibility, too weak. Will be held = prediction, removes the present obligation. The documents and framework make should the right strength." }

        ]
    },
    {
      id: "passa-impersonal",
      name: "Impersonal passive",
      label: "It is said that… / She is believed to…",
      rule: `Academic and journalistic register uses impersonal passive to report claims without naming a source.<span class="rt-eg">It is said that… · She is believed to…</span>`,
      questions: [
        
        
        
      
        { qid:"adv-pass-i01", pressureClass:"high",
          context:"The report is circulating. The source is protected. The journalist has written it carefully.",
          text:"___ that the company was aware of the contamination two years before the public announcement.",
          answer:"It is alleged", options:["It is alleged","It alleges","There is alleged","It has alleged"],
          afterflavour:"It is alleged that — impersonal passive. Source removed. Claim protected." },
        { qid:"adv-pass-i02", pressureClass:"high",
          context:"The executive is under investigation. The reporting is careful.",
          text:"The CEO ___ to have approved the policy that led to the contamination.",
          answer:"is believed", options:["is believed","believes","is believing","has believed"],
          afterflavour:"Is believed to — impersonal passive with infinitive. Journalistic hedge." },
        { qid:"adv-pass-i03", pressureClass:"high",
          context:"The historical record is disputed. The number varies by source.",
          text:"___ that the British East India Company extracted the equivalent of $45 trillion from India.",
          answer:"It has been estimated", options:["It has been estimated","It estimates","It is estimating","There has been estimated"],
          afterflavour:"It has been estimated — impersonal perfect passive. Academic hedge for contested claim." }

        ]
    },
    {
      id: "passa-framing",
      name: "Active vs Passive — Framing decisions",
      label: "Who do you name?",
      rule: `Passive voice can hide agency. Active voice can name power. The choice is political.`,
      questions: [
        
        
        
        
      
        { qid:"adv-pass-fr01", pressureClass:"high",
          context:"The press release. The newspaper. Two sentences. Same event.",
          text:"The press release said: 'Errors were made.' The newspaper ___ that the finance director had approved the transfers personally.",
          answer:"reported", options:["reported","was reported","has reported","had reported"],
          afterflavour:"Active = named agent. Passive = erased agent. The choice is editorial." },
        { qid:"adv-pass-fr02", pressureClass:"high",
          context: "Funmilayo Ransome-Kuti ___ from a second-floor window — she died of her injuries the following month.",
          text:"Fela's mother ___ from a second-floor window by Nigerian soldiers during the raid on the Kalakuta Republic.",
          answer: "was thrown", options: ["was thrown", "threw herself", "had been pushed", "soldiers threw her"],
          afterflavour: "Was thrown = passive, she received the action. Threw herself = active, wrong — inverts the act. Had been pushed = passive past perfect, would need another past event after it. Soldiers threw her = active with named agent, also correct but changes the grammatical subject. Was thrown foregrounds her; soldiers threw her foregrounds them. Both are true. Which frame you choose is political." },
        { qid:"adv-pass-fr03", pressureClass:"high",
          context:"The same event. Two headlines. One names the shooter. One names the bullet.",
          text:"'A protester ___ in the back.' vs 'Police shot a protester in the back.'",
          answer:"was shot", options:["was shot","shot","has been shot","had shot"],
          afterflavour:"Was shot — passive, agent absent. The active version names the agent. Same event; different accountability." },
        { qid:"adv-pass-fr04", pressureClass:"high",
          context:"The academic paper. The argument about passives and power.",
          text: "When institutions say 'mistakes ___ made', they are using grammar to distribute responsibility without assigning it.",
          answer: "were made", options: ["were made", "have been made", "are made", "had been made"],
          afterflavour: "Were made = past simple passive. The institution chooses were made — closed, historical. Have been made = still relevant. The passive without an agent distributes blame without assigning it." }

        ]
    }
  ],
  bossQuestions: []
},

// ─────────────────────────────────────────────────────────────
// MIXED TENSES (discrimination)
// ─────────────────────────────────────────────────────────────
{
  id: "mixed-tenses",
  name: "All at Once",
  subtitle: "Mixed Tenses",
  colour: "#a855f7",
  tier: "advanced",
  rounds: [
    {
      id: "mt-discrimination",
      name: "Tense Discrimination",
      label: "Read the signal, pick the tense",
      rule: `Every tense has its own signals. Yesterday → past simple. Today → present perfect. For years → present perfect. While → past progressive.`,
      questions: [
        { qid:"mt01", context:"The bell just rang. School is over.", text:"She ___ home as soon as class finished.", answer:"went", options:["went","has gone","goes","had gone"], afterflavour:"Specific past → past simple." }
      ]
    },
    {
      id: "mt-narrative",
      name: "Narrative Tenses",
      label: "Main event + background + earlier",
      rule: `Storytelling uses three tenses together: <strong>past simple</strong> for main events, <strong>past progressive</strong> for background, <strong>past perfect</strong> for what came earlier.`,
      questions: [
        
        
        
        
      
        { qid:"mt-narr01", pressureClass:"medium",
          context:"An opening. Three time layers. Set the scene.",
          text:"The rain ___ when she arrived at the station — she ___ for an hour, and the train ___ ten minutes earlier.",
          answer: "was falling … had been waiting … had left", options:["was falling … had been waiting … had left","fell … waited … left","was falling … was waiting … left","fell … had waited … had been leaving"],
          afterflavour:"Past progressive (background) + past perfect progressive (duration) + past perfect (earlier event)." },
        { qid:"mt-narr02", pressureClass:"high",
          context:"The moment the verdict came. What had happened before. What was happening around it.",
          text:"People ___ outside the courthouse for eight hours when the jury finally ___ with its verdict.",
          answer: "had been waiting … returned", options:["had been waiting … returned","were waiting … has returned","waited … returned","had been waiting … has returned"],
          afterflavour:"Had been waiting = duration up to a past moment. Returned = the main event. Past simple." },
        { qid:"mt-narr03", pressureClass:"high",
          context:"Fred Hampton. Chicago. 4 December 1969. 4:45am.",
          text:"Hampton ___ when FBI agents and Chicago police ___ the apartment in a pre-dawn raid.",
          answer: "had been drugged … stormed", options:["had been drugged … stormed","was drugged … storm","has been drugged … stormed","had been drugging … had stormed"],
          afterflavour:"Had been drugged = passive past perfect (earlier action). Stormed = the main event, past simple." },
        { qid:"mt-narr04", pressureClass:"high",
          context:"A family at an airport. The flight has landed. Three years since the last visit.",
          text:"By the time she ___ through arrivals, she ___ for three years and ___ entirely how to hug without rehearsing it.",
          answer: "walked … had been living … had forgotten", options:["walked … had been living … had forgotten","was walking … was living … forgot","walked … lived … has forgotten","had walked … had been living … forgot"],
          afterflavour:"Past simple for the main event. Past perfect progressive for the duration. Past perfect for the completed change." }

        ]
    },
    {
      id: "mt-minimal",
      name: "Minimal Pair Gauntlet",
      label: "One word, whole meaning",
      rule: `Same verb, different tense, different meaning. Match the cue.`,
      questions: [
        
        
        
      
        { qid:"mt-min01", pressureClass:"medium",
          context:"She received the email at 9am. It was sent at 8:55am. A decision had already been made.",
          text:"By the time she read the email, the decision ___.",
          answer:"had already been made", options:["had already been made","was already made","has already been made","is already made"],
          afterflavour:"Past perfect passive. The decision preceded the reading. Both tense and voice matter." },
        { qid:"mt-min02", pressureClass:"high",
          context:"The environmental report. The board meeting. The votes.",
          text:"The board voted to expand the mine the same week the environmental report ___ that the water table had been contaminated.",
          answer:"confirmed", options:["confirmed","had confirmed","has confirmed","was confirming"],
          afterflavour:"Confirmed = past simple. The vote and the report are at the same level of the past — simultaneous, not sequential." },
        { qid:"mt-min03", pressureClass:"high",
          context:"Emmett Till. Money, Mississippi. August 1955.",
          text:"By the time Till's mother held an open casket funeral, photographs of her son's body ___ around the world.",
          answer:"had circulated", options:["had circulated","circulated","have circulated","were circulating"],
          afterflavour:"Had circulated — the photographs spread before the funeral. Past perfect. The sequence carries everything." }

        ]
    },
    {
      id: "mt-layered",
      name: "Layered time",
      label: "Multiple time frames",
      rule: `Some sentences carry two or three time frames. Identify each.`,
      questions: [
        
        
        
      
        { qid:"mt-lay01", pressureClass:"high",
          context:"A researcher reads a document. The document was written in 1965. It describes something that happened in 1943.",
          text:"The 1965 document revealed that British officials ___ the famine in Bengal ___ to divert food to European markets.",
          answer: "had allowed … to occur", options:["had allowed … to occur","allowed … occurring","were allowing … occur","have allowed … to occur"],
          afterflavour:"1943 is past from the 1965 document's perspective. Past perfect for the earlier event within a past narrative." },
        { qid:"mt-lay02", pressureClass:"high",
          context:"A press conference. Today. A policy from 2003. Its effects that are still visible.",
          text:"The minister acknowledged that the 2003 decision ___ and that its consequences ___ affecting communities to this day.",
          answer: "had been flawed … are still", options:["had been flawed … are still","was flawed … were still","has been flawed … will still","had been flawed … have still"],
          afterflavour:"Past perfect for the past judgment on a past decision. Present simple for the ongoing consequence — still true now." },
        { qid:"mt-lay03", pressureClass:"high",
          context:"Walter Rodney, 1972. An argument about then, now, and the mechanism between them.",
          text:"Rodney argued that Europe ___ African development — not through neglect but through a deliberate process that ___ ongoing consequences that ___ visible today.",
          answer: "had underdeveloped … left … are", options:["had underdeveloped … left … are","underdeveloped … leaves … were","has underdeveloped … had left … were","had underdeveloped … has left … are"],
          afterflavour:"Past perfect (Rodney's claim about history). Present perfect (the consequences left). Present simple (visible now). Three time frames, one argument." }

        ]
    }
  ],
  bossQuestions: []
}
);
