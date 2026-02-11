'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import { motion } from 'framer-motion';
import { Search, Zap, RefreshCw } from 'lucide-react';

const PHASES = [
    {
        icon: Search,
        title: "Discovery",
        subtitle: "The Blueprint",
        description: "We don't guess. We audit. Before writing a line of code or launching an ad, we deeply analyze your current infrastructure, market position, and bottlenecks.",
        points: ["Full Technical Audit", "Competitor Analysis", "Revenue Gap Identification", "Data Modeling"]
    },
    {
        icon: Zap,
        title: "Execution",
        subtitle: "The Build",
        description: "This is where strategy turns into assets. We deploy the systems, campaigns, and creative work required to capture market share.",
        points: ["System Deployment", "Campaign Launch", "Visual Overhaul", "Infrastructure Setup"]
    },
    {
        icon: RefreshCw,
        title: "Evolution",
        subtitle: "The Scale",
        description: "Launch is just day one. We continuously optimize using real-time data, ensuring your revenue engine gets more efficient over time.",
        points: ["A/B Testing", "Conversion Optimization", "Scale-Up Strategy", "Automated Reporting"]
    }
];

export default function ApproachPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            <section className="pt-40 pb-20 px-4 md:px-8 bg-background text-foreground">
                <div className="container mx-auto max-w-6xl text-center">
                    <span className="text-[#2ba0fe] font-medium tracking-widest uppercase text-sm mb-4 block">
                        The Ascend Framework
                    </span>
                    <h1 className="text-5xl md:text-7xl font-cal font-bold mb-8">
                        How We Engineer Growth
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A structured, three-phase methodology designed to take you from fragmented operations to a predictable revenue engine.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8">
                <div className="container mx-auto max-w-5xl">
                    <div className="relative border-l-2 border-dashed border-gray-200 ml-6 md:ml-12 space-y-20 py-10">
                        {PHASES.map((phase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-12 md:pl-20"
                            >
                                {/* Connected Dot */}
                                <div className="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-[#2ba0fe] border-4 border-white shadow-sm" />

                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="bg-gray-50 p-6 rounded-2xl flex-shrink-0">
                                        <phase.icon size={40} className="text-[#1a1a1a]" />
                                    </div>
                                    <div>
                                        <span className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-2 block">{phase.subtitle}</span>
                                        <h2 className="text-3xl md:text-4xl font-cal font-bold text-[#1a1a1a] mb-4">{phase.title}</h2>
                                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                            {phase.description}
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {phase.points.map((point, p) => (
                                                <div key={p} className="flex items-center gap-3 text-gray-700 font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#2ba0fe]" />
                                                    {point}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <LetsConnect />
            <Footer />
        </main>
    );
}
