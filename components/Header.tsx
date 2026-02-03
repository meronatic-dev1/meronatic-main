'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils'; // We need to create this util
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
    const { scrollY } = useScroll();
    const [isHidden, setIsHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 10) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    });

    const navLinks = [
        { name: 'Works', href: 'works' },
        { name: 'Services', href: 'services' },
        { name: 'About', href: 'about' },
        { name: 'Blog', href: 'blog' },
    ];

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={isHidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-[100] bg-transparent py-6 border-b border-white/5 transition-colors duration-300"
        >
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
                className="hidden md:flex absolute top-2 left-1/2 -translate-x-1/2 z-[60] bg-[#151515] border border-white/10 px-4 py-1.5 rounded-full items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[12px] text-white/90 font-medium font-inter">Available for New Projects</span>
            </motion.div>

            <div className="container mx-auto px-6 flex items-center h-[80px]">
                {/* Left Side: Logo */}
                <div className="flex-1 flex items-center justify-start pl-0">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/meronatic-logo.png"
                            alt="Meronatic Logo"
                            width={140}
                            height={40}
                            priority
                            className="object-contain w-[100px] md:w-[140px] h-auto"
                        />
                    </Link>
                </div>

                {/* Center: Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="group relative text-[14px] font-inter font-normal tracking-[-0.14px] text-[rgb(92,92,92)] hover:text-[#2ba0fe] transition-colors"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#2ba0fe] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Link>
                    ))}
                </nav>

                {/* Right Side: Button & Mobile Toggle */}
                <div className="flex-1 flex items-center justify-end gap-4">
                    <Link
                        href="#contact"
                        className="hidden md:flex bg-[#2ba0fe] text-white text-[14px] font-medium px-6 py-3 rounded-full hover:scale-105 transition-transform border border-[#2ba0fe] hover:bg-white hover:text-[#2ba0fe]"
                    >
                        Contact
                    </Link>

                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
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
                            className="bg-brand-blue text-white text-center font-medium px-5 py-3 rounded-full mt-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Let's Connect
                        </Link>
                    </nav>
                </div>
            )}
        </motion.header>
    );
}
