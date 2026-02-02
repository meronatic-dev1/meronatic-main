'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
    {
        title: "Archin",
        category: "Branding / Web Design",
        image: "https://framerusercontent.com/images/olR1jd1vAg59BKYSorw26ZNxY.png",
    },
    {
        title: "VNTNR",
        category: "App Design / UI",
        image: "https://framerusercontent.com/images/QhPkJGJBXS8kPS7IhPj7ZBGZpII.png",
    },
    {
        title: "Aeorim",
        category: "Art Direction",
        image: "https://framerusercontent.com/images/yOPV9nZRSJXmNPqyeWfZSThWAc.png",
    },
];

export default function RecentWorks() {
    return (
        <section id="works" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12">
                    <div>
                        <span className="text-brand-blue text-sm font-bold uppercase tracking-widest">Recent Works</span>
                        <h2 className="text-4xl md:text-5xl font-cal font-bold mt-4 text-foreground">
                            Selected <br /> Projects
                        </h2>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium border-b border-gray-300 pb-1 hover:border-brand-blue transition-colors">
                        View All Work <ArrowUpRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, i) => (
                        <div key={i} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
                            <div className="aspect-[4/3] relative overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-cal text-white">{project.title}</h3>
                                <p className="text-white/80 text-sm mt-1">{project.category}</p>
                            </div>

                            {/* Always visible mobile title if needed, but the hover effect is cleaner */}
                            <div className="md:hidden mt-4 px-2">
                                <h3 className="text-xl font-cal text-foreground">{project.title}</h3>
                                <p className="text-gray-500 text-sm">{project.category}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-medium border-b border-gray-300 pb-1">
                        View All Work <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
