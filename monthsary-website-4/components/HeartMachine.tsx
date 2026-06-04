"use client";
import Image from "next/image";
import { useClawGame } from "./hooks/useClawGame";
import { useStoryStore } from "../store/useStoryStore";

import Claw from "./Claw";
import HeartPrize from "./HeartPrize";
import FloatingHearts from "./FloatingHearts";

export default function HeartMachine() {
  const setStage = useStoryStore(
    (s) => s.setStage
  );

  const {
    clawX,
    clawY,
    setClawX,
    heartX,
    heartY,
    caught,
    dropClaw,
  } = useClawGame();

  async function handleGrab() {
    const success = await dropClaw();

    if (success) {
      setTimeout(() => {
        setStage("letter");
      }, 1200);
    }
  }

 return (
  <>
    <FloatingHearts />

    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-pink-500">
          Heart Chaser
        </h1>

        <p className="text-pink-700 mt-2">
          Catch my heart if you can 💕
        </p>
      </div>

     <div className="relative w-[420px] h-[620px] mt-4">
  <Image
    src="/machine-frame.png"
    alt="Machine Frame"
    fill
    priority
    className="object-contain"
  />

  <div className="absolute inset-0 z-10">
    <Claw
      x={clawX}
      y={clawY}
    />

    <HeartPrize
      x={caught ? clawX + 10 : heartX}
      y={caught ? clawY + 80 : heartY}
    />
  </div>

  {caught && (
    <div className="absolute inset-0 z-20 flex items-center justify-center text-6xl">
      ✨💖✨
    </div>
  )}
</div>
      <div className="flex gap-4 mt-8">
        <button
          onClick={() =>
            setClawX((prev) =>
              Math.max(20, prev - 25)
            )
          }
          className="w-16 h-16 rounded-full bg-pink-200 text-2xl"
        >
          ◀
        </button>

        <button
          onClick={handleGrab}
          className="px-6 rounded-full bg-pink-500 text-white font-bold"
        >
          SEIZE MY HEART
        </button>

        <button
          onClick={() =>
            setClawX((prev) =>
              Math.min(250, prev + 25)
            )
          }
          className="w-16 h-16 rounded-full bg-pink-200 text-2xl"
        >
          ▶
        </button>
      </div>
    </main>
  </>
);
}