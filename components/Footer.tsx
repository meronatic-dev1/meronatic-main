'use client';

import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-card-dark text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-[12vw] font-cal font-bold leading-none opacity-20 mb-12 select-none pointer-events-none">
                    AGERO
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-60 text-sm">
                    <p>© 2024 Agero Agency. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Dribbble</a>
                    </div>
                    <p>Designed with ❤️ in London</p>
                </div>
            </div>
        </footer>
    );
}
