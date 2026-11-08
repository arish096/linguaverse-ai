
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
  Zap,
  Shuffle,
} from "lucide-react";

export default function WordMatch({
  vocabulary = [],
  selectedLanguage = "Spanish",
  onEarnXP = () => {},
  onPracticeComplete = () => {},
  onBack = () => {},
}) {
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState(null);
  const [matched, setMatched] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [finished, setFinished] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [gameKey, setGameKey] = useState(0);

  const startGame = () => {
    const validWords = vocabulary.filter(
      (item) => item.word && item.meaning
    );

    const words = [...validWords]
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);

    const wordCards = words.map((item, index) => ({
      id: `word-${index}`,
      pairId: index,
      text: item.word,
      type: "word",
    }));

    const meaningCards = words.map((item, index) => ({
      id: `meaning-${index}`,
      pairId: index,
      text: item.meaning,
      type: "meaning",
    }));

    setCards(
      [...wordCards, ...meaningCards].sort(
        () => Math.random() - 0.5
      )
    );

    setSelected(null);
    setMatched([]);
    setMistakes(0);
    setFinished(false);
    setFeedback("");
  };

  useEffect(() => {
    startGame();
  }, [gameKey]);

  useEffect(() => {
    if (cards.length > 0 && matched.length === cards.length / 2) {
      if (!finished) {
        setFinished(true);
        onEarnXP(20);
        onPracticeComplete();
      }
    }
  }, [matched, cards, finished, onEarnXP, onPracticeComplete]);

  const handleCardClick = (card) => {
    if (
      matched.includes(card.pairId) ||
      finished
    ) {
      return;
    }

    if (!selected) {
      setSelected(card);
      setFeedback("");
      return;
    }

    if (selected.id === card.id) {
      setSelected(null);
      return;
    }

    if (selected.type === card.type) {
      setSelected(card);
      return;
    }

    if (selected.pairId === card.pairId) {
      setMatched((previous) => [
        ...previous,
        card.pairId,
      ]);
      setSelected(null);
      setFeedback("Correct match! Great job.");
    } else {
      setMistakes((previous) => previous + 1);
      setFeedback("Not a match. Try again!");
      setSelected(null);
    }
  };

  const restartGame = () => {
    setGameKey((previous) => previous + 1);
  };

  const buttonStyle = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#fff",
    borderRadius: "14px",
    padding: "16px 10px",
    minHeight: "85px",
    cursor: "pointer",
    fontSize: "14px",
    lineHeight: 1.5,
    overflowWrap: "anywhere",
    transition: "0.2s",
  };

  if (!vocabulary.length) {
    return (
      <section style={{ color: "#fff", padding: "30px 10px" }}>
        <button onClick={onBack} style={{ ...buttonStyle, minHeight: "auto" }}>
          <ArrowLeft size={16} /> Back
        </button>
        <h2>Word Match</h2>
        <p style={{ color: "#aaa" }}>
          Vocabulary for {selectedLanguage} is not available yet.
        </p>
      </section>
    );
  }

  if (finished) {
    const accuracy = Math.round(
      (matched.length / (matched.length + mistakes)) * 100
    );

    return (
      <section
        style={{
          color: "#fff",
          maxWidth: "600px",
          margin: "30px auto",
          textAlign: "center",
          padding: "30px 20px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "22px",
        }}
      >
        <Trophy size={55} color="#fbbf24" />

        <h2 style={{ fontSize: "30px", marginTop: "15px" }}>
          Amazing Work!
        </h2>

        <p style={{ color: "#aaa" }}>
          You matched all {matched.length} word pairs.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "35px",
            margin: "30px 0",
          }}
        >
          <div>
            <h2>{matched.length}</h2>
            <span style={{ color: "#aaa" }}>Matches</span>
          </div>

          <div>
            <h2>{accuracy}%</h2>
            <span style={{ color: "#aaa" }}>Accuracy</span>
          </div>

          <div>
            <h2 style={{ color: "#fbbf24" }}>+20</h2>
            <span style={{ color: "#aaa" }}>XP</span>
          </div>
        </div>

        <button
          onClick={restartGame}
          style={{
            ...buttonStyle,
            background: "#7c3aed",
            padding: "14px 25px",
            minHeight: "auto",
            marginRight: "10px",
          }}
        >
          <RotateCcw size={16} /> Play Again
        </button>

        <button
          onClick={onBack}
          style={{
            ...buttonStyle,
            minHeight: "auto",
            padding: "14px 25px",
          }}
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
        padding: "25px 0",
        maxWidth: "850px",
        margin: "0 auto",
      }}
    >
      <button
        onClick={onBack}
        style={{
          ...buttonStyle,
          minHeight: "auto",
          padding: "10px 15px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "25px",
        }}
      >
        <ArrowLeft size={17} /> Back to Arena
      </button>

      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <span style={{ color: "#a78bfa", fontSize: "13px" }}>
          <Shuffle size={15} style={{ verticalAlign: "middle" }} /> WORD MATCH
        </span>

        <h2 style={{ fontSize: "30px", margin: "10px 0" }}>
          Match the Words!
        </h2>

        <p style={{ color: "#aaa" }}>
          Match each {selectedLanguage} word with its meaning.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <span>Matched: {matched.length} / {cards.length / 2}</span>
        <span>Mistakes: {mistakes}</span>
        <span style={{ color: "#fbbf24" }}>
          <Zap size={15} /> 20 XP
        </span>
      </div>

      <div
        style={{
          height: "8px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "20px",
          overflow: "hidden",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${
              (matched.length / (cards.length / 2)) * 100
            }%`,
            background: "#8b5cf6",
            transition: "width 0.3s",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "12px",
        }}
      >
        {cards.map((card) => {
          const isMatched = matched.includes(card.pairId);
          const isSelected = selected?.id === card.id;

          return (
            <button
              key={card.id}
              disabled={isMatched}
              onClick={() => handleCardClick(card)}
              style={{
                ...buttonStyle,
                borderColor: isMatched
                  ? "#10b981"
                  : isSelected
                  ? "#a78bfa"
                  : "rgba(255,255,255,0.12)",
                background: isMatched
                  ? "rgba(16,185,129,0.15)"
                  : isSelected
                  ? "rgba(139,92,246,0.2)"
                  : "rgba(255,255,255,0.05)",
                opacity: isMatched ? 0.6 : 1,
              }}
            >
              {isMatched && (
                <CheckCircle2
                  size={15}
                  style={{ marginRight: "5px", verticalAlign: "middle" }}
                />
              )}

              {card.text}
            </button>
          );
        })}
      </div>

      {feedback && (
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: feedback.startsWith("Correct")
              ? "#34d399"
              : "#f87171",
          }}
        >
          {feedback.startsWith("Correct") ? (
            <CheckCircle2 size={16} />
          ) : (
            <XCircle size={16} />
          )}{" "}
          {feedback}
        </p>
      )}
    </section>
  );
}
