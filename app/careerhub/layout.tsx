"use client";

import SidebarNav from "@/components/careerhub/SidebarNav";

export default function CareerHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-background text-foreground relative">
      {/* Sidebar - fixed on desktop */}
      <aside
        className="
          hidden md:flex
          fixed left-0 top-0 bottom-0
          w-[10%]
          bg-background/80
          border-r border-white/10
          backdrop-blur-md
          z-20
        "
      >
        <SidebarNav />
      </aside>

      {/* Main content area */}
      <main
        className="
          flex-1
          md:ml-[10%]
          p-6 sm:p-8 md:p-10
          relative
          z-10
          overflow-y-auto
        "
      >
        {children}
      </main>
    </div>
  );
}