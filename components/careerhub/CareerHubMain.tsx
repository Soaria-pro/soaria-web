"use client";

import JobCard from "@/components/careerhub/JobCard";
import { Button } from "flowbite-react";

export default function CareerHubMain() {
  const placeholderJobs = [
    {
      id: 1,
      title: "Senior Product Manager",
      company: "Firefly",
      location: "Seattle",
      salary: "$170k–$200k",
      tags: ["Remote", "Platform Infrastructure"],
      fit: "92% High Fit",
      skills: ["API Strategy", "Cloud Infra", "Developer Tools", "Site Reliability"],
    },
    {
      id: 2,
      title: "Senior Product Manager",
      company: "Tyrell Corporation",
      location: "Seattle",
      salary: "$170k–$200k",
      tags: ["Remote", "Platform Infrastructure"],
      fit: "90% High Fit",
      skills: ["API Strategy", "Data Infra", "Datametrics", "ML Infra"],
    },
  ];

  return (
    <main className="p-8 w-2xl">
      <div className="bg-background/40 border border-white/10 rounded-xl p-8 shadow-[0_0_20px_rgba(127,90,240,0.2)]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold">Fresh Roles</h2>
          <Button color="purple" size="sm">
            Go to Career Hub →
          </Button>
        </div>

        <p className="text-foreground/70 mb-8">
          Check out your three freshest, high-fit opportunities
        </p>

        <div className="space-y-6">
          {placeholderJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </main>
  );
}