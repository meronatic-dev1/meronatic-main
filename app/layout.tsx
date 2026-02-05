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
    title: "Meronatic Solutions | Performance-Based Business Transformation",
    description: "Meronatic bridges the gap between manual operations and high-performance digital revenue engines. We build systems that scale.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={clsx(inter.variable, "antialiased overflow-x-hidden selection:bg-brand-blue selection:text-white")}>
                {children}
            </body>
        </html>
    );
}
