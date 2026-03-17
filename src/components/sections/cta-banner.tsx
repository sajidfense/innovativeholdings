"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative bg-white py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-navy"
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-mid" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,rgba(37,99,235,0.15),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(29,78,216,0.1),transparent)]" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 lg:px-20 lg:py-24">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

              {/* Left: text */}
              <div className="max-w-xl">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-4 flex items-center gap-3"
                >
                  <div className="h-px w-8 bg-blue-400/60" />
                  <span className="text-label-sm font-medium uppercase tracking-widest text-blue-400">
                    Ready to grow?
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-display-md font-semibold text-white sm:text-display-lg"
                >
                  Speak with our advisors
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-4 text-body-lg text-slate-300/80"
                >
                  Schedule a confidential consultation to discuss your growth challenges and
                  explore how we can help you achieve extraordinary outcomes.
                </motion.p>

                {/* Social proof */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8 flex flex-wrap items-center gap-6"
                >
                  {["No obligation", "Strictly confidential", "Senior advisor led"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-400">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-400/60" />
                      {item}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right: CTAs */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-4 lg:w-72 lg:flex-shrink-0"
              >
                <Button
                  asChild
                  size="xl"
                  className="group w-full bg-accent hover:bg-accent-hover text-white shadow-glow-sm hover:shadow-glow-md transition-all duration-300"
                >
                  <Link href="/contact#consultation" className="gap-2">
                    <Calendar className="h-4 w-4" aria-hidden />
                    Book a Consultation
                    <ArrowRight className="h-4 w-4 ml-auto transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="xl"
                  className="group w-full border-white/20 bg-white/6 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300"
                  variant="outline"
                >
                  <Link href="/contact" className="gap-2">
                    <FileText className="h-4 w-4" aria-hidden />
                    Request a Proposal
                  </Link>
                </Button>

                <p className="text-center text-xs text-slate-500">
                  Typical response within 1 business day
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
