'use client';

import React from 'react';
import { motion, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/lib/data';

interface CardProps {
    project: typeof PROJECTS[0];
    index: number;
    total: number;
    progress: any; // Using any to avoid MotionValue type complexity with different TS versions
    range: [number, number];
    targetScale: number;
}

export default function StickyProjectCard({ project, index, total, progress, range, targetScale }: CardProps) {
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-12">
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
