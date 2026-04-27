# TENSE AF — CONTENT UPGRADE NOTES
# For continuity between Claude sessions
# Last updated: this session

---

## WHAT THIS GAME IS

TENSE AF is an adaptive English grammar game for DSP (Deutsche Schule Prag) students, A2–B1.
Single HTML file. Hosted at justinsteinmetz.github.io/TENSEAF/
Framework-free. 15 questions per session. Cognitive state → groove → audio engine.

**Owner:** Justin Steinmetz (justinsteinmetz on GitHub)
**Working directory:** /home/claude/tense-af-v14-fixed/
**Deployable zip:** always output to /mnt/user-data/outputs/tense-af-v14-fixed.zip

---

## CORE DESIGN PRINCIPLE

Every question must satisfy:

> situation → interpretation → grammar

**The hard rule:** Can this be answered without constructing a mental model of the situation?
If yes → delete or rewrite.

**Scoring rubric (I/C/D/X, 0–4):**
- I = Interpretation required
- C = Competing readings exist
- D = Distractors arise from the situation (not from grammar knowledge)
- X = Grammar resolves the conflict (not context, not pattern)

4 = all four. Target. Node-3, conditionals, wish/regret are already here.
3 = three. Acceptable. Lift to 4 where possible.
2 = two. Rewrite or cut.
1 = one. Cut unless latent tension exists.

---

## CURRENT STATE (post full audit)

**Total questions:** 553 across 12 data files.

**Strong zones (don't touch without reason):**
- node3 (15q) — all 4s. ICDx complete. Institutional voice. Present perfect as accountability.
- conditionals (40q) — cond01–06 are 4s. cond2 structural series are 4s.
- wish/regret (29q) — ws01–06 are 4s. Emotional timeline. Unreal vs real.
- narrative (19q) — verb choice as editorial stance. Mostly 3s, some 4s.
- agency (20q) — active vs passive framing. Mostly 3s.

**Weak zones (primary targets):**
- foundation ppg series — 1s and 2s throughout. Situations are bare. Interpretive pressure low.
- foundation ps (present simple) series — same.
- passive voa series — form leakage. Distractors test tense-in-passive, not framing.
- reported speech rsp series — rule leakage. Backshift confirmed, stance not required.
- power pwr series — agreement remnants. Several 1s.
- advanced pp/ppp series — 2s from weak distractors, not from content failure.

---

## THE UPGRADE TASK

**Goal:** Lift every 1 and 2 to at least 3, aiming for 4.

**The key move for 2→4:**
Right now: context supports answer.
Target: context creates conflict, grammar resolves conflict.

Build distractors FROM the situation, not from grammar patterns:
- Wrong answers should reflect a plausible misreading of THIS context
- Not: wrong forms
- Not: impossible tenses
- Yes: a different but coherent interpretation of what's happening

**Example (already done, use as model):**

pass2-a08 — Fela Kuti's compound. Lagos. 1977.
"The tapes ___ in the raid — no copies existed."
Options: "were destroyed" / "have been destroyed" / "were confiscated then destroyed" / "had been destroyed before the raid"

- were destroyed = past simple, one act, one night. ✓
- have been destroyed = present perfect, loss still relevant. Plausible misreading.
- were confiscated then destroyed = two acts; historically uncertain.
- had been destroyed before the raid = impossible in context.

The wrong answers come from the situation. A student who doesn't understand tense meaning will pick one of the plausible wrong options. That's the target.

---

## CONTENT SOURCES (already gathered, use freely)

All of these were researched and banked in earlier sessions:

**Body horror / biology:**
- Brain has no pain receptors (brain surgery while awake)
- Demodex mites in eyelash follicles
- Sand tiger sharks eating each other in the womb
- Woodpeckers drilling into baby bird heads
- Ophiocordyceps fungus controlling ant brains
- Spinal cord consistency of a banana
- Cornea gets oxygen from air, no blood supply
- Liver rebuilds from 25% of mass
- Unruptured brain aneurysms in 2% of population
- Rabies hides for months before activating

**History (European):**
- Medieval corpse medicine (skull powder, gladiator blood, mummy flesh)
- Napoleon's rabbits charging him
- Anglo-Zanzibar War (38–45 minutes)
- Boston molasses flood (56 km/h, 21 dead)
- Rasputin assassination (cyanide, two bullets, frozen river)
- Isadora Duncan (scarf, wheel)

**Hip hop:**
- Biggie, Jay-Z, Busta — same high school (Canarsie)
- Jay-Z shot his brother at 12
- Wu-Tang logo designed for $400
- DMX auditioned with jaw wired shut
- OutKast got deal rapping over Tribe's Scenario
- Chuck D named Busta Rhymes
- Midnight Marauders and Enter the Wu-Tang released same day
- Eminem wrote Lose Yourself in one take

**Africa:**
- Mansa Musa crashed Egyptian economy 1324
- Ethiopia defeated Italy at Adwa 1896
- Timbuktu manuscripts (700,000+ in family libraries)
- Africa contains >1/3 of world's languages
- Berlin Conference 1884-85 (14 European nations, zero Africans)
- Benin Bronzes looted 1897, returns beginning 2022
- Kingdom of Kongo, Songhai Empire, Great Zimbabwe

**South America:**
- Amazon carries more water than next 7 rivers combined
- Bolivia has most lithium on earth
- Colombia produces 70% of world's emeralds
- Brazil last to abolish slavery (1888)
- Portuguese royal family fled to Brazil 1808
- Ecuador first to grant rights to nature
- Simón Bolívar liberated 6 countries, died penniless at 47
- Quechua spoken by 8 million across 6 countries

**India / China:**
- British extracted ~$45 trillion from India (Patnaik)
- Amritsar Massacre 1919 (379 killed, general promoted)
- Bengal Famine 1943 (2-3 million dead, Churchill knew)
- Gandhi Salt March 1930 (240 miles, 78 days)
- Ambedkar burned Manu Smriti 1927; converted 1956
- China lifted 800 million out of poverty since 1978
- Mao's Four Pests Campaign → sparrow extinction → locust explosion → 55 million dead
- China 1949: Mao proclaimed People's Republic October 1

**Gender:**
- Beauvoir: "One is not born a woman, but becomes one"
- Butler: gender is performative
- hooks: race and class shape how gender is experienced
- Women do more unpaid care work in every country
- Women earn less than men in every country
- Iceland women's strike 1975 (90% participation, country stopped)
- Swiss women got vote in 1971
- New Zealand first country to give women vote (1893)

**Climate:**
- Atmosphere contains 50% more CO₂ than pre-industrial
- 2024 warmest decade on record
- Deforestation = 20% of greenhouse emissions
- Ozone layer healing since Montreal Protocol 1987
- Sea levels rising 3x faster than early 20th century
- Earth warming 0.2°C per decade
- IPCC: 1.5°C threshold by early 2030s

**Space:**
- Looking at stars = seeing the past
- More stars than grains of sand on every beach
- Black holes don't suck like vacuum cleaners
- Venus day longer than Venus year
- Saturn less dense than water (would float)
- Milky Way smells of rum (ethyl formate)
- Andromeda approaching (going to collide in 4.5 billion years)
- Sun will become red giant (will, not going to — no current trajectory)

**Music (Congo Square → K-pop):**
- Congo Square 1817: only legal gathering place for enslaved people
- Renamed Beauregard Square 1893 (Confederate general)
- Renamed back Congo Square 2011
- Congo Square → jazz → blues → R&B → rock → hip hop → K-pop
- US military bases Korea 1950s → Black music reached Korean mainstream
- K-pop officially described as "mixture of modern Western and African-American influences"
- Sister Rosetta Tharpe: electric guitar + distortion in 1945, before Chuck Berry
- James Brown's rhythmic foundation

**Key thinkers:**
- Walter Rodney: How Europe Underdeveloped Africa
  - "Africa was not underdeveloped — it was underdeveloped"
  - Europe actively extracted, not just got ahead
  - Specific argument: colonial borders, destroyed industries, extracted resources
- Bruce Pascoe: Dark Emu
  - Aboriginal Australians had agriculture, grain harvests, fish traps, villages
  - Explorer journals recorded this; colonial administration ignored it
  - Terra nullius was a legal fiction despite documentary evidence
- Jared Diamond: Guns, Germs and Steel
  - Geography explains European dominance, not race
  - East-west axis, domesticable animals, crop diversity
- Ian Morris: Why the West Rules — For Now
  - Social development index across 50,000 years
  - Geography corrects: China's rise is expected
- Harari: Sapiens, Homo Deus, 21 Lessons
  - Cognitive revolution, agricultural revolution as "history's biggest fraud"
  - Chimpanzee can't win argument but can rip you apart
  - Sugar more dangerous than gunpowder
  - More die from eating too much than too little
- Coates: We Were Eight Years in Power
  - "Race is the child of racism, not the father"
  - Plunder of Black life is foundation of American wealth
- Tulsa 1921 (Greenwood / Black Wall Street): 300 killed, 10,000 homeless, aeroplanes fired on civilians
- Philadelphia MOVE bombing 1985: city government bombed residential street, 11 dead including 5 children, fire department ordered to let it burn

---

## TECHNICAL NOTES

**File structure:**
- tense-af-data-foundation.js — 121q (ppg, ps, prs rounds)
- tense-af-data-intermediate.js — 146q (tim, ooc, voa, gp rounds)
- tense-af-data-advanced.js — 59q (papf, pppg, passa, mt rounds)
- tense-af-data-agency.js — 20q (ag rounds)
- tense-af-data-conditionals.js — 40q (cond2 rounds)
- tense-af-data-future.js — 33q (fut rounds)
- tense-af-data-narrative.js — 19q (narr rounds)
- tense-af-data-node3.js — 15q (n3 rounds)
- tense-af-data-passive.js — 24q (pass2 rounds)
- tense-af-data-power.js — 15q (pwr rounds)
- tense-af-data-reported.js — 32q (rsp rounds)
- tense-af-data-wish.js — 29q (ws rounds)

**Question format:**
```js
{ qid:"unique-id",
  pressureClass:"low|medium|high",
  context:"Situation description. No blank. Sets the scene.",
  text:"The question sentence with ___ blank.",
  answer:"correct answer — must exactly match one option",
  options:["correct answer","plausible wrong 1","plausible wrong 2","plausible wrong 3"],
  afterflavour:"Explains why this tense. Why not the other. Not mood — meaning lock." }
```

**Gap questions (type:"gap"):**
- No options array
- Student types answer
- altAnswers:["alternative acceptable answer"] for variants
- Answer should be a full verb phrase, not a bare auxiliary

**Rules:**
- answer must exactly match one option string (run Python verification)
- context must NOT contain ___ (situation description only)
- text must contain ___ (question sentence)
- afterflavour must explain the tense choice, not just confirm it

**Verification script:**
```python
import re, os
from collections import Counter

DATA_DIR = 'tense-af-v14-fixed'
for fname in os.listdir(DATA_DIR):
    if not fname.startswith('tense-af-data'): continue
    content = open(os.path.join(DATA_DIR, fname)).read()
    for m in re.finditer(r'qid\s*:\s*[\"\'](.*?)[\"\']\s*[,\n}]', content):
        qid = m.group(1)
        chunk = content[m.start():m.start()+600]
        ans_m = re.search(r'answer\s*:\s*"([^"]+)"', chunk)
        opts_m = re.search(r'options\s*:\s*\[([^\]]*)\]', chunk)
        type_m = re.search(r'type\s*:\s*"([^"]+)"', chunk)
        if ans_m and opts_m and not (type_m and type_m.group(1)=='gap'):
            ans = ans_m.group(1)
            opts = re.findall(r'"([^"]+)"', opts_m.group(1))
            if opts and ans not in opts:
                print(f'BROKEN: {fname} / {qid}: {ans!r} not in {opts}')
```

**Patch function (use this for every edit):**
```python
def patch(fpath, qid, **kwargs):
    content = open(fpath).read()
    for pattern in [rf'qid:"({re.escape(qid)})"', rf'qid\s*:\s*"({re.escape(qid)})"']:
        m = re.search(pattern, content)
        if m: break
    else:
        print(f'NOT FOUND: {qid}')
        return
    start = m.start()
    chunk = content[start:start+800]
    for k, v in kwargs.items():
        if k == 'options':
            opts_str = ', '.join(f'"{o}"' for o in v)
            chunk = re.sub(r'options\s*:\s*\[[^\]]*\]', f'options: [{opts_str}]', chunk, count=1)
        else:
            chunk = re.sub(rf'{k}\s*:\s*"[^"]+"', f'{k}: "{v}"', chunk, count=1)
    content = content[:start] + chunk + content[start+800:]
    open(fpath, 'w').write(content)
    print(f'PATCHED: {qid}')
```

**After patching Python kwargs, ALWAYS fix JS colon notation:**
```python
for kw in ['text','answer','options','context','afterflavour','pressureClass']:
    content = re.sub(rf'(\s){kw}= ', rf'\1{kw}: ', content)
    content = re.sub(rf'\b{kw}="', f'{kw}: "', content)
    content = re.sub(rf'\b{kw}=\[', f'{kw}: [', content)
```

**Common failure mode:**
Python patch scripts use `kwargs` notation (`text=`, `answer=`) but JS files use colon notation (`text:`, `answer:`). Running a patch script writes Python `=` into the JS file, breaking syntax. Always run the colon-fix after patching.

---

## UPGRADE STRATEGY (OPTION A — LIFT THE FLOOR)

**Priority order:**

1. **Foundation ppg 1s → cut or rewrite**
   - ppg07 (detection) — cut or replace with situation that has competing readings
   - ppg17 (form) — cut
   - Targets: ppg01, ppg04, ppg06, ppg10, ppg13, ppg14, ppg16, ppg18, ppg20

2. **Foundation ps 1s → cut**
   - ps01, ps03, ps06, ps11, ps16, ps22, ps27

3. **Foundation gp 1s → cut**
   - gp01, gp02, gp04

4. **Passive voa 1s and 2s → distractor rebuild**
   - voa01, voa03, voa06, voa09 — cut or rebuild distractors from situation
   - voa02, voa04, voa08 — rebuild distractors

5. **Reported speech rsp 1s and 2s → stance rebuild**
   - rsp01, rsp02, rsp04, rsp06, rsp08 — rebuild so learner must ask "is this still true?"
   - rsp backshift series: add a distractor that represents "journalist believes the claim"

6. **Power pwr 1s → cut**
   - pw01, pw03

7. **Advanced pp/ppp 2s → distractor rebuild**
   - pp02, pp04, pp06, pp08: add distractor that represents plausible wrong sequencing

**The distractor rebuild pattern:**

For passive questions, the 4 options should be:
1. Correct passive form
2. Same tense but wrong — "still happening" vs "closed" (tense as interpretation)
3. Active form — agent visible vs hidden (framing as interpretation)
4. Wrong passive form that reflects a different reading of the situation

For reported speech, the 4 options should be:
1. Correct backshifted form (journalist maintains distance)
2. Non-backshifted form (journalist treats claim as still true)
3. Wrong tense (journalist distances further than warranted)
4. Wrong verb (stance mismatch)

---

## WHAT MAKES A 4

Look at the node-3 questions. They work because:
1. The context describes a real institutional situation with stakes
2. Two grammatically plausible options represent genuinely different claims about the world
3. The learner must decide which claim is being made before choosing the form
4. The wrong answers would be correct in a slightly different situation

The present perfect / past simple distinction in node-3 is:
- "has raided" = it's still happening, ongoing pattern, current relevance
- "raided" = it happened, it's over, no current relevance
- These are not grammar variants. They are different political claims.

That's the 4. Import that logic into every other tense distinction.

---

## JUSTIN'S PREFERENCES (for future Claudes)

- British English throughout
- No CEFR labels on student-facing materials
- No Name/Date fields
- Anti-colonial, antiracist framing natural to content (not flagged)
- Direct tone, no disclaimers
- Dry humour in afterflavours preferred over enthusiasm
- The game is for real students in a real school in Prague
- The content is not decoration. It's the actual lesson.

---

## SESSION CAP

Currently 15 (changed from 12 in this session).
Approximately 10 minutes at normal pace.

---

END OF NOTES

---

## SESSION CHANGES (this session)

**Files modified:**
- tense-af-data-power.js — pwr01, pwr02, pwr04, pwr06–pwr11 upgraded from gap-fill 1s to MCQ 3–4s
- tense-af-data-reported.js — rsp-b01, rsp-b02 pressure raised (low→medium), context deepened with competing interpretations
- tense-af-data-foundation.js — Bug fixes: ppg-gap07 afterflavour corrected (was "Always + -ing", now correctly explains present perfect), ps-gap06 afterflavour corrected, ps-gap08 afterflavour corrected, hist-irr03 upgraded from bare "-ed" note to full situational afterflavour with real distractors

**Pattern applied to pwr01–11:**
All bare auxiliary gap-fills (answer: "were", "was", "has", etc.) converted to MCQ with:
- 4 options that represent different tense/voice choices
- Distractors arising from the situation (not grammar pattern recognition)
- Afterflavour explaining what each option MEANS in context

**ppg06 note:**
The text was "Something ___ on the stove" with answer "is controlling" — mismatched to the stove context. Fixed: answer now "is burning", options rebuilt around the stove scenario.

