import { ImageResponse } from "next/og";
import siteConfig from "@/config/site.config";
import { getInitials } from "@/lib/utils";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const { colors } = siteConfig.brand;
  const initials = getInitials(siteConfig.expert.name);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          borderRadius: 14,
          color: "white",
          fontSize: 30,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        {initials}
      </div>
    ),
    { ...size }
  );
}
