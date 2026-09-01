import { ImageResponse } from "next/og";

export const alt =
  "Strive Technology Group — practical technology for small businesses";
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
          color: "white",
          background: "#121613",
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
              background: "#2bee4b",
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
          Practical technology for small businesses.
        </div>
        <div
          style={{
            display: "flex",
            gap: "18px",
            color: "#b9c7d0",
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
