'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PROJECTS } from '@/lib/data';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WorksPage() {
    return (
        <main className="min-h-screen bg-[#FFFFFF] text-[#151515]">
            <Header />

            {/* Main Content */}
            <section className="pt-32 pb-32 container mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-8 md:gap-16">
                    {/* Page Title (Optional or implied) - Keeping simple as per analysis */}

                    {/* Project List */}
                    <div className="flex flex-col gap-24 md:gap-32">
                        {PROJECTS.map((project, index) => (
                            <WorkCard key={project.id} project={project} index={index + 1} total={PROJECTS.length} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function WorkCard({ project, index, total }: { project: typeof PROJECTS[0], index: number, total: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group flex flex-col gap-8"
        >
            {/* Card Content - Reusing style from RecentWorks but adapting for list */}
            <div className="bg-black rounded-[32px] overflow-hidden w-full border border-white/10 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-12">
                    {/* Left Column: Index & Description */}
                    <div className="lg:col-span-3 flex flex-col justify-between h-full min-h-[300px] lg:min-h-[400px] order-2 lg:order-1">
                        <div>
                            <span className="text-sm font-medium text-gray-500 block mb-6">
                                {project.id} / 0{total}
                            </span>
                            <h3 className="text-[40px] md:text-[64px] font-cal text-white mb-6 leading-[1.1] tracking-tight">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                                {project.description}
                            </p>
                        </div>
                        <div className="mt-8 lg:mt-auto">
                            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors group/link">
                                View Case Study
                                <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Center Column: Image */}
                    <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center w-full">
                        <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[24px] overflow-hidden bg-[#1a1a1a]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </div>

                    {/* Right Column: Metadata */}
                    <div className="lg:col-span-3 flex flex-col justify-center gap-8 pl-4 lg:pl-12 order-3">
                        <div>
                            <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-medium">Category</h4>
                            <p className="text-white font-medium text-lg">{project.category}</p>
                        </div>
                        <div>
                            <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-medium">Year</h4>
                            <p className="text-white font-medium text-lg">{project.year}</p>
                        </div>
                        <div>
                            <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-medium">Role</h4>
                            <p className="text-white font-medium text-lg">{project.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
