"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const steps = [
  "Reviewing company profile...",
  "Parsing job description...",
  "Reviewing your resume & professional profile...",
];

export default function ThinkingSequence() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1 < steps.length ? prev + 1 : prev));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center space-y-4 p-14">
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg text-foreground/80 font-medium"
      >
        {steps[current]}
      </motion.div>

      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-2xl text-purple-400"
      >
        ● ● ●
      </motion.div>
    </div>
  );
}