"use client";

import HeartMachine from "@/components/HeartMachine";
import LoveLetter from "@/components/LoveLetter";
import FinalQuestion from "@/components/FinalQuestion";
import { useStoryStore } from "@/store/useStoryStore";

export default function Home() {
  const stage = useStoryStore((s) => s.stage);

  switch (stage) {
    case "game":
      return <HeartMachine />;

    case "letter":
      return <LoveLetter />;

    case "question":
      return <FinalQuestion />;

    default:
      return null;
  }
}