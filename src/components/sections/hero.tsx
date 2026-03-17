"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// Lazy load the 3D component
const ParticleField = dynamic(
  () => import("@/components/3d/particle-field").then((m) => m.ParticleField),
  { ssr: false, loading: () => null }
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" as const },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: "easeOut" as const, delay: 0.2 },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-navy"
      aria-label="Hero"
    >
      {/* 3D Particle Field — absolute background */}
      <ParticleField className="absolute inset-0 z-0" />

      {/* Layered gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-navy/80 via-navy/50 to-navy" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_60%_at_60%_40%,rgba(37,99,235,0.12),transparent)]" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_40%_40%_at_20%_70%,rgba(29,78,216,0.08),transparent)]" />

      {/* Noise texture */}
      <div className="absolute inset-0 z-[2] opacity-[0.025] bg-noise pointer-events-none" />

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-32 lg:px-8"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl text-center"
        >
          {/* Label */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-label-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Global Strategy & Advisory
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-display-lg font-semibold tracking-tight text-white sm:text-display-xl lg:text-display-2xl xl:text-display-3xl text-balance"
          >
            Innovating Growth.{" "}
            <span className="relative">
              <span className="gradient-text-blue">Transforming</span>
            </span>{" "}
            Businesses.
          </motion.h1>

          {/* Divider line */}
          <motion.div
            variants={lineVariants}
            style={{ originX: 0.5 }}
            className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
          />

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-8 max-w-2xl text-body-xl text-slate-300/90 text-balance"
          >
            Strategic consulting and operational advisory for companies ready to
            scale. We partner with leaders to build enduring competitive advantage.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="xl"
              className="group relative overflow-hidden bg-accent hover:bg-accent-hover text-white shadow-glow-sm hover:shadow-glow-md transition-all duration-300 min-w-[200px]"
            >
              <Link href="/contact#consultation" className="gap-2">
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-white/20 text-white hover:bg-white/8 hover:border-white/30 hover:text-white backdrop-blur-sm transition-all duration-300 min-w-[200px]"
            >
              <Link href="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {["200+ Engagements", "15+ Years", "6 Industries", "Global Reach"].map((signal) => (
              <div key={signal} className="flex items-center gap-2 text-sm text-slate-400">
                <div className="h-1 w-1 rounded-full bg-blue-400/60" />
                <span>{signal}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-label-sm uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4" aria-hidden />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 z-[5] h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
