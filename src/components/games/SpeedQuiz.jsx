
import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  Clock,
  Trophy,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Zap,
} from "lucide-react";
import { shuffleArray } from "../../utils/gameHelpers";

function createQuestions(vocabulary = []) {
  const validWords = vocabulary.filter(
    (item) => item.word?.trim() && item.meaning?.trim()
  );

  return shuffleArray(validWords).map((item) => {
    const wrongOptions = shuffleArray(
      validWords.filter((other) => other.word !== item.word)
    )
      .slice(0, 3)
      .map((other) => other.meaning);

    return {
      word: item.word,
      answer: item.meaning,
      options: shuffleArray([item.meaning, ...wrongOptions]),
    };
  });
}

export default function SpeedQuiz({
  vocabulary = [],
  selectedLanguage = "Spanish",
  onEarnXP = () => {},
  onPracticeComplete = () => {},
  onBack = () => {},
}) {
  const [questions] = useState(() => createQuestions(vocabulary));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [finished, setFinished] = useState(false);

  const scoreRef = useRef(0);
  const currentRef = useRef(0);
  const finishedRef = useRef(false);

  useEffect(() => {
    if (finished || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          clearInterval(timer);
          finishedRef.current = true;
          setFinished(true);
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [finished, questions.length]);

  useEffect(() => {
    if (finished && !finishedRef.current) {
      finishedRef.current = true;
    }

    if (finished) {
      onEarnXP(scoreRef.current * 5);
      onPracticeComplete();
    }
  }, [finished]);

  const finishGame = () => {
    if (finishedRef.current) return;

    finishedRef.current = true;
    setFinished(true);
  };

  const handleAnswer = (option) => {
    if (finished || selected) return;

    setSelected(option);

    if (option === questions[current].answer) {
      const nextScore = scoreRef.current + 1;
      scoreRef.current = nextScore;
      setScore(nextScore);
    }

    setTimeout(() => {
      if (currentRef.current >= questions.length - 1) {
        finishGame();
      } else {
        currentRef.current += 1;
        setCurrent(currentRef.current);
        setSelected("");
      }
    }, 350);
  };

  const restartGame = () => {
    window.location.reload();
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.055)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "16px",
    padding: "22px",
  };

  if (questions.length === 0) {
    return (
      <section style={{ color: "white", padding: "25px 0" }}>
        <button onClick={onBack} style={backStyle}>
          <ArrowLeft size={18} /> Back to Games
        </button>

        <div style={{ ...cardStyle, textAlign: "center" }}>
          <h2>No quiz questions available</h2>
          <p style={{ color: "#aaa" }}>
            Add vocabulary words with English meanings to play Speed Quiz.
          </p>
        </div>
      </section>
    );
  }

  if (finished) {
    return (
      <section style={{ color: "white", padding: "25px 0" }}>
        <div style={{ ...cardStyle, maxWidth: "550px", margin: "30px auto", textAlign: "center" }}>
          <Trophy size={55} color="#fbbf24" />

          <h2 style={{ fontSize: "28px" }}>Time's Up!</h2>

          <h1 style={{ color: "#fbbf24", fontSize: "42px" }}>
            {score}/{questions.length}
          </h1>

          <p style={{ color: "#c4b5fd" }}>
            XP Earned: {score * 5}
          </p>

          <p style={{ color: "#aaa" }}>
            You answered {currentRef.current + 1} questions.
          </p>

          <button onClick={restartGame} style={primaryButton}>
            <RotateCcw size={17} /> Play Again
          </button>

          <button onClick={onBack} style={secondaryButton}>
            Back to Game Arena
          </button>
        </div>
      </section>
    );
  }

  const question = questions[current];

  return (
    <section style={{ color: "white", padding: "24px 0" }}>
      <button onClick={onBack} style={backStyle}>
        <ArrowLeft size={18} /> Back to Game Arena
      </button>

      <div style={{ maxWidth: "650px", margin: "0 auto" }}>
        <div style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <span style={{ color: "#c4b5fd" }}>
              {selectedLanguage.toUpperCase()} • SPEED QUIZ
            </span>

            <span style={{ color: "#fbbf24" }}>
              <Zap size={15} /> {score * 5} XP
            </span>
          </div>

          <div style={{ textAlign: "center", margin: "25px 0" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: timeLeft <= 10
                  ? "rgba(239,68,68,0.2)"
                  : "rgba(139,92,246,0.2)",
                color: timeLeft <= 10 ? "#f87171" : "#c4b5fd",
                padding: "12px 22px",
                borderRadius: "30px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              <Clock size={22} />
              00:{String(timeLeft).padStart(2, "0")}
            </div>
          </div>

          <div style={{ height: "7px", background: "#30294b", borderRadius: "10px", marginBottom: "22px" }}>
            <div
              style={{
                height: "100%",
                width: `${(timeLeft / 60) * 100}%`,
                background: timeLeft <= 10 ? "#ef4444" : "#8b5cf6",
                borderRadius: "10px",
                transition: "width 1s linear",
              }}
            />
          </div>

          <p style={{ color: "#aaa", fontSize: "13px" }}>
            Question {current + 1} • Answer quickly!
          </p>

          <h2 style={{ fontSize: "25px", margin: "20px 0" }}>
            What is the meaning of:
          </h2>

          <div
            style={{
              background: "rgba(139,92,246,0.15)",
              padding: "20px",
              borderRadius: "13px",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#ddd",
              marginBottom: "22px",
            }}
          >
            {question.word}
          </div>

          <div style={{ display: "grid", gap: "12px" }}>
            {question.options.map((option, index) => (
              <button
                key={`${option}-${index}`}
                onClick={() => handleAnswer(option)}
                disabled={Boolean(selected)}
                style={{
                  padding: "15px",
                  borderRadius: "11px",
                  border: selected === option
                    ? option === question.answer
                      ? "2px solid #22c55e"
                      : "2px solid #ef4444"
                    : "1px solid rgba(255,255,255,0.12)",
                  background: selected === option
                    ? option === question.answer
                      ? "rgba(34,197,94,0.15)"
                      : "rgba(239,68,68,0.15)"
                    : "rgba(255,255,255,0.05)",
                  color: "white",
                  cursor: selected ? "default" : "pointer",
                  textAlign: "left",
                  fontSize: "15px",
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const backStyle = {
  background: "transparent",
  border: "none",
  color: "#c4b5fd",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "22px",
  fontSize: "15px",
};

const primaryButton = {
  background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
  border: "none",
  borderRadius: "10px",
  padding: "13px 22px",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "20px",
};

const secondaryButton = {
  ...primaryButton,
  background: "#30294b",
  display: "block",
  margin: "12px auto 0",
};
