"use client";

import { Badge } from "flowbite-react";

export default function JobCard({ job }: any) {
  return (
    <div className="p-6 border border-white/10 rounded-xl bg-background/50 hover:border-purple-400/40 transition">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-foreground/70">{job.company}</p>
        </div>
        <div className="text-sm text-foreground/60 mt-2 sm:mt-0">
          {job.location} • {job.salary}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.map((tag: string) => (
          <Badge key={tag} color="gray" size="sm">
            {tag}
          </Badge>
        ))}
      </div>

      <p className="text-sm text-foreground/70 mb-4">
        Lead strategy for {job.company}’s infrastructure platform. Looking for
        a technical PM who thrives in cross-functional work and can balance
        long-term vision with iterative delivery.
      </p>

      <div className="flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2 py-1 text-xs rounded-md bg-green-500/20 text-green-400">
            {job.fit}
          </span>
          {job.skills.map((skill: string) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs rounded-md bg-white/5 text-foreground/70"
            >
              {skill}
            </span>
          ))}
        </div>

        <button className="px-4 py-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition">
          Apply Now →
        </button>
      </div>
    </div>
  );
}