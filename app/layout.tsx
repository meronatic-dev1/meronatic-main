import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingThemeToggle } from "@/components/floating-theme-toggle";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
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
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={clsx(manrope.variable, outfit.variable, "antialiased selection:bg-brand-blue selection:text-white")}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <FloatingThemeToggle />
                </ThemeProvider>
            </body>
        </html>
    );
}

