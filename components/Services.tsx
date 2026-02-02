'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
    {
        title: "Brand Strategy & Identity",
        description: "We build brands that stand out. From logo design to comprehensive visual identity systems, we ensure your brand tells the right story.",
    },
    {
        title: "Web Design & Development",
        description: "High-performance websites built with modern technologies. We focus on user experience, responsiveness, and conversion.",
    },
    {
        title: "Product Design (UI/UX)",
        description: "Creating intuitive and engaging digital products. We design interfaces that users love to interact with.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-card-dark text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-brand-blue text-sm font-bold uppercase tracking-widest">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-cal font-bold mt-4 mb-8">
                            What We Do
                        </h2>
                        <div className="h-1 w-20 bg-white/20 rounded-full" />
                    </div>

                    <div className="space-y-12">
                        {SERVICES.map((service, i) => (
                            <div key={i} className="group border-b border-white/10 pb-12 last:border-0 last:pb-0">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-2xl font-cal font-semibold group-hover:text-brand-blue transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <ArrowRight className="text-white/30 group-hover:text-brand-blue transition-colors duration-300" />
                                </div>
                                <p className="text-white/60 leading-relaxed max-w-md">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
