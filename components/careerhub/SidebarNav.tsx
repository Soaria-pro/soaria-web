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

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsOpen(!mobile); // open by default on desktop, closed on mobile
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* 🔹 Mobile Toggle Button (hidden on md+) */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-400 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 md:hidden"
        >
          {isOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt2 className="w-6 h-6" />}
          <span className="sr-only">Toggle sidebar</span>
        </button>
      )}

      {/* 🔹 Sidebar */}
      <aside
        className={`${
          isMobile
            ? `fixed top-0 left-0 z-40 w-64 h-screen ${
                isOpen ? "block" : "hidden"
              } bg-background/90 backdrop-blur-lg border-r border-white/10 shadow-lg`
            : "relative z-20 w-64 h-screen bg-background/80 border-r border-white/10"
        }`}
      >

        <div className="h-full px-3 py-4 overflow-y-auto">
          <h2 className="px-3 py-4 text-2xl font-semibold text-foreground">
            Soaria
          </h2>

          <ul className="space-y-2 font-medium text-foreground/80">
            <li>
              <Link
                href="/careerhub"
                className="flex items-center p-2 rounded-lg hover:bg-white/5"
              >
                <HiHome className="w-5 h-5 text-foreground/60" />
                <span className="ms-3">Career Hub</span>
              </Link>
            </li>

            <li>
              <Link
                href="/careerhub/jobs"
                className="flex items-center p-2 rounded-lg hover:bg-white/5"
              >
                <HiDocumentText className="w-5 h-5 text-foreground/60" />
                <span className="ms-3">Job Feed</span>
              </Link>
            </li>

            <li>
              <Link
                href="/careerhub/profile"
                className="flex items-center p-2 rounded-lg hover:bg-white/5"
              >
                <HiUserCircle className="w-5 h-5 text-foreground/60" />
                <span className="ms-3">Career Profile</span>
              </Link>
            </li>

            <li>
              <Link
                href="/careerhub/applications"
                className="flex items-center p-2 rounded-lg hover:bg-white/5"
              >
                <HiClipboardList className="w-5 h-5 text-foreground/60" />
                <span className="ms-3">Applications</span>
              </Link>
            </li>

            <li>
              <Link
                href="/careerhub/insights"
                className="flex items-center p-2 rounded-lg hover:bg-white/5"
              >
                <HiChartPie className="w-5 h-5 text-foreground/60" />
                <span className="ms-3">Data & Insights</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* 🔹 Overlay only on mobile */}
      {isMobile && isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
        />
      )}
    </>
  );
}