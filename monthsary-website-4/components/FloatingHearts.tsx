"use client";

import { motion } from "framer-motion";

export default function FloatingHearts() {
  const hearts = Array.from(
    { length: 15 },
    (_, i) => i
  );

  return (
    <>
      {hearts.map((heart) => (
        <motion.div
          key={heart}
          className="fixed text-2xl pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
          }}
          initial={{
            y: "100vh",
          }}
          animate={{
            y: "-100px",
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          💖
        </motion.div>
      ))}
    </>
  );
}