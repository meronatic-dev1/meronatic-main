"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

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
    const timelineData = STEPS.map(step => ({
        title: step.number,
        content: (
            <div>
                <h3 className="text-4xl md:text-5xl font-cal text-white mb-4 font-bold">
                    {step.title}
                </h3>
                <p className="text-neutral-400 text-base md:text-lg font-normal mb-8 leading-relaxed">
                    {step.description}
                </p>
            </div>
        ),
    }));

    return (
        <section className="py-24 md:py-32 bg-[#151515] text-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 mb-10">
                <div className="flex flex-col items-center justify-center text-center gap-8 w-full">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-[#2ba0fe] font-medium tracking-widest uppercase text-sm mb-4 block">
                            Our Methodology
                        </span>
                        <h2 className="text-4xl md:text-6xl font-cal font-bold leading-none">
                            The Ascend Framework
                        </h2>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <Timeline data={timelineData} />
            </div>

            <div className="container mx-auto px-4 md:px-8 mt-16 text-center">
                <a href="/approach" className="inline-flex items-center gap-2 text-[#2ba0fe] hover:text-white transition-colors border-b border-[#2ba0fe] hover:border-white pb-1 font-medium text-lg">
                    Explore the Framework in Depth →
                </a>
            </div>
        </section>
    );
}
