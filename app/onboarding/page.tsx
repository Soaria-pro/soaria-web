"use client";

import { useState } from "react";
import RoleSelection from "@/components/onboarding/RoleSelection";
import MaterialsUpload from "@/components/onboarding/MaterialsUpload";
import BuildingGraph from "@/components/onboarding/BuildingGraph";
import onboardingData from "@/data/onboarding.json";
import Gradient from "@/components/Gradient";

const stepComponents = [RoleSelection, MaterialsUpload, BuildingGraph];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const StepComponent = stepComponents[step];
  const stepData = onboardingData?.steps?.[step];

  if (!stepData) return null;

  return (
    <main className="relative isolate overflow-hidden min-h-screen flex items-center justify-center bg-background text-foreground">

      <Gradient />


      <div className="relative z-10">
        <StepComponent
          data={stepData}
          onNext={() => setStep((prev) => Math.min(prev + 1, stepComponents.length - 1))}
        />
      </div>
    </main>
  );
}