'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AVATARS = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
];

export default function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const } },
    };

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background Gradients/Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[100px]" />
            </div>

            <motion.div
                className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {/* Top Badge/Avatars */}
                <motion.div variants={item} className="flex items-center gap-4 mb-8 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <div className="flex -space-x-3">
                        {AVATARS.map((src, i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={src} alt="User" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    <div className="text-sm font-medium text-gray-600 pr-2">
                        Trusted by 100+ customers
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-cal font-bold tracking-tight text-foreground leading-[1.1] max-w-5xl mb-10">
                    Effortless Design for <br className="hidden md:block" />
                    <span className="text-brand-orange inline-block">Design Startups</span> based in London, UK
                </motion.h1>

                {/* Subtext description if needed, or straight to CTA */}
                <motion.p variants={item} className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
                    We craft high-converting websites and unique brand identities that help startups stand out in a crowded market.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4">
                    <a href="#pricing" className="bg-card-dark text-white text-lg font-medium px-8 py-4 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 group">
                        View Plans
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#work" className="text-foreground font-medium px-8 py-4 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors">
                        Our Work
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
