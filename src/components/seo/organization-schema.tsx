import { siteConfig } from "@/lib/constants";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo.png`,
          width: 200,
          height: 60,
        },
        sameAs: [
          siteConfig.links.linkedin,
          siteConfig.links.twitter,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          url: `${siteConfig.url}/contact`,
          areaServed: "US",
          availableLanguage: "English",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Consulting Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Strategy Consulting" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Operational Transformation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Growth & Market Expansion" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Transformation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mergers & Acquisitions Advisory" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Financial Performance Optimization" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/insights?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
