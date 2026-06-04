"use client";

import { useState } from "react";
import Confetti from "react-confetti";

export default function FinalQuestion() {
  const [yes, setYes] = useState(false);

  if (yes) {
    return (
      <>
        <Confetti />
        <div className="min-h-screen flex items-center justify-center text-5xl">
          ❤️ YAY ❤️
        </div>
      </>
    );
  }

  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center">
      <h1 className="text-5xl text-center mb-10 text-[#000000]">
        Will you stay with me for forever?
      </h1>

      <div className="flex gap-4">
        <button
          onClick={() => setYes(true)}
          className="bg-green-500 text-white px-8 py-4 rounded-full"
        >
          YES ❤️
        </button>

        <button
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              `translate(${Math.random() * 200}px, ${
                Math.random() * 200
              }px)`;
          }}
          className="bg-gray-700 text-white px-8 py-4 rounded-full"
        >
          NO
        </button>
      </div>
    </main>
  );
}