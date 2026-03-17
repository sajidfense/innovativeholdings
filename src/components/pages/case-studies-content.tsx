"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/lib/case-studies";
import { CTABlock } from "@/components/conversion/cta-block";

export function CaseStudiesContent() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="font-display text-display-md font-semibold text-navy sm:text-display-lg">
            Case Studies
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Proven outcomes from our client engagements across industries.
          </p>
        </motion.div>

        <div className="mt-24 space-y-20">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.id}
              id={study.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="scroll-mt-24"
            >
              <div className="grid gap-12 lg:grid-cols-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {study.industry}
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl">
                    {study.title}
                  </h2>
                </div>
                <div className="space-y-8 lg:col-span-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      Client Challenge
                    </h3>
                    <p className="mt-2 text-gray-700">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      Consulting Approach
                    </h3>
                    <p className="mt-2 text-gray-700">{study.approach}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      Results
                    </h3>
                    <ul className="mt-2 space-y-1">
                      {study.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-100 pt-8" />
            </motion.article>
          ))}
        </div>

        <CTABlock
          title="Ready to achieve similar results?"
          description="Discuss your challenges with our advisors."
          primaryHref="/contact#consultation"
          primaryLabel="Book a Consultation"
        />
      </div>
    </div>
  );
}
