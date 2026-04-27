// ═══════════════════════════════════════════════════════════════
// TENSE AF — DATA: FOUNDATION TIER
// Rewritten. Situation first. Grammar invisible.
// Content: biology, history, animals, hip hop, real human stakes.
// No phrasebook. No generic pronouns where a name will do.
// ═══════════════════════════════════════════════════════════════

PACKS.push(
// ─────────────────────────────────────────────────────────────
// PRESENT PROGRESSIVE
// ─────────────────────────────────────────────────────────────
{
  id: "present-progressive",
  name: "Now Unfolding",
  subtitle: "Present Progressive",
  colour: "#a855f7",
  tier: "foundation",
  rounds: [
    {
      id: "ppg-now-vs-habit",
      name: "Now or always?",
      label: "Happening now vs. general truth",
      rule: `<strong>Present progressive</strong> = happening now or temporary.<br><strong>Present simple</strong> = habits, facts, always true.<span class="rt-eg">She is running right now. · She runs every morning.</span>`,
      questions: [
        { qid:"ppg01", context: "She usually takes the bus, but this morning she ___ — you can see her at the end of the street.", text: "She usually walks, but today she ___ running.", answer: "is walking", options: ["is walking", "walks", "must be walking", "has walked"], afterflavour: "Is walking = happening now, exceptional. Walks = her permanent habit. Must be walking = deduction, not observation. You can see her: it's direct evidence, not inference." },
        { qid:"ppg02", context: "He normally leaves the moment the bell goes, but tonight he ___ at his desk going through last year's files.", text: "He normally leaves at five, but tonight he ___ at his desk going through last year's files.", answer: "is sitting", options: ["is sitting", "sits at his desk until 7pm most days", "sat down an hour ago", "has been sitting"], afterflavour: "Is sitting = temporary exception. Sits at his desk until 7pm most days = simple, would make it his habit — it isn't. The colleagues' surprise is the evidence." },
        { qid:"ppg03", context: "They always argue about money, but right now they ___ — the accountant can hear everything.", text: "They always argue, but at this point they ___ to each other.", answer: "are whispering", options: ["are whispering", "whisper when the accountant visits", "whispered until she arrived", "have whispered"], afterflavour: "Are whispering = right now, constrained by situation. Whisper when the accountant visits = present simple, habit — but this is the first time, not their habit. The accountant's presence creates this moment." },
        { qid:"ppg04", context: "She ___ the same page of the textbook for the fourth time — she cannot afford to miss anything.", text: "She ___ for the exam. Don't interrupt.", answer: "is reading", options: ["is reading", "reads this chapter before every exam", "read it three times already", "has read"], afterflavour: "Is reading = in progress, this specific moment. Reads this chapter before every exam = simple, would mean it's her routine. The fourth time today is not a routine — it's this exam." },
        { qid:"ppg06", context: "You left the hob on. You've been in the other room for twenty minutes.", text: "Something ___ on the stove. Can you smell it?", answer: "is burning", options: ["is burning", "burns at high heat", "burned earlier and stopped", "has burned before"], afterflavour: "Is burning = happening right now, can you smell it — present evidence of ongoing event. Burns at high heat = present simple, the general fact about combustion — not what's happening in this kitchen. Burned earlier and stopped = past simple, but you can still smell it. Can you smell it: it's happening now." },
        { qid:"ppg-bio01", context: "You cannot feel it. Your brain does not report it.", text: "Your intestines ___ constantly — your brain suppresses the sensation.", answer: "move", options: ["move", "are moving", "moved", "have moved"], afterflavour: "Present simple — always true, not just right now. The brain hides it, but the biology is permanent." },
        { qid:"ppg-bio02", context: "A permanent colony. Not a temporary infestation.", text: "A microscopic mite ___ in your eyelash follicles — it has since birth.", answer: "lives", options: ["lives", "is living", "lived", "has lived"], afterflavour: "Present simple. Permanent state. Not a temporary arrangement. If it were progressive, it would end." }
      ]
    },
    {
      id: "ppg-temporary",
      name: "Temporary situation",
      label: "This won't last forever",
      rule: `<strong>Present progressive</strong> describes situations true <em>for now</em> — temporary arrangements, shifting states.<span class="rt-eg">She's living with her sister. (not forever) · She lives in Brno. (her home)</span>`,
      questions: [
        { qid:"ppg07", context: "Vera ___ with her sister in Žižkov while the building is repaired — she didn't want to, but there was no choice.", text: "She ___ with her brother — it is not where she lives.", answer: "is staying", options: ["is staying", "stays with her sister every winter", "stayed there last year too", "has stayed"], afterflavour: "Is staying = temporary, while the building is repaired. Stays with her sister every winter = simple, would make it a habit. One bag and no choice: this is not her preference or her pattern." },
        { qid:"ppg08", context: "The lease ran out in October. They have not found anything they can afford.", text: "They ___ in a sublet near the station — they move out in March.", answer: "are living", options: ["are living", "live", "lived", "were living"], afterflavour: "Are living = temporary. Live = permanent. February is the horizon." },
        { qid:"ppg10", context: "Radek ___ less meat than usual this month — you'd notice if you saw his plate.", text: "He ___ less meat than usual — his cholesterol was too high.", answer: "is eating", options: ["is eating", "eats less meat than most people", "ate less last year too", "has eaten"], afterflavour: "Is eating = temporary change, medical reason. Eats less meat than most people = simple, would make it a permanent preference. This month only, minimum six weeks: it ends." },
        { qid:"ppg11", context: "The Erasmus grant deadline is Friday. She has the data. She does not have the document.", text: "She ___ the proposal — it has to be in by Friday.", answer: "is finishing", options: ["is finishing", "finishes", "finished", "was finishing"], afterflavour: "Is finishing = current task, not complete. Finishes = habitual action. The deadline makes it urgent." },
        { qid:"ppg18", context: "Amara ___ twice as many accounts as her contract specifies — and she has not been compensated for it.", text: "Klara ___ twice as many clients as she was hired for.", answer: "is managing", options: ["is managing", "manages ten accounts permanently now", "managed ten last quarter too", "has managed"], afterflavour: "Is managing = current situation, against her contract. Manages ten permanently = simple, would mean the contract has been updated. It hasn't." },
        { qid:"ppg20", context: "The water ___ — don't touch the lid yet, it needs another minute.", text: "The water ___ — don't touch the lid.", answer: "is boiling", options: ["is boiling", "boils at 100 degrees", "boiled twenty minutes ago", "has boiled"], afterflavour: "Is boiling = in progress, not yet finished. Boils at 100 degrees = permanent physical fact, not what's happening to this pot right now. Don't touch the lid yet: it's ongoing." },
        { qid:"ppg-tmp01", context: "The building has been evacuated. It is not safe.", text: "Firefighters ___ the upper floors — they have been up there for twenty minutes.", answer:"are searching", options: ["are searching", "search", "searched", "have searched"], afterflavour: "Are searching = present progressive, in progress and incomplete. Search = present simple, would imply this is their routine. They have been up there twenty minutes: still happening." },
        { qid:"ppg-tmp02", context: "She got the residency. Twelve months in Lisbon.", text:"Amara ___ full-time until September.", answer:"is painting", options:["is painting","paints","painted","has painted"], afterflavour:"Is painting = temporary arrangement, fixed end date. Paints = her permanent identity as an artist. Painted = past, done. Has painted = present perfect, no fixed timeline. The residency has a deadline: progressive." }
      ]
    },
    {
      id: "ppg-annoying",
      name: "Always + -ing",
      label: "The irritation pattern",
      rule: `<strong>Present progressive + always</strong> expresses irritation at a repeated habit. Grammatically progressive, emotionally loaded.<span class="rt-eg">He's always interrupting. She's always late.</span>`,
      questions: [
        { qid:"ppg13", context: "Tomas is always ___ someone else's equipment without asking — and never telling them he has.", text: "Tomas is always ___ his keys — twice this week alone.", answer: "borrowing", options: ["borrowing", "borrows equipment on a rota", "borrowed one last Tuesday", "has borrowed"], afterflavour: "Is always borrowing = repeated irritating pattern. Borrows on a rota = simple, would make it official. The frustration is that it's unofficial and unreported." },
        { qid:"ppg14", context: "He is always ___ before anyone has finished their point — and everyone waits for him to stop.", text: "He is always ___ people in meetings.", answer: "interrupting", options: ["interrupting", "interrupts during open questions only", "interrupted twice this meeting", "has interrupted"], afterflavour: "Is always interrupting = the complaint. Interrupts during open questions only = would make it bounded and acceptable. Everyone waiting: it's not bounded." },
        { qid:"ppg15", context: "Fin and Evan. Every meal. Every day. Their parents have accepted this.", text: "The kids are always ___ about the last piece — breakfast, lunch, dinner.", answer: "arguing", options: ["arguing", "argue", "argued", "going to argue"], afterflavour: "Are always arguing = parental exhaustion encoded in the form. Argue = neutral description." },
        { qid:"ppg16", context: "She is always ___ opinions on pieces she has not read — and she is always confident.", text: "She is always ___ unsolicited opinions.", answer: "offering", options: ["offering", "offers opinions when asked", "offered one earlier this week", "has offered"], afterflavour: "Is always offering = irritating pattern. Offers opinions when asked = simple, would make it appropriate. She's not always asked. That's the problem." },
        { qid:"ppg-gap07", context: "Three times this week. Nobody can get in.", text:"He ___ his keys in the door again — this is the third time.", answer:"has left", type:"gap", afterflavour:"Has left = present perfect. The key is still in the door. This is the consequence. Three times this week: the pattern creates the present problem." },
        { qid:"ppg-ann01", context: "Radek. The shared kitchen. Every morning. The entire floor of the building.", text: "Radek is always ___ fish before anyone else arrives.", answer: "microwaving", options: ["microwaving", "microwaves", "microwaved", "going to microwave"], afterflavour: "Is always microwaving = complaint. Microwaves = fact. One word difference. One level of feeling." },
        { qid:"ppg-ann02", context: "The office printer. Its relationship with deadlines. A pattern of malice.", text: "The printer is always ___ at the worst possible moment.", answer: "jamming", options: ["jamming", "jams", "jammed", "going to jam"], afterflavour: "Is always jamming = the printer has a personality. Jams = just what it does. The progressive assigns intent." }
      ]
    },
    {
      id: "ppg-vs-simple",
      name: "Progressive vs Simple",
      label: "Forced choice",
      rule: `Some verbs are almost never progressive (<em>stative verbs</em>): know, understand, believe, want, contain, seem.<span class="rt-eg">I know the answer. (not: I am knowing) · She wants to leave. (not: She is wanting)</span>`,
      questions: [
        { qid:"ppg09", context: "Vera ___ in the same flat she found when she arrived — she has looked at others and come back.", text:"Petra ___ in Zizkov.", answer: "lives", options: ["lives", "is temporarily living there", "lived there until recently", "has been living there recently"], afterflavour: "Lives = permanent. Is temporarily living = progressive, implies it will end. Fifteen years of looking and staying: this is not temporary." },
        { qid:"ppg12", context: "He ___ cards with the same three men every Tuesday — they have outlasted almost everything.", text:"He ___ cards with the same three people.", answer: "plays", options: ["plays", "is currently playing cards with them", "played with them this week", "has played"], afterflavour: "Plays = permanent, enduring habit. Is currently playing = progressive, implies it might stop. Eleven years and counting: present simple." },
        { qid:"ppg19", context: "She ___ before the city wakes up — thirty years, three cities, non-negotiable.", text:"He ___ before the city wakes up.", answer: "runs", options: ["runs", "is running this month while training", "ran this morning", "has run"], afterflavour: "Runs = permanent identity. Is running this month = progressive, implies a temporary phase. Thirty years is not a phase." },
        { qid:"ppg-vs01", context: "She ___ bioluminescent organisms in deep-sea thermal vents — it is her life's work, not her current project.", text:"Dr Nkosi ___ deep-sea fish for the university.", answer: "studies", options: ["studies", "is currently studying them for a grant application", "studied them before switching", "has studied"], afterflavour: "Studies = professional identity. Is currently studying for a grant = progressive, makes it temporary and instrumental. Turning down chairs to stay: this is permanent." },
        { qid:"ppg-vs02", context: "The document ___ evidence from seventeen independent laboratories — the number is part of its authority.", text: "The report ___ more than three hundred pages.", answer: "contains", options: ["contains", "is currently containing new data", "contained more before the redaction", "has contained"], afterflavour: "Contains = stative. A document cannot be in the process of containing something. It contains what it contains." }
      ]
    }
  ],
  bossQuestions: [
    
    
    
    
    
    
  ]
},

// ─────────────────────────────────────────────────────────────
// PAST SIMPLE
// ─────────────────────────────────────────────────────────────
{
  id: "past-simple",
  name: "It Happened",
  subtitle: "Past Simple",
  colour: "#f59e0b",
  tier: "foundation",
  rounds: [
    {
      id: "ps-regular",
      name: "Regular past",
      label: "Add -ed. That is it.",
      rule: `<strong>Past simple regular</strong>: verb + -ed for all persons.<span class="rt-eg">She walked. They practised. He admitted it.</span>`,
      questions: [
        
        { qid:"ps04", context: "After twenty minutes of carefully worded qualifications, he finally ___ the real reason she had not been promoted.", text:"Finally, he ___ what he actually wanted to say.", answer: "admitted", options: ["admitted", "has finally admitted", "was admitting it as she left", "confirmed what she already knew"], afterflavour: "Admitted = reluctant past completion. Has finally admitted = present perfect, would mean the consequence is now relevant — it is, but finally admits this one moment precisely. Confirmed = would mean it was already known. Admitted = the release of something held." },
        { qid:"ps06", context: "When asked about the destroyed documents for the fourth time, the minister smiled and moved to the next topic.", text:"Asked about the documents for the fourth time, the minister ___ and moved on.", answer: "deflected", options: ["deflected", "has deflected every time", "was deflecting as she spoke", "refused to answer"], afterflavour: "Deflected = one past act. Has deflected every time = present perfect, would mean it's a pattern with present relevance — it is, but the question is about this specific moment. Refused to answer = accurate but less precise about the method." },
        { qid:"hist-reg01", context: "Grave robbers ___ corpses and sold them to apothecaries across Europe for use in medical preparations.", text:"Grave robbers ___ corpses and sold them to apothecaries across Europe.", answer:"dug up", options: ["dug up", "have dug up bodies for centuries", "were digging up a specific grave", "used to dig up"], afterflavour: "Dug up = past simple, completed practice. Have dug up = present perfect, would make it current. Were digging up = past progressive, a specific interrupted act. Used to = implies it stopped, which it did — but dug up is more precise about the historical period." },
        { qid:"hist-reg02", context: "The rabbits ___ straight at Napoleon and his men — they had been bred domestically and expected to be fed.", text:"The rabbits ___ straight at Napoleon and his men.", answer:"charged", options: ["charged", "have never charged since", "were charging when the hunt began", "fled in the other direction"], afterflavour: "Charged = past simple, this specific event. Were charging when the hunt began = progressive, would mean it was already happening as background. Fled in the other direction = plausible wrong reading of a rabbit hunt. They charged because they expected food." },
        { qid:"hist-reg03", context: "The war ___ between 38 and 45 minutes — the shortest in recorded history.", text:"The war ___ between 38 and 45 minutes.", answer:"lasted", options: ["lasted", "has lasted in the record books", "was lasting when the sultan surrendered", "continued for days"], afterflavour: "Lasted = past simple, total duration. Was lasting when the sultan surrendered = progressive, would mean the war was background to the surrender. Continued for days = plausible wrong expectation before you know the answer." },
        { qid:"hip-reg01", context: "Mathematics ___ the Wu-Tang Clan logo on a napkin — it is now one of the most recognised symbols in hip hop.", text:"Mathematics ___ the Wu-Tang logo on a napkin for $400.", answer:"designed", options: ["designed", "has designed it into permanence", "was designing it when RZA approved it", "drew something temporary"], afterflavour: "Designed = past simple, one act. Has designed = present perfect, would foreground the logo's current status. Was designing = progressive, would mean RZA interrupted the act. One napkin, one moment: past simple." }
      ]
    },
    {
      id: "ps-irregular",
      name: "Irregular past",
      label: "These don't follow the rules",
      rule: `<strong>Irregular past simple</strong>: no -ed. Each verb has its own form.<span class="rt-eg">go - went · take - took · eat - ate · see - saw</span>`,
      questions: [
        
        
        
        
        { qid:"hist-irr01", context: "He regularly ___ from a mixture made from powdered human skulls — it was called The King's Drops.", text:"He regularly ___ from a mixture made from powdered human skulls.", answer:"drank", options: ["drank", "has drunk such preparations", "was drinking it on the day he died", "refuses to confirm"], afterflavour: "Drank = past simple, regular past habit. Has drunk = present perfect, would mean he still does. Was drinking on the day he died = historically plausible but changes the focus. Drink + past simple + regularly = completed pattern." },
        { qid:"hist-irr02", context: "A Dutch mob ___ the liver of a politician they had just shot — multiple eyewitness accounts confirm it.", text:"A Dutch mob ___ the liver of a politician they had just shot.", answer:"ate", options: ["ate", "has eaten livers throughout history", "was eating when soldiers arrived", "reportedly consumed"], afterflavour: "Ate = past simple, this event. Was eating when soldiers arrived = progressive, implies interruption. Reportedly consumed = accurate but softens the grammar point. This happened: past simple." },
        { qid:"hist-irr03", context: "A wave of molasses ___ through the streets at 56 kilometres per hour — faster than the people running from it.", text:"A wave of molasses ___ through the streets at 56 kilometres per hour.", answer:"swept", options: ["swept", "has swept through the historical record", "was sweeping when people tried to escape", "oozed slowly"], afterflavour: "Swept = past simple, one explosive event. Was sweeping = progressive, implies it was background. Oozed slowly = the plausible wrong expectation about molasses. It moved at 56km/h: past simple, past tense." },
        { qid:"hip-irr01", context: "Biggie, Jay-Z, and Busta Rhymes all ___ the same high school — none of them knew what the others would become.", text:"Three future legends ___ the same high school.", answer:"attended", options: ["attended", "have attended the same schools", "were attending when they first met", "ended up at different schools"], afterflavour: "Attended = past simple. Have attended = present perfect, would make the connection current. Were attending when they first met = progressive, would mean they met there, which is unclear. None of them knowing: past simple, one closed period." },
        { qid:"hip-irr02", context: "Jay-Z ___ his older brother Eric in the shoulder — an accident in an argument about a stolen firearm.", text:"Jay-Z ___ his older brother Eric when he was twelve years old.", answer:"shot", options: ["shot", "has shot his brother", "was shooting when the police arrived", "injured his brother seriously"], afterflavour: "Shot = past simple, one act. Has shot = present perfect, wrong tense for a named past event. Was shooting when police arrived = progressive implies interruption. One act, named year: past simple." },
        { qid:"hip-irr03", context:"Boston. January 1919. A disaster nobody expected.", text:"The molasses wave ___ at 56 kilometres per hour and killed 21 people.", answer:"moved", options:["moved","moves","has moved","was moving"], afterflavour:"Regular past. -ed." },
        { qid:"afr-irr01", context: "He ___ so much gold along the route that the price of gold in Egypt did not recover for a decade.", text:"He ___ so much gold along the route that the Egyptian economy took a decade to recover.", answer:"distributed", options: ["distributed", "has distributed wealth across history", "was distributing it as he walked", "spent carefully"], afterflavour: "Distributed = past simple, the act of giving. Was distributing as he walked = progressive, would mean it was background. Spent carefully = the opposite of what happened. 1324 is closed: past simple." },
        { qid:"afr-irr02", context: "Ethiopian forces ___ the Italian army — the only African nation to defeat a European colonial power in the field.", text:"Ethiopian forces ___ the Italian army at the Battle of Adwa.", answer:"defeated", options: ["defeated", "have defeated colonisers since", "were defeating them when reinforcements arrived", "repelled the first wave"], afterflavour: "Defeated = past simple, this battle. Have defeated colonisers since = present perfect, makes it ongoing. Were defeating when reinforcements arrived = progressive implies it was interrupted or incomplete. One battle, one result: past simple." },
        { qid:"sam-irr01", context: "The entire Portuguese royal family ___ to Brazil and ruled the empire from Rio de Janeiro for twelve years.", text:"The entire Portuguese royal family ___ to Brazil and ruled the empire from Rio for 12 years.", answer:"fled", options: ["fled", "has fled to safety many times", "was fleeing when the ship left Lisbon", "escaped before the invasion"], afterflavour: "Fled = past simple, one decision, one night. Was fleeing when the ship left = progressive implies they were still in motion when something happened. Escaped = past simple too, but loses the twelve-year consequence. Flee - fled: irregular." },
        { qid:"sam-irr02", context: "Brazil ___ slavery in 1888 — the last country in the Western world to do so.", text:"Brazil ___ slavery in 1888 — decades after every other country in the Americas.", answer:"abolished", options: ["abolished", "has abolished slavery from its history", "was abolishing it when the emperor signed", "ended it voluntarily"], afterflavour: "Abolished = past simple, one act. Has abolished = present perfect, would mean the consequence is the focus. Was abolishing = progressive, implies incompletion. Ended it voluntarily = the emperor was overthrown three months later. One date: past simple." }
      ]
    },
    {
      id: "ps-negative",
      name: "Didn't / wasn't",
      label: "Making past simple negative",
      rule: `<strong>Past simple negative</strong>: didn't + base verb / wasn't-weren't + noun or adjective.<span class="rt-eg">She didn't go. He wasn't there. They didn't know.</span>`,
      questions: [
        
        
        
        
        { qid:"hist-neg01", context: "The Australian army ___ win — the emus dispersed, reformed, and continued. The major called a retreat.", text:"The Australian army ___ win. The emus did.", answer:"didn't", options: ["didn't", "hasn't won against nature", "wasn't winning when they retreated", "couldn't have won"], afterflavour: "Didn't = simple past negative. Hasn't won = present perfect, would mean they've never won anything. Wasn't winning = progressive, implies partial progress. Couldn't have won = counterfactual. One operation, one outcome: didn't." },
        { qid:"hip-neg01", context: "The label ___ believe in them — so they funded the recording themselves and sold copies from car boots.", text:"The label ___ believe in them. They pressed it themselves for $300.", answer:"didn't", options: ["didn't", "hasn't believed in independent artists", "wasn't believing them at the time", "refused to listen"], afterflavour: "Didn't = past simple negative. Hasn't believed = present perfect, wrong tense. Wasn't believing = progressive, implies temporary state. Refused to listen = accurate but changes the grammar point. Didn't + base verb." },
        { qid:"hist-neg02", context: "The cyanide ___ kill him. Neither did the first bullet. The river finished it.", text:"The cyanide ___ kill him. Neither did the first bullet.", answer:"didn't", options: ["didn't", "hasn't killed many people", "wasn't killing him fast enough", "failed to work"], afterflavour: "Didn't = past simple negative. Wasn't killing him fast enough = progressive, implies it was happening slowly. Failed to work = accurate but third person. Didn't + base verb: the poison failed." }
      ]
    },
    {
      id: "ps-questions",
      name: "Did / Was / Were",
      label: "Forming past questions",
      rule: `<strong>Past simple questions</strong>: Did + subject + base verb? / Was-Were + subject?<span class="rt-eg">Did she call? · Was he there? · Were they ready?</span>`,
      questions: [
        
        
        
        
        { qid:"hist-q01", context: "Merck. 1910. Their catalogue.", text: "A German pharmaceutical company catalogued and sold mummified remains as medicine in 1910. ___ their clients know what they were buying?", answer: "sold", options: ["sold", "was selling", "has sold", "had sold"], afterflavour: "Sold = past simple. One product line, one period. 1910 is closed." },
        { qid:"hip-q01", context: "Def Jam Records. 1993. DMX.", text: "___ his jaw actually wired shut when he walked into the audition?", answer: "Was", options: ["Was", "Had", "Did", "Were"], afterflavour: "Was = past simple of 'be', third person singular. His jaw was a state — wired shut. Did needs a base verb after it. Had needs a past participle. Were is plural. Was wired shut: passive past state, singular." }
      ]
    },
    {
      id: "ps-was-were",
      name: "Was / were",
      label: "Past of 'to be'",
      rule: `<strong>Was</strong>: I / he / she / it. <strong>Were</strong>: you / we / they.<span class="rt-eg">She was exhausted. They were all waiting.</span>`,
      questions: [
        { qid:"ps21", context: "Many people ___ in Britain legally for fifty years before receiving a letter questioning their right to be here.", text: "She ___ through the arrivals hall looking like someone who had survived something.", answer: "lived", options: ["had lived", "lived", "were living", "have lived"], afterflavour: "Had lived = past perfect, the earlier action before the letter. Lived = past simple, correct but loses the sequence. Had lived + before + past simple: they lived there BEFORE the letter arrived. The sequence is the scandal." },
        { qid:"ps22", context: "Half a million people ___ to Buddhism with Ambedkar at Nagpur — the largest mass religious conversion in history.", text: "Nobody ___ for almost a minute.", answer: "converted", options: ["converted", "were converting throughout the day", "have converted since", "had converted before the ceremony"], afterflavour: "Converted = past simple, one day, one act. Were converting throughout the day = progressive, splits the event. Have converted since = present perfect, ongoing. One date, one decision: past simple." },
        { qid:"ps23", context: "The press conference. The question. The non-answer.", text: "You ___ wrong about that one and you know it.", answer: "were completely wrong", options: ["were completely wrong", "have been completely wrong", "are completely wrong", "had been completely wrong"], afterflavour: "Were wrong = past state, closed — the press conference is over. Are completely wrong = still true now, present simple. Have been = present perfect, pattern of error. Were: one moment, done." },
        { qid:"hist-wb01", context: "Her scarf ___ into the rear wheel as the car pulled away — she died instantly.", text: "Her scarf ___ into the rear wheel and she died instantly.", answer: "caught", options: ["caught", "was caught", "wrapped around the axle", "had been tangled before"], afterflavour: "Caught = active past simple, the scarf is the subject. Was caught = passive. Wrapped around the axle = more mechanical detail, but caught is the documented verb. The scarf caught: active." },
        { qid:"hist-wb02", context: "December 1916. Three men. Cyanide, two bullets, a frozen river.", text: "Rasputin ___ poisoned, shot, and thrown into the Neva — and survived two of the three.", answer: "was poisoned, shot, and thrown", options: ["was poisoned, shot, and thrown", "poisoned, shot, and threw", "has been poisoned", "had been poisoned"], afterflavour: "Passive. He received all three actions. Was = past simple passive." },
        { qid:"hip-wb01", context: "Midnight Marauders and Enter the Wu-Tang ___ on the same Tuesday — neither label knew what the other was doing.", text: "A Tribe Called Quest's Midnight Marauders and Wu-Tang Clan's Enter the Wu-Tang ___ on the same Tuesday.", answer: "were released", options: ["were released", "released themselves", "had been released earlier", "are still being released"], afterflavour: "Were released = past simple passive. Released themselves = active without agent, awkward. Had been released earlier = past perfect, wrong timing. Are still being released = present progressive. 1991 is closed: past simple passive." }
      ]
    },
    {
      id: "ps-history",
      name: "History happened",
      label: "Real events, real past",
      rule: `Past simple for completed events. Specific time reference or clear context tells you it's over.<span class="rt-eg">Columbus arrived in 1492. The war ended. She left.</span>`,
      questions: [
        { qid:"hist-ps14", context:"1952. Israel had just become a country. They needed a president.", text:"They ___ Albert Einstein the presidency. He turned it down.", answer:"offered", options:["offered","offer","have offered","were offering"], afterflavour:"He said he lacked the aptitude for people." },
        { qid:"hist-ps18", context:"December 1916. St Petersburg. Three men. A determined effort.", text:"Rasputin's killers ___ him with cyanide, shot him twice, and threw him in a river.", answer:"poisoned", options:["poisoned","poison","have poisoned","were poisoning"], afterflavour:"He survived the poison and the first shot." },
        { qid:"hist-ps20", context:"1952. The offer was serious.", text:"They ___ Albert Einstein the presidency of Israel. He ___ it down.", answer:"offered", options:["offered","offer","have offered","were offering"], afterflavour:"Offered / turned. Both regular past." },
        { qid:"hip-ps02", context:"OutKast. Atlanta. 1992. An open mic night.", text:"OutKast ___ their record deal by rapping over a Tribe Called Quest beat.", answer:"got", options:["got","get","have got","were getting"], afterflavour:"Get - got - gotten. Irregular." },
        { qid:"hip-ps03", context:"Eminem. Detroit. 2002. One take.", text:"Eminem ___ all the verses of Lose Yourself in a single recording session.", answer:"wrote", options:["wrote","write","has written","was writing"], afterflavour:"Write - wrote - written." },
        { qid:"hip-ps04", context:"Chuck D. Public Enemy. Long Island. 1982.", text:"Chuck D ___ Busta Rhymes his rap name after watching him perform.", answer:"gave", options:["gave","give","has given","was giving"], afterflavour:"Give - gave - given." },
        { qid:"hist-ps-corpse01", context:"Medieval Europe. An error that lasted seven centuries.", text:"A single mistranslation ___ the practice of eating mummified remains.", answer:"started", options:["started","starts","has started","was starting"], afterflavour:"Regular past. One word. Seven hundred years." },
        { qid:"hist-ps-corpse02", context:"Rome. Public executions. A belief about epilepsy.", text:"Romans ___ at executions to drink the blood of dying gladiators.", answer:"gathered", options:["gathered","gather","have gathered","were gathering"], afterflavour:"They believed it cured epilepsy. Regular past." },
        { qid:"mus-ps01", context:"New Orleans. 1817. A city ordinance. The only place in the South.", text:"Enslaved people ___ in Congo Square every Sunday to play music and dance.", answer:"gathered", options:["gathered","gather","have gathered","were gathering"], afterflavour:"The only legal gathering place for enslaved people in the antebellum South." },
        { qid:"mus-ps02", context:"New Orleans. 1893. The Civil War was over. The city renamed it anyway.", text:"The city ___ Congo Square after Confederate General Beauregard.", answer:"renamed", options:["renamed","rename","has renamed","was renaming"], afterflavour:"It was renamed back Congo Square in 2011. Regular past." },
        { qid:"mus-ps03", context:"Korea. 1953. End of the Korean War. 325,000 US soldiers.", text:"Korean musicians ___ covers of American R&B and rock for soldiers on military bases.", answer:"performed", options:["performed","perform","have performed","were performing"], afterflavour:"Soul reached Korean mainstream charts by the late 1960s. Regular past." },
        { qid:"mus-ps04", context:"Sister Rosetta Tharpe. 1945. An electric guitar. Distortion. A church that became a stadium.", text:"She ___ electric guitar with distortion before rock and roll had a name.", answer:"played", options:["played","plays","has played","was playing"], afterflavour:"Chuck Berry watched her. Little Richard watched her. Johnny Cash watched her. Regular past." }
      ]
    }
  ],
  bossQuestions: [
    { qid:"ps-gap01", context:"The bag was open on the table. She didn't notice until she got home.", text:"Someone ___ her wallet.", answer:"took", type:"gap", afterflavour:"Take - took. Irregular." },
    { qid:"ps-gap02", context: "The inquiry. Three years. One document.", text:"She ___ everything she had been holding back.", answer: "said", type:"gap", afterflavour: "Say → said. Irregular. One statement, one moment, on the record." },
    { qid:"ps-gap03", context: "Fred Hampton. Chicago. 4 December 1969.", text:"He ___ to the kitchen and made coffee without turning the light on.", answer: "went", type:"gap", afterflavour: "Go → went. Irregular. The earlier action. He didn't know." },
    { qid:"ps-gap04", context: "Funmilayo Ransome-Kuti. Lagos. 1977.", text:"It ___ and nobody moved.", answer: "fell", type:"gap", afterflavour: "Fall → fell. Irregular. One act. Named person. Documented." },
    { qid:"ps-gap05", context:"She stayed home. All day, phone off, curtains closed.", text:"She ___ go in on Friday.", answer:"did not", altAnswers:["didn't"], type:"gap", afterflavour:"Didn't / did not + base verb." },
    { qid:"ps-gap06", context:"The flight landed two hours late. By the time she cleared customs it was midnight.", text: "The flight landed two hours late. By the time she cleared customs it was midnight. She ___ the whole way home.", answer: "slept", type:"gap", afterflavour:"Sleep → slept. Irregular past simple. One completed journey." },
    { qid:"ps-gap08", context:"The whole team was in the room. Nobody said a word.", text: "The whole team was in the room. Nobody said a word. They ___ at each other for almost a minute.", answer: "stared", type:"gap", afterflavour:"Stare → stared. Regular past simple. A full minute of silence with no irregular form to trip over." }
  ]
},

// ─────────────────────────────────────────────────────────────
// PRESENT SIMPLE
// ─────────────────────────────────────────────────────────────
{
  id: "present-simple",
  name: "Always True",
  subtitle: "Present Simple",
  colour: "#10b981",
  tier: "foundation",
  rounds: [
    {
      id: "prs-facts",
      name: "Facts and laws",
      label: "Things that are always true",
      rule: `<strong>Present simple</strong> for permanent facts, scientific laws, and things that are always true.<span class="rt-eg">The sun rises in the east. Water boils at 100C. Sharks don't sleep.</span>`,
      questions: [
        { qid:"prs05", context:"It's a physical law. Not a preference.", text:"Metal ___ when it gets cold.", answer:"contracts", options:["contracts","is contracting","contracted","has contracted"], afterflavour:"Scientific fact. Simple." },
        { qid:"bio-ps01", context: "Your brain ___ itself during sleep — it uses cerebrospinal fluid to clear metabolic waste.", text:"Your brain ___ itself while you sleep.", answer:"washes", options: ["washes", "is currently washing", "washed itself last night", "gets washed by"], afterflavour: "Washes = permanent nightly fact. Is currently washing = right now, would need you to be asleep. Gets washed by = passive, removes the brain as subject. This is what it does, every night." },
        { qid:"bio-ps03", context: "Your intestines ___ constantly — the sensation is filtered before it reaches consciousness.", text:"Your intestines ___ constantly, even when you feel nothing.", answer:"move", options: ["move", "are moving right now", "moved only when you eat", "have moved recently"], afterflavour: "Move = permanent, always true. Are moving right now = progressive, implies it's exceptional. The suppression is always happening: present simple." },
        { qid:"bio-ps04", context: "A mite called Demodex ___ in the follicles of your eyelashes — it has been there since adolescence.", text:"A microscopic mite ___ in the follicles of your eyelashes.", answer:"lives", options: ["lives", "is living there temporarily", "lived there until recently", "has recently moved in"], afterflavour: "Lives = permanent. Is living temporarily = progressive, implies it moves on. Since adolescence: permanent residence." },
        { qid:"bio-ps06", context:"The cornea has no blood vessels.", text:"Your cornea ___ oxygen directly from the air.", answer:"gets", options:["gets","is getting","has got","got"], afterflavour:"The only part of your body that works this way." },
        { qid:"bio-ps08", context:"Every ten years or so. Without surgery.", text:"The liver ___ itself from as little as 25% of its original mass.", answer:"rebuilds", options:["rebuilds","is rebuilding","has rebuilt","rebuilt"], afterflavour:"Every other organ just gives up. Third-person -s." },
        { qid:"bio-ps15", context: "A neurosurgeon drills into a skull. The patient is awake and talking throughout.", text: "The brain ___ no pain receptors — the organ that processes pain cannot feel it.", answer: "contains", options: ["contains", "has", "processes", "produces"], afterflavour: "Contains = most precise. Has = correct but vague. The fact is about specific anatomy." },
        { qid:"clim-ps01", context: "A neurosurgeon drills into a skull. The patient is awake and talking throughout.", text: "The brain ___ no pain receptors — the organ that processes pain cannot feel it.", answer: "contains", options: ["contains", "has", "processes", "produces"], afterflavour:"Third person singular -s. A permanent fact." },
        { qid:"clim-ps02", context:"2024. The warmest year ever recorded.", text: "The last decade ___ the warmest on record since measurements began in 1850.", answer: "is", options: ["is", "remains", "represents", "stands as"], afterflavour:"Is = present simple, still true now. Remains = also present simple but implies it might change — the decade is already recorded. Represents = too abstract. Stands as = formal, odd. Is: the simplest permanent claim." },
        { qid:"space-ps01", context:"The night sky. Every star you can see.", text:"When you look at a star, you ___ the past — the light left years or centuries ago.", answer:"see", options:["see","are seeing","saw","have seen"], afterflavour:"The star you are looking at may not exist anymore. Present simple. Permanently strange." },
        { qid:"space-ps02", context: "The night sky looks sparse. The distances deceive.", text: "More stars ___ in the observable universe than grains of sand on every beach on Earth combined.", answer: "exist", options: ["exist", "are", "remain", "appear"], afterflavour: "Exist = present simple, permanent fact. Are would work but exist is more precise — they are present, not just copula." },
        { qid:"space-ps03", context: "Black holes appear in every science documentary pulling ships and light toward them.", text: "A black hole ___ nothing beyond its event horizon — gravity works the same at a distance.", answer: "does not pull", options: ["does not pull", "doesn't suck", "cannot attract", "will not absorb"], afterflavour: "Does not pull = cleaner claim. The misconception is about active vacuum-like suction. Gravity is pull, but passive at distance." }
      ]
    },
    {
      id: "prs-habits",
      name: "Habits and routines",
      label: "What people always do",
      rule: `<strong>Present simple</strong> for habits, routines, and things people regularly do.<span class="rt-eg">She drinks coffee every morning. He plays cards on Tuesdays.</span>`,
      questions: [
        
        
        
        
        { qid:"prs15", context: "He ___ gives a direct answer to that question — four attempts, four detours.", text:"He ___ gives a straight answer.", answer: "never", options: ["never", "always", "sometimes", "occasionally"], afterflavour: "Never = zero occasions. Four press conferences, four detours: the evidence supports never. Always and sometimes would require at least one direct answer. The press record is the evidence." },
        { qid:"prs16", context: "She ___ shows up — twenty-seven years of the Green Belt Movement, through everything.", text:"She ___ shows up.", answer: "always", options: ["always", "never", "occasionally", "rarely"], afterflavour: "Always = every time, without exception. Twenty-seven years through arrests and threats: always. Occasionally or rarely would contradict the record." }
      ]
    },
    {
      id: "prs-negatives",
      name: "Don't / doesn't",
      label: "Making present simple negative",
      rule: `<strong>Don't</strong> (I/you/we/they) and <strong>doesn't</strong> (he/she/it) for present simple negatives.<span class="rt-eg">They don't eat meat. She doesn't drink coffee.</span>`,
      questions: [
        { qid:"prs04", context: "She ___ eat meat of any kind — not even when there is no other option.", text:"She ___ eat fish of any kind.", answer: "doesn't", options: ["doesn't", "didn't when she was younger", "isn't eating it this week", "used to but stopped"], afterflavour: "Doesn't = present simple, permanent fact. Didn't when younger = past, implies she does now. Isn't eating it this week = temporary. Seventy years: permanent." },
        { qid:"bio-neg01", context: "Unlike every other tissue, the cornea ___ have a blood supply — it gets oxygen directly from air.", text:"Unlike most tissue, the cornea ___ have a blood supply.", answer:"doesn't", options: ["doesn't", "didn't have one originally", "isn't having trouble with", "can't develop"], afterflavour: "Doesn't = permanent biological fact. Didn't have one originally = past, wrong. Isn't having trouble = progressive, implies temporary absence. This is permanent anatomy." },
        { qid:"ani-neg01", context: "A shark ___ have a swim bladder — if it stops moving, it sinks.", text:"A shark ___ have a swim bladder - it must keep moving or it sinks.", answer:"doesn't", options: ["doesn't", "didn't need one before", "isn't using one currently", "can't grow one"], afterflavour: "Doesn't = permanent. Isn't using one currently = implies it has one it's not using. Permanent biological absence: present simple." }
      ]
    },
    {
      id: "prs-questions",
      name: "Do / Does",
      label: "Forming present simple questions",
      rule: `<strong>Do</strong> (I/you/we/they) and <strong>Does</strong> (he/she/it) for present simple questions. Base verb follows.<span class="rt-eg">Do they eat meat? - Does she know?</span>`,
      questions: [
        
        
        
        
        { qid:"bio-q01", context: "A neurosurgeon drills into a skull. The patient is awake.", text: "___ the brain register any of what is happening to it?", answer: "feels", options: ["feels", "registers", "processes", "can feel"], afterflavour: "Feels = present simple. Permanent absence. The brain has no pain receptors for its own tissue." },
        { qid:"ani-q01", context: "The myth: elephants never forget. The reality: more specific.", text: "___ elephants actually have superior long-term spatial memory, or is that oversimplified?", answer: "remembers", options: ["remembers", "can remember", "memorises", "recalls"], afterflavour: "Remembers = present simple. Permanent capacity. Third person singular -s. The myth is an oversimplification of a real ability." }
      ]
    },
    {
      id: "prs-disturbing",
      name: "Things that are true",
      label: "Facts you can't unlearn",
      rule: `Present simple for permanent states and universal truths. These facts don't change.<span class="rt-eg">Sugar is more dangerous than gunpowder. Your immune system can attack your own eyes.</span>`,
      questions: [
        { qid:"bio-ps05", context:"Not just your tongue. Everywhere.", text: "Your stomach, lungs, and brain all ___ taste receptors.", answer: "contain", options: ["contain", "have", "produce", "need"], afterflavour:"Your gut literally tastes what you eat." },
        { qid:"bio-ps12", context:"The same consistency as a banana.", text: "Your spinal cord ___ softer than most people imagine — roughly the consistency of a banana.", answer: "is", options: ["is", "feels", "seems", "gets"], afterflavour:"Is = present simple, permanent anatomical fact. Feels = subjective impression. Seems = appearance. The spinal cord does not merely feel soft — it is soft. Banana-soft. That is the anatomy." },
        { qid:"creep-ps01", context: "An unruptured brain aneurysm ___ in approximately 2% of the population at any moment.", text:"An unruptured brain aneurysm ___ in about 2% of the population at any moment.", answer:"exists", options: ["exists", "is currently developing", "existed in higher numbers before", "has always existed"], afterflavour: "Exists = present simple, permanent state. Is currently developing = implies it grows (aneurysms can, but exists describes the state). 2% is a stable population figure: present simple." },
        { qid:"creep-ps02", context: "The rabies virus ___ in the nervous system for months before symptoms appear — by the time you feel sick, it is too late.", text:"The rabies virus ___ in your nervous system for months before activating.", answer:"hides", options: ["hides", "is hiding in your body right now", "hid before becoming active", "has been hiding recently"], afterflavour: "Hides = permanent behaviour of the virus. Is hiding right now = progressive, would mean it's exceptional. This is what it always does: present simple." },
        { qid:"creep-ps07", context:"Your phone. Right now. In your hand.", text:"A mobile phone ___ ten times more bacteria than a toilet seat.", answer:"carries", options:["carries","carry","is carrying","carried"], afterflavour:"Third person singular -s. You're holding it now." },
        { qid:"ani-ps01", context: "Sand tiger shark embryos ___ each other in the womb until one survives — the winner earns the right to be born.", text:"Sand tiger shark embryos ___ each other in the womb until one survives.", answer:"eat", options: ["eat", "are eating each other right now", "ate at an earlier developmental stage", "have eaten"], afterflavour: "Eat = permanent biological behaviour. Are eating right now = specific act. This is what sand tiger shark embryos always do: present simple." },
        { qid:"ani-ps02", context: "Woodpeckers ___ into the heads of baby birds and eat their brains — it is a documented foraging behaviour.", text:"Woodpeckers ___ into the heads of baby birds and eat their brains.", answer:"drill", options: ["drill", "are drilling as a temporary strategy", "drilled before other food was available", "have drilled"], afterflavour: "Drill = permanent behaviour. Are drilling as temporary strategy = implies it's context-dependent. It isn't. Present simple." },
        { qid:"ani-ps03", context: "A saltwater crocodile ___ at up to 17 kilometres per hour on land — faster than most people can run.", text: "A saltwater crocodile ___ at up to 17 kilometres per hour on land.", answer: "can gallop", options: ["can gallop", "is galloping in pursuit", "galloped once to catch prey", "has galloped"], afterflavour: "Can gallop = permanent ability. Is galloping = right now, specific. Has galloped = past. The ability exists whether it's being used: can + present simple." },
        { qid:"ani-ps04", context: "A sea cucumber ___ its internal organs out of its body when threatened — a defence mechanism, not a malfunction.", text: "A saltwater crocodile ___ at up to 17 kilometres per hour on land.", answer: "shoots", options: ["shoots", "is shooting them right now", "shot them once in this footage", "has recently shot"], afterflavour: "Shoots = permanent defence behaviour. Is shooting right now = specific act. This is what sea cucumbers always do: present simple." },
        { qid:"creep-ps11", context:"Ants. Parasitic fungus. Ophiocordyceps.", text:"A parasitic fungus ___ an ant's brain and forces it to climb before killing it.", answer:"controls", options:["controls","control","is controlling","controlled"], afterflavour:"The ant does not decide to climb. The fungus does. Third person -s." },
        { qid:"afr-ps01", context:"Timbuktu. Medieval Mali. Still there.", text:"Hundreds of thousands of medieval manuscripts ___ in family libraries across Timbuktu.", answer:"survive", options:["survive","survives","are surviving","survived"], afterflavour:"Plural subject. Present simple. Still there." },
        { qid:"afr-ps02", context:"Africa. A continent most people think they know.", text:"Africa ___ more spoken languages than any other continent — over a third of the world's total.", answer:"contains", options:["contains","contain","is containing","contained"], afterflavour:"Singular subject. Third person -s." },
        { qid:"sam-ps01", context:"The Amazon. The scale is hard to imagine.", text:"The Amazon River ___ more water than the next seven largest rivers in the world combined.", answer:"carries", options:["carries","carry","is carrying","carried"], afterflavour:"Third person singular -s. Stative measurement." },
        { qid:"sam-ps02", context:"Bolivia. The Salar de Uyuni. The future of electric vehicles.", text:"Bolivia ___ more lithium than any other country on earth.", answer:"contains", options:["contains","contain","is containing","contained"], afterflavour:"Third person -s. Present simple fact." },
        { qid:"sam-ps03", context:"Quechua. The language of the Inca Empire.", text: "Quechua ___ still spoken by approximately 8 million people across six South American countries.", answer: "is still spoken", options: ["is still spoken", "has been spoken", "was spoken", "speaks"], afterflavour:"Passive present simple. Is spoken." },
        { qid:"clim-ps03", context:"Deforestation. One statistic to understand the scale.", text:"Cutting down forests ___ approximately 20% of all greenhouse gas emissions — more than all passenger vehicles combined.", answer:"produces", options:["produces","produce","is producing","produced"], afterflavour:"Third person singular -s. Present simple fact." },
        { qid:"space-ps04", context:"Venus. Time moves differently there.", text:"A day on Venus ___ longer than a year on Venus.", answer:"lasts", options:["lasts","last","is lasting","lasted"], afterflavour:"One day on Venus is longer than one year on Venus. The grammar point is third-person -s. The fact is worse." },
        { qid:"space-ps05", context: "Saturn. A planet you could theoretically float.", text: "Saturn ___ the only planet in our solar system less dense than water.", answer: "remains", options: ["remains", "is", "stays", "appears"], afterflavour: "Remains = present simple, ongoing fact. Is works but remains captures permanence more precisely." },
        { qid:"space-ps06", context: "Saturn. A planet you could theoretically float.", text: "Saturn ___ the only planet in our solar system less dense than water.", answer: "remains", options: ["remains", "is", "stays", "appears"], afterflavour: "Remains = present simple, ongoing fact. Is works but remains captures permanence more precisely." },
        { qid:"mus-prs01", context:"K-pop. What it actually is.", text: "K-pop ___ a mixture of modern Western sounds and African-American influences including hip-hop, R&B, jazz, soul, and funk.", answer: "combines", options: ["combines", "is", "includes", "mixes"], afterflavour:"This is the official industry characterisation. Present simple." },
        { qid:"mus-prs02", context:"Jazz. Where it comes from.", text:"Jazz ___ from the meeting of African rhythmic traditions and European harmonic structures in New Orleans.", answer:"comes", options:["comes","come","is coming","came"], afterflavour:"Third person singular -s. Present simple fact." },
        { qid:"mus-prs03", context:"The blues. Everything that follows.", text:"The blues ___ the foundation of jazz, rock and roll, R&B, soul, hip hop, and most popular music of the 20th century.", answer:"forms", options:["forms","form","is forming","formed"], afterflavour:"Third person singular -s. One root. Everything downstream." }
      ]
    },
    {
      id: "prs-adverbs",
      name: "Frequency adverbs",
      label: "How often?",
      rule: `Frequency adverbs go before the main verb but after 'be': <em>always, usually, often, sometimes, rarely, never.</em><span class="rt-eg">She always arrives early. He is never late.</span>`,
      questions: [
        
        
        { qid:"prs20", context:"The regular person is off sick. Just this week.", text:"He ___ the late shift until Friday.", answer:"is covering", options:["is covering","covers","has covered","covered"], afterflavour:"Temporary. Progressive." }
        
      ]
    }
  ],
  bossQuestions: [
    { qid:"prs-gap01", context:"She won't touch it. The whole table knows.", text:"She ___ fish of any kind.", answer:"does not eat", altAnswers:["doesn't eat"], type:"gap", afterflavour:"Does not / doesn't eat. Verb locked." },
    { qid:"prs-gap02", context:"He finds it affects his focus. He's been strict about this for years.", text:"He ___ his phone after nine in the evening.", answer:"doesn't check", type:"gap", afterflavour:"Third person singular negative. Doesn't + base verb." },
    { qid:"prs-gap04", context:"Not once in four years. They've tried asking. They've stopped asking.", text:"He ___ gives a straight answer.", answer:"never", type:"gap", afterflavour:"Never before the verb. Frequency adverb position." },
    { qid:"prs-gap05", context:"It's a physical property. Temperature doesn't negotiate.", text:"Metal ___ when it gets cold.", answer:"contracts", type:"gap", afterflavour:"Scientific fact. Third-person -s." },
    { qid:"prs-gap07", context:"They tried it once. They agreed it was not for them.", text:"They ___ eat meat.", answer:"do not", altAnswers:["don't"], type:"gap", afterflavour:"Plural negative. Do not + base verb." },
    { qid:"prs-gap-ani01", context:"Tarantulas. Surprisingly domestic.", text:"Some tarantulas ___ tiny frogs as pest control — the frogs eat insects that could harm the spider's eggs.", answer:"keep", type:"gap", afterflavour:"Plural subject. Present simple. No -s." }
  ]
}
);
