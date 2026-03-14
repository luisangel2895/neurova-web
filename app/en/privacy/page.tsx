import { PrivacyPageView } from "@/components/marketing/page-views";
import { buildMetadata } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-content";

const copy = getSiteCopy("en");

export const metadata = buildMetadata({
  locale: "en",
  title: copy.seo.privacy.title,
  description: copy.seo.privacy.description,
  path: "/privacy",
  keywords: copy.seo.keywords,
});

export default function EnglishPrivacyPage() {
  return <PrivacyPageView locale="en" />;
}
