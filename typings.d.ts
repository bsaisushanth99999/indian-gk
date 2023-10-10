interface QuizQuestion {
  question: string;
  options: { letter: string; text: string }[];
  correctAnswer: string;
}
