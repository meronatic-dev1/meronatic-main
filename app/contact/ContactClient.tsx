'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white text-[#1a1a1a]">
            <Header />

            <section className="pt-40 pb-20 px-4 md:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

                        {/* Information Column */}
                        <div>
                            <span className="text-[#2ba0fe] font-medium tracking-widest uppercase text-sm mb-4 block">
                                Contact Us
                            </span>
                            <h1 className="text-5xl md:text-7xl font-cal font-bold text-[#1a1a1a] mb-8 leading-tight">
                                Ready to Scale?
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed mb-12">
                                We partner with ambitious brands ready to move from manual chaos to automated growth. If that's you, let's talk.
                            </p>

                            <div className="space-y-8 mb-12">
                                <a href="mailto:hello@meronatic.com" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#2ba0fe] group-hover:text-white transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-gray-400 font-medium uppercase tracking-wider">Email Us</span>
                                        <span className="text-xl font-bold font-cal">hello@meronatic.com</span>
                                    </div>
                                </a>

                                <a href="https://wa.me/" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                                        <MessageCircle size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-gray-400 font-medium uppercase tracking-wider">WhatsApp</span>
                                        <span className="text-xl font-bold font-cal">Chat with Support</span>
                                    </div>
                                </a>
                            </div>

                            <div className="p-6 bg-[#F5F5F7] rounded-2xl border-l-4 border-[#2ba0fe]">
                                <h3 className="font-bold font-cal text-lg mb-2">Please Note</h3>
                                <p className="text-gray-600 text-sm">
                                    We are a high-performance partner, not a low-cost vendor. We work best with businesses ready to invest in serious transformation.
                                </p>
                            </div>
                        </div>

                        {/* Form Column (Reusing logic relative to LetsConnect but inline if needed, or just keeping LetsConnect at bottom and having simple info here? 
                           The prompt asks for "Strategy Call Form". LetsConnect HAS the form. 
                           I will just render LetsConnect here or replicate the form structure. 
                           To keep it consistent, I'll use the Contact page to Introduce, and the LetsConnect component IS the form section.
                           So I might just drop the form here or stick to visual hierarchy. 
                           Actually, standard Contact pages usually have the form immediately. 
                           I'll put a simplified form here or just call LetsConnect component directly but maybe wrapped differently?
                           
                           LetsConnect component has its own section wrapper and big text.
                           I will just reuse LetsConnect at the bottom as usual, but maybe add a clear "Jump to form" anchor or just let the user scroll.
                           Wait, the prompt checklist says "Contact Page: Strategy Call Form".
                           I will just EMBED the form fields here directly for a dedicated page feel.
                        */}
                        <div className="bg-black text-white p-8 md:p-12 rounded-[2rem]">
                            <h3 className="text-3xl font-cal font-bold mb-6">Request Strategy Call</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-400">Name</label>
                                        <input type="text" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2ba0fe] transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-400">Company</label>
                                        <input type="text" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2ba0fe] transition-colors" placeholder="Acme Inc." />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-400">Email</label>
                                        <input type="email" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2ba0fe] transition-colors" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-400">Phone</label>
                                        <input type="tel" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2ba0fe] transition-colors" placeholder="+1 (555) 000-0000" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-400">Project Details</label>
                                    <textarea rows={4} className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2ba0fe] transition-colors" placeholder="Tell us about your goals..." />
                                </div>
                                <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                    Submit Request <ArrowRight size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
