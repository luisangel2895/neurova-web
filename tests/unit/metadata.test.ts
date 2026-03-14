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
  });
});
