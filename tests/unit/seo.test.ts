import {
  buildBreadcrumbSchema,
  getAlternateLanguageUrls,
  getAlternateOgLocales,
  getLocalizedAbsoluteUrl,
  serializeJsonLd,
  toAbsoluteUrl,
} from "@/lib/seo";

describe("seo helpers", () => {
  it("builds absolute URLs consistently", () => {
    expect(toAbsoluteUrl("/")).toBe("https://neurova.app");
    expect(getLocalizedAbsoluteUrl("en", "/support")).toBe(
      "https://neurova.app/en/support",
    );
  });

  it("returns alternate language URLs for localized routes", () => {
    expect(getAlternateLanguageUrls("/privacy")).toEqual({
      es: "https://neurova.app/privacy",
      en: "https://neurova.app/en/privacy",
      "x-default": "https://neurova.app/privacy",
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
        { name: "Home", url: "https://neurova.app" },
        { name: "Support", url: "https://neurova.app/support" },
      ]),
    ).toEqual({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://neurova.app",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Support",
          item: "https://neurova.app/support",
        },
      ],
    });
  });
});
