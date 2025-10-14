"use client";

import { Briefcase, User, FileText, Database, LayoutDashboard } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Career Hub", icon: LayoutDashboard },
  { label: "Job Feed", icon: Briefcase },
  { label: "Career Profile", icon: User },
  { label: "Applications", icon: FileText },
  { label: "Data & Insights", icon: Database },
];

export default function SidebarNav() {
  return (
    <aside className="w-64 bg-background/60 backdrop-blur-lg border-r border-white/10 p-6 hidden md:block">
      <h2 className="text-xl font-semibold mb-8 text-purple-400">Soaria</h2>
      <ul className="space-y-4">
        {navItems.map(({ label, icon: Icon }) => (
          <li
            key={label}
            className="flex items-center space-x-3 text-foreground/80 hover:text-purple-400 transition"
          >
            <Icon className="w-5 h-5" />
            <Link href="#">{label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}