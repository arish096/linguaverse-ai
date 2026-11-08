const QUIZ_COUNT_KEY = "linguaverse-quizzes";

export function getCompletedQuizzes() {
  return Number(localStorage.getItem(QUIZ_COUNT_KEY)) || 0;
}

export function recordCompletedQuiz() {
  const currentCount = getCompletedQuizzes();
  const updatedCount = currentCount + 1;

  localStorage.setItem(QUIZ_COUNT_KEY, String(updatedCount));

  return updatedCount;
}