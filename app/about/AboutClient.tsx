'use client';

import React, { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import { useScroll } from 'framer-motion';
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
        <main className="min-h-screen bg-white text-[#1a1a1a]">
            <Header />

            {/* Sticky Header Section */}
            <section className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center pt-20 px-4 md:px-8 text-center bg-white">
                <span className="text-[#2ba0fe] font-medium tracking-widest uppercase text-sm mb-4 block">
                    About Meronatic
                </span>
                <h1 className="text-5xl md:text-[80px] font-cal font-bold text-[#1a1a1a] mb-8 leading-none">
                    We build the systems<br />that build your business.
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Meronatic Solutions bridges the gap between manual operations and high-performance digital revenue engines.
                </p>
            </section>

            {/* Scrollable Sticky Cards Section */}
            <section ref={containerRef} id="about-list" className="relative bg-[#FFFFFF] pb-32">
                <div className="container mx-auto px-4">
                    <div className="relative z-10 -mt-[10vh]">
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
