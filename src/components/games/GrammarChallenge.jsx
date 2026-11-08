
import { useState } from "react";
import {
  ArrowLeft,
  Trophy,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Lightbulb,
} from "lucide-react";
import { shuffleArray } from "../../utils/gameHelpers";

const grammarQuestions = [
  {
    question: "Choose the correct sentence.",
    options: ["She go to school.", "She goes to school.", "She going school.", "She gone to school."],
    answer: "She goes to school.",
    explanation: "With he, she, or it, we generally add -s or -es to the present simple verb.",
  },
  {
    question: "Choose the correct article: I ate ___ apple.",
    options: ["a", "an", "the", "no article"],
    answer: "an",
    explanation: "Use 'an' before a vowel sound.",
  },
  {
    question: "Choose the past tense of 'go'.",
    options: ["Goed", "Going", "Went", "Goes"],
    answer: "Went",
    explanation: "'Went' is the simple past form of 'go'.",
  },
  {
    question: "Complete: They ___ playing football.",
    options: ["is", "am", "are", "be"],
    answer: "are",
    explanation: "Use 'are' with the subject 'they'.",
  },
  {
    question: "Choose the correct plural of 'child'.",
    options: ["Childs", "Children", "Childes", "Childrens"],
    answer: "Children",
    explanation: "'Children' is the irregular plural form of 'child'.",
  },
  {
    question: "Complete: I have lived here ___ 2020.",
    options: ["for", "since", "from", "during"],
    answer: "since",
    explanation: "Use 'since' with a specific starting point in time.",
  },
  {
    question: "Choose the correct comparative form of 'good'.",
    options: ["Gooder", "More good", "Best", "Better"],
    answer: "Better",
    explanation: "'Better' is the comparative form of 'good'.",
  },
  {
    question: "Complete: If I study, I ___ pass.",
    options: ["will", "would have", "am", "was"],
    answer: "will",
    explanation: "The first conditional uses present simple in the if-clause and 'will' in the main clause.",
  },
  {
    question: "Choose the correct passive voice: 'She wrote a letter.'",
    options: [
      "A letter is written by her.",
      "A letter was written by her.",
      "A letter has wrote by her.",
      "A letter wrote by her.",
    ],
    answer: "A letter was written by her.",
    explanation: "Simple past passive uses was/were + past participle.",
  },
  {
    question: "Choose the correct sentence.",
    options: [
      "He has finished his work.",
      "He have finished his work.",
      "He finishing his work.",
      "He finish his work yesterday.",
    ],
    answer: "He has finished his work.",
    explanation: "Use 'has' with he, she, and it in the present perfect tense.",
  },
  {
    question: "Choose the correct preposition: She is interested ___ music.",
    options: ["on", "at", "in", "for"],
    answer: "in",
    explanation: "The correct expression is 'interested in'.",
  },
  {
    question: "Choose the correct indirect speech: He said, 'I am tired.'",
    options: [
      "He said that I am tired.",
      "He said that he was tired.",
      "He says he tired.",
      "He said that he is tire.",
    ],
    answer: "He said that he was tired.",
    explanation: "In reported speech, 'am' commonly changes to 'was' when the reporting verb is in the past.",
  },
];

export default function GrammarChallenge({
  selectedLanguage = "Spanish",
  onEarnXP = () => {},
  onPracticeComplete = () => {},
  onBack = () => {},
}) {
  const [questions] = useState(() => shuffleArray(grammarQuestions).slice(0, 10));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  const checkAnswer = () => {
    if (!selected || feedback) return;

    setFeedback(true);

    if (selected === question.answer) {
      setScore((previous) => previous + 1);
    }
  };

  const nextQuestion = () => {
    if (current === questions.length - 1) {
      setFinished(true);
      onEarnXP(score * 5);
      onPracticeComplete();
      return;
    }

    setCurrent((previous) => previous + 1);
    setSelected("");
    setFeedback(false);
  };

  const restartGame = () => {
    setCurrent(0);
    setSelected("");
    setFeedback(false);
    setScore(0);
    setFinished(false);
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.055)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "16px",
    padding: "22px",
  };

  if (finished) {
    return (
      <section style={{ color: "white", padding: "25px 0" }}>
        <div style={{ ...cardStyle, maxWidth: "550px", margin: "30px auto", textAlign: "center" }}>
          <Trophy size={55} color="#fbbf24" />

          <h2 style={{ fontSize: "28px" }}>Grammar Challenge Completed!</h2>

          <h1 style={{ color: "#fbbf24", fontSize: "42px" }}>
            {score}/{questions.length}
          </h1>

          <p style={{ color: "#c4b5fd" }}>
            XP Earned: {score * 5}
          </p>

          <p style={{ color: "#aaa" }}>
            {score >= 8
              ? "Excellent grammar skills!"
              : score >= 5
              ? "Good work! Keep practising."
              : "Keep learning and try again!"}
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

      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <div style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <span style={{ color: "#c4b5fd" }}>
              {selectedLanguage.toUpperCase()} • GRAMMAR
            </span>

            <span style={{ color: "#fbbf24" }}>
              {score * 5} XP
            </span>
          </div>

          <h2>Grammar Challenge</h2>

          <p style={{ color: "#aaa", fontSize: "14px" }}>
            Question {current + 1} of {questions.length}
          </p>

          <div style={{ height: "7px", background: "#30294b", borderRadius: "10px", margin: "12px 0 24px" }}>
            <div
              style={{
                height: "100%",
                width: `${((current + 1) / questions.length) * 100}%`,
                background: "#8b5cf6",
                borderRadius: "10px",
              }}
            />
          </div>

          <div
            style={{
              background: "rgba(139,92,246,0.12)",
              padding: "20px",
              borderRadius: "13px",
              marginBottom: "22px",
            }}
          >
            <Lightbulb size={23} color="#c4b5fd" />
            <h3 style={{ fontSize: "19px", lineHeight: 1.6 }}>
              {question.question}
            </h3>
          </div>

          <div style={{ display: "grid", gap: "12px" }}>
            {question.options.map((option, index) => {
              const correct = feedback && option === question.answer;
              const wrong = feedback && selected === option && !correct;

              return (
                <button
                  key={index}
                  onClick={() => !feedback && setSelected(option)}
                  disabled={feedback}
                  style={{
                    padding: "15px",
                    borderRadius: "11px",
                    border: correct
                      ? "2px solid #22c55e"
                      : wrong
                      ? "2px solid #ef4444"
                      : selected === option
                      ? "2px solid #a78bfa"
                      : "1px solid rgba(255,255,255,0.12)",
                    background: correct
                      ? "rgba(34,197,94,0.15)"
                      : wrong
                      ? "rgba(239,68,68,0.15)"
                      : selected === option
                      ? "rgba(139,92,246,0.2)"
                      : "rgba(255,255,255,0.05)",
                    color: "white",
                    textAlign: "left",
                    cursor: feedback ? "default" : "pointer",
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

          {feedback && (
            <div style={{ marginTop: "22px" }}>
              {selected === question.answer ? (
                <div style={{ color: "#4ade80" }}>
                  <CheckCircle2 size={27} />
                  <h3>Correct! +5 XP</h3>
                </div>
              ) : (
                <div style={{ color: "#f87171" }}>
                  <XCircle size={27} />
                  <h3>Incorrect answer!</h3>
                  <p style={{ color: "#aaa" }}>
                    Correct answer: {question.answer}
                  </p>
                </div>
              )}

              <div style={{ background: "rgba(139,92,246,0.12)", padding: "14px", borderRadius: "10px", color: "#ddd", marginTop: "12px" }}>
                <strong>Explanation:</strong>
                <p style={{ lineHeight: 1.6, marginBottom: 0 }}>
                  {question.explanation}
                </p>
              </div>

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
