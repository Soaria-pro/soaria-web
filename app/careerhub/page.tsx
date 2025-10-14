"use client";

import { useState } from "react";
import SidebarNav from "@/components/careerhub/SidebarNav";
import CareerHubMain from "@/components/careerhub/CareerHubMain";
import Launch from "@/components/careerhub/Launch";

export default function CareerHubPage() {
  const [showLaunch, setShowLaunch] = useState(true);

  return (
    <div className="flex min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Persistent Sidebar */}
      <SidebarNav />

      {/* Main content area */}
      <div className="flex-1 relative overflow-hidden">
        <CareerHubMain />

        {/* Launch overlay on top of main content */}
        {showLaunch && (
          <Launch onClose={() => setShowLaunch(false)} />
        )}
      </div>
    </div>
  );
}