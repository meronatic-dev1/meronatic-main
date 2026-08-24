"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface FaqItem {
  qKey: string;
  aKey: string;
}

const FAQS: FaqItem[] = [
  { qKey: "mf.1.q", aKey: "mf.1.a" },
  { qKey: "mf.2.q", aKey: "mf.2.a" },
  { qKey: "mf.3.q", aKey: "mf.3.a" },
  { qKey: "mf.4.q", aKey: "mf.4.a" },
];

export function MarketsFaq() {
  const { t, isRTL } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="band band--ink" id="faq" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
      <div className="shell">
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("mf.eyebrow")}</p>
            <h2 className="d2">{t("mf.h")}</h2>
          </div>
        </div>

        <div
          className="rv"
          style={{
            maxWidth: "880px",
            display: "grid",
            gap: "14px",
            marginBlockStart: "var(--s3)",
          }}
        >
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  border: isOpen ? "1px solid rgba(240, 201, 137, 0.35)" : "1px solid rgba(255, 255, 255, 0.09)",
                  borderRadius: "var(--r-md)",
                  background: isOpen ? "rgba(255, 255, 255, 0.035)" : "rgba(255, 255, 255, 0.015)",
                  overflow: "hidden",
                  transition: "all 0.25s var(--ease)",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 24px",
                    background: "transparent",
                    border: "none",
                    color: isOpen ? "var(--gold-2)" : "var(--ivory)",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    textAlign: "start",
                    cursor: "pointer",
                    gap: "16px",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      className="mono"
                      style={{
                        fontSize: "0.78rem",
                        color: isOpen ? "var(--gold)" : "var(--muted-inv)",
                        opacity: 0.8,
                      }}
                    >
                      0{idx + 1}
                    </span>
                    {t(faq.qKey)}
                  </span>
                  <span
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s var(--ease)",
                      color: isOpen ? "var(--gold)" : "var(--muted-inv)",
                      fontSize: "1.2rem",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 22px 24px",
                      color: "var(--muted-inv)",
                      fontSize: "0.95rem",
                      lineHeight: "1.65",
                      borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                      paddingTop: "16px",
                    }}
                  >
                    {t(faq.aKey)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
