import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { StructuredData } from "./components/StructuredData";
import { company } from "./lib/company";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} | Practical technology for small businesses`,
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
    title: `${company.name} | Practical technology for small businesses`,
    description: company.description,
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: company.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Practical technology for small businesses`,
    description: company.description,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071b2c",
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
  };

  return (
    <html lang="en">
      <body>
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
