'use client';

import React from 'react';
import { useRef, useState } from 'react';
import { useScroll } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import { motion, AnimatePresence } from 'framer-motion';
import StickyProjectCard from '@/components/StickyProjectCard';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { TextReveal } from '@/components/ui/TextReveal';

const ABOUT_ITEMS = [
    {
        id: "01",
        title: "Our Vision",
        description: "To redefine the digital landscape by creating experiences that are not just functional, but emotional and memorable.",
        category: "Philosophy",
        year: "Since 2023",
        role: "Future Focus",
        image: "https://framerusercontent.com/images/olR1jd1vAg59BKYSorw26ZNxY.png", // Reusing an existing image as placeholder
    },
    {
        id: "02",
        title: "Our Mission",
        description: "Empowering startups and visionary brands with world-class design that scales with their ambition.",
        category: "Commitment",
        year: "Ongoing",
        role: "Impact",
        image: "https://framerusercontent.com/images/QhPkJGJBXS8kPS7IhPj7ZBGZpII.png",
    },
    {
        id: "03",
        title: "The Team",
        description: "A collective of passionate designers, developers, and strategists obsessed with pixel perfection.",
        category: "People",
        year: "Global",
        role: "Collaboration",
        image: "https://framerusercontent.com/images/yOPV9nZRSJXmNPqyeWfZSThWAc.png",
    },
];

const FAQS = [
    { question: "Where is Meronatic based?", answer: "We are a remote-first agency with our headquarters and core team based in Dubai, UAE." },
    { question: "Are you hiring?", answer: "We are always always looking for exceptional talent. If you think you're a good fit, check our careers page or drop us an email." },
    { question: "Do you work with international clients?", answer: "Yes, we work with clients globally, from San Francisco to Singapore. We adapt our schedule to ensure overlap for critical meetings." },
    { question: "What is your design philosophy?", answer: "We believe in minimalism with soul. Design should be intuitive and invisible, yet capable of evoking strong emotion." },
];

const AVATARS = [
    "https://framerusercontent.com/images/LdiJIgo7vhBde0WiWHd48uSzxU.png",
    "https://framerusercontent.com/images/I9yoNS4RgoWEeRpJDtgEIoLAd4Y.png",
    "https://framerusercontent.com/images/G5E86VA7DStEga3pPtCu3nwW1qE.png",
];

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const } },
    };

    return (
        <main className="min-h-screen bg-[#FFFFFF] text-[#151515]">
            <Header />
            <section className="relative min-h-screen flex flex-col items-center justify-start pt-[160px] pb-20 overflow-hidden bg-white">
                {/* Background Gradients/Glows */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-white" />
                    <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-white" />
                </div>

                <motion.div
                    className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {/* Top Badge/Avatars */}
                    <motion.div variants={item} className="flex items-center gap-3 mb-10 bg-white/80 backdrop-blur-sm border border-black/5 pl-2 pr-5 py-2 rounded-full shadow-sm">
                        <div className="flex -space-x-2">
                            {AVATARS.map((src, i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={src} alt="User" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="text-[13px] font-medium text-gray-800">
                            The team behind the magic
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <h1 className="text-[48px] md:text-[72px] font-cal font-bold tracking-normal text-[#131313] leading-[1.1] max-w-5xl mb-12 w-full text-center mx-auto">
                        <TextReveal text="We Connect" className="inline" /> <br className="hidden md:block" />
                        <TextReveal text="Design & Culture" className="text-[#2ba0fe] inline" delay={0.2} />
                        <TextReveal text=" to build Legacy" className="inline" delay={0.4} />
                    </h1>

                    {/* Subtext description */}
                    <motion.p variants={item} className="text-[18px] text-[rgb(92,92,92)] max-w-xl mb-12 leading-relaxed">
                        More than a design agency, we are a strategic partner for brands ready to challenge the status quo and define the future.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4">
                        <a href="#contact" className="bg-[#2ba0fe] bg-opacity-[0.82] text-white text-[16px] font-medium px-8 py-4 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 group">
                            Join the Team
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            {/* Main Content */}
            <section ref={containerRef} id="about" className="relative bg-[#FFFFFF] pb-32">
                <div className="container mx-auto px-4">
                    {/* Header Title - Sticky */}
                    <div className="sticky top-0 z-0 h-screen flex flex-col items-center pt-32 select-none pointer-events-none overflow-hidden box-content">
                        <span className="text-[#5c5c5c] font-inter text-sm mb-4 block tracking-tight">(Our DNA)</span>
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
                            Who We Are
                        </motion.h2>
                    </div>

                    {/* Cards Container - Pushed down to allow title to be seen first */}
                    <div className="relative z-50 -mt-[80vh]">
                        {ABOUT_ITEMS.map((item, i) => {
                            // Segmented scale logic matching Works page
                            const step = 1 / ABOUT_ITEMS.length;
                            const rangeStart = i * step;
                            const rangeEnd = rangeStart + step;

                            return (
                                <StickyProjectCard
                                    key={i}
                                    project={item}
                                    index={i}
                                    total={ABOUT_ITEMS.length}
                                    progress={scrollYProgress}
                                    range={[rangeStart, rangeEnd]}
                                    targetScale={0.8}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-32 bg-[#FFFFFF]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <span className="text-gray-500 font-inter text-sm mb-4 block tracking-wide uppercase">(FAQs)</span>
                        <h2 className="text-5xl md:text-7xl font-cal font-bold text-[#1a1a1a] mb-6">
                            Life at Meronatic
                        </h2>
                        <p className="text-xl text-gray-500">Everything you want to know about our culture and operations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {FAQS.map((faq, i) => (
                            <div key={i} className="relative group">
                                {/* Gradient Shadow Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#1344cd] via-[#2ba0fe] to-[#36d9ff] rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />

                                <div
                                    className="relative bg-white rounded-[2rem] p-8 h-full"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                        className="w-full flex items-start justify-between text-left group/btn"
                                    >
                                        <span className="text-2xl font-medium text-[#1a1a1a] pr-8 leading-tight group-hover/btn:text-gray-600 transition-colors">
                                            {faq.question}
                                        </span>
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-[#1a1a1a] text-white rotate-180' : 'bg-gray-100 text-[#1a1a1a] group-hover/btn:bg-[#1a1a1a] group-hover/btn:text-white'}`}>
                                            {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            >
                                                <div className="pt-6 text-gray-500 text-lg leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <LetsConnect />
            <Footer />
        </main>
    )
}
