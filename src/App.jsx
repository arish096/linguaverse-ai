import { useEffect, useState } from "react";
import {
  Globe2,
  ArrowRight,
  Play,
  Mic,
  Flame,
  Zap,
  Star,
  Menu,
  X,
  MessageCircle,
  Headphones,
  Gamepad2,
  Sparkles,
  CheckCircle2,
  Search,
  Target,
} from "lucide-react";

import "./App.css";
import QuizGame from "./QuizGame";
import Achievements from "./components/Achievements";
import { recordCompletedQuiz } from "./utils/quizProgress";
import AchievementToast from "./components/AchievementToast";
import AITutor from "./components/AITutor";
import courses from "./data/courses";
import GameArena from "./components/GameArena";
import { getVocabularyFromCourse } from "./utils/gameHelpers";

/* -------------------- Languages -------------------- */

const languages = [
  { name: "English", native: "English", flag: "🇬🇧", color: "#6da9ff", level: "Beginner", category: "Popular" },
  { name: "Spanish", native: "Español", flag: "🇪🇸", color: "#ff9f43", level: "Beginner", category: "Popular" },
  { name: "French", native: "Français", flag: "🇫🇷", color: "#8b7cff", level: "Beginner", category: "Popular" },
  { name: "German", native: "Deutsch", flag: "🇩🇪", color: "#48c6a9", level: "Beginner", category: "Popular" },
  { name: "Italian", native: "Italiano", flag: "🇮🇹", color: "#f5b942", level: "Beginner", category: "Popular" },
  { name: "Portuguese", native: "Português", flag: "🇵🇹", color: "#34d399", level: "Beginner", category: "Popular" },
  { name: "Japanese", native: "日本語", flag: "🇯🇵", color: "#ff729f", level: "Beginner", category: "Asia" },
  { name: "Korean", native: "한국어", flag: "🇰🇷", color: "#6da9ff", level: "Beginner", category: "Asia" },
  { name: "Chinese", native: "中文", flag: "🇨🇳", color: "#f87171", level: "Beginner", category: "Asia" },
  { name: "Hindi", native: "हिन्दी", flag: "🇮🇳", color: "#fb923c", level: "Beginner", category: "Asia" },
  { name: "Bengali", native: "বাংলা", flag: "🇧🇩", color: "#4ade80", level: "Beginner", category: "Asia" },
  { name: "Urdu", native: "اردو", flag: "🇵🇰", color: "#86efac", level: "Beginner", category: "Asia" },
  { name: "Indonesian", native: "Bahasa Indonesia", flag: "🇮🇩", color: "#fb7185", level: "Beginner", category: "Asia" },
  { name: "Thai", native: "ภาษาไทย", flag: "🇹🇭", color: "#c084fc", level: "Beginner", category: "Asia" },
  { name: "Vietnamese", native: "Tiếng Việt", flag: "🇻🇳", color: "#facc15", level: "Beginner", category: "Asia" },
  { name: "Dutch", native: "Nederlands", flag: "🇳🇱", color: "#fb923c", level: "Beginner", category: "Europe" },
  { name: "Greek", native: "Ελληνικά", flag: "🇬🇷", color: "#60a5fa", level: "Beginner", category: "Europe" },
  { name: "Swedish", native: "Svenska", flag: "🇸🇪", color: "#60a5fa", level: "Beginner", category: "Europe" },
  { name: "Polish", native: "Polski", flag: "🇵🇱", color: "#f9a8d4", level: "Beginner", category: "Europe" },
  { name: "Norwegian", native: "Norsk", flag: "🇳🇴", color: "#60a5fa", level: "Beginner", category: "Europe" },
  { name: "Danish", native: "Dansk", flag: "🇩🇰", color: "#f87171", level: "Beginner", category: "Europe" },
  { name: "Finnish", native: "Suomi", flag: "🇫🇮", color: "#93c5fd", level: "Beginner", category: "Europe" },
  { name: "Arabic", native: "العربية", flag: "🇸🇦", color: "#34d399", level: "Beginner", category: "Middle East" },
  { name: "Persian", native: "فارسی", flag: "🇮🇷", color: "#a78bfa", level: "Beginner", category: "Middle East" },
  { name: "Hebrew", native: "עברית", flag: "🇮🇱", color: "#93c5fd", level: "Beginner", category: "Middle East" },
  { name: "Russian", native: "Русский", flag: "🇷🇺", color: "#93c5fd", level: "Beginner", category: "Other" },
  { name: "Turkish", native: "Türkçe", flag: "🇹🇷", color: "#f87171", level: "Beginner", category: "Other" },
];

const categories = ["All", "Popular", "Asia", "Europe", "Middle East", "Other"];

/* -------------------- Features -------------------- */

const features = [
  {
    icon: Mic,
    title: "Speak with AI",
    description: "Practice real conversations with your personal AI language tutor.",
    color: "#a78bfa",
  },
  {
    icon: Gamepad2,
    title: "Learn through games",
    description: "Play fun challenges, earn XP and make every lesson exciting.",
    color: "#fb7185",
  },
  {
    icon: Headphones,
    title: "Train your ears",
    description: "Improve listening skills with natural voices and pronunciation.",
    color: "#34d399",
  },
];

/* -------------------- Date Helpers -------------------- */

const getLocalDateKey = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getYesterdayDateKey = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return getLocalDateKey(yesterday);
};

/* -------------------- App -------------------- */

function App() {
  /* XP and progress */
  const [totalXP, setTotalXP] = useState(
    () => Number(localStorage.getItem("linguaverse-xp")) || 0
  );

  const [dailyGoal, setDailyGoal] = useState(
    () => Number(localStorage.getItem("linguaverse-daily-goal")) || 20
  );

  const [dailyXP, setDailyXP] = useState(() => {
    const savedDate = localStorage.getItem("linguaverse-daily-xp-date");
    const savedXP = Number(localStorage.getItem("linguaverse-daily-xp")) || 0;
    return savedDate === getLocalDateKey() ? savedXP : 0;
  });

  const [dailyXPDate, setDailyXPDate] = useState(
    () => localStorage.getItem("linguaverse-daily-xp-date") || getLocalDateKey()
  );

  const [streak, setStreak] = useState(
    () => Number(localStorage.getItem("linguaverse-streak")) || 0
  );

  const [lastPracticeDate, setLastPracticeDate] = useState(
    () => localStorage.getItem("linguaverse-last-practice") || ""
  );

  const [practicedToday, setPracticedToday] = useState(
    () => localStorage.getItem("linguaverse-last-practice") === getLocalDateKey()
  );

  const [completedLessons, setCompletedLessons] = useState(
    () => Number(localStorage.getItem("linguaverse-lessons")) || 0
  );

  const [achievementToast, setAchievementToast] = useState(null);

  /* Navigation and language selection */
  const [selectedLanguage, setSelectedLanguage] = useState("Spanish");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  /* Lesson state */
  const [lessonOpen, setLessonOpen] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [unitStep, setUnitStep] = useState(0);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [activityStep, setActivityStep] = useState(0);

  /* Daily quests */
  const getTodayDate = () => getLocalDateKey();

  const [dailyQuests, setDailyQuests] = useState(() => {
    const today = getTodayDate();
    const savedDate = localStorage.getItem("linguaverse-quests-date");
    const savedQuests = localStorage.getItem("linguaverse-daily-quests");

    if (savedDate === today && savedQuests) {
      try {
        return JSON.parse(savedQuests);
      } catch {
        // Use fresh quest state if saved data is invalid.
      }
    }

    return {
      lesson: false,
      xp: false,
      quiz: false,
    };
  });

  /* -------------------- Course Data -------------------- */

  const currentCourse = courses[selectedLanguage] || courses.Spanish;
  const currentLevel = currentCourse?.levels?.[0];
  const currentUnits = currentLevel?.units || [];
  const currentUnit = currentUnits[unitStep];
  const currentLessons = currentUnit?.lessons || [];
  const currentLesson = currentLessons[lessonIndex];
  const currentActivities = currentLesson?.activities || [];
  const currentActivity = currentActivities[activityStep];

  /* -------------------- Effects -------------------- */

  useEffect(() => {
    const refreshDailyXP = () => {
      const currentDate = getLocalDateKey();

      if (dailyXPDate !== currentDate) {
        setDailyXP(0);
        setDailyXPDate(currentDate);
        setPracticedToday(
          localStorage.getItem("linguaverse-last-practice") === currentDate
        );
      }
    };

    refreshDailyXP();

    const interval = window.setInterval(refreshDailyXP, 60 * 1000);
    return () => window.clearInterval(interval);
  }, [dailyXPDate]);

  useEffect(() => {
    localStorage.setItem("linguaverse-xp", String(totalXP));
  }, [totalXP]);

  useEffect(() => {
    localStorage.setItem("linguaverse-lessons", String(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem("linguaverse-daily-goal", String(dailyGoal));
  }, [dailyGoal]);

  useEffect(() => {
    localStorage.setItem("linguaverse-daily-xp", String(dailyXP));
    localStorage.setItem("linguaverse-daily-xp-date", dailyXPDate);
  }, [dailyXP, dailyXPDate]);

  useEffect(() => {
    localStorage.setItem(
      "linguaverse-daily-quests",
      JSON.stringify(dailyQuests)
    );
    localStorage.setItem("linguaverse-quests-date", getTodayDate());
  }, [dailyQuests]);

  /* -------------------- XP and Quest Functions -------------------- */

  function completeQuest(questName, bonusXP) {
    setDailyQuests((currentQuests) => {
      if (currentQuests[questName]) return currentQuests;

      const updatedQuests = {
        ...currentQuests,
        [questName]: true,
      };

      setTotalXP((currentXP) => currentXP + bonusXP);

      return updatedQuests;
    });
  }

  const addXP = (amount) => {
    const currentDate = getLocalDateKey();

    setTotalXP((xp) => xp + amount);

    setDailyXP((currentDailyXP) => {
      const startingXP = dailyXPDate === currentDate ? currentDailyXP : 0;
      const updatedDailyXP = startingXP + amount;

      if (updatedDailyXP >= 50) {
        completeQuest("xp", 30);
      }

      return updatedDailyXP;
    });

    if (dailyXPDate !== currentDate) {
      setDailyXPDate(currentDate);
    }
  };

  const recordPractice = () => {
    const currentDate = getLocalDateKey();

    if (lastPracticeDate === currentDate) {
      setPracticedToday(true);
      return;
    }

    const newStreak =
      lastPracticeDate === getYesterdayDateKey() ? streak + 1 : 1;

    setStreak(newStreak);
    setLastPracticeDate(currentDate);
    setPracticedToday(true);

    localStorage.setItem("linguaverse-streak", String(newStreak));
    localStorage.setItem("linguaverse-last-practice", currentDate);
  };

  const handleQuizQuest = () => {
    recordCompletedQuiz();
    completeQuest("quiz", 20);
  };

  /* -------------------- Navigation -------------------- */

  const startLearning = () => {
    document.getElementById("languages")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const filteredLanguages = languages.filter((language) => {
    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      language.name.toLowerCase().includes(search) ||
      language.native.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All" || language.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  /* -------------------- Lesson Functions -------------------- */

  const openLesson = () => {
    setUnitStep(0);
    setLessonIndex(0);
    setActivityStep(0);
    setLessonCompleted(false);
    setLessonOpen(true);
  };

  const completeCurrentLesson = () => {
    if (lessonCompleted) return;

    setLessonCompleted(true);
    addXP(50);
    completeQuest("lesson", 20);
    setCompletedLessons((count) => count + 1);
    recordPractice();
  };

  const moveToNextActivity = () => {
    if (activityStep < currentActivities.length - 1) {
      setActivityStep((step) => step + 1);
    } else {
      completeCurrentLesson();
    }
  };

  const moveToNextLesson = () => {
    if (lessonIndex < currentLessons.length - 1) {
      setLessonIndex((index) => index + 1);
      setActivityStep(0);
      setLessonCompleted(false);
      return;
    }

    if (unitStep < currentUnits.length - 1) {
      setUnitStep((unit) => unit + 1);
      setLessonIndex(0);
      setActivityStep(0);
      setLessonCompleted(false);
      return;
    }

    setLessonOpen(false);
  };

  const speakLesson = () => {
    if (!("speechSynthesis" in window)) {
      alert("Speech is not supported in this browser.");
      return;
    }

    if (!currentActivity?.word) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(currentActivity.word);

    const languageCodes = {
      English: "en-US",
      Spanish: "es-ES",
      French: "fr-FR",
      German: "de-DE",
      Italian: "it-IT",
      Portuguese: "pt-PT",
      Japanese: "ja-JP",
      Korean: "ko-KR",
      Chinese: "zh-CN",
      Hindi: "hi-IN",
      Bengali: "bn-IN",
      Urdu: "ur-PK",
      Indonesian: "id-ID",
      Thai: "th-TH",
      Vietnamese: "vi-VN",
      Dutch: "nl-NL",
      Greek: "el-GR",
      Swedish: "sv-SE",
      Polish: "pl-PL",
      Norwegian: "no-NO",
      Danish: "da-DK",
      Finnish: "fi-FI",
      Arabic: "ar-SA",
      Persian: "fa-IR",
      Hebrew: "he-IL",
      Russian: "ru-RU",
      Turkish: "tr-TR",
    };

    utterance.lang = languageCodes[selectedLanguage] || "en-US";
    utterance.rate = 0.85;

    window.speechSynthesis.speak(utterance);
  };

  const dailyGoalProgress =
    dailyGoal > 0 ? Math.min((dailyXP / dailyGoal) * 100, 100) : 0;

  const dailyGoalCompleted = dailyXP >= dailyGoal;

  /* -------------------- Render -------------------- */

  return (
    <>
      <AchievementToast
        achievement={achievementToast}
        onClose={() => setAchievementToast(null)}
      />

      {/* Lesson Modal */}
      {lessonOpen && (
        <div className="lesson-overlay">
          <div className="lesson-modal">
            <button
              className="lesson-close"
              onClick={() => {
                window.speechSynthesis?.cancel();
                setLessonOpen(false);
              }}
              aria-label="Close lesson"
            >
              <X size={20} />
            </button>

            {!lessonCompleted && currentLesson ? (
              <>
                <span className="eyebrow">
                  {selectedLanguage.toUpperCase()} ·{" "}
                  {currentLesson.title || "LESSON"}
                </span>

                <div className="lesson-progress">
                  <div
                    style={{
                      width: `${
                        currentActivities.length > 0
                          ? ((activityStep + 1) / currentActivities.length) * 100
                          : 0
                      }%`,
                    }}
                  />
                </div>

                <p className="lesson-counter">
                  Activity {activityStep + 1} of {currentActivities.length}
                </p>

                {currentActivity?.type === "vocabulary" ? (
                  <>
                    <div className="lesson-word-card">
                      <span className="lesson-emoji">🌍</span>
                      <h2>{currentActivity.word}</h2>
                      <p>{currentActivity.pronunciation}</p>

                      <div className="lesson-meaning">
                        {currentActivity.meaning}
                      </div>

                      {currentActivity.example && (
                        <div className="lesson-example">
                          <strong>Example:</strong>
                          <p>{currentActivity.example}</p>
                          <span>{currentActivity.exampleMeaning}</span>
                        </div>
                      )}
                    </div>

                    <button className="lesson-speak" onClick={speakLesson}>
                      <Mic size={18} />
                      Listen to pronunciation
                    </button>

                    <button
                      className="primary-btn"
                      onClick={moveToNextActivity}
                    >
                      {activityStep < currentActivities.length - 1
                        ? "Continue"
                        : "Complete Lesson"}
                      <ArrowRight size={18} />
                    </button>
                  </>
                ) : currentActivity?.type === "quiz" ? (
                  <div className="lesson-word-card">
                    <span className="lesson-emoji">🧠</span>
                    <h2>{currentActivity.question}</h2>

                    <div className="lesson-quiz-options">
                      {currentActivity.options?.map((option, index) => (
                        <button
                          key={`${option}-${index}`}
                          className="lesson-quiz-option"
                          onClick={() => {
                            if (option === currentActivity.answer) {
                              moveToNextActivity();
                            } else {
                              alert("Not quite! Try again.");
                            }
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="lesson-word-card">
                    <h2>Activity coming soon</h2>
                    <p>We will add this activity type next.</p>

                    <button
                      className="primary-btn"
                      onClick={moveToNextActivity}
                    >
                      Continue <ArrowRight size={18} />
                    </button>
                  </div>
                )}
              </>
            ) : lessonCompleted ? (
              <div className="lesson-complete">
                <div className="lesson-complete-icon">🏆</div>
                <span className="eyebrow">LESSON COMPLETED</span>
                <h2>Excellent work!</h2>
                <p>You completed your {selectedLanguage} lesson.</p>

                <div className="lesson-xp">
                  <Zap size={20} /> +50 XP
                </div>

                <button className="primary-btn" onClick={moveToNextLesson}>
                  {lessonIndex < currentLessons.length - 1
                    ? "Next Lesson"
                    : unitStep < currentUnits.length - 1
                    ? "Next Unit"
                    : "Back to LinguaVerse"}
                  <ArrowRight size={18} />
                </button>
              </div>
            ) : (
              <div className="lesson-complete">
                <h2>No lessons available yet</h2>
                <p>This course is being prepared.</p>
                <button
                  className="primary-btn"
                  onClick={() => setLessonOpen(false)}
                >
                  Back to LinguaVerse
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <a href="#" className="logo">
            <span className="logo-icon">
              <Globe2 size={23} />
            </span>
            Lingua<span>Verse</span>
            <span className="ai-badge">AI</span>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#languages" onClick={() => setMenuOpen(false)}>Languages</a>
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#games" onClick={() => setMenuOpen(false)}>Games</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </div>

          <button className="nav-cta" onClick={startLearning}>
            Get Started <ArrowRight size={16} />
          </button>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>

          <div className="hero-content">
            <div className="announcement">
              <Sparkles size={14} />
              <span>Your AI-powered language journey starts here</span>
              <ArrowRight size={14} />
            </div>

            <h1>
              A new language.
              <br />
              <span>A whole new world.</span>
            </h1>

            <p className="hero-description">
              Learn 27 languages, speak with AI tutors, and level up your skills
              through fun, interactive games.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn" onClick={startLearning}>
                Start Learning Free <ArrowRight size={18} />
              </button>

              <a href="#features" className="secondary-btn">
                <Play size={17} /> Explore Features
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <strong>27</strong>
                <span>Languages</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <strong>AI</strong>
                <span>Speaking Tutor</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <strong>∞</strong>
                <span>Ways to Learn</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="floating-card streak-card">
              <div className="streak-icon">
                <Flame size={20} />
              </div>
              <div>
                <strong>{streak} Day Streak!</strong>
                <span>
                  {practicedToday
                    ? "Practice completed today"
                    : "Complete a lesson to continue"}
                </span>
                <span>Keep your momentum</span>
              </div>
            </div>

            <div className="language-orb">
              <div className="orb-inner">
                <span className="orb-globe">🌍</span>
                <span className="orb-text">HELLO</span>
                <span className="orb-subtext">世界 · Mundo · Monde</span>
              </div>
            </div>

            <div className="floating-card xp-card">
              <div className="xp-icon">
                <Zap size={19} />
              </div>
              <div>
                <strong>{totalXP} XP</strong>
                <span>You're on fire!</span>
              </div>
            </div>

            <div className="floating-card tutor-card">
              <div className="tutor-avatar">🤖</div>
              <div>
                <span className="tutor-label">YOUR AI TUTOR</span>
                <strong>Ready to talk!</strong>
              </div>
              <div className="online-dot"></div>
            </div>
          </div>
        </section>

        {/* Progress */}
        <section className="progress-section" id="progress">
          <div className="section-heading">
            <p className="section-label">YOUR JOURNEY</p>
            <h2>Learning Progress</h2>
            <p>Keep practicing and watch your progress grow.</p>
          </div>

          <div className="progress-grid">
            <div className="progress-card">
              <span className="progress-icon">🎯</span>
              <div>
                <h3>{completedLessons}</h3>
                <p>Lessons Completed</p>
              </div>
            </div>

            <div className="progress-card">
              <span className="progress-icon">⚡</span>
              <div>
                <h3>{totalXP}</h3>
                <p>Total XP Earned</p>
              </div>
            </div>

            <div className="progress-card">
              <span className="progress-icon">🔥</span>
              <div>
                <h3>{streak}</h3>
                <p>Day Streak</p>
              </div>
            </div>
          </div>

          <div className="progress-bar-card">
            <div className="progress-bar-heading">
              <span>Overall Progress</span>
              <strong>{Math.min(completedLessons * 10, 100)}%</strong>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${Math.min(completedLessons * 10, 100)}%` }}
              />
            </div>

            <p>
              {completedLessons === 0
                ? "Complete your first lesson to start your progress."
                : completedLessons >= 10
                ? "Amazing! You've completed your first 10 lessons."
                : `${10 - completedLessons} more lesson${
                    10 - completedLessons === 1 ? "" : "s"
                  } to reach your first milestone.`}
            </p>
          </div>

          <Achievements
            completedLessons={completedLessons}
            completedQuizzes={
              Number(localStorage.getItem("linguaverse-quizzes")) || 0
            }
            streak={streak}
            totalXP={totalXP}
            onAchievementUnlock={setAchievementToast}
          />

          {/* Daily Goal Tracker */}
          <div className="daily-goal-card">
            <div className="daily-goal-top">
              <div className="daily-goal-title">
                <span className="daily-goal-icon">
                  <Target size={22} />
                </span>
                <div>
                  <h3>Daily XP Goal</h3>
                  <p>
                    {dailyGoalCompleted
                      ? "Goal completed! Great job today."
                      : "A little practice every day adds up."}
                  </p>
                </div>
              </div>

              <label className="daily-goal-select-label">
                Daily target
                <select
                  value={dailyGoal}
                  onChange={(event) => setDailyGoal(Number(event.target.value))}
                  aria-label="Choose daily XP goal"
                >
                  <option value={10}>10 XP</option>
                  <option value={20}>20 XP</option>
                  <option value={50}>50 XP</option>
                  <option value={100}>100 XP</option>
                </select>
              </label>
            </div>

            <div className="daily-goal-stats">
              <strong>
                {dailyXP} <span>/ {dailyGoal} XP</span>
              </strong>
              <span>
                {dailyGoalCompleted
                  ? "🎉 Daily goal reached"
                  : `${Math.max(dailyGoal - dailyXP, 0)} XP left today`}
              </span>
            </div>

            <div
              className="daily-goal-track"
              role="progressbar"
              aria-label="Daily XP goal progress"
              aria-valuenow={Math.min(dailyXP, dailyGoal)}
              aria-valuemin={0}
              aria-valuemax={dailyGoal}
            >
              <div
                className={`daily-goal-fill ${
                  dailyGoalCompleted ? "complete" : ""
                }`}
                style={{ width: `${dailyGoalProgress}%` }}
              />
            </div>

            <div className="daily-goal-footer">
              <span>{Math.round(dailyGoalProgress)}% completed</span>
              <span>Resets daily</span>
            </div>
          </div>

          {/* Daily Quests */}
          <div className="daily-quests-card">
            <div className="daily-quests-heading">
              <div>
                <span className="daily-quests-eyebrow">DAILY CHALLENGES</span>
                <h3>Daily Quests</h3>
              </div>
              <span className="daily-quests-icon">🎯</span>
            </div>

            <div className="daily-quest-item">
              <div>
                <strong>Complete 1 lesson</strong>
                <span>
                  {dailyQuests.lesson ? "Completed" : "Finish any lesson"}
                </span>
              </div>
              <span
                className={
                  dailyQuests.lesson ? "quest-reward completed" : "quest-reward"
                }
              >
                {dailyQuests.lesson ? "✓ Claimed" : "+20 XP"}
              </span>
            </div>

            <div className="daily-quest-item">
              <div>
                <strong>Earn 50 XP today</strong>
                <span>
                  {dailyQuests.xp
                    ? "Completed"
                    : "Keep learning to earn XP"}
                </span>
              </div>
              <span
                className={
                  dailyQuests.xp ? "quest-reward completed" : "quest-reward"
                }
              >
                {dailyQuests.xp ? "✓ Claimed" : "+30 XP"}
              </span>
            </div>

            <div className="daily-quest-item">
              <div>
                <strong>Complete a language quiz</strong>
                <span>
                  {dailyQuests.quiz
                    ? "Completed"
                    : "Finish today's quiz"}
                </span>
              </div>
              <span
                className={
                  dailyQuests.quiz ? "quest-reward completed" : "quest-reward"
                }
              >
                {dailyQuests.quiz ? "✓ Claimed" : "+20 XP"}
              </span>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="languages-section section" id="languages">
          <div className="section-heading">
            <div>
              <span className="eyebrow">YOUR NEXT ADVENTURE</span>
              <h2>
                Choose your <span>language.</span>
              </h2>
              <p>
                Start with a language you love. Explore a world you don't know
                yet.
              </p>
            </div>

            <span className="view-all">
              {filteredLanguages.length} languages found
            </span>
          </div>

          <div className="language-controls">
            <div className="language-search">
              <Search size={18} />

              <input
                type="text"
                placeholder="Search languages by name..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />

              {searchTerm && (
                <button
                  className="clear-search"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={selectedCategory === category ? "active" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredLanguages.length > 0 ? (
            <div className="language-grid">
              {filteredLanguages.map((language) => (
                <button
                  className={`language-card ${
                    selectedLanguage === language.name ? "selected" : ""
                  }`}
                  key={language.name}
                  onClick={() => setSelectedLanguage(language.name)}
                  style={{ "--card-color": language.color }}
                >
                  <div className="language-card-top">
                    <span className="flag">{language.flag}</span>
                    <span className="card-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </div>

                  <h3>{language.name}</h3>
                  <p>{language.native}</p>

                  <div className="language-card-bottom">
                    <span className="level-dot"></span>
                    {language.level}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="no-languages">
              <span>🔎</span>
              <h3>No languages found</h3>
              <p>Try another search or select a different category.</p>

              <button
                className="small-cta"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Reset filters
              </button>
            </div>
          )}

          <div className="selected-language-bar">
            <div>
              <CheckCircle2 size={18} />
              <span>
                Selected: <strong>{selectedLanguage}</strong>
              </span>
            </div>

            <button className="small-cta" onClick={openLesson}>
              Start Course <ArrowRight size={15} />
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="features-section section" id="features">
          <div className="section-heading centered">
            <span className="eyebrow">LEARN YOUR WAY</span>
            <h2>
              Learning that feels like <span>playing.</span>
            </h2>
            <p>
              Forget boring textbooks. Your new learning adventure is
              interactive.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div className="feature-card" key={feature.title}>
                  <div className="feature-icon" style={{ color: feature.color }}>
                    <Icon size={25} />
                  </div>

                  <span className="feature-number">0{index + 1}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  <a href="#games" className="feature-link">
                    Discover more <ArrowRight size={15} />
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* AI Tutor */}
        <section className="ai-section section" id="about">
          <div className="ai-content">
            <span className="eyebrow">YOUR PERSONAL LANGUAGE PARTNER</span>

            <h2>
              Don't just learn it.
              <br />
              <span>Speak it.</span>
            </h2>

            <p>
              Meet your AI conversation partner. Practice everyday
              conversations, improve pronunciation, and build confidence at
              your own pace.
            </p>

            <div className="ai-benefits">
              <div>
                <CheckCircle2 size={17} /> Natural conversations
              </div>
              <div>
                <CheckCircle2 size={17} /> Friendly corrections
              </div>
              <div>
                <CheckCircle2 size={17} /> Practice anytime
              </div>
            </div>

            <button
              className="primary-btn"
              onClick={() =>
                document.getElementById("ai-tutor-chat")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <Mic size={18} /> Meet Your AI Tutor
            </button>
          </div>

          <div className="ai-visual">
            <div className="conversation-card">
              <div className="conversation-header">
                <div className="conversation-avatar">🤖</div>

                <div>
                  <strong>Lingua AI</strong>
                  <span>
                    <span className="online-dot"></span> Online and ready
                  </span>
                </div>

                <MessageCircle size={20} className="chat-icon" />
              </div>

              <div className="chat-message tutor-message">
                ¡Hola! How are you today?
                <span>10:42 AM</span>
              </div>

              <div className="chat-message user-message">
                Estoy muy bien, gracias!
                <span>10:42 AM</span>
              </div>

              <div className="chat-message tutor-message">
                ¡Excellent! You're doing great.
                <span>10:43 AM</span>
              </div>

              <div className="voice-wave">
                <Mic size={18} />

                {Array.from({ length: 24 }, (_, index) => (
                  <span
                    key={index}
                    style={{
                      height: `${8 + Math.abs(Math.sin(index * 0.8)) * 25}px`,
                    }}
                  ></span>
                ))}
              </div>

              <p className="voice-caption">AI voice conversation preview</p>
            </div>
          </div>
        </section>

        <AITutor selectedLanguage={selectedLanguage} />

        {/* Games */}
        <section className="games-section section" id="games">
          <div className="games-banner">
            <div className="games-content">
              <span className="eyebrow">THE FUN NEVER STOPS</span>

              <h2>
                Play. Learn.
                <br />
                <span>Win XP.</span>
              </h2>

              <p>
                Challenge yourself with vocabulary games, quick quizzes and
                daily quests.
              </p>

              <button
                className="primary-btn"
                onClick={() =>
  document.getElementById("game-arena")?.scrollIntoView({
    behavior: "smooth",
  })
}
              >
                <Gamepad2 size={18} /> Enter Games Arena
              </button>
            </div>

            <div className="games-visual">
              <div className="game-tile tile-one">🧩</div>
              <div className="game-tile tile-two">🎯</div>
              <div className="game-tile tile-three">⚡</div>
              <div className="game-tile tile-four">🏆</div>

              <div className="game-xp">
                <Star size={17} fill="currentColor" /> +500 XP
              </div>
            </div>
          </div>
        </section>

        {/* Game Arena */}
<section
  id="game-arena"
  className="section"
  style={{ padding: "20px 0" }}
>
  <GameArena
    selectedLanguage={selectedLanguage}
    vocabulary={getVocabularyFromCourse(currentCourse)}
    onEarnXP={addXP}
    onPracticeComplete={recordPractice}
  />
</section>

        {/* Quiz Game */}
        <QuizGame
          selectedLanguage={selectedLanguage}
          onEarnXP={addXP}
          onPracticeComplete={handleQuizQuest}
        />

        {/* Footer */}
        <footer className="footer">
          <a href="#" className="logo">
            <span className="logo-icon">
              <Globe2 size={21} />
            </span>
            Lingua<span>Verse</span>
            <span className="ai-badge">AI</span>
          </a>

          <p>Making language learning an adventure.</p>

          <div className="footer-bottom">
            <span>© 2026 LinguaVerse AI</span>
            <span>Learn without limits. 🌍</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;