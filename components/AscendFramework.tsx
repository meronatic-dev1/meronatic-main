"use client";

import React from "react";
import { motion } from "framer-motion";

const STEPS = [
    {
        number: "01",
        title: "Discovery",
        description: "We identify market gaps, inefficiencies, and leverage points in your current model. Data modeling and audits set the foundation."
    },
    {
        number: "02",
        title: "Execution",
        description: "We deploy high-impact systems and campaigns. This is where strategy turns into tangible assets and market presence."
    },
    {
        number: "03",
        title: "Evolution",
        description: "Optimization never stops. We scale and future-proof your business using real-time data to refine the revenue engine."
    }
];

export default function AscendFramework() {
    return (
        <section className="py-24 md:py-32 bg-[#151515] text-white px-4 md:px-8 overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[#2ba0fe] font-medium tracking-widest uppercase text-sm mb-4 block">
                            Our Methodology
                        </span>
                        <h2 className="text-4xl md:text-6xl font-cal font-bold leading-none">
                            The Ascend Framework
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                        A structured path to scalable growth, transforming manual operations into automated revenue engines.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-gray-800 border-t border-b border-gray-800">
                    {STEPS.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="p-8 md:p-12 hover:bg-[#1a1a1a] transition-colors group"
                        >
                            <div className="mb-8 font-cal text-5xl md:text-6xl text-gray-800 group-hover:text-white transition-colors duration-500">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-bold font-cal mb-4 text-white">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="/approach" className="inline-flex items-center gap-2 text-[#2ba0fe] hover:text-white transition-colors border-b border-[#2ba0fe] hover:border-white pb-1 font-medium text-lg">
                        Explore the Framework in Depth →
                    </a>
                </div>
            </div>
        </section>
    );
}
