import Link from "next/link";
import Image from "next/image";

import { SiteFooter, SiteHeader } from "@/components/marketing/site-chrome";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Support request received",
  description: "Confirmation page shown after a Neurova support request is sent.",
  path: "/support/success",
});

export default function SupportSuccessPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-page">
      <div className="page-noise" />
      <SiteHeader />

      <main className="section-spacing flex min-h-[70vh] items-center pt-10">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="glass-card overflow-hidden px-7 py-10 text-center shadow-elevated sm:px-10 sm:py-12">
            <div className="mx-auto flex max-w-xs items-center justify-center">
              <Image
                src={siteConfig.mediaAssets.mascot}
                alt="Neurova mascot celebrating"
                width={360}
                height={298}
                className="animate-float-slow object-contain"
                priority
              />
            </div>

            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">
              Message sent
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Thanks, your support request is on the way.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-subtle sm:text-lg">
              We received your message and will reply as soon as possible. If
              you need to send additional context, you can also write directly to{" "}
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="font-semibold text-brand-700"
              >
                {siteConfig.supportEmail}
              </a>
              .
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/" className="button-primary">
                Back to home
              </Link>
              <Link href="/privacy" className="button-secondary">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
