export type IconName =
  | "flashcards"
  | "scan"
  | "repeat"
  | "chart"
  | "cloud"
  | "streak"
  | "spark"
  | "shield"
  | "mail"
  | "time"
  | "privacy";

type Screenshot = {
  src: string;
  alt: string;
  caption: string;
};

type Feature = {
  icon: IconName;
  title: string;
  description: string;
};

type Step = {
  step: string;
  title: string;
  description: string;
  points: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

type PolicySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

function normalizeSiteUrl(value?: string) {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim().replace(/\/$/, "");
  return /^https?:\/\//.test(trimmed) ? trimmed : `https://${trimmed}`;
}

const siteUrl =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ||
  normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ||
  "https://neurova-web.vercel.app";

const appStoreUrl =
  process.env.NEXT_PUBLIC_APP_STORE_URL ||
  "https://apps.apple.com/ar/app/neurova-study/id6760527720";

const appStoreId = process.env.NEXT_PUBLIC_APP_STORE_ID || "6760527720";
const appStoreScheme = process.env.NEXT_PUBLIC_APP_SCHEME;
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

export const siteConfig = {
  name: "Neurova",
  shortName: "Neurova",
  description:
    "Neurova is an iPhone study companion for flashcards, spaced repetition, OCR note capture, progress insights, streaks, XP, and private iCloud sync.",
  siteUrl,
  shouldIndex: process.env.VERCEL_ENV !== "preview",
  locale: "en_US",
  supportEmail: "support@neurova.app",
  responseTime: "We usually reply within 1-2 business days.",
  appStoreUrl,
  appStoreId,
  appStoreScheme,
  googleSiteVerification,
  bingSiteVerification,
  keywords: [
    "Neurova",
    "study app",
    "flashcards",
    "spaced repetition",
    "OCR study app",
    "AI flashcards",
    "study insights",
    "iCloud sync",
    "learning app",
    "exam prep",
  ],
  navigation: [
    { href: "/#features", label: "Features" },
    { href: "/#screenshots", label: "Screens" },
    { href: "/#how-it-works", label: "How it works" },
    { href: "/support", label: "Support" },
    { href: "/privacy", label: "Privacy" },
  ],
  mediaAssets: {
    logo: "/logo.png",
    mascot: "/neru-celebrate.png",
    iphoneScreenshots: [
      {
        src: "/screenshots/Simulator Screenshot - iPhone 11 Pro Max - 2026-03-13 at 20.13.16.png",
        alt: "Neurova dashboard screen showing today's study progress, streak, XP, and decks.",
        caption: "Daily study dashboard",
      },
      {
        src: "/screenshots/Simulator Screenshot - iPhone 11 Pro Max - 2026-03-13 at 20.13.26.png",
        alt: "Neurova library screen organizing study subjects and decks.",
        caption: "Organized subject library",
      },
      {
        src: "/screenshots/Simulator Screenshot - iPhone 11 Pro Max - 2026-03-13 at 20.13.39.png",
        alt: "Neurova deck detail view listing flashcards and review status.",
        caption: "Deck overview",
      },
      {
        src: "/screenshots/Simulator Screenshot - iPhone 11 Pro Max - 2026-03-13 at 20.13.52.png",
        alt: "Neurova study session showing the front of a flashcard.",
        caption: "Focused review flow",
      },
      {
        src: "/screenshots/Simulator Screenshot - iPhone 11 Pro Max - 2026-03-13 at 20.13.58.png",
        alt: "Neurova study session answer state with spaced repetition choices.",
        caption: "Spaced repetition grading",
      },
      {
        src: "/screenshots/Simulator Screenshot - iPhone 11 Pro Max - 2026-03-13 at 20.14.12.png",
        alt: "Neurova insights screen with level progress, goals, and deck health.",
        caption: "Progress insights",
      },
      {
        src: "/screenshots/Simulator Screenshot - iPhone 11 Pro Max - 2026-03-13 at 20.14.31.png",
        alt: "Neurova generator screen for saving AI-generated flashcards into a subject and deck.",
        caption: "Generator workflow",
      },
    ] satisfies Screenshot[],
    // Add iPad screenshots here later if you want a dedicated tablet section.
    ipadScreenshots: [] as Screenshot[],
  },
  heroHighlights: [
    "Flashcards that stay tidy",
    "OCR from notes and images",
    "Spaced repetition that adapts",
    "Private iCloud sync",
  ],
  featureHighlights: [
    {
      title: "Study flow, not scattered tools",
      description:
        "Capture notes, turn them into cards, review with spaced repetition, and keep the whole loop in one place.",
    },
    {
      title: "Designed for serious learners",
      description:
        "The interface stays calm, clear, and focused so your attention stays on the material instead of the UI.",
    },
    {
      title: "Built around privacy",
      description:
        "Your study data lives in your own iCloud/CloudKit private space and is used to power your experience, not ads.",
    },
  ],
  features: [
    {
      icon: "flashcards",
      title: "Smart Flashcards",
      description:
        "Build clean decks fast, keep concepts separated by subject, and review in a focused flow that feels native to iPhone.",
    },
    {
      icon: "scan",
      title: "OCR / Scan Notes",
      description:
        "Import text or images, capture study material from your notes, and turn raw content into something usable right away.",
    },
    {
      icon: "repeat",
      title: "Spaced Repetition",
      description:
        "Reviews are scheduled around memory strength so you keep seeing the right cards at the right time.",
    },
    {
      icon: "chart",
      title: "Progress & Insights",
      description:
        "Track readiness, deck health, XP, and study trends with a dashboard built to surface what needs attention.",
    },
    {
      icon: "cloud",
      title: "iCloud Sync",
      description:
        "Stay in sync with private CloudKit-backed storage so your decks, streaks, and progress move with you.",
    },
    {
      icon: "streak",
      title: "Daily Goals & Streaks",
      description:
        "Keep consistency visible with goals, streaks, and rewarding momentum systems that make study habits stick.",
    },
  ] satisfies Feature[],
  steps: [
    {
      step: "01",
      title: "Capture and structure your material",
      description:
        "Start from notes, screenshots, pasted text, or existing decks. Neurova helps shape scattered material into usable study input.",
      points: [
        "Import text or visual content",
        "Prepare flashcards from real class material",
        "Keep everything organized by subject and deck",
      ],
    },
    {
      step: "02",
      title: "Generate and refine flashcards",
      description:
        "Turn source material into clean cards, review the generated output, and place each set exactly where it belongs.",
      points: [
        "AI-assisted card generation flow",
        "Review before saving",
        "Organize into the right library structure",
      ],
    },
    {
      step: "03",
      title: "Review, adapt, and keep momentum",
      description:
        "Study with spaced repetition, rate recall quality, and let the app adapt while you build streaks and XP over time.",
      points: [
        "Focused review sessions",
        "Difficulty-based repetition",
        "Insights that show what is improving and what is weak",
      ],
    },
  ] satisfies Step[],
  homeFaqs: [
    {
      question: "Is Neurova only for flashcards?",
      answer:
        "Flashcards are at the center of the experience, but Neurova is built as a full study workflow. You can capture source material, generate cards, organize subjects and decks, and track progress in one place.",
    },
    {
      question: "Does Neurova use spaced repetition?",
      answer:
        "Yes. Review timing adapts to how well you remember each card so you can spend more time on weak material and less on what already feels easy.",
    },
    {
      question: "Can I create cards from notes or images?",
      answer:
        "Yes. Neurova is designed around OCR and text-based study inputs so you can turn screenshots, notes, or pasted material into structured cards more quickly.",
    },
    {
      question: "How does sync work?",
      answer:
        "Neurova is designed to use iCloud/CloudKit private storage for syncing study data like decks, cards, progress, streaks, and preferences across your devices.",
    },
    {
      question: "Does the app track me for ads?",
      answer:
        "No. Neurova is not built around third-party advertising or selling personal data. The focus is on powering the study experience itself.",
    },
  ] satisfies FaqItem[],
  supportFaqs: [
    {
      question: "What should I include in a support request?",
      answer:
        "The most helpful reports include the device you are using, the iOS version, what happened, what you expected to happen, and any screenshots that clarify the issue.",
    },
    {
      question: "Can I ask about study data or sync issues?",
      answer:
        "Yes. Support can help with deck visibility, sync questions, account access, OCR-related issues, and general troubleshooting.",
    },
    {
      question: "Do you answer feature requests?",
      answer:
        "Yes. Feedback about workflows, study friction, and missing features is welcome and helps shape future Neurova updates.",
    },
  ] satisfies FaqItem[],
  privacySections: [
    {
      title: "Overview",
      paragraphs: [
        "Neurova is designed to help you study with flashcards, spaced repetition, OCR-based capture, insights, goals, and private sync. This Privacy Policy explains what information may be processed when you use the Neurova app and this website, how it is used, and the choices you have.",
        "Our goal is to keep this policy readable and practical. We do not use Neurova as an advertising business, and we do not sell your personal data.",
      ],
    },
    {
      title: "Information We Collect",
      paragraphs: [
        "Depending on how you use Neurova, we may process information needed to operate the product and support you.",
      ],
      bullets: [
        "Account identifiers associated with Sign in with Apple.",
        "Study content such as subjects, decks, flashcards, card metadata, and preferences.",
        "Progress data such as review history, XP, streaks, readiness, and insight-related metrics.",
        "Images or text that you choose to import for OCR or flashcard generation.",
        "Messages and contact details you provide through support requests.",
        "Limited technical, crash, or diagnostic information made available through Apple or website infrastructure providers.",
      ],
    },
    {
      title: "How We Use Information",
      paragraphs: [
        "We use information primarily to deliver the study experience you expect from Neurova.",
      ],
      bullets: [
        "To create, organize, and review flashcards and decks.",
        "To power spaced repetition scheduling, streaks, goals, and progress insights.",
        "To process OCR on content you choose to upload or import.",
        "To sync your study data across devices through your iCloud/CloudKit private storage.",
        "To respond to support requests, debug problems, and improve reliability.",
      ],
    },
    {
      title: "Sign in with Apple",
      paragraphs: [
        "If you sign in with Apple, we receive the limited account information Apple shares for authentication and account continuity. We use that information only to identify your account and provide access to the app experience.",
      ],
    },
    {
      title: "iCloud and CloudKit Sync",
      paragraphs: [
        "Neurova is designed around iCloud and CloudKit private storage for syncing user data. Study data such as decks, cards, progress, streaks, and preferences may be stored in your private iCloud database so it can remain available across your devices.",
        "CloudKit private databases are tied to your Apple account. Apple provides the underlying infrastructure for that sync, and access is governed by Apple's systems and your iCloud account settings.",
      ],
    },
    {
      title: "OCR, Notes, and Study Inputs",
      paragraphs: [
        "When you choose to import images, screenshots, or text into Neurova, that content may be processed to extract text, structure information, and generate study material. We use this information only to provide the features you requested, such as OCR, flashcard creation, and study organization.",
      ],
    },
    {
      title: "Analytics and Diagnostics",
      paragraphs: [
        "We may use limited diagnostic information to understand crashes, bugs, and product reliability. If analytics or diagnostics are enabled, they are used to maintain and improve Neurova, not to build advertising profiles.",
      ],
    },
    {
      title: "Third-Party Services",
      paragraphs: [
        "Neurova may rely on service providers that help deliver authentication, private sync, hosting, email, or infrastructure. Examples can include Apple services such as Sign in with Apple and iCloud/CloudKit, plus website hosting or email delivery providers used to operate support.",
        "We do not use third-party advertising trackers to monetize your personal information, and we do not sell your personal data.",
      ],
    },
    {
      title: "Data Retention",
      paragraphs: [
        "Study data is generally retained for as long as it is needed to provide your Neurova experience, subject to your actions inside the app and your iCloud account behavior. Support requests may be retained for a reasonable period to resolve issues, keep records of communications, and improve support quality.",
      ],
    },
    {
      title: "Your Choices and Rights",
      paragraphs: [
        "You can manage or delete study content inside the app, adjust iCloud settings through your Apple account, and contact us if you have questions about support or privacy. Depending on where you live, local law may give you additional rights regarding access, correction, deletion, or restriction of personal information.",
      ],
    },
    {
      title: "Children's Privacy",
      paragraphs: [
        "Neurova is not intended to knowingly collect personal information from children under 13 without appropriate consent. If you believe a child has provided personal information inappropriately, please contact us so we can review the situation.",
      ],
    },
    {
      title: "Updates to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time as Neurova evolves, new features are added, or legal requirements change. When we make material changes, we will update the effective date on this page.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [
        "If you have privacy questions or need help with your data, contact us at the support email listed below.",
      ],
      bullets: ["support@neurova.app"],
    },
  ] satisfies PolicySection[],
  lastUpdated: "2026-03-13",
} as const;

export type SiteConfig = typeof siteConfig;
