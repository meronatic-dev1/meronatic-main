'use client';

import React, { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import { useScroll, motion } from 'framer-motion';
import StickyAboutCard from '@/components/StickyAboutCard';

const ABOUT_SECTIONS = [
    {
        subtitle: "Vision",
        title: "Benchmarks of Authority",
        description: "To become the most trusted performance-based digital transformation partner for businesses that aim to scale with clarity, control, and measurable outcomes."
    },
    {
        subtitle: "Mission",
        title: "From Chaos to Control",
        description: "To help ambitious businesses transition from manual, fragmented operations into scalable, data-driven enterprises by building systems that produce sustainable revenue growth."
    },
    {
        subtitle: "Philosophy",
        title: "Our Core Beliefs",
        description: "We challenge the traditional agency model with a focus on systems over tactics.",
        details: [
            { title: "Growth must be measurable", desc: "If we can't track it, we don't do it. Every initiative must have a clear KPI attached." },
            { title: "Systems outperform tactics", desc: "A great ad campaign works once. A great system works forever. We build for longevity." },
            { title: "Scalability beats short-term wins", desc: "We optimize for sustainable growth over quick hacks that damage brand equity." },
            { title: "Partnerships must be aligned", desc: "We win when you win. Our incentives are structured to reward performance." }
        ]
    },
    {
        subtitle: "Brand Promise",
        title: "We Architect Systems",
        description: "Most agencies promise growth but deliver surface-level metrics. Meronatic focuses on what matters: scalable revenue, operational efficiency, and long-term market leadership."
    }
];

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Sticky Header Section */}
            <div className="sticky top-0 z-0 h-screen flex flex-col items-center pt-32 select-none pointer-events-none overflow-hidden box-content">
                <span className="text-[#5c5c5c] font-inter text-sm mb-4 block tracking-tight">(Who We Are)</span>
                <motion.h2
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[13vw] lg:text-[220px] font-bold font-cal text-[#D4D4D4] whitespace-nowrap leading-none tracking-tight"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
                    }}
                >
                    About Us
                </motion.h2>
            </div>

            <section ref={containerRef} id="about-list" className="relative bg-background pb-32">
                <div className="container mx-auto px-4">
                    <div className="relative z-50 -mt-[75vh]">
                        {ABOUT_SECTIONS.map((section, i) => {
                            const step = 1 / ABOUT_SECTIONS.length;
                            const rangeStart = i * step;
                            const rangeEnd = rangeStart + step;

                            return (
                                <StickyAboutCard
                                    key={i}
                                    data={section}
                                    index={i}
                                    total={ABOUT_SECTIONS.length}
                                    progress={scrollYProgress}
                                    range={[rangeStart, rangeEnd]}
                                    targetScale={0.85}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>

            <LetsConnect />
            <Footer />
        </main>
    );
}
