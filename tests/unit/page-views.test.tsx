import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  HomePageView,
  PrivacyPageView,
  SupportPageView,
} from "@/components/marketing/page-views";
import { getSiteCopy } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";

describe("marketing page views", () => {
  it("renders the spanish home page with structured data and app store CTAs", () => {
    const copy = getSiteCopy("es");
    const { container } = render(<HomePageView locale="es" />);

    expect(
      screen.getByRole("heading", {
        name: new RegExp(copy.home.hero.titleLead, "i"),
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: copy.home.features.title,
        level: 2,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(copy.home.faq.items[0]?.question ?? ""),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: copy.appStore.ariaLabel }).length,
    ).toBeGreaterThan(1);

    const schemaScript = container.querySelector(
      'script[type="application/ld+json"]',
    );
    expect(schemaScript).not.toBeNull();
    expect(schemaScript?.innerHTML).toContain('"@type":"SoftwareApplication"');
    expect(schemaScript?.innerHTML).toContain('"@type":"FAQPage"');
  });

  it("renders the english support page with localized contact actions", () => {
    const copy = getSiteCopy("en");
    render(<SupportPageView locale="en" />);

    expect(
      screen.getByRole("heading", {
        name: copy.support.heading.title,
        level: 2,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(copy.support.form.fields.name.label),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: copy.support.form.submitIdle }),
    ).toBeInTheDocument();
    expect(
      screen
        .getAllByRole("link", { name: siteConfig.supportEmail })
        .some((link) => link.getAttribute("href") === `mailto:${siteConfig.supportEmail}`),
    ).toBe(true);
    expect(
      screen
        .getAllByRole("link", { name: copy.support.relatedCard.privacyLabel })
        .some((link) => link.getAttribute("href") === "/en/privacy"),
    ).toBe(true);
  });

  it("renders the spanish privacy page with app store ready details", () => {
    const copy = getSiteCopy("es");
    render(<PrivacyPageView locale="es" />);

    expect(
      screen.getByRole("heading", {
        name: copy.privacy.title,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(copy.privacy.cards.effectiveDate)).toBeInTheDocument();
    expect(screen.getByText(copy.privacy.sections[0]?.title ?? "")).toBeInTheDocument();
    expect(
      screen
        .getAllByRole("link", { name: copy.privacy.supportLabel })
        .some((link) => link.getAttribute("href") === "/support"),
    ).toBe(true);
    expect(screen.getByText(copy.privacy.cards.appStoreReady)).toBeInTheDocument();
  });
});
