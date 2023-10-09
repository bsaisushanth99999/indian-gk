import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white text-bold bg-purple-400">
      <h1 className="text-4xl">
        Welcome to the Bynagari quiz compitation, Lets see who leads.
      </h1>
      <br></br>
      <h2 className="text-2xl animate-bounce cursor-pointer">Lets GO!!!</h2>
    </div>
  );
}
