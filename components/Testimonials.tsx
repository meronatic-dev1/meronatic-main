'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
    id: number;
    quote: string;
    name: string;
    role: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Franklin turned our ideas into a stunning reality. Their attention to detail and ability to capture our brand's essence is unmatched.",
        name: "Ethan Moore",
        role: "Co-founder, NovaTech",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop" // Laptop/work scene
    },
    {
        id: 2,
        quote: "The team exceeded our expectations with their creative solutions and professional approach. A true partner in our success.",
        name: "Sarah Jenkins",
        role: "CTO, FutureWave",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 3,
        quote: "Working with them was seamless. They understood our vision immediately and delivered a product that stands out in the market.",
        name: "Michael Chen",
        role: "Director, Innovate Inc",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-[#ffffff] relative overflow-hidden">
            {/* Background Decorative Text */}
            <div className="absolute top-40 left-1/2 -translate-x-1/2 z-0 w-full text-center pointer-events-none select-none">
                <span className="text-[#5c5c5c] font-inter text-sm mb-4 block tracking-tight">(Why clients love Meronatic)</span>
                <motion.h2
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[18vw] lg:text-[220px] font-bold font-cal text-[#D4D4D4] whitespace-nowrap leading-none tracking-tight"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
                    }}
                >
                    Testimonials
                </motion.h2>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Spacer to push content below the large text */}
                <div className="h-20 lg:h-60" />

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">

                    {/* Stats Card (Left - 4 cols) - KEEPS BLACK BACKGROUND */}
                    <div className="lg:col-span-4 bg-[#0c0c0c] rounded-[32px] p-6 md:p-12 flex flex-col justify-between border border-white/[0.05]">
                        <div className="space-y-12">
                            <div>
                                <div className="flex items-start text-white mb-2">
                                    <span className="text-5xl md:text-7xl font-cal">26</span>
                                    <Plus className="mt-2 text-blue-500" size={32} strokeWidth={3} />
                                </div>
                                <p className="text-gray-400 font-medium ml-1">Finalized Projects</p>
                            </div>

                            <div>
                                <div className="flex items-start text-white mb-2">
                                    <span className="text-6xl md:text-7xl font-cal">98</span>
                                    <span className="text-4xl mt-2 text-blue-500 font-cal">%</span>
                                </div>
                                <p className="text-gray-400 font-medium ml-1">Happy Clients</p>
                            </div>

                            <div>
                                <div className="flex items-start text-white mb-2">
                                    <span className="text-6xl md:text-7xl font-cal">4</span>
                                    <span className="text-4xl mt-2 text-blue-500 font-cal">y</span>
                                </div>
                                <p className="text-gray-400 font-medium ml-1">Years Experience</p>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/[0.05]">
                            <p className="text-sm text-gray-400">
                                We deliver results that matter.
                            </p>
                        </div>
                    </div>

                    {/* Slider Card (Right - 8 cols) */}
                    <div className="lg:col-span-8 relative rounded-[32px] overflow-hidden group min-h-[500px] lg:min-h-auto">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${testimonials[currentIndex].image})` }}
                            >
                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                            {/* Top Bar */}
                            <div className="flex justify-between items-start">
                                <span className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-medium border border-white/10">
                                    0{currentIndex + 1} / 0{testimonials.length}
                                </span>
                            </div>

                            {/* Bottom Content */}
                            <div className="relative z-10 mt-auto">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <blockquote className="text-2xl md:text-4xl font-cal text-white leading-relaxed mb-8 max-w-3xl">
                                        "{testimonials[currentIndex].quote}"
                                    </blockquote>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-white text-lg font-medium">{testimonials[currentIndex].name}</div>
                                            <div className="text-gray-400 text-sm">{testimonials[currentIndex].role}</div>
                                        </div>

                                        {/* Navigation Buttons */}
                                        <div className="flex gap-4">
                                            <button
                                                onClick={prevTestimonial}
                                                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group/btn"
                                                aria-label="Previous testimonial"
                                            >
                                                <ArrowLeft size={24} />
                                            </button>
                                            <button
                                                onClick={nextTestimonial}
                                                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group/btn"
                                                aria-label="Next testimonial"
                                            >
                                                <ArrowRight size={24} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
