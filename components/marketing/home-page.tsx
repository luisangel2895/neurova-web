import Image from "next/image";
import Link from "next/link";

import {
  ArrowRightIcon,
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
import { hasRealAppStoreUrl, siteConfig, type IconName } from "@/lib/site-config";

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

const screenshotLoop = [
  ...siteConfig.mediaAssets.iphoneScreenshots,
  ...siteConfig.mediaAssets.iphoneScreenshots,
];

const hasAppStoreLink = hasRealAppStoreUrl();

export function HomePage() {
  const heroPrimaryHref = hasAppStoreLink ? siteConfig.appStoreUrl : "/support";
  const heroPrimaryLabel = hasAppStoreLink
    ? "Download on the App Store"
    : "Contact support";

  return (
    <>
      <HeroSection primaryHref={heroPrimaryHref} primaryLabel={heroPrimaryLabel} />
      <FeatureHighlights />
      <ScreenshotsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FaqSection />
      <FinalCtaSection
        primaryHref={heroPrimaryHref}
        primaryLabel={heroPrimaryLabel}
      />
    </>
  );
}

function HeroSection({
  primaryHref,
  primaryLabel,
}: {
  primaryHref: string;
  primaryLabel: string;
}) {
  const heroScreens = siteConfig.mediaAssets.iphoneScreenshots;

  return (
    <section className="section-spacing section-anchor relative overflow-hidden pb-8 pt-14 sm:pt-20 lg:pt-24">
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-700 shadow-soft backdrop-blur-xl">
              <SparkIcon className="h-4 w-4" />
              Intelligent study flow for iPhone
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl lg:text-[5.7rem] lg:leading-[0.92]">
              Turn notes into <span className="gradient-text">high-retention study sessions</span>.
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-subtle sm:text-xl">
              Neurova combines flashcards, spaced repetition, OCR from notes and
              images, AI-assisted card generation, progress insights, streaks,
              XP, and iCloud sync in one calm, premium experience.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ActionLink href={primaryHref} external={hasAppStoreLink} variant="primary">
                {primaryLabel}
              </ActionLink>
              <ActionLink href="/#screenshots" variant="secondary">
                Explore the flow
              </ActionLink>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
              {siteConfig.heroHighlights.map((item) => (
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
                caption="Focused review mode"
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
                        OCR to cards
                      </p>
                      <p className="mt-1 text-sm font-medium text-ink">
                        Move from raw notes to deck-ready study content.
                      </p>
                    </div>
                  </div>
                </div>

                <DeviceMockup
                  src={heroScreens[0].src}
                  alt={heroScreens[0].alt}
                  caption="Dashboard built for momentum"
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
                        Private sync
                      </p>
                      <p className="mt-1 text-sm font-medium text-ink">
                        Built around iCloud and your own CloudKit private data.
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
                caption="Insights that surface weak spots"
                className="translate-y-10 rotate-[8deg]"
                sizes="(max-width: 1200px) 24vw, 280px"
              />
            </Reveal>
          </div>

          <Reveal delay={360}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Clear study rhythm",
                  text: "A dashboard that keeps goals, ready cards, XP, and streaks visible without noise.",
                },
                {
                  title: "Organized library",
                  text: "Subjects and decks stay structured so generated material lands exactly where it should.",
                },
                {
                  title: "Confident review",
                  text: "Focused flashcard sessions with grading that supports a genuine spaced-repetition loop.",
                },
                {
                  title: "Private by default",
                  text: "The product is aligned with Apple-native account and sync behavior instead of ad tracking.",
                },
              ].map((item) => (
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

function FeatureHighlights() {
  return (
    <section className="section-spacing section-anchor pt-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {siteConfig.featureHighlights.map((item, index) => (
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

function ScreenshotsSection() {
  return (
    <section id="screenshots" className="section-spacing section-anchor overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Screenshots"
            title="A polished interface that stays quiet while your progress gets louder."
            description="The design language comes from the app itself: soft light surfaces, cool blue depth, generous spacing, and premium cards that keep the experience focused."
          />
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="glass-card relative overflow-hidden p-7 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(94,144,255,0.22),_transparent_68%)]" />
              <h3 className="relative font-display text-2xl font-semibold tracking-tight text-ink">
                Built to feel native to serious study sessions
              </h3>
              <p className="relative mt-4 text-base leading-8 text-subtle">
                The home, library, review flow, generator, and insight screens
                all share the same visual vocabulary so the product feels coherent
                as Neurova grows.
              </p>

              <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Soft surfaces with subtle depth",
                  "Readable hierarchy for long sessions",
                  "Gradient accents that stay restrained",
                  "Comfortable mobile-first spacing",
                ].map((item) => (
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
                    Asset slots
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                    Easy to replace as you ship new visuals
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
                <div className="rounded-[1.4rem] border border-line/70 bg-page/80 p-4">
                  <p className="text-sm font-semibold text-ink">Logo / App icon</p>
                  <p className="mt-2 text-sm leading-7 text-subtle">
                    Replace the current asset in `public/logo.png`.
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-line/70 bg-page/80 p-4">
                  <p className="text-sm font-semibold text-ink">iPhone screenshots</p>
                  <p className="mt-2 text-sm leading-7 text-subtle">
                    Current gallery reads from `public/screenshots/` via `lib/site-config.ts`.
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-line/70 bg-page/80 p-4">
                  <p className="text-sm font-semibold text-ink">iPad screenshots</p>
                  <p className="mt-2 text-sm leading-7 text-subtle">
                    Add tablet images later in `mediaAssets.ipadScreenshots` when they are ready.
                  </p>
                </div>
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
              aria-hidden={index >= siteConfig.mediaAssets.iphoneScreenshots.length}
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

function FeaturesSection() {
  return (
    <section id="features" className="section-spacing section-anchor">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Features"
            title="Everything Neurova needs to become a study system, not just a card viewer."
            description="The product is intentionally built around the full loop: capture, organize, review, measure progress, and stay consistent over time."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteConfig.features.map((feature, index) => {
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

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-spacing section-anchor">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="A calmer study loop from raw material to long-term retention."
            description="Neurova is structured so the workflow feels deliberate from the first import to the final review session."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            {siteConfig.steps.map((step, index) => (
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
                      Study system {step.step}
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
                  Why the flow feels coherent
                </p>
              </div>

              <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink">
                One visual language across the whole product.
              </h3>
              <p className="mt-4 text-base leading-8 text-subtle">
                The landing mirrors the same tone your app already communicates:
                crisp whitespace, soft blue depth, restrained gradients, and a
                premium light-mode foundation that can carry into future pages.
              </p>

              <div className="mt-8">
                <DeviceMockup
                  src={siteConfig.mediaAssets.iphoneScreenshots[6].src}
                  alt={siteConfig.mediaAssets.iphoneScreenshots[6].alt}
                  caption="Generator view"
                  sizes="(max-width: 1280px) 42vw, 350px"
                />
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Consistent blue-to-cyan accent treatment",
                  "Glass cards and subtle shadows for a premium feel",
                  "Animations added with restraint so the product still feels serious",
                ].map((item) => (
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

function FaqSection() {
  return (
    <section id="faq" className="section-spacing section-anchor">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers to the questions users usually ask before they trust a study app."
            description="Short, direct answers for App Store visitors, support traffic, and anyone deciding whether Neurova fits their study workflow."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14">
            <FaqCards items={siteConfig.homeFaqs} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCtaSection({
  primaryHref,
  primaryLabel,
}: {
  primaryHref: string;
  primaryLabel: string;
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
                  Ready for production
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Give Neurova a web presence that feels as polished as the app.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                  This site is ready to serve as your Marketing URL, Support URL,
                  and Privacy Policy URL while staying flexible enough for future
                  product pages.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ActionLink
                    href={primaryHref}
                    external={hasAppStoreLink}
                    variant="inverse"
                  >
                    {primaryLabel}
                  </ActionLink>
                  <ActionLink href="/support" variant="ghost-light">
                    Talk to support
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
  children,
  external = false,
  variant,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant: "primary" | "secondary" | "inverse" | "ghost-light";
}) {
  const className =
    variant === "primary"
      ? "button-primary"
      : variant === "secondary"
        ? "button-secondary"
        : variant === "inverse"
          ? "button-inverse"
          : "button-ghost-light";

  const content = (
    <>
      <span>{children}</span>
      <ArrowRightIcon className="h-4 w-4" />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
