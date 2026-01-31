import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agero - Modern Portfolio & Creative Agency",
  description: "Effortless Design for Design Startups based in London, UK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={clsx(inter.variable, "antialiased overflow-x-hidden selection:bg-brand-orange selection:text-white")}>
        {children}
      </body>
    </html>
  );
}
