import Image from "next/image";
import Link from "next/link";

import {
  MailIcon,
  PrivacyIcon,
  ShieldIcon,
  TimeIcon,
} from "@/components/marketing/icons";
import { HomePage } from "@/components/marketing/home-page";
import { Reveal } from "@/components/marketing/reveal";
import { FaqCards, SectionHeading } from "@/components/marketing/shared";
import { SiteFooter, SiteHeader } from "@/components/marketing/site-chrome";
import { StructuredData } from "@/components/marketing/structured-data";
import { SupportForm } from "@/components/marketing/support-form";
import { localizedPath, type Locale } from "@/lib/i18n";
import {
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  getLocalizedAbsoluteUrl,
  toAbsoluteUrl,
} from "@/lib/seo";
import { getSiteCopy } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";
import { formatLongDate } from "@/lib/utils";

export function HomePageView({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);
  const pagePath = localizedPath(locale, "/");
  const pageUrl = getLocalizedAbsoluteUrl(locale, "/");

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: siteConfig.name,
    applicationCategory: "EducationalApplication",
    operatingSystem: "iOS",
    description: copy.seo.home.description,
    url: pageUrl,
    image: toAbsoluteUrl(siteConfig.mediaAssets.logo),
    screenshot: siteConfig.mediaAssets.iphoneScreenshots.map((shot) =>
      toAbsoluteUrl(shot.src),
    ),
    inLanguage: locale,
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
    mainEntity: copy.home.faq.items.map((faq) => ({
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
    url: pageUrl,
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    {
      name: copy.navigation.home,
      url: pageUrl,
    },
  ]);

  return (
    <>
      <StructuredData
        data={[
          buildOrganizationSchema(locale),
          softwareApplicationSchema,
          faqSchema,
          websiteSchema,
          breadcrumbSchema,
        ]}
      />
      <div className="relative min-h-screen overflow-x-clip bg-page">
        <div className="page-noise" />
        <SiteHeader locale={locale} currentPath={pagePath} />
        <main>
          <HomePage locale={locale} />
        </main>
        <SiteFooter locale={locale} />
      </div>
    </>
  );
}

export function SupportPageView({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);
  const pagePath = localizedPath(locale, "/support");
  const pageUrl = getLocalizedAbsoluteUrl(locale, "/support");
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `${siteConfig.name} ${copy.seo.support.title}`,
    url: pageUrl,
    description: copy.support.schemaDescription,
  };
  const breadcrumbSchema = buildBreadcrumbSchema([
    {
      name: copy.navigation.home,
      url: getLocalizedAbsoluteUrl(locale, "/"),
    },
    {
      name: copy.navigation.support,
      url: pageUrl,
    },
  ]);

  return (
    <>
      <StructuredData
        data={[buildOrganizationSchema(locale), contactPageSchema, breadcrumbSchema]}
      />
      <div className="relative min-h-screen overflow-x-clip bg-page">
        <div className="page-noise" />
        <SiteHeader locale={locale} currentPath={pagePath} />

        <main className="section-spacing pt-14 sm:pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow={copy.support.heading.eyebrow}
                title={copy.support.heading.title}
                description={copy.support.heading.description}
                align="left"
              />
            </Reveal>

            <div className="mt-12 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
              <Reveal delay={90}>
                <div className="space-y-5">
                  <div className="glass-card p-7">
                    <div className="icon-chip">
                      <MailIcon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                      {copy.support.contactCard.title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-subtle">
                      {copy.support.contactCard.description}
                    </p>
                    <a
                      href={`mailto:${siteConfig.supportEmail}`}
                      className="mt-5 inline-flex text-base font-semibold text-brand-700 transition hover:text-brand-800"
                    >
                      {siteConfig.supportEmail}
                    </a>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="glass-card p-6">
                      <div className="icon-chip">
                        <TimeIcon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                        {copy.support.responseCard.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-subtle">
                        {copy.support.responseCard.description}
                      </p>
                    </div>
                    <div className="glass-card p-6">
                      <div className="icon-chip">
                        <ShieldIcon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                        {copy.support.contextCard.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-subtle">
                        {copy.support.contextCard.description}
                      </p>
                    </div>
                  </div>

                  <div className="glass-card p-7">
                    <div className="icon-chip">
                      <PrivacyIcon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                      {copy.support.relatedCard.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-subtle">
                      {copy.support.relatedCard.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link href={localizedPath(locale, "/")} className="pill-link">
                        {copy.support.relatedCard.homeLabel}
                      </Link>
                      <Link href={localizedPath(locale, "/privacy")} className="pill-link">
                        {copy.support.relatedCard.privacyLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <SupportForm locale={locale} />
              </Reveal>
            </div>

            <Reveal delay={180}>
              <div className="mt-16">
                <SectionHeading
                  eyebrow={copy.support.faqHeading.eyebrow}
                  title={copy.support.faqHeading.title}
                  description={copy.support.faqHeading.description}
                />
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10">
                <FaqCards items={copy.support.faqs} />
              </div>
            </Reveal>
          </div>
        </main>

        <SiteFooter locale={locale} />
      </div>
    </>
  );
}

export function SupportSuccessPageView({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);
  const pagePath = localizedPath(locale, "/support/success");

  return (
    <div className="relative min-h-screen overflow-x-clip bg-page">
      <div className="page-noise" />
      <SiteHeader locale={locale} currentPath={pagePath} />

      <main className="section-spacing flex min-h-[70vh] items-center pt-10">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="glass-card overflow-hidden px-7 py-10 text-center shadow-elevated sm:px-10 sm:py-12">
            <div className="mx-auto flex max-w-xs items-center justify-center">
              <Image
                src={siteConfig.mediaAssets.mascot}
                alt={copy.supportSuccess.mascotAlt}
                width={360}
                height={298}
                className="animate-float-slow object-contain"
                priority
              />
            </div>

            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">
              {copy.supportSuccess.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {copy.supportSuccess.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-subtle sm:text-lg">
              {copy.supportSuccess.description}{" "}
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="font-semibold text-brand-700"
              >
                {siteConfig.supportEmail}
              </a>
              .
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={localizedPath(locale, "/")} className="button-primary">
                {copy.supportSuccess.homeLabel}
              </Link>
              <Link href={localizedPath(locale, "/privacy")} className="button-secondary">
                {copy.supportSuccess.privacyLabel}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}

export function PrivacyPageView({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);
  const pagePath = localizedPath(locale, "/privacy");
  const pageUrl = getLocalizedAbsoluteUrl(locale, "/privacy");
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${siteConfig.name} ${copy.seo.privacy.title}`,
    url: pageUrl,
    description: copy.privacy.schemaDescription,
  };
  const breadcrumbSchema = buildBreadcrumbSchema([
    {
      name: copy.navigation.home,
      url: getLocalizedAbsoluteUrl(locale, "/"),
    },
    {
      name: copy.navigation.privacy,
      url: pageUrl,
    },
  ]);

  return (
    <>
      <StructuredData
        data={[buildOrganizationSchema(locale), webPageSchema, breadcrumbSchema]}
      />
      <div className="relative min-h-screen overflow-x-clip bg-page">
        <div className="page-noise" />
        <SiteHeader locale={locale} currentPath={pagePath} />

        <main className="section-spacing pt-14 sm:pt-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <Reveal>
              <div className="glass-card p-7 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">
                  {copy.privacy.eyebrow}
                </p>
                <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                  {copy.privacy.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-subtle sm:text-lg">
                  {copy.privacy.description}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.35rem] border border-line/70 bg-page/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
                      {copy.privacy.cards.effectiveDate}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-ink">
                      {formatLongDate(
                        siteConfig.lastUpdated,
                        locale === "es" ? "es-ES" : "en-US",
                      )}
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] border border-line/70 bg-page/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
                      {copy.privacy.cards.contact}
                    </p>
                    <a
                      href={`mailto:${siteConfig.supportEmail}`}
                      className="mt-2 block text-sm font-semibold text-brand-700"
                    >
                      {siteConfig.supportEmail}
                    </a>
                  </div>
                  <div className="rounded-[1.35rem] border border-line/70 bg-page/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
                      {copy.privacy.cards.appStoreUrlUse}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-ink">
                      {copy.privacy.cards.appStoreReady}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-8 space-y-5">
              {copy.privacy.sections.map((section, index) => (
                <Reveal key={section.title} delay={index * 45}>
                  <section className="glass-card p-7 sm:p-8">
                    <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base leading-8 text-subtle"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.bullets ? (
                      <ul className="mt-5 space-y-3">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="rounded-[1.25rem] border border-line/70 bg-page/80 px-4 py-3 text-sm leading-7 text-ink"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                </Reveal>
              ))}
            </div>

            <Reveal delay={140}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={localizedPath(locale, "/")} className="button-secondary">
                  {copy.privacy.homeLabel}
                </Link>
                <Link href={localizedPath(locale, "/support")} className="button-primary">
                  {copy.privacy.supportLabel}
                </Link>
              </div>
            </Reveal>
          </div>
        </main>

        <SiteFooter locale={locale} />
      </div>
    </>
  );
}
