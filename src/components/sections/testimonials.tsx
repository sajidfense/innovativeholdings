"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Innovative Holdings transformed how we think about growth. Their analytical rigor combined with practical execution support delivered results we didn't think were achievable in 12 months.",
    author: "CEO",
    company: "Series B SaaS Company",
    industry: "Technology",
    result: "$18M ARR in 12 months",
  },
  {
    quote:
      "The operational transformation program didn't just cut costs — it gave us the scalable infrastructure to grow without adding headcount proportionally. A genuine competitive advantage.",
    author: "COO",
    company: "Mid-Market Manufacturer",
    industry: "Manufacturing",
    result: "28% cost reduction",
  },
  {
    quote:
      "Their M&A advisory team brought deep commercial due diligence capabilities that our internal team couldn't replicate. The deal thesis held — and then some.",
    author: "Managing Partner",
    company: "Private Equity Firm",
    industry: "Financial Services",
    result: "34% EBITDA improvement",
  },
  {
    quote:
      "What distinguished them was the combination of strategic vision and implementation horsepower. Not just a deck — a genuine partner through execution.",
    author: "Founder & Chairman",
    company: "Healthcare Technology Group",
    industry: "Healthcare",
    result: "50% admin reduction",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section ref={ref} className="relative bg-navy py-28 sm:py-36 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.07),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="text-label-sm font-medium uppercase tracking-widest text-blue-400">
              Client Perspectives
            </span>
            <div className="h-px w-8 bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-display-md font-semibold text-white sm:text-display-lg"
          >
            What our clients say
          </motion.h2>
        </div>

        {/* Testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl text-center"
            >
              {/* Quote icon */}
              <div className="mb-8 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Quote className="h-6 w-6 text-blue-400" aria-hidden />
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="font-display text-xl font-light italic text-white/90 leading-relaxed sm:text-2xl mb-10">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex flex-col items-center gap-2">
                <div className="h-px w-12 bg-accent/50" />
                <div className="mt-4 text-sm font-semibold text-white">
                  {testimonials[active].author}
                </div>
                <div className="text-sm text-slate-400">
                  {testimonials[active].company}
                </div>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <span className="text-xs font-semibold text-blue-300">
                    {testimonials[active].result}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-slate-400 hover:text-white hover:border-white/24 hover:bg-white/10 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === active
                      ? "w-6 h-1.5 bg-accent"
                      : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-slate-400 hover:text-white hover:border-white/24 hover:bg-white/10 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
