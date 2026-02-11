"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BrandSummary() {
    return (
        <section className="py-12 bg-background text-foreground text-center px-4 md:px-8">
            <div className="container mx-auto max-w-4xl">
                <motion.p
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-4xl font-cal leading-normal md:leading-relaxed"
                >
                    "We exist to give business owners <span className="text-[#2ba0fe]">operational freedom</span> and <span className="text-[#2ba0fe]">scalable revenue</span>. No vanity metrics. No fluff. Just clear, measurable growth."
                </motion.p>
            </div>
        </section>
    );
}
