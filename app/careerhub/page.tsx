"use client";

import SidebarNav from "@/components/careerhub/SidebarNav";
import CareerHubMain from "@/components/careerhub/CareerHubMain";

export default function CareerHubPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <SidebarNav />

      {/* Main content */}
      <main
        className="
          ml-[10%]
          p-4 md:p-10
          relative
          z-0
        "
      >
        <CareerHubMain />
      </main>
    </div>
  );
}