// ═══════════════════════════════════════════════════════════════
// TENSE AF — STATE MANAGEMENT
// Centralized state. No DOM. Pure data transformations.
// ═══════════════════════════════════════════════════════════════

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

class GameState {
  constructor() {
    this.screen = "home"; // home | picker | game | end
    this.selectedTier = null;
    this.selectedPack = null;
    this.selectedRounds = new Set(); // round IDs
    this.queue = []; // current question queue
    this.qIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.correct = 0;
    this.mistakes = {}; // tense -> count
    this.timerActive = false;
    
    // Track all questions ever asked across entire session
    this.askedQuestions = new Set(); // stores qid of every question asked
  }

  reset() {
    this.qIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.correct = 0;
    this.mistakes = {};
    this.queue = [];
    this.initialQueueLength = 0;
  }

  selectPack(pack) {
    this.selectedPack = pack;
    this.selectedRounds = new Set(pack.rounds.map(r => r.id));
  }

  buildQueue() {
    if (!this.selectedPack) return;
    
    const allQuestions = [];
    
    // Add regular questions from selected rounds
    this.selectedPack.rounds.forEach(round => {
      if (this.selectedRounds.has(round.id)) {
        round.questions.forEach(q => {
          // Only include questions NOT yet asked
          if (!this.askedQuestions.has(q.qid)) {
            allQuestions.push({
              ...q,
              _roundId: round.id,
              _roundRule: round.rule || '',
              _roundLabel: round.label || '',
              type: q.type || 'mcq',
              options: q.options ? shuffle(q.options) : undefined
            });
          }
        });
      }
    });

    // Add boss questions (gap-fill, rare)
    if (this.selectedPack.bossQuestions && this.selectedPack.bossQuestions.length > 0) {
      this.selectedPack.bossQuestions.forEach(q => {
        if (!this.askedQuestions.has(q.qid)) {
          allQuestions.push({
            ...q,
            type: q.type || 'boss',
            options: q.options ? shuffle(q.options) : undefined
          });
        }
      });
    }
    
    // If no new questions, reset the asked set (cycle through)
    if (allQuestions.length === 0) {
      this.askedQuestions = new Set();
      this.selectedPack.rounds.forEach(round => {
        if (this.selectedRounds.has(round.id)) {
          round.questions.forEach(q => {
            allQuestions.push({
              ...q,
              type: q.type || 'mcq',
              options: q.options ? shuffle(q.options) : undefined
            });
          });
        }
      });
      if (this.selectedPack.bossQuestions) {
        this.selectedPack.bossQuestions.forEach(q => {
          allQuestions.push({
            ...q,
            type: q.type || 'boss',
            options: q.options ? shuffle(q.options) : undefined
          });
        });
      }
    }
    
    // Shuffle question order so you never see the same sequence twice
    // Cap session at 12 questions — enough for a meaningful run, not exhausting
    const SESSION_MAX = 15;
    this.queue = shuffle(allQuestions).slice(0, SESSION_MAX);
    this.initialQueueLength = this.queue.length;
    
    this.qIndex = 0;
  }

  getCurrentQuestion() {
    if (this.qIndex >= this.queue.length) return null;
    return this.queue[this.qIndex];
  }

  submitAnswer(choice, correct) {
    const currentQuestion = this.getCurrentQuestion();
    if (currentQuestion) {
      // Mark this question as asked
      this.askedQuestions.add(currentQuestion.qid);
    }

    if (correct) {
      this.streak++;
      this.correct++;
      this.score += 20;
      if (this.streak > this.bestStreak) this.bestStreak = this.streak;
    } else {
      this.streak = 0;
    }
    this.qIndex++;
  }

  recordMistake(tenseId) {
    this.mistakes[tenseId] = (this.mistakes[tenseId] || 0) + 1;
  }

  getProgress() {
    const total = this.initialQueueLength || this.queue.length;
    return {
      current: this.qIndex,
      total: total,
      percentage: total ? Math.round((this.qIndex / total) * 100) : 0
    };
  }

  getStats() {
    const total = this.initialQueueLength || this.queue.length;
    const accuracy = total ? Math.round((this.correct / total) * 100) : 0;
    return {
      score: this.score,
      streak: this.streak,
      bestStreak: this.bestStreak,
      correct: this.correct,
      total: total,
      accuracy: accuracy
    };
  }

  getNextPack() {
    // Find next pack in same tier after current pack
    if (!this.selectedPack || !this.selectedTier) return null;

    const packsInTier = PACKS.filter(p => p.tier === this.selectedTier);
    const currentIndex = packsInTier.findIndex(p => p.id === this.selectedPack.id);
    
    if (currentIndex === -1 || currentIndex >= packsInTier.length - 1) {
      return null; // no next pack
    }
    
    return packsInTier[currentIndex + 1];
  }
}
