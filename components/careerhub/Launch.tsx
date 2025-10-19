"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "flowbite-react";
import Card from "@/components/Card";

interface LaunchProps {
  onClose: () => void;
  isVisible: boolean;
}

export default function Launch({ onClose, isVisible }: LaunchProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="launch-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 z-40 flex items-center justify-center backdrop-blur-md bg-black/40"
        >
          {/* Radial glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(127,90,240,0.35),_transparent_70%)] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10 w-full max-w-xl px-12 sm:px-10"
          >
            <Card className="justify-items-center relative text-center py-24 sm:py-28 px-16 sm:px-20 bg-background/70 backdrop-blur-2xl border border-purple-500/30 shadow-[0_0_80px_rgba(127,90,240,0.25)]">
              <h1 className="text-4xl font-semibold mb-6 text-white">
                Your Engine Is Live
              </h1>
              <p className="text-lg text-foreground/80 mb-10 max-w-xl mx-auto">
                Your profile is now feeding your personalized job engine. Explore
                your Career Hub to see curated roles, track applications, and
                optimize your profile.
              </p>
              <Button color="purple" size="lg" onClick={onClose}>
                Launch Hub
              </Button>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}