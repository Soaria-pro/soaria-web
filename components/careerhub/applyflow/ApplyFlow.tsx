"use client";

import { Job } from "@/types"; // ✅ points to /types.ts
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import ThinkingSequence from "./ThinkingSequence";
import RoleOverview from "./RoleOverview";
// import TooltipWalkthrough if needed

export default function ApplyFlow({ job }: { job: Job }) {
  const [phase, setPhase] = useState<"thinking" | "overview">("thinking");

  useEffect(() => {
    const timer = setTimeout(() => setPhase("overview"), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <Card className="max-w-4xl w-full bg-background/70 border border-white/10 p-12 text-white relative">
        {phase === "thinking" ? (
          <ThinkingSequence />
        ) : (
          <RoleOverview job={job} />
        )}
      </Card>
    </div>
  );
}