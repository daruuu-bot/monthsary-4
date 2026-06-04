"use client";

import { motion } from "framer-motion";

interface Props {
  x: number;
  y: number;
}

export default function HeartPrize({
  x,
  y,
}: Props) {
  return (
    <motion.div
      animate={{
        x,
        y,
      }}
      transition={{
        duration: 0.7,
      }}
      className="absolute left-0 top-0 text-5xl"
    >
      ❤️
    </motion.div>
  );
}