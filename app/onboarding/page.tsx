"use client";

import { useState } from "react";
import RoleSelection from "@/components/onboarding/RoleSelection";
import MaterialsUpload from "@/components/onboarding/MaterialsUpload";
import BuildingGraph from "@/components/onboarding/BuildingGraph";
import currentRoles from "@/data/current-roles.json";
import Gradient from "@/components/Gradient";

const stepComponents = [RoleSelection, MaterialsUpload, BuildingGraph];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const StepComponent = stepComponents[step];

  return (
    <main className="relative isolate overflow-hidden min-h-screen flex items-center justify-center bg-background text-foreground">
      <Gradient />

      <div className="relative z-10">
        <StepComponent
          data={currentRoles}
          onNext={() =>
            setStep((prev) => Math.min(prev + 1, stepComponents.length - 1))
          }
          onBack={() => setStep((prev) => Math.max(prev - 1, 0))}
        />
      </div>
    </main>
  );
}