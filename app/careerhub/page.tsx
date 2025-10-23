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
      <div className="min-h-screen bg-background text-foreground relative flex">
        <SidebarNav />
        <main className="flex-1 p-4 md:p-10 relative z-0 ml-0 md:ml-[10%]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative flex">
      {/* Sidebar */}
      <SidebarNav />

      {/* Main content */}
      <main
        className="
          flex-1
          p-8 md:p-10
          relative
          z-0
          ml-0 md:ml-[10%]
          transition-all duration-300
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

        <JobFeed />
      </main>
    </div>
  );
}