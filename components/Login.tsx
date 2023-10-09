"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <button
        onClick={async (e) => {
          e.preventDefault();
          await signIn("google");
        }}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In, to use Sushanth GPT
      </button>
    </div>
  );
}

export default Login;
