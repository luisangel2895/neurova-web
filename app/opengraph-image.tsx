import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} preview`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #f7fbff 0%, #eef5ff 42%, #f6fbff 100%)",
          color: "#122033",
          overflow: "hidden",
          fontFamily:
            '"Avenir Next", "SF Pro Display", "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -80,
            top: -100,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "rgba(79, 128, 255, 0.18)",
            filter: "blur(48px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -40,
            bottom: -120,
            width: 360,
            height: 360,
            borderRadius: 9999,
            background: "rgba(97, 230, 199, 0.22)",
            filter: "blur(48px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 76,
                height: 76,
                borderRadius: 24,
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(135deg, rgba(63, 102, 246, 0.18), rgba(102, 231, 204, 0.25))",
                border: "1px solid rgba(66, 100, 235, 0.12)",
                boxShadow: "0 24px 60px rgba(53, 83, 168, 0.12)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 44,
                  height: 44,
                  borderRadius: 9999,
                  border: "6px solid #2f4fd4",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: 19,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#55708f",
                }}
              >
                Intelligent study flow
              </span>
              <span
                style={{
                  fontSize: 44,
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                }}
              >
                {siteConfig.name}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 840 }}>
            <div
              style={{
                fontSize: 72,
                lineHeight: 1.02,
                letterSpacing: "-0.06em",
                fontWeight: 700,
              }}
            >
              Flashcards, OCR, spaced repetition, and private iCloud sync.
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.5,
                color: "#50627a",
              }}
            >
              Premium light-mode design for a serious iPhone study product.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
