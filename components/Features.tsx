"use client";

import Card from "@/components/Card";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.6 } },
};

export default function Features() {
  const items = [
    {
      title: "Fresh Feed",
      body: "No noise. Only high-fit roles, updated daily",
    },
    {
      title: "Resume Alignment",
      body: "Edits you control, tailored for every role",
    },
    {
      title: "Faster Outcomes",
      body: "More interviews = More offers",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <motion.div
        className="mx-auto w-full max-w-screen-xl"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <motion.div key={it.title} variants={item}>
              <Card className="flex flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-10 py-12">
                <h3 className="text-2xl font-semibold text-foreground">
                  {it.title}
                </h3>
                <p className="mt-3 text-foreground/80 text-base">{it.body}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}