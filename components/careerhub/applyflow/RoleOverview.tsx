"use client";

import { Job } from "@/types";
import { Button } from "flowbite-react";

export default function RoleOverview({ job }: { job: Job }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{job.title}</h2>
      <p className="text-foreground/70">
        Here&apos;s what we found about this role and how your resume aligns:
      </p>

      {/* Insights section */}
      <div className="bg-white/5 p-8 mx-4 rounded-lg border border-white/10 space-y-4">

        {/* Highlights */}
        <div className="flex flex-row sm:flex-row sm:items-center sm:justify-around">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <span className="px-3 py-1 text-sm rounded-full border border-green-400 text-green-400 bg-green-400/10 font-medium">
              Highlights
            </span>
          </div>
          <p className="ml-2 text-sm text-foreground/80 sm:text-right">
            Your experience matches {job.company}&apos;s focus on{" "}
            {job.tags.slice(0, 2).join(", ")}.
          </p>
        </div>

        {/* Potential Gaps */}
        <div className="flex flex-row sm:flex-row sm:items-center sm:justify-around">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <span className="px-3 py-1 text-sm rounded-full border border-green-400 text-green-400 bg-green-400/10 font-medium">
              Potential Gaps
            </span>
          </div>
          <p className="ml-2 text-sm text-foreground/80 sm:text-right">
            Consider strengthening your references to {job.skills[0]}.
          </p>
        </div>
      </div>

      {/* Resume Preview */}
      <div className="bg-white/5 p-8 mx-4 rounded-lg border border-white/10">
        <h3 className="text-lg font-semibold mb-2">Resume Preview</h3>
        <pre className="text-sm text-foreground/70 overflow-auto max-h-64 whitespace-pre-wrap">
          [Template resume content here...]
        </pre>
      </div>

      {/* Action Button */}
      <div className="float-right pt-4 mx-4">
        <Button color="purple">Approve & Apply →</Button>
      </div>
    </div>
  );
}