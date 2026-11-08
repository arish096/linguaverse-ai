
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";
import { shuffleArray } from "../../utils/gameHelpers";

function createRounds(vocabulary = []) {
  const sentences = vocabulary.filter((item) => {
    return (
      typeof item.example === "string" &&
      item.example.trim().split(/\s+/).length >= 3
    );
  });

  return shuffleArray(sentences)
    .slice(0, 5)
    .map((item, index) => {
      const words = item.example.trim().split(/\s+/);

      return {
        id: index + 1,
        sentence: item.example.trim(),
        meaning: item.exampleMeaning || item.meaning,
        words: shuffleArray(
          words.map((word, wordIndex) => ({
            id: wordIndex,
            text: word,
          }))
        ),
      };
    });
}

export default function SentenceBuilder({
  vocabulary = [],
  selectedLanguage = "Spanish",
  onEarnXP = () => {},
  onPracticeComplete = () => {},
  onBack = () => {},
}) {
  const [rounds] = useState(() => createRounds(vocabulary));
  const [currentRound, setCurrentRound] = useState(0);
  const [selectedWords, setSelectedWords] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const round = rounds[currentRound];

  const selectedIds = selectedWords.map((word) => word.id);

  const remainingWords = round
    ? round.words.filter((word) => !selectedIds.includes(word.id))
    : [];

  const currentSentence = selectedWords
    .map((word) => word.text)
    .join(" ");

  const addWord = (word) => {
    if (feedback) return;

    setSelectedWords((previous) => [...previous, word]);
  };

  const removeWord = (wordId) => {
    if (feedback) return;

    setSelectedWords((previous) =>
      previous.filter((word) => word.id !== wordId)
    );
  };

  const checkAnswer = () => {
    if (!round || selectedWords.length === 0) return;

    const correct =
      currentSentence.toLowerCase() === round.sentence.toLowerCase();

    if (correct) {
      setFeedback("correct");
      setScore((previous) => previous + 1);
    } else {
      setFeedback("wrong");
    }
  };

  const nextRound = () => {
    if (currentRound === rounds.length - 1) {
      const finalScore = score * 6;

      setFinished(true);
      onEarnXP(finalScore);
      onPracticeComplete();
      return;
    }

    setCurrentRound((previous) => previous + 1);
    setSelectedWords([]);
    setFeedback("");
  };

  const tryAgain = () => {
    setSelectedWords([]);
    setFeedback("");
  };

  const restartGame = () => {
    setCurrentRound(0);
    setSelectedWords([]);
    setFeedback("");
    setScore(0);
    setFinished(false);
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.055)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "16px",
    padding: "18px",
  };

  if (rounds.length === 0) {
    return (
      <section style={{ color: "white", padding: "25px 0" }}>
        <button onClick={onBack} style={backStyle}>
          <ArrowLeft size={18} /> Back to Games
        </button>

        <div style={{ ...cardStyle, textAlign: "center", marginTop: "25px" }}>
          <h2>No example sentences available</h2>
          <p style={{ color: "#aaa", lineHeight: 1.7 }}>
            This course does not have enough example sentences yet.
            Add vocabulary examples to unlock Sentence Builder.
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

          <h2 style={{ fontSize: "28px" }}>Game Completed!</h2>

          <p style={{ color: "#aaa" }}>
            You completed the Sentence Builder challenge.
          </p>

          <h1 style={{ color: "#fbbf24", fontSize: "38px" }}>
            {score}/{rounds.length}
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

      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ ...cardStyle, marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
            <span style={{ color: "#c4b5fd" }}>
              {selectedLanguage.toUpperCase()} • SENTENCE BUILDER
            </span>

            <span style={{ color: "#fbbf24" }}>
              {score * 6} XP
            </span>
          </div>

          <div style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#aaa" }}>
              <span>Question {currentRound + 1} of {rounds.length}</span>
              <span>{Math.round(((currentRound + 1) / rounds.length) * 100)}%</span>
            </div>

            <div style={{ height: "7px", background: "#30294b", borderRadius: "10px", marginTop: "9px" }}>
              <div
                style={{
                  height: "100%",
                  width: `${((currentRound + 1) / rounds.length) * 100}%`,
                  background: "#a78bfa",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>

        <div style={{ ...cardStyle, textAlign: "center" }}>
          <h2 style={{ fontSize: "24px" }}>Build the correct sentence</h2>

          <p style={{ color: "#aaa", lineHeight: 1.6 }}>
            Arrange the words in the correct order.
          </p>

          <div
            style={{
              background: "rgba(139,92,246,0.12)",
              padding: "15px",
              borderRadius: "12px",
              margin: "20px 0",
              color: "#ddd",
            }}
          >
            <small style={{ color: "#a78bfa" }}>ENGLISH MEANING</small>
            <p style={{ fontSize: "17px", marginBottom: 0 }}>
              {round.meaning || "Create the correct sentence."}
            </p>
          </div>

          <p style={{ color: "#aaa", fontSize: "13px" }}>
            Your sentence:
          </p>

          <div
            style={{
              minHeight: "75px",
              border: "2px dashed #7555b5",
              borderRadius: "12px",
              padding: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "9px",
            }}
          >
            {selectedWords.length === 0 ? (
              <span style={{ color: "#888" }}>
                Tap words below to build your sentence
              </span>
            ) : (
              selectedWords.map((word) => (
                <button
                  key={word.id}
                  onClick={() => removeWord(word.id)}
                  style={wordButton}
                >
                  {word.text} ×
                </button>
              ))
            )}
          </div>

          <p style={{ color: "#aaa", fontSize: "13px", marginTop: "25px" }}>
            Available words:
          </p>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
            {remainingWords.map((word) => (
              <button
                key={word.id}
                onClick={() => addWord(word)}
                disabled={Boolean(feedback)}
                style={wordButton}
              >
                {word.text}
              </button>
            ))}
          </div>

          {!feedback && (
            <button
              onClick={checkAnswer}
              disabled={selectedWords.length === 0}
              style={{
                ...primaryButton,
                opacity: selectedWords.length === 0 ? 0.5 : 1,
                cursor: selectedWords.length === 0 ? "not-allowed" : "pointer",
              }}
            >
              Check Answer
            </button>
          )}

          {feedback === "correct" && (
            <div style={{ marginTop: "22px", color: "#4ade80" }}>
              <CheckCircle2 size={30} />
              <h3>Excellent! Correct sentence!</h3>
              <p>+6 XP earned</p>
              <button onClick={nextRound} style={primaryButton}>
                {currentRound === rounds.length - 1 ? "Finish Game" : "Next Question"}
              </button>
            </div>
          )}

          {feedback === "wrong" && (
            <div style={{ marginTop: "22px", color: "#f87171" }}>
              <XCircle size={28} />
              <h3>Not quite right. Try again!</h3>
              <button onClick={tryAgain} style={primaryButton}>
                Try Again
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

const wordButton = {
  background: "rgba(139,92,246,0.2)",
  border: "1px solid #7555b5",
  borderRadius: "10px",
  padding: "11px 15px",
  color: "white",
  fontSize: "15px",
  cursor: "pointer",
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
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
};

const secondaryButton = {
  ...primaryButton,
  background: "#30294b",
  display: "flex",
  margin: "12px auto 0",
};
