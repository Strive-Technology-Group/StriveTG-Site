import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./design-tokens.css";
import "./globals.css";
import { Footer } from "./components/Footer";
import { MotionObserver } from "./components/MotionObserver";
import { Navigation } from "./components/Navigation";
import { StructuredData } from "./components/StructuredData";
import { company } from "./lib/company";

const inter = localFont({
  src: [
    { path: "./fonts/inter/Inter-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/inter/Inter-Medium.ttf", weight: "500", style: "normal" },
    {
      path: "./fonts/inter/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const instrumentSerif = localFont({
  src: [
    {
      path: "./fonts/instrument-serif/InstrumentSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/instrument-serif/InstrumentSerif-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} | Systems for growing small and midsize service businesses`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  authors: [{ name: company.name }],
  creator: company.name,
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: company.url,
    siteName: company.name,
    title: `${company.name} | Systems for growing small and midsize service businesses`,
    description: company.description,
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: company.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Systems for growing small and midsize service businesses`,
    description: company.description,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f4ed",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.url,
    email: company.email,
    description: company.positioning,
    ...(company.telephone ? { telephone: company.telephone.e164 } : {}),
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSerif.variable}`}>
        <MotionObserver />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navigation />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <StructuredData data={organizationSchema} />
      </body>
    </html>
  );
}
