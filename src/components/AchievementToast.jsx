import { useEffect } from "react";
import { Trophy, X } from "lucide-react";
import "./AchievementToast.css";

export default function AchievementToast({ achievement, onClose }) {
  useEffect(() => {
    if (!achievement) return;

    const timer = window.setTimeout(onClose, 4000);
    return () => window.clearTimeout(timer);
  }, [achievement, onClose]);

  if (!achievement) return null;

  return (
    <div className="achievement-toast">
      <div className="achievement-toast-icon">
        <Trophy size={24} />
      </div>

      <div className="achievement-toast-content">
        <span>ACHIEVEMENT UNLOCKED</span>
        <strong>{achievement.title}</strong>
        <p>{achievement.description}</p>
      </div>

      <button
        className="achievement-toast-close"
        onClick={onClose}
        aria-label="Close notification"
      >
        <X size={17} />
      </button>
    </div>
  );
}