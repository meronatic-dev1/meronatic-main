'use client';

import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 text-center">
                <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Testimonials</span>
                <h2 className="text-4xl md:text-5xl font-cal font-bold mt-4 mb-16 text-foreground">
                    Trusted by <br /> Industry Leaders
                </h2>

                <div className="relative max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                    <div className="flex justify-center gap-1 mb-6 text-brand-orange">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} fill="currentColor" size={20} />)}
                    </div>

                    <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-800 mb-8">
                        "Agero transformed our startup's digital presence. Their attention to detail and design philosophy matches the quality we strive for in our own products. Simply outstanding."
                    </blockquote>

                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Client" className="w-full h-full object-cover" />
                        </div>
                        <cite className="not-italic">
                            <div className="font-cal text-lg text-foreground">James Wilson</div>
                            <div className="text-sm text-gray-500">CEO at TechFlow</div>
                        </cite>
                    </div>
                </div>
            </div>
        </section>
    );
}
