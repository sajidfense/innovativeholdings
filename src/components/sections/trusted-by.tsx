"use client";

import { motion } from "framer-motion";

const industries = [
  "Technology",
  "Healthcare",
  "Financial Services",
  "Real Estate",
  "Manufacturing",
  "Professional Services",
  "Private Equity",
  "Life Sciences",
];

// Duplicate for seamless marquee
const doubled = [...industries, ...industries];

export function TrustedBy() {
  return (
    <section className="relative bg-navy border-y border-white/6 py-16 overflow-hidden">
      {/* Gradient edges */}
      <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-navy to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-navy to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-label-sm font-medium uppercase tracking-widest text-slate-500"
        >
          Trusted across industries
        </motion.p>
      </div>

      {/* Marquee row */}
      <div className="flex overflow-hidden" aria-hidden="true">
        <div className="flex animate-marquee gap-0 whitespace-nowrap will-change-transform">
          {doubled.map((industry, i) => (
            <div
              key={`${industry}-${i}`}
              className="flex items-center gap-6 px-8"
            >
              <span className="h-1 w-1 rounded-full bg-blue-500/50" />
              <span className="text-lg font-medium text-slate-400 tracking-tight">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mx-auto mt-10 max-w-7xl px-6 lg:px-8"
      >
        <div className="flex flex-wrap items-center justify-center gap-8">
          {[
            { value: "200+", label: "Client Engagements" },
            { value: "$2B+", label: "Value Created" },
            { value: "95%", label: "Client Retention" },
          ].map(({ value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="font-display text-2xl font-semibold text-white tabular-nums">
                {value}
              </span>
              <span className="text-sm text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
