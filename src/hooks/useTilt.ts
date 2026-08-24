"use client";

import { useEffect, useRef } from "react";

export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const card = ref.current;
    if (!card) return;

    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!fine || reduce) return;

    const handlePointerMove = (e: PointerEvent) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty("--ry", ((px - 0.5) * 9).toFixed(2) + "deg");
      card.style.setProperty("--rx", ((py - 0.5) * -7).toFixed(2) + "deg");
      card.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
      card.style.setProperty("--my", (py * 100).toFixed(1) + "%");
      card.style.transitionDuration = ".12s";
    };

    const handlePointerLeave = () => {
      card.style.transitionDuration = ".6s";
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    };

    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return ref;
}
