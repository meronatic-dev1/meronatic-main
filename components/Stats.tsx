'use client';

import React from 'react';

const STATS = [
    { label: "Senior Designer", value: "Fixed Monthly Rate" },
    { label: "Experience", value: "10+ Years" },
    { label: "Satisfaction", value: "100% Happy Clients" },
];

export default function Stats() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {STATS.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-8 text-center group cursor-default">
                            <span className="text-gray-500 text-sm uppercase tracking-widest mb-2 group-hover:text-brand-blue transition-colors duration-300">
                                {stat.label}
                            </span>
                            <span className="text-3xl md:text-4xl font-cal font-bold text-foreground">
                                {stat.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
