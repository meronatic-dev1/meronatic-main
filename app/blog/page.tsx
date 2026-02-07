'use client';

import React, { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Customized dummy data matching the design aesthetic
const BLOG_POSTS = [
    {
        id: 1,
        title: "The Future of Design Systems",
        description: "How AI and automation are reshaping the way we build and maintain design systems at scale, making them more adaptive and intelligent.",
        category: "Design",
        date: "Oct 24, 2023",
        readTime: "5 Min Read",
        image: "https://framerusercontent.com/images/olR1jd1vAg59BKYSorw26ZNxY.png", // Reusing works image for consistency
    },
    {
        id: 2,
        title: "Mastering Framer Motion",
        description: "A deep dive into creating complex animations that feel natural and enhance the user experience without sacrificing performance.",
        category: "Development",
        date: "Nov 12, 2023",
        readTime: "7 Min Read",
        image: "https://framerusercontent.com/images/QhPkJGJBXS8kPS7IhPj7ZBGZpII.png",
    },
    {
        id: 3,
        title: "Typography in Modern Web",
        description: "Exploring the resurgence of serif fonts and how to pair them effectively with modern sans-serifs for a timeless aesthetic.",
        category: "Typography",
        date: "Dec 05, 2023",
        readTime: "4 Min Read",
        image: "https://framerusercontent.com/images/yOPV9nZRSJXmNPqyeWfZSThWAc.png",
    },
    {
        id: 4,
        title: "Responsive Grids 2.0",
        description: "Moving beyond standard 12-column grids (CSS Grid) to create fluid, asymmetrical layouts that break the mold.",
        category: "Layout",
        date: "Jan 10, 2024",
        readTime: "6 Min Read",
        image: "https://framerusercontent.com/images/LdiJIgo7vhBde0WiWHd48uSzxU.png",
    },
    {
        id: 5,
        title: "Micro-interactions Matter",
        description: "Why the smallest details often have the biggest impact on user retention and perceived quality of a digital product.",
        category: "UX",
        date: "Jan 22, 2024",
        readTime: "3 Min Read",
        image: "https://framerusercontent.com/images/G5E86VA7DStEga3pPtCu3nwW1qE.png",
    },
    {
        id: 6,
        title: "The Psychology of Color",
        description: "Understanding how color theory influences user behavior and how to apply it strategically in conversion-focused designs.",
        category: "Theory",
        date: "Feb 01, 2024",
        readTime: "8 Min Read",
        image: "https://framerusercontent.com/images/I9yoNS4RgoWEeRpJDtgEIoLAd4Y.png",
    },
];

export default function BlogPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    return (
        <main className="min-h-screen bg-[rgba(255, 255, 255, 1)] text-[rgb(19,19,19)]"> {/* Exact bg from computed style */}
            <Header />

            {/* Sticky Header Section */}
            <motion.div
                style={{ opacity: headerOpacity }}
                className="sticky top-0 z-0 h-screen flex flex-col items-center pt-32 select-none pointer-events-none overflow-hidden box-content"
            >
                <span className="text-[#5c5c5c] font-inter text-sm mb-4 block tracking-tight">(News & Articles)</span>
                <motion.h2
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[25vw] lg:text-[220px] font-bold font-cal text-[#D4D4D4] whitespace-nowrap leading-none tracking-tight"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
                    }}
                >
                    Insights
                </motion.h2>
            </motion.div>

            {/* Blog Grid Section */}
            <section ref={containerRef} className="relative pb-32 bg-[rgba(255, 255, 255, 1)]">
                <div className="container mx-auto px-4 max-w-[1520px]">
                    <div className="relative z-50 -mt-[75vh]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]"> {/* Exact gap */}
                            {BLOG_POSTS.map((post, i) => (
                                <BlogCard key={post.id} post={post} index={i} />
                            ))}
                        </div>

                        {/* Load More / Pagination Button */}
                        <div className="mt-24 flex justify-center">
                            <button className="px-8 py-4 rounded-full border border-[#131313] text-[#131313] font-medium font-inter hover:bg-[#131313] hover:text-white transition-all duration-300">
                                Load More Articles
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <LetsConnect />
            <Footer />
        </main>
    );
}

function BlogCard({ post, index }: { post: typeof BLOG_POSTS[0], index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="group cursor-pointer flex flex-col gap-6"
        >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200" style={{ borderRadius: '24px' }}>
                {/* Badge */}
                <div
                    className="absolute top-4 right-4 z-10 font-medium font-inter backdrop-blur-md"
                    style={{
                        backgroundColor: 'rgba(12, 12, 12, 0.82)',
                        color: 'rgb(255, 255, 255)',
                        fontSize: '12px',
                        padding: '12px 20px',
                        borderRadius: '50px'
                    }}
                >
                    {post.readTime}
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#2ba0fe] uppercase tracking-wider">{post.category}</span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                </div>

                <h3
                    className="font-inter font-normal text-[rgb(19,19,19)] group-hover:text-[#2ba0fe] transition-colors duration-300"
                    style={{
                        fontSize: '18px',
                        marginBottom: '0px'
                    }}
                >
                    {post.title}
                </h3>

                <p className="text-[#5C5C5C] text-base leading-relaxed line-clamp-3">
                    {post.description}
                </p>

                <div className="mt-2 flex items-center gap-2 text-sm font-medium text-[#131313] group-hover:gap-4 transition-all duration-300">
                    Read Article
                    <ArrowUpRight size={16} />
                </div>
            </div>
        </motion.div>
    );
}
