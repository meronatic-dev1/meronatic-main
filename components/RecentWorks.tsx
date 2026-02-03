'use client';

import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

import { PROJECTS } from '@/lib/data';

import StickyProjectCard from '@/components/StickyProjectCard';

export default function RecentWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });
    const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    return (
        <section ref={containerRef} id="works" className="relative bg-[#FFFFFF] pb-32 px-2 md:px-4">
            <div className="w-full h-full">
                {/* Header Title - Sticky */}
                <motion.div
                    style={{ opacity: headerOpacity }}
                    className="sticky top-0 z-0 h-screen flex flex-col items-center pt-32 select-none pointer-events-none overflow-hidden box-content"
                >
                    <span className="text-[#5c5c5c] font-inter text-sm mb-4 block tracking-tight">(Selected Projects)</span>
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
                        Recent Works
                    </motion.h2>
                </motion.div>

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
                            <StickyProjectCard
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
