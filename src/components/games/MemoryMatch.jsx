
import { useState } from "react";
import { ArrowLeft, RotateCcw, Trophy, CheckCircle2 } from "lucide-react";
import { shuffleArray } from "../../utils/gameHelpers";

function createCards(vocabulary = []) {
  const validWords = vocabulary.filter(
    (item) => item.word?.trim() && item.meaning?.trim()
  );

  const uniqueWords = [];
  const seen = new Set();

  validWords.forEach((item) => {
    const key = item.word.trim().toLowerCase();

    if (!seen.has(key)) {
      seen.add(key);
      uniqueWords.push(item);
    }
  });

  const pairs = shuffleArray(uniqueWords).slice(0, 6);

  const cards = [];

  pairs.forEach((item, index) => {
    cards.push({
      id: `word-${index}`,
      pairId: index,
      text: item.word,
      type: "word",
    });

    cards.push({
      id: `meaning-${index}`,
      pairId: index,
      text: item.meaning,
      type: "meaning",
    });
  });

  return shuffleArray(cards);
}

export default function MemoryMatch({
  vocabulary = [],
  selectedLanguage = "Spanish",
  onEarnXP = () => {},
  onPracticeComplete = () => {},
  onBack = () => {},
}) {
  const [cards] = useState(() => createCards(vocabulary));
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleCardClick = (card) => {
    if (
      finished ||
      matchedCards.includes(card.id) ||
      selectedCards.some((item) => item.id === card.id) ||
      selectedCards.length === 2
    ) {
      return;
    }

    const nextSelection = [...selectedCards, card];
    setSelectedCards(nextSelection);

    if (nextSelection.length === 2) {
      setMoves((previous) => previous + 1);

      const [first, second] = nextSelection;

      if (first.pairId === second.pairId && first.type !== second.type) {
        const nextMatched = [...matchedCards, first.id, second.id];

        setMatchedCards(nextMatched);
        setSelectedCards([]);

        if (nextMatched.length === cards.length) {
          setFinished(true);
          onEarnXP(20);
          onPracticeComplete();
        }
      } else {
        setTimeout(() => {
          setSelectedCards([]);
        }, 850);
      }
    }
  };

  const restartGame = () => {
    window.location.reload();
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.055)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "16px",
    padding: "18px",
  };

  if (cards.length < 4) {
    return (
      <section style={{ color: "white", padding: "25px 0" }}>
        <button onClick={onBack} style={backStyle}>
          <ArrowLeft size={18} /> Back to Games
        </button>

        <div style={{ ...cardStyle, textAlign: "center" }}>
          <h2>Not enough vocabulary!</h2>
          <p style={{ color: "#aaa" }}>
            Add at least two vocabulary words with English meanings
            to play Memory Match.
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

          <h2 style={{ fontSize: "28px" }}>Perfect Match!</h2>

          <CheckCircle2 size={35} color="#4ade80" />

          <p style={{ color: "#aaa" }}>
            You found all matching pairs!
          </p>

          <h1 style={{ color: "#fbbf24", fontSize: "38px" }}>
            +20 XP
          </h1>

          <p style={{ color: "#aaa" }}>
            Total moves: {moves}
          </p>

          <button onClick={onBack} style={primaryButton}>
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
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <span style={{ color: "#c4b5fd" }}>
              {selectedLanguage.toUpperCase()} • MEMORY MATCH
            </span>

            <span style={{ color: "#fbbf24" }}>
              {matchedCards.length / 2} / {cards.length / 2} Pairs
            </span>
          </div>

          <h2 style={{ marginBottom: "5px" }}>Find the matching pairs</h2>

          <p style={{ color: "#aaa", fontSize: "14px" }}>
            Match each word with its correct English meaning.
          </p>

          <p style={{ color: "#c4b5fd" }}>
            Moves: {moves}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "12px",
          }}
        >
          {cards.map((card) => {
            const isSelected = selectedCards.some(
              (item) => item.id === card.id
            );

            const isMatched = matchedCards.includes(card.id);
            const isVisible = isSelected || isMatched;

            return (
              <button
                key={card.id}
                onClick={() => handleCardClick(card)}
                disabled={isMatched}
                style={{
                  minHeight: "105px",
                  padding: "12px 7px",
                  borderRadius: "14px",
                  border: isMatched
                    ? "1px solid #22c55e"
                    : isSelected
                    ? "2px solid #a78bfa"
                    : "1px solid rgba(255,255,255,0.12)",
                  background: isMatched
                    ? "rgba(34,197,94,0.15)"
                    : isSelected
                    ? "rgba(139,92,246,0.25)"
                    : "rgba(255,255,255,0.06)",
                  color: isMatched ? "#86efac" : "white",
                  cursor: isMatched ? "default" : "pointer",
                  fontSize: "14px",
                  fontWeight: "600",
                  overflowWrap: "anywhere",
                }}
              >
                {isVisible ? (
                  <>
                    <div style={{ fontSize: "11px", color: "#c4b5fd", marginBottom: "7px" }}>
                      {card.type === "word" ? "WORD" : "MEANING"}
                    </div>
                    {card.text}
                  </>
                ) : (
                  <span style={{ fontSize: "27px" }}>?</span>
                )}
              </button>
            );
          })}
        </div>

        <div style={{ ...cardStyle, marginTop: "20px", textAlign: "center" }}>
          <p style={{ color: "#aaa", margin: 0 }}>
            Matched pairs: {matchedCards.length / 2} of {cards.length / 2}
          </p>

          <p style={{ color: "#fbbf24", marginBottom: 0 }}>
            Complete the game to earn 20 XP!
          </p>
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
