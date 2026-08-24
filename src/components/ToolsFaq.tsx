"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface FaqItem {
  qKey: string;
  aKey: string;
}

export function ToolsFaq() {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    { qKey: "tools.faq.1.q", aKey: "tools.faq.1.a" },
    { qKey: "tools.faq.2.q", aKey: "tools.faq.2.a" },
    { qKey: "tools.faq.3.q", aKey: "tools.faq.3.a" },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="band band--ink" style={{ position: "relative" }}>
      <div className="shell">
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("tools.faq.eyebrow")}</p>
            <h2 className="d2">{t("tools.faq.h")}</h2>
          </div>
          <p className="lede sh-aside">
            {t("tools.lede")}
          </p>
        </div>

        <div className="faq-grid rv" style={{ maxWidth: "880px", margin: "0 auto" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`faq-card ${isOpen ? "is-open" : ""}`}
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "var(--r)",
                  background: isOpen
                    ? "linear-gradient(165deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))"
                    : "rgba(255, 255, 255, 0.02)",
                  marginBottom: "14px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
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
                    color: "var(--ivory)",
                    textAlign: "start",
                    cursor: "pointer",
                    gap: "16px",
                  }}
                >
                  <span style={{ fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.4 }}>
                    {t(faq.qKey)}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "1.2rem",
                      color: "var(--gold)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 22px 24px",
                      color: "var(--muted-inv)",
                      fontSize: "0.92rem",
                      lineHeight: 1.68,
                      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                      paddingTop: "16px",
                    }}
                  >
                    <p style={{ margin: 0 }}>{t(faq.aKey)}</p>
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
