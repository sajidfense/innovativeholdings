"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 lg:bottom-8"
        >
          <Link
            href="/contact#consultation"
            className={cn(
              "flex items-center gap-2 rounded-full bg-navy px-6 py-3 shadow-lg text-white hover:bg-navy-light transition-colors border border-white/10"
            )}
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden />
            <span>Book a Consultation</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
