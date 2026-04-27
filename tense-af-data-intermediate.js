// ═══════════════════════════════════════════════════════════════
// TENSE AF — DATA: INTERMEDIATE TIER (restructured)
// Four packs. Seven replaced.
//
// PACK 1 — Time in Motion
//   Past progressive + Future (will / going to / arrangements)
//   Theme: what was happening vs what happens next
//
// PACK 2 — Open or Closed
//   Present perfect + Perfect vs Past Simple + Present Perfect Progressive
//   Theme: has it finished or is it still live
//
// PACK 3 — Voice & Agency
//   All passive content merged: form, agent, framing, active choice
//   Theme: who acts, who disappears
//
// PACK 4 — Patterns
//   Stative verbs, adverbs, for/since, short answers, frequency
//   Theme: structural habits that resist the progressive
// ═══════════════════════════════════════════════════════════════

PACKS.push(

// ─────────────────────────────────────────────────────────────
// PACK 1 — TIME IN MOTION
// Past progressive + Future
// ─────────────────────────────────────────────────────────────
{
  id: "time-in-motion",
  name: "Flow of Time",
  subtitle: "Time in Motion",
  colour: "#14b8a6",
  tier: "intermediate",
  rounds: [
    {
      id: "tim-background",
      name: "Background",
      label: "What was already happening",
      rule: ``,
      questions: [
        { qid:"tim-b01", pressureClass:"medium", context: "The factory inspector walked in unannounced. The line manager's account and the workers' account don't agree.", text:"When the inspector arrived, Supervisor Kowalski ___ a safety briefing — or so he later claimed.", answer: "was conducting", options: ["was conducting", "conducted a full briefing", "has conducted briefings since then", "conducts them every shift"], afterflavour: "Was conducting = background activity in progress at the moment of arrival, which is what Kowalski claims. Conducted a full briefing = past simple, a completed act — but he's claiming it was already underway, not finished. Has conducted since then = present perfect, current consequence. The workers say nobody was briefed. The progressive is Kowalski's alibi." },
        { qid:"tim-b02", pressureClass:"medium", context: "The transcript shows three versions. Halfway through Session 2, she changed her answer.", text:"The committee ___ about the funds when she revised her position — the transcript shows seventeen minutes of questioning before the shift.", answer: "was asking", options: ["was asking", "asked her to confirm", "has asked about this since", "asks the same question repeatedly"], afterflavour: "Was asking = the questioning was in progress when she changed her answer — the progressive captures the moment of the shift. Asked her to confirm = past simple, implies the exchange was complete before she changed. Has asked since = present perfect, still relevant now — but the question is about the moment of change. The seventeen minutes and then the revision: background progressive interrupted by her decision." },
        { qid:"tim-b03", pressureClass:"medium", context: "The rally permit covered two hours. Police accounts say she was done. Her supporters say she was cut off.", text:"She ___ her remarks on the access road closure when officers moved in — the question is whether she had finished.", answer: "was making", options: ["was making", "made her final point", "has made this argument before", "makes the same claim at every rally"], afterflavour: "Was making = she was mid-speech when they moved in, the progressive preserves the interruption — her supporters' version. Made her final point = past simple, implies she completed that point — closer to the police account. Has made this argument before = present perfect, pattern of behaviour — the officers' framing. The progressive is not neutral: it takes the side of the interrupted." },
        { qid:"tim-b04", pressureClass:"medium", context: "The order came through at 11:42pm. The landing cards were gone by morning. Nobody logged the destruction.", text:"Staff ___ routine filing tasks when the order to destroy the landing cards came through — by 6am, nothing remained.", answer: "were carrying out", options: ["were carrying out", "carried out the destruction immediately", "have carried out such orders before", "carry out orders daily without question"], afterflavour: "Were carrying out = routine background work already in progress when the order arrived — establishes the order as an interruption of normal procedure. Carried out the destruction immediately = past simple, conflates the routine work with the destruction. Have carried out such orders before = present perfect, implies a pattern — relevant to intent but not to this moment. The order is what stopped the routine. Progressive captures what the order interrupted." },
        { qid:"tim-b07", pressureClass:"high", context: "Santiago, September 1973. The musicians had been there three days.", text:"Victor Jara ___ with the other prisoners when the soldiers entered the stadium — the session was never finished.", answer: "was rehearsing", options: ["was rehearsed by the guards", "rehearsed until the soldiers left", "has rehearsed there since", "was rehearsing"], afterflavour: "Was rehearsing = the session was in progress, the soldiers interrupted it — progressive preserves the incompleteness. Was rehearsed by the guards = passive, wrong subject and meaning. Rehearsed until the soldiers left = past simple implies it was completed — it wasn't. Has rehearsed there since = present perfect, impossible given what followed. The stadium. The progressive is the only form that keeps the session unfinished." },
        { qid:"tim-b08", pressureClass:"high", context: "Derry, January 1972. The civil rights march. 26 shot. 14 died.", text:"The marchers ___ peacefully when British paratroopers opened fire — the Saville Inquiry took 38 years to confirm what the progressive already shows.", answer: "were marching", options: ["were marching", "marched in defiance of the ban", "have marched there every year since", "march every January in remembrance"], afterflavour: "Were marching = the march was already in progress, peaceful and ongoing, when the shooting began — the progressive preserves both the peacefulness and the interruption. Marched in defiance = past simple, frames it as a completed act of defiance — the Widgery Tribunal's framing. Have marched every year since = present perfect, the annual commemoration — a different sentence entirely. The progressive is not just grammatically correct. It is historically precise." }
      ]
    },
    {
      id: "tim-interrupted",
      name: "Interrupted",
      label: "The short act breaks the long one",
      rule: ``,
      questions: [
        { qid:"tim-i01", pressureClass:"medium", context: "Hampton ___ when FBI agents and Chicago police entered through multiple doors at 4:45am.", text:"She was reading when the phone ___.", answer: "was sleeping", options: ["was sleeping", "slept through the entry", "has slept in that apartment before", "sleeps lightly"], afterflavour: "Was sleeping = past progressive, interrupted. Slept through the entry = past simple, would mean he continued sleeping. Has slept there before = present perfect. He was in the middle of sleeping when they entered: progressive." },
        { qid:"tim-i02", pressureClass:"medium", context: "Lumumba ___ when the microphone was cut by the session chair.", text: "I ___ when the lights went out — I had to feel my way to the fuse box.", answer: "was speaking", options: ["was speaking", "spoke for twenty minutes", "has spoken at the UN before", "speaks without notes"], afterflavour: "Was speaking = in progress, interrupted. Spoke for twenty minutes = completed act. Has spoken before = present perfect. The microphone cut is the interruption of an act in progress." },
        { qid:"tim-i03", pressureClass:"medium", context: "She ___ the third point of her answer when the interviewer's phone rang — loudly.", text:"He ___ when the microphone cut out.", answer: "was making", options: ["was making", "made her point clearly", "has made this argument before", "makes the same argument"], afterflavour: "Was making = in progress, interrupted. Made her point clearly = past simple, completed. Has made before = present perfect. The phone interrupted the act of making a point: progressive." },
        { qid:"tim-i04", pressureClass:"medium", context: "The parliamentary vote. 11pm. An unexpected technical failure.", text:"We were discussing it when the news ___.", answer: "were casting", options: ["were casting", "cast", "have cast", "cast"], afterflavour: "Were casting = in progress when the system failed. The failure interrupted the ongoing process." },
        { qid:"tim-i05", pressureClass:"high", context: "Churchill ___ the relief proposal when he set it aside to focus on European supply priorities.", text:"She ___ about the campaign when the journalist interrupted.", answer: "was reviewing", options: ["was reviewing", "reviewed it and rejected it", "has reviewed such proposals", "reviews requests from India"], afterflavour: "Was reviewing = in progress, then set aside. Reviewed it and rejected it = past simple, completed decision. Has reviewed = present perfect. He was mid-review when he made the choice: progressive captures the incompletion." },
        { qid:"tim-i06", pressureClass:"high", context: "Delegates ___ the coastal borders when Bismarck proposed extending the partition to the interior.", text:"They ___ results when the system crashed.", answer: "were finalising", options: ["were finalising", "finalised the coastline first", "have finalised borders in other treaties", "finalise borders by consensus"], afterflavour: "Were finalising = in progress when Bismarck's proposal changed the scope. Finalised the coastline first = past simple, completed. The proposal interrupted the coastal work: progressive." },
        { qid:"tim-i07", pressureClass:"high", context: "She ___ at a pace that would break the course record when her left knee gave way at kilometre 38.", text:"He ___ the sign when the police arrived.", answer: "was running", options: ["was running", "ran the whole race", "has run this course before", "runs marathons annually"], afterflavour: "Was running = in progress, interrupted. Ran the whole race = past simple, would mean she finished. Has run before = present perfect. The injury interrupted an ongoing act: past progressive." },
        { qid:"tim-i08", pressureClass:"high", context: "Investigators ___ the backup logs when they discovered the backup system had also been wiped.", text:"They ___ the terms when the third party walked out.", answer: "were analysing", options: ["were analysing", "analysed the primary logs first", "have analysed evidence before", "analyse each document separately"], afterflavour: "Were analysing = in progress when the discovery interrupted them. Analysed the primary logs first = past simple, sequence. Have analysed before = present perfect. The discovery interrupted the ongoing analysis: progressive." }
      ]
    },
    {
      id: "tim-negatives",
      name: "Negatives",
      label: "What wasn't happening",
      rule: ``,
      questions: [
        
        
        
        
        
      ]
    },
    {
      id: "tim-will",
      name: "Will",
      label: "Decided now. Not before.",
      rule: ``,
      questions: [
        { qid:"tim-w01", pressureClass:"medium", context: "Her phone has been ringing for ten seconds. She's been staring at it. She finally picks it up.", text: "'Fine. I ___ answer it — but whatever she says, we're not changing the plan.'", answer: "will answer", options: ["will answer", "am going to answer", "am answering", "answer"], afterflavour: "Will answer = decision made at this moment, reluctant but now. Am going to answer = would imply she had already planned to answer before the phone rang — she clearly hadn't. Am answering = present progressive, implies she's already mid-action. The ten seconds of staring is the evidence this wasn't planned. Will: the moment of decision." },
        { qid:"tim-w02", pressureClass:"medium", context: "She got the diagnosis on Thursday. He's known since Friday. It's now Sunday. He hasn't said anything useful yet.", text: "'I ___ here. For as long as this takes. I should have said it sooner.'", answer: "will be", options: ["will be", "am going to be", "am being", "have been"], afterflavour: "Will be = promise formed at this moment of speaking — he's deciding now, the 'I should have said it sooner' confirms it wasn't pre-planned. Am going to be = prior intention — but he admits he hasn't said it, so there was no prior plan. Am being = present progressive, he's here now — misses the future commitment. Have been = present perfect, what he's done so far — which he's implicitly admitting wasn't enough. Will: the promise forms now." },
        { qid:"tim-w03", pressureClass:"medium", context: "She was told about the spill an hour ago and said nothing. Now the guests are twenty minutes away.", text: "'I'll handle it — don't touch anything. I ___ have it sorted before they pull up.'", answer: "will have", options: ["will have", "am going to have", "am having", "have"], afterflavour: "Will have = decision and commitment formed now, at the moment of speaking, under time pressure. Am going to have = would imply a prior plan — but she said nothing for an hour. Am having = present progressive, implies it's already in motion — it isn't. The one-hour silence is the evidence no prior plan existed. Will: formed now, under pressure." },
        { qid:"tim-w04", pressureClass:"high", context: "Two meteorologists. Same data. One says the system is already established. One says it's uncertain.", text: "Met Office model: 'Temperatures ___ drop sharply after 6pm.' Regional forecast: 'The cold front ___ move in — the pressure data already shows it.'", answer: "will drop", options: ["will drop", "are going to drop", "are dropping", "drop"], afterflavour: "Will drop = prediction from judgement, the Met Office is making a call from the model — not pointing at current physical evidence. Are going to drop = physical trajectory already established and visible — the regional forecaster's position, citing the pressure data. Are dropping = present progressive, it's already happening. The two versions are not equally valid: if the pressure data shows it, going to is more precise. Will = informed prediction. Going to = observed trajectory. Same outcome, different epistemologies." },
        { qid:"tim-w05", pressureClass:"high", context: "The labour negotiation. Day 14. The union has already rejected three offers. The mediator is speaking.", text: "'They ___ move on the pension clause — every session, same position. But look at who's in the room today.'", answer: "won't move", options: ["won't move", "aren't going to move", "don't move", "aren't moving"], afterflavour: "Won't move = prediction from the mediator's knowledge of the negotiation — a judgement call, not based on a visible trajectory. Aren't going to move = trajectory already established, evidence-based — fourteen days of refusals do support this. Don't move = present simple, habitual — makes it a character trait rather than a strategic position. The mediator says 'but look at who's in the room' — which means the prediction is now uncertain. Won't = judgement that could be wrong. Going to = trajectory that could be broken." },
        { qid:"tim-w06", pressureClass:"high", context: "Two physicists debating stellar evolution. One models from first principles. One works from direct solar observation.", text: "Physicist A: 'The Sun ___ become a red giant in approximately five billion years.' Physicist B: 'The helium core ___ collapse — the process has already begun at the core level.'", answer: "will become", options: ["will become", "is going to become", "becomes", "is becoming"], afterflavour: "Will become = prediction from theoretical modelling, no currently observable evidence at the surface — Physicist A's position. Is going to become = physical trajectory already established — Physicist B's claim, based on core measurements. Becomes = present simple, would make it a permanent present fact. Is becoming = progressive, overstates what the core data shows. At the surface level: will. At the core level: going to. The question is which scale of evidence you're working from." }
      ]
    },
    {
      id: "tim-going-to",
      name: "Going To",
      label: "Already decided. Or physics.",
      rule: ``,
      questions: [
        { qid:"tim-g01", pressureClass:"medium", context: "She submitted the Fulbright application in January. The results are announced in March. It is February.", text:"She ___ hear back about the Fulbright any day now — the decision period opened last Monday.", answer:"is going to hear", options:["is going to hear", "will hear", "hears", "has heard"], afterflavour:"Is going to hear = established process already in motion, the timeline is set — she applied, the period opened, the result is coming. Will hear = prediction from judgement, as if the outcome were uncertain or unplanned — but the process is already running. Hears = present simple, would make it a general fact. Has heard = present perfect, done — she hasn't heard yet. The decision period opened: the trajectory is running." },
        { qid:"tim-g02", pressureClass:"medium", context: "The waiter has been carrying that tray for thirty metres. His left wrist is visibly shaking. There are six glasses.", text:"Watch that waiter — he ___ lose the whole tray if someone doesn't help him.", answer:"is going to lose", options:["is going to lose", "will lose", "loses trays", "has lost trays before"], afterflavour:"Is going to lose = visible physical trajectory, already in motion — the shaking wrist, the angle, the distance — the outcome is physically established. Will lose = prediction from judgement, as if it were uncertain — but you can see the evidence. Loses trays = present simple, habitual — makes it a personality trait rather than an observable physical emergency. Has lost trays before = present perfect, past pattern — irrelevant to what's happening right now. Going to: the outcome is already in the physics." },
        { qid:"tim-g03", pressureClass:"high", context: "Two pilots. Same sky. Departing in ninety minutes. One has the satellite data. One is looking out the window.", text:"Pilot A, on instruments: 'We ___ hit turbulence over the Alps — the pressure gradient is already established.' Pilot B, at the window: 'It ___ clear up — I've seen worse.'", answer:"are going to hit", options:["are going to hit", "will hit", "hit turbulence sometimes", "are hitting"], afterflavour:"Are going to hit = observable physical trajectory from instrument data — Pilot A's position. The pressure gradient is established. Will hit = prediction from judgement or experience — Pilot B's 'I've seen worse' is a will-prediction, not instrument-based. Hit turbulence sometimes = present simple, habitual, wrong frame. Are hitting = present progressive, it's already happening — not yet. Going to: the physics is already showing the outcome. Will: the experience is making a call. Same destination, different confidence levels." },
        { qid:"tim-g04", pressureClass:"high", context: "Their daughter's treatment starts in six weeks. They've already contacted three estate agents. The house goes on the market Friday.", text:"They ___ relocate before the treatment starts — the house is already listed.", answer:"are going to relocate", options:["are going to relocate", "will relocate", "are relocating", "relocate"], afterflavour:"Are going to relocate = prior decision already in motion, physical evidence exists — agents contacted, house listed. Will relocate = prediction or spontaneous decision — but this was not spontaneous, and it's not a prediction. Are relocating = present progressive for a confirmed arrangement — also defensible, implies it's booked. Going to vs progressive: going to emphasises the prior decision and the evidence chain. Are relocating emphasises the arrangement is fixed. The house is listed: the trajectory is already physical." },
        { qid:"tim-g05", pressureClass:"high", context: "The committee met privately last week. The recommendation is written.", text:"They ___ cut the programme — the decision was made before today.", answer:"are going to", options:["are going to","will","are cutting","cut"], afterflavour:"Prior trajectory. Not reaction. Going to." },
        { qid:"tim-g06", pressureClass:"high", context: "The IPCC. 2023. Based on current emissions trajectories.", text:"Global temperatures ___ exceed 1.5°C above pre-industrial levels in the early 2030s.", answer:"are going to", options:["are going to","will","are exceeding","exceed"], afterflavour: "Going to = prior evidence. The IPCC has measured the trajectory. The warming is already in the system. Will would suggest speculation." },
        { qid:"tim-g07", pressureClass:"high", context: "The Andromeda Galaxy. Already moving toward us. 4.5 billion years.", text:"Andromeda ___ collide with the Milky Way — astronomers have been tracking its approach for decades.", answer:"is going to", options:["is going to","will","is colliding","collides"], afterflavour: "Going to = prior trajectory. Andromeda's path has been measured for decades. The collision is not a prediction — it is a consequence of observable motion." }
      ]
    },
    {
      id: "tim-arrangements",
      name: "Arrangements",
      label: "It's in the diary",
      rule: ``,
      questions: [
        { qid:"tim-a01", pressureClass:"low", context: "The boarding pass is already on her phone. The seat is confirmed.", text: "She ___ to Rome at 19:40 on Friday — it has been in her calendar for six weeks.", answer: "is flying", options: ["is flying", "will fly", "flies", "is going to fly"], afterflavour: "Is flying = confirmed arrangement, both sides committed. Will fly = prediction or decision. Going to = plan not yet booked." },
        { qid:"tim-a02", pressureClass:"low", context: "They reserved the room last week. It's in both calendars. Tuesday, 3pm.", text: "She ___ to Rome at 19:40 on Friday — it has been in her calendar for six weeks.", answer: "is flying", options: ["is flying", "will fly", "flies", "is going to fly"], afterflavour:"Specific time. Arrangement." },
        { qid:"tim-a03", pressureClass:"low", context: "Tuesday, 3pm. In his calendar with a meeting link.", text:"He ___ the committee at 15:00.", answer:"is meeting", options:["is meeting","will meet","meets","has met"], afterflavour:"Scheduled. Fixed." },
        { qid:"tim-a04", pressureClass:"medium", context: "The venue is booked. Caterers confirmed. Invitations sent.", text:"They ___ two hundred people on Saturday.", answer:"are hosting", options:["are hosting","will host","host","have hosted"], afterflavour:"Already in motion. The date is set." },
        { qid:"tim-a05", pressureClass:"medium", context: "Flight BA837. Gate 21. 14:25 departure.", text:"He ___ to Prague on the 2:25 flight.", answer:"is flying", options:["is flying","will fly","flies","has flown"], afterflavour:"Specific booking → present progressive." }
      ]
    },
    {
      id: "tim-discrimination",
      name: "Which Signal",
      label: "Read the context",
      rule: ``,
      questions: [
        { qid:"tim-d01", pressureClass:"medium", context: "Someone drops a glass. Nobody else is reacting.", text: "'I ___ grab a cloth — sit down, don't touch anything.'", answer: "will grab", options: ["will grab", "am going to grab", "am grabbing", "grab"], afterflavour: "Spontaneous offer. Decided this second. Will." },
        { qid:"tim-d02", pressureClass:"medium", context: "She sees the car rolling toward the wall. No time to think.", text: "'I ___ grab a cloth — sit down, don't touch anything.'", answer: "will grab", options: ["will grab", "am going to grab", "am grabbing", "grab"], afterflavour: "Spontaneous offer. Decided this second. Will." },
        { qid:"tim-d03", pressureClass:"high", context: "He spent last month lobbying for the contract.", text:"He ___ make a formal bid — he's been building toward it for weeks.", answer:"is going to", options:["is going to","will","is making","makes"], afterflavour:"Prior trajectory. Not reaction. Going to." },
        { qid:"tim-d04", pressureClass:"high", context: "You've known her for years. The signs are all there.", text:"She ___ resign before the end of the month — this isn't a guess.", answer:"is going to", options:["is going to","will","is resigning","resigns"], afterflavour:"Reading evidence, not reacting. Going to." },
        { qid:"tim-d05", pressureClass:"high", context: "The question is unexpected. He pauses. Nobody planned for this.", text: "'I ___ need to think about that — can I come back to you?'", answer: "will need", options: ["will need", "am going to need", "need", "am needing"], afterflavour: "Will need = realisation at moment of speaking. Not a plan. A recognition." }
      ]
    }
  ],
  bossQuestions: []
},

// ─────────────────────────────────────────────────────────────
// PACK 2 — OPEN OR CLOSED
// Present perfect + Perfect vs Past Simple + Present Perfect Progressive
// ─────────────────────────────────────────────────────────────
{
  id: "open-or-closed",
  name: "Open or Closed States",
  subtitle: "Present Perfect",
  colour: "#a78bfa",
  tier: "intermediate",
  rounds: [
    {
      id: "ooc-form",
      name: "Form",
      label: "Have/has + past participle",
      rule: ``,
      questions: [
        { qid:"ooc-f01", pressureClass:"medium", context:"Nina's back catalogue. You can still buy it.", text: "Nina ___ recorded songs people still argue about.", answer: "has recorded", options: ["has recorded", "recorded", "is recording", "records"], afterflavour:"Singular subject → has." },
        { qid:"ooc-f04", pressureClass:"medium", context: "Dave. The Mercury Prize. 2019.", text: "Dave ___ won the Mercury Prize.", answer: "has won", options: ["has won", "won", "is winning", "wins"], afterflavour: "Has won = present perfect. The prize is his. Relevant now. Won = past simple, would emphasise when it happened." }
        
        
        
      ]
    },
    {
      id: "ooc-adverbs",
      name: "Time Words",
      label: "Ever, never, just, already, yet",
      rule: ``,
      questions: [
        
        
        
        
        
        
        
      ]
    },
    {
      id: "ooc-for-since",
      name: "For and Since",
      label: "Length or starting point",
      rule: ``,
      questions: [
        
        
        
        { qid:"ooc-fs04", pressureClass:"high", context: "The Niger Delta. The pipeline. 1963 to now.", text:"The Niger Delta has been leaking oil ___ the 1960s.", answer: "since", options: ["since", "for", "from", "throughout"], afterflavour: "Since = named starting point, 1963. For = duration. The year of the laying is the named event — since anchors it." },
        { qid:"ooc-fs05", pressureClass:"high", context: "The inquiry. The first hearing was November 2021.", text:"They have been withholding documents ___ the case was opened.", answer: "since", options: ["since", "for", "from", "throughout"], afterflavour: "Since = named starting point. November 2021 is the starting point." },
        { qid:"ooc-fs06", pressureClass:"high", context: "The Roma family displacement. The same neighbourhood.", text:"The same policy has applied ___ forty years.", answer: "for", options: ["for", "since", "from", "throughout"], afterflavour: "For = duration without a named start event. Forty years is the span. Since would need a specific year or event." },
        { qid:"ooc-fs07", pressureClass:"high", context: "Bald eagle populations ___ recovering steadily ___ the DDT ban took effect in 1972.", text:"Bald eagle populations have been recovering ___ the pesticide ban in 1972.", answer: "have been recovering since", options: ["have been recovering since", "recovered fully in 1980", "are recovering right now", "had been recovering before the ban"], afterflavour: "Have been recovering since 1972 = present perfect progressive. Since = named starting point, still ongoing. Recovered fully = past simple, implies it's done. Are recovering right now = present progressive, loses the historical depth. Had been recovering before = past perfect progressive, wrong direction." },
        { qid:"ooc-fs08", pressureClass:"high", context: "China ___ reducing extreme poverty ___ 1978 — 800 million people over four decades.", text:"China has been reducing extreme poverty ___ over four decades.", answer: "has been reducing since", options: ["has been reducing since", "reduced poverty in the 1990s", "is reducing poverty now", "had been reducing before 1978"], afterflavour: "Has been reducing since 1978 = present perfect progressive. The reduction is ongoing. Reduced in the 1990s = past simple, closes one decade. Is reducing now = present progressive, loses the historical span. Since 1978 is the named starting point: present perfect progressive." }
      ]
    },
    {
      id: "ooc-vs-past",
      name: "Open or Closed",
      label: "Still live vs finished time",
      rule: ``,
      questions: [
        
        
        
        
        
        
        
        
        { qid:"ooc-v09", pressureClass:"high", context:"You're recommending. The work still exists.", text: "Nina ___ recorded songs people still avoid.", answer: "has recorded", options: ["has recorded", "recorded", "is recording", "records"], afterflavour:"Why you should listen." },
        { qid:"ooc-v10", pressureClass:"high", context:"A biographical fact with a date.", text:"Nina ___ Four Women in 1966.", answer:"recorded", options:["recorded","has recorded","is recording","records"], afterflavour:"Closed time. Past simple." },
        { qid:"ooc-v11", pressureClass:"high", context:"Ecuador. 2008. A world first still in effect.", text: "Ecuador ___ granted constitutional rights to nature — the ecosystem can sue in court.", answer: "has granted", options: ["has granted", "granted", "is granting", "grants"], afterflavour:"Has granted — still in effect. Present consequence." },
        { qid:"ooc-v12", pressureClass:"high", context:"The Benin Bronzes. 1897. The looting is historical. The returns are recent.", text:"Some Benin Bronzes ___ returned — but most are still in European museums.", answer:"have been", options:["have been","were","are","had been"], afterflavour:"Some went back in 2022. Most are still in the British Museum. Present perfect — incomplete action." },
        { qid:"ooc-v13", pressureClass:"high", context: "The city ___ 'Beauregard Square' in 1893, naming it after a Confederate general.", text:"The city ___ Congo Square 'Beauregard Square' in 1893.", answer: "renamed it", options: ["renamed it", "has renamed many landmarks", "was renaming it when residents objected", "renames streets for generals"], afterflavour: "Renamed it = past simple, 1893, closed. Has renamed many landmarks = present perfect, makes it a pattern with current relevance. Was renaming when residents objected = progressive, implies interruption. 1893 is a specific closed moment: past simple." },
        { qid:"ooc-v14", pressureClass:"high", context: "The city council ___ the original name in 2011 — 118 years after it was taken away.", text:"The city council ___ the original name in 2011.", answer: "restored", options: ["restored", "has restored the name to the community", "was restoring it when the vote passed", "restores names periodically"], afterflavour: "Restored = past simple, 2011, one vote, done. Has restored = present perfect, would mean the restoration is still relevant (it is, but the question is about the act). Was restoring when the vote passed = progressive, implies the vote interrupted the restoration. 2011 is closed." },
        { qid:"ooc-v15", pressureClass:"high", context: "K-pop ___ gospel, funk, hip-hop, and R&B from Black American artists as structural features, not as phase.", text: "K-pop ___ absorbed gospel, funk, hip-hop, and R&B from Black American artists for over thirty years.", answer: "has absorbed", options: ["has absorbed", "absorbed these influences in the 1990s", "is still absorbing new influences", "had absorbed them before going global"], afterflavour: "Has absorbed = present perfect. The influences are in the music now, consequence ongoing. Absorbed in the 1990s = past simple, would mean it stopped. Is still absorbing = progressive, ongoing process. The absorption is settled and permanent: present perfect." }
      ]
    },
    {
      id: "ooc-news",
      name: "News",
      label: "Announce then explain",
      rule: ``,
      questions: [
        { qid:"ooc-n01", pressureClass:"high", context: "Amara. The waiting room. The envelope.", text: "'I ___ lost my keys — I can't get back in.'", answer: "has just opened", options: ["has just opened", "just opened", "has been opening", "opens"], afterflavour: "Has just opened = present perfect, the consequence is visible now. Just opened = past simple, closed. Her hands are shaking: present consequence." },
        { qid:"ooc-n02", pressureClass:"high", context: "Hoa. The family WhatsApp. A message at 2am.", text:"'I ___ them in the park near the bridge.'", answer: "has just found out", options: ["has just found out", "just found out", "has been finding out", "finds out"], afterflavour: "Has just found out = present perfect, the impact is now. Just found out = past simple, event closed. The present moment carries it." },
        { qid:"ooc-n03", pressureClass:"high", context: "Tomas. The scholarship board. The result.", text: "'I ___ got into the music school!'", answer: "has just received", options: ["has just received", "just received", "has been receiving", "receives"], afterflavour: "Has just received = present consequence. Just received = past simple. He's still holding the letter." },
        { qid:"ooc-n04", pressureClass:"high", context: "Klára. The audition. Yesterday. She has not slept.", text:"'At yesterday's audition I ___ a Glass piece and an original.'", answer: "has just come", options: ["has just come", "just came", "has been coming", "comes"], afterflavour: "Has just come = present perfect. Still in the moment of it. Just came = past simple, over. She hasn't slept: present consequence." },
        { qid:"ooc-n05", pressureClass:"high", context: "Breaking. The ticker is live.", text: "The government ___ invoked emergency powers.", answer: "has invoked", options: ["has invoked", "invoked", "invokes", "is invoking"], afterflavour: "Has invoked = present perfect. The powers are now in effect. Invoked = closed past." },
        { qid:"ooc-n06", pressureClass:"high", context: "This morning. The announcement.", text: "The prime minister ___ announced her resignation.", answer: "has resigned", options: ["has resigned", "resigned", "resigns", "is resigning"], afterflavour: "Has resigned = present perfect. She is no longer minister. Resigned = closed past." },
        { qid:"ooc-n07", pressureClass:"high", context: "Scientists ___ smallpox — the first disease in human history to be eliminated by deliberate action.", text: "Scientists ___ eradicated smallpox — the first disease ever wiped from the earth.", answer: "have eradicated", options: ["have eradicated", "eradicated it in 1980", "are eradicating it", "had eradicated it by 1980"], afterflavour: "Have eradicated = present perfect. The consequence — no smallpox anywhere on earth — is still the present reality. Eradicated in 1980 = past simple, closed. Are eradicating = progressive, implies ongoing. Had eradicated by 1980 = past perfect, needs another past event after it." },
        { qid:"ooc-n08", pressureClass:"high", context: "India ___ China as the world's most populous country — and it remains so.", text: "India ___ overtaken China as the world's most populous country.", answer: "has overtaken", options: ["has overtaken", "overtook China in 2023", "is overtaking gradually", "had overtaken by 2023"], afterflavour: "Has overtaken = present perfect. It happened recently and India is still the most populous. Overtook in 2023 = past simple, closes the event. Is overtaking = progressive, implies ongoing process. Had overtaken by 2023 = past perfect, would need another past event." },
        { qid:"ooc-n09", pressureClass:"high", context:"The ozone layer. A treaty. Decades of recovery.", text: "The ozone layer ___ been healing since the Montreal Protocol banned CFCs in 1987.", answer: "has been healing", options: ["has been healing", "healed", "is healing", "was healing"], afterflavour:"The hole was discovered in 1985. One treaty. It is working. Present perfect progressive." },
        { qid:"ooc-n10", pressureClass:"high", context:"India. 1930. Gandhi. 240 miles. Salt.", text:"Gandhi ___ to the sea to make salt in defiance of British taxation.", answer:"walked", options:["walked","has walked","walks","was walking"], afterflavour:"Past simple. Completed. 78 days. 80 followers became tens of thousands." },
        { qid:"ooc-n11", pressureClass:"high", context:"China. 1949. The civil war ended.", text:"Mao Zedong ___ the People's Republic of China on 1 October 1949.", answer:"proclaimed", options:["proclaimed","has proclaimed","proclaims","was proclaiming"], afterflavour:"Past simple. Closed. The most populous country on earth changed governments in one announcement." }
      ]
    },
    {
      id: "ooc-progressive",
      name: "How Long",
      label: "The activity, not the result",
      rule: ``,
      questions: [
        
        
        
        { qid:"ooc-p04", pressureClass:"medium", context: "Mascara on the tissue. Red eyes. She says nothing.", text:"'___ you been crying?'", answer: "Have", options: ["Have", "Had", "Are", "Were"], afterflavour: "Have = present perfect question. Been crying = progressive. The visible state is the present consequence of the past activity. Had = past perfect — would mean before another past event." },
        { qid:"ooc-p12", pressureClass:"high", context:"The inquiry opened three years ago. It hasn't closed.", text:"They ___ withholding documents since the first hearing.", answer:"have been", options:["have been","were","are","had been"], afterflavour:"Ongoing since a named past point → present perfect progressive." },
        { qid:"ooc-p13", pressureClass:"medium", context:"Yellowstone. 1995. Wolves reintroduced.", text:"The river courses ___ shifting ever since wolves were reintroduced.", answer:"have been", options:["have been","were","are","had been"], afterflavour:"Wolves ate deer. Deer stopped grazing riverbanks. Vegetation grew. Roots held soil. Rivers changed course. One species. Present perfect progressive." },
        { qid:"ooc-p14", pressureClass:"medium", context:"Humpback whales. Near extinction in 1986. Now.", text:"Humpback whale populations ___ recovering since the international whaling ban.", answer:"have been", options:["have been","were","are","had been"], afterflavour:"Ongoing recovery. Started at a named point. Present perfect progressive." },
        { qid:"ooc-p15", pressureClass:"high", context:"Global average temperature. Since 1850.", text:"The Earth's surface ___ warming at a rate of approximately 0.2°C per decade.", answer:"has been", options:["has been","was","is","had been"], afterflavour:"Ongoing since a named start point. Present perfect progressive." },
        { qid:"ooc-p16", pressureClass:"high", context:"Sea level. The ice is melting.", text:"Global sea levels ___ rising three times faster than they did in the early 20th century.", answer:"have been", options:["have been","were","are","had been"], afterflavour:"Rate is accelerating. Present perfect progressive." }
      ]
    },
    {
      id: "ooc-stative",
      name: "Stative",
      label: "Some verbs resist -ing",
      rule: ``,
      questions: [
        
        
        
        
        
        
      ]
    },
    {
      id: "ooc-short-answers",
      name: "Short Answers",
      label: "Match the tense",
      rule: ``,
      questions: [
        
        
        
        
        
        
      ]
    }
  ],
  bossQuestions: []
},

// ─────────────────────────────────────────────────────────────
// PACK 3 — VOICE & AGENCY
// All passive content merged: form, agent, framing, active choice
// ─────────────────────────────────────────────────────────────
{
  id: "voice-and-agency",
  name: "Who Controls Meaning",
  subtitle: "Voice & Agency",
  colour: "#8b5cf6",
  tier: "intermediate",
  rounds: [
    {
      id: "voa-form",
      name: "Form",
      label: "BE + past participle",
      rule: ``,
      questions: [
        { qid:"voa-f01", pressureClass:"medium", context: "The audit. 6am. Nobody was told in advance.", text: "The figures ___ before the audit team arrived at 6am.", answer: "were audited", options: ["were audited", "were examined by auditors", "audited", "have been audited"], afterflavour: "Were audited = passive past. No agent named. The departments learned at 6am with everyone else." },
        { qid:"voa-f02", pressureClass:"medium", context: "The bridge ___ — it will be closed to traffic for six weeks.", text: "The bridge ___ — it will be closed for six weeks.", answer: "is being reinforced", options: ["is being reinforced", "workers are reinforcing it", "was reinforced last year", "has been reinforced before"], afterflavour: "Is being reinforced = present progressive passive, in progress now. Workers are reinforcing it = active progressive, names the workers. Was reinforced last year = past. Has been reinforced before = present perfect. In progress: present progressive passive." },
        { qid:"voa-f03", pressureClass:"medium", context: "The Brewarrina fish traps. New South Wales. The oldest human-made structures in Australia.", text: "The bridge ___ — it will be closed for six weeks.", answer: "are still being studied", options: ["are still being studied", "are studied", "have been studied", "were being studied"], afterflavour: "Are still being studied = present progressive passive. In progress right now. Still being studied = ongoing current process." },
        { qid:"voa-f04", pressureClass:"medium", context: "Three new stops ___ without any public announcement or community consultation.", text: "New stops ___ to the network last month — the route now covers the eastern suburbs.", answer: "were added", options: ["were added", "TfL added them without notice", "are currently being added", "had been planned years earlier"], afterflavour: "Were added = past simple passive, agentless. TfL added them without notice = active, names the agent. Are currently being added = present progressive, implies ongoing. Had been planned = past perfect. The passive buries who decided: were added." },
        { qid:"voa-f05", pressureClass:"medium", context: "The application portal. Status: received. She is waiting. The decision has not come.", text: "Her application ___ and is currently under review.", answer: "has been received", options: ["has been received", "was received and closed", "the office received it last week", "had been received"], afterflavour: "Has been received = present perfect passive, recent consequence. Was received and closed = past simple, implies it's done. The office received it = active. Had been received = past perfect. Under review: present consequence — present perfect." },
        { qid:"voa-f06", pressureClass:"high", context: "The inquiry has been running since its first session. The review is not complete.", text:"The evidence ___ since the inquiry's first session — and the review is still running.", answer: "has been examined", options: ["has been examined", "was examined", "is being examined", "had been examined"], afterflavour: "Has been examined = present perfect passive, ongoing since a named point. Was examined = past simple, closed — but the review is still running. Is being examined = present progressive, happening right now but loses the 'since' timeline. Had been examined = past perfect, would need another past event after." },
        { qid:"voa-f07", pressureClass:"high", context: "A medical protocol introduced in 2022. The quarterly review is still running.", text:"Patients ___ under this protocol since 2022 — the quarterly review is still running.", answer: "have been monitored", options: ["have been monitored", "were monitored", "are monitored", "had been monitored"], afterflavour: "Have been monitored = present perfect passive, since 2022, still ongoing. Were monitored = past simple, would close it — the review is still running. Are monitored = present simple, would make it permanent procedure not a timed study. Had been monitored = past perfect, would need another past event after." },
        { qid:"voa-f08", pressureClass:"high", context:"The data was held for years. Then the leak.", text:"The files ___ stored on private servers before anyone noticed.", answer:"had been", options:["had been","have been","were","are being"], afterflavour:"Before another past event → past perfect passive." }
      ]
    },
    {
      id: "voa-agent",
      name: "Agent",
      label: "When the doer matters — or doesn't",
      rule: ``,
      questions: [
        { qid:"voa-ag01", pressureClass:"medium", context: "Toni Morrison. Beloved. 1987.", text:"Things Fall Apart ___ written ___ Achebe.", answer: "was written by", options: ["was written by", "is … by", "has … from", "had … of"], afterflavour: "Was written by = passive with named agent. The agent is the headline fact — that's why the passive is used here with by." },
        { qid:"voa-ag02", pressureClass:"medium", context: "The Windrush landing cards. The Home Office.", text: "Her bike ___ while she was inside — the lock was cut.", answer: "have been destroyed", options: ["have been destroyed", "were destroyed", "are destroyed", "had been destroyed"], afterflavour: "Have been destroyed = present perfect passive. The consequence is now — people need those documents. Were destroyed = past simple, would close the event." },
        { qid:"voa-ag03", pressureClass:"medium", context:"The grant came through. She didn't chase it — it found her.", text: "She ___ the residency without applying — someone had recommended her name.", answer: "was offered", options: ["was offered", "has been offered", "is offered", "had been offered"], afterflavour: "Was offered = past simple passive. She received the action. Past simple because the event is the story." },
        { qid:"voa-ag04", pressureClass:"high", context: "The landing cards that proved decades of legal residence ___ by the Home Office.", text: "She ___ the residency without applying — someone had recommended her name.", answer: "were destroyed", altAnswers:["were"], options: ["were destroyed", "have been destroyed and cannot be recovered", "destroyed themselves", "had been destroyed before anyone asked"], afterflavour: "Were destroyed = past simple passive, closed act. Have been destroyed and cannot be recovered = present perfect, consequence ongoing — both accurate. Destroyed themselves = no agent, impossible. Had been destroyed before anyone asked = past perfect passive, plausible sequence. Were destroyed is the direct claim." },
        { qid:"voa-ag05", pressureClass:"high", context:"The Kolwezi mines. The phones were bought. The question is who paid.", text: "The cobalt ___ under contract with the provincial government — the workers never saw those terms.", answer: "was extracted", options: ["was extracted", "is extracted", "has been extracted", "had been extracted"], afterflavour: "Was extracted = past simple passive. Specific contract, specific time." },
        { qid:"voa-ag06", pressureClass:"high", context:"The report was written. Then it sat. Then it was released — partially.", text: "Key sections ___ before the document was released — only three people had access to the full version.", answer: "were redacted", options: ["were redacted", "are redacted", "have been redacted", "had been redacted"], afterflavour: "Were redacted = past simple passive. Before release = the redaction preceded the document going public." },
        { qid:"voa-ag07", pressureClass:"high", context: "The inquiry. Three years. Named individuals. No charges.", text: "No one ___ accountable after three years of hearings.", answer: "has been held", options: ["has been held", "was held", "is held", "will be held"], afterflavour: "Has been held = present perfect passive. Ongoing absence — still true now. Was held = closed past, would mean someone was held and that period ended. The report exists. The accountability doesn't. Present perfect keeps the gap open." },
        { qid:"voa-ag08", pressureClass:"high", context:"Amritsar. April 1919. British India.", text: "Hundreds of unarmed civilians ___ at a peaceful gathering in Amritsar.", answer: "were shot", options: ["were shot", "are shot", "have been shot", "had been shot"], afterflavour: "Were shot = past simple passive. Are shot = present (ongoing). Have been shot = present perfect (consequence now). 1919 is closed — past simple." },
        { qid:"voa-ag09", pressureClass:"high", context:"Bengal. 1943. A famine that didn't have to happen.", text: "Food ___ from Bengal to British war supplies while millions died of starvation.", answer: "was diverted", options: ["was diverted", "is diverted", "has been diverted", "had been diverted"], afterflavour: "Was diverted = past simple passive. A closed historical act with a named implied agent." },
        { qid:"voa-ag10", pressureClass:"high", context:"Iceland. 24 October 1975. One day.", text: "Food ___ from Bengal to British war supplies while millions died of starvation.", answer: "was diverted", options: ["was diverted", "is diverted", "has been diverted", "had been diverted"], afterflavour:"Ninety percent. Banks closed. Theatres closed. Flights grounded. The president called it a disaster. It lasted one day. Were + not." },
        { qid:"voa-ag11", pressureClass:"high", context:"Berlin. 1884-85. Fourteen European nations. Zero African representatives.", text: "The African continent ___ between European powers at a single conference in 1884.", answer: "was divided", options: ["was divided", "had been divided", "is divided", "has been divided"], afterflavour: "Was divided = past simple passive. One moment, one conference. Had been would mean before another past event." },
        { qid:"voa-ag12", pressureClass:"high", context:"Benin City. 1897. British troops.", text: "Thousands of bronze sculptures ___ from the royal palace in Benin City and shipped to Europe.", answer: "were looted", options: ["were looted", "have been looted", "are looted", "had been looted"], afterflavour: "Were looted = past simple passive. 1897 is closed. Have been looted would suggest ongoing — it stopped." },
        { qid:"voa-ag13", pressureClass:"high", context:"Simon Bolivar. Six countries. One lifetime.", text: "Thousands of bronze sculptures ___ from the royal palace in Benin City and shipped to Europe.", answer: "were looted", options: ["were looted", "have been looted", "are looted", "had been looted"], afterflavour:"Plural subject. Passive. Were liberated." },
        { qid:"voa-ag14", pressureClass:"high", context:"Rock and roll. 1950s. One name gets the credit. Another name did the work.", text:"Chuck Berry ___ rock and roll. Elvis Presley ___ given the credit.", answer:"invented", options:["invented","was invented","has invented","invents"], afterflavour:"Active vs passive. Same event. Different grammar. Different story." },
        { qid:"voa-ag15", pressureClass:"high", context:"Congo Square. African rhythms. Preserved under slavery.", text: "Jazz ___ by Black musicians in New Orleans from the meeting of African rhythms and European harmony.", answer: "was developed", options: ["was developed", "is developed", "has been developed", "had been developed"], afterflavour: "Was developed = past simple passive. The origin is historical. Is developed would mean ongoing. Present perfect would mean recent relevance." },
        { qid:"voa-ag16", pressureClass:"high", context:"K-pop. The trail from Congo Square to Seoul.", text: "African-American music ___ into Korean pop culture through US military bases in the 1950s.", answer: "was absorbed", options: ["was absorbed", "has been absorbed", "is absorbed", "had been absorbed"], afterflavour: "Was absorbed = past simple passive. The bases were in the 1950s — closed. Has been absorbed would mean the absorption is still happening." },
        { qid:"voa-ag17", pressureClass:"high", context:"Sister Rosetta Tharpe. Electric guitar. Distortion. 1940s. Before Chuck Berry. Before Little Richard.", text: "Rock and roll ___ by the people who received credit for inventing it.", answer: "was not invented", options: ["was not invented", "has not been invented", "is not invented", "had not been invented"], afterflavour: "Was not invented = past simple passive negative. Historical claim. Present perfect would mean it still hasn't been invented — odd." },
        { qid:"voa-ag18", pressureClass:"high", context: "Tulsa. 31 May 1921. Greenwood District. Black Wall Street. The wealthiest Black neighbourhood in America.", text: "Greenwood — Black Wall Street — ___ by a white mob acting with city government authorisation.", answer: "was destroyed", options: ["was destroyed", "has been destroyed", "is destroyed", "had been destroyed"], afterflavour: "Was destroyed = past simple passive. May 1921 is closed. Has been destroyed would make it recent." },
        { qid:"voa-ag19", pressureClass:"high", context: "Philadelphia. 13 May 1985. A residential street. A city government. A bomb.", text: "A bomb ___ on a residential street by the Philadelphia city government on 13 May 1985.", answer: "was dropped", options: ["was dropped", "has been dropped", "is dropped", "had been dropped"], afterflavour: "Was dropped = past simple passive. 1985 is closed. The agent is named — by the Philadelphia city government. The passive foregrounds the act, the by-phrase names the agent." }
      ]
    },
    {
      id: "voa-frame",
      name: "Frame",
      label: "The choice does something",
      rule: ``,
      questions: [
        { qid:"voa-fr01", pressureClass:"high", context: "The contractor ___ the project for three years before the contract was terminated.", text:"The programme ___ quietly for five years before the audit.", answer:"ran", options: ["ran", "was run by the contractor", "has run", "is run"], afterflavour: "Ran = active past simple, contractor is the subject. Was run = passive, contractor absent from subject position. Has run = present perfect. The contractor is named: active. The press release that doesn't name them: passive." },
        { qid:"voa-fr02", pressureClass:"high", context: "The project ___ by the same contractor for three years before being terminated.", text:"The programme ___ quietly for five years before the audit.", answer:"was run", options: ["was run", "ran", "has been run", "had run"], afterflavour: "Was run by = passive with named agent. Ran = active, contractor would need to be subject. Has been run = present perfect. The project is the subject, agent named in by-phrase: passive." },
        { qid:"voa-fr03", pressureClass:"high", context: "The inquiry published its findings. The statement appeared three hours later.", text: "'Mistakes were made.' 'Process failures ___.' 'There were shortcomings ___.'", answer: "were identified", options: ["were identified", "identified", "have been identified", "are identified"], afterflavour: "Were identified = past passive. The passive distributes blame without assigning it. The active would need a subject." },
        { qid:"voa-fr04", pressureClass:"high", context: "You have the memo. It has a name on it. The press release doesn't.", text: "The press release says the decision ___ at board level. The memo shows who signed it.", answer: "was taken", options: ["was taken", "was approved", "had been approved", "has been taken"], afterflavour: "Was taken = agentless passive. Approved would confirm the action more definitively. The journalist chose the vaguest option." },
        { qid:"voa-fr05", pressureClass:"high", context: "You have the memo. It has the director's name. The press release does not.", text: "The press release says the decision ___ at board level. The memo shows who signed it.", answer: "made", options: ["made", "was made", "had made", "has made"], afterflavour: "Made = active past simple. Named agent. The passive was made = no agent. The journalist chooses active to name the director." },
        { qid:"voa-fr06", pressureClass:"high", context: "James Brown. Papa's Got a Brand New Bag. 1965.", text:"Shakespeare ___ Hamlet around 1600.", answer: "wrote", options: ["wrote", "was writing", "was written", "had written"], afterflavour: "Wrote = active past simple, James Brown is the subject. Was written = passive, removes him from the subject position. The agent matters here." },
        { qid:"voa-fr07", pressureClass:"high", context: "The committee. The funding application. Third rejection.", text:"The Home Office ___ the application without explanation.", answer: "rejected", options: ["rejected", "was rejected", "is rejecting", "had rejected"], afterflavour: "Rejected = active, committee is the subject. Was rejected = passive, committee disappears. Naming the committee names the power." },
        { qid:"voa-fr08", pressureClass:"high", context: "The spokesperson is at the podium. Nobody has been charged. The language is careful.", text: "'It ___ that errors occurred during this period.'", answer: "is acknowledged", options: ["is acknowledged", "is agreed", "has been confirmed", "is recognised"], afterflavour: "Is acknowledged = present passive — someone acknowledges, unnamed. Confirmed would mean certainty. Recognised would mean awareness. Acknowledged = admission without commitment." },
        { qid:"voa-fr09", pressureClass:"high", context: "The same briefing, later. Someone asked a direct follow-up.", text: "'It ___ that errors occurred during this period.'", answer: "has been confirmed", options: ["has been confirmed", "was confirmed", "is confirmed", "had been confirmed"], afterflavour: "Has been confirmed = present perfect passive. The confirmation has present relevance — it is now on the record." },
        { qid:"voa-fr10", pressureClass:"high", context:"Shell's sustainability report. Niger Delta water quality section.", text:"Remediation work ___ ongoing since the 2011 UNEP report.", answer:"has been ongoing", options:["has been ongoing","is ongoing","was ongoing","had been ongoing"], afterflavour:"The UNEP reported in 2011. Shell acknowledged in 2012. The remediation is ongoing. The water is not drinkable. Quarterly reports still rise." }
      ]
    }
  ],
  bossQuestions: []
},

// ─────────────────────────────────────────────────────────────
// PACK 4 — PATTERNS
// Frequency, habit, for/since, questions, negatives
// ─────────────────────────────────────────────────────────────
{
  id: "general-patterns",
  name: "What Always Happens",
  subtitle: "Habits & Facts",
  colour: "#f59e0b",
  tier: "intermediate",
  rounds: [
    {
      id: "gp-habits",
      name: "What always happens",
      label: "Present simple — habits, facts, routines",
      rule: `<strong>Present simple</strong> describes what is always, usually, or never true — habits, facts, institutional behaviour.<span class="rt-eg">She works. · The system fails. · He never asks.</span>`,
      questions: [
        { qid:"gp-h01", pressureClass:"low", context:"Every deadline. Every time. Three years running.", text:"Tomáš ___ his essay the night before and hands it in slightly damp.", answer:"writes", options:["writes","is writing","wrote","has written"], afterflavour:"Consistent. Committed." },
        { qid:"gp-h02", pressureClass:"low", context:"Linh's morning ritual. The order is non-negotiable.", text:"She ___ her phone before she ___ her eyes properly.", answer:"checks", options:["checks","is checking","checked","has checked"], afterflavour:"First. Always." },
        { qid:"gp-h03", pressureClass:"medium", context:"Felix tells his parents he's at the library. He is not at the library.", text:"He ___ his parents he ___ studying.", answer:"tells", options:["tells","is telling","told","has told"], afterflavour:"Technically not a lie. Technically." },
        { qid:"gp-h04", pressureClass:"medium", context:"The Smíchov McDonald's at 11pm. Sociological study in progress.", text:"Jana ___ there after every house party. She ___ the same meal.", answer:"goes", options:["goes","is going","went","has gone"], afterflavour:"Routine is comfort. Comfort is routine." },
        { qid:"gp-h05", pressureClass:"high", context:"The landlord sends the same email every October. The amount is different.", text:"He ___ the rent and ___ it on 'increased maintenance costs.'", answer:"raises", options:["raises","is raising","raised","has raised"], afterflavour:"Maintenance costs. Sure." },
        { qid:"gp-h06", pressureClass:"high", context:"Hoa's grandmother makes it every Tết. The recipe has no measurements.", text:"She ___ everything by feel and it ___ perfect every time.", answer:"measures", options:["measures","is measuring","measured","has measured"], afterflavour:"Some knowledge doesn't need writing down." },
        { qid:"gp-h07", pressureClass:"high", context: "Every country. The gap varies. The direction is consistent.", text: "In every country on earth, women ___ more unpaid care work than men.", answer: "perform", options: ["perform", "do", "are doing", "have done"], afterflavour: "Perform = present simple, permanent structural fact. Do works but perform is more precise for labour." },
        { qid:"gp-h08", pressureClass:"high", context: "Simone de Beauvoir. The Second Sex. 1949. One of the most important sentences in feminist theory.", text: "'One ___ not born, but rather becomes, a woman.'", answer: "is not born", options: ["is not born", "does not become", "was not born", "has not been born"], afterflavour: "Is not born = present simple passive. Permanent structural claim. Was not born = past — would mean one specific person. Present simple makes it universal." },
        { qid:"gp-h09", pressureClass:"high", context: "Simone de Beauvoir. The Second Sex. 1949. One of the most important sentences in feminist theory.", text: "'One ___ not born, but rather becomes, a woman.'", answer:"is", options:["is","was","has been","would be"], afterflavour:"Is not born = present simple passive, universal and permanent. Was not born = past, would mean one specific person. Has been = present perfect, implies change over time. Is: the claim is structural, not historical." },
        { qid:"gp-h10", pressureClass:"high", context:"Colombia. A fact most people don't know.", text:"Colombia ___ more than 70% of the world's emeralds.", answer:"produces", options:["produces","produce","is producing","produced"], afterflavour:"Third person singular -s. Present simple fact." },
        { qid:"gp-h11", pressureClass:"high", context:"Jazz funerals. New Orleans. Still happening.", text:"The second line tradition in New Orleans ___ directly from Congo Square drum rhythms.", answer:"descends", options:["descends","descend","is descending","descended"], afterflavour:"Third person -s. Present simple. The tradition is unbroken." },
        { qid:"gp-h12", pressureClass:"high", context:"K-pop. What the industry is built on.", text:"K-pop producers regularly ___ Black American songwriters and producers to create the sound.", answer:"hire", options:["hire","hires","are hiring","hired"], afterflavour:"Plural subject. Present simple. The relationship is structural, not accidental." }
      ]
    },
    {
      id: "gp-frequency",
      name: "How often",
      label: "Frequency adverbs — position and meaning",
      rule: `Frequency adverbs go <strong>before the main verb</strong>, after BE.<span class="rt-eg">She <em>always</em> arrives. · He is <em>never</em> on time. · They <em>rarely</em> explain.</span>`,
      questions: [
        { qid:"gp-f01", pressureClass:"low", context:"Three alarms. One outcome.", text:"Marek ___ sleeps through all of them.", answer:"always", options:["always","never","rarely","sometimes"], afterflavour:"Consistent." },
        { qid:"gp-f02", pressureClass:"low", context:"Not once in four years of teaching has he said 'I don't know.'", text:"He ___ admits he's wrong.", answer:"never", options:["never","always","often","usually"], afterflavour:"Tenure does things to people." },
        { qid:"gp-f03", pressureClass:"medium", context:"The president had declared the war won several times before they lost.", text:"He ___ announced victory before checking whether it was true.", answer:"always", options:["always","never","rarely","sometimes"], afterflavour:"The confidence is the point." },
        { qid:"gp-f04", pressureClass:"medium", context:"Once a year, maybe. When there's no other option.", text:"The school ___ explains why a student was expelled.", answer:"rarely", options:["rarely","always","often","usually"], afterflavour:"Discretion. They call it discretion." },
        { qid:"gp-f05", pressureClass:"high", context:"The company's legal team reviewed the contract. You did not.", text:"You ___ read the terms and conditions.", answer:"never", options:["never","always","sometimes","usually"], afterflavour:"Forty-seven pages. Nobody does." },
        { qid:"gp-f06", pressureClass:"high", context:"Lucie got the internship. Her father plays golf with the director.", text:"The most qualified candidate ___ gets the job.", answer:"rarely", options:["rarely","always","never","usually"], afterflavour:"Merit. They call it merit." }
      ]
    },
    {
      id: "gp-negatives",
      name: "What doesn't happen",
      label: "Don't / doesn't — institutional and personal negatives",
      rule: `<strong>Don't</strong> = I/you/we/they + base verb.<br><strong>Doesn't</strong> = he/she/it + base verb.<span class="rt-eg">The contract doesn't mention overtime. · We don't ask.</span>`,
      questions: [
        { qid:"gp-n01", pressureClass:"low", context:"School policy. Page 34 of the handbook nobody has read.", text:"The school ___ allow phones in class.", answer:"doesn't", options:["doesn't","don't","isn't","hasn't"], afterflavour:"Which is why they're under the desk." },
        { qid:"gp-n02", pressureClass:"medium", context:"The agreement between Klára's parents. Unspoken, binding.", text:"They ___ talk about money in front of the kids.", answer:"don't", options:["don't","doesn't","aren't","haven't"], afterflavour:"The kids know anyway." },
        { qid:"gp-n03", pressureClass:"medium", context:"Minh works the early shift at the market. His boss has never asked.", text:"The contract ___ mention overtime.", answer:"doesn't", options:["doesn't","don't","isn't","hasn't"], afterflavour:"Standard." },
        { qid:"gp-n04", pressureClass:"high", context:"The packaging says 'ethically sourced.' The supply chain does not agree.", text:"The label ___ explain who picked it or what they were paid.", answer:"doesn't", options:["doesn't","don't","isn't","hasn't"], afterflavour:"The font on the label is lovely though." },
        { qid:"gp-n05", pressureClass:"high", context:"Three formal complaints. All acknowledged. None investigated.", text:"The committee ___ act unless there's media pressure.", answer:"doesn't", options:["doesn't","don't","isn't","hasn't"], afterflavour:"Accountability needs an audience." },
        { qid:"gp-n06", pressureClass:"high", context: "Women ___ earn the same as men for equivalent work in any country on earth.", text:"Women ___ earn the same as men for equivalent work in any country on earth.", answer:"don't", options: ["don't", "will never", "have rarely", "aren't paid"], afterflavour: "Don't = present simple negative, permanent structural fact. Will never = future prediction. Have rarely = present perfect, implies occasional exceptions. Aren't paid = also correct but changes the verb. Don't is the clean present simple claim." },
        { qid:"gp-n07", pressureClass:"high", context: "The Great Wall of China ___ appear in any photograph taken from space.", text:"The Great Wall of China ___ appear in any photograph taken from space.", answer:"doesn't", options: ["doesn't", "won't", "isn't able to", "has never"], afterflavour: "Doesn't = present simple, permanent physical fact. Won't = future, wrong tense for a present fact. Isn't able to = different claim. Has never = present perfect. Too narrow to be visible from orbit: present simple." },
        { qid:"gp-n08", pressureClass:"high", context: "97% of climate scientists ___ disagree that human activity causes global warming.", text:"97% of climate scientists ___ disagree that human activity is causing global warming.", answer:"don't", options: ["don't", "won't", "have never", "aren't likely to"], afterflavour: "Don't = present simple, current consensus. Won't = future. Have never = present perfect. Aren't likely to = hedged. 97% is a present measurement: don't." }
      ]
    },
    {
      id: "gp-duration",
      name: "For and Since",
      label: "How long it's been going on",
      rule: `<strong>For</strong> = duration. <strong>Since</strong> = starting point.<span class="rt-eg">for three years · since 2019 · since she was born · for as long as anyone can remember</span>`,
      questions: [
        { qid:"gp-d01", pressureClass:"low", context:"Same flat, same landlord, same damp patch on the ceiling.", text:"Pavel has lived there ___ 2015.", answer:"since", options:["since","for","from","during"], afterflavour:"The damp patch has also been there since 2015." },
        { qid:"gp-d02", pressureClass:"low", context:"Duc has had the same part-time job since Year 10.", text:"He has worked at the Vinohrady market ___ three years.", answer:"for", options:["for","since","from","during"], afterflavour:"Saving. Not sure what for yet." },
        { qid:"gp-d03", pressureClass:"medium", context:"The Roma families were moved out when the neighbourhood became desirable.", text:"The building has been empty ___ the evictions.", answer:"since", options:["since","for","from","during"], afterflavour:"The neighbourhood improved. For some." },
        { qid:"gp-d04", pressureClass:"medium", context:"The same family has run the company through four generations and two name changes.", text:"They have controlled the supply chain ___ over a century.", answer:"for", options:["for","since","from","during"], afterflavour:"Continuity is a kind of power." },
        { qid:"gp-d05", pressureClass:"high", context: "Communities have been living with contaminated water ___ the pipeline was first laid — sixty years with no remediation.", text:"Oil has been entering the groundwater ___ the pipeline was laid.", answer: "since", options: ["since", "for", "from", "throughout"], afterflavour: "Since = named starting point, 1962. For = duration without a named start. The pipeline's laying year is the named event — since anchors the contamination to a specific act. For sixty years would also work but loses the causal connection to the specific act." },
        { qid:"gp-d06", pressureClass:"high", context:"Klára's grandmother remembers when the border was different. The border remembers nothing.", text:"The family has been separated ___ the partition.", answer:"since", options:["since","for","from","during"], afterflavour:"Borders are recent. Families are old." },
        { qid:"gp-d07", pressureClass:"high", context: "China has lifted over 800 million people out of extreme poverty ___ 1978 — the largest reduction in human history.", text:"China has lifted over 800 million people out of extreme poverty ___ 1978 — the largest reduction in human history.", answer: "since", options: ["since", "for over four decades", "throughout the reform period", "from the moment of reform"], afterflavour: "Since = named starting point, 1978. For over four decades = duration, no named start. Throughout the reform period = imprecise, no start date. From the moment of reform = close, but from is not standard with present perfect in this construction. 1978 is the named event: since." },
        { qid:"gp-d08", pressureClass:"medium", context: "Women have earned less than men ___ as long as wage records have existed.", text:"Women have earned less than men ___ as long as wage records have existed.", answer: "for", options: ["for", "since records began", "throughout all of documented history", "from the first payroll"], afterflavour: "For = duration without a specific named start. Since records began = also correct — but since requires a named starting point. The sentence says 'as long as records have existed' which is duration, not a named moment: for. Throughout and from are not standard here." },
        { qid:"gp-d09", pressureClass:"high", context: "Britain extracted wealth from India ___ nearly two centuries of colonial administration.", text:"Britain extracted wealth from India ___ nearly two centuries of colonial rule.", answer: "for", options: ["for", "since the East India Company arrived", "throughout the colonial period", "from 1757 onwards"], afterflavour: "For = duration. Nearly two centuries is the duration, not a named start. Since the Company arrived = also plausible but since requires a specific event as anchor — for is more natural with a duration phrase. Throughout and from are less standard here." },
        { qid:"gp-d10", pressureClass:"high", context:"Carbon dioxide. The atmosphere. Before and after.", text:"Global temperatures have been rising steadily ___ the industrial revolution.", answer:"since", options:["since","for","from","during"], afterflavour: "Since = named starting point. The industrial revolution is when it began. Has been rising since — still rising. For would require a duration without a named start: 'for 200 years' works too, but since names the cause." }
      ]
    },
    {
      id: "gp-questions",
      name: "Does anyone ask?",
      label: "Do / Does questions",
      rule: `<strong>Does</strong> + he/she/it. <strong>Do</strong> + I/you/we/they. Main verb in base form.`,
      questions: [
        { qid:"gp-q01", pressureClass:"low", context: "You are meeting Thi's family. There will be food.", text:"___ she eat meat, or should you panic now?", answer: "does", options: ["does", "do", "is", "has"], afterflavour: "Does = third person singular present simple question. The situation forces you to think about who the subject is before choosing the auxiliary." },
        { qid:"gp-q02", pressureClass:"low", context: "The band. Klub 007. Friday. Your friend has never heard them.", text:"___ they ever play anything written after 1994?", answer: "Do", options: ["Do", "Does", "Are", "Have"], afterflavour: "Do = plural subject. They = the band. Plural → do. The question is about their repertoire — you need the right auxiliary to ask it." },
        { qid:"gp-q03", pressureClass:"medium", context: "Anna's unpaid internship. Three months. Czech labour law.", text:"___ the company actually ___ to pay interns?", answer: "Does", options: ["Does", "Do", "Is", "Has"], afterflavour: "Does = third person singular. The company = singular institution. Does + have. The question is about legal obligation — the auxiliary has to match." },
        { qid:"gp-q04", pressureClass:"high", context: "The school. A new homework policy. No consultation.", text:"___ the administration ever ask students before deciding?", answer: "Does", options: ["Does", "Do", "Is", "Has"], afterflavour: "Does = third person singular. The administration = singular. Does + ask. Present simple question about habit or policy." },
        { qid:"gp-q05", pressureClass:"high", context: "The garment factory. The audit. The workers not interviewed.", text:"___ the certification process actually speak to the workers?", answer: "Does", options: ["Does", "Do", "Is", "Has"], afterflavour: "Does = third person singular. The process = singular. Does + speak. The question is about procedure — the answer reveals whether the audit is meaningful." }
      ]
    }
  ],
  bossQuestions: []
}

);