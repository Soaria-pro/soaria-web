"use client";

import Card from "@/components/Card";

export default function RoleSelection({ data, onNext }: any) {
  if (!data) return null;

  return (
    <div className="flex items-center justify-center w-full min-h-screen px-6 sm:px-12 py-12 sm:py-20">
      <Card className="max-w-3xl w-full bg-background/80 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl px-16 sm:px-24 py-24 sm:py-28 flex flex-col justify-between text-center text-white">
        {/* Top section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-semibold">{data.title}</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6">{data.subtitle}</p>
        </div>

        {/* Middle section (buttons) */}
        <div className="flex flex-col gap-4 justify-center">
          {data.roles.map((role: string) => (
            <button
              key={role}
              onClick={onNext}
              className="text-purple-600 border border-purple-600 hover:text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-8 py-4 dark:text-purple-400 dark:border-purple-400 dark:hover:text-white dark:hover:bg-purple-500 transition"
            >
              {role}
            </button>
          ))}
        </div>

      </Card>
    </div>
  );
}