'use client';

import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white py-20 border-t border-white/5 relative overflow-hidden">
            {/* Large Background Text */}
            <div className="absolute left-0 right-0 bottom-0 pointer-events-none select-none flex justify-center opacity-10">
                <h1 className="text-[23vw] font-cal font-bold leading-none tracking-tighter text-white">
                    Meronatic
                </h1>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
                    <div className="md:col-span-2">
                        <span className="text-2xl font-cal font-bold mb-8 block">Meronatic.</span>
                    </div>

                    <div>
                        <h4 className="text-gray-400 font-inter text-sm uppercase tracking-wider mb-6">Sitemap</h4>
                        <ul className="space-y-4 text-lg text-gray-200">
                            <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-[#FF4D00] transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Works</a></li>
                            <li><a href="#" className="hover:text-[#FF4D00] transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-400 font-inter text-sm uppercase tracking-wider mb-6">Socials</h4>
                        <ul className="space-y-4 text-lg text-gray-200">
                            <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Twitter (X)</a></li>
                            <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-[#FF4D00] transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-[#FF4D00] transition-colors">Dribbble</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-gray-400 text-sm">
                    <p>© 2025 Meronatic. All rights reserved.</p>

                    <div className="flex items-center gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                    </div>

                    <div className="mt-4 md:mt-0 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        London → {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })} GMT
                    </div>
                </div>
            </div>
        </footer>
    );
}
