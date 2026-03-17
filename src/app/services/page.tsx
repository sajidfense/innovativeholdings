import { Metadata } from "next";
import { ServicesContent } from "@/components/pages/services-content";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Consulting Services",
  description:
    "Business strategy consulting, operational transformation, digital transformation, M&A advisory, and financial performance optimization. End-to-end advisory for growth-stage companies.",
  keywords: [
    "business strategy consulting",
    "operational transformation consulting",
    "digital transformation consulting",
    "M&A advisory services",
    "financial performance optimization",
    "growth consulting services",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Consulting Services | Innovative Holdings",
    description:
      "Strategy, operational transformation, digital transformation, M&A advisory, and financial optimization. End-to-end advisory for growth-stage companies.",
    url: `${siteConfig.url}/services`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulting Services | Innovative Holdings",
    description:
      "Strategy consulting, operational transformation, M&A advisory, and financial optimization for growth-stage companies.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }]} />
      <ServicesContent />
    </>
  );
}
