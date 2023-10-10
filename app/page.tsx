"use client";

import Loader from "@/components/Loader";
import QuizPage from "@/components/QuizPage";
import Image from "next/image";
import { useEffect, useState } from "react";
import useSWR from "swr";
import * as answer from "@/chatGPTData.json";

const fetcher = (url: any) =>
  fetch(url).then((r: { json: () => any }) => r.json());

export default function Home() {
  const data = { answer: {} };

  data.answer = answer;

  // console.log("CONCENTRATEE HERE : " + JSON.stringify(data));

  // const { data, error } =

  // useSWR("/api/askQuestions", fetcher, {
  //   revalidateOnFocus: false,
  //   revalidateOnReconnect: false,
  // });

  console.log(data.answer);
  const [dataDecider, setDataDecider] = useState(false);
  const [quizStart, setQuizStart] = useState(true);

  // setDataDecider(data);
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white text-bold bg-gradient-to-r from-[#f67280] to-[#b6cdbd] overflow-auto">
      {/* b6cdbd */}
      {!dataDecider ? (
        <>
          {data?.answer ? setDataDecider(true) : null}
          <Loader />
        </>
      ) : (
        <>
          {quizStart ? (
            <>
              <h1 className="text-4xl">
                Welcome to the Bynagari quiz competition, Lets see who leads.
              </h1>
              <br></br>
              <h2
                onClick={() => setQuizStart(!quizStart)}
                className="text-2xl cursor-pointer animate-pulse"
              >
                Lets GO!!!
              </h2>
            </>
          ) : (
            <QuizPage questions={JSON.stringify(data?.answer || {})} />
          )}
        </>
      )}
    </div>
  );
}
