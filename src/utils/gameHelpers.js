
// src/utils/gameHelpers.js

// Shuffle any array randomly
export function shuffleArray(items = []) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}

// Get all vocabulary from the selected course
export function getVocabularyFromCourse(course) {
  if (!course?.levels) return [];

  const vocabulary = [];

  course.levels.forEach((level) => {
    level.units?.forEach((unit) => {
      unit.lessons?.forEach((lesson) => {
        lesson.activities?.forEach((activity) => {
          if (
            activity.type === "vocabulary" &&
            activity.word &&
            activity.meaning
          ) {
            vocabulary.push({
              word: activity.word,
              meaning: activity.meaning,
              pronunciation: activity.pronunciation || "",
              example: activity.example || "",
              exampleMeaning: activity.exampleMeaning || "",
            });
          }
        });
      });
    });
  });

  return vocabulary;
}

// Get quiz questions from the selected course
export function getQuizQuestionsFromCourse(course) {
  if (!course?.levels) return [];

  const questions = [];

  course.levels.forEach((level) => {
    level.units?.forEach((unit) => {
      unit.lessons?.forEach((lesson) => {
        lesson.activities?.forEach((activity) => {
          if (
            activity.type === "quiz" &&
            activity.question &&
            Array.isArray(activity.options) &&
            activity.answer
          ) {
            questions.push({
              question: activity.question,
              options: [...activity.options],
              answer: activity.answer,
            });
          }
        });
      });
    });
  });

  return questions;
}

// Save and retrieve best game scores
export function getGameBestScore(gameId) {
  try {
    const scores = JSON.parse(
      localStorage.getItem("linguaverse-game-scores") || "{}"
    );

    return scores[gameId] || 0;
  } catch {
    return 0;
  }
}

export function saveGameBestScore(gameId, score) {
  try {
    const scores = JSON.parse(
      localStorage.getItem("linguaverse-game-scores") || "{}"
    );

    scores[gameId] = Math.max(scores[gameId] || 0, score);

    localStorage.setItem(
      "linguaverse-game-scores",
      JSON.stringify(scores)
    );

    return scores[gameId];
  } catch {
    return score;
  }
}
