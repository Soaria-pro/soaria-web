"use client";

import Card from "@/components/Card";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";

export default function BuildingGraph({ data }: any) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p < 100 ? p + 25 : 100));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  if (!data) return null;

  return (
    <Card className="max-w-md text-left p-8 bg-background/80 backdrop-blur-md border border-white/10">
      <h2 className="text-2xl font-semibold mb-6 text-white">{data.title}</h2>

      <ul className="text-gray-300 space-y-2 mb-6">
        {data.tasks.map((task: string, index: number) => (
          <li
            key={index}
            className={`transition-opacity ${
              index * 20 < progress ? "text-white" : "opacity-50"
            }`}
          >
            {task}
          </li>
        ))}
      </ul>

      <div className="flex justify-center">
        <Spinner color="purple" size="xl" />
      </div>
    </Card>
  );
}