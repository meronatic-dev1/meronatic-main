'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { TextReveal } from './ui/TextReveal';
import { AnimatedListDemo } from './AnimatedListDemo';
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { TypingAnimation } from "@/components/ui/typing-animation";

const AVATARS = [
    "https://framerusercontent.com/images/LdiJIgo7vhBde0WiWHd48uSzxU.png",
    "https://framerusercontent.com/images/I9yoNS4RgoWEeRpJDtgEIoLAd4Y.png",
    "https://framerusercontent.com/images/G5E86VA7DStEga3pPtCu3nwW1qE.png",
];

export default function Hero() {
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

    const titleContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
            },
        },
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 md:pt-[160px] pb-10 md:pb-20 overflow-hidden bg-white">
            {/* Background Gradients/Glows */}
            {/* <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-white" />
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-white" />
            </div> */}

            <motion.div
                className="container mx-auto px-6 md:px-12 lg:px-12 xl:px-20 relative z-10 flex flex-col items-center"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {/* Top Badge/Avatars - Centered */}
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
                        Trusted by founders
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full mb-12">
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col items-start text-left lg:pl-4 lg:pr-4">
                        {/* Main Heading */}
                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-cal font-bold tracking-normal text-[#131313] leading-[1.1] mb-6 md:mb-8 w-full">
                            <motion.span variants={item} className="inline">
                                We deliver structured growth solutions for
                            </motion.span>
                            <span className="inline-block w-2 md:w-3" />
                            <motion.span variants={item} className="inline-block text-[#2ba0fe]">
                                <TypingAnimation
                                    words={["Startups", "Brands", "Scaleups", "Enterprises", "Leaders"]}
                                    loop={true}
                                    duration={100}
                                    delay={1000}
                                    className="text-[#2ba0fe]"
                                />
                            </motion.span>
                        </h1>

                        {/* Subtext description */}
                        <motion.p variants={item} className="text-[18px] text-[rgb(92,92,92)] max-w-xl mb-8 leading-relaxed">
                            We craft high-converting websites and unique brand identities that help startups stand out in a crowded market.
                        </motion.p>

                        {/* CTAs - Left Aligned */}
                        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-start gap-4">
                            <a
                                href="#pricing"
                                className={cn(
                                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                                )}
                            >
                                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                    <span>View Plans</span>
                                    <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                                </AnimatedShinyText>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column: Animated List */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="relative w-full h-full flex items-center justify-center lg:justify-end"
                    >
                        <div className="w-full max-w-[500px]">
                            <AnimatedListDemo />
                        </div>
                    </motion.div>
                </div>

            </motion.div>
        </section>
    );

}
