import { useEffect, useState } from "react";
import { Trophy, Lock, Star, Flame, Zap, BookOpen } from "lucide-react";
import "./Achievements.css";

const achievements = [
  {
    id: "first-lesson",
    title: "First Steps",
    description: "Complete your first lesson",
    icon: BookOpen,
    requirement: 1,
    type: "lessons",
  },
  {
    id: "quiz-master",
    title: "Quiz Master",
    description: "Complete 5 quizzes",
    icon: Star,
    requirement: 5,
    type: "quizzes",
  },
  {
    id: "streak-7",
    title: "7-Day Streak",
    description: "Reach a 7-day learning streak",
    icon: Flame,
    requirement: 7,
    type: "streak",
  },
  {
    id: "xp-champion",
    title: "XP Champion",
    description: "Earn 500 total XP",
    icon: Zap,
    requirement: 500,
    type: "xp",
  },
];

export default function Achievements({
  completedLessons = 0,
  completedQuizzes = 0,
  streak = 0,
  totalXP = 0,
  onAchievementUnlock = () => {},
}) {
  const [unlocked, setUnlocked] = useState(() => {
    return JSON.parse(localStorage.getItem("linguaverse-achievements") || "[]");
  });

  const stats = {
    lessons: completedLessons,
    quizzes: completedQuizzes,
    streak,
    xp: totalXP,
  };

  useEffect(() => {
  const newlyUnlocked = achievements.filter(
    (achievement) =>
      stats[achievement.type] >= achievement.requirement &&
      !unlocked.includes(achievement.id)
  );

  if (newlyUnlocked.length > 0) {
    newlyUnlocked.forEach((achievement) => {
      onAchievementUnlock(achievement);
    });

    setUnlocked((previous) => {
      const updated = [
        ...new Set([
          ...previous,
          ...newlyUnlocked.map((achievement) => achievement.id),
        ]),
      ];

      localStorage.setItem(
        "linguaverse-achievements",
        JSON.stringify(updated)
      );

      return updated;
    });
  }
}, [completedLessons, completedQuizzes, streak, totalXP]);

  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-heading">
        <div>
          <span className="achievements-eyebrow">YOUR MILESTONES</span>
          <h2>Achievements</h2>
          <p>Keep learning to unlock new badges.</p>
        </div>

        <div className="achievements-count">
          <Trophy size={18} />
          {unlocked.length}/{achievements.length}
        </div>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement) => {
          const isUnlocked = unlocked.includes(achievement.id);
          const Icon = achievement.icon;
          const progress = Math.min(
            (stats[achievement.type] / achievement.requirement) * 100,
            100
          );

          return (
            <div
              className={`achievement-card ${isUnlocked ? "unlocked" : "locked"}`}
              key={achievement.id}
            >
              <div className="achievement-icon">
                {isUnlocked ? <Icon size={25} /> : <Lock size={21} />}
              </div>

              <div className="achievement-info">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>

                {!isUnlocked && (
                  <div className="achievement-progress">
                    <div>
                      <span style={{ width: `${progress}%` }} />
                    </div>
                    <small>
                      {stats[achievement.type]}/{achievement.requirement}
                    </small>
                  </div>
                )}

                {isUnlocked && (
                  <span className="achievement-unlocked-label">
                    <Star size={13} /> Unlocked
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}