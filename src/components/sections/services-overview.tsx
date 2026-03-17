"use client";

import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Target,
  Settings,
  TrendingUp,
  Cpu,
  Building2,
  BarChart3,
  ArrowRight,
  Plus,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/constants";

const icons: Record<string, LucideIcon> = {
  Target,
  Settings,
  TrendingUp,
  Cpu,
  Building2,
  BarChart3,
};

const serviceDetails: Record<string, string[]> = {
  "business-strategy": [
    "Market opportunity analysis & sizing",
    "Competitive landscape mapping",
    "Strategic planning & roadmapping",
    "Business model innovation",
  ],
  "operational-transformation": [
    "Process redesign & optimization",
    "Organizational restructuring",
    "Performance management systems",
    "Cost reduction programs",
  ],
  "growth-expansion": [
    "New market entry strategy",
    "Channel & partnership development",
    "Customer acquisition frameworks",
    "International expansion planning",
  ],
  "digital-transformation": [
    "Technology strategy & architecture",
    "Digital operating model design",
    "Data & analytics enablement",
    "Change management & adoption",
  ],
  "ma-advisory": [
    "Target identification & screening",
    "Due diligence coordination",
    "Valuation & deal structuring",
    "Post-merger integration",
  ],
  "financial-optimization": [
    "Revenue growth management",
    "Working capital optimization",
    "Pricing strategy & execution",
    "EBITDA improvement programs",
  ],
};

export function ServicesOverview() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section ref={ref} className="relative bg-navy py-28 sm:py-36 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(37,99,235,0.06),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
              <span className="text-label-sm font-medium uppercase tracking-widest text-blue-400">
                Services
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-display-md font-semibold text-white sm:text-display-lg"
            >
              End-to-end advisory for growth-stage companies
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              href="/services"
              className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors link-underline"
            >
              All services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>

        {/* Service cards grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Target;
            const isExpanded = expanded === service.id;
            const details = serviceDetails[service.id] ?? [];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className={`
                    group relative rounded-2xl border cursor-pointer overflow-hidden
                    transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${isExpanded
                      ? "border-accent/40 bg-navy-mid shadow-glow-sm"
                      : "border-white/8 bg-white/4 hover:border-white/16 hover:bg-white/6"
                    }
                  `}
                  onClick={() => setExpanded(isExpanded ? null : service.id)}
                >
                  <div className="p-6">
                    {/* Icon + toggle */}
                    <div className="flex items-start justify-between mb-5">
                      <div className={`
                        flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300
                        ${isExpanded ? "bg-accent/20" : "bg-white/8 group-hover:bg-accent/15"}
                      `}>
                        <Icon className={`h-5 w-5 transition-colors duration-300 ${isExpanded ? "text-blue-300" : "text-slate-300 group-hover:text-blue-300"}`} aria-hidden="true" />
                      </div>
                      <button
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                        className={`
                          flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300
                          ${isExpanded
                            ? "border-accent/40 bg-accent/20 rotate-45"
                            : "border-white/12 bg-white/6 group-hover:border-white/24"
                          }
                        `}
                      >
                        <Plus className={`h-3.5 w-3.5 transition-colors duration-300 ${isExpanded ? "text-blue-300" : "text-slate-400"}`} aria-hidden />
                      </button>
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg font-semibold transition-colors duration-300 mb-2 ${isExpanded ? "text-white" : "text-slate-200 group-hover:text-white"}`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Expanded details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 space-y-2 border-t border-white/8 pt-5">
                            {details.map((item) => (
                              <div key={item} className="flex items-center gap-2.5">
                                <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400/70" />
                                <span className="text-sm text-slate-300">{item}</span>
                              </div>
                            ))}
                            <Link
                              href={service.href}
                              className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Learn more
                              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
