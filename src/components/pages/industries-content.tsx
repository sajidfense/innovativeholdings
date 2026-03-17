"use client";

import { motion } from "framer-motion";
import { industries } from "@/lib/constants";
import { CTABlock } from "@/components/conversion/cta-block";

const industryDetails: Record<
  string,
  {
    challenges: string[];
    opportunities: string[];
    caseExample: string;
  }
> = {
  technology: {
    challenges: [
      "SaaS unit economics and retention",
      "Product-market fit at scale",
      "Go-to-market efficiency",
      "Technical debt and platform evolution",
    ],
    opportunities: [
      "Pricing and packaging optimization",
      "Channel and partnership strategy",
      "Product-led growth playbooks",
      "M&A for capability acquisition",
    ],
    caseExample:
      "A $15M ARR SaaS company improved gross margin by 12 points and accelerated enterprise sales through a targeted GTM redesign and pricing optimization.",
  },
  healthcare: {
    challenges: [
      "Regulatory and compliance complexity",
      "Reimbursement and margin pressure",
      "Operational efficiency in clinical settings",
      "Digital health integration",
    ],
    opportunities: [
      "Revenue cycle optimization",
      "Clinical pathway standardization",
      "Value-based care transitions",
      "Strategic partnerships and M&A",
    ],
    caseExample:
      "A regional healthcare system reduced operational costs by 18% while improving patient satisfaction through process redesign and technology enablement.",
  },
  finance: {
    challenges: [
      "Regulatory change and compliance",
      "Digital transformation and legacy systems",
      "Customer acquisition cost",
      "Margin compression",
    ],
    opportunities: [
      "Digital channel strategy",
      "Operational risk reduction",
      "Product and segment optimization",
      "Fintech partnership models",
    ],
    caseExample:
      "A mid-tier financial institution developed a digital-first growth strategy that doubled online acquisition while reducing cost per account by 35%.",
  },
  "real-estate": {
    challenges: [
      "Capital allocation and portfolio strategy",
      "Operational scalability",
      "Technology and proptech adoption",
      "Market cyclicality",
    ],
    opportunities: [
      "Portfolio optimization",
      "Operating model redesign",
      "Data and analytics capabilities",
      "Strategic acquisitions",
    ],
    caseExample:
      "A real estate investment firm restructured its operating model and implemented a data-driven asset management approach, improving NOI growth by 22%.",
  },
  manufacturing: {
    challenges: [
      "Supply chain volatility",
      "Labor and talent constraints",
      "Industry 4.0 adoption",
      "Sustainability and decarbonization",
    ],
    opportunities: [
      "Supply chain resilience",
      "Automation and productivity",
      "Nearshoring and reshoring",
      "Circular economy initiatives",
    ],
    caseExample:
      "A $50M manufacturer reduced supply chain risk and cut lead times by 40% through supplier diversification and demand forecasting implementation.",
  },
  "professional-services": {
    challenges: [
      "Partner-led growth scalability",
      "Service line profitability",
      "Talent acquisition and retention",
      "Client concentration risk",
    ],
    opportunities: [
      "Service line expansion",
      "Pricing and delivery model optimization",
      "Client retention programs",
      "Strategic partnerships",
    ],
    caseExample:
      "A professional services firm increased average deal size by 45% and improved utilization through service packaging and delivery model redesign.",
  },
};

export function IndustriesContent() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="font-display text-display-md font-semibold text-navy sm:text-display-lg">
            Industries We Serve
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Deep expertise across sectors. Proven frameworks tailored to your
            industry context.
          </p>
        </motion.div>

        <div className="mt-16 space-y-24">
          {industries.map((industry) => {
            const details = industryDetails[industry.id];
            return (
              <motion.section
                key={industry.id}
                id={industry.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="scroll-mt-24"
              >
                <div className="grid gap-12 lg:grid-cols-3">
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-navy">
                      {industry.title}
                    </h2>
                    <p className="mt-4 text-gray-600">
                      {industry.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      Key Challenges
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {details.challenges.map((c) => (
                        <li key={c} className="text-gray-700">
                          • {c}
                        </li>
                      ))}
                    </ul>
                    <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
                      Typical Opportunities
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {details.opportunities.map((o) => (
                        <li key={o} className="text-gray-700">
                          • {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      Case Example
                    </h3>
                    <p className="mt-4 text-gray-700 italic">
                      {details.caseExample}
                    </p>
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>

        <CTABlock
          title="Discuss your industry challenges"
          description="Our advisors have deep sector expertise."
          primaryHref="/contact#consultation"
          primaryLabel="Book a Consultation"
        />
      </div>
    </div>
  );
}
