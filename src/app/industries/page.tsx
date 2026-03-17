import { Metadata } from "next";
import { IndustriesContent } from "@/components/pages/industries-content";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Industry-tailored consulting across Technology, Healthcare, Finance, Real Estate, Manufacturing, and Professional Services. Deep sector expertise combined with cross-industry best practices.",
  keywords: [
    "technology consulting",
    "healthcare consulting",
    "finance consulting",
    "real estate consulting",
    "manufacturing consulting",
    "professional services consulting",
  ],
  alternates: {
    canonical: `${siteConfig.url}/industries`,
  },
  openGraph: {
    title: "Industries We Serve | Innovative Holdings",
    description:
      "Industry-tailored consulting across Technology, Healthcare, Finance, Real Estate, Manufacturing, and Professional Services.",
    url: `${siteConfig.url}/industries`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Innovative Holdings",
    description:
      "Consulting expertise across Technology, Healthcare, Finance, Real Estate, Manufacturing, and Professional Services.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Industries", href: "/industries" }]} />
      <IndustriesContent />
    </>
  );
}
