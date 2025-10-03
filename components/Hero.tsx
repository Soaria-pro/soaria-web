"use client";

import Card from "@/components/Card";
import { Button } from "flowbite-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-4 py-4 sm:px-6 lg:px-8 pt-12">
      <Card className="px-6 sm:px-8 lg:px-12 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-widest text-xs font-semibold text-purple-400 mb-4"
        >
          Welcome to Soaria
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D]">
            Hiring has a language problem
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 text-2xl sm:text-3xl text-foreground/80 py-6"
        >
          Land more interviews, faster. Watch your career Soar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
          className="mt-8 flex flex-row flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-9000"
          >
            Try the Demo
          </Button>
          <Button
            size="lg"
            outline
            className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          >
            How It Works
          </Button>
        </motion.div>
      </Card>
    </section>
  );
}