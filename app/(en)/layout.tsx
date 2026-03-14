import "../globals.css";

import { buildRootMetadata, RootShell, viewport } from "@/lib/root-layout";

export const metadata = buildRootMetadata("en");

export { viewport };

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootShell locale="en">{children}</RootShell>;
}
