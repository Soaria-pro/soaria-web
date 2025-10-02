/*"use client";

export default function ValueProp() {
  return (
    <section className="relative isolate">

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      />
      <div className="px-4 py-24 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-screen-xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            We’re changing the language of work
          </h2>
          <h3 className="text-1xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
           Soaria learns what you actually want from your job search, not just your resume, then translates it into applications recruiters can't ignore.
          </h3>
          <p className="mt-3 text-foreground/80">
            The core loop that turns noise into signal — land interviews, faster
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-foreground/70">
            The job search is broken. Noisy boards, opaque filters, generic AI — Soaria
            learns from every action, compounding into personalization others can’t match
          </p>

          <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D]">
            This is where the future of hiring begins
          </p>
        </div>
      </div>
    </section>
  );
}*/
"use client";

import { Volume2, Brain, Rocket } from "lucide-react";

export default function ValueProp() {
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
    <section className="relative isolate bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" />

      <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-4xl text-center">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            We’re changing the language of work
          </h2>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-foreground/90">
            Soaria learns what you actually want from your job search, not just your resume — 
            then translates it into applications recruiters can't ignore.
          </p>
        </div>

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