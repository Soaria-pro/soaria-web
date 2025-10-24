"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
  const [hydrated, setHydrated] = useState(false); // ✅ guard to wait for client

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // ✅ Desktop: open by default
      // ✅ Mobile: closed by default
      setIsOpen(!mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    setHydrated(true); // ✅ mark ready after first render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🧠 Wait until we know if it's mobile/desktop before showing anything
  if (!hydrated) return null;

  const toggleSidebar = () => setIsOpen((prev) => !prev);

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
          ${isMobile
            ? `fixed top-0 left-0 z-40 w-64 h-screen bg-[#0B0B0F] border-r border-white/10 shadow-xl transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : "relative z-20 w-64 h-screen bg-background/80 backdrop-blur-lg border-r border-white/10"
          }`}
      >
        <div className={`h-full px-3 py-6 overflow-y-auto ${isMobile ? "mt-10" : ""}`}>
          {!isMobile && (
            <h2 className="px-3 py-4 text-2xl font-semibold text-foreground">Soaria</h2>
          )}

          <ul className="space-y-2 font-medium text-foreground/80">
            <li>
              <Link href="/careerhub" className="flex items-center p-2 rounded-lg hover:bg-white/5">
                <HiHome className="w-5 h-5 text-foreground/60" />
                <span className="ms-3">Career Hub</span>
              </Link>
            </li>
            <li>
              <Link href="/careerhub/jobs" className="flex items-center p-2 rounded-lg hover:bg-white/5">
                <HiDocumentText className="w-5 h-5 text-foreground/60" />
                <span className="ms-3">Job Feed</span>
              </Link>
            </li>
            <li>
              <Link href="/careerhub/profile" className="flex items-center p-2 rounded-lg hover:bg-white/5">
                <HiUserCircle className="w-5 h-5 text-foreground/60" />
                <span className="ms-3">Career Profile</span>
              </Link>
            </li>
            <li>
              <Link href="/careerhub/applications" className="flex items-center p-2 rounded-lg hover:bg-white/5">
                <HiClipboardList className="w-5 h-5 text-foreground/60" />
                <span className="ms-3">Applications</span>
              </Link>
            </li>
            <li>
              <Link href="/careerhub/insights" className="flex items-center p-2 rounded-lg hover:bg-white/5">
                <HiChartPie className="w-5 h-5 text-foreground/60" />
                <span className="ms-3">Data & Insights</span>
              </Link>
            </li>
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