"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    label: "Assess",
    desc: "Deep diagnostic of your current state, competitive position, and untapped opportunities.",
    detail: "We spend meaningful time understanding your business before prescribing solutions — because context determines strategy.",
  },
  {
    number: "02",
    label: "Design",
    desc: "Rigorous analysis converted into clear strategic options with evidence-based recommendations.",
    detail: "Our frameworks are built on data, not intuition alone — ensuring every recommendation can be defended to your board.",
  },
  {
    number: "03",
    label: "Align",
    desc: "Executive buy-in achieved through structured facilitation and crisp communication.",
    detail: "Strategy without alignment is just a document. We ensure the people who need to act are fully committed.",
  },
  {
    number: "04",
    label: "Execute",
    desc: "Hands-on implementation support with clear milestones and accountability structures.",
    detail: "We stay engaged through delivery — adapting in real time and ensuring results match the ambition.",
  },
];

export function StrategyFramework() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-white py-28 sm:py-36 overflow-hidden">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 flex items-center gap-3"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="label-tag">Our Approach</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-display-md font-semibold text-navy sm:text-display-lg"
          >
            A structured methodology for every engagement
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="mt-20 grid gap-0 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              {/* Connector line (except last) */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-full bg-gray-200 lg:block" />
              )}

              <div className="relative pr-8 lg:pr-12">
                {/* Number + node */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-accent/20 bg-white shadow-elevation-1 group-hover:border-accent/50 group-hover:shadow-glow-sm transition-all duration-400">
                    <span className="font-display text-xl font-semibold text-accent tabular-nums">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-navy mb-2">
                  {step.label}
                </h3>
                <p className="text-sm font-medium text-gray-700 mb-3">
                  {step.desc}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex items-center gap-6"
        >
          <div className="h-px flex-1 bg-gray-100" />
          <p className="text-sm text-gray-400 italic">
            Each engagement is tailored — the framework adapts, the rigor never does.
          </p>
          <div className="h-px flex-1 bg-gray-100" />
        </motion.div>
      </div>
    </section>
  );
}
