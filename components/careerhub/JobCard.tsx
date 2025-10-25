"use client";

import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Link from "next/link";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

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
    <Card className="rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-all duration-300 shadow-lg">
      <div className="p-6 sm:p-8 flex flex-col gap-5">
        {/* Header */}
        <div
          className={`flex gap-3 ${
            isMobile ? "flex-col" : "flex-row items-start justify-between"
          }`}
        >
          {/* Left: Title + Company (Left aligned) */}
          <div className="text-left">
            <h3 className="text-xl font-semibold text-white">{job.title}</h3>
            <p className="text-sm text-foreground/60">{job.company}</p>
          </div>

          {/* Right: Tags / Info Badges */}
          <div
            className={`flex flex-wrap gap-2 ${
              isMobile ? "justify-start mt-2" : "justify-end"
            }`}
          >
            {[job.location, job.salary, ...job.tags].map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1 px-3 py-1 text-xs rounded-full border border-white/20 text-white/80 bg-white/[0.05]"
              >
                {getIcon(tag)}
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description (Left aligned) */}
        <p className="text-sm text-foreground/70 leading-relaxed text-left">
          Lead strategy for {job.company}&apos;s infrastructure platform,
          driving scale, reliability, and developer productivity. Looking for a
          technical PM who thrives in cross-functional work and can balance
          long-term vision with iterative delivery.
        </p>

        {/* Divider */}
        <hr className="border-white/10" />

        {/* Skills + Fit (Left aligned content, right-aligned button) */}
        <div
          className={`flex gap-5 ${
            isMobile ? "flex-col" : "flex-row items-center justify-between"
          }`}
        >
          {/* Left: Skills + Fit */}
          <div className="flex flex-col gap-2 text-left">
            <h4 className="text-base font-semibold text-white">
              Skills + Fit
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 text-sm rounded-full border border-green-400 text-green-400 bg-green-400/10 font-medium">
                {job.fit}
              </span>
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

          {/* Right: Apply button */}
          <div className={isMobile ? "mt-2" : "shrink-0"}>
            <Link href={`/careerhub/${job.id}`}>
              <button className="w-full px-5 py-2 text-sm font-medium text-white rounded-md border border-purple-400 hover:border-purple-300 hover:bg-purple-500/10 transition-all duration-300">
                Apply Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}