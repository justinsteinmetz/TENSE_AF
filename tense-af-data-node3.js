// ═══════════════════════════════════════════════════════════════
// TENSE AF — NODE 3 PACK
// Past Simple vs Present Perfect — with time markers visible BEFORE commit
// so the learner can choose grammatically. Reveals become flavour, not answer.
//
// Structure: each item is a { context, text, qid, answer, options } question.
// Plus an optional `afterflavour` for the reveal-layer colour commentary.
// ═══════════════════════════════════════════════════════════════

PACKS.push({
  id: "node-3",
  name: "State Resolution",
  subtitle: "Finished or Open",
  colour: "#f5c518",
  tier: "advanced",
  rounds: [
    {
      id: "n3-breath",
      name: "Breath",
      label: "Personal, clean ambiguity",
      rule: `<strong>Past Simple</strong> closes the moment in finished time.<br><strong>Present Perfect</strong> opens it into now.<span class="rt-eg">I saw it last night. · I have seen it three times.</span>`,
      questions: [
        {
          qid: "n3-001",
          context: "Last night, once through, that was enough.",
          text: "I ___ that film. Don't ask me to explain it.",
          answer: "saw",
          options: ["saw", "have seen"],
          afterflavour: "Finished time. Once is once."
        },
        {
          qid: "n3-003",
          context: "Over the years we've kept going back.",
          text: "We ___ that restaurant enough times to know what we are actually paying for.",
          answer: "have visited",
          options: ["have visited", "visited", "visit", "had visited"],
          afterflavour: "Have visited = present perfect, accumulated experience. Enough times = unspecified count with present relevance."
        },
        {
          qid: "n3-013",
          context: "Once at a wedding in 2004. Never again.",
          text: "We ___ that restaurant once. That was enough.",
          answer: "visited",
          options: ["visited", "have visited", "visit", "had visited"],
          afterflavour: "Visited = past simple. Closed time. 2004 is gone. Finished. Which is its own mercy."
        },
      ]
    },
    {
      id: "n3-hybrid",
      name: "Hybrid",
      label: "Personal with an edge",
      rule: `<strong>Past Simple</strong> anchors a specific moment.<br><strong>Present Perfect</strong> carries that moment forward into the now.<span class="rt-eg">I had it last week. · I have had it more times than I can count.</span>`,
      questions: [
        {
          qid: "n3-002",
          context: "She travels the way only some passports allow. Three times now.",
          text: "She ___ to Lagos on her own passport.",
          answer: "has been",
          options: ["went", "has been"],
          afterflavour: "Three visits. Each one a different argument."
        },
        {
          qid: "n3-004",
          context: "Last week. With my father. Neither of us said the important part.",
          text: "I ___ that conversation. I'm not explaining it again.",
          answer: "have already had",
          options: ["have already had", "had", "have had", "already had"],
          afterflavour: "Have already had = present perfect. The conversation happened and its completion is the present situation."
        },
        {
          qid: "n3-014",
          context: "More than once. I'm still working on it.",
          text: "I ___ that mistake. I'm not pretending I didn't.",
          answer: "have made",
          options: ["have made", "made", "make", "had made"],
          afterflavour: "Have made = present perfect. Completed action with present relevance — accountability now."
        },
      ]
    },
    {
      id: "n3-structural",
      name: "Structural",
      label: "Named agents, specific claims",
      rule: `When the time frame is closed — a named era, dates, a specific event — <strong>Past Simple</strong>.<br>When it's been happening since then, or keeps happening now — <strong>Present Perfect</strong>.`,
      questions: [
        {
          qid: "n3-005",
          context: "Between 2012 and 2018. They called the paperwork an error.",
          text: "The Home Office ___ Commonwealth citizens as illegal.",
          answer: "classified",
          options: ["classified", "has classified"],
          afterflavour: "Apology is now part of the architecture."
        },
        {
          qid: "n3-006",
          context: "The company ___ the water table for six decades and called it an acceptable operational cost.",
          text: "Shell ___ the Niger Delta.",
          answer: "poisoned",
          options: ["poisoned", "has poisoned"],
          afterflavour: "Poisoned = past simple. Sixty years, closed. Then they sold. Has poisoned = present perfect, would mean it's still happening — the wells were sold. But the consequences are still present. The grammar choice determines whether this is history or ongoing reality. The answer depends on how you read 'then they sold the wells'."
        },
        {
          qid: "n3-007",
          context: "In 1985, in one essay.",
          text: "Baldwin ___ the price of the ticket.",
          answer: "named",
          options: ["named", "has named"],
          afterflavour: "Whiteness is a lie built on labour stolen from Black people. Every rediscovery announced as new."
        },
        {
          qid: "n3-008",
          context: "Every summer since 2013. The Aegean. The news cycle. The silence.",
          text: "Fortress Europe ___ thousands in the Mediterranean — and it is no longer considered news.",
          answer: "has drowned",
          options: ["has drowned", "drowned", "drowns", "had drowned"],
          afterflavour: "Has drowned = present perfect. Since 2013 = ongoing. The deaths are still accumulating. Drowned = closed past."
        },
        {
          qid: "n3-010",
          context: "One week in 1968. One interview. It defined everything after.",
          text: "Baldwin ___ the terms of the argument in that interview and nobody has improved on them.",
          answer: "defined",
          options: ["defined", "has defined", "defines", "had defined"],
          afterflavour: "Defined = past simple. 1968 is closed. One interview, one moment. The work it did is present perfect territory — but the act itself was then."
        },
        {
          qid: "n3-011",
          context: "Through four administrations. The vans update. The addresses don't.",
          text: "ICE ___ the same neighbourhoods under every administration since 2003.",
          answer: "has raided",
          options: ["has raided", "raided", "raids", "had raided"],
          afterflavour: "Has raided = present perfect. Through four administrations = ongoing. The pattern continues."
        },
        {
          qid: "n3-012",
          context: "Chicago. 2009. One summer. The data is not disputed.",
          text: "More people ___ in Chicago that summer than in the entire Afghan war zone.",
          answer: "died",
          options: ["died", "have died", "die", "had died"],
          afterflavour: "Died = past simple. 2009 is closed. One summer, named. The comparison is not an abstraction."
        },
      ]
    },
    {
      id: "n3-mirror",
      name: "Mirror",
      label: "The writer is in the building too",
      rule: `The same rule applies when the subject is <em>us</em>.<br>Closed time → <strong>Past Simple</strong>. Ongoing condition → <strong>Present Perfect</strong>.`,
      questions: [
        {
          qid: "n3-009",
          context: "Kolwezi. The DRC. A phone in your hand.",
          text: "I ___ this on a device assembled by someone younger than my youngest student.",
          answer: "have typed",
          options: ["have typed", "typed", "type", "had typed"],
          afterflavour: "Have typed = present perfect. The action is complete but the responsibility is present tense."
        },
        {
          qid: "n3-015",
          context: "Every year since the school opened. The fees. The decision. Who benefits.",
          text: "We ___ this decision every year and we are not walking it back.",
          answer: "have made",
          options: ["have made", "made", "make", "had made"],
          afterflavour: "Have made = present perfect. Recurring decision with present ownership. Made = closed past — would mean we stopped."
        },
      ]
    }
  ],
  bossQuestions: []
});
