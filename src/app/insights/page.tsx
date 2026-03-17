import { Metadata } from "next";
import { InsightsContent } from "@/components/pages/insights-content";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Insights & Thought Leadership",
  description:
    "Strategic frameworks, market analysis, and growth insights from Innovative Holdings. Thought leadership on business strategy, operational efficiency, and growth for senior leaders.",
  keywords: [
    "business strategy insights",
    "consulting thought leadership",
    "growth strategy articles",
    "operational efficiency insights",
    "executive strategy blog",
  ],
  alternates: {
    canonical: `${siteConfig.url}/insights`,
  },
  openGraph: {
    title: "Insights & Thought Leadership | Innovative Holdings",
    description:
      "Strategic frameworks, market analysis, and growth insights for senior leaders. Business strategy, operational efficiency, and growth consulting perspectives.",
    url: `${siteConfig.url}/insights`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Thought Leadership | Innovative Holdings",
    description:
      "Strategic frameworks, market analysis, and growth insights for senior leaders.",
  },
};

export default function InsightsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Insights", href: "/insights" }]} />
      <InsightsContent />
    </>
  );
}
