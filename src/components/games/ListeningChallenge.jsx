
import { useState } from "react";
import {
  ArrowLeft,
  Headphones,
  Volume2,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
} from "lucide-react";
import { shuffleArray } from "../../utils/gameHelpers";

function createQuestions(vocabulary = []) {
  const validWords = vocabulary.filter(
    (item) => item.word?.trim() && item.meaning?.trim()
  );

  return shuffleArray(validWords)
    .slice(0, 5)
    .map((item) => {
      const wrongOptions = shuffleArray(
        validWords.filter((other) => other.word !== item.word)
      )
        .slice(0, 3)
        .map((other) => other.word);

      return {
        word: item.word,
        meaning: item.meaning,
        options: shuffleArray([item.word, ...wrongOptions]),
      };
    });
}

export default function ListeningChallenge({
  vocabulary = [],
  selectedLanguage = "Spanish",
  onEarnXP = () => {},
  onPracticeComplete = () => {},
  onBack = () => {},
}) {
  const [questions] = useState(() => createQuestions(vocabulary));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  const languageVoices = {
    Spanish: "es-ES",
    French: "fr-FR",
    English: "en-US",
    German: "de-DE",
    Italian: "it-IT",
    Portuguese: "pt-PT",
    Japanese: "ja-JP",
    Korean: "ko-KR",
    Hindi: "hi-IN",
    Turkish: "tr-TR",
  };

  const speakWord = () => {
    if (!question || !("speechSynthesis" in window)) {
      alert("Speech is not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(question.word);
    utterance.lang = languageVoices[selectedLanguage] || "en-US";
    utterance.rate = 0.85;

    window.speechSynthesis.speak(utterance);
  };

  const checkAnswer = () => {
    if (!selected || feedback) return;

    if (selected === question.word) {
      setFeedback("correct");
      setScore((previous) => previous + 1);
    } else {
      setFeedback("wrong");
    }
  };

  const nextQuestion = () => {
    if (current === questions.length - 1) {
      setFinished(true);
      onEarnXP(score * 6);
      onPracticeComplete();
      return;
    }

    setCurrent((previous) => previous + 1);
    setSelected("");
    setFeedback("");
  };

  const restartGame = () => {
    setCurrent(0);
    setSelected("");
    setFeedback("");
    setScore(0);
    setFinished(false);
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
          <h2>Not enough vocabulary!</h2>
          <p style={{ color: "#aaa" }}>
            Add vocabulary words with English meanings to play.
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

          <h2>Listening Completed!</h2>

          <h1 style={{ color: "#fbbf24", fontSize: "38px" }}>
            {score}/{questions.length}
          </h1>

          <p style={{ color: "#c4b5fd" }}>
            XP Earned: {score * 6}
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

  return (
    <section style={{ color: "white", padding: "24px 0" }}>
      <button onClick={onBack} style={backStyle}>
        <ArrowLeft size={18} /> Back to Game Arena
      </button>

      <div style={{ maxWidth: "650px", margin: "0 auto" }}>
        <div style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", flexWrap: "wrap" }}>
            <span style={{ color: "#c4b5fd" }}>
              {selectedLanguage.toUpperCase()} • LISTENING
            </span>

            <span style={{ color: "#fbbf24" }}>
              {score * 6} XP
            </span>
          </div>

          <h2>Listen and identify the word</h2>

          <p style={{ color: "#aaa" }}>
            Question {current + 1} of {questions.length}
          </p>

          <div style={{ textAlign: "center", padding: "25px 10px" }}>
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "rgba(139,92,246,0.18)",
                display: "grid",
                placeItems: "center",
                margin: "0 auto 20px",
                color: "#c4b5fd",
              }}
            >
              <Headphones size={45} />
            </div>

            <button onClick={speakWord} style={audioButton}>
              <Volume2 size={22} /> Play Audio
            </button>

            <p style={{ color: "#aaa", fontSize: "13px" }}>
              Listen carefully and choose the word you hear.
            </p>
          </div>

          <h3 style={{ fontSize: "16px" }}>
            Which word did you hear?
          </h3>

          <div style={{ display: "grid", gap: "11px" }}>
            {question.options.map((option, index) => {
              const isCorrect = feedback && option === question.word;
              const isWrong = feedback === "wrong" && option === selected;

              return (
                <button
                  key={`${option}-${index}`}
                  onClick={() => !feedback && setSelected(option)}
                  disabled={Boolean(feedback)}
                  style={{
                    padding: "15px",
                    borderRadius: "11px",
                    border: isCorrect
                      ? "2px solid #22c55e"
                      : isWrong
                      ? "2px solid #ef4444"
                      : selected === option
                      ? "2px solid #a78bfa"
                      : "1px solid rgba(255,255,255,0.12)",
                    background: isCorrect
                      ? "rgba(34,197,94,0.15)"
                      : isWrong
                      ? "rgba(239,68,68,0.15)"
                      : selected === option
                      ? "rgba(139,92,246,0.2)"
                      : "rgba(255,255,255,0.05)",
                    color: "white",
                    cursor: feedback ? "default" : "pointer",
                    textAlign: "left",
                    fontSize: "15px",
                  }}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {!feedback && (
            <button
              onClick={checkAnswer}
              disabled={!selected}
              style={{
                ...primaryButton,
                width: "100%",
                opacity: selected ? 1 : 0.5,
              }}
            >
              Check Answer
            </button>
          )}

          {feedback === "correct" && (
            <div style={{ color: "#4ade80", marginTop: "20px" }}>
              <CheckCircle2 size={27} />
              <h3>Correct! Well done!</h3>
              <p>+6 XP</p>
              <button onClick={nextQuestion} style={primaryButton}>
                {current === questions.length - 1 ? "Finish Game" : "Next Question"}
              </button>
            </div>
          )}

          {feedback === "wrong" && (
            <div style={{ color: "#f87171", marginTop: "20px" }}>
              <XCircle size={27} />
              <h3>Incorrect answer!</h3>
              <p style={{ color: "#aaa" }}>
                Correct word: {question.word}
              </p>
              <button onClick={nextQuestion} style={primaryButton}>
                {current === questions.length - 1 ? "Finish Game" : "Next Question"}
              </button>
            </div>
          )}
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

const audioButton = {
  background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
  border: "none",
  borderRadius: "30px",
  padding: "15px 25px",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
};
