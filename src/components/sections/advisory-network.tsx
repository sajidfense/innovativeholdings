"use client";

import { motion } from "framer-motion";
import {
  Target,
  Building2,
  Settings,
  DollarSign,
  Cpu,
  TrendingUp,
} from "lucide-react";

const networkAreas = [
  {
    icon: Target,
    title: "Strategy & Corporate Development",
    description: "Strategic planning, M&A strategy, portfolio optimization.",
  },
  {
    icon: Building2,
    title: "Private Equity & M&A",
    description: "Due diligence, deal execution, post-merger integration.",
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    description: "Process optimization, lean methodologies, supply chain.",
  },
  {
    icon: DollarSign,
    title: "Financial Strategy",
    description: "FP&A, pricing, capital allocation, margin improvement.",
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description: "Technology strategy, automation, digital enablement.",
  },
  {
    icon: TrendingUp,
    title: "Market Expansion",
    description: "Market entry, geographic expansion, channel strategy.",
  },
];

export function AdvisoryNetwork() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-gray-200 bg-gray-50 p-8 sm:p-12"
    >
      <h2 className="font-display text-2xl font-semibold text-navy">
        Global Advisory Network
      </h2>
      <p className="mt-6 text-lg text-gray-700">
        Innovative Holdings works with a curated network of independent
        specialists across strategy, finance, operations, and digital
        transformation.
      </p>
      <p className="mt-4 text-gray-700">
        Our advisory network includes professionals across:
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {networkAreas.map((area, i) => {
          const Icon = area.icon;
          return (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Icon className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-navy">{area.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{area.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <p className="mt-8 text-gray-700">
        This flexible model allows Innovative Holdings to assemble specialized
        expertise for each engagement.
      </p>
    </motion.section>
  );
}
