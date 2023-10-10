import React from "react";

type Props = {
  quizItem: QuizQuestion;
};

function QAForumPage({ quizItem }: Props) {
  console.log(quizItem);
  return (
    <div>
      <div>
        <p className="text-6xl mb-40">{quizItem?.question}</p>
      </div>
      <div className="flex flex-wrap">
        <button className="rounded-full mr-10 text-4xl border ">
          {quizItem?.options[0].letter + " " + quizItem?.options[0].text}
        </button>
        <button className="rounded-full mr-10 text-4xl">
          {quizItem?.options[1].letter + " " + quizItem?.options[1].text}
        </button>
        <button className="rounded-full mr-10 text-4xl">
          {quizItem?.options[2].letter + " " + quizItem?.options[2].text}
        </button>
        <button className="rounded-full mr-10 text-4xl">
          {quizItem?.options[3].letter + " " + quizItem?.options[3].text}
        </button>
      </div>
    </div>
  );
}

export default QAForumPage;
