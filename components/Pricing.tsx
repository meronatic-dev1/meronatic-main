'use client';

import React from 'react';
import { Check } from 'lucide-react';

const PLANS = [
    {
        name: "Standard",
        price: "£2,995",
        description: "Perfect for early-stage startups needing a solid foundation.",
        features: ["Brand Identity System", "5-Page Website", "Mobile Responsive", "Basic SEO Setup", "1 Week Delivery"],
        primary: false,
    },
    {
        name: "Premium",
        price: "£5,995",
        description: "Comprehensive solution for scaling companies requiring deeper strategy.",
        features: ["Full Brand Strategy", "10-Page Website + CMS", "Advanced Interactions", "Technical SEO Audit", "2 Weeks Delivery", "Priority Support"],
        primary: true,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-blue text-sm font-bold uppercase tracking-widest">Pricing</span>
                    <h2 className="text-4xl md:text-5xl font-cal font-bold mt-4 text-foreground">
                        Simple, Transparent Plans
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {PLANS.map((plan, i) => (
                        <div key={i} className={`rounded-3xl p-8 md:p-10 border transition-all duration-300 hover:shadow-xl ${plan.primary ? 'bg-card-dark text-white border-card-dark ring-4 ring-brand-blue/20' : 'bg-gray-50 border-gray-200 text-foreground'}`}>
                            <div className="mb-8">
                                <h3 className="text-lg font-medium opacity-80 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl md:text-5xl font-cal font-bold">{plan.price}</span>
                                    <span className="text-sm opacity-60">/project</span>
                                </div>
                                <p className={`mt-4 text-sm leading-relaxed ${plan.primary ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <a href="#contact" className={`block w-full text-center py-4 rounded-full font-medium transition-colors mb-8 ${plan.primary ? 'bg-brand-blue text-white hover:bg-blue-600' : 'bg-card text-foreground border border-border hover:bg-muted'}`}>
                                Get Started
                            </a>

                            <ul className="space-y-4">
                                {plan.features.map((feature, f) => (
                                    <li key={f} className="flex items-center gap-3 text-sm">
                                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.primary ? 'bg-white/10 text-brand-blue' : 'bg-brand-blue/10 text-brand-blue'}`}>
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span className={plan.primary ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
