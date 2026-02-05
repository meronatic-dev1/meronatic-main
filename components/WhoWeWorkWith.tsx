"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Landmark, Building2, Briefcase } from "lucide-react";

const INDUSTRIES = [
    { icon: ShoppingBag, name: "E-Commerce" },
    { icon: Landmark, name: "FinTech" },
    { icon: Building2, name: "Real Estate" },
    { icon: Briefcase, name: "Professional Services" },
];

export default function WhoWeWorkWith() {
    return (
        <section className="py-24 bg-[#FFFFFF] px-4 md:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-cal font-bold text-[#1a1a1a] mb-6">
                        Industries We Scale
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We specialize in high-stakes environments where performance matches precision.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {INDUSTRIES.map((industry, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-[#2ba0fe]">
                                <industry.icon size={24} />
                            </div>
                            <h3 className="font-bold font-cal text-lg text-[#1a1a1a]">
                                {industry.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
