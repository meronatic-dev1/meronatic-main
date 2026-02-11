'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
    { question: "Why’s Meronatic instead of full-time designer?", answer: "Hiring a senior full-time designer is expensive (often $100k+) and can be hard to find. With Meronatic, you get access to expert design immediately, for a predictable monthly fee, without the overhead." },
    { question: "Speed of design delivery?", answer: "We typically deliver initial concepts within 2-3 business days. Revisions are usually turned around within 24 hours, keeping your project moving fast." },
    { question: "What’s the Meronatic progress like?", answer: "It's seamless. We integrate with your existing workflow (Slack, Trello, etc.) and provide regular updates. You'll always know the status of your design requests." },
    { question: "How many projects can I have?", answer: "You can add as many design requests to your queue as you like. We tackle them one at a time (or two for Pro plans) to ensure focused quality." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-16 md:py-32 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10 md:mb-20">
                    <span className="text-gray-500 font-inter text-sm mb-4 block tracking-wide uppercase">(FAQs)</span>
                    <h2 className="text-5xl md:text-7xl font-cal font-bold text-[#1a1a1a] mb-6">
                        Your Questions, Answered
                    </h2>
                    <p className="text-xl text-gray-500">Helping you understand our process and offerings at Meronatic.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="relative group">
                            {/* Gradient Shadow Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1344cd] via-[#2ba0fe] to-[#36d9ff] rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />

                            <div
                                className="relative bg-card rounded-[2rem] p-8 h-full"
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
    );
}
