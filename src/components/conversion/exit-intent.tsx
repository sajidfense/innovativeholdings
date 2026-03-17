"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ExitIntent() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves from top of viewport
      if (e.clientY <= 0) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPopup(false);
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasShown]);

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 p-6"
            role="dialog"
            aria-labelledby="exit-intent-title"
            aria-modal="true"
          >
            <div className="rounded-xl bg-white p-8 shadow-2xl">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute right-4 top-4 rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
              <h2
                id="exit-intent-title"
                className="text-2xl font-semibold text-navy"
              >
                Before You Go
              </h2>
              <p className="mt-2 text-gray-600">
                Get a complimentary Strategy Audit. Submit your company details
                and receive a confidential assessment—no commitment required.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild size="lg" className="w-full">
                  <Link href="/resources">Request Free Strategy Audit</Link>
                </Button>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  No thanks, I&apos;ll pass
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
