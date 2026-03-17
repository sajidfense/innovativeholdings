"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";

const articles = [
  {
    slug: "future-of-ai-in-business-operations",
    title: "The Future of AI in Business Operations",
    excerpt:
      "How leading companies are integrating AI to drive operational excellence without replacing human judgment.",
    category: "Operations",
    readTime: "6 min read",
  },
  {
    slug: "scaling-companies-5m-to-50m",
    title: "Scaling Companies from $5M to $50M",
    excerpt:
      "The critical inflection points, common pitfalls, and proven playbooks for mid-market growth.",
    category: "Growth",
    readTime: "8 min read",
  },
  {
    slug: "operational-efficiency-high-cost-economy",
    title: "Operational Efficiency in a High Cost Economy",
    excerpt:
      "Strategies for maintaining margins and competitive advantage when input costs are rising.",
    category: "Strategy",
    readTime: "5 min read",
  },
];

const categoryColors: Record<string, string> = {
  Operations: "text-amber-600 bg-amber-50 border-amber-100",
  Growth: "text-blue-600 bg-blue-50 border-blue-100",
  Strategy: "text-violet-600 bg-violet-50 border-violet-100",
};

export function InsightsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative bg-gray-50 py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end mb-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-accent" />
              <span className="label-tag">Insights</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-display-md font-semibold text-navy sm:text-display-lg"
            >
              Thought leadership for growth-stage leaders
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link
              href="/insights"
              className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors link-underline"
            >
              All insights
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>

        {/* Articles */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={`/insights/${article.slug}`}
                className="group block h-full rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-400 hover:border-gray-200 hover:shadow-elevation-2 hover:-translate-y-0.5"
              >
                {/* Category + read time */}
                <div className="mb-5 flex items-center justify-between">
                  <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${categoryColors[article.category] || "text-gray-500 bg-gray-50 border-gray-100"}`}>
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {article.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-navy group-hover:text-accent transition-colors duration-300 mb-3">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-500 leading-relaxed clamp-3">
                  {article.excerpt}
                </p>

                {/* Read link */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read article
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
