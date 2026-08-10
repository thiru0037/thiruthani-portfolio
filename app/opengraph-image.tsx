import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site-config";
import { profile } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#f5f5f5",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "monospace",
            fontSize: 28,
            color: "#3b93ff",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          Senior Product Manager
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#a1a1a6", maxWidth: 900 }}>
            {siteConfig.description}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
