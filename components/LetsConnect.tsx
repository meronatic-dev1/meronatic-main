'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContactForm } from '@/app/actions/contact';

export default function LetsConnect() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus('loading');
        const formData = new FormData(event.currentTarget);

        try {
            const result = await submitContactForm(formData);
            if (result.success) {
                setStatus('success');
                (event.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    }

    return (
        <section id="lets-connect" className="relative py-12 md:py-24 bg-background overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">

            {/* Large Background Text - Testimonials Style */}
            <div className="absolute top-10 md:top-40 left-1/2 -translate-x-1/2 z-0 w-full text-center pointer-events-none select-none">
                <motion.h2
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[15vw] lg:text-[220px] font-bold font-cal text-[#D4D4D4] whitespace-nowrap leading-none tracking-tight"
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
                <div className="h-20 md:h-40 lg:h-80" />

                {/* Main Dark Card */}
                <div className="bg-black rounded-[3rem] p-6 md:p-16 overflow-hidden relative">

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
                                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                            >
                                Let’s Build Your <br /> Revenue Engine.
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
                            <form className="space-y-10" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-white text-base font-medium mb-2" htmlFor="name">Your Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Enter your Name"
                                        className="w-full bg-transparent border-b border-gray-700 pb-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white text-base font-medium mb-2" htmlFor="email">Your Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="Enter the Email"
                                        className="w-full bg-transparent border-b border-gray-700 pb-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-white text-base font-medium mb-2" htmlFor="phone">Phone</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="Enter your Phone"
                                            className="w-full bg-transparent border-b border-gray-700 pb-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white text-base font-medium mb-2" htmlFor="company">Company</label>
                                        <input
                                            id="company"
                                            name="company"
                                            type="text"
                                            placeholder="Company Name"
                                            className="w-full bg-transparent border-b border-gray-700 pb-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-white text-base font-medium mb-2" htmlFor="projectDescription">Project Description</label>
                                    <textarea
                                        id="projectDescription"
                                        name="projectDescription"
                                        placeholder="Type Here..."
                                        rows={1}
                                        className="w-full bg-transparent border-b border-gray-700 pb-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-white transition-colors resize-none"
                                    />
                                </div>

                                <div className="relative">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={status === 'loading' || status === 'success'}
                                        className="w-full py-4 rounded-full bg-foreground text-background font-bold text-lg hover:bg-muted-foreground transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Now!'}
                                    </motion.button>

                                    {status === 'success' && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute top-full left-0 w-full text-center text-green-500 mt-2 font-medium"
                                        >
                                            We'll be in touch soon!
                                        </motion.p>
                                    )}
                                    {status === 'error' && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute top-full left-0 w-full text-center text-red-500 mt-2 font-medium"
                                        >
                                            Something went wrong. Please try again.
                                        </motion.p>
                                    )}
                                </div>
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
