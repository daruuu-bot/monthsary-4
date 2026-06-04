"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  x: number;
  y: number;
}

export default function Claw({
  x,
  y,
}: Props) {
  return (
    <motion.div
      animate={{
        x,
        y:y+140
      }}
      transition={{
        duration: 0.7,
      }}
      className="absolute left-0 top-0"
    >
      <Image
        src="/Claw.png"
        alt="Claw"
        width={110}
        height={110}
        priority
      />
    </motion.div>
  );
}