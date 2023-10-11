"use client";

import React, { useState } from "react";
import QAForumPage from "./QAForumPage";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

type Props = {
  questions: string;
};

function QuizPage({ questions }: Props) {
  const [quizQuestionForward, setQuizQuestionForward] = useState(0);
  const [quizQuestionBackward, setQuizQuestionBackward] = useState(0);
  //   const quizString = questions;

  //   console.log(questions);

  //   // Split the string into an array of lines
  //   const lines = quizString.split("\n");

  //   // Initialize variables to store the typed JSON object
  //   const quizData: Record<string, QuizQuestion> = {};
  //   let currentQuestion: QuizQuestion = {
  //     question: "",
  //     options: [],
  //     correctAnswer: "",
  //   };

  //   // Loop through each line of the string
  //   for (let i = 0; i < lines.length; i++) {
  //     const line = lines[i].trim();

  //     // Check if the line is empty, and if so, continue to the next line
  //     if (!line) {
  //       continue;
  //     }

  //     // Check if the line starts with a number followed by a period (indicating a new question)
  //     if (/^\d+\./.test(line)) {
  //       // Extract the question number and text
  //       const [questionNumber, questionText] = line
  //         .split(".")
  //         .map((item) => item.trim());

  //       // Store the current question
  //       currentQuestion = {
  //         question: questionText,
  //         options: [],
  //         correctAnswer: "", // Initialize correctAnswer
  //       };

  //       // Add the question to the quizData object
  //       quizData[questionNumber] = currentQuestion;
  //     } else if (
  //       line.startsWith("a)") ||
  //       line.startsWith("b)") ||
  //       line.startsWith("c)") ||
  //       line.startsWith("d)")
  //     ) {
  //       // Extract the answer and add it to the current question's options
  //       const [optionLetter, optionText] = line
  //         .split(") ")
  //         .map((item) => item.trim());

  //       currentQuestion.options.push({
  //         letter: optionLetter,
  //         text: optionText,
  //       });
  //     } else if (line.startsWith("The correct answer is indicated with")) {
  //       // Extract and store the correct answer, ensuring it's not null
  //       const match = line.match(/\(([^)]+)\)/);
  //       if (match) {
  //         const correctAnswer = match[1];
  //         currentQuestion.correctAnswer = correctAnswer;
  //       } else {
  //         // Handle the case where there's no match (e.g., set a default value or log an error)
  //         console.error("No correct answer found for the current question.");
  //       }
  //     }
  //   }

  const quizData: QuizQuestion[] = Object.values(JSON.parse(questions));

  const quizDataJSON = JSON.stringify(quizData);

  console.log("Quiz data" + quizQuestionForward);
  return (
    <div className="ml-16">
      <QAForumPage quizItem={quizData[quizQuestionForward]} />
      <div className={`flex flex-row justify-around mt-40`}>
        <ArrowLeftCircleIcon
          onClick={() =>
            quizQuestionForward < 19 || quizQuestionForward >= 0
              ? setQuizQuestionForward(quizQuestionForward - 1)
              : null
          }
          className={`h-20 w-20 ${
            quizQuestionForward <= 0
              ? "pointer-events-none cursor-not-allowed "
              : null
          }`}
        />
        <ArrowRightCircleIcon
          onClick={() =>
            quizQuestionForward >= 0 || quizQuestionForward < 19
              ? setQuizQuestionForward(quizQuestionForward + 1)
              : null
          }
          className={`h-20 w-20 ${
            quizQuestionForward >= 19
              ? "pointer-events-none cursor-not-allowed "
              : null
          }`}
        />
      </div>
    </div>
  );
}

export default QuizPage;
