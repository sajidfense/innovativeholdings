"use client";

import { motion } from "framer-motion";
import { CareersForm } from "@/components/forms/careers-form";
import { CTABlock } from "@/components/conversion/cta-block";
import { Check } from "lucide-react";

const values = [
  "Excellence in delivery",
  "Collaborative problem-solving",
  "Continuous learning",
  "Client-first mindset",
  "Integrity and discretion",
];

const roles = [
  {
    title: "Consulting Analysts",
    description:
      "Entry-level positions for talented individuals with 0-2 years of experience. Analysts support project teams with research, analysis, and slide development. Strong analytical skills and intellectual curiosity required.",
  },
  {
    title: "Strategy Associates",
    description:
      "Mid-level roles for professionals with 2-5 years of consulting or relevant experience. Associates lead workstreams, manage client relationships, and drive project delivery. MBA or equivalent experience preferred.",
  },
  {
    title: "Partner Track",
    description:
      "Senior positions for experienced consultants ready to build practice areas and develop business. Partners own client relationships, lead engagements, and contribute to firm development.",
  },
];

export function CareersContent() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="font-display text-display-md font-semibold text-navy sm:text-display-lg">
            Careers at Innovative Holdings
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We&apos;re expanding our team. Join us in helping companies achieve
            their full potential.
          </p>
        </motion.div>

        <div className="mt-24 grid gap-16 lg:grid-cols-2">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-semibold text-navy">
              Our Culture
            </h2>
            <p className="mt-6 text-gray-700">
              We attract people who thrive on complex challenges and value
              intellectual rigor. Our culture emphasizes excellence in
              delivery, collaboration, and continuous learning. We work in
              small, focused teams where everyone contributes meaningfully.
            </p>
            <ul className="mt-8 space-y-4">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                    aria-hidden
                  />
                  <span className="text-gray-700">{value}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-16 font-display text-2xl font-semibold text-navy">
              Open Roles
            </h2>
            <div className="mt-8 space-y-8">
              {roles.map((role) => (
                <div key={role.title}>
                  <h3 className="text-lg font-semibold text-navy">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{role.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-navy">
                Apply Now
              </h2>
              <p className="mt-2 text-gray-600">
                Tell us about yourself. We review all applications and respond
                to candidates whose experience aligns with our needs.
              </p>
              <CareersForm />
            </div>
          </motion.section>

          <CTABlock
            title="Not ready to apply?"
            description="Explore our consulting services or book an advisory call."
            primaryHref="/contact#consultation"
            primaryLabel="Book a Consultation"
            secondaryHref="/services"
            secondaryLabel="View Services"
          />
        </div>
      </div>
    </div>
  );
}
