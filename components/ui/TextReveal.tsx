"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import React from 'react';

interface TextRevealProps {
    text: string;
    el?: keyof React.JSX.IntrinsicElements;
    className?: string;
    delay?: number;
}

export const TextReveal = ({ text, el: Wrapper = "p", className, delay = 0 }: TextRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(4px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const words = text.split(" ");

    return (
        <Wrapper className={className}>
            <motion.span
                ref={ref}
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="inline-block" // Ensure wrapper behaves like text
            >
                {words.map((word, i) => (
                    <span key={i} className="inline-block whitespace-nowrap">
                        {word.split("").map((char, j) => (
                            <motion.span variants={child} key={j} className="inline-block">
                                {char}
                            </motion.span>
                        ))}
                        {/* Add space after word unless it's the last one */}
                        {i !== words.length - 1 && (
                            <span className="inline-block">&nbsp;</span>
                        )}
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    );
};
