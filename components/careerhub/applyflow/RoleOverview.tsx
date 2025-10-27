"use client";

import { useState } from "react";
import { Job } from "@/types";
import { Button } from "flowbite-react";
import resumeData from "@/data/resume.json";
import Applied from "@/components/careerhub/applyflow/Applied";

export default function RoleOverview({ job }: { job: Job }) {
  const resume = resumeData.templateResume;

  // Merge base + role-specific keywords (unique only)
  const roleKeywords = Array.from(
    new Set([...resume.coreSkills, ...job.skills, ...job.tags])
  );

  // 🔹 Modal state
  const [showAppliedModal, setShowAppliedModal] = useState(false);

  // 🔹 Handle Approve & Apply click
  const handleApproveAndApply = () => {
    setShowAppliedModal(true);
  };

  return (
    <div className="space-y-6 relative">
      {/* Header */}
      <h2 className="text-2xl font-semibold">{job.title}</h2>
      <p className="text-foreground/70">
        Here&apos;s how your resume was tailored specifically for this role:
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
            Your background in {job.skills.slice(0, 2).join(", ")} aligns
            strongly with {job.company}&apos;s needs in{" "}
            {job.tags.slice(0, 2).join(", ")}.
          </p>
        </div>

        {/* Potential Gaps */}
        <div className="flex flex-row sm:flex-row sm:items-center sm:justify-around">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <span className="px-3 py-1 text-sm rounded-full border border-pink-400 text-pink-400 bg-pink-400/10 font-medium">
              Potential Gaps
            </span>
          </div>
          <p className="ml-2 text-sm text-foreground/80 sm:text-right">
            Consider emphasizing projects or experience related to{" "}
            {job.skills[job.skills.length - 1]} to stand out further.
          </p>
        </div>
      </div>

      {/* Resume Preview */}
      <div className="bg-white/5 p-8 mx-4 rounded-lg border border-white/10">
        {/* Title centered */}
        <h3 className="text-lg font-semibold mb-6 text-center">
          Optimized Resume Preview
        </h3>

        {/* Resume header (name + contact) centered */}
        <div className="text-center mb-6">
          <p className="text-xl font-semibold">{resume.header.name}</p>
          <p className="text-base text-foreground/80">{resume.header.title}</p>
          <p className="text-sm text-foreground/60 mt-1">
            {resume.header.contact.location} | {resume.header.contact.email} |{" "}
            {resume.header.contact.portfolio}
          </p>
        </div>

        {/* Resume body */}
        <pre
          className="text-base text-foreground/70 overflow-auto max-h-96 whitespace-pre-wrap leading-relaxed text-left font-sans"
        >
{`Summary:
${resume.summary}

Key Skills (optimized for ${job.title}):
${roleKeywords.join(", ")}

Experience:
${resume.experience
  .map(
    (exp) =>
`${exp.role} — ${exp.company} (${exp.period})
${exp.highlights.map((h) => `• ${h}`).join("\n")}`
  )
  .join("\n\n")}

Education:
${resume.education
  .map((edu) => `${edu.degree}, ${edu.school} (${edu.graduated})`)
  .join("\n")}
`}
        </pre>
      </div>

      {/* Action Button */}
      <div className="float-right pt-4 mx-4">
        <Button color="purple" onClick={handleApproveAndApply}>
          Approve & Apply →
        </Button>
      </div>

      {/* 🔹 Applied Modal */}
      <Applied
        isVisible={showAppliedModal}
        onClose={() => setShowAppliedModal(false)}
      />
    </div>
  );
}