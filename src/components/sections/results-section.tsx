"use client";

import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const StrategyGlobe = dynamic(
  () => import("@/components/3d/strategy-globe").then((m) => m.StrategyGlobe),
  { ssr: false, loading: () => null }
);

const metrics = [
  {
    prefix: "+",
    value: 200,
    suffix: "%",
    label: "Revenue growth delivered",
    description: "Average revenue growth achieved across strategic transformation engagements",
  },
  {
    prefix: "-",
    value: 35,
    suffix: "%",
    label: "Operational cost reduction",
    description: "Mean cost reduction realized through operational excellence programs",
  },
  {
    prefix: "$",
    value: 2,
    suffix: "B+",
    label: "Total value created",
    description: "Cumulative enterprise value created across our client portfolio",
  },
  {
    prefix: "",
    value: 95,
    suffix: "%",
    label: "Client retention rate",
    description: "Clients who return for follow-on engagements or refer new clients",
  },
];

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function CountUpNumber({
  value,
  prefix,
  suffix,
  isInView,
  delay,
}: {
  value: number;
  prefix: string;
  suffix: string;
  isInView: boolean;
  delay: number;
}) {
  const [current, setCurrent] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;

    const timer = setTimeout(() => {
      const duration = 2000;
      const startTime = performance.now();

      function tick() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCurrent(Math.round(easeOutCubic(progress) * value));
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <span className="tabular-nums">
      {prefix}{current}{suffix}
    </span>
  );
}

export function ResultsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-white overflow-hidden py-28 sm:py-36">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          {/* Left: metrics */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-4 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-accent" />
              <span className="label-tag">Proven Outcomes</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
              className="font-display text-display-md font-semibold text-navy sm:text-display-lg mb-6"
            >
              Results that speak for themselves
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" }}
              className="text-body-lg text-gray-500 mb-12"
            >
              Across 200+ engagements, our clients consistently outperform industry
              benchmarks. These aren&apos;t projections — they&apos;re verified outcomes.
            </motion.p>

            <div className="grid grid-cols-2 gap-8">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                >
                  <div className="font-display text-display-md font-semibold text-navy tabular-nums">
                    <CountUpNumber
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      isInView={isInView}
                      delay={0.3 + i * 0.1}
                    />
                  </div>
                  <div className="mt-1 text-sm font-semibold text-gray-700">
                    {metric.label}
                  </div>
                  <div className="mt-1 text-xs text-gray-400 leading-relaxed">
                    {metric.description}
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                    style={{ originX: 0 }}
                    className="mt-3 h-px w-12 bg-accent/40"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square rounded-3xl bg-navy overflow-hidden">
              <StrategyGlobe className="absolute inset-0" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(37,99,235,0.15),transparent)]" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Active Clients</div>
                      <div className="font-display text-2xl font-semibold text-white tabular-nums">47</div>
                    </div>
                    <div className="h-px w-8 bg-white/20 mx-4" />
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Countries</div>
                      <div className="font-display text-2xl font-semibold text-white tabular-nums">12</div>
                    </div>
                    <div className="h-px w-8 bg-white/20 mx-4" />
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Sectors</div>
                      <div className="font-display text-2xl font-semibold text-white tabular-nums">6</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
