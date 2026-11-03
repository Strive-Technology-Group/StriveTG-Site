import { ImageResponse } from "next/og";

export const alt =
  "Strive Technology Group — web, reporting, and automation for growing small and midsize service businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#f7f9f8",
          background: "#152b3a",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          <span
            style={{
              width: 20,
              height: 20,
              borderRadius: 999,
              background: "#86cfca",
            }}
          />
          Strive Technology Group
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 980,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: "-3px",
          }}
        >
          Practical systems for growing small and midsize service businesses.
        </div>
        <div
          style={{
            display: "flex",
            gap: "18px",
            color: "#cedbde",
            fontSize: 24,
          }}
        >
          <span>Websites</span>
          <span>·</span>
          <span>Visibility</span>
          <span>·</span>
          <span>Analytics</span>
          <span>·</span>
          <span>Automation</span>
        </div>
      </div>
    ),
    size,
  );
}
