import { useEffect, useMemo, useState } from "react";
import {
  Brain,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function QuizGame({
  selectedLanguage = "Spanish",
  lessonData = {},
  onEarnXP = () => {},
  onPracticeComplete = () => {},
}) {
  const vocabulary = lessonData[selectedLanguage] || [];

  const questions = useMemo(() => {
    if (!vocabulary.length) return [];

    return vocabulary.map((item, index) => {
      // Other target-language words become incorrect options
      const otherWords = vocabulary
        .filter((_, otherIndex) => otherIndex !== index)
        .map((word) => word.word)
        .filter((word) => word !== item.word);

      const options = [item.word, ...otherWords.slice(0, 3)];

      // Shuffle options
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }

      return {
        english: item.meaning,
        word: item.word,
        pronunciation: item.pronunciation,
        options,
        answer: item.word,
      };
    });
  }, [vocabulary]);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setQuestionIndex(0);
    setSelectedAnswer("");
    setScore(0);
    setFinished(false);
  }, [selectedLanguage]);

  if (!questions.length) {
    return (
      <section className="quiz-section" id="quiz">
        <div className="quiz-card quiz-result">
          <span className="quiz-word-emoji">🌍</span>
          <h2>Quiz coming soon</h2>
          <p>Vocabulary for {selectedLanguage} is being prepared.</p>
        </div>
      </section>
    );
  }

  const question = questions[questionIndex];
  const isCorrect = selectedAnswer === question.answer;
  const progress = ((questionIndex + 1) / questions.length) * 100;

  function chooseAnswer(option) {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    if (option === question.answer) {
      setScore((currentScore) => currentScore + 1);
    }
  }

  function nextQuestion() {
    if (questionIndex === questions.length - 1) {
  setFinished(true);
  onEarnXP(50);
  onPracticeComplete();
  return;
}

    setQuestionIndex((currentIndex) => currentIndex + 1);
    setSelectedAnswer("");
  }

  function restartQuiz() {
    setQuestionIndex(0);
    setSelectedAnswer("");
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <section className="quiz-section" id="quiz">
        <div className="quiz-card quiz-result">
          <div className="quiz-result-icon">
            <Trophy size={38} />
          </div>

          <span className="quiz-eyebrow">QUIZ COMPLETED</span>
          <h2>Great job! 🎉</h2>
          <p>You completed your {selectedLanguage} vocabulary challenge.</p>

          <div className="quiz-score-circle">
            <strong>
              {score}/{questions.length}
            </strong>
            <span>Correct answers</span>
          </div>

          <div className="quiz-result-stats">
            <div>
              <strong>{percentage}%</strong>
              <span>Accuracy</span>
            </div>
            <div>
              <strong>+50 XP</strong>
              <span>XP earned</span>
            </div>
          </div>

          <button className="quiz-primary-btn" onClick={restartQuiz}>
            <RotateCcw size={17} />
            Play Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="quiz-section" id="quiz">
      <div className="quiz-heading">
        <span className="quiz-eyebrow">
          <Brain size={15} />
          DAILY CHALLENGE
        </span>

        <h2>
          Vocabulary <span>Quiz</span>
        </h2>

        <p>Practice your {selectedLanguage} with English translations.</p>
      </div>

      <div className="quiz-card">
        <div className="quiz-top-row">
          <span className="quiz-question-count">
            Question {questionIndex + 1} of {questions.length}
          </span>

          <span className="quiz-xp">
            <Zap size={15} />
            {score * 10} XP
          </span>
        </div>

        <div className="quiz-progress-track">
          <div style={{ width: `${progress}%` }} />
        </div>

        <div className="quiz-question">
          <span className="quiz-word-emoji">🌍</span>
          <span className="quiz-small-label">
            HOW DO YOU SAY THIS IN {selectedLanguage.toUpperCase()}?
          </span>

          <h3>{question.english}</h3>

          {question.pronunciation && <p>{question.pronunciation}</p>}
        </div>

        <div className="quiz-options">
          {question.options.map((option, index) => {
            let optionClass = "";

            if (selectedAnswer) {
              if (option === question.answer) {
                optionClass = "correct";
              } else if (option === selectedAnswer) {
                optionClass = "incorrect";
              }
            }

            return (
              <button
                key={`${question.english}-${option}`}
                className={`quiz-option ${optionClass}`}
                onClick={() => chooseAnswer(option)}
                disabled={Boolean(selectedAnswer)}
              >
                <span className="quiz-option-letter">
                  {String.fromCharCode(65 + index)}
                </span>

                <span>{option}</span>

                {selectedAnswer && option === question.answer && (
                  <CheckCircle2 className="quiz-option-status" size={18} />
                )}

                {selectedAnswer &&
                  option === selectedAnswer &&
                  option !== question.answer && (
                    <XCircle className="quiz-option-status" size={18} />
                  )}
              </button>
            );
          })}
        </div>

        {selectedAnswer && (
          <div className={`quiz-feedback ${isCorrect ? "success" : "error"}`}>
            {isCorrect ? (
              <>
                <CheckCircle2 size={19} />
                <div>
                  <strong>Correct answer!</strong>
                  <span>Nice work. You earned 10 XP.</span>
                </div>
              </>
            ) : (
              <>
                <XCircle size={19} />
                <div>
                  <strong>Not quite!</strong>
                  <span>
                    “{question.english}” in {selectedLanguage} is “
                    {question.answer}”.
                  </span>
                </div>
              </>
            )}
          </div>
        )}

        <button
          className="quiz-primary-btn"
          onClick={nextQuestion}
          disabled={!selectedAnswer}
        >
          {questionIndex === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
          <ArrowRight size={17} />
        </button>
      </div>
    </section>
  );
}