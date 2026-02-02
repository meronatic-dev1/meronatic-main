'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TextReveal } from './ui/TextReveal';

const AVATARS = [
    "https://framerusercontent.com/images/LdiJIgo7vhBde0WiWHd48uSzxU.png",
    "https://framerusercontent.com/images/I9yoNS4RgoWEeRpJDtgEIoLAd4Y.png",
    "https://framerusercontent.com/images/G5E86VA7DStEga3pPtCu3nwW1qE.png",
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

    const titleContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
            },
        },
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-start pt-[160px] pb-20 overflow-hidden bg-white">
            {/* Background Gradients/Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-white" />
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-white" />
            </div>

            <motion.div
                className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {/* Top Badge/Avatars */}
                <motion.div variants={item} className="flex items-center gap-3 mb-10 bg-white/80 backdrop-blur-sm border border-black/5 pl-2 pr-5 py-2 rounded-full shadow-sm">
                    <div className="flex -space-x-2">
                        {AVATARS.map((src, i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={src} alt="User" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    <div className="text-[13px] font-medium text-gray-800">
                        Trusted by founders
                    </div>
                </motion.div>

                {/* Main Heading */}
                <h1 className="text-[48px] md:text-[72px] font-cal font-bold tracking-normal text-[#131313] leading-[1.1] max-w-5xl mb-12 w-full text-center mx-auto">
                    <TextReveal text="Effortless Design for" className="inline" /> <br className="hidden md:block" />
                    <TextReveal text="Design Startups" className="text-[#2ba0fe] inline" delay={0.2} />
                    <TextReveal text=" based in Dubai, UAE" className="inline" delay={0.4} />
                </h1>

                {/* Subtext description if needed, or straight to CTA */}
                <motion.p variants={item} className="text-[18px] text-[rgb(92,92,92)] max-w-xl mb-12 leading-relaxed">
                    We craft high-converting websites and unique brand identities that help startups stand out in a crowded market.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4">
                    <a href="#pricing" className="bg-[#2ba0fe] bg-opacity-[0.82] text-white text-[16px] font-medium px-8 py-4 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 group">
                        View Plans
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );

}
