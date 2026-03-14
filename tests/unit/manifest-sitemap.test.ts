import manifest from "@/app/manifest";
import sitemap from "@/app/sitemap";

describe("manifest and sitemap", () => {
  it("exposes a production-ready web manifest", () => {
    const webManifest = manifest();

    expect(webManifest.name).toBe("Neurova");
    expect(webManifest.start_url).toBe("/");
    expect(webManifest.icons?.[0]).toMatchObject({
      src: "/logo.png",
      purpose: "any",
    });
    expect(webManifest.icons?.[1]).toMatchObject({
      src: "/logo.png",
      purpose: "maskable",
    });
    expect(webManifest.screenshots?.length).toBeGreaterThan(0);
  });

  it("keeps success pages out of the sitemap and includes alternates", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);
    const homeEntry = entries.find((entry) => entry.url === "https://neurova.app");

    expect(urls).not.toContain("https://neurova.app/support/success");
    expect(urls).not.toContain("https://neurova.app/en/support/success");
    expect(homeEntry?.alternates?.languages).toEqual({
      es: "https://neurova.app",
      en: "https://neurova.app/en",
      "x-default": "https://neurova.app",
    });
    expect(homeEntry?.images).toContain("https://neurova.app/logo.png");
  });
});
