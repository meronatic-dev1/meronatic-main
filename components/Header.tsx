'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils'; // We need to create this util
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Works', href: '#works' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '#blog' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5",
                isScrolled ? "bg-[rgba(240,240,240,0.8)] backdrop-blur-[10px] py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between h-[80px]">
                <Link href="/" className="text-[24px] font-cal font-semibold tracking-[-0.5px] text-foreground flex items-center gap-1">
                    Agero<span className="text-[#FF5200]">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[14px] font-inter font-normal tracking-[-0.14px] text-[rgb(92,92,92)] hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="#contact"
                        className="bg-[#0C0C0C] bg-opacity-[0.82] text-white text-[12px] font-medium px-5 py-3 rounded-full hover:scale-105 transition-transform"
                    >
                        Let's Connect
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/10 p-4 shadow-xl">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium py-2 border-b border-white/5"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="bg-brand-orange text-white text-center font-medium px-5 py-3 rounded-full mt-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Let's Connect
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
