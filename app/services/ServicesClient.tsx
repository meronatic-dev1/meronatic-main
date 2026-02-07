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
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Sticky Header Section */}
            <section ref={containerRef} id="services-list" className="relative bg-background pb-32">

                {/* Header Title - Sticky */}
                <div className="sticky top-0 z-0 h-screen flex flex-col items-center pt-32 select-none pointer-events-none overflow-hidden box-content">
                    <span className="text-[#5c5c5c] font-inter text-sm mb-4 block tracking-tight">(What We Do)</span>
                    <motion.h2
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-[13vw] lg:text-[220px] font-bold font-cal text-[#D4D4D4] whitespace-nowrap leading-none tracking-tight"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
                        }}
                    >
                        Our Expertise
                    </motion.h2>
                </div>

                <div className="container mx-auto px-4">
                    {/* Title Placeholder to maintain scroll space if needed, or just let cards take over */}

                    <div className="relative z-50 -mt-[75vh]">
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
