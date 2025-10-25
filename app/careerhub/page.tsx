"use client";

import { useState, useEffect } from "react";
import SidebarNav from "@/components/careerhub/SidebarNav";
import Launch from "@/components/careerhub/Launch";
import JobFeed from "@/components/careerhub/JobFeed";

export default function CareerHubPage() {
  const [showLaunchModal, setShowLaunchModal] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex bg-background text-foreground relative overflow-hidden">
        <SidebarNav />
        <main className="flex-1 md:p-10 relative z-0 ml-0 md:ml-[10%]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-background text-foreground relative overflow-hidden">
      {/* Sidebar */}
      <SidebarNav />

      {/* Main content (scrollable area) */}
      <main
        className="
          flex-1
          relative
          z-0
          ml-0 md:ml-[10%]
          transition-all duration-300
          overflow-y-auto
        "
      >
        {/* Launch Modal */}
        <div
          className={`transition-opacity duration-500 ${
            showLaunchModal ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <Launch
            isVisible={showLaunchModal}
            onClose={() => setShowLaunchModal(false)}
          />
        </div>

        {/* Main job feed */}
        <JobFeed />
      </main>
    </div>
  );
}