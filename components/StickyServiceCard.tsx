'use client';

import React from 'react';
import { motion, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceData {
    title: string;
    problem: string;
    problemDesc: string;
    approach: string;
    approachDesc: string;
    outcome: string;
    tags: string[];
    image?: string;
    indexNumber?: string;
}

interface CardProps {
    service: ServiceData;
    index: number;
    total: number;
    progress: any;
    range: [number, number];
    targetScale: number;
}

export default function StickyServiceCard({ service, index, total, progress, range, targetScale }: CardProps) {
    const topOffset = 20 + (index * 15);
    const scale = useTransform(progress, range, [1, targetScale]);
    const isLast = index === total - 1;

    return (
        <div
            className="sticky top-0"
            style={{
                top: `${topOffset}px`,
                zIndex: index + 1,
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
                    opacity: 1,
                    filter: "blur(0px)",
                    width: '100%',
                }}
                className="bg-white rounded-[24px] md:rounded-[48px] overflow-hidden w-full h-[85vh] md:h-[90vh] border border-gray-200 shadow-2xl origin-top flex flex-col md:flex-row"
            >
                {/* Left Content Side */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-between overflow-y-auto">
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-xs md:text-sm font-medium text-[#2ba0fe] border border-[#2ba0fe] px-3 py-1 rounded-full">
                                {service.indexNumber || `0${index + 1}`}
                            </span>
                            <div className="flex gap-2">
                                {service.tags.slice(0, 2).map((tag, t) => (
                                    <span key={t} className="text-[10px] uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-cal text-[#1a1a1a] mb-8 leading-tight">
                            {service.title}
                        </h3>

                        <div className="space-y-8">
                            <div>
                                <span className="text-red-500 font-bold tracking-wide uppercase text-xs block mb-2">The Problem</span>
                                <h4 className="text-lg font-bold mb-2 text-gray-900">{service.problem}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{service.problemDesc}</p>
                            </div>

                            <div>
                                <span className="text-[#2ba0fe] font-bold tracking-wide uppercase text-xs block mb-2">Our Approach</span>
                                <h4 className="text-lg font-bold mb-2 text-gray-900">{service.approach}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{service.approachDesc}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-100">
                        <span className="text-green-600 font-bold tracking-wide uppercase text-xs block mb-2">Outcome</span>
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-cal text-[#1a1a1a]">{service.outcome}</h4>
                            <a href="#contact" className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-[#2ba0fe] transition-colors">
                                <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Image Side (Hidden on mobile if needed, or stacked) */}
                {service.image && (
                    <div className="w-full md:w-[45%] h-64 md:h-auto relative bg-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </motion.div>
        </div>
    );
}
