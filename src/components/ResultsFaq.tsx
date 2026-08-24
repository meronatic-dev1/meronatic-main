"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ResultsFaq() {
  const { t, isRTL } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: t("results.faq.1.q"),
      a: t("results.faq.1.a"),
    },
    {
      q: t("results.faq.2.q"),
      a: t("results.faq.2.a"),
    },
    {
      q: t("results.faq.3.q"),
      a: t("results.faq.3.a"),
    },
    {
      q: t("results.faq.4.q"),
      a: t("results.faq.4.a"),
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="band band--ink" style={{ position: "relative" }}>
      <div className="shell">
        <div className="sec-head rv">
          <p className="mono eyebrow">{t("results.faq.eyebrow")}</p>
          <h2 className="d2">{t("results.faq.h")}</h2>
        </div>

        <div className="faq-list rv" style={{ maxWidth: "860px", margin: "0 auto" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="faq-item"
                style={{
                  borderBlockEnd: "1px solid rgba(255, 255, 255, 0.1)",
                  paddingBlock: "var(--s3)",
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
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "#fff",
                    textAlign: isRTL ? "right" : "left",
                    cursor: "pointer",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    gap: "16px",
                  }}
                >
                  <span style={{ fontFamily: "inherit" }}>{faq.q}</span>
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "1.2rem",
                      color: "var(--gold)",
                      transition: "transform 0.25s var(--ease)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      paddingBlockStart: "12px",
                      color: "var(--muted-inv)",
                      fontSize: "0.92rem",
                      lineHeight: 1.65,
                    }}
                  >
                    <p style={{ margin: 0 }}>{faq.a}</p>
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
