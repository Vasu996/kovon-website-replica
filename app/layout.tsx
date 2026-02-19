import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import AppThemeProvider from "@/app/theme-provider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kovon-website-replica.vercel.app"),
  title: {
    default: "Kovon | Global Talent Mobility",
    template: "%s | Kovon"
  },
  description:
    "Kovon helps teams source, hire, and onboard international talent with speed, visibility, and compliance.",
  keywords: ["global hiring", "talent mobility", "international recruitment", "remote team scaling"],
  openGraph: {
    title: "Kovon | Global Talent Mobility",
    description:
      "Scale international hiring with a faster, compliance-ready operating model for modern distributed teams.",
    url: "https://kovon-website-replica.vercel.app",
    siteName: "Kovon",
    images: [
      {
        url: "/images/homepage.png",
        width: 1200,
        height: 630,
        alt: "Kovon landing page"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kovon | Global Talent Mobility",
    description:
      "Scale international hiring with a faster, compliance-ready operating model for modern distributed teams.",
    images: ["/images/homepage.png"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}

