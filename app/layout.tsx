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
  title: "The Changelog — Tech News. No Noise.",
  description:
    "Stay ahead of tech in under 30 seconds per story. No account. No tracking. No ads profiling. Available on iOS and Android.",
  keywords: [
    "tech news app",
    "AI summaries",
    "no tracking",
    "iOS",
    "Android",
    "news reader",
    "The Changelog",
  ],
  openGraph: {
    title: "The Changelog — Tech News. No Noise.",
    description:
      "Stay ahead of tech in under 30 seconds per story. No account. No tracking.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Changelog — Tech News. No Noise.",
    description: "30-second tech news. No account. No tracking.",
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
      </body>
    </html>
  );
}
