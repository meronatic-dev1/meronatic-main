'use client';

import React, { useEffect, useState } from 'react';

export default function Footer() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'Asia/Dubai'
            });
            setTime(timeString);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#050505] relative overflow-hidden pt-[140px] pb-8 min-h-screen flex flex-col justify-between">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] bg-cover bg-no-repeat opacity-20 z-0 pointer-events-none mix-blend-color-dodge" />

            {/* Top Purple/Blue Glow */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#1a2d5e] blur-[100px] opacity-40 rounded-full pointer-events-none" />

            {/* Main Content Container */}
            <div className="container mx-auto px-6 md:px-[100px] relative z-20">
                <div className="flex flex-col md:flex-row gap-12 md:gap-[180px]">

                    {/* Navigation */}
                    <div className="flex flex-col gap-8">
                        <h4 className="text-[14px] font-normal text-[#ffffff]">Navigation</h4>
                        <ul className="flex flex-col gap-4">
                            {['About', 'Works', 'Services', 'Blog'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[24px] md:text-[28px] font-bold text-white hover:text-white/80 transition-opacity tracking-tight">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-8">
                        <h4 className="text-[14px] font-normal text-[#ffffff]">Social</h4>
                        <ul className="flex flex-col gap-4">
                            {['Twitter(X)', 'LinkedIn', 'Dribble'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[24px] md:text-[28px] font-bold text-white hover:text-white/80 transition-opacity tracking-tight">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legals */}
                    <div className="flex flex-col gap-8">
                        <h4 className="text-[14px] font-normal text-[#ffffff]">Legals</h4>
                        <ul className="flex flex-col gap-4">
                            {['Privacy Policy', 'Term of Service'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[24px] md:text-[28px] font-bold text-white hover:text-white/80 transition-opacity tracking-tight">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="relative z-20 container mx-auto px-6 md:px-[60px] lg:px-[100px] mt-auto mb-[20px]">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between text-[13px] font-medium text-[#666666] w-full">
                    <p className="mb-4 md:mb-0">© 2025 Meronatic. All rights reserved.</p>

                    <div className="mb-4 md:mb-0 absolute left-1/2 -translate-x-1/2 bottom-[20px]">
                        Dubai &rarr; {time}
                    </div>

                    <a href="#" onClick={scrollToTop} className="text-[#2ba0fe] hover:text-[#60baff] transition-colors mb-4 md:mb-0">
                        Back to top
                    </a>
                </div>
            </div>

            {/* Large Background Text */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[10%] md:bottom-[-3%] pointer-events-none select-none z-10 w-full flex justify-center">
                <h1 className="text-[25vw] md:text-[21vw] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent select-none opacity-40">
                    Meronatic
                </h1>
            </div>

            {/* Dark Gradient Overlay for Fade Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-[350px] bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none" />


            {/* Strong Blue Bottom Glow */}
            <div className="absolute bottom-[-10%] right-[-5%] w-[1100px] h-[900px] bg-[#2ba0fe] blur-[150px] opacity-50 rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[1200px] h-[1000px] bg-[#2ba0fe] blur-[150px] opacity-40 rounded-full pointer-events-none mix-blend-screen" />

        </footer>
    );
}
