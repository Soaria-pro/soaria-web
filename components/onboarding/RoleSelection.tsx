"use client";

import Card from "@/components/Card";

// Shared interface for all onboarding step components
export interface OnboardingStepProps {
  data: {
    title?: string;
    subtitle?: string;
    roles?: string[];
    tasks?: string[];
  };
  onNext: () => void;
  onBack?: () => void;
}

export default function RoleSelection({ data, onNext }: OnboardingStepProps) {
  if (!data) return null;

  return (
    <div className="flex items-center justify-center w-full min-h-screen px-6 sm:px-12 py-12 sm:py-20">
      <Card className="max-w-3xl w-full bg-background/80 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl px-16 sm:px-24 py-24 sm:py-28 flex flex-col justify-between text-white">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            What roles are you targeting?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-16">
            Let's personalize your job engine! Choose your role:
          </p>
        </div>

        <div className="flex flex-col gap-6 justify-center mt-14">
          {data.roles?.map((role) => (
            <button
              key={role}
              onClick={onNext}
              className="text-purple-600 border border-purple-600 hover:text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-8 py-4 transition"
            >
              {role}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}