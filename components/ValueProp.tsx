"use client";

import { Volume2, Brain, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function ValueProp() {
  const containerRef = useRef(null);

  const items = [
    {
      icon: Volume2,
      title: "Noise → Signal",
      body: "The core loop that turns noise into signal — land interviews, faster.",
    },
    {
      icon: Brain,
      title: "Smarter than Generic AI",
      body: "The job search is broken. Noisy boards, opaque filters, generic AI — Soaria learns from every action.",
    },
    {
      icon: Rocket,
      title: "Compounding Personalization",
      body: "Each step builds on the last, creating tailored results that others can’t match.",
    },
  ];

  return (
    <section ref={containerRef} className="relative isolate bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" />

      <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* 👇 Fade-in intro section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }} // trigger when 50% is visible
          className="mx-auto w-full max-w-4xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            We&apos;re changing the language of work
          </h2>

          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-foreground/90">
            Soaria learns what you actually want from your job search, not just your resume — 
            then translates it into applications recruiters can&apos;t ignore.
          </p>
        </motion.div>

        {/* Icon-based points */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto py-24 sm:py-32">
          {items.map((it) => (
            <div key={it.title} className="flex flex-col items-center text-center px-4">
              <it.icon className="h-10 w-10 text-[#7F5AF0]" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">{it.title}</h3>
              <p className="mt-2 text-base text-foreground/70">{it.body}</p>
            </div>
          ))}
        </div>

        {/* Gradient Callout */}
        <div className="mt-16 text-center">
          <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] leading-relaxed">
            This is where the future of hiring begins
          </p>
        </div>
      </div>
    </section>
  );
}