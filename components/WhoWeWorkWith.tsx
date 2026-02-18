"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // Changed from Lucide import
import { clsx } from "clsx";

// --- Data ---
const INDUSTRIES = [
    {
        icon: "/icons/ecommerce1.png", // Path to custom icon
        name: "E-Commerce",
        id: "ecommerce",
        description: "Scaling high-volume transaction engines with precision architecture.",
        index: "01"
    },
    {
        icon: "/icons/fintech.png",
        name: "FinTech",
        id: "fintech",
        description: "Trust, security, and seamless user flows for modern finance.",
        index: "02"
    },
    {
        icon: "/icons/real-estate.png",
        name: "Real Estate",
        id: "realestate",
        description: "Showcasing premium properties with immersive digital detail.",
        index: "03"
    },
    {
        icon: "/icons/professional.png",
        name: "Professional Services",
        id: "professional",
        description: "Building authoritative digital systems for consultants and firms.",
        index: "04"
    },
];

export default function WhoWeWorkWith() {
    const [activeId, setActiveId] = useState(INDUSTRIES[0].id);
    const [isBlurring, setIsBlurring] = useState(false);

    const handleIndustryChange = (id: string) => {
        if (id === activeId) return;
        setIsBlurring(true);
        setTimeout(() => {
            setActiveId(id);
            setIsBlurring(false);
        }, 300); // Wait for blur out before switching
    };

    const activeItem = INDUSTRIES.find(item => item.id === activeId) || INDUSTRIES[0];

    return (
        <section className="py-24 md:py-32 bg-background px-4 md:px-8 overflow-hidden">
            <div className="container mx-auto max-w-6xl">

                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl font-cal font-bold text-foreground mb-6"
                    >
                        Industries We Scale
                    </motion.h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        High-stakes environments where performance matches precision.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-18 items-center md:items-start justify-between">

                    {/* Left: Ghost Navigation (Vertical List) */}
                    <div className="w-full md:w-1/3 flex flex-col space-y-2">
                        {INDUSTRIES.map((industry) => {
                            const isActive = activeId === industry.id;
                            return (
                                <div
                                    key={industry.id}
                                    onClick={() => handleIndustryChange(industry.id)}
                                    className="relative group cursor-pointer py-4 pl-6"
                                >
                                    {/* Ghost Navigation: Left Accent Needle */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNeedle"
                                            className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}

                                    <div className="flex flex-col items-start transition-opacity duration-300">
                                        {/* Micro-Typography */}
                                        <span className={clsx(
                                            "text-[10px] tracking-widest font-mono uppercase mb-1 transition-colors",
                                            isActive ? "text-brand-blue" : "text-muted-foreground/50 group-hover:text-muted-foreground"
                                        )}>
                                            {industry.index} // 04
                                        </span>
                                        <h3 className={clsx(
                                            "font-cal text-xl md:text-2xl transition-colors duration-300",
                                            isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/80"
                                        )}>
                                            {industry.name}
                                        </h3>
                                    </div>

                                    {/* Progressive Line Draw (Connecting line for active item) */}
                                    {isActive && (
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 0.8, ease: "easeInOut" }}
                                            className="absolute bottom-0 left-0 h-[1px] bg-brand-blue/10 hidden md:block" // Subtle underline/connection
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Right: The Layered Detail View (Lens Blur Transition) */}
                    <div className="w-full md:w-1/2 relative min-h-[300px] flex flex-col items-center justify-center text-center md:pl-24 lg:pl-40">
                        <motion.div
                            animate={{ filter: isBlurring ? "blur(8px)" : "blur(0px)", opacity: isBlurring ? 0.5 : 1 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center"
                        >
                            {/* Inset Iconography with Weightless Float */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-background shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)] flex items-center justify-center mb-10 border border-white/10 dark:border-white/5"
                            >
                                <div className="absolute inset-x-8 bottom-0 h-1/3 bg-gradient-to-t from-brand-blue/10 to-transparent blur-xl" /> {/* Soft blue light fill */}
                                <div className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-sm">
                                    <Image
                                        src={activeItem.icon}
                                        alt={activeItem.name}
                                        fill
                                        className="object-contain dark:invert" // Ensures image scales properly and inverts in dark mode
                                        priority
                                    />
                                </div>
                            </motion.div>

                            <motion.h3
                                key={activeItem.id + "title"}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl font-cal font-bold mb-4"
                            >
                                {activeItem.name}
                            </motion.h3>

                            <motion.p
                                key={activeItem.id + "desc"}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-muted-foreground leading-relaxed max-w-md"
                            >
                                {activeItem.description}
                            </motion.p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
