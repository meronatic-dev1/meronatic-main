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
    // Mathematical calculation for full visibility:
    // Viewport Height (VH) = 100vh
    // Card Height = 95vh (from style below)
    // Available space for offset = 100vh - 95vh = 5vh
    // We must ensure the last card's top offset <= 5vh to not be cut off.
    // Let's use a very tight stack: Start at 2vh (approx 20px), step by 15px.
    // Max offset for 3rd card (index 2) = 20 + 30 = 50px.

    const topOffset = 20 + (index * 15);

    // Animation Logic
    const scale = useTransform(progress, range, [1, targetScale]);

    // JS Verification of Scale values
    useMotionValueEvent(scale, "change", (latest) => {
        if (latest < 0.99 && typeof latest === 'number') {
            // Optional logs
        }
    });

    const isLast = index === total - 1;

    return (
        <div
            className="sticky top-0"
            style={{
                top: `${topOffset}px`,
                zIndex: index + 1,
                // Margin bottom maintains the scroll space
                marginBottom: `${(total - index - 1) * 20}px`
            }}
        >
            <motion.div
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                style={{
                    scale: isLast ? 1 : scale,
                    // Remove opacity fade and blur as requested
                    opacity: 1,
                    filter: "blur(0px)",
                    width: '100%',
                }}
                className="bg-black rounded-[24px] md:rounded-[48px] overflow-hidden w-full h-[65vh] md:h-[90vh] border border-white/10 shadow-2xl origin-top"
            >
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-8 items-center p-5 lg:p-12 h-full">

                    {/* Center Column: Image - Order 1 on Mobile (Top) */}
                    <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center items-center w-full h-[35vh] lg:h-full">
                        <div className="relative w-full h-full aspect-auto lg:aspect-[16/10] rounded-[24px] overflow-hidden bg-[#1a1a1a] shadow-2xl">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </div>

                    {/* Left Column: Index & Description - Order 2 on Mobile */}
                    <div className="lg:col-span-3 flex flex-col justify-between w-full lg:h-full py-2 lg:py-8 order-2 lg:order-1">
                        <div>
                            <span className="text-xs lg:text-sm font-medium text-gray-500 block mb-2 lg:mb-6">
                                {project.id} / 0{total}
                            </span>
                            <h3 className="text-3xl lg:text-[64px] font-cal text-white mb-2 lg:mb-6 leading-[1.1] tracking-tight">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-xs lg:text-sm leading-relaxed max-w-full lg:max-w-[280px] line-clamp-3 lg:line-clamp-none">
                                {project.description}
                            </p>
                        </div>
                        <div className="mt-4 lg:mt-auto hidden lg:block">
                            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors group/link">
                                View Case Study
                                <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Metadata - Order 3 on Mobile (Horizontal row) */}
                    <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between lg:justify-center w-full gap-2 lg:gap-12 pl-0 lg:pl-12 order-3 lg:h-full mt-auto lg:mt-0">
                        <div>
                            <h4 className="text-gray-500 text-[10px] lg:text-xs uppercase tracking-widest mb-1 lg:mb-2 font-medium">Category</h4>
                            <p className="text-white font-medium text-sm lg:text-lg">{project.category}</p>
                        </div>
                        <div>
                            <h4 className="text-gray-500 text-[10px] lg:text-xs uppercase tracking-widest mb-1 lg:mb-2 font-medium">Year</h4>
                            <p className="text-white font-medium text-sm lg:text-lg">{project.year}</p>
                        </div>
                        <div>
                            <h4 className="text-gray-500 text-[10px] lg:text-xs uppercase tracking-widest mb-1 lg:mb-2 font-medium">Role</h4>
                            <p className="text-white font-medium text-sm lg:text-lg">{project.role}</p>
                        </div>
                        {/* Mobile View Case Study Button */}
                        <div className="lg:hidden flex items-center">
                            <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                                <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
