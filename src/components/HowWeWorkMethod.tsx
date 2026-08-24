"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function HowWeWorkMethod() {
  const { t, isRTL } = useLanguage();
  const [activeStep, setActiveStep] = useState(1);
  const userTouchedRef = useRef(false);

  const selectStep = (step: number) => {
    userTouchedRef.current = true;
    setActiveStep(step);
  };

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const interval = setInterval(() => {
      if (userTouchedRef.current || document.hidden) return;
      setActiveStep((prev) => (prev % 4) + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="band band--ink" id="method" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
      <div className="shell">
        <div className="sec-head rv">
          <p className="mono eyebrow">{t("hww.method.eyebrow")}</p>
          <h2 className="d2">{t("hww.method.h")}</h2>
          <p className="lede" style={{ maxWidth: "720px", marginBlockStart: "0.5rem" }}>
            {t("hww.method.lede")}
          </p>
        </div>

        <div className="method rv" style={{ marginBlockStart: "var(--s4)" }}>
          <div className="iso" aria-hidden="true">
            <svg viewBox="0 0 420 360" fill="none">
              <defs>
                <linearGradient id="pl_hww" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#4FD1E8" stopOpacity=".30" />
                  <stop offset="1" stopColor="#4FD1E8" stopOpacity=".04" />
                </linearGradient>
                <linearGradient id="plg_hww" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#F0C989" stopOpacity=".55" />
                  <stop offset="1" stopColor="#D9A85C" stopOpacity=".10" />
                </linearGradient>
                <filter id="sf_hww" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="14" />
                </filter>
              </defs>
              <ellipse cx="210" cy="312" rx="150" ry="34" fill="#4FD1E8" fillOpacity=".14" filter="url(#sf_hww)" />

              {/* Layer 4: Operate & scale */}
              <g
                className="iso-layer"
                style={{
                  opacity: activeStep === 4 ? 1 : 0.35,
                  transform: activeStep === 4 ? "translateY(-16px)" : "translateY(0)",
                  transition: "transform 0.4s var(--ease), opacity 0.4s var(--ease)",
                }}
              >
                <path d="M210 246 L360 306 L210 348 L60 306 Z" fill="url(#pl_hww)" stroke="#4FD1E8" strokeOpacity=".55" strokeWidth="1.6" />
                {activeStep === 4 && <circle cx="210" cy="297" r="5" fill="#4FD1E8" />}
              </g>

              {/* Layer 3: Establish */}
              <g
                className="iso-layer"
                style={{
                  opacity: activeStep === 3 ? 1 : 0.35,
                  transform: activeStep === 3 ? "translateY(-16px)" : "translateY(0)",
                  transition: "transform 0.4s var(--ease), opacity 0.4s var(--ease)",
                }}
              >
                <path d="M210 186 L360 246 L210 288 L60 246 Z" fill="url(#pl_hww)" stroke="#4FD1E8" strokeOpacity=".6" strokeWidth="1.6" />
                {activeStep === 3 && <circle cx="210" cy="237" r="5" fill="#4FD1E8" />}
              </g>

              {/* Layer 2: Structure & plan */}
              <g
                className="iso-layer"
                style={{
                  opacity: activeStep === 2 ? 1 : 0.35,
                  transform: activeStep === 2 ? "translateY(-16px)" : "translateY(0)",
                  transition: "transform 0.4s var(--ease), opacity 0.4s var(--ease)",
                }}
              >
                <path d="M210 126 L360 186 L210 228 L60 186 Z" fill="url(#pl_hww)" stroke="#4FD1E8" strokeOpacity=".65" strokeWidth="1.6" />
                {activeStep === 2 && <circle cx="210" cy="177" r="5" fill="#4FD1E8" />}
              </g>

              {/* Layer 1: Orientation */}
              <g
                className="iso-layer"
                style={{
                  opacity: activeStep === 1 ? 1 : 0.35,
                  transform: activeStep === 1 ? "translateY(-16px)" : "translateY(0)",
                  transition: "transform 0.4s var(--ease), opacity 0.4s var(--ease)",
                }}
              >
                <path d="M210 66 L360 126 L210 168 L60 126 Z" fill="url(#plg_hww)" stroke="#D9A85C" strokeOpacity=".9" strokeWidth="1.8" />
                <circle cx="210" cy="117" r="6" fill="#F0C989" />
              </g>

              <path d="M210 168 v18M210 228 v18M210 288 v18" stroke="#4FD1E8" strokeOpacity=".45" strokeWidth="1.4" strokeDasharray="4 5" />
            </svg>
          </div>

          <div className="steps" role="tablist" aria-label="How we work stages">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className="step"
                role="tab"
                tabIndex={0}
                aria-selected={activeStep === step}
                onClick={() => selectStep(step)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    selectStep(step);
                  }
                }}
                style={{
                  cursor: "pointer",
                  transition: "background 0.25s var(--ease), border-color 0.25s var(--ease)",
                  borderRadius: "12px",
                }}
              >
                <span className="step-n">0{step}</span>
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                    <h3>{t(`mt.${step}.t`)}</h3>
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "0.72rem",
                        color: activeStep === step ? "var(--gold)" : "var(--muted-inv)",
                        opacity: activeStep === step ? 1 : 0.7,
                      }}
                    >
                      {t(`hww.stage.${step}.timeline`)}
                    </span>
                  </div>
                  <p>{t(`mt.${step}.p`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
