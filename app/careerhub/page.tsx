"use client";

import { useState } from "react";
import SidebarNav from "@/components/careerhub/SidebarNav";
import CareerHubMain from "@/components/careerhub/CareerHubMain";
import Launch from "@/components/careerhub/Launch";

export default function CareerHubPage() {
  const [showLaunchModal, setShowLaunchModal] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground relative flex">
      {/* Sidebar */}
      <SidebarNav />

      {/* Main content */}
      <main
        className="
          flex-1
          p-4 md:p-10
          relative
          z-0
          ml-0 md:ml-[10%]
          transition-all duration-300
        "
      >
        {/* Launch modal stays mounted, just fades out */}
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

        {/* Keep main content always rendered to prevent layout shift */}
        <CareerHubMain />
      </main>
    </div>
  );
}