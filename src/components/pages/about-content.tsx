"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AdvisoryNetwork } from "@/components/sections/advisory-network";

export function AboutContent() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="font-display text-display-md font-semibold text-navy sm:text-display-lg">
            About Innovative Holdings
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A specialist advisory group focused on strategic and operational
            transformation for growth-stage companies.
          </p>
        </motion.div>

        <div className="mt-24 space-y-24">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="font-display text-2xl font-semibold text-navy">
              Our Mission
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              We exist to help ambitious companies achieve their full potential.
              Our mission is to provide strategic clarity, operational excellence,
              and actionable roadmaps that transform how businesses compete and
              grow. We work as extension of leadership—bringing the rigor of
              top-tier consulting with the pragmatism of operators.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="font-display text-2xl font-semibold text-navy">
              Leadership
            </h2>
            <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-8">
              <h3 className="text-xl font-semibold text-navy">
                Founder & Managing Director
              </h3>
              <p className="mt-4 text-gray-700">
                With extensive experience in strategic advisory and operational
                transformation, our leadership has advised growth-stage
                companies across technology, healthcare, financial services, and
                professional services. Background includes strategy consulting,
                corporate development, and executive roles at growth companies.
              </p>
              <p className="mt-4 text-gray-700">
                The team brings a combination of consulting rigor and operating
                experience—having both advised and led transformations at
                companies ranging from early-stage to enterprise. This dual
                perspective enables us to deliver recommendations that are
                strategically sound and practically executable.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="font-display text-2xl font-semibold text-navy">
              Our Approach
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              We believe the best advisory work is collaborative, not
              prescriptive. We start by understanding your context—your market,
              your challenges, your constraints—and then apply proven frameworks
              adapted to your situation. Every engagement includes clear
              deliverables, executive alignment, and implementation support.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• <strong>Context-first:</strong> No cookie-cutter solutions. We tailor our approach to your industry, stage, and goals.</li>
              <li>• <strong>Rigor and pragmatism:</strong> Data-driven analysis combined with executive judgment.</li>
              <li>• <strong>Action-oriented:</strong> Clear recommendations with implementation roadmaps.</li>
              <li>• <strong>Partnership:</strong> We work alongside you, not at arm&apos;s length.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl"
          >
            <AdvisoryNetwork />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="font-display text-2xl font-semibold text-navy">
              Advisory Model
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              We offer flexible engagement models to match your needs: project-based
              strategy work, ongoing advisory retainer, or implementation support.
              Engagements typically range from 4-16 weeks for strategy projects,
              with options for longer-term support. We begin with a discovery
              call to understand your situation and determine fit.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact#consultation">Start a Conversation</Link>
              </Button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
