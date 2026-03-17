"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/constants";

const industryAccents: Record<string, string> = {
  technology: "from-blue-500/10 to-blue-600/5 hover:from-blue-500/15 hover:to-blue-600/10",
  healthcare: "from-violet-500/10 to-violet-600/5 hover:from-violet-500/15 hover:to-violet-600/10",
  finance: "from-cyan-500/10 to-cyan-600/5 hover:from-cyan-500/15 hover:to-cyan-600/10",
  "real-estate": "from-emerald-500/10 to-emerald-600/5 hover:from-emerald-500/15 hover:to-emerald-600/10",
  manufacturing: "from-amber-500/10 to-amber-600/5 hover:from-amber-500/15 hover:to-amber-600/10",
  "professional-services": "from-rose-500/10 to-rose-600/5 hover:from-rose-500/15 hover:to-rose-600/10",
};

const industryNumbers: Record<string, string> = {
  technology: "01",
  healthcare: "02",
  finance: "03",
  "real-estate": "04",
  manufacturing: "05",
  "professional-services": "06",
};

export function IndustriesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative bg-white py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end mb-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-accent" />
              <span className="label-tag">Industries</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-display-md font-semibold text-navy sm:text-display-lg"
            >
              Deep expertise across sectors
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xs text-sm text-gray-500"
          >
            Proven frameworks tailored to the dynamics of your industry — not generic advice.
          </motion.p>
        </div>

        {/* Industries grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={`/industries#${industry.id}`}
                className={`
                  group block rounded-2xl border border-gray-100 bg-gradient-to-br p-8
                  transition-all duration-400 hover:border-gray-200 hover:shadow-elevation-2 hover:-translate-y-0.5
                  ${industryAccents[industry.id] || "from-gray-50 to-white hover:from-gray-100 hover:to-gray-50"}
                `}
              >
                {/* Number */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-display text-xs font-semibold tabular-nums text-gray-300">
                    {industryNumbers[industry.id] ?? "0" + (i + 1)}
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" aria-hidden />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-navy group-hover:text-accent transition-colors duration-300 mb-2">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {industry.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/industries"
            className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors link-underline"
          >
            Explore all industries
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
