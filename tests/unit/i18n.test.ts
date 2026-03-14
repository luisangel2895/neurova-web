import {
  localizedHashPath,
  localizedPath,
  stripLocalePrefix,
  switchLocalePath,
} from "@/lib/i18n";

describe("i18n helpers", () => {
  it("keeps spanish routes without a locale prefix", () => {
    expect(localizedPath("es", "/")).toBe("/");
    expect(localizedPath("es", "/support")).toBe("/support");
  });

  it("prefixes english routes with /en", () => {
    expect(localizedPath("en", "/")).toBe("/en");
    expect(localizedPath("en", "/privacy")).toBe("/en/privacy");
  });

  it("builds hash routes consistently", () => {
    expect(localizedHashPath("es", "features")).toBe("/#features");
    expect(localizedHashPath("en", "features")).toBe("/en#features");
  });

  it("strips english prefixes when switching locales", () => {
    expect(stripLocalePrefix("/en/privacy")).toBe("/privacy");
    expect(stripLocalePrefix("/support")).toBe("/support");
    expect(switchLocalePath("/en/support", "es")).toBe("/support");
    expect(switchLocalePath("/support", "en")).toBe("/en/support");
  });
});
