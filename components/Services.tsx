'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const SERVICES = [
    {
        id: "01",
        title: "Web Design",
        description: "We create modern, responsive websites that engage users and drive results.",
        image: "https://framerusercontent.com/images/olR1jd1vAg59BKYSorw26ZNxY.png",
        tags: ["UX/UI Design", "Responsive Layout", "Web Development"]
    },
    {
        id: "02",
        title: "Brand Design",
        description: "We build bold, cohesive brand identities that leave a lasting impression.",
        image: "https://framerusercontent.com/images/QhPkJGJBXS8kPS7IhPj7ZBGZpII.png",
        tags: ["Visual Identity", "Style Guides", "Brand Strategy"]
    },
    {
        id: "03",
        title: "Logo Design",
        description: "We design clean, memorable logos that capture your brand’s essence.",
        image: "https://framerusercontent.com/images/yOPV9nZRSJXmNPqyeWfZSThWAc.png",
        tags: ["Logo Marks", "Wordmarks", "Icon Design"]
    },
];

export default function Services() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="services" className="py-32 bg-[#FFFFFF] relative overflow-hidden min-h-screen flex flex-col justify-center">
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
                    <div className="flex flex-nowrap overflow-x-auto md:flex-wrap justify-start md:justify-center gap-8 md:gap-24 border-b border-gray-200 w-full pb-4 no-scrollbar">
                        {SERVICES.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`text-xl md:text-2xl font-cal transition-all duration-300 relative px-4 py-2 whitespace-nowrap ${activeIndex === index ? 'text-[#2ba0fe]' : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    {activeIndex === index && (
                                        <div className="w-2 h-2 rounded-full bg-[#2ba0fe]" />
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
