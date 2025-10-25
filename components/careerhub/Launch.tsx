"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "flowbite-react";
import Card from "@/components/Card";

interface LaunchProps {
  onClose: () => void;
  isVisible: boolean;
}

export default function Launch({ onClose, isVisible }: LaunchProps) {
  // 🔹 Disable background scroll while modal is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="launch-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-md bg-black/40"
        >
          {/* Radial glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(127,90,240,0.35),_transparent_70%)] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10 w-full max-w-xl px-2"
          >
            <Card className="justify-items-center relative text-center py-12 sm:py-28 px-4 sm:px-20 bg-background/70 backdrop-blur-2xl border border-purple-500/30 shadow-[0_0_80px_rgba(127,90,240,0.25)]">
              <h1 className="text-4xl font-semibold mb-6 text-white">
                Your Engine Is Live
              </h1>
              <p className="text-lg text-foreground/80 mb-10 max-w-xl mx-auto space-y-2">
                <span className="block">
                  We&rsquo;re still building out the Career Hub experience.
                </span>
                <span className="block">
                  In the meantime, your curated job feed is ready — start
                  applying and take the next step forward.
                </span>
              </p>
              <Button color="purple" size="lg" onClick={onClose}>
                Launch Job Feed
              </Button>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}