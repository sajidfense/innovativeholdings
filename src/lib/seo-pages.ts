export type SEOPageConfig = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; content: string }[];
  frameworks: string[];
};

export const seoPages: SEOPageConfig[] = [
  {
    slug: "strategy-consulting",
    title: "Strategy Consulting",
    metaTitle: "Strategy Consulting | Business Strategy Advisors | Innovative Holdings",
    metaDescription:
      "Expert strategy consulting for growth-stage companies. Data-driven business strategy, competitive analysis, and strategic planning. Trusted by companies scaling from $5M to $50M.",
    h1: "Strategy Consulting",
    intro:
      "Strategic clarity drives competitive advantage. Our strategy consulting practice helps leadership teams make better decisions through rigorous analysis, scenario planning, and actionable roadmaps.",
    sections: [
      {
        heading: "When Strategy Consulting Matters",
        content:
          "Companies face strategic inflection points: market disruption, competitive pressure, growth plateaus, or portfolio decisions. Strategy consulting provides the frameworks and discipline to navigate these moments with confidence. We combine data-driven analysis with executive judgment to deliver recommendations that are both rigorous and pragmatic.",
      },
      {
        heading: "Our Approach to Business Strategy",
        content:
          "We begin with a deep understanding of your context—market dynamics, competitive positioning, organizational capabilities. From there, we develop strategic options, evaluate trade-offs, and build implementation roadmaps. Every engagement includes executive alignment workshops to ensure buy-in and clarity on priorities.",
      },
    ],
    frameworks: [
      "Strategic assessment and situational analysis",
      "Option development and scenario planning",
      "Competitive intelligence and market sizing",
      "Resource allocation and prioritization frameworks",
    ],
  },
  {
    slug: "business-growth-consulting",
    title: "Business Growth Consulting",
    metaTitle: "Business Growth Consulting | Growth Advisory | Innovative Holdings",
    metaDescription:
      "Growth consulting for scaling companies. Revenue growth strategy, market expansion, GTM optimization. Help scaling from $5M to $50M+.",
    h1: "Business Growth Consulting",
    intro:
      "Revenue growth requires more than ambition—it requires systems, playbooks, and the right organizational design. Our growth consulting practice helps companies build repeatable growth engines.",
    sections: [
      {
        heading: "The Growth Challenge",
        content:
          "Many companies have strong product-market fit but struggle to scale revenue predictably. The gap often lies in go-to-market architecture, pricing strategy, channel mix, or organizational design. Growth consulting identifies these bottlenecks and designs solutions that scale.",
      },
      {
        heading: "Growth Consulting Frameworks",
        content:
          "We use proven frameworks: growth decomposition, funnel optimization, market entry playbooks, and organizational design for scale. Each engagement is tailored to your stage, industry, and constraints. Deliverables include clear roadmaps with milestones and success metrics.",
      },
    ],
    frameworks: [
      "Growth decomposition and opportunity sizing",
      "Go-to-market strategy and GTM playbooks",
      "Pricing and packaging optimization",
      "Market entry and expansion frameworks",
    ],
  },
  {
    slug: "operational-consulting",
    title: "Operational Consulting",
    metaTitle: "Operational Consulting | Operations Excellence | Innovative Holdings",
    metaDescription:
      "Operational consulting for cost reduction and efficiency. Process optimization, operational excellence, workflow redesign. Improve margins and scalability.",
    h1: "Operational Consulting",
    intro:
      "Operational excellence drives margin improvement and scalability. Our operational consulting practice helps companies redesign processes, reduce waste, and build capabilities that support growth without proportional cost increase.",
    sections: [
      {
        heading: "The Operational Imperative",
        content:
          "Rising costs, manual processes, and operational silos limit growth and erode margins. Operational consulting addresses these issues through structured methodologies: process mapping, waste identification, redesign, and implementation with change management.",
      },
      {
        heading: "Operational Excellence Methodology",
        content:
          "We apply lean and process-improvement frameworks tailored to your industry. Work typically includes current-state assessment, future-state design, pilot implementation, and rollout. Success is measured in cost reduction, cycle time improvement, and quality metrics.",
      },
    ],
    frameworks: [
      "Process mapping and value stream analysis",
      "Lean and waste reduction methodologies",
      "KPI design and operational dashboards",
      "Change management and capability building",
    ],
  },
  {
    slug: "digital-transformation-consulting",
    title: "Digital Transformation Consulting",
    metaTitle: "Digital Transformation Consulting | Technology Advisory | Innovative Holdings",
    metaDescription:
      "Digital transformation consulting for business modernization. Technology strategy, automation, CRM implementation. Transform operations with digital solutions.",
    h1: "Digital Transformation Consulting",
    intro:
      "Technology enables new business models, customer experiences, and operational capabilities. Our digital transformation practice helps companies navigate this journey—from strategy through execution—without over-investing or under-delivering.",
    sections: [
      {
        heading: "The Digital Transformation Challenge",
        content:
          "Legacy systems, unclear technology priorities, and change resistance block digital progress. Digital transformation consulting provides clarity: what to build, in what order, and how to drive adoption. We focus on business outcomes, not technology for its own sake.",
      },
      {
        heading: "Our Digital Transformation Approach",
        content:
          "We develop digital strategies aligned with business objectives, prioritize initiatives by impact and feasibility, and support execution through roadmap development and vendor selection. Implementation includes change management and adoption planning.",
      },
    ],
    frameworks: [
      "Digital strategy and opportunity assessment",
      "Technology prioritization and roadmap development",
      "Vendor evaluation and selection",
      "Change management and adoption programs",
    ],
  },
  {
    slug: "market-expansion-consulting",
    title: "Market Expansion Consulting",
    metaTitle: "Market Expansion Consulting | Geographic Expansion | Innovative Holdings",
    metaDescription:
      "Market expansion consulting for geographic and segment growth. Market entry strategy, demand modeling, investment feasibility. Scale into new markets with confidence.",
    h1: "Market Expansion Consulting",
    intro:
      "Expanding into new markets—geographic, segment, or product—requires disciplined strategy. Our market expansion practice helps companies assess opportunity, design entry strategies, and execute with measured risk.",
    sections: [
      {
        heading: "Market Expansion Strategy",
        content:
          "Successful market expansion requires demand validation, competitive understanding, route-to-market design, and investment feasibility. We help companies answer: where to expand, how to enter, and what resources are required.",
      },
      {
        heading: "Market Entry Frameworks",
        content:
          "We use market sizing, competitive analysis, and investment modeling to support expansion decisions. Deliverables include market prioritization, entry strategy, pilot design, and rollout plans with clear milestones.",
      },
    ],
    frameworks: [
      "Market sizing and demand modeling",
      "Competitive landscape analysis",
      "Route-to-market design",
      "Investment feasibility and business case development",
    ],
  },
  {
    slug: "ma-advisory",
    title: "M&A Advisory",
    metaTitle: "M&A Advisory | Mergers & Acquisitions Consulting | Innovative Holdings",
    metaDescription:
      "M&A advisory for strategic acquisitions. Commercial due diligence, financial modeling, synergy analysis. Support for corporate development and private equity.",
    h1: "M&A Advisory",
    intro:
      "Mergers and acquisitions can accelerate growth, but only when executed well. Our M&A advisory practice provides strategic support—from deal strategy and target identification through due diligence and integration planning.",
    sections: [
      {
        heading: "M&A Advisory Services",
        content:
          "We support corporate development teams and private equity firms with commercial due diligence, financial modeling, synergy analysis, and integration planning. Our role is advisory—we help you make better decisions and execute with confidence.",
      },
      {
        heading: "End-to-End M&A Support",
        content:
          "Engagements span the deal lifecycle: target identification and screening, commercial due diligence, valuation support, and integration roadmap design. We bring transaction experience and industry expertise to each assignment.",
      },
    ],
    frameworks: [
      "Commercial due diligence",
      "Financial modeling and valuation support",
      "Synergy analysis and integration planning",
      "Target screening and deal thesis development",
    ],
  },
];
