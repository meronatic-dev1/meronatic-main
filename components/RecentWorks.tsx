'use client';

import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const PROJECTS = [
    {
        id: "01",
        title: "Archin",
        description: "A comprehensive branding and web design project for a leading architectural firm.",
        category: "Branding",
        year: "2024",
        role: "Visual Identity",
        image: "https://framerusercontent.com/images/olR1jd1vAg59BKYSorw26ZNxY.png",
    },
    {
        id: "02",
        title: "VNTNR",
        description: "Mobile application design focused on intuitive user experience and modern aesthetics.",
        category: "App Design",
        year: "2023",
        role: "UI/UX Design",
        image: "https://framerusercontent.com/images/QhPkJGJBXS8kPS7IhPj7ZBGZpII.png",
    },
    {
        id: "03",
        title: "Aeorim",
        description: "Art direction and digital presence for a luxury fashion brand.",
        category: "Art Direction",
        year: "2023",
        role: "Creative Direction",
        image: "https://framerusercontent.com/images/yOPV9nZRSJXmNPqyeWfZSThWAc.png",
    },
];

export default function RecentWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={containerRef} id="works" className="relative bg-[#FFFFFF] pb-32">
            <div className="container mx-auto px-4">
                {/* Header Title - Sticky */}
                <div className="sticky top-0 z-0 h-screen flex flex-col items-center pt-32 select-none pointer-events-none overflow-hidden box-content">
                    <span className="text-[#5c5c5c] font-inter text-sm mb-4 block tracking-tight">(Selected Projects)</span>
                    <motion.h2
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-[18vw] lg:text-[220px] font-bold font-cal text-[#D4D4D4] whitespace-nowrap leading-none tracking-tight"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
                        }}
                    >
                        Recent Works
                    </motion.h2>
                </div>

                {/* Cards Container - Pushed down to allow title to be seen first */}
                <div className="relative z-50 -mt-[80vh]">
                    {PROJECTS.map((project, i) => {
                        // Segmented scale logic:
                        // Each card animates during its own "slice" of total scroll height.
                        // For 3 cards: Card 0 animates 0->0.33, Card 1 0.33->0.66, etc.
                        // This forces the "push" execution to match the stacking event.
                        const step = 1 / PROJECTS.length;
                        const rangeStart = i * step;
                        const rangeEnd = rangeStart + step;

                        return (
                            <Card
                                key={i}
                                project={project}
                                index={i}
                                total={PROJECTS.length}
                                progress={scrollYProgress}
                                range={[rangeStart, rangeEnd]}
                                targetScale={0.8} // Deep push into "small part"
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

interface CardProps {
    project: typeof PROJECTS[0];
    index: number;
    total: number;
    progress: any; // Using any to avoid MotionValue type complexity with different TS versions
    range: [number, number];
    targetScale: number;
}

function Card({ project, index, total, progress, range, targetScale }: CardProps) {
    const topOffset = 380 + (index * 20);

    // Animation Logic
    const scale = useTransform(progress, range, [1, targetScale]);
    const opacity = useTransform(progress, range, [1, 0.4]); // Fade out
    const blur = useTransform(progress, range, [0, 10]); // Deep blur

    // Create motion value for string filter here (Valid Hook Usage)
    const blurFilter = useTransform(blur, (v) => `blur(${v}px)`);

    // Confirm JS with logging (Debugging/Verification)
    useMotionValueEvent(scale, "change", (latest) => {
        // Log changes to verify scaling is active
        // Only log significantly changed values to avoid spam
        if (latest < 0.99 && typeof latest === 'number') {
            console.log(`Card ${index} Scale Push:`, latest.toFixed(4));
        }
    });

    // If it's the last card, don't scale or fade it out (it stays on top)
    const isLast = index === total - 1;

    return (
        <div
            className="sticky"
            style={{
                top: `${topOffset}px`,
                zIndex: index + 1,
                marginBottom: `${(total - index - 1) * 20}px`
            }}
        >
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                style={{
                    scale: isLast ? 1 : scale,
                    opacity: isLast ? 1 : opacity,
                    filter: isLast ? "blur(0px)" : blurFilter
                }}
                className="bg-black rounded-[32px] overflow-hidden max-w-6xl mx-auto border border-white/10 shadow-2xl origin-top"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12">
                    {/* Left Column: Index & Description */}
                    <div className="lg:col-span-3 flex flex-col justify-between h-full min-h-[400px] order-2 lg:order-1">
                        <div>
                            <span className="text-sm font-medium text-gray-500 block mb-6">
                                {project.id} / 0{total}
                            </span>
                            <h3 className="text-[48px] md:text-[64px] font-cal text-white mb-6 leading-[1.1] tracking-tight">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                                {project.description}
                            </p>
                        </div>
                        <div className="mt-8 lg:mt-auto">
                            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors group/link">
                                View Case Study
                                <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Center Column: Image */}
                    <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
                        <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[24px] overflow-hidden bg-[#1a1a1a]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </div>

                    {/* Right Column: Metadata */}
                    <div className="lg:col-span-3 flex flex-col justify-center gap-8 pl-4 lg:pl-12 order-3">
                        <div>
                            <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-medium">Category</h4>
                            <p className="text-white font-medium text-lg">{project.category}</p>
                        </div>
                        <div>
                            <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-medium">Year</h4>
                            <p className="text-white font-medium text-lg">{project.year}</p>
                        </div>
                        <div>
                            <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-medium">Role</h4>
                            <p className="text-white font-medium text-lg">{project.role}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
