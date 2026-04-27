# TENSE AF

Grammar as cognitive instrument. Commit-once decisions feed a groove engine that rewards steady thought and punishes reckless guessing.

**Live:** https://justinsteinmetz.github.io/tense-af/

---

## Deployment

```bash
git add .
git commit -m "TENSE AF — merged build"
git push origin main
```

Single-page app. No build step. Framework-free. Drop the files into the repo root and push.

---

## File manifest

### Engine

| File | Role | LOC |
|---|---|---|
| `index.html` | Screens, CSS, script loader | 1070 |
| `tense-af-tiers.js` | TIERS array, PACKS = [] | 14 |
| `tense-af-state.js` | Queue, streak, mistake tracking | 180 |
| `tense-af-cognitive-state.js` | Hesitation / confidence / instability | 161 |
| `tense-af-input-layer.js` | Pointer events, every-touch-commits | 168 |
| `tense-af-mode.js` | Mode inference (escalation/contradiction/etc) | 33 |
| `tense-af-groove.js` | Integrity/damage/lift/virtuoso, D'Angelo chords, clap | 644 |
| `tense-af-bass.js` | Zapp/G-funk squares, portamento, resonant sweep | 282 |
| `tense-af-audio.js` | Audio context, dry drums, FX reverb, drive bus | 265 |
| `tense-af-ui.js` | Picker → game → end, cognitive engine integration | 406 |

### Data

| File | Packs | Questions |
|---|---|---|
| `tense-af-data-foundation.js` | 3 | 66 |
| `tense-af-data-intermediate.js` | 4 | 152 |
| `tense-af-data-advanced.js` | 5 | 80 |
| `tense-af-data-node3.js` | 1 | 15 |
| `tense-af-data-conditionals.js` | 1 | 56 |
| `tense-af-data-narrative.js` | 1 | 28 |
| `tense-af-data-passive.js` | 1 | 24 |
| `tense-af-data-agency.js` | 1 | 20 |
| `tense-af-data-power.js` | 1 | 15 |

**Script load order** (set in `index.html`):
`tiers → data-foundation → data-intermediate → data-advanced → data-node3 → data-conditionals → data-narrative → data-passive → data-agency → data-power → data-future → data-reported → data-wish → state → cognitive-state → input-layer → mode → groove → bass → audio → ui`

Critical: all data files must load before `state.js`. State consumes PACKS.

---

## Content inventory

**21 packs. 578 questions. 0 duplicate qids.**

### Foundation — 4 packs

**Present Progressive**
Now or always? · Temporary situation · Always + -ing · Progressive vs Simple

**Past Simple**
Regular verbs · Irregular verbs · Negatives · Questions · Was / Were

**Present Simple**
He / She / It + s · Negatives · Questions · Frequency adverbs · Simple vs Progressive

**What Comes Next** *(Future Forms)*
Decided Now (will) · Already Decided or Coming Fast (going to) · Fixed Arrangements (present progressive) · On Schedule (present simple) · Which Signal?
> Four ways English marks future time. Timetables to promises to visible physics.

---

### Intermediate — 9 packs

**Time in Motion** *(past progressive + future forms)*
Background · Interrupted · Negatives · Will · Going To · Arrangements · Which Signal

**Open or Closed** *(present perfect)*
Form · Time Words · For and Since · Open or Closed · News · How Long · Stative · Short Answers

**Voice & Agency** *(passive voice — intermediate)*
Form · Agent · Frame

**Patterns** *(present perfect progressive)*
Frequency · Duration · Questions · Negatives

**Narrative · Media** *(Node 3 standard — no rules displayed)*
Announcement · Report · Frame · Editorial
> Reporting verbs, tense backshift, editorial framing choices. Breaking news to archive.

**Node 3 · Finished or Open** *(Node 3 standard — no rules displayed)*
Breath · Hybrid · Structural · Mirror
> Context-first inference. No time marker in the prompt — the situation carries the signal.

**Passive Voice** *(Node 3 standard — no rules displayed)*
Form · Agency · Frame
> Form under pressure, agent naming and disappearance, active↔passive as editorial decision.

**Agency Distortion** *(Node 3 standard — no rules displayed)*
Where did they go? · Name it · Choose the frame
> Passive as cover story and as centring device. Shell/Niger Delta. Windrush. Cobalt in the DRC. Active voice as accusation. The grammar teaching is real; so is the payload.

**What Was Said** *(Reported Speech — Node 3 standard — no rules displayed)*
The Shift · Said or Told · Asking in Reverse · The Reporting Verb as Frame
> Backshift, reporting verb selection, reported questions. Press releases vs journalism. Claimed vs confirmed. The verb is the editorial decision.

---

### Advanced — 8 packs

**Past Perfect**
Had + past participle · Sequencing Past Events · Past Perfect vs Past Simple · Negatives + Questions

**Past Perfect Progressive**
Had been + -ing · Past Perfect vs Progressive · Cause of past state · Negatives

**Passive: Perfect & Modal**
Perfect Passive · Modal Passive · Impersonal passive · Active vs Passive — Framing decisions

**Mixed Tenses**
Tense Discrimination · Narrative Tenses · Minimal Pair Gauntlet · Layered time

**Conditionals** *(in data-advanced.js — abbreviated form)*
Zero + First · Second · Third · Mixed

**Conditionals** *(in data-conditionals.js — full structural build, 56q)*
Zero + First · Second · Third · Mixed · Zero Structural · First Structural · Second Structural · Third Structural · Mixed Structural

**Agency Distortion** *(Node 3 standard — no rules displayed)*
Where did they go? · Name it · Choose the frame

**What Could Have Been** *(Wish & Regret — Node 3 standard — no rules displayed)*
Not How It Is · What Already Happened · Change Something · If Only · Rather Not
> Wish + past simple (unreal present), wish + past perfect (regret), wish + would (pressure for change), if only, I'd rather. The grammar of counterfactuals. Windrush documents. Flood barriers. Gig economy misclassification.

---

### Mixed — 1 pack, 15q

**Power & Responsibility**
Who did it? · Shift the focus · Name the agent
> Passive voice as political reading skill. Gap-fill + MCQ. Windrush. The classic agentless deflection. Press releases written in the register of institutional self-protection.

---

## Question types

- **`mcq`** (default): multiple choice, options shuffled on render
- **`gap`**: text-input gap-fill with `normalise()` comparison — case-insensitive, whitespace-tolerant, smart-quote-tolerant, trailing-period-forgiving. 10 gap questions in data-power.js. Gap answers carry 1.3× cognitive weight. Commits >4 seconds trigger a 0.05 instability nudge.

---

## Pedagogical design — two modes

**Mode A** (Foundation + most Intermediate/Advanced): time marker inside prompt → fast mapping drill.
**Mode B** (Node 3, Narrative, Passive, Agency): context carries the grammar signal. No rules displayed. Player reads the situation, infers the tense.

Both modes valid. Mode B packs are the sharpest, most demanding. Cognitive engine runs identically across both.

---

## Engine mechanics

### Cognitive state (`cognitive-state.js`)

Smoothed signals, pub-sub, exposed to UI via CSS variables:
- `hesitation` — pre-commit delay
- `confidence` — recent aligned-answer streak
- `instability` — alignment flip frequency

### Input layer (`input-layer.js`)

Pointer Events. Every touch commits. No cancel window. `decisionTime` measured from `markPromptShown()` to `pointerdown`. Emits `{ decisionTime, holdDuration, commitType, choice }`.

### Groove (`groove.js`)

Four axes:
- **integrity** — how clean the pocket is (0–1)
- **damage** — reckless hit penalty (0–1, decays)
- **lift** — aligned streak reward (0–1)
- **virtuoso** — sustained high lift → D'Angelo chord bloom, clap replaces snare

**Trust window** softens the next wrong hit by 50% after aligned streaks.

### Commit logic (UI)

```
correct:               integrity += 0.06, damage *= 0.9
fast + wrong + confident:  groove damage scaled by speedFactor
fast + wrong + low-conf:   not penalised (guessing ≠ arrogance)
unstable:              "// That held." or "// You rushed that." appended to reveal
```

Meaning always lands. Judgement layers on top, never replaces the afterflavour.

### Mode inference (`mode.js`)

Priority order: `escalation > contradiction > meta > exposure > deadpan > pattern`
Output shapes groove each bar.

### Audio (`audio.js`, `bass.js`)

Dry drums, reverb send for FX only. Asymmetric tanh WaveShaper drive. Bass bus 1.35× boost. Bass: Zapp/G-funk squares, portamento, resonant sweep, unison detune ±8 cent.

---

## Design principles

- Context = situational anchor (present tense, doesn't leak the answer)
- Text = prompt with blank
- Answer = grammatically determined from context + prompt
- Afterflavour = colour commentary on commit
- No drill-label contexts ("Regular verb", "go", "One person")
- No CEFR levels on student-facing materials
- No Name/Date fields
- British English throughout
- Humour as mechanism, not tone

### Recurring references
Nina Simone · Baldwin · Dave · Achebe · Shell/Niger Delta · Fortress Europe · ICE/Priority Enforcement · Windrush/Home Office · Kolwezi cobalt · Žižkov · Prague trams · breaking news cycles · institutional passive voice.

---

## Adding new packs

```js
PACKS.push({
  id: "pack-id",
  name: "Pack Name",
  colour: "#hex",
  tier: "foundation" | "intermediate" | "advanced" | "mixed",
  rounds: [
    {
      id: "round-id",
      name: "Round Name",
      label: "Subtitle",
      rule: `<strong>Explanation</strong> with <span class="rt-eg">examples</span>`,
      // For Node 3 / no-rules packs: rule: ``
      questions: [
        {
          qid: "unique-id",
          pressureClass: "low" | "medium" | "high",
          context: "Situational anchor. Present tense. Doesn't leak the answer.",
          text: "The ___ prompt with a blank.",
          answer: "correct option",
          options: ["correct", "distractor1", "distractor2", "distractor3"],
          afterflavour: "Short. Pointed. Confirms the rule with edge."
          // Optional: type: "gap"  — removes options, enables text input
        }
      ]
    }
  ],
  bossQuestions: []
});
```

Create a new `tense-af-data-yourpack.js` file. Add its `<script>` tag to `index.html` before `tense-af-state.js`. No other changes needed.

---

## Build history

This build merges three prior development branches:

- **Production build** — engine architecture, gap-fill question type, Power & Responsibility pack, all foundation/advanced content
- **V4/V6 multi-file branch** — richer intermediate content (152q across 4 conceptual packs), conditionals expansion (56q), narrative/media pack, passive voice pack (Node 3 standard)
- **Agency Distortion pack** — written fresh for this build; political passive/active framing, Node 3 standard

---


---

## Multiplayer (FIELD_BASED)

`MULTIPLAYER_MODE = FIELD_BASED`

Players share a **field state** derived from aggregated signals. No player visibility. No score sync. No audio sync. The groove changes; the reason is invisible.

### Activation (console or init script)

```js
// Local demo — same device, multiple browser tabs
const adapter = new BroadcastChannelAdapter();
multiplayerField.init(adapter, 'room-01');

// Remote — requires a WebSocket relay server
const adapter = new WebSocketAdapter('wss://your-relay.example.com');
multiplayerField.init(adapter, 'room-01');
```

### Signal (sent at 7hz)

```js
{ speed, accuracy, streak, hesitation }
```

### Field state (derived)

```js
{ tempo, clarity, stability, tension }
```

| Field | Source | Audio effect |
|---|---|---|
| `tempo` | hesitation + fast-correct rate | BPM modulation (×0.9–1.1) |
| `clarity` | error rate | LPF cutoff (−errorRate × 200) |
| `stability` | signal variance | feedbackDelay, inputDelay |
| `tension` | signal variance (normalised) | bass detune (tension × 4 cents) |

### Transport adapters

`BroadcastChannelAdapter` — same browser, multiple tabs. Zero server. Works immediately.

`WebSocketAdapter` — across physical devices. Requires a relay server. Any WebSocket broadcast server works (Node `ws`, Cloudflare Worker, Fly.io). Message format is JSON, identical to BroadcastChannel messages.

### Perceptual gate

UI updates suppressed when `perceptualDelta < 0.01`. Audio always updates.

### Hard constraints

- Input never blocked
- No player list or score visibility
- No UI/audio sync across clients
- All effects input-correlated
- No randomness in field derivation

---
## Known limitations

### PPP residual skew
Past Perfect Progressive rounds at ~75% `had`-dominance after one contrast item per round. Acceptable for form-teaching. One more contrast item per round would bring to 50/50.

### Future pack caveat
Will/going-to distinction is semantically contested among native speakers. Pack uses forced-choice contexts; a learner with strong intuition may defend alternate answers. Afterflavour framing accepts this.

### Conditionals duplication
Two conditionals packs exist: a 16q version in `data-advanced.js` and the full 56q structural build in `data-conditionals.js`. Both load and function correctly. qid collision resolved (prefixed `cx-`). Consider consolidating into one file in a future pass.

### Mode A self-contained prompts
~64 prompts in Foundation/Intermediate contain their own time marker. Design choice, not bug. Fast-mapping is valid pedagogy at Foundation level.

---

## Repo

GitHub Pages deployment: `justinsteinmetz/tense-af` → `index.html` at root.
All assets inline. No external dependencies beyond Google Fonts (Bebas Neue, DM Sans, DM Mono, Instrument Serif).

Built for DSP English. Grades 7–12. Commit, don't hedge.
