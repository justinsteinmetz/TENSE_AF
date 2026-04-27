// ═══════════════════════════════════════════════════════════════
// TENSE AF — UNIFIED UI (full game)
// 
// home → tier picker → pack grid → game → end
// Every question runs through the cognitive/groove/mode engine.
// Correct answer repairs groove. Fast-wrong with confidence punishes.
// Lift, chords, clap, Zapp bass apply across every pack.
// ═══════════════════════════════════════════════════════════════

// Normalise input for fair comparison — case, whitespace, smart quotes, trailing punctuation
function normalise(str) {
  if (str == null) return '';
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[\u2018\u2019\u201B\u2032]/g, "'")
    .replace(/[\u201C\u201D\u201F\u2033]/g, '"')
    .replace(/\s+/g, ' ')
    .replace(/\.$/, '');
}

// Expand contractions to canonical long-form for comparison
function expandContractions(str) {
  return str
    .replace(/\bdon't\b/g,     'do not')
    .replace(/\bdoesn't\b/g,   'does not')
    .replace(/\bdidn't\b/g,    'did not')
    .replace(/\bwasn't\b/g,    'was not')
    .replace(/\bweren't\b/g,   'were not')
    .replace(/\bisn't\b/g,     'is not')
    .replace(/\baren't\b/g,    'are not')
    .replace(/\bhaven't\b/g,   'have not')
    .replace(/\bhasn't\b/g,    'has not')
    .replace(/\bhadn't\b/g,    'had not')
    .replace(/\bwon't\b/g,     'will not')
    .replace(/\bcan't\b/g,     'cannot')
    .replace(/\bcouldn't\b/g,  'could not')
    .replace(/\bshouldn't\b/g, 'should not')
    .replace(/\bwouldn't\b/g,  'would not')
    .replace(/\bmightn't\b/g,  'might not')
    .replace(/\bmustn't\b/g,   'must not')
    .replace(/\bi'm\b/g,       'i am')
    .replace(/\bhe's\b/g,      'he is')
    .replace(/\bshe's\b/g,     'she is')
    .replace(/\bit's\b/g,      'it is')
    .replace(/\bthey're\b/g,   'they are')
    .replace(/\bwe're\b/g,     'we are')
    .replace(/\byou're\b/g,    'you are')
    .replace(/\bi've\b/g,      'i have')
    .replace(/\bthey've\b/g,   'they have')
    .replace(/\bwe've\b/g,     'we have')
    .replace(/\byou've\b/g,    'you have')
    .replace(/\bwon't\b/g,     'will not')
    .replace(/\bthey'll\b/g,   'they will')
    .replace(/\bhe'll\b/g,     'he will')
    .replace(/\bshe'll\b/g,    'she will')
    .replace(/\bi'll\b/g,      'i will')
    .replace(/\bwe'll\b/g,     'we will')
    .replace(/\byou'll\b/g,    'you will');
}

function normaliseFull(str) {
  return expandContractions(normalise(str));
}

// Check answer — contraction-safe, altAnswers-aware
function isCorrectAnswer(choice, q) {
  const c = normaliseFull(choice);
  if (c === normaliseFull(q.answer)) return true;
  if (Array.isArray(q.altAnswers)) {
    return q.altAnswers.some(alt => normaliseFull(alt) === c);
  }
  return false;
}

class UI {
  constructor() {
    this.nextTimeout = null;
    this.promptStartTime = null;
    this.committed = false;
  }

  init() {
    if (typeof cognitiveState !== 'undefined') {
      cognitiveState.subscribe((event, st) => this._onCogState(event, st));
    }
  }

  _onCogState(event, st) {
    const root = document.documentElement;
    root.style.setProperty('--cog-hesitation', st.hesitation.toFixed(3));
    root.style.setProperty('--cog-confidence', st.confidence.toFixed(3));
    root.style.setProperty('--cog-instability', st.instability.toFixed(3));

    document.body.classList.toggle('unstable', st.instability > 0.55);
    document.body.classList.toggle('hesitating', st.hesitation > 0.55);
    document.body.classList.toggle('confident', st.confidence > 0.7);

    const lift = (typeof audio !== 'undefined' && audio.groove) ? audio.groove.lift : 0;
    document.body.classList.toggle('peaked', lift > 0.8);
    root.style.setProperty('--cog-lift', lift.toFixed(3));
  }

  confirmExit() {
    const btn = document.getElementById('gameExitBtn');
    if (!btn) return;
    if (btn.dataset.confirming === 'true') {
      // Second tap — exit
      btn.dataset.confirming = 'false';
      btn.textContent = '←';
      // Stop audio before leaving game screen
      if (typeof audio !== 'undefined') {
        audio.stop();
        if (audio.groove) audio.groove.stop();
      }
      this.renderPicker();
    } else {
      // First tap — ask
      btn.dataset.confirming = 'true';
      btn.textContent = '✕ exit?';
      setTimeout(() => {
        if (btn.dataset.confirming === 'true') {
          btn.dataset.confirming = 'false';
          btn.textContent = '←';
        }
      }, 2000);
    }
  }

  toggleAudio() {
    if (typeof audio !== 'undefined') audio.toggleMute();
    document.querySelectorAll('.audio-toggle').forEach(b => {
      b.classList.toggle('muted', audio && audio.muted);
    });
  }

  switchScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(name);
    if (el) el.classList.add('active');
    if (typeof state !== 'undefined') state.screen = name;
    document.body.classList.toggle('in-game', name === 'game');
  }

  renderHome() {
    // Stop any running audio when returning to home
    if (typeof audio !== 'undefined') {
      audio.stop();
      if (audio.groove) audio.groove.stop();
    }
    this.switchScreen('home');
  }

  // ─────── PICKER ───────
  renderPicker() {
    this.switchScreen('picker');
    this.renderTierTabs();
    this.renderPackGrid();
  }

  renderTierTabs() {
    const wrap = document.getElementById('tierTabs');
    if (!wrap) return;
    wrap.innerHTML = '';
    if (!state.selectedTier) state.selectedTier = TIERS[0].id;
    TIERS.forEach(tier => {
      const btn = document.createElement('button');
      btn.className = 'tier-tab' + (tier.id === state.selectedTier ? ' active' : '');
      btn.textContent = tier.name;
      btn.onclick = () => {
        state.selectedTier = tier.id;
        this.renderTierTabs();
        this.renderPackGrid();
      };
      wrap.appendChild(btn);
    });
  }

  renderPackGrid() {
    const wrap = document.getElementById('packGrid');
    if (!wrap) return;
    wrap.innerHTML = '';
    const packs = PACKS.filter(p => p.tier === state.selectedTier);
    packs.forEach(pack => {
      const total = pack.rounds.reduce((s, r) => s + r.questions.length, 0)
        + (pack.bossQuestions ? pack.bossQuestions.length : 0);
      const card = document.createElement('div');
      card.className = 'tense-card';
      card.innerHTML = `
        <div class="tense-card-name">
          <span class="tc-dot" style="background:${pack.colour}"></span>
          ${pack.name}
        </div>
        <div class="tense-card-sub">${pack.subtitle || ''}</div>
      `;
      card.onclick = () => this.startPack(pack);
      wrap.appendChild(card);
    });
  }

  applyPackColour(hex) {
    const root = document.documentElement;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    root.style.setProperty('--tc', hex);
    root.style.setProperty('--tc-dim', `rgba(${r},${g},${b},0.14)`);
    root.style.setProperty('--tc-border', `rgba(${r},${g},${b},0.3)`);
    root.style.setProperty('--tc-glow', `rgba(${r},${g},${b},0.4)`);
  }

  startPack(pack) {
    state.reset();
    state.selectPack(pack);
    state.buildQueue();
    this.applyPackColour(pack.colour);
    if (typeof cognitiveState !== 'undefined') cognitiveState.reset();
    state.falseConfidenceStreak = 0;
    // Reset framing block so first question always shows framing
    const framingEl = document.getElementById('roundFraming');
    if (framingEl) { framingEl.dataset.roundId = ''; framingEl.style.display = 'none'; }
    // Ensure audio is running (may have been stopped on previous exit)
    if (typeof audio !== 'undefined') {
      if (!audio.ctx) audio.init();
      audio.start();
    }
    this.renderGame();
  }

  // ─────── GAME ───────
  renderGame() {
    this.switchScreen('game');
    const q = state.getCurrentQuestion();
    if (!q) return this.showEnd();
    const title = document.getElementById('gameTitle');
    if (title) title.textContent = state.selectedPack.name;
    this.renderProgress();
    this.renderQuestion(q);
  }

  renderProgress() {
    const p = state.getProgress();
    const el = document.getElementById('progress');
    if (el) el.style.width = p.percentage + '%';
  }

  renderQuestion(q) {
    this.committed = false;
    this.promptStartTime = performance.now();
    
    if (typeof inputLayer !== 'undefined') inputLayer.reset();
    if (typeof cognitiveState !== 'undefined') {
      cognitiveState.beginPrompt();
      // pressureClass seeds instability — high pressure questions start tense
      if (q.pressureClass) {
        const pressureSeed = { low: 0, medium: 0.06, high: 0.12 }[q.pressureClass] || 0;
        if (pressureSeed > 0) cognitiveState.addInstability(pressureSeed);
      }
    }

    // ── SEMANTIC LAYER — analyse question, push to groove ──
    if (typeof analyseSemantic === 'function' && typeof audio !== 'undefined' && audio.groove) {
      const packId  = state.selectedPack ? state.selectedPack.id  : '';
      const roundId = q._roundId || '';  // set by buildQueue if available
      const semantic = analyseSemantic(q, packId, roundId);
      audio.groove.setSemanticContext(semantic);
    }

    // ── ROUND FRAMING — persistent lens, updates only when round changes ──
    const framingEl = document.getElementById('roundFraming');
    const framingRule = document.getElementById('roundFramingRule');
    if (framingEl && framingRule) {
      if (q._roundRule) {
        // Only update framing if round changed
        const currentRound = framingEl.dataset.roundId;
        if (currentRound !== q._roundId) {
          framingRule.innerHTML = q._roundRule;
          framingEl.dataset.roundId = q._roundId || '';
          framingEl.style.display = 'block';
          // Fade in on round change
          framingEl.style.opacity = '0';
          requestAnimationFrame(() => {
            framingEl.style.transition = 'opacity 0.5s';
            framingEl.style.opacity = '1';
          });
        }
      } else {
        framingEl.style.display = 'none';
      }
    }
    
    const contextEl = document.getElementById('context');
    const textEl = document.getElementById('text');
    const revealEl = document.getElementById('reveal');
    
    if (contextEl) {
      contextEl.textContent = q.context || '';
      contextEl.style.display = q.context ? 'block' : 'none';
      contextEl.className = 'context';
    }
    if (textEl) textEl.textContent = q.text;
    if (revealEl) {
      revealEl.textContent = '';
      revealEl.className = 'reveal';
    }
    
    const card = document.querySelector('.q-card');
    if (card) {
      card.classList.remove('q-committed', 'q-aligned', 'q-misaligned');
      card.classList.add('q-idle');
    }
    
    // ── STAGED REVEAL — hide options, show after 750ms delay ──
    // Forces reading of framing + context before committing
    const optsWrap = document.getElementById('options');
    if (optsWrap) {
      optsWrap.style.opacity = '0';
      optsWrap.style.pointerEvents = 'none';
    }

    // Type-branch: gap-only (no options) → gap-fill UI
    //              mcq or no type + options → multiple choice
    //              gap + options → hybrid: show both (rare)
    const hasOptions = q.options && q.options.length > 0;
    if (q.type === 'gap' && !hasOptions) {
      this.renderGap(q);
    } else {
      this.renderMCQ(q);
    }

    // Reveal options after delay — situation must be read first
    const OPTION_DELAY = 750;
    setTimeout(() => {
      if (optsWrap) {
        optsWrap.style.transition = 'opacity 0.3s';
        optsWrap.style.opacity = '1';
        optsWrap.style.pointerEvents = 'auto';
      }
      // Gap input also hidden initially — show after delay
      const gapInput = document.getElementById('gapInput');
      if (gapInput) {
        gapInput.style.transition = 'opacity 0.3s';
        gapInput.style.opacity = '1';
        gapInput.focus();
      }
      if (typeof inputLayer !== 'undefined') inputLayer.markPromptShown();
    }, OPTION_DELAY);
  }

  renderMCQ(q) {
    const optsWrap = document.getElementById('options');
    optsWrap.innerHTML = '';
    // Note: opacity and pointerEvents controlled by renderQuestion staged reveal
    optsWrap.style.display = 'grid';
    
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      optsWrap.appendChild(btn);
      
      if (typeof inputLayer !== 'undefined') {
        inputLayer.attachToButton(btn, opt, (commitData) => {
          this.submitAnswer(commitData.choice, q, commitData.decisionTime);
        });
      } else {
        btn.onclick = () => this.submitAnswer(opt, q, performance.now() - this.promptStartTime);
      }
    });
    // markPromptShown is called after the option delay in renderQuestion
  }

  renderGap(q) {
    const optsWrap = document.getElementById('options');
    optsWrap.innerHTML = '';
    optsWrap.style.display = 'block';
    // Note: opacity and pointerEvents controlled by renderQuestion staged reveal
    
    const wrap = document.createElement('div');
    wrap.className = 'gap-wrap';
    wrap.innerHTML = `
      <input type="text" id="gapInput" class="gap-input" 
             placeholder="Type your answer…" 
             autocomplete="off" 
             autocorrect="off"
             autocapitalize="off"
             spellcheck="false"
             style="opacity:0" />
      <button id="gapSubmit" class="gap-submit">OK</button>
    `;
    optsWrap.appendChild(wrap);
    
    const input = document.getElementById('gapInput');
    const btn = document.getElementById('gapSubmit');
    
    // markPromptShown and focus called after delay in renderQuestion
    
    const commit = () => {
      if (this.committed) return;
      const value = input.value.trim();
      if (!value) {
        // Empty answer — gently shake, don't commit
        input.classList.add('gap-input-shake');
        setTimeout(() => input.classList.remove('gap-input-shake'), 300);
        return;
      }
      this.submitAnswer(value, q, performance.now() - this.promptStartTime);
    };
    
    btn.onclick = commit;
    input.onkeydown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        commit();
      }
    };
    
    // Focus after a tick so mobile keyboards don't pop immediately on render
    setTimeout(() => { try { input.focus(); } catch(_) {} }, 60);
  }

  submitAnswer(choice, q, decisionTime) {
    if (this.committed) return;
    this.committed = true;
    
    // Normalise both sides for fair comparison
    const correct = isCorrectAnswer(choice, q);

    const dt = decisionTime || (performance.now() - this.promptStartTime);
    const isGap = q.type === 'gap' && !(q.options && q.options.length);
    const weight = isGap ? 1.3 : 1.0;  // gap answers carry more cognitive weight
    
    state.submitAnswer(choice, correct);
    if (!correct) state.recordMistake(q.qid);

    // ── MULTIPLAYER SIGNAL ────────────────────────────────────
    if (typeof multiplayerField !== 'undefined' && multiplayerField._active) {
      const hesitation = typeof cognitiveState !== 'undefined'
        ? Math.round(cognitiveState.hesitation * 3000)
        : 0;
      multiplayerField.recordAnswer(dt, correct, state.streak, hesitation);
    }
    
    if (typeof cognitiveState !== 'undefined') {
      cognitiveState.commitChoice({
        decisionTime: dt,
        commitType: isGap ? 'type' : 'tap',
        choice: choice,
        weight: weight
      });
      // Gap hesitation penalty — typing for >4s without committing = instability
      if (isGap && dt > 4000 && typeof cognitiveState.addInstability === 'function') {
        cognitiveState.addInstability(0.05);
      }
    }
    
    const fast = dt < 800;
    const lowConf = typeof cognitiveState !== 'undefined' ? cognitiveState.confidence < 0.55 : true;
    if (!correct && fast && !lowConf) {
      state.falseConfidenceStreak = (state.falseConfidenceStreak || 0) + 1;
    } else if (correct) {
      state.falseConfidenceStreak = Math.max(0, (state.falseConfidenceStreak || 0) * 0.5);
      if (state.falseConfidenceStreak < 0.3) state.falseConfidenceStreak = 0;
    }
    
    // ── GROOVE UPDATE — single call, no direct axis writes from UI ──
    if (typeof audio !== 'undefined' && audio.groove) {
      const tw = audio.groove.trustWindow || 0;
      audio.groove.onAnswer(correct, dt, weight, tw);
      if (audio.groove.trustWindow > 0 && !correct) audio.groove.trustWindow--;

      if (correct && typeof audio.ride === 'function') audio.ride();
      if (!correct && typeof audio.stumble === 'function') {
        setTimeout(() => audio.stumble(), 400);
      }

      // ── STREAK EVENTS ──────────────────────────────────────────
      if (correct) {
        // Streak 5: one-bar breakbeat drop
        if (state.streak === 5 && typeof audio.triggerBreakbeat === 'function') {
          setTimeout(() => audio.triggerBreakbeat(), 300);
        }
        // Streak 10: Summer Madness siren + warm visual sweep
        if (state.streak === 10 && typeof audio.triggerSiren === 'function') {
          setTimeout(() => {
            audio.triggerSiren();
            document.body.classList.add('siren');
            setTimeout(() => document.body.classList.remove('siren'), 4500);
          }, 400);
        }
        // Sustained peak: enter 8-bar funk mode + visual pocket
        if (audio.groove && audio.groove.virtuoso > 0.75 && audio.groove.lift > 0.8
            && !audio.groove._inFunkMode
            && typeof audio.groove.enterFunkMode === 'function') {
          audio.groove.enterFunkMode();
          document.body.classList.add('funk-mode');
          // Remove after 8 bars (≈ 8 × 4 beats × 60/88s ≈ 21.8s)
          setTimeout(() => document.body.classList.remove('funk-mode'), 22000);
        }
      }
    }
    
    if (typeof cognitiveState !== 'undefined') {
      cognitiveState.setAlignment(correct ? 'aligned' : 'misaligned');
    }
    
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === choice) {
        btn.classList.add(correct ? 'option-correct' : 'option-wrong');
      } else if (btn.textContent === q.answer && !correct) {
        btn.classList.add('option-answer');
      } else {
        btn.classList.add('option-notchosen');
      }
    });
    
    const revealEl = document.getElementById('reveal');
    const instab = typeof cognitiveState !== 'undefined' ? cognitiveState.instability : 0;
    const unstable = instab > 0.75 || (state.falseConfidenceStreak || 0) >= 2;
    
    let revealText = q.afterflavour || '';
    if (!correct && !revealText) revealText = `→ ${q.answer}`;
    if (unstable) revealText += correct ? '  //  That held.' : '  //  You rushed that.';
    
    if (revealEl) {
      revealEl.textContent = revealText;
      revealEl.classList.add(correct ? 'reveal-aligned' : 'reveal-misaligned');
      if (unstable) revealEl.classList.add('reveal-unstable');
    }
    
    const card = document.querySelector('.q-card');
    if (card) {
      card.classList.remove('q-idle');
      card.classList.add(correct ? 'q-aligned' : 'q-misaligned');
    }
    
    const conf = typeof cognitiveState !== 'undefined' ? cognitiveState.confidence : 0.5;
    const basePause = correct ? 1500 : 2400;
    // Mode UI rules: delay_multiplier scales the pause
    const modeMultiplier = (typeof audio !== 'undefined' && audio.groove && audio.groove.modeProfile)
      ? audio.groove.modeProfile.ui_rules.delay_multiplier
      : 1.0;
    // Field feedback delay (multiplayer) — additive on top of mode delay
    const fieldFeedbackMs = (typeof multiplayerField !== 'undefined' && multiplayerField._active)
      ? multiplayerField.getUIParams().feedbackDelay
      : 0;
    const pauseMs = (basePause + (1 - conf) * 900) * modeMultiplier + fieldFeedbackMs;
    
    clearTimeout(this.nextTimeout);
    this.nextTimeout = setTimeout(() => this.renderGame(), pauseMs);
  }

  cancelAnswer() {
    if (typeof audio !== 'undefined' && audio.groove && audio.groove.onDecisionLoss) {
      audio.groove.onDecisionLoss();
    }
  }

  // ─────── END ───────
  showEnd() {
    // Stop groove on pack completion — audio ends with the game
    if (typeof audio !== 'undefined') {
      audio.stop();
      if (audio.groove) audio.groove.stop();
    }
    this.switchScreen('end');
    const stats = state.getStats();
    const el = document.getElementById('endContent');
    if (el) {
      el.innerHTML = `
        <div style="font-family:'DM Mono',monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);margin-bottom:10px">points earned</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:64px;color:var(--tc);margin-bottom:20px;line-height:1">${stats.score}</div>
        <div style="margin-bottom:14px">${stats.correct} / ${stats.total} correct · peak streak ${stats.bestStreak}</div>
        ${stats.accuracy >= 80 ? `<div style="color:var(--tc);margin-bottom:20px">Accuracy ${stats.accuracy}%</div>` : ''}
      `;
    }
    const nextPack = state.getNextPack();
    const nextBtn = document.getElementById('endNextBtn');
    if (nextBtn) {
      if (nextPack) {
        nextBtn.style.display = 'inline-block';
        nextBtn.textContent = `Next: ${nextPack.name}`;
        nextBtn.onclick = () => this.startPack(nextPack);
      } else {
        nextBtn.style.display = 'none';
      }
    }
    // Play Again — rebuild queue, preserve streak
    const againBtn = document.getElementById('endAgainBtn');
    if (againBtn && state.selectedPack) {
      againBtn.style.display = 'inline-block';
      againBtn.textContent = `Again: ${state.selectedPack.name}`;
      againBtn.onclick = () => {
        state.buildQueue();   // fresh queue, streak untouched
        this.renderGame();
      };
    }
  }
}

const ui = new UI();
