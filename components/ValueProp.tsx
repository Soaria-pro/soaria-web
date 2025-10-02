"use client";

export default function ValueProp() {
  return (
    <section className="relative isolate">
      {/* subtle background glow, fluid (no fixed sizes) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      />
      <div className="px-4 py-24 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-screen-xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            We’re changing the language of work
          </h2>
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
}