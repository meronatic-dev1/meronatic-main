"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";

// --- Custom Animated Icons (SVG Path Draw) ---

const IconLayers = ({ isActive }: { isActive: boolean }) => {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <motion.path
                d="M2 17L12 22L22 17"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isActive ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.path
                d="M2 12L12 17L22 12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isActive ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isActive ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
            />
        </svg>
    );
};

const IconTrendingUp = ({ isActive }: { isActive: boolean }) => {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <motion.polyline
                points="23 6 13.5 15.5 8.5 10.5 1 18"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isActive ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.polyline
                points="17 6 23 6 23 12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isActive ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />
        </svg>
    );
};

const IconCpu = ({ isActive }: { isActive: boolean }) => {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <motion.rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isActive ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* Top/Bottom Pins */}
            <motion.path d="M9 9h6v6H9z" initial={{ pathLength: 0 }} animate={{ pathLength: isActive ? 1 : 0 }} transition={{ duration: 1, delay: 0.5 }} />
            <motion.path d="M9 1v3" initial={{ pathLength: 0 }} animate={{ pathLength: isActive ? 1 : 0 }} transition={{ duration: 0.5, delay: 0.8 }} />
            <motion.path d="M15 1v3" initial={{ pathLength: 0 }} animate={{ pathLength: isActive ? 1 : 0 }} transition={{ duration: 0.5, delay: 0.9 }} />
            <motion.path d="M9 20v3" initial={{ pathLength: 0 }} animate={{ pathLength: isActive ? 1 : 0 }} transition={{ duration: 0.5, delay: 1.0 }} />
            <motion.path d="M15 20v3" initial={{ pathLength: 0 }} animate={{ pathLength: isActive ? 1 : 0 }} transition={{ duration: 0.5, delay: 1.1 }} />
            {/* Left/Right Pins */}
            <motion.path d="M20 9h3" initial={{ pathLength: 0 }} animate={{ pathLength: isActive ? 1 : 0 }} transition={{ duration: 0.5, delay: 1.2 }} />
            <motion.path d="M20 14h3" initial={{ pathLength: 0 }} animate={{ pathLength: isActive ? 1 : 0 }} transition={{ duration: 0.5, delay: 1.3 }} />
            <motion.path d="M1 9h3" initial={{ pathLength: 0 }} animate={{ pathLength: isActive ? 1 : 0 }} transition={{ duration: 0.5, delay: 1.4 }} />
            <motion.path d="M1 14h3" initial={{ pathLength: 0 }} animate={{ pathLength: isActive ? 1 : 0 }} transition={{ duration: 0.5, delay: 1.5 }} />
        </svg>
    );
};

const DIFFERENCES = [
    {
        Icon: IconLayers,
        title: "Architecture of Growth",
        description: "We don't just run campaigns; we design integrated revenue systems. Every piece of your digital presence is architected to work together."
    },
    {
        Icon: IconTrendingUp,
        title: "Performance-Based",
        description: "Our incentives are aligned with your results. We partner with you to drive measurable outcomes, not just deliverables."
    },
    {
        Icon: IconCpu,
        title: "Systems-Driven Scaling",
        description: "We build infrastructure that scales. Automation and robust workflows replace manual effort, allowing you to grow without chaos."
    }
];


// --- Card Component with "Magnetic Tilt" & "Border Beam" ---

function DifferenceCard({ item, index, setHoveredCard }: { item: any, index: number, setHoveredCard: (rect: DOMRect | null) => void }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-10%" });

    // Magnetic Tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]); // Reverse for tilt
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    // Spring physics for smooth tilt
    const springConfig = { damping: 20, stiffness: 300 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseEnter = () => {
        if (ref.current) {
            setHoveredCard(ref.current.getBoundingClientRect());
        }
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1 // Staggered reveal
            }}
            style={{
                perspective: 1000,
            }}
            className="relative h-full"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                }}
                className="relative h-full bg-white/60 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 md:p-10 rounded-[2rem] shadow-sm overflow-hidden group"
            >
                {/* "Border Beam" Effect */}
                <div className="absolute inset-0 pointer-events-none rounded-[2rem] border border-transparent [background:linear-gradient(var(--angle),#E2E8F0,transparent)_border-box] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] animate-border-beam" />

                {/* Internal Card Content */}
                <div className="relative z-10 flex flex-col items-start h-full">
                    <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 text-brand-blue">
                        <item.Icon isActive={inView} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-cal mb-4 text-foreground group-hover:text-brand-blue transition-colors duration-300">
                        {item.title}
                    </h3>
                    <p className="text-muted-foreground dark:text-gray-100 leading-relaxed">
                        {item.description}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Background Grid ---
const SubtleGrid = () => (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "24px 24px"
        }}
    >
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
);

export default function MeronaticDifference() {
    // "Glow Cursor" Logic
    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
    const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);

    // Spring for smooth cursor movement
    const sX = useSpring(0, { stiffness: 500, damping: 30 });
    const sY = useSpring(0, { stiffness: 500, damping: 30 });
    const sWidth = useSpring(0, { stiffness: 300, damping: 30 });
    const sHeight = useSpring(0, { stiffness: 300, damping: 30 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            // If hovering a card, snap to card; otherwise follow mouse
            if (hoveredRect) {
                sX.set(hoveredRect.left);
                sY.set(hoveredRect.top);
                sWidth.set(hoveredRect.width);
                sHeight.set(hoveredRect.height);
            } else {
                sX.set(e.clientX - 10); // Center standard cursor
                sY.set(e.clientY - 10);
                sWidth.set(20);
                sHeight.set(20);
            }
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [hoveredRect, sX, sY, sWidth, sHeight]);


    // CSS for Border Beam Animation
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @property --angle {
                syntax: '<angle>';
                initial-value: 0deg;
                inherits: false;
            }
            .animate-border-beam {
                animation: borderBeam 4s linear infinite;
            }
            @keyframes borderBeam {
                0% { --angle: 0deg; }
                100% { --angle: 360deg; }
            }
        `;
        document.head.appendChild(style);
        return () => { document.head.removeChild(style); };
    }, []);

    return (
        <section className="relative py-24 md:py-32 bg-background px-4 md:px-8 overflow-hidden">
            <SubtleGrid />

            {/* Glow Cursor Element */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-50 rounded-[2.5rem] bg-brand-blue/5 border border-brand-blue/20 blur-sm transition-opacity duration-300"
                style={{
                    x: sX,
                    y: sY,
                    width: sWidth,
                    height: sHeight,
                    opacity: hoveredRect ? 1 : 0 // Only show when "snapped" or we can show always as specific cursor? Request said "Glow Cursor... follows mouse... snap to card".
                    // Let's make it visible always as a small glow, snapping to card.
                }}
            >
                {!hoveredRect && <div className="w-full h-full bg-brand-blue/30 blur-md rounded-full" />}
            </motion.div>


            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-brand-blue font-medium tracking-widest uppercase text-sm mb-4 block">
                        Why Meronatic?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-cal font-bold text-foreground">
                        A fundamental shift in approach.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {DIFFERENCES.map((item, index) => (
                        <DifferenceCard
                            key={index}
                            item={item}
                            index={index}
                            setHoveredCard={setHoveredRect}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
