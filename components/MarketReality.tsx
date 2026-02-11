"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MarketReality() {
    return (
        <section className="py-24 md:py-32 bg-background text-foreground px-4 md:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Left: Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#2ba0fe] font-medium tracking-widest uppercase text-sm mb-4 block">
                            The Reality
                        </span>
                        <h2 className="text-4xl md:text-6xl font-cal font-bold leading-tight">
                            Most businesses are built on <span className="text-gray-400">fragmented systems</span> that limit growth.
                        </h2>
                    </motion.div>

                    {/* Right: Content */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-xl font-bold font-cal mb-3">Fragmented Marketing</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Agencies often focus on isolated tactics—seo, ads, design—without connecting them to a central revenue engine. This creates data silos and inefficient spend.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3 className="text-xl font-bold font-cal mb-3">Manual Operations</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Growth shouldn't rely on brute force. When your team is stuck in manual execution, you hit a ceiling that hiring more people can't fix.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h3 className="text-xl font-bold font-cal mb-3">Vanity Metrics</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Likes and traffic don't pay the bills. We shift the focus to what matters: revenue scalability, operational efficiency, and ROI.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
