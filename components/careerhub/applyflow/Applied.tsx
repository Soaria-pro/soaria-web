"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "flowbite-react";
import Card from "@/components/Card";

interface ApplyModalProps {
  onClose: () => void;
  isVisible: boolean;
}

export default function ApplyModal({ onClose, isVisible }: ApplyModalProps) {
  // 🔹 Disable background scroll while modal is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="apply-modal"
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
                Congrats!
              </h1>

              <p className="text-lg text-foreground/80 mb-10 max-w-xl mx-auto space-y-2">
                <span className="block">
                  You've just experienced most of what we're calling The Loop, the core job search experience in Soaria.
                </span>
                <span className="block">
                  Now, in the live version of Soaria, this is when you'd have the chance to chat with our AI to give feedback on the resume changes, request edits, or ask questions.  
                </span>
                <span className="block">
                  Once you have a version you like, you'll click Accept & Apply, the optimized resume will download to your computer, and a browser tab with the role wiil open for you to apply. It's important that you're the one who fills out the application so you're not flagged as a bot.
                </span>
                <span className="block">
                  When you come back to Soaria, we'll prompt you to confirm you applied. And that's it! Better fit jobs, better outcomes. Faster.   
                </span>
                <span className="block">
                 Interested? Sign up for the waitlist today!  
                </span>
              </p>

              <Button color="purple" size="lg" onClick={onClose}>
                Close
              </Button>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}