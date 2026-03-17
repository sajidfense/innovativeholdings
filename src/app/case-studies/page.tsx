import { Metadata } from "next";
import { CaseStudiesContent } from "@/components/pages/case-studies-content";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from Innovative Holdings consulting engagements. SaaS scaling, operational turnaround, market expansion, digital transformation, and M&A advisory case studies.",
  keywords: [
    "consulting case studies",
    "business transformation results",
    "SaaS growth consulting",
    "operational turnaround",
    "M&A advisory results",
  ],
  alternates: {
    canonical: `${siteConfig.url}/case-studies`,
  },
  openGraph: {
    title: "Case Studies | Innovative Holdings",
    description:
      "Real consulting results: SaaS scaling, operational turnaround, market expansion, digital transformation, and M&A advisory.",
    url: `${siteConfig.url}/case-studies`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Innovative Holdings",
    description:
      "Real consulting results across technology, manufacturing, real estate, healthcare, and private equity.",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Case Studies", href: "/case-studies" }]} />
      <CaseStudiesContent />
    </>
  );
}
