"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, TrendingUp, Cpu } from "lucide-react";

const DIFFERENCES = [
    {
        icon: Layers,
        title: "Architecture of Growth",
        description: "We don't just run campaigns; we design integrated revenue systems. Every piece of your digital presence is architected to work together."
    },
    {
        icon: TrendingUp,
        title: "Performance-Based",
        description: "Our incentives are aligned with your results. We partner with you to drive measurable outcomes, not just deliverables."
    },
    {
        icon: Cpu,
        title: "Systems-Driven Scaling",
        description: "We build infrastructure that scales. Automation and robust workflows replace manual effort, allowing you to grow without chaos."
    }
];

export default function MeronaticDifference() {
    return (
        <section className="py-24 md:py-32 bg-[#FFFFFF] px-4 md:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-[#2ba0fe] font-medium tracking-widest uppercase text-sm mb-4 block">
                        Why Meronatic?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-cal font-bold text-[#1a1a1a]">
                        A fundamental shift in approach.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {DIFFERENCES.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-14 h-14 bg-[#EBF5FF] rounded-2xl flex items-center justify-center mb-6 text-[#2ba0fe]">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold font-cal mb-4 text-[#1a1a1a]">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
