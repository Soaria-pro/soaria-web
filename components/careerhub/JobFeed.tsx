"use client";

import jobs from "@/data/jobs.json";
import JobCard from "@/components/careerhub/JobCard";

export default function JobFeed() {
  return (
    <section className="w-full md:w-auto lg:px-8 mt-14">
      <div className="bg-background/40 border border-white/10 rounded-xl p-8 shadow-[0_0_20px_rgba(127,90,240,0.2)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold">Fresh Roles</h2>
        </div>

        <p className="text-foreground/70 mb-8">
          Check out your freshest, high-fit opportunities below.
        </p>

        {/* Scrollable job list */}
        <div className="space-y-6 overflow-y-auto max-h-[75vh] pr-2 tw-scrollbar">
          {jobs.jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}