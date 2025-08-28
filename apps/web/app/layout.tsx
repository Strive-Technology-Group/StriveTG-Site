import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Strive Technology Group | Scale Smarter. Compete Bigger.",
  description: "Professional tech solutions for small and mid-sized businesses. Websites, SEO, analytics, and ongoing support that make your business unstoppable.",
  keywords: "web development, SEO, business analytics, tech support, small business technology",
  authors: [{ name: "Strive Technology Group" }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: "Strive Technology Group | Scale Smarter. Compete Bigger.",
    description: "Professional tech solutions for small and mid-sized businesses. Websites, SEO, analytics, and ongoing support that make your business unstoppable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
