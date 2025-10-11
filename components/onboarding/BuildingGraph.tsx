"use client";

import { useEffect, useRef, useState } from "react";
import Card from "@/components/Card";
import { Spinner } from "flowbite-react";
import { motion } from "framer-motion";
import { OnboardingStepProps } from "./RoleSelection";

export default function BuildingGraph({ data, onBack }: OnboardingStepProps) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [dotY, setDotY] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const totalSteps = data?.tasks?.length ?? 0;
    if (!totalSteps) return;

    const interval = setInterval(() => {
      setProgress((p) => (p < 100 ? p + 25 : 100));
      setActiveStep((i) => (i < totalSteps - 1 ? i + 1 : i));
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  // Dynamically align dot & progress line to actual <li> positions
  useEffect(() => {
    if (!itemRefs.current.length) return;
    const activeEl = itemRefs.current[activeStep];
    const firstEl = itemRefs.current[0];
    if (activeEl && firstEl) {
      const offsetTop = activeEl.offsetTop - firstEl.offsetTop;
      const midPoint = activeEl.offsetHeight / 2 - 8; // centers the dot
      setDotY(offsetTop + midPoint);
      setLineHeight(offsetTop + midPoint);
    }
  }, [activeStep]);

  if (!data) return null;
  const tasks = data.tasks ?? [];

  return (
    <div className="flex items-center justify-center w-full min-h-screen px-6 sm:px-12 py-12 sm:py-20">
      <Card className="relative max-w-3xl w-full bg-background/80 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl px-14 sm:px-16 py-24 sm:py-24 flex flex-col justify-between text-white text-center">
        {/* Header */}
        <div className="flex flex-col">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">{data.title}</h2>
          <p className="text-base sm:text-lg text-gray-300">
            Building your personalized job engine...
          </p>
        </div>

        {/* Timeline + Tasks */}
        <div className="relative flex justify-start items-start mt-14 mb-12">
          {/* Timeline column */}
          <div className="relative w-14 flex-shrink-0">
            {/* Static background line */}
            <div
              className="absolute left-[22px] w-[2px] bg-zinc-700 rounded-full"
              style={{
                height:
                  (itemRefs.current[tasks.length - 1]?.offsetTop ?? 0) -
                  (itemRefs.current[0]?.offsetTop ?? 0) +
                  (itemRefs.current[0]?.offsetHeight ?? 0),
              }}
            />

            {/* Animated progress line */}
            <motion.div
              className="absolute left-[22px] w-[2px] bg-gradient-to-b from-purple-400 to-pink-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.6)]"
              initial={{ height: 0 }}
              animate={{ height: lineHeight }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Moving glowing dot */}
            <motion.div
              className="absolute left-[16px] w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 shadow-[0_0_12px_rgba(168,85,247,0.9)] border border-purple-300"
              initial={{ y: 0 }}
              animate={{ y: dotY }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>

          {/* Task list */}
          <ul className="ml-8 space-y-8 text-left">
            {tasks.map((task, index) => (
              <li
                key={index}
                ref={(el) => { itemRefs.current[index] = el; }}
                className={`transition-all duration-700 ${
                  index <= activeStep ? "text-white" : "text-gray-400 opacity-60"
                }`}
              >
                {task}
              </li>
            ))}
          </ul>
        </div>

        {/* Spinner */}
        <div className="flex justify-center mt-14">
          <Spinner color="purple" size="xl" />
        </div>
      </Card>
    </div>
  );
}