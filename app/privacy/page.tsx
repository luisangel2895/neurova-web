import Link from "next/link";

import { Reveal } from "@/components/marketing/reveal";
import { SiteFooter, SiteHeader } from "@/components/marketing/site-chrome";
import { StructuredData } from "@/components/marketing/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { formatLongDate } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Neurova, covering Sign in with Apple, private iCloud sync, OCR inputs, support communication, and product diagnostics.",
  path: "/privacy",
  keywords: [...siteConfig.keywords, "Neurova privacy policy"],
});

export default function PrivacyPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${siteConfig.name} Privacy Policy`,
    url: `${siteConfig.siteUrl}/privacy`,
    description:
      "Official privacy policy for the Neurova iOS study app and support website.",
  };

  return (
    <>
      <StructuredData data={webPageSchema} />
      <div className="relative min-h-screen overflow-x-clip bg-page">
        <div className="page-noise" />
        <SiteHeader />

        <main className="section-spacing pt-14 sm:pt-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <Reveal>
              <div className="glass-card p-7 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">
                  Privacy Policy
                </p>
                <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                  Clear, practical privacy information for Neurova.
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-subtle sm:text-lg">
                  This policy applies to the Neurova iOS app and the official
                  website used for marketing, support, and product information.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.35rem] border border-line/70 bg-page/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
                      Effective date
                    </p>
                    <p className="mt-2 text-sm font-semibold text-ink">
                      {formatLongDate(siteConfig.lastUpdated)}
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] border border-line/70 bg-page/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
                      Contact
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
                      App Store URL use
                    </p>
                    <p className="mt-2 text-sm font-semibold text-ink">
                      Ready for App Store Connect
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-8 space-y-5">
              {siteConfig.privacySections.map((section, index) => (
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
                <Link href="/" className="button-secondary">
                  Back to home
                </Link>
                <Link href="/support" className="button-primary">
                  Contact support
                </Link>
              </div>
            </Reveal>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
