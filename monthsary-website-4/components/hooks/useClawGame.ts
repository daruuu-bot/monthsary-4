import { useState } from "react";

export function useClawGame() {
  const [clawX, setClawX] = useState(170);
  const [clawY, setClawY] = useState(0);

  const [caught, setCaught] = useState(false);

  const heartX = 175;
  const heartY = 340;

  async function dropClaw() {
    setClawY(120);

    await new Promise((r) =>
      setTimeout(r, 1000)
    );

    const success =
      Math.abs(clawX - heartX) < 30;

    setCaught(success);

    setClawY(0);

    return success;
  }

  return {
    clawX,
    clawY,
    setClawX,
    heartX,
    heartY,
    caught,
    dropClaw,
  };
}