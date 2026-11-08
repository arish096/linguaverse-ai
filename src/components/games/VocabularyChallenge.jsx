
import { useState } from "react";
import {
  ArrowLeft,
  Trophy,
  Zap,
  CheckCircle2,
  XCircle,
  RotateCcw,
} from "lucide-react";
import { shuffleArray } from "../../utils/gameHelpers";

function createQuestions(vocabulary) {
  const validWords = vocabulary.filter(
    (item) => item.word && item.meaning
  );

  const shuffled = shuffleArray(validWords).slice(0, 5);

  return shuffled.map((item) => {
    const otherOptions = shuffleArray(
      validWords.filter(
        (word) => word.meaning !== item.meaning
      )
    )
      .slice(0, 3)
      .map((word) => word.meaning);

    return {
      word: item.word,
      answer: item.meaning,
      options: shuffleArray([
        item.meaning,
        ...otherOptions,
      ]),
    };
  });
}

export default function VocabularyChallenge({
  vocabulary = [],
  selectedLanguage = "Spanish",
  onEarnXP = () => {},
  onPracticeComplete = () => {},
  onBack = () => {},
}) {
  const [questions, setQuestions] = useState(
    () => createQuestions(vocabulary)
  );

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[questionIndex];

  const handleNext = () => {
    if (!selectedAnswer) return;

    const isCorrect =
      selectedAnswer === currentQuestion.answer;

    const newScore = score + (isCorrect ? 1 : 0);

    setScore(newScore);
    setSelectedAnswer(null);

    if (questionIndex === questions.length - 1) {
      setFinished(true);

      if (newScore > 0) {
        onEarnXP(newScore * 5);
      }

      onPracticeComplete();
    } else {
      setQuestionIndex((previous) => previous + 1);
    }
  };

  const restartGame = () => {
    setQuestions(createQuestions(vocabulary));
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };

  const buttonStyle = {
    padding: "15px",
    borderRadius: "13px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "15px",
    textAlign: "left",
  };

  if (questions.length === 0) {
    return (
      <section style={{ color: "#fff", padding: "25px" }}>
        <button onClick={onBack} style={buttonStyle}>
          <ArrowLeft size={16} /> Back to Arena
        </button>
        <h2>Vocabulary Challenge</h2>
        <p style={{ color: "#aaa" }}>
          No vocabulary available for {selectedLanguage} yet.
        </p>
      </section>
    );
  }

  if (finished) {
    return (
      <section
        style={{
          color: "#fff",
          maxWidth: "600px",
          margin: "30px auto",
          textAlign: "center",
          padding: "35px 20px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "20px",
        }}
      >
        <Trophy size={55} color="#fbbf24" />

        <h2 style={{ fontSize: "30px" }}>
          Challenge Completed!
        </h2>

        <p style={{ color: "#aaa" }}>
          You scored {score} out of {questions.length}.
        </p>

        <h1 style={{ color: "#fbbf24", fontSize: "42px" }}>
          {score * 5} XP
        </h1>

        <p style={{ color: "#aaa" }}>
          Correct answers: {score}
        </p>

        <button
          onClick={restartGame}
          style={{
            ...buttonStyle,
            background: "#7c3aed",
            textAlign: "center",
            marginRight: "10px",
          }}
        >
          <RotateCcw size={16} /> Play Again
        </button>

        <button
          onClick={onBack}
          style={buttonStyle}
        >
          Back to Arena
        </button>
      </section>
    );
  }

  return (
    <section
      style={{
        color: "#fff",
        maxWidth: "650px",
        margin: "25px auto",
        padding: "20px 0",
      }}
    >
      <button
        onClick={onBack}
        style={{
          ...buttonStyle,
          marginBottom: "25px",
          padding: "10px 14px",
        }}
      >
        <ArrowLeft size={16} /> Back to Arena
      </button>

      <div style={{ textAlign: "center" }}>
        <span style={{ color: "#ec4899", fontSize: "13px" }}>
          VOCABULARY CHALLENGE
        </span>

        <h2 style={{ fontSize: "28px" }}>
          Choose the Correct Meaning
        </h2>

        <p style={{ color: "#aaa" }}>
          {selectedLanguage} • Question {questionIndex + 1} of{" "}
          {questions.length}
        </p>
      </div>

      <div
        style={{
          background: "rgba(255,255,255,0.1)",
          height: "8px",
          borderRadius: "20px",
          overflow: "hidden",
          margin: "25px 0",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${
              ((questionIndex + 1) / questions.length) * 100
            }%`,
            background: "#ec4899",
          }}
        />
      </div>

      <div
        style={{
          background: "rgba(236,72,153,0.12)",
          border: "1px solid rgba(236,72,153,0.3)",
          borderRadius: "18px",
          padding: "30px 15px",
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        <Zap color="#fbbf24" size={22} />

        <h1 style={{ fontSize: "34px", margin: "12px 0" }}>
          {currentQuestion.word}
        </h1>

        <p style={{ color: "#aaa" }}>
          What does this word mean?
        </p>
      </div>

      <div style={{ display: "grid", gap: "12px" }}>
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedAnswer === option;

          return (
            <button
              key={`${option}-${index}`}
              onClick={() => setSelectedAnswer(option)}
              style={{
                ...buttonStyle,
                borderColor: isSelected
                  ? "#ec4899"
                  : "rgba(255,255,255,0.12)",
                background: isSelected
                  ? "rgba(236,72,153,0.18)"
                  : "rgba(255,255,255,0.05)",
              }}
            >
              <span style={{ color: "#ec4899", marginRight: "12px" }}>
                {["A", "B", "C", "D"][index]}.
              </span>
              {option}
            </button>
          );
        })}
      </div>

      <button
        disabled={!selectedAnswer}
        onClick={handleNext}
        style={{
          width: "100%",
          padding: "16px",
          border: "none",
          borderRadius: "13px",
          marginTop: "25px",
          background: selectedAnswer ? "#9333ea" : "#444",
          color: "#fff",
          fontWeight: "bold",
          cursor: selectedAnswer ? "pointer" : "not-allowed",
        }}
      >
        {questionIndex === questions.length - 1
          ? "Finish Challenge"
          : "Next Question →"}
      </button>
    </section>
  );
}
