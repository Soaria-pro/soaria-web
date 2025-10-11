"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { Spinner } from "flowbite-react";
import { OnboardingStepProps } from "./RoleSelection";

export default function BuildingGraph({ data, onBack }: OnboardingStepProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p < 100 ? p + 25 : 100));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  if (!data) return null;

  return (
    <div className="flex items-center justify-center w-full min-h-screen px-6 sm:px-12 py-12 sm:py-20">
      <Card className="relative max-w-3xl w-full bg-background/80 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl px-16 sm:px-24 py-24 sm:py-28 flex flex-col justify-between text-white text-center">
        {/* Header */}
        <div className="flex flex-col">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-16">
            Building your personalized job engine...
          </p>
        </div>

        {/* Task list */}
        <ul className="text-left text-gray-300 space-y-3 mb-10">
          {data.tasks?.map((task, index) => (
            <li
              key={index}
              className={`transition-opacity ${
                index * 25 < progress ? "text-white" : "opacity-50"
              }`}
            >
              {task}
            </li>
          ))}
        </ul>

        {/* Spinner */}
        <div className="flex justify-center">
          <Spinner color="purple" size="xl" />
        </div>
      </Card>
    </div>
  );
}