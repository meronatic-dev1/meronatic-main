'use client';

import React, { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import { motion, useScroll } from 'framer-motion';
import StickyServiceCard from '@/components/StickyServiceCard';

const DETAILED_SERVICES = [
    {
        title: "High-Performance SEO",
        problem: "Invisible in search",
        problemDesc: "Great products often fail because they can't be found. You're losing high-intent traffic to competitors with inferior offerings but better visibility.",
        approach: "Authority-First Strategy",
        approachDesc: "We don't just optimize meta tags. We build topical authority, technical infrastructure, and content ecosystems that signal trust to search engines.",
        outcome: "Dominant Rankings & Organic Revenue",
        tags: ["Technical Audit", "Content Strategy", "Link Building"],
        image: "https://framerusercontent.com/images/olR1jd1vAg59BKYSorw26ZNxY.png",
        indexNumber: "01"
    },
    {
        title: "Precision PPC",
        problem: "Wasted Ad Spend",
        problemDesc: "Most campaigns burn cash on broad targeting and vanity clicks that never convert into paying customers.",
        approach: "Conversion-Centric Management",
        approachDesc: "We relentlessly optimize for ROAS. By targeting high-intent keywords and refining landing page experiences, we turn clicks into revenue.",
        outcome: "Scalable Customer Acquisition",
        tags: ["Google Ads", "Social Ads", "Retargeting"],
        image: "https://framerusercontent.com/images/QhPkJGJBXS8kPS7IhPj7ZBGZpII.png",
        indexNumber: "02"
    },
    {
        title: "Web & App Development",
        problem: "Legacy Tech Debt",
        problemDesc: "Slow, bloated, and rigid websites kill conversion rates and frustrate users. Your digital storefront shouldn't be your bottleneck.",
        approach: "Modern Stack Architecture",
        approachDesc: "We build on Next.js and modern frameworks for speed, security, and scalability. Every line of code is written with performance in mind.",
        outcome: "Lightning-Fast User Experiences",
        tags: ["Next.js", "React Native", "Headless CMS"],
        image: "https://framerusercontent.com/images/yOPV9nZRSJXmNPqyeWfZSThWAc.png",
        indexNumber: "03"
    },
    {
        title: "Brand Identity Systems",
        problem: "Generic Positioning",
        problemDesc: "If you look like everyone else, you're a commodity. Weak branding forces you to compete on price rather than value.",
        approach: "Strategic Visual Design",
        approachDesc: "We craft visual systems that position you as a category leader. From logos to design tokens, we ensure consistency at every touchpoint.",
        outcome: "Premium Market Perception",
        tags: ["Visual Identity", "Design Systems", "Rebranding"],
        image: "https://framerusercontent.com/images/QhPkJGJBXS8kPS7IhPj7ZBGZpII.png", // Reusing image as per availability
        indexNumber: "04"
    },
    {
        title: "Data & Analytics",
        problem: "Flying Blind",
        problemDesc: "You can't fix what you can't measure. Without accurate tracking, growth decisions are just guesses.",
        approach: "Full-Funnel Tracking",
        approachDesc: "We implement robust analytics infrastructure to track every user interaction, giving you a single source of truth for your growth metrics.",
        outcome: "Data-Driven Decision Making",
        tags: ["GA4", "Custom Dashboards", "Attribution"],
        image: "https://framerusercontent.com/images/olR1jd1vAg59BKYSorw26ZNxY.png", // Reusing image
        indexNumber: "05"
    }
];

export default function ServicesPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <main className="min-h-screen bg-[#FFFFFF] text-[#1a1a1a]">
            <Header />

            {/* Sticky Header Section */}
            <section className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center pt-20 px-4 md:px-8 text-center bg-white">
                <span className="text-[#2ba0fe] font-medium tracking-widest uppercase text-sm mb-4 block">
                    Our Expertise
                </span>
                <h1 className="text-5xl md:text-[80px] font-cal font-bold text-[#1a1a1a] mb-8 leading-none">
                    Systems for Scale
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    We don't offer a menu of disparate services. We provide integrated solutions designed to solve specific growth challenges.
                </p>
            </section>

            {/* Scrollable Sticky Cards Section */}
            <section ref={containerRef} id="services-list" className="relative bg-[#FFFFFF] pb-32">
                <div className="container mx-auto px-4">
                    {/* Title Placeholder to maintain scroll space if needed, or just let cards take over */}

                    <div className="relative z-10 -mt-[20vh] md:-mt-[10vh]">
                        {DETAILED_SERVICES.map((service, i) => {
                            const step = 1 / DETAILED_SERVICES.length;
                            const rangeStart = i * step;
                            const rangeEnd = rangeStart + step;

                            return (
                                <StickyServiceCard
                                    key={i}
                                    service={service}
                                    index={i}
                                    total={DETAILED_SERVICES.length}
                                    progress={scrollYProgress}
                                    range={[rangeStart, rangeEnd]}
                                    targetScale={0.85}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>

            <LetsConnect />
            <Footer />
        </main>
    );
}
