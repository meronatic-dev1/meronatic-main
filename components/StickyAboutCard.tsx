'use client';

import React from 'react';
import { motion, useTransform } from 'framer-motion';

interface AboutData {
    title: string;
    subtitle: string;
    description: string;
    details?: { title: string; desc: string }[];
}

interface CardProps {
    data: AboutData;
    index: number;
    total: number;
    progress: any;
    range: [number, number];
    targetScale: number;
}

export default function StickyAboutCard({ data, index, total, progress, range, targetScale }: CardProps) {
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
                className="bg-[#1a1a1a] text-white rounded-[24px] md:rounded-[48px] overflow-hidden w-full h-[85vh] md:h-[90vh] border border-white/10 shadow-2xl origin-top flex flex-col justify-center items-center text-center p-6 md:p-20 relative"
            >
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="text-[#2ba0fe] font-medium tracking-widest uppercase text-sm mb-6 block">
                        {data.subtitle}
                    </span>
                    <h2 className="text-4xl md:text-7xl font-cal font-bold mb-10 leading-tight">
                        {data.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12">
                        {data.description}
                    </p>

                    {data.details && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
                            {data.details.map((detail, i) => (
                                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                    <h3 className="text-lg font-bold font-cal mb-2">{detail.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{detail.desc}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
