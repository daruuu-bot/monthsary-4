"use client";

import { useStoryStore } from "../store/useStoryStore";

export default function LoveLetter() {
  const setStage = useStoryStore((s) => s.setStage);

  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-8 max-w-lg shadow-xl">
        <h1 className="text-4xl mb-6 text-[#000000]">
          My Dearest ❤️
        </h1>

        <p className="text-[#000000]">
          Happy Monthsary Baby Thank you for all the moments we've had.
         I know that sometimes I haven't been the best boyfriend, especially over the past month, but please always remember that I will love you and cherish you with all my heart.

From our very first date to our most recent one, I still remember every little detail of those days. They are some of my favorite memories, and I will always treasure them.

You are the greatest thing that has ever happened to me, and I'm so grateful that I got to know you during our immersion. You've brought so much happiness, love, and meaning into my life.

This gift is a little late because I had to start over from scratch after my original plan didn't work out the way I hoped. But even so, I wanted to make something special for you, because you deserve nothing less.

I love you. ❤️

        </p>

        <button
          onClick={() => setStage("question")}
          className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full"
        >
          Continue
        </button>
      </div>
    </main>
  );
}