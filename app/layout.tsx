import type { Metadata, Viewport } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D0E14",
};

export const metadata: Metadata = {
  title: "The Changelog - Tech News App",
  description:
    "The fastest way to read tech news. AI-summarized stories in under 10 seconds. No account. No tracking. Free on iOS and Android.",
  keywords: [
    "tech news app",
    "AI news",
    "developer news",
    "hacker news alternative",
    "privacy news app",
    "no account",
    "digest",
    "developer",
    "hacker",
    "feed",
    "rss",
    "signal",
    "briefing",
    "startup",
    "trending",
  ],
  openGraph: {
    title: "The Changelog - Tech News App",
    description:
      "The fastest way to read tech news. AI-summarized stories in under 10 seconds. No account. No tracking. Free forever.",
    type: "website",
    locale: "en_CA",
    url: "https://www.thechangelog.app",
    images: [{ url: "https://www.thechangelog.app/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Changelog - Tech News App",
    description:
      "The fastest way to read tech news. No account. No tracking. Free on iOS and Android.",
    images: ["https://www.thechangelog.app/og-image.png"],
  },
  alternates: {
    canonical: "https://www.thechangelog.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${dmSans.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "The Changelog",
              description:
                "The fastest way to read tech news. AI-summarized in under 10 seconds. No account.",
              operatingSystem: "iOS, Android",
              applicationCategory: "NewsApplication",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              url: "https://www.thechangelog.app",
            }),
          }}
        />
      </body>
    </html>
  );
}
