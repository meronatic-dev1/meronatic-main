'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const SERVICES = [
    {
        id: "01",
        title: "High-Performance SEO",
        description: "Dominate search rankings with data-driven strategies that target high-intent traffic, not just clicks.",
        image: "https://framerusercontent.com/images/olR1jd1vAg59BKYSorw26ZNxY.png",
        tags: ["Technical SEO", "Content Strategy", "Authority Building"]
    },
    {
        id: "02",
        title: "Precision PPC",
        description: "Maximize ROAS with hyper-targeted campaigns. We manage spend like it's our own, focusing on conversion over impressions.",
        image: "https://framerusercontent.com/images/QhPkJGJBXS8kPS7IhPj7ZBGZpII.png",
        tags: ["Google Ads", "Social Advertising", "Retargeting"]
    },
    {
        id: "03",
        title: "Web & App Development",
        description: "Enterprise-grade digital experiences built for speed, scalability, and conversion.",
        image: "https://framerusercontent.com/images/yOPV9nZRSJXmNPqyeWfZSThWAc.png",
        tags: ["Next.js", "Custom Development", "Performance Optimization"]
    },
    {
        id: "04",
        title: "Brand Identity Systems",
        description: "Cohesive visual systems that position you as a market leader and build instant trust.",
        image: "https://framerusercontent.com/images/QhPkJGJBXS8kPS7IhPj7ZBGZpII.png",
        tags: ["Visual Strategy", "Brand Guidelines", "Market Positioning"]
    },
    {
        id: "05",
        title: "Data & Analytics",
        description: "Turn data into decisions. We implement tracking infrastructure that reveals the truth about your growth.",
        image: "https://framerusercontent.com/images/olR1jd1vAg59BKYSorw26ZNxY.png",
        tags: ["Conversion Tracking", "Attribution Modeling", "Custom Dashboards"]
    }
];

export default function Services() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="services" className="py-12 md:py-24 bg-background relative overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Dynamic Background Text - Marquee Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none select-none z-0 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="whitespace-nowrap"
                    >
                        <motion.h2
                            animate={{ x: [0, -1000] }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="text-[25vw] md:text-[20vw] font-bold font-cal leading-none tracking-tight flex gap-10 opacity-20"
                        >
                            {Array(4).fill(SERVICES[activeIndex].title).map((text, i) => (
                                <span key={i} style={{ color: '#1344cd' }}>
                                    {text}
                                </span>
                            ))}
                        </motion.h2>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-start mb-16 max-w-6xl mx-auto w-full">
                    <div className="text-left mb-12">
                        <span className="text-gray-500 font-inter text-sm mb-4 block tracking-wide uppercase">(Services)</span>
                        <h2 className="text-4xl md:text-7xl font-cal font-bold text-[#1a1a1a]">What we do</h2>
                    </div>

                    {/* Tab Navigation */}
                    {/* Tab Navigation */}
                    <div className="flex w-full justify-between items-center border-b border-gray-200 pb-4">
                        {SERVICES.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`text-xs md:text-xl font-cal transition-all duration-300 relative px-2 py-2 whitespace-nowrap ${activeIndex === index ? 'text-[#2ba0fe]' : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    {activeIndex === index && (
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#2ba0fe]" />
                                    )}
                                    {service.title}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-center gap-8"
                        >
                            {/* Image - Centered */}
                            <div className="aspect-[16/9] w-full max-w-4xl rounded-[2rem] overflow-hidden bg-gray-200 relative group shadow-2xl">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={SERVICES[activeIndex].image}
                                    alt={SERVICES[activeIndex].title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Details - Centered below image */}
                            <div className="text-center max-w-2xl mx-auto mt-4">
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-gray-600 text-xl md:text-2xl leading-relaxed mb-8"
                                >
                                    {SERVICES[activeIndex].description}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-wrap gap-3 justify-center"
                                >
                                    {SERVICES[activeIndex].tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-6 py-3 rounded-full bg-[#5c5c5c] text-white font-medium text-sm shadow-sm hover:bg-black transition-colors cursor-default"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
