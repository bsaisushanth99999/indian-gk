"use client";

import React, { useState } from "react";

type Props = {
  quizItem: QuizQuestion;
};

function QAForumPage({ quizItem }: Props) {
  const [correctAnswer, SetCorrectAnswer] = useState(false);
  return (
    <div>
      <div>
        <p className="text-6xl mb-40">{quizItem?.question}</p>
      </div>
      <div className="flex flex-wrap justify-between">
        <button
          onClick={() =>
            quizItem?.options[0].text.includes("(correct answer)")
              ? SetCorrectAnswer(true)
              : null
          }
          className={`rounded-full mr-10 text-4xl border p-6 mb-4 hover:px-4 ${
            correctAnswer ? "bg-green-400" : null
          }`}
        >
          {quizItem?.options[0].letter + ") " + quizItem?.options[0].text}
          {/* .replace("(correct answer)", "") */}
        </button>
        <button className="rounded-full mr-10 text-4xl border p-6 mb-4 hover:px-4">
          {quizItem?.options[1].letter +
            ") " +
            quizItem?.options[1].text.replace("(correct answer)", "")}
        </button>
        <button className="rounded-full mr-10 text-4xl border p-6 mb-4 hover:px-4">
          {quizItem?.options[2].letter +
            ") " +
            quizItem?.options[2].text.replace("(correct answer)", "")}
        </button>
        <button className="rounded-full mr-10 text-4xl border p-6 mb-4 hover:px-4">
          {quizItem?.options[3].letter +
            ") " +
            quizItem?.options[3].text.replace("(correct answer)", "")}
        </button>
      </div>
    </div>
  );
}

export default QAForumPage;
