"use client";

import jobs from "@/data/jobs.json";
import JobCard from "@/components/careerhub/JobCard";
import { Button } from "flowbite-react";

export default function CareerHubMain() {

  return (
    <main className="p-8 w-full mx-auto " style={{ maxWidth: "125rem" }}>
      <div className="bg-background/40 border border-white/10 rounded-xl p-8 shadow-[0_0_20px_rgba(127,90,240,0.2)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold">Fresh Roles</h2>
          <Button color="purple" size="sm">
            Go to Career Hub →
          </Button>
        </div>

        <p className="text-foreground/70 mb-8">
          Check out your freshest, high-fit opportunities below.
        </p>

        {/* Scrollable job list */}
        <div className="space-y-6 overflow-y-auto max-h-[75vh] pr-2 scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-transparent">
          {jobs.jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </main>
  );
}