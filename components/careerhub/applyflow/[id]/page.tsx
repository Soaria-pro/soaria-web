"use client";

import ApplyFlow from "@/components/careerhub/applyflow/ApplyFlow";
import jobs from "@/data/jobs.json";

export default function CareerHubJobPage({ params }: { params: { id: string } }) {
  const job = jobs.jobs.find((j) => j.id.toString() === params.id);

  if (!job) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <p>Job not found.</p>
      </div>
    );
  }

  return <ApplyFlow job={job} />;
}