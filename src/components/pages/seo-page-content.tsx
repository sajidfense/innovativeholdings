"use client";

import { motion } from "framer-motion";
import type { SEOPageConfig } from "@/lib/seo-pages";
import { CTABlock } from "@/components/conversion/cta-block";
import { ServiceSchema } from "@/components/seo/service-schema";

export function SEOPageContent({ page }: { page: SEOPageConfig }) {
  return (
    <>
      <ServiceSchema page={page} />
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-display-md font-semibold text-navy sm:text-display-lg">
            {page.h1}
          </h1>
          <p className="mt-6 text-xl text-gray-600">{page.intro}</p>
        </motion.header>

        <div className="mt-16 space-y-16">
          {page.sections.map((section, i) => (
            <motion.section
              key={section.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="font-display text-2xl font-semibold text-navy">
                {section.heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                {section.content}
              </p>
            </motion.section>
          ))}

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 bg-gray-50 p-8"
          >
            <h2 className="font-display text-xl font-semibold text-navy">
              Consulting Frameworks We Apply
            </h2>
            <ul className="mt-6 space-y-3">
              {page.frameworks.map((framework) => (
                <li
                  key={framework}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  {framework}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        <CTABlock
          title="Ready to discuss your strategy?"
          description="Schedule a confidential consultation with our advisors."
          primaryHref="/contact#consultation"
          primaryLabel="Book a Consultation"
        />
      </div>
    </div>
    </>
  );
}
