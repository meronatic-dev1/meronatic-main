'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';

const LOGOS = [
    "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684705320986/e878363717bc42168516d0130932da1e_large.png&width=256&type=webp&quality=80", // Placeholder for simple black logos
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png"
];

// Placeholder SVG logos for a cleaner monochrome look (similar to reference)
const SIMPLE_LOGOS = [
    (key: number) => <svg key={key} width="100" height="30" viewBox="0 0 100 30" fill="currentColor" className="opacity-50 hover:opacity-100 transition-opacity"><rect width="20" height="20" rx="5" /><circle cx="40" cy="10" r="10" /><rect x="60" width="20" height="20" rx="5" /></svg>,
    (key: number) => <svg key={key} width="100" height="30" viewBox="0 0 100 30" fill="currentColor" className="opacity-50 hover:opacity-100 transition-opacity"><circle cx="10" cy="10" r="10" /><rect x="30" width="20" height="20" rx="5" /><circle cx="70" cy="10" r="10" /></svg>,
    (key: number) => <svg key={key} width="100" height="30" viewBox="0 0 100 30" fill="currentColor" className="opacity-50 hover:opacity-100 transition-opacity"><path d="M10,0 L20,20 L0,20 Z" /><rect x="30" width="20" height="20" rx="5" /><path d="M70,0 L80,20 L60,20 Z" /></svg>,
    (key: number) => <svg key={key} width="100" height="30" viewBox="0 100 30" fill="currentColor" className="opacity-50 hover:opacity-100 transition-opacity"><rect width="20" height="20" rx="5" /><rect x="30" width="20" height="20" rx="5" /><rect x="60" width="20" height="20" rx="5" /></svg>,
    (key: number) => <svg key={key} width="100" height="30" viewBox="0 0 100 30" fill="currentColor" className="opacity-50 hover:opacity-100 transition-opacity"><circle cx="10" cy="10" r="10" /><path d="M40,0 L50,20 L30,20 Z" /><circle cx="70" cy="10" r="10" /></svg>,
];


export default function AgencyTextReveal() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "start 0.25"] // Start fading in when top of text hits 90% viewport, finish when at 25% (near top)
    });

    const text = "We help fast moving digital startups launch sharper brands and websites — with clarity, speed, and no drama.";
    const words = text.split(" ");

    return (
        <section className="bg-white py-20 overflow-hidden relative">



            {/* 2. Slanted Tickers (Background) */}
            <div className="relative w-full h-[300px] my-12 flex items-center justify-center overflow-hidden z-0 opacity-100">
                {/* Ticker 1 - Orange/Red Theme */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] bg-[#2ba0fe] text-white -rotate-5 py-4 shadow-lg z-0">
                    <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#2ba0fe] to-transparent z-10" />
                    <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#2ba0fe] to-transparent z-10" />

                    <div className="flex animate-marquee whitespace-nowrap gap-8">
                        {Array(10).fill("").map((_, i) => (
                            <div key={i} className="flex items-center gap-4 text-xl md:text-2xl font-bold uppercase tracking-wider">
                                <span>Brand Design</span> <Star size={16} fill="white" />
                                <span>Logo Design</span> <Star size={16} fill="white" />
                                <span>Website Design</span> <Star size={16} fill="white" />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Ticker 2 - Black Theme */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] bg-[#151515] text-white rotate-5 py-4 shadow-lg z-10">
                    <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#151515] to-transparent z-10" />
                    <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#151515] to-transparent z-10" />

                    <div className="flex animate-marquee-reverse whitespace-nowrap gap-8">
                        {Array(10).fill("").map((_, i) => (
                            <div key={i} className="flex items-center gap-4 text-xl md:text-2xl font-bold uppercase tracking-wider">
                                <span>Senior Designer</span> <Star size={16} fill="white" />
                                <span>10 Years Experience</span> <Star size={16} fill="white" />
                                <span>Over 100 Customers</span> <Star size={16} fill="white" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* 3. Scroll Text Reveal */}
            <div className="container mx-auto px-4 relative z-10 mt-32 md:mt-48 text-center max-w-5xl" ref={containerRef}>
                <h2 className="text-[40px] md:text-[46px] font-cal leading-[1.1] font-bold text-[#131313] flex flex-wrap justify-center gap-x-4 gap-y-2">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]); // Map scroll to opacity

                        return (
                            <motion.span key={i} style={{ opacity }}>{word}</motion.span>
                        );
                    })}
                </h2>

                {/* Categories */}
                <div className="flex justify-center gap-3 mt-12">
                    {["Branding", "Logo", "Website"].map((cat) => (
                        <span key={cat} className="px-6 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 uppercase tracking-widest bg-white hover:border-black transition-colors cursor-default">
                            {cat}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Add strict Tailwind animation if not present (although marquee usually exists)
// tailwind.config.ts might need:
// animation: { marquee: 'marquee 25s linear infinite', 'marquee-reverse': 'marquee-reverse 25s linear infinite' }
// keyframes: { marquee: { to: { transform: 'translateX(-50%)' } }, 'marquee-reverse': { from: { transform: 'translateX(-50%)' }, to: { transform: 'translateX(0)' } } }
