import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ClientProviders from "./ClientProviders";

// Fonts
const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Soaria",
  description: "Better fit jobs, faster. Watch your career Soar 🚀",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={satoshi.className}>
      <body className="antialiased font-sans bg-background text-foreground">
        {/* 👇 Flowbite + client-only logic loads here */}
        <ClientProviders>{children}</ClientProviders>
        <Analytics />
      </body>
    </html>
  );
}