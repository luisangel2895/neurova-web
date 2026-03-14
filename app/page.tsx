import { HomePage } from "@/components/marketing/home-page";
import { SiteFooter, SiteHeader } from "@/components/marketing/site-chrome";
import { StructuredData } from "@/components/marketing/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: `${siteConfig.name} | Intelligent study flow for iPhone`,
  description:
    "Official Neurova landing page with product highlights, screenshots, support, and privacy information for the iOS study app.",
  path: "/",
});

export default function Home() {
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "EducationalApplication",
    operatingSystem: "iOS",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
  };

  return (
    <>
      <StructuredData data={[softwareApplicationSchema, faqSchema, websiteSchema]} />
      <div className="relative min-h-screen overflow-x-clip bg-page">
        <div className="page-noise" />
        <SiteHeader />
        <main>
          <HomePage />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
