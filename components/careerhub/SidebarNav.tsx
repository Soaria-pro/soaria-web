"use client";

import { useState, useEffect } from "react";
import {
  HiHome,
  HiDocumentText,
  HiUserCircle,
  HiClipboardList,
  HiChartPie,
  HiMenuAlt2,
  HiX,
} from "react-icons/hi";

export default function SidebarNav() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsOpen(!mobile); // open on desktop by default
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    setHydrated(true);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!hydrated) return null;

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  // 🟣 The active route for now
  const active = "jobfeed";

  const navItems = [
    { name: "Career Hub", icon: HiHome, id: "careerhub" },
    { name: "Job Feed", icon: HiDocumentText, id: "jobfeed" },
    { name: "Career Profile", icon: HiUserCircle, id: "profile" },
    { name: "Applications", icon: HiClipboardList, id: "applications" },
    { name: "Data & Insights", icon: HiChartPie, id: "insights" },
  ];

  return (
    <>
      {/* 🔹 Mobile Top Bar */}
      {isMobile && (
        <div className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md border-b border-white/10 z-50 flex items-center justify-between px-4 py-3">
          <button
            onClick={toggleSidebar}
            className="text-2xl text-white focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenuAlt2 />}
          </button>
          <h1 className="text-lg font-semibold text-white">Soaria</h1>
        </div>
      )}

      {/* 🔹 Sidebar */}
      <aside
        className={`transition-transform duration-300 ease-in-out
          ${
            isMobile
              ? `fixed top-0 left-0 z-40 w-64 h-screen bg-[#0B0B0F] border-r border-white/10 shadow-xl transform ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }`
              : "relative z-20 w-64 h-screen bg-background/80 backdrop-blur-lg border-r border-white/10"
          }`}
      >
        <div
          className={`h-full px-3 py-6 overflow-y-auto ${
            isMobile ? "mt-10" : ""
          }`}
        >
          {!isMobile && (
            <h2 className="px-3 py-4 text-2xl font-semibold text-foreground">
              Soaria
            </h2>
          )}

          <ul className="space-y-2 font-medium text-foreground/80">
            {navItems.map(({ name, icon: Icon, id }) => {
              const isActive = id === active;
              const isDisabled = id !== "jobfeed";

              return (
                <li key={id}>
                  <div
                    className={`flex items-center p-2 rounded-lg transition
                      ${
                        isActive
                          ? "bg-primary/20 text-primary border border-primary/40"
                          : "text-foreground/60"
                      }
                      ${
                        isDisabled
                          ? "opacity-40 pointer-events-none"
                          : "hover:bg-white/5 cursor-pointer"
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="ms-3">{name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* 🔹 Overlay (mobile only) */}
      {isMobile && isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-30"
        />
      )}
    </>
  );
}