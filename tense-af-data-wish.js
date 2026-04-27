// ═══════════════════════════════════════════════════════════════
// TENSE AF — DATA: WISH & REGRET
// Advanced. Node 3 standard. No rules displayed.
//
// Theme: the grammar of counterfactuals.
// Wish for the present (past simple), wish for the past (past perfect),
// wish for the future (would), if only, I'd rather.
// The grief, rage, and occasional dark comedy of things not changed.
//
// Rounds:
//   ws-present   — wish + past simple (unreal present)
//   ws-past      — wish + past perfect (regret about the past)
//   ws-future    — wish + would (desire for change, mild threat)
//   ws-ifonly    — if only (higher register wish, same structures)
//   ws-rather    — I'd rather + past simple (preference about others)
//
// pressureClass:
//   high   — tense choice non-obvious, emotional register ambiguous
//   medium — structure clear, distractor plausible
//   low    — form the main task
//
// Voice register: Briahna Joy Gray x Isaiah Martin x Hannah Ferguson
// Czech/Vietnamese/German names. Labour clarity. Structural honesty.
// ═══════════════════════════════════════════════════════════════

PACKS.push({
  id: "wish-regret",
  name: "What Could Have Been",
  subtitle: "Wish & Regret",
  colour: "#8b5cf6",
  tier: "advanced",
  rounds: [
    {
      id: "ws-present",
      name: "Not How It Is",
      label: "Wish + past simple — dissatisfied with now",
      rule: ``,
      questions: [
        {
          qid: "ws-p01",
          pressureClass: "low",
          context: "She wishes she ___ into architecture — the decision was made at eighteen for practical reasons.",
          text: "She wishes she ___ into something that didn't feel like surviving.",
          answer: "had gone",
          options: ["had gone", "went into architecture instead", "has been an architect", "is going into architecture now"],
          afterflavour: "Had gone = wish + past perfect, present regret about past decision. Went into architecture = past simple, just states what happened — no unreal meaning. Has been an architect = present perfect, different meaning. Is going = present progressive, future. Wish + past perfect for past regret."
        },
        {
          qid: "ws-p02",
          pressureClass: "low",
          context: "She wishes she ___ somewhere with more light and space — but rents have only risen.",
          text: "She wishes she ___ into something that didn't feel like surviving.",
          answer: "lived",
          options: ["lived", "had lived here longer", "lives there", "used to live elsewhere"],
          afterflavour: "Lived = wish + past simple, present unreal. Had lived = past perfect, would be regret about a past decision. Lives = present simple, reality. The wish is about the present situation: wish + past simple."
        },
        {
          qid: "ws-p03",
          pressureClass: "medium",
          context: "She wishes she ___ — even the corridor would be better than this.",
          text: "She wishes she ___ somewhere — anywhere — else.",
          answer: "were somewhere else",
          options: ["were somewhere else", "was somewhere else", "is somewhere else", "had been elsewhere"],
          afterflavour: "Were somewhere else = formal subjunctive, wish + past simple. Was = also accepted, informal variant. Is = present reality — she is here. Had been = past perfect, regret about having attended. Were/was: present unreal wish."
        },
        {
          qid: "ws-p04",
          pressureClass: "medium",
          context: "He wishes the company ___ him fairly — after twelve years, he still cannot afford a family home.",
          text: "He wishes his contract ___ him fairly for overtime.",
          answer: "paid",
          options: ["paid", "would pay him fairly", "has paid", "pays fairly sometimes"],
          afterflavour: "Paid = wish + past simple, present unreal. Would pay = wish + would, also correct but emphasises desired change in behaviour. Has paid = present perfect, reality. Pays sometimes = present simple. Both paid and would pay are grammatically correct here — the situation (ongoing unfairness) supports would pay slightly more."
        },
        {
          qid: "ws-p05",
          pressureClass: "high",
          context: "The community wishes the council ___ — three years of formal objections, ignored.",
          text: "They wish the council ___ to their concerns.",
          answer: "listened",
          options: ["listened", "would listen to their concerns", "has listened occasionally", "listens sometimes"],
          afterflavour: "Listened = wish + past simple. Would listen = wish + would, emphasises desire for behaviour change — both correct. Has listened occasionally = present perfect, implies it happens. Listens sometimes = present simple, also contradicts the context. Three years ignored: listened or would listen."
        },
        {
          qid: "ws-p06",
          pressureClass: "high",
          context: "She wishes she ___ the minister directly — she has three specific questions.",
          text: "She wishes she ___ the minister directly — she has three specific questions.",
          answer: "could question",
          options: ["could question", "can question", "would question", "is able to question"],
          afterflavour: "Could question = wish + modal past, ability she doesn't have. Can question = present reality — she can't. Would question = desire, not ability. Is able to question = present, same as can. The wish is about access and ability: could."
        }
      ]
    },
    {
      id: "ws-past",
      name: "What Already Happened",
      label: "Wish + past perfect — regret about the past",
      rule: ``,
      questions: [
        {
          qid: "ws-pa01",
          pressureClass: "low",
          context: "She signed the contract without reading it. She has read it now.",
          text: "She wishes she ___ the contract before signing.",
          answer: "had read",
          options: ["had read", "read", "has read", "would have read"],
          afterflavour: "Past perfect after wish: regret about a completed event."
        },
        {
          qid: "ws-pa02",
          pressureClass: "low",
          context: "He saw the salary range. The deadline had passed two weeks earlier.",
          text: "He wishes he ___ for the position when he had the chance.",
          answer: "had applied",
          options: ["had applied", "applied", "has applied", "would have applied"],
          afterflavour: "Had applied = past perfect after wish — regret about past inaction. Applied = past simple, but wish requires unreal past perfect."
        },
        {
          qid: "ws-pa03",
          pressureClass: "medium",
          context: "Hana is late and wet. The construction zone added forty minutes.",
          text: "She wishes she ___ a different route — this one added forty minutes.",
          answer: "had taken",
          options: ["had taken", "took", "has taken", "would have taken"],
          afterflavour: "Had taken = past perfect after wish — regret about a past choice. Took = past simple, correct form of take but not the wish form."
        },
        {
          qid: "ws-pa04",
          pressureClass: "medium",
          context: "He does not wish he ___ differently — he would do it again, whatever the cost.",
          text: "He does not wish he ___ differently — he would do it again.",
          answer: "had acted",
          options: ["had acted", "acted at all", "has acted", "would have stayed silent"],
          afterflavour: "Had acted = wish + past perfect, negative form (he does NOT wish). Acted at all = past simple, different claim. Has acted = present perfect. Would have stayed silent = conditional result, not wish form. Does not wish he had acted differently = the wish is negated: he has no regret."
        },
        {
          qid: "ws-pa05",
          pressureClass: "high",
          context: "Some cabinet members wish they ___ voted for it when they saw the modelling.",
          text: "Some of them wish they ___ supported the vote.",
          answer: "had not",
          options: ["had not", "had not voted for it", "did not vote", "have not voted"],
          afterflavour: "Had not voted = wish + past perfect negative. Did not vote = past simple negative. Have not voted = present perfect. Had not = bare negative past perfect (correct if 'voted' follows). The wish about a past vote: had not voted."
        },
        {
          qid: "ws-pa06",
          pressureClass: "high",
          context: "The Windrush generation. The Home Office destroyed the evidence. The right to remain became unprovable.",
          text: "Survivors wish the documents ___ preserved.",
          answer: "had been preserved",
          options: ["had been preserved", "were preserved", "have been preserved", "would have been preserved"],
          afterflavour: "Had been preserved = wish + past perfect passive. Regret about a completed past act. Were preserved = wish + past simple, for unreal present — would mean they still exist but aren't being used. They don't exist. Have been preserved = present perfect, would mean they still are. Would have been preserved = conditional result, not wish form."
        }
      ]
    },
    {
      id: "ws-future",
      name: "Change Something",
      label: "Wish + would — desire for future change, or frustration",
      rule: ``,
      questions: [
        {
          qid: "ws-f01",
          pressureClass: "low",
          context: "Every morning. The sink. The dishes. The pattern.",
          text: "She wishes he ___ his dishes before leaving — it has been four years.",
          answer: "would wash",
          options: ["would wash", "washes", "will wash", "washed"],
          afterflavour: "Would wash = wish + would for desired change in someone else's behaviour. Will wash would be a prediction. Washes = present habit. The wish is about future change."
        },
        {
          qid: "ws-f02",
          pressureClass: "low",
          context: "The boiler has been broken for two weeks. Three messages. No response.",
          text: "She wishes the landlord ___ her calls — the flat is 12 degrees.",
          answer: "would return",
          options: ["would return", "returns", "will return", "returned"],
          afterflavour: "Would return = wish + would. Desired action from someone who isn't doing it."
        },
        {
          qid: "ws-f03",
          pressureClass: "medium",
          context: "The consultation has been running for eight months. The findings are sealed.",
          text: "Campaigners wish the government ___ its findings — the public has a right to them.",
          answer: "would release",
          options: ["would release", "releases", "will release", "released"],
          afterflavour: "Would release = wish + would. The government is not releasing them. The wish is about a change in behaviour."
        },
        {
          qid: "ws-f04",
          pressureClass: "high",
          context: "Klára has raised it every month for a year. Management has not responded.",
          text: "She wishes management ___ the safety concerns seriously — the deadline is next week.",
          answer: "would take",
          options: ["would take", "takes", "will take", "took"],
          afterflavour: "Would take = wish + would. Desired behaviour from someone who isn't delivering it."
        },
        {
          qid: "ws-f05",
          pressureClass: "high",
          context: "The strike has been running for six weeks. The company has not moved.",
          text: "Workers wish the company ___ to the table and negotiated in good faith.",
          answer: "would come",
          options: ["would come", "comes", "will come", "came"],
          afterflavour: "Would come = wish + would. The company is not coming. The workers want them to."
        }
      ]
    },
    {
      id: "ws-ifonly",
      name: "If Only",
      label: "Higher register. Same logic.",
      rule: ``,
      questions: [
        {
          qid: "ws-i01",
          pressureClass: "medium",
          context: "She is three months in. It is not what she thought it would be.",
          text: "If only she ___ what the role actually involved before accepting it.",
          answer: "had known",
          options: ["had known", "knew", "has known", "would have known"],
          afterflavour: "Had known = if only + past perfect. Regret about past ignorance. Knew = simple past — correct form of know but not the regret construction."
        },
        {
          qid: "ws-i02",
          pressureClass: "medium",
          context: "The project is underfunded. It has been from the start. The ambition and the budget are incompatible.",
          text: "If only there ___ enough money to do this properly.",
          answer: "were enough money",
          options: ["were enough money", "was enough money", "is enough money", "would be enough money"],
          afterflavour: "Were enough money = if only + past simple for unreal present. Were is the formal subjunctive — also 'was enough money' accepted."
        },
        {
          qid: "ws-i03",
          pressureClass: "high",
          context: "If only the recommendations ___ seriously — the projected temperature increase would have been different.",
          text: "If only the warnings ___ taken seriously when they were first issued.",
          answer: "had been taken",
          options: ["had been taken", "were taken", "have been taken", "would have been taken"],
          afterflavour: "Had been taken = if only + past perfect passive, regret about past inaction. Were taken = past simple, different meaning. Have been taken = present perfect, implies current relevance. Would have been taken = conditional result. Regret about past: had been taken."
        },
        {
          qid: "ws-i04",
          pressureClass: "high",
          context: "Diệu Ly's mother left Vietnam with nothing in 1979. She built everything in a new country.",
          text: "Sometimes her daughter wishes she ___ so she could have seen what her mother built from the beginning.",
          answer: "had been there",
          options: ["had been there", "moved there earlier", "was there now", "would have been there"],
          afterflavour: "Had been there = if only / wish + past perfect, regret about not experiencing the beginning. Moved there earlier = past simple, just states an act. Was there now = present unreal. Would have been there = conditional. Regret about not witnessing the beginning: had been there."
        }
      ]
    },
    {
      id: "ws-rather",
      name: "Rather Not",
      label: "Preference about what others do",
      rule: ``,
      questions: [
        {
          qid: "ws-r01",
          pressureClass: "low",
          context: "He'd rather she ___ — the timing is wrong and he hasn't approved the detail.",
          text: "He'd rather she ___ say anything yet.",
          answer: "didn't",
          options: ["didn't", "hadn't", "won't", "wouldn't"],
          afterflavour: "Didn't = would rather + past simple, preference about present/future action. Hadn't = past perfect, regret about past — wrong tense for a current plan. Won't = future refusal. Wouldn't = conditional. Preference about what she's about to do: didn't."
        },
        {
          qid: "ws-r02",
          pressureClass: "low",
          context: "She'd rather they ___ a different day — Monday is impossible.",
          text: "She'd rather they ___ a different day.",
          answer: "chose",
          options: ["chose", "choose", "would choose", "had chosen"],
          afterflavour: "Chose = would rather + past simple, preference about near future. Choose = present simple, base form. Would choose = conditional, not the would-rather construction. Had chosen = past perfect, regret about past decision. Preference about a future meeting: chose."
        },
        {
          qid: "ws-r03",
          pressureClass: "medium",
          context: "Half the board members haven't read the report. The chair is pushing for a vote.",
          text: "Several members would rather the vote ___ until everyone has read the full document.",
          answer: "were delayed",
          options: ["were delayed", "was delayed", "is delayed", "had been delayed"],
          afterflavour: "Were delayed = would rather + past simple passive. Preference about a future outcome. Was also accepted."
        },
        {
          qid: "ws-r04",
          pressureClass: "high",
          context: "The company went to the media before the union knew what was happening.",
          text: "The union would rather management ___ these concerns through the existing dispute process.",
          answer: "had raised",
          options: ["had raised", "raised", "has raised", "would have raised"],
          afterflavour: "Had raised = would rather + past perfect. Preference about something that already happened. The union wishes it had gone differently."
        }
      ]
    }
  ],
  bossQuestions: [
    {
      qid: "ws-gap01",
      pressureClass: "medium",
      context: "She didn't get the promotion. Someone with fewer years in the role did.",
      text: "She wishes she ___ for it sooner.",
      answer: "had applied",
      type: "gap",
      afterflavour: "Had applied = past perfect in a wish structure. Wish + past perfect = regret about the past. The window closed before she acted."
    },
    {
      qid: "ws-gap02",
      pressureClass: "medium",
      context: "The heating in the office has been broken for two weeks. The landlord says it's being looked at.",
      text: "Everyone wishes the landlord ___ actually fix it.",
      answer: "would just",
      altAnswers: ["would"],
      type: "gap",
      afterflavour: "Would (just) = wish for someone else's action. Wish + would = desire directed at another person's behaviour. The landlord has the power. The tenants don't."
    },
    {
      qid: "ws-gap03",
      pressureClass: "high",
      context: "The river flooded. The flood barrier funding had been cut four years earlier. The inquiry is reviewing the decision.",
      text: "If only the cuts ___ made.",
      answer: "had not been",
      type: "gap",
      afterflavour: "If only + passive past perfect negative. The cuts happened. The flood happened. The grammar holds both."
    },
    {
      qid: "ws-gap04",
      pressureClass: "high",
      context: "Tomáš works three jobs. He is technically self-employed for all of them. He has no sick pay.",
      text: "He wishes the law ___ workers in his position differently.",
      answer: "treated",
      type: "gap",
      afterflavour: "Wish + past simple. The law doesn't treat him differently. That's the present reality."
    }
  ]
});
