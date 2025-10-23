"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  "Once you're good with this resume version, we'll save it along with your feedback and you'll download a copy automatically.",
  "When this app goes live, this will also launch a browser tab to the role for you to apply. Take your fresh new resume with you 😉",
  "The system will see you go to the other browser tab and notice when you come back. When you return, it'll ask you to confirm you applied and ask you to keep us updated when you get an interview.",
];

export default function TipWalkthrough() {
  const [step, setStep] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute bottom-8 right-8 max-w-sm bg-purple-600 text-white rounded-xl p-4 shadow-xl"
    >
      <p className="text-sm mb-2">{steps[step]}</p>

      <div className="flex justify-end">
        <button
          onClick={() => setStep((s) => (s < steps.length - 1 ? s + 1 : 0))}
          className="text-xs underline"
        >
          {step < steps.length - 1 ? "Next →" : "Restart"}
        </button>
      </div>

      <div className="absolute -top-2 right-4 w-3 h-3 bg-purple-600 rotate-45"></div>
    </motion.div>
  );
}