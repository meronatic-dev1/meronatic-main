import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, Inter_Tight, IBM_Plex_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-familjen",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060B14",
};

export const metadata: Metadata = {
  title: "Meronatic Solutions Group — Market Entry, People & Operations across the GCC and EU",
  description:
    "Meronatic Solutions Group (MSG) helps companies establish and run credible local operations in Saudi Arabia, the UAE and the European Union — structuring, recruitment, compliance coordination, finance support, technology, operations and procurement under one accountable team.",
  openGraph: {
    title: "Meronatic Solutions Group — One partner for market entry, people and operations",
    description:
      "Cross-border market entry, people and operations across the GCC and Europe, coordinated by one accountable team.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${familjenGrotesk.variable} ${interTight.variable} ${ibmPlexMono.variable} ${ibmPlexSansArabic.variable}`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
