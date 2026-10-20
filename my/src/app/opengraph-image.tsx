import { ImageResponse } from "next/og";
import siteConfig from "@/config/site.config";
import { getInitials } from "@/lib/utils";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const { colors } = siteConfig.brand;
  const { expert, seo } = siteConfig;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: colors.paper,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            borderRadius: 20,
            background: colors.obsidian,
            color: colors.snow,
            fontSize: 36,
            fontWeight: 700,
          }}
        >
          {getInitials(expert.name)}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 56, fontWeight: 600, color: colors.obsidian, lineHeight: 1.15 }}>
            {expert.name}
          </div>
          <div style={{ fontSize: 30, color: colors.iron, marginTop: 12, fontWeight: 500 }}>
            {expert.role}
          </div>
          <div style={{ fontSize: 24, color: colors.steel, marginTop: 20, maxWidth: 900 }}>
            {seo.description}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
