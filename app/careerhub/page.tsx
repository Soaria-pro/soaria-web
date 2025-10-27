"use client";

import { useState, useEffect } from "react";
import SidebarNav from "@/components/careerhub/SidebarNav";
import Launch from "@/components/careerhub/Launch";
import JobFeed from "@/components/careerhub/JobFeed";

export default function CareerHubPage() {
  const [showLaunchModal, setShowLaunchModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const hasSeenLaunch = sessionStorage.getItem("hasSeenLaunch");

    if (!hasSeenLaunch) {
      setShowLaunchModal(true);
      sessionStorage.setItem("hasSeenLaunch", "true");
    }
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
        {showLaunchModal && (
          <Launch
            isVisible={showLaunchModal}
            onClose={() => setShowLaunchModal(false)}
          />
        )}

        {/* Main job feed */}
        <JobFeed />
      </main>
    </div>
  );
}