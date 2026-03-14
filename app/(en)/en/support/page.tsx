import { SupportPageView } from "@/components/marketing/page-views";
import { buildMetadata } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-content";

const copy = getSiteCopy("en");

export const metadata = buildMetadata({
  locale: "en",
  title: copy.seo.support.title,
  description: copy.seo.support.description,
  path: "/support",
  keywords: copy.seo.keywords,
});

export default function EnglishSupportPage() {
  return <SupportPageView locale="en" />;
}
