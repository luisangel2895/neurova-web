import { buildMetadata } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-content";

describe("buildMetadata", () => {
  it("builds spanish metadata with localized canonical and alternates", () => {
    const copy = getSiteCopy("es");
    const metadata = buildMetadata({
      locale: "es",
      title: copy.seo.support.title,
      description: copy.seo.support.description,
      path: "/support",
      keywords: copy.seo.keywords,
    });

    expect(metadata.alternates?.canonical).toBe("https://neurova.app/support");
    expect(metadata.alternates?.languages).toEqual({
      es: "https://neurova.app/support",
      en: "https://neurova.app/en/support",
      "x-default": "https://neurova.app/support",
    });
    expect(metadata.openGraph?.locale).toBe("es_ES");
    expect(metadata.openGraph?.alternateLocale).toEqual(["en_US"]);
    expect(metadata.referrer).toBe("origin-when-cross-origin");
  });

  it("builds english metadata with /en canonical", () => {
    const copy = getSiteCopy("en");
    const metadata = buildMetadata({
      locale: "en",
      title: copy.seo.home.title,
      description: copy.seo.home.description,
      path: "/",
      keywords: copy.seo.keywords,
    });

    expect(metadata.alternates?.canonical).toBe("https://neurova.app/en");
    expect(metadata.openGraph?.url).toBe("https://neurova.app/en");
    expect(metadata.openGraph?.locale).toBe("en_US");
    expect(metadata.openGraph?.alternateLocale).toEqual(["es_ES"]);
  });

  it("can mark utility pages as noindex", () => {
    const copy = getSiteCopy("es");
    const metadata = buildMetadata({
      locale: "es",
      title: copy.seo.supportSuccess.title,
      description: copy.seo.supportSuccess.description,
      path: "/support/success",
      keywords: copy.seo.keywords,
      noIndex: true,
    });

    expect(metadata.robots).toEqual({
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    });
  });
});
