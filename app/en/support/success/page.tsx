import { SupportSuccessPageView } from "@/components/marketing/page-views";
import { buildMetadata } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-content";

const copy = getSiteCopy("en");

export const metadata = buildMetadata({
  locale: "en",
  title: copy.seo.supportSuccess.title,
  description: copy.seo.supportSuccess.description,
  path: "/support/success",
  keywords: copy.seo.keywords,
  noIndex: true,
});

export default function EnglishSupportSuccessPage() {
  return <SupportSuccessPageView locale="en" />;
}
