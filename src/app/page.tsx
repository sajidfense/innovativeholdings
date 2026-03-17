import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { ServicesOverview } from "@/components/sections/services-overview";
import { StrategyFramework } from "@/components/sections/strategy-framework";
import { ResultsSection } from "@/components/sections/results-section";
import { CaseStudiesPreview } from "@/components/sections/case-studies-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { IndustriesSection } from "@/components/sections/industries-section";
import { InsightsSection } from "@/components/sections/insights-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { CTABanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — immersive full-screen with 3D particles */}
      <Hero />

      {/* 2. Trust signal marquee */}
      <TrustedBy />

      {/* 3. Services — interactive expandable cards (dark bg) */}
      <ServicesOverview />

      {/* 4. Approach — methodology steps (white bg) */}
      <StrategyFramework />

      {/* 5. Results — animated metrics + 3D globe (white bg) */}
      <ResultsSection />

      {/* 6. Case Studies — horizontal scroll pinned section */}
      <CaseStudiesPreview />

      {/* 7. Testimonials — carousel (dark bg) */}
      <Testimonials />

      {/* 8. Industries — gradient grid (white bg) */}
      <IndustriesSection />

      {/* 9. Insights — editorial articles (gray bg) */}
      <InsightsSection />

      {/* 10. Newsletter — dark bg */}
      <NewsletterSection />

      {/* 11. CTA Banner — immersive conversion section */}
      <CTABanner />
    </>
  );
}
