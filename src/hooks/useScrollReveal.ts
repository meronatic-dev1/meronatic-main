"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const revealables = Array.from(document.querySelectorAll(".rv"));
    if (!revealables.length) return;

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            en.target.classList.add("in");
            io.unobserve(en.target);
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -60px 0px" }
      );
      revealables.forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      revealables.forEach((el) => el.classList.add("in"));
    }
  }, []);
}
