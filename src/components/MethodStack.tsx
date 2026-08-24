"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function MethodStack() {
  const { t } = useLanguage();
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
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="band band--ink" id="method">
      <div className="shell">
        <div className="sec-head rv">
          <p className="mono eyebrow">{t("method.eyebrow")}</p>
          <h2 className="d2">{t("method.h")}</h2>
        </div>

        <div className="method rv">
          <div className="iso" aria-hidden="true">
            <svg viewBox="0 0 420 360" fill="none">
              <defs>
                <linearGradient id="pl" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#4FD1E8" stopOpacity=".30" />
                  <stop offset="1" stopColor="#4FD1E8" stopOpacity=".04" />
                </linearGradient>
                <linearGradient id="plg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#F0C989" stopOpacity=".55" />
                  <stop offset="1" stopColor="#D9A85C" stopOpacity=".10" />
                </linearGradient>
                <filter id="sf" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="14" />
                </filter>
              </defs>
              <ellipse cx="210" cy="312" rx="150" ry="34" fill="#4FD1E8" fillOpacity=".14" filter="url(#sf)" />

              {/* Layer 4 */}
              <g
                className="iso-layer"
                style={{
                  opacity: activeStep === 4 ? 1 : 0.38,
                  transform: activeStep === 4 ? "translateY(-16px)" : "translateY(0)"
                }}
              >
                <path d="M210 246 L360 306 L210 348 L60 306 Z" fill="url(#pl)" stroke="#4FD1E8" strokeOpacity=".55" strokeWidth="1.6" />
              </g>

              {/* Layer 3 */}
              <g
                className="iso-layer"
                style={{
                  opacity: activeStep === 3 ? 1 : 0.38,
                  transform: activeStep === 3 ? "translateY(-16px)" : "translateY(0)"
                }}
              >
                <path d="M210 186 L360 246 L210 288 L60 246 Z" fill="url(#pl)" stroke="#4FD1E8" strokeOpacity=".6" strokeWidth="1.6" />
              </g>

              {/* Layer 2 */}
              <g
                className="iso-layer"
                style={{
                  opacity: activeStep === 2 ? 1 : 0.38,
                  transform: activeStep === 2 ? "translateY(-16px)" : "translateY(0)"
                }}
              >
                <path d="M210 126 L360 186 L210 228 L60 186 Z" fill="url(#pl)" stroke="#4FD1E8" strokeOpacity=".65" strokeWidth="1.6" />
              </g>

              {/* Layer 1 */}
              <g
                className="iso-layer"
                style={{
                  opacity: activeStep === 1 ? 1 : 0.38,
                  transform: activeStep === 1 ? "translateY(-16px)" : "translateY(0)"
                }}
              >
                <path d="M210 66 L360 126 L210 168 L60 126 Z" fill="url(#plg)" stroke="#D9A85C" strokeOpacity=".9" strokeWidth="1.8" />
                <circle cx="210" cy="117" r="6" fill="#F0C989" />
              </g>

              <path d="M210 168 v18M210 228 v18M210 288 v18" stroke="#4FD1E8" strokeOpacity=".45" strokeWidth="1.4" strokeDasharray="4 5" />
            </svg>
          </div>

          <div className="steps" role="tablist" aria-label="How we work">
            <div
              className="step"
              role="tab"
              tabIndex={0}
              aria-selected={activeStep === 1}
              onClick={() => selectStep(1)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  selectStep(1);
                }
              }}
            >
              <span className="step-n">01</span>
              <div>
                <h3>{t("mt.1.t")}</h3>
                <p>{t("mt.1.p")}</p>
              </div>
            </div>

            <div
              className="step"
              role="tab"
              tabIndex={0}
              aria-selected={activeStep === 2}
              onClick={() => selectStep(2)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  selectStep(2);
                }
              }}
            >
              <span className="step-n">02</span>
              <div>
                <h3>{t("mt.2.t")}</h3>
                <p>{t("mt.2.p")}</p>
              </div>
            </div>

            <div
              className="step"
              role="tab"
              tabIndex={0}
              aria-selected={activeStep === 3}
              onClick={() => selectStep(3)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  selectStep(3);
                }
              }}
            >
              <span className="step-n">03</span>
              <div>
                <h3>{t("mt.3.t")}</h3>
                <p>{t("mt.3.p")}</p>
              </div>
            </div>

            <div
              className="step"
              role="tab"
              tabIndex={0}
              aria-selected={activeStep === 4}
              onClick={() => selectStep(4)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  selectStep(4);
                }
              }}
            >
              <span className="step-n">04</span>
              <div>
                <h3>{t("mt.4.t")}</h3>
                <p>{t("mt.4.p")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
