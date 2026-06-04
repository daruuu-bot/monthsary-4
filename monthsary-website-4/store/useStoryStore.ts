import { create } from "zustand";

type Stage = "game" | "letter" | "question";

interface StoryStore {
  stage: Stage;
  setStage: (stage: Stage) => void;
}

export const useStoryStore = create<StoryStore>((set) => ({
  stage: "game",
  setStage: (stage) => set({ stage }),
}));