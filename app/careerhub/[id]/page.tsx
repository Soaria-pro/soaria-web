"use client";

import { useParams } from "next/navigation";
import jobs from "@/data/jobs.json";
import ApplyFlow from "@/components/careerhub/applyflow/ApplyFlow";

export default function ApplicationPage() {
  const { id } = useParams();
  const job = jobs.jobs.find((j) => j.id.toString() === id);

  if (!job) {
    return (
      <main className="flex justify-center items-center min-h-screen text-foreground/70">
        <p>Job not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full p-8 bg-background text-foreground">
      <ApplyFlow job={job} />
    </main>
  );
}