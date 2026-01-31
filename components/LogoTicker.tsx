'use client';

import React from 'react';

const SERVICES = ["Website Design", "Brand Design", "Logo Design", "Development", "Art Direction"];

export default function LogoTicker() {
    return (
        <section className="py-10 border-y border-gray-200 bg-white/30 backdrop-blur-sm overflow-hidden">
            <div className="flex overflow-hidden group">
                <div className="flex animate-marquee whitespace-nowrap gap-12 sm:gap-24 pr-12 sm:pr-24">
                    {[...SERVICES, ...SERVICES, ...SERVICES, ...SERVICES].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-2xl md:text-4xl font-cal font-semibold text-gray-400 uppercase tracking-widest opacity-80 hover:text-brand-orange hover:opacity-100 transition-colors cursor-default">
                            {item}
                            <span className="w-2 h-2 rounded-full bg-brand-orange/50 inline-block ml-4" />
                        </div>
                    ))}
                </div>
                <div className="flex animate-marquee whitespace-nowrap gap-12 sm:gap-24 pr-12 sm:pr-24" aria-hidden="true">
                    {[...SERVICES, ...SERVICES, ...SERVICES, ...SERVICES].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-2xl md:text-4xl font-cal font-semibold text-gray-400 uppercase tracking-widest opacity-80 hover:text-brand-orange hover:opacity-100 transition-colors cursor-default">
                            {item}
                            <span className="w-2 h-2 rounded-full bg-brand-orange/50 inline-block ml-4" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
