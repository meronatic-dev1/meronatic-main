'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function LetsConnect() {
    return (
        <section className="relative py-24 bg-[#FFFFFF] overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">

            {/* Large Background Text - Testimonials Style */}
            <div className="absolute top-70 left-1/2 -translate-x-1/2 z-0 w-full text-center pointer-events-none select-none">
                <motion.h2
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[15vw] lg:text-[200px] font-bold font-cal text-[#D4D4D4] whitespace-nowrap leading-none tracking-tight opacity-20"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
                    }}
                >
                    Let's Connect
                </motion.h2>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Spacer to push card below text */}
                <div className="h-40 lg:h-80" />

                {/* Main Dark Card */}
                <div className="bg-black rounded-[3rem] p-8 md:p-16 overflow-hidden relative">

                    {/* Background blurred grid INSIDE CARD */}
                    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full h-full p-4 transform scale-110">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <div key={i} className="aspect-video bg-gray-800 rounded-lg overflow-hidden blur-[8px]">
                                    <img
                                        src={`https://picsum.photos/seed/${i * 123}/400/300`}
                                        alt=""
                                        className="w-full h-full object-cover opacity-50 grayscale"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/70" />
                        {/* Radial Gradient for focus */}
                        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">

                        {/* Left Column: Heading */}
                        <div className="pt-10">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
                            >
                                Got a project in <br /> mind?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-gray-400 text-lg md:text-xl font-medium tracking-wide"
                            >
                                Let's make something happen together
                            </motion.p>
                        </div>

                        {/* Right Column: Form */}
                        <div className="bg-transparent">
                            <form className="space-y-10">
                                <div>
                                    <label className="block text-white text-base font-medium mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Name"
                                        className="w-full bg-transparent border-b border-gray-700 pb-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white text-base font-medium mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter the Email"
                                        className="w-full bg-transparent border-b border-gray-700 pb-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white text-base font-medium mb-2">Project Description</label>
                                    <textarea
                                        placeholder="Type Here..."
                                        rows={1}
                                        className="w-full bg-transparent border-b border-gray-700 pb-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-white transition-colors resize-none"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-100 transition-colors mt-4"
                                >
                                    Send Now!
                                </motion.button>
                            </form>
                        </div>

                    </div>
                    {/* Bottom Gradient Fade Inside Card */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
