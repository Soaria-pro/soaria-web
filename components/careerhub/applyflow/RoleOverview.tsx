"use client";

import { Button } from "flowbite-react";

export default function RoleOverview({ job }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{job.title}</h2>
      <p className="text-foreground/70">
        Here’s what we found about this role and how your resume aligns:
      </p>

      <div className="bg-white/5 p-4 rounded-lg border border-white/10">
        <p className="text-sm mb-2">
          🔍 <strong>Highlights:</strong> Your experience matches {job.company}’s
          focus on {job.tags.slice(0, 2).join(", ")}.
        </p>
        <p className="text-sm">
          ⚠️ <strong>Potential Gaps:</strong> Consider strengthening your
          references to {job.skills[0]}.
        </p>
      </div>

      <div className="bg-white/5 p-4 rounded-lg border border-white/10">
        <h3 className="text-lg font-semibold mb-2">Resume Preview</h3>
        <pre className="text-sm text-foreground/70 overflow-auto max-h-64 whitespace-pre-wrap">
          [Template resume content here...]
        </pre>
      </div>

      <div className="flex justify-between items-center pt-4">
        <p className="text-sm text-foreground/60 italic">
          Use the chat box below to request edits or feedback.
        </p>
        <Button color="purple">Approve & Apply →</Button>
      </div>
    </div>
  );
}