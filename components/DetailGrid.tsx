"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Card from "@/components/Card";
import { useRef, useEffect, useState } from "react";
import Gradient from "@/components/Gradient";

type Item = { title: string; body: string };

const ITEMS: Item[] = [
  {
    title: "Signal Over Noise",
    body:
      "Only high-fit roles. No spam, no dead ends. Updated in real-time based on what you actually want, not what your resume says or some messy job alert.",
  },
  {
    title: "Applications That Work",
    body:
      "Role-optimized resumes you control. Every edit teaches the system. Recruiters see proof, not keywords.",
  },
  {
    title: "Interviews, Not Applications",
    body:
      "More concurrent interviews = more offers = more negotiating power. Land your next role in weeks, not months, on your terms.",
  },
  {
    title: "ML-Native Flywheel",
    body:
      "Fresh jobs → personalized streams → résumé optimization → semantic graph. Every interaction and improvement helps Soaria improve and predict the role & resumes most likely to land you more interviews.",
  },
  {
    title: "You're In Control",
    body:
      "No black boxes. Every match explained, every edit visible, every optimization is yours to approve. AI assists, you decide.",
  },
];

// ✅ custom hook for media queries
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    setMatches(media.matches); // set initial
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export default function DetailGrid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const isMobile = useMediaQuery("(max-width: 639px)");

  // ✅ Define transforms only once
  const leftX: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["-2%", "0%"] : ["-8%", "0%"]
  );
  const rightX: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["2%", "0%"] : ["8%", "0%"]
  );
  const opacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.1, 0.3],
    [0, 1]
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 sm:py-32 overflow-x-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <Gradient className="w-full h-full scale-x-[-1] opacity-40" />
      </div>

      <div className="relative mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              style={{
                x: idx % 2 === 0 ? leftX : rightX,
                opacity,
              }}
            >
              <Card
                className="
                  h-full mx-auto text-left px-6 sm:px-8 lg:px-10 py-12 shadow-xl
                  max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl
                "
              >
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-foreground/80 text-sm sm:text-base leading-relaxed">
                  {item.body}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}