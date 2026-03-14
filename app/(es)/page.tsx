import { HomePageView } from "@/components/marketing/page-views";
import { buildMetadata } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-content";

const copy = getSiteCopy("es");
export const metadata = buildMetadata({
  locale: "es",
  title: copy.seo.home.title,
  description: copy.seo.home.description,
  path: "/",
  keywords: copy.seo.keywords,
});

export default function Home() {
  return <HomePageView locale="es" />;
}
