'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
    { question: "How long does a typical project take?", answer: "Most standard projects are completed within 1-2 weeks. Larger, more complex projects may take 4-6 weeks depending on the scope." },
    { question: "Do you offer post-launch support?", answer: "Yes! We provide 2 weeks of complimentary support after launch to ensure everything runs smoothly. We also offer monthly maintenance packages." },
    { question: "What is your payment structure?", answer: "We typically require a 50% deposit to secure your slot, with the remaining 50% due upon project completion and sign-off." },
    { question: "Can you work with existing brand guidelines?", answer: "Absolutely. We can adapt our designs to strictly follow your existing brand guidelines while injecting fresh creativity where appropriate." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-cal font-bold text-foreground">
                        Your Questions, <br /> Answered
                    </h2>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-medium text-foreground pr-8">{faq.question}</span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-card-dark text-white' : 'bg-gray-100 text-foreground'}`}>
                                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
