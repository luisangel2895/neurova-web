import "../globals.css";

import { buildRootMetadata, RootShell, viewport } from "@/lib/root-layout";

export const metadata = buildRootMetadata("es");

export { viewport };

export default function SpanishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootShell locale="es">{children}</RootShell>;
}
