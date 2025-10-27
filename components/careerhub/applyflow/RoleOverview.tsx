"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Job } from "@/types";
import { Button } from "flowbite-react";
import resumeData from "@/data/resume.json";
import Applied from "@/components/careerhub/applyflow/Applied";

export default function RoleOverview({ job }: { job: Job }) {
  const router = useRouter();
  const resume = resumeData.templateResume;

  const [isMobile, setIsMobile] = useState(false);
  const [showAppliedModal, setShowAppliedModal] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleApproveAndApply = () => setShowAppliedModal(true);
  const handleBack = () => router.push("/careerhub");

  const roleKeywords = Array.from(
    new Set([...resume.coreSkills, ...job.skills, ...job.tags])
  );

  return (
    <div
      className="relative"
      style={{
        padding: isMobile ? "1rem" : "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* 🔹 Back Button (top-left aligned) */}
      <div style={{ textAlign: "left" }}>
        <button
          onClick={handleBack}
          className="px-4 py-1.5 text-sm font-medium text-white rounded-md border border-purple-400 hover:border-purple-300 hover:bg-purple-500/10 transition-all duration-300"
          style={{
            width: isMobile ? "40%" : "auto",
            marginBottom: "1rem",
          }}
        >
          ← Back
        </button>
      </div>

      {/* Header */}
      <div style={{ textAlign: isMobile ? "center" : "center" }}>
        <h2 className="text-2xl font-semibold mt-2">{job.title}</h2>
        <p className="text-foreground/70 mt-2">
          Here&apos;s how your resume was tailored specifically for this role:
        </p>
      </div>

      {/* Insights Section */}
      <div
        className="bg-white/5 rounded-lg border border-white/10"
        style={{
          padding: isMobile ? "0.75rem" : "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        {/* Highlights */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.75rem",
          }}
        >
          <span className="px-3 py-1 text-sm rounded-full border border-green-400 text-green-400 bg-green-400/10 font-medium w-fit">
            Highlights
          </span>
          <p className="text-sm text-foreground/80">
            Your background in {job.skills.slice(0, 2).join(", ")} aligns
            strongly with {job.company}&apos;s needs in{" "}
            {job.tags.slice(0, 2).join(", ")}.
          </p>
        </div>

        {/* Potential Gaps */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.75rem",
          }}
        >
          <span className="px-3 py-1 text-sm rounded-full border border-pink-400 text-pink-400 bg-pink-400/10 font-medium w-fit">
            Potential Gaps
          </span>
          <p className="text-sm text-foreground/80">
            Consider emphasizing projects or experience related to{" "}
            {job.skills[job.skills.length - 1]} to stand out further.
          </p>
        </div>
      </div>

      {/* Resume Preview */}
      <div
        className="bg-white/5 rounded-lg border border-white/10 pr-2 tw-scrollbar"
        style={{
          padding: isMobile ? "1rem" : "1.5rem",
          overflowY: "auto",
          maxHeight: isMobile ? "60vh" : "75vh",
        }}
      >
        <h3 className="text-lg font-semibold mb-6 text-center">
          Optimized Resume Preview
        </h3>

        <div className="text-center mb-6">
          <p className="text-xl font-semibold">{resume.header.name}</p>
          <p className="text-base text-foreground/80">{resume.header.title}</p>
          <p className="text-sm text-foreground/60 mt-1">
            {resume.header.contact.location} | {resume.header.contact.email} |{" "}
            {resume.header.contact.portfolio}
          </p>
        </div>

        <pre className="text-base text-foreground/70 whitespace-pre-wrap leading-relaxed text-left font-sans">
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

      {/* Action Buttons (bottom row) */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "center",
          gap: "1rem",
          paddingTop: "0.5rem",
        }}
      >
        {/* Left empty for alignment symmetry on desktop */}
        <div style={{ flex: 1, textAlign: "left" }}></div>

        {/* Apply button right aligned */}
        <div style={{ flex: 1, textAlign: isMobile ? "center" : "right" }}>
          <Button
            color="purple"
            onClick={handleApproveAndApply}
            style={{ width: isMobile ? "100%" : "auto" }}
          >
            Approve & Apply
          </Button>
        </div>
      </div>

      {/* Modal */}
      <Applied
        isVisible={showAppliedModal}
        onClose={() => setShowAppliedModal(false)}
      />
    </div>
  );
}