"use client";

import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

const industryColors: Record<string, string> = {
  Technology: "bg-blue-500/15 text-blue-300 border-blue-500/20",
  Manufacturing: "bg-amber-500/15 text-amber-300 border-amber-500/20",
  "Real Estate": "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
  Healthcare: "bg-violet-500/15 text-violet-300 border-violet-500/20",
  "Financial Services": "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
};

export function CaseStudiesPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // Horizontal scroll while user scrolls vertically
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(caseStudies.length - 1) * 40}%`]
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50"
      style={{ height: `${caseStudies.length * 80}vh` }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">

        {/* Section header */}
        <div ref={headerRef} className="flex-shrink-0 mx-auto w-full max-w-7xl px-6 lg:px-8 pt-20 pb-10">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-3 flex items-center gap-3"
              >
                <div className="h-px w-8 bg-accent" />
                <span className="label-tag">Case Studies</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-display-md font-semibold text-navy sm:text-display-lg"
              >
                Proven outcomes across industries
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isHeaderInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-xs text-gray-400"
            >
              <span>Scroll to explore</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </motion.div>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div className="flex-1 relative overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="absolute inset-y-0 left-0 flex items-center gap-6 pl-6 pr-20 lg:pl-8"
          >
            {caseStudies.map((study, i) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex-shrink-0 w-[340px] sm:w-[400px] lg:w-[440px]"
              >
                <Link
                  href={`/case-studies#${study.id}`}
                  className="block h-full rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-400 hover:border-accent/25 hover:shadow-card-hover hover:-translate-y-1"
                >
                  {/* Industry tag */}
                  <div className="mb-5 flex items-center justify-between">
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${industryColors[study.industry] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
                      {study.industry}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-gray-300 group-hover:text-accent transition-colors duration-300" aria-hidden />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-navy group-hover:text-accent transition-colors duration-300 mb-3">
                    {study.title}
                  </h3>

                  {/* Challenge */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-5 clamp-3">
                    {study.challenge}
                  </p>

                  {/* Results */}
                  <div className="space-y-2.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Key Results
                    </p>
                    {study.results.slice(0, 3).map((r) => (
                      <div key={r} className="flex items-start gap-2.5">
                        <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span className="text-sm font-medium text-gray-700">{r}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read case study
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </div>
                </Link>
              </motion.article>
            ))}

            {/* Final CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + caseStudies.length * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex-shrink-0 w-[280px] sm:w-[320px]"
            >
              <Link
                href="/case-studies"
                className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50/80 p-8 text-center transition-all duration-300 hover:border-accent/40 hover:bg-blue-50/30 group"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <ArrowRight className="h-5 w-5 text-accent" aria-hidden />
                </div>
                <p className="font-semibold text-navy group-hover:text-accent transition-colors">
                  View all case studies
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Explore our complete library
                </p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
