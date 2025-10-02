"use client";

import Card from "@/components/Card";
import { Button } from "flowbite-react";

export default function Hero() {
  return (
    <section className="px-4 py-4 sm:px-6 lg:px-8 pt-12">
      <Card className="px-6 sm:px-8 lg:px-12 py-24">
        <p className="uppercase tracking-widest text-xs font-semibold text-purple-400 mb-4">
          Welcome to Soaria
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
          Hiring has a language problem
        </h1>
        <p className="mt-4 text-xl sm:text-4xl text-foreground/80 py-4">
          Land more interviews, faster. Watch you career Soar.
        </p>
        <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-9000">
            Try the Demo
          </Button>  
          <Button
            size="lg"
            outline
            className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
            How It Works
          </Button>
        </div>
      </Card>
    </section>
  );
}