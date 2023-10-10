"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
// import useSWR from "swr";

// const fetcher = (url: any) =>
//   fetch(url).then((r: { json: () => any }) => r.json());

function Login() {
  // const { data, error } = useSWR("/api/askQuestions", fetcher, {
  //   revalidateOnFocus: false,
  // });

  // console.log(data);
  return (
    <div className="flex bg-indian-flag bg-cover bg-center h-screen w-screen items-center justify-center">
      <button
        onClick={async (e) => {
          e.preventDefault();
          await signIn("google");
          // qa;
        }}
        className="text-black font-bold text-3xl animate-bounce absolute bottom-0 md:bottom-auto md:right-12"
      >
        Sign In, to see how well you know INDIA
      </button>
    </div>
  );
}

export default Login;
