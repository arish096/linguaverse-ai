
// src/components/GameArena.jsx
import WordMatch from "./games/WordMatch";
import VocabularyChallenge from "./games/VocabularyChallenge";
import SentenceBuilder from "./games/SentenceBuilder";
import MemoryMatch from "./games/MemoryMatch";
import ListeningChallenge from "./games/ListeningChallenge";
import SpeedQuiz from "./games/SpeedQuiz";
import GrammarChallenge from "./games/GrammarChallenge";
import { useState } from "react";
import {
  ArrowLeft,
  Brain,
  Clock,
  Gamepad2,
  Headphones,
  Layers,
  Lightbulb,
  Puzzle,
  Trophy,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";

const games = [
  {
    id: "word-match",
    title: "Word Match",
    description: "Match words with their correct meanings.",
    icon: Layers,
    color: "#8b5cf6",
    difficulty: "Easy",
    xp: 20,
  },
  {
    id: "vocabulary",
    title: "Vocabulary Challenge",
    description: "Test how many words you remember.",
    icon: Brain,
    color: "#ec4899",
    difficulty: "Medium",
    xp: 30,
  },
  {
    id: "sentence-builder",
    title: "Sentence Builder",
    description: "Arrange words to create sentences.",
    icon: Puzzle,
    color: "#06b6d4",
    difficulty: "Medium",
    xp: 30,
  },
  {
    id: "memory-match",
    title: "Memory Match",
    description: "Find matching word and meaning cards.",
    icon: Target,
    color: "#f59e0b",
    difficulty: "Easy",
    xp: 20,
  },
  {
    id: "listening",
    title: "Listening Challenge",
    description: "Listen carefully and identify the word.",
    icon: Headphones,
    color: "#10b981",
    difficulty: "Medium",
    xp: 30,
  },
  {
    id: "speed-quiz",
    title: "Speed Quiz",
    description: "Answer as many questions as possible.",
    icon: Clock,
    color: "#ef4444",
    difficulty: "Hard",
    xp: 50,
  },
  {
    id: "grammar",
    title: "Grammar Challenge",
    description: "Improve your grammar with quick questions.",
    icon: Lightbulb,
    color: "#6366f1",
    difficulty: "Hard",
    xp: 50,
  },
];

export default function GameArena({
  selectedLanguage = "Spanish",
  vocabulary = [],
  onEarnXP = () => {},
  onPracticeComplete = () => {},
}) {
  const [selectedGame, setSelectedGame] = useState(null);

  const pageStyle = {
    color: "#ffffff",
    width: "100%",
    padding: "24px 0",
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.045)",
    border: "1px solid rgba(255,255,255,0.09)",
    borderRadius: "18px",
    padding: "22px",
    transition: "transform 0.2s, border-color 0.2s",
  };

  if (selectedGame) {

    if (selectedGame.id === "vocabulary") {
  return (
    <VocabularyChallenge
      vocabulary={vocabulary}
      selectedLanguage={selectedLanguage}
      onEarnXP={onEarnXP}
      onPracticeComplete={onPracticeComplete}
      onBack={() => setSelectedGame(null)}
    />
  );
}
if (selectedGame.id === "speed-quiz") {
  return (
    <SpeedQuiz
      vocabulary={vocabulary}
      selectedLanguage={selectedLanguage}
      onEarnXP={onEarnXP}
      onPracticeComplete={onPracticeComplete}
      onBack={() => setSelectedGame(null)}
    />
  );
}

if (selectedGame.id === "listening") {
  return (
    <ListeningChallenge
      vocabulary={vocabulary}
      selectedLanguage={selectedLanguage}
      onEarnXP={onEarnXP}
      onPracticeComplete={onPracticeComplete}
      onBack={() => setSelectedGame(null)}
    />
  );
}

if (selectedGame.id === "memory-match") {
  return (
    <MemoryMatch
      vocabulary={vocabulary}
      selectedLanguage={selectedLanguage}
      onEarnXP={onEarnXP}
      onPracticeComplete={onPracticeComplete}
      onBack={() => setSelectedGame(null)}
    />
  );
}
if (selectedGame.id === "grammar") {
  return (
    <GrammarChallenge
      selectedLanguage={selectedLanguage}
      onEarnXP={onEarnXP}
      onPracticeComplete={onPracticeComplete}
      onBack={() => setSelectedGame(null)}
    />
  );
}

    if (selectedGame.id === "word-match") {
  return (
    <WordMatch
      vocabulary={vocabulary}
      selectedLanguage={selectedLanguage}
      onEarnXP={onEarnXP}
      onPracticeComplete={onPracticeComplete}
      onBack={() => setSelectedGame(null)}
    />
  );
}

if (selectedGame.id === "sentence-builder") {
  return (
    <SentenceBuilder
      vocabulary={vocabulary}
      selectedLanguage={selectedLanguage}
      onEarnXP={onEarnXP}
      onPracticeComplete={onPracticeComplete}
      onBack={() => setSelectedGame(null)}
    />
  );
}
    const Icon = selectedGame.icon;

    return (
      <section style={pageStyle}>
        <button
          onClick={() => setSelectedGame(null)}
          style={{
            background: "transparent",
            border: "none",
            color: "#c4b5fd",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "25px",
            fontSize: "15px",
          }}
        >
          <ArrowLeft size={18} />
          Back to Game Arena
        </button>

        <div
          style={{
            ...cardStyle,
            maxWidth: "650px",
            margin: "0 auto",
            textAlign: "center",
            padding: "45px 25px",
          }}
        >
          <div
            style={{
              width: "85px",
              height: "85px",
              borderRadius: "24px",
              background: `${selectedGame.color}25`,
              color: selectedGame.color,
              display: "grid",
              placeItems: "center",
              margin: "0 auto 20px",
            }}
          >
            <Icon size={42} />
          </div>

          <span style={{ color: "#a78bfa", fontSize: "13px" }}>
            {selectedLanguage.toUpperCase()} GAME
          </span>

          <h2 style={{ margin: "12px 0", fontSize: "28px" }}>
            {selectedGame.title}
          </h2>

          <p style={{ color: "#aaa", lineHeight: 1.7 }}>
            {selectedGame.description}
          </p>

          <p style={{ color: "#fbbf24", marginTop: "20px" }}>
            <Zap size={16} style={{ verticalAlign: "middle" }} />{" "}
            Earn up to {selectedGame.xp} XP
          </p>

          <p style={{ color: "#aaa", fontSize: "13px" }}>
            Difficulty: {selectedGame.difficulty}
          </p>

          <div
            style={{
              background: "rgba(139,92,246,0.12)",
              borderRadius: "12px",
              padding: "14px",
              marginTop: "25px",
              color: "#c4b5fd",
              fontSize: "14px",
            }}
          >
            Game selected! We will add its playable module in the next steps.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={pageStyle}>
      <div
        style={{
          ...cardStyle,
          background:
            "linear-gradient(120deg, #30205c 0%, #17152f 65%, #251747 100%)",
          marginBottom: "28px",
          padding: "30px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <span
            style={{
              color: "#c4b5fd",
              fontSize: "12px",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
          >
            <Sparkles size={14} style={{ verticalAlign: "middle" }} />{" "}
            LEARN THROUGH PLAY
          </span>

          <h1 style={{ fontSize: "clamp(28px, 5vw, 40px)", margin: "15px 0" }}>
            Game Arena
          </h1>

          <p style={{ color: "#d1c5f0", maxWidth: "520px", lineHeight: 1.7 }}>
            Play exciting language games, improve your vocabulary and earn XP
            while learning {selectedLanguage}.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "24px",
              color: "#e9d5ff",
              fontSize: "14px",
            }}
          >
            <span>
              <Gamepad2 size={17} style={{ verticalAlign: "middle" }} /> 7 Games
            </span>
            <span>
              <Trophy size={17} style={{ verticalAlign: "middle" }} /> Earn XP
            </span>
            <span>
              <Zap size={17} style={{ verticalAlign: "middle" }} /> Have Fun
            </span>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "23px", marginBottom: "7px" }}>
          Choose Your Game
        </h2>
        <p style={{ color: "#aaa", fontSize: "14px" }}>
          Select a game and start your learning adventure.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "16px",
        }}
      >
        {games.map((game) => {
          const Icon = game.icon;

          return (
            <button
              key={game.id}
              onClick={() => setSelectedGame(game)}
              style={{
                ...cardStyle,
                color: "white",
                textAlign: "left",
                cursor: "pointer",
                width: "100%",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "translateY(-5px)";
                event.currentTarget.style.borderColor = game.color;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.09)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "15px",
                    background: `${game.color}22`,
                    color: game.color,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Icon size={27} />
                </div>

                <span style={{ color: "#fbbf24", fontSize: "13px" }}>
                  <Zap size={13} style={{ verticalAlign: "middle" }} />{" "}
                  {game.xp} XP
                </span>
              </div>

              <h3 style={{ fontSize: "17px", margin: "20px 0 8px" }}>
                {game.title}
              </h3>

              <p
                style={{
                  color: "#aaa",
                  fontSize: "13px",
                  lineHeight: 1.6,
                  minHeight: "42px",
                }}
              >
                {game.description}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "18px",
                  fontSize: "12px",
                }}
              >
                <span
                  style={{
                    background: `${game.color}22`,
                    color: game.color,
                    padding: "6px 10px",
                    borderRadius: "20px",
                  }}
                >
                  {game.difficulty}
                </span>

                <span style={{ color: "#c4b5fd" }}>Play Now →</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
