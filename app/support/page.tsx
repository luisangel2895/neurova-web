import Link from "next/link";

import {
  MailIcon,
  PrivacyIcon,
  ShieldIcon,
  TimeIcon,
} from "@/components/marketing/icons";
import { Reveal } from "@/components/marketing/reveal";
import { FaqCards, SectionHeading } from "@/components/marketing/shared";
import { SiteFooter, SiteHeader } from "@/components/marketing/site-chrome";
import { StructuredData } from "@/components/marketing/structured-data";
import { SupportForm } from "@/components/marketing/support-form";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Support",
  description:
    "Contact Neurova support for account help, sync questions, OCR issues, and general troubleshooting.",
  path: "/support",
  keywords: [...siteConfig.keywords, "Neurova support", "study app support"],
});

export default function SupportPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `${siteConfig.name} Support`,
    url: `${siteConfig.siteUrl}/support`,
    description:
      "Official support page for the Neurova iOS study app.",
  };

  return (
    <>
      <StructuredData data={contactPageSchema} />
      <div className="relative min-h-screen overflow-x-clip bg-page">
        <div className="page-noise" />
        <SiteHeader />

        <main className="section-spacing pt-14 sm:pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Support"
                title="Need help with Neurova?"
                description="Send a message and we will help with sync issues, study data questions, OCR problems, account access, or general product feedback."
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
                      Contact details
                    </h2>
                    <p className="mt-4 text-base leading-8 text-subtle">
                      Prefer email? Reach out directly and include any screenshots
                      or device details that can help us reproduce the issue.
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
                        Response time
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-subtle">
                        {siteConfig.responseTime}
                      </p>
                    </div>
                    <div className="glass-card p-6">
                      <div className="icon-chip">
                        <ShieldIcon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                        Helpful context
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-subtle">
                        Device model, iOS version, and screenshots usually help us
                        resolve problems much faster.
                      </p>
                    </div>
                  </div>

                  <div className="glass-card p-7">
                    <div className="icon-chip">
                      <PrivacyIcon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                      Related pages
                    </h3>
                    <p className="mt-4 text-base leading-8 text-subtle">
                      The support page is ready for App Store Connect, and the same
                      site also includes your official privacy policy and marketing page.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link href="/" className="pill-link">
                        Home
                      </Link>
                      <Link href="/privacy" className="pill-link">
                        Privacy Policy
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <SupportForm />
              </Reveal>
            </div>

            <Reveal delay={180}>
              <div className="mt-16">
                <SectionHeading
                  eyebrow="Support FAQ"
                  title="A few quick answers before you send a message."
                  description="These help cover the questions we expect most often from App Store users."
                />
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10">
                <FaqCards items={siteConfig.supportFaqs} />
              </div>
            </Reveal>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
