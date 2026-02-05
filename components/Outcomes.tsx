"use client";

import React from "react";
import { motion } from "framer-motion";

const METRICS = [
    { value: "3x", label: "Revenue Scaling" },
    { value: "-40%", label: "Acquisition Cost" },
    { value: "100%", label: "System Uptime" },
    { value: "24/7", label: "Automated Leads" },
];

export default function Outcomes() {
    return (
        <section className="py-24 bg-white text-black px-4 md:px-8 border-b border-gray-100">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#2ba0fe] font-medium tracking-widest uppercase text-sm mb-4 block">
                        The Impact
                    </span>
                    <h2 className="text-4xl md:text-5xl font-cal font-bold text-[#1a1a1a] mb-6">
                        We don't sell hours. We deliver outcomes.
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Our success is defined by your growth. We focus on reduced acquisition costs, scalable infrastructure, and automated systems that run without you.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {METRICS.map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="text-5xl md:text-6xl font-bold font-cal text-[#2ba0fe] mb-2">
                                {metric.value}
                            </div>
                            <div className="text-gray-500 font-medium uppercase tracking-wide text-sm">
                                {metric.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
