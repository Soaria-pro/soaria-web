"use client";

import Card from "@/components/Card";
import { Button } from "flowbite-react";
import { motion } from "framer-motion";
import { span } from "framer-motion/client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-28 flex items-center justify-center min-h-[80vh]">
      <Card className="max-w-3xl text-center px-8 sm:px-12 py-24 bg-background/80 backdrop-blur-md border border-white/10 shadow-lg">
        {/* Small intro label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.2em] text-sm font-semibold text-purple-400 mb-6"
        >
          Welcome to Soaria
        </motion.p>

        {/* Main headline */} 
        <motion.h1 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }} 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-tight" > 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D]"> 
            Hiring has a language problem. 
          </span> 
          <br className="block lg:hidden" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0]"> 
            We&apos;re fixing it.
          </span>
        </motion.h1>

        {/* Supporting subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-foreground/70 mx-auto"
        >
          Land more interviews, faster. Watch your career soar!
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, type: 'spring' }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
        <Link href="https://i.prefinery.com/projects/i1izdm4q/users/new?display=hosted" target="_blank">
          <Button
            size="lg"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-6 py-3 dark:bg-purple-600 dark:hover:bg-purple-700"
          >
            Try the Demo
          </Button>
        </Link>
        <Link href="https://i.prefinery.com/projects/i1izdm4q/users/new?display=hosted" target="_blank">
          <Button
            size="lg"
            outline
            className="text-purple-600 border border-purple-600 hover:text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-6 py-3 dark:text-purple-400 dark:border-purple-400 dark:hover:text-white dark:hover:bg-purple-500">
            Sign Up
          </Button>
        </Link>
        </motion.div>
      </Card>
    </section>
  );
}