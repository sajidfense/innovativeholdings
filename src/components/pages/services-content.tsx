"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CTABlock } from "@/components/conversion/cta-block";

const serviceSections = [
  {
    id: "strategy-consulting",
    title: "Strategy Consulting",
    overview:
      "We help leadership teams define and execute winning strategies through rigorous analysis, competitive intelligence, and scenario planning. Our approach combines data-driven insights with executive judgment to create sustainable competitive advantage.",
    challenges: [
      "Unclear strategic direction or competing priorities",
      "Market disruption threatening core business",
      "Need for portfolio optimization",
      "Strategic pivot or repositioning required",
    ],
    approach:
      "We use a structured methodology: strategic assessment, option development, decision frameworks, and implementation roadmaps. Each engagement is tailored to your context, with clear deliverables and executive alignment at every stage.",
    outcomes: [
      "Clear strategic roadmap with milestones",
      "Executive alignment on priorities",
      "Resource allocation framework",
      "Monitoring and course-correction cadence",
    ],
  },
  {
    id: "growth-strategy",
    title: "Growth & Market Expansion",
    overview:
      "Scaling revenue requires more than ambition—it requires systems, playbooks, and the right organizational design. We help growth-stage companies build repeatable growth engines and enter new markets with confidence.",
    challenges: [
      "Plateauing growth despite market opportunity",
      "Uncertainty about which markets to prioritize",
      "Go-to-market inefficiency",
      "Channel and partnership strategy gaps",
    ],
    approach:
      "We assess your current growth machinery, identify bottlenecks, and design scalable GTM architectures. Market entry work includes sizing, segmentation, route-to-market selection, and pilot design.",
    outcomes: [
      "Prioritized growth initiatives with business cases",
      "GTM playbooks and sales enablement",
      "Market entry roadmap with milestones",
      "Partnership and channel strategy",
    ],
  },
  {
    id: "operational-efficiency",
    title: "Operational Transformation",
    overview:
      "Operational excellence drives margin improvement and scalability. We help companies redesign processes, reduce waste, and build operational capabilities that support growth without proportional cost increase.",
    challenges: [
      "Rising operational costs outpacing revenue",
      "Manual processes that don't scale",
      "Siloed operations and poor visibility",
      "Quality and delivery issues",
    ],
    approach:
      "We use lean and process-improvement methodologies tailored to your industry. Work typically includes process mapping, waste identification, redesign, piloting, and rollout with change management.",
    outcomes: [
      "Cost reduction and efficiency gains",
      "Standardized, documented processes",
      "Improved visibility and metrics",
      "Sustainable operating model",
    ],
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    overview:
      "Technology enables new business models, customer experiences, and operational capabilities. We help companies navigate digital transformation—from strategy through execution—without over-investing or under-delivering.",
    challenges: [
      "Legacy systems limiting agility",
      "Unclear technology investment priorities",
      "Digital capabilities gaps",
      "Culture and change resistance",
    ],
    approach:
      "We develop digital strategies aligned with business objectives, prioritize initiatives by impact and feasibility, and support execution through roadmap development and vendor selection. We focus on business outcomes, not technology for its own sake.",
    outcomes: [
      "Digital strategy and roadmap",
      "Technology prioritization framework",
      "Pilot and rollout plans",
      "Change management and adoption plan",
    ],
  },
  {
    id: "ma-advisory",
    title: "M&A Advisory",
    overview:
      "Mergers and acquisitions can accelerate growth, but only when executed well. We provide strategic M&A support—from deal strategy and target identification through due diligence and integration planning.",
    challenges: [
      "Uncertainty about M&A as a growth lever",
      "Target identification and screening",
      "Valuation and deal structuring",
      "Integration planning and execution",
    ],
    approach:
      "We work alongside leadership to develop M&A strategy, build target lists, support diligence, and design integration plans. Our role is advisory—we help you make better decisions and execute with confidence.",
    outcomes: [
      "M&A strategy and target criteria",
      "Due diligence support",
      "Integration roadmap",
      "Synergy tracking framework",
    ],
  },
  {
    id: "financial-optimization",
    title: "Financial Performance Optimization",
    overview:
      "Revenue acceleration and cost optimization require a structured approach. We help companies improve margins, optimize pricing, and build financial planning capabilities that support strategic decisions.",
    challenges: [
      "Margin pressure and unclear cost structure",
      "Pricing and packaging optimization",
      "Forecasting and planning gaps",
      "Capital allocation decisions",
    ],
    approach:
      "We analyze your financial structure, identify improvement levers, and build implementation plans. Work often includes pricing strategy, cost benchmarking, and FP&A process design.",
    outcomes: [
      "Margin improvement roadmap",
      "Pricing and packaging recommendations",
      "Improved forecasting and planning",
      "Capital allocation framework",
    ],
  },
];

function ServiceSection({
  section,
}: {
  section: (typeof serviceSections)[0];
}) {
  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="scroll-mt-24 border-b border-gray-100 py-16 last:border-0 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-display-md font-semibold text-navy">
          {section.title}
        </h2>
        <p className="mt-6 text-lg text-gray-600">{section.overview}</p>

        <div className="mt-12 grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Typical Challenges
            </h3>
            <ul className="mt-4 space-y-2">
              {section.challenges.map((c) => (
                <li key={c} className="text-gray-700">
                  • {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Our Approach
            </h3>
            <p className="mt-4 text-gray-700">{section.approach}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Expected Outcomes
            </h3>
            <ul className="mt-4 space-y-2">
              {section.outcomes.map((o) => (
                <li key={o} className="text-gray-700">
                  • {o}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <Button asChild>
            <Link href={`/contact#consultation?service=${section.id}`}>
              Book a Consultation
            </Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}

export function ServicesContent() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="font-display text-display-md font-semibold text-navy sm:text-display-lg">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            End-to-end strategic and operational advisory for growth-stage
            companies. Each engagement is tailored to your context.
          </p>
        </motion.div>

        <div className="mt-16">
          {serviceSections.map((section) => (
            <ServiceSection key={section.id} section={section} />
          ))}
        </div>

        <CTABlock
          title="Ready to discuss your engagement?"
          description="Schedule a confidential consultation."
          primaryHref="/contact#consultation"
          primaryLabel="Book a Consultation"
        />
      </div>
    </div>
  );
}
