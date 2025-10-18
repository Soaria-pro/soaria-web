"use client";

import Card from "@/components/Card";
import { MapPin, DollarSign, Building2, CircleDot } from "lucide-react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  tags: string[];
  fit: string;
  skills: string[];
};

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  // Define icon mapping for known tags
  const getIcon = (label: string) => {
    const iconClass = "w-3.5 h-3.5 text-white/70";
    if (label.toLowerCase().includes("seattle"))
      return <MapPin className={iconClass} />;
    if (label.includes("$")) return <DollarSign className={iconClass} />;
    if (label.toLowerCase().includes("remote"))
      return <Building2 className={iconClass} />;
    if (label.toLowerCase().includes("platform"))
      return <CircleDot className={iconClass} />;
    return null;
  };

  return (
    <Card
      className={[
        // gradient border via border-image
        "rounded-xl border-[2px]",
        "[border-image:linear-gradient(to_right,#ec4899,#8b5cf6)_1]",
        "bg-white/[0.06] backdrop-blur-sm text-left flex flex-col gap-5 p-6",
      ].join(" ")}
    >
      {/* Inner content container */}
      <div className="rounded-xl p-8 text-left flex flex-col gap-5 bg-white/[0.06]">
        {/* Header + Info container */}
        <div className="flex flex-row sm:flex-col sm:items-start sm:justify-between">
          {/* Left: Job title + company */}
          <div>
            <h3 className="text-lg font-semibold text-white">{job.title}</h3>
            <p className="text-foreground/70">{job.company}</p>
          </div>

          {/* Right: Info badges (location, salary, etc.) */}
          <div className="flex flex-wrap gap-2 h-8">
            {[job.location, job.salary, ...job.tags].map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1 px-3 py-1 text-xs rounded-md border border-white/20 text-white/80 bg-white/[0.05]"
              >
                {getIcon(tag)}
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-foreground/70 leading-relaxed">
          Lead strategy for {job.company}’s infrastructure platform, driving
          scale, reliability, and developer productivity. Looking for a
          technical PM who thrives in cross-functional work and can balance
          long-term vision with iterative delivery.
        </p>

        {/* Skills + Fit */}
        <div className="flex flex-row sm:flex-col sm:items-center sm:justify-between gap-4">
          <h4 className="text-lg font-semibold text-white mb-2">
              Skills + Fit</h4>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {/* Fit badge */}
              <span className="px-3 py-1 text-sm rounded-full border border-green-400 text-green-400 bg-green-400/10 font-medium">
                {job.fit}
              </span>

              {/* Skills */}
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-md border border-cyan-500/30 text-cyan-400 bg-cyan-400/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <button
            className={[
              "px-5 py-2 text-sm font-medium text-white rounded-md border",
              "border-purple-400 hover:border-purple-300 hover:bg-purple-500/10",
              "transition-all duration-300",
            ].join(" ")}
          >
            Apply Now!
          </button>
        </div>
      </div>
    </Card>
  );
}