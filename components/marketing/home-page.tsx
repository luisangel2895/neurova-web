import Image from "next/image";
import Link from "next/link";

import { AppStoreButton } from "@/components/marketing/app-store-button";
import {
  ChartIcon,
  CheckCircleIcon,
  CloudIcon,
  FlashcardsIcon,
  RepeatIcon,
  ScanIcon,
  ShieldIcon,
  SparkIcon,
  StreakIcon,
} from "@/components/marketing/icons";
import { Reveal } from "@/components/marketing/reveal";
import { DeviceMockup, FaqCards, SectionHeading } from "@/components/marketing/shared";
import { localizedPath, type Locale } from "@/lib/i18n";
import { getSiteCopy } from "@/lib/site-content";
import { siteConfig, type IconName } from "@/lib/site-config";

const featureIconMap: Record<
  IconName,
  (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element
> = {
  flashcards: FlashcardsIcon,
  scan: ScanIcon,
  repeat: RepeatIcon,
  chart: ChartIcon,
  cloud: CloudIcon,
  streak: StreakIcon,
  spark: SparkIcon,
  shield: ShieldIcon,
  mail: ShieldIcon,
  time: RepeatIcon,
  privacy: ShieldIcon,
};

export function HomePage({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);
  const localizedScreenshots = siteConfig.mediaAssets.iphoneScreenshots.map(
    (shot, index) => ({
      src: shot.src,
      alt: copy.media.screenshots[index]?.alt ?? shot.alt,
      caption: copy.media.screenshots[index]?.caption ?? shot.caption,
    }),
  );
  const screenshotLoop = [...localizedScreenshots, ...localizedScreenshots];

  return (
    <>
      <HeroSection locale={locale} copy={copy} localizedScreenshots={localizedScreenshots} />
      <FeatureHighlights copy={copy} />
      <ScreenshotsSection copy={copy} screenshotLoop={screenshotLoop} localizedScreenshots={localizedScreenshots} />
      <FeaturesSection copy={copy} />
      <HowItWorksSection copy={copy} localizedScreenshots={localizedScreenshots} />
      <FaqSection copy={copy} />
      <FinalCtaSection locale={locale} copy={copy} />
    </>
  );
}

function HeroSection({
  locale,
  copy,
  localizedScreenshots,
}: {
  locale: Locale;
  copy: ReturnType<typeof getSiteCopy>;
  localizedScreenshots: Array<{ src: string; alt: string; caption: string }>;
}) {
  const heroScreens = localizedScreenshots;

  return (
    <section className="section-spacing section-anchor relative overflow-hidden pb-8 pt-14 sm:pt-20 lg:pt-24">
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-700 shadow-soft backdrop-blur-xl">
              <SparkIcon className="h-4 w-4" />
              {copy.home.hero.eyebrow}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl lg:text-[5.7rem] lg:leading-[0.92]">
              {copy.home.hero.titleLead}{" "}
              <span className="gradient-text">{copy.home.hero.titleAccent}</span>.
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-subtle sm:text-xl">
              {copy.home.hero.description}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <AppStoreButton
                className="min-w-[17.5rem]"
                note={copy.appStore.heroNote}
                titleLabel={copy.appStore.titleLabel}
                ariaLabel={copy.appStore.ariaLabel}
              />
              <ActionLink href={localizedPath(locale, "/")} hash="screenshots" variant="secondary">
                {copy.home.hero.exploreCta}
              </ActionLink>
            </div>
          </Reveal>

          <Reveal delay={370}>
            <div className="mx-auto mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-subtle">
              {copy.home.hero.helperChips.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line/70 bg-white/80 px-4 py-2 shadow-soft"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
              {copy.home.hero.highlights.map((item) => (
                <span key={item} className="pill-link text-subtle">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative mt-16 lg:mt-20">
          <div className="absolute left-1/2 top-[18%] hidden h-56 w-56 -translate-x-[150%] rounded-full bg-brand-300/30 blur-3xl lg:block" />
          <div className="absolute right-1/2 top-[24%] hidden h-60 w-60 translate-x-[165%] rounded-full bg-mint-300/35 blur-3xl lg:block" />

          <div className="grid items-end gap-6 lg:grid-cols-[0.82fr_minmax(0,1fr)_0.82fr]">
            <Reveal className="hidden lg:block" delay={200}>
              <DeviceMockup
                src={heroScreens[3].src}
                alt={heroScreens[3].alt}
                caption={copy.home.hero.heroScreens.leftCaption}
                className="translate-y-16 rotate-[-8deg]"
                sizes="(max-width: 1200px) 24vw, 280px"
              />
            </Reveal>

            <Reveal delay={260}>
              <div className="relative mx-auto max-w-[23rem] sm:max-w-[26rem]">
                <div className="pointer-events-none absolute -left-12 -top-8 hidden rounded-[1.4rem] border border-white/70 bg-white/82 p-4 shadow-elevated backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-3">
                    <div className="icon-chip">
                      <SparkIcon className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-subtle">
                        {copy.home.hero.sideCards.ocrLabel}
                      </p>
                      <p className="mt-1 text-sm font-medium text-ink">
                        {copy.home.hero.sideCards.ocrText}
                      </p>
                    </div>
                  </div>
                </div>

                <DeviceMockup
                  src={heroScreens[0].src}
                  alt={heroScreens[0].alt}
                  caption={copy.home.hero.heroScreens.centerCaption}
                  priority
                  sizes="(max-width: 768px) 82vw, 420px"
                />

                <div className="pointer-events-none absolute -bottom-8 -right-8 hidden rounded-[1.4rem] border border-white/70 bg-white/82 p-4 shadow-elevated backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-3">
                    <div className="icon-chip">
                      <CloudIcon className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-subtle">
                        {copy.home.hero.sideCards.syncLabel}
                      </p>
                      <p className="mt-1 text-sm font-medium text-ink">
                        {copy.home.hero.sideCards.syncText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="hidden lg:block" delay={320}>
              <DeviceMockup
                src={heroScreens[5].src}
                alt={heroScreens[5].alt}
                caption={copy.home.hero.heroScreens.rightCaption}
                className="translate-y-10 rotate-[8deg]"
                sizes="(max-width: 1200px) 24vw, 280px"
              />
            </Reveal>
          </div>

          <Reveal delay={360}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {copy.home.hero.summaryCards.map((item) => (
                <div key={item.title} className="glass-card p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-subtle">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeatureHighlights({ copy }: { copy: ReturnType<typeof getSiteCopy> }) {
  return (
    <section className="section-spacing section-anchor pt-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {copy.home.featureHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="glass-card h-full p-7">
                <div className="icon-chip">
                  {index === 0 ? (
                    <FlashcardsIcon className="h-5 w-5" />
                  ) : index === 1 ? (
                    <RepeatIcon className="h-5 w-5" />
                  ) : (
                    <ShieldIcon className="h-5 w-5" />
                  )}
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-subtle">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScreenshotsSection({
  copy,
  screenshotLoop,
  localizedScreenshots,
}: {
  copy: ReturnType<typeof getSiteCopy>;
  screenshotLoop: Array<{ src: string; alt: string; caption: string }>;
  localizedScreenshots: Array<{ src: string; alt: string; caption: string }>;
}) {
  return (
    <section id="screenshots" className="section-spacing section-anchor overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={copy.home.screenshots.eyebrow}
            title={copy.home.screenshots.title}
            description={copy.home.screenshots.description}
          />
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="glass-card relative overflow-hidden p-7 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(94,144,255,0.22),_transparent_68%)]" />
              <h3 className="relative font-display text-2xl font-semibold tracking-tight text-ink">
                {copy.home.screenshots.detailTitle}
              </h3>
              <p className="relative mt-4 text-base leading-8 text-subtle">
                {copy.home.screenshots.detailDescription}
              </p>

              <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
                {copy.home.screenshots.detailPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-line/70 bg-page/80 px-4 py-3 text-sm font-medium text-ink"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                    {copy.home.screenshots.assetsEyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                    {copy.home.screenshots.assetsTitle}
                  </h3>
                </div>
                <Image
                  src={siteConfig.mediaAssets.logo}
                  alt={`${siteConfig.name} icon`}
                  width={52}
                  height={52}
                  className="rounded-[18px] shadow-soft"
                />
              </div>

              <div className="mt-6 space-y-3">
                {copy.home.screenshots.assetCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.4rem] border border-line/70 bg-page/80 p-4"
                  >
                    <p className="text-sm font-semibold text-ink">{card.title}</p>
                    <p className="mt-2 text-sm leading-7 text-subtle">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-14">
        <div className="marquee-track">
          {screenshotLoop.map((shot, index) => (
            <div
              key={`${shot.src}-${index}`}
              aria-hidden={index >= localizedScreenshots.length}
              className="w-[18rem] shrink-0"
            >
              <DeviceMockup
                src={shot.src}
                alt={shot.alt}
                caption={shot.caption}
                sizes="(max-width: 768px) 74vw, 288px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ copy }: { copy: ReturnType<typeof getSiteCopy> }) {
  return (
    <section id="features" className="section-spacing section-anchor">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={copy.home.features.eyebrow}
            title={copy.home.features.title}
            description={copy.home.features.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {copy.home.features.items.map((feature, index) => {
            const Icon = featureIconMap[feature.icon];

            return (
              <Reveal key={feature.title} delay={index * 90}>
                <div className="glass-card h-full p-7 transition duration-300 hover:-translate-y-1 hover:shadow-elevated">
                  <div className="icon-chip">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-subtle">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection({
  copy,
  localizedScreenshots,
}: {
  copy: ReturnType<typeof getSiteCopy>;
  localizedScreenshots: Array<{ src: string; alt: string; caption: string }>;
}) {
  return (
    <section id="how-it-works" className="section-spacing section-anchor">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={copy.home.howItWorks.eyebrow}
            title={copy.home.howItWorks.title}
            description={copy.home.howItWorks.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            {copy.home.howItWorks.steps.map((step, index) => (
              <Reveal key={step.step} delay={index * 100}>
                <div className="glass-card p-7 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
                        Step {step.step}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                        {step.title}
                      </h3>
                    </div>
                    <div className="rounded-full border border-line/70 bg-page px-4 py-2 text-sm font-medium text-subtle">
                      {copy.home.howItWorks.systemLabel} {step.step}
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-8 text-subtle">{step.description}</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {step.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-[1.2rem] border border-line/70 bg-page/80 px-4 py-3 text-sm font-medium text-ink"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <div className="glass-card h-full p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="icon-chip">
                  <CheckCircleIcon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
                  {copy.home.howItWorks.reasonEyebrow}
                </p>
              </div>

              <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink">
                {copy.home.howItWorks.reasonTitle}
              </h3>
              <p className="mt-4 text-base leading-8 text-subtle">
                {copy.home.howItWorks.reasonDescription}
              </p>

              <div className="mt-8">
                <DeviceMockup
                  src={localizedScreenshots[6].src}
                  alt={localizedScreenshots[6].alt}
                  caption={copy.home.howItWorks.reasonCaption}
                  sizes="(max-width: 1280px) 42vw, 350px"
                />
              </div>

              <div className="mt-8 space-y-3">
                {copy.home.howItWorks.reasonBullets.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[1.25rem] border border-line/70 bg-page/85 px-4 py-3">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
                    <p className="text-sm leading-7 text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FaqSection({ copy }: { copy: ReturnType<typeof getSiteCopy> }) {
  return (
    <section id="faq" className="section-spacing section-anchor">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={copy.home.faq.eyebrow}
            title={copy.home.faq.title}
            description={copy.home.faq.description}
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14">
            <FaqCards items={copy.home.faq.items} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCtaSection({
  locale,
  copy,
}: {
  locale: Locale;
  copy: ReturnType<typeof getSiteCopy>;
}) {
  return (
    <section className="section-spacing pt-4">
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <Reveal>
          <div className="cta-panel relative overflow-hidden rounded-[2rem] px-7 py-10 shadow-elevated sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div className="absolute -left-12 bottom-0 h-56 w-56 rounded-full bg-white/18 blur-3xl" />
            <div className="absolute -right-10 top-0 h-52 w-52 rounded-full bg-mint-300/28 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/74">
                  {copy.home.finalCta.eyebrow}
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {copy.home.finalCta.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                  {copy.home.finalCta.description}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <AppStoreButton
                    variant="light"
                    className="min-w-[17.5rem]"
                    note={copy.appStore.finalNote}
                    titleLabel={copy.appStore.titleLabel}
                    ariaLabel={copy.appStore.ariaLabel}
                  />
                  <ActionLink href={localizedPath(locale, "/support")} variant="ghost-light">
                    {copy.home.finalCta.supportLabel}
                  </ActionLink>
                </div>
              </div>

              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl" />
                <Image
                  src={siteConfig.mediaAssets.mascot}
                  alt="Neurova mascot"
                  width={420}
                  height={347}
                  className="relative mx-auto w-full max-w-[17rem] animate-float-slow object-contain sm:max-w-[20rem]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ActionLink({
  href,
  hash,
  children,
  variant,
}: {
  href: string;
  hash?: string;
  children: React.ReactNode;
  variant: "secondary" | "ghost-light";
}) {
  const className = variant === "secondary" ? "button-secondary" : "button-ghost-light";

  return (
    <Link href={hash ? `${href}#${hash}` : href} className={className}>
      <span>{children}</span>
    </Link>
  );
}
