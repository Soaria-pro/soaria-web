"use client";

import { useState, useEffect } from "react";
import Card from "@/components/Card";
import ThinkingSequence from "./ThinkingSequence";
import RoleOverview from "./RoleOverview";
{/*import TipWalkthrough from "./TipWalkthrough";*/}

export default function ApplyFlow({ job }: any) {
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

  {/*{phase === "overview" && <TipWalkthrough />}*/}
    </div>
  );
}