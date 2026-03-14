import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
  buildWebPageSchema,
  buildWebSiteSchema,
  getAlternateLanguageUrls,
  getAlternateOgLocales,
  getLocalizedAbsoluteUrl,
  serializeJsonLd,
  toAbsoluteUrl,
} from "@/lib/seo";

describe("seo helpers", () => {
  it("builds absolute URLs consistently", () => {
    expect(toAbsoluteUrl("/")).toBe("https://neurova-web.vercel.app");
    expect(getLocalizedAbsoluteUrl("en", "/support")).toBe(
      "https://neurova-web.vercel.app/en/support",
    );
  });

  it("returns alternate language URLs for localized routes", () => {
    expect(getAlternateLanguageUrls("/privacy")).toEqual({
      es: "https://neurova-web.vercel.app/privacy",
      en: "https://neurova-web.vercel.app/en/privacy",
      "x-default": "https://neurova-web.vercel.app/privacy",
    });
    expect(getAlternateOgLocales("es")).toEqual(["en_US"]);
  });

  it("serializes JSON-LD safely", () => {
    const payload = serializeJsonLd({
      "@context": "https://schema.org",
      name: "</script><script>alert('xss')</script>",
    });

    expect(payload).toContain("\\u003c/script\\u003e");
    expect(payload).not.toContain("</script>");
  });

  it("creates breadcrumb schema with stable positions", () => {
    expect(
      buildBreadcrumbSchema([
        { name: "Home", url: "https://neurova-web.vercel.app" },
        { name: "Support", url: "https://neurova-web.vercel.app/support" },
      ]),
    ).toEqual({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://neurova-web.vercel.app",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Support",
          item: "https://neurova-web.vercel.app/support",
        },
      ],
    });
  });

  it("builds reusable website and page schemas with locale context", () => {
    expect(buildWebSiteSchema("en")).toMatchObject({
      "@type": "WebSite",
      url: "https://neurova-web.vercel.app/en",
      inLanguage: "en",
    });

    expect(
      buildWebPageSchema({
        locale: "es",
        name: "Neurova Soporte",
        url: "https://neurova-web.vercel.app/support",
        description: "Ayuda oficial",
        type: "ContactPage",
      }),
    ).toMatchObject({
      "@type": "ContactPage",
      inLanguage: "es",
      dateModified: "2026-03-13",
    });
  });

  it("builds organization and faq schemas for rich results", () => {
    expect(buildOrganizationSchema("es")).toMatchObject({
      "@type": "Organization",
      email: "support@neurova.app",
    });

    expect(
      buildFaqSchema([
        {
          question: "How does sync work?",
          answer: "It uses iCloud private storage.",
        },
      ]),
    ).toEqual({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does sync work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It uses iCloud private storage.",
          },
        },
      ],
    });
  });
});
