"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface FaqItem {
  id: number;
  qKey: string;
  aKey: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    qKey: "faq.1.q",
    aKey: "faq.1.a",
  },
  {
    id: 2,
    qKey: "faq.2.q",
    aKey: "faq.2.a",
  },
  {
    id: 3,
    qKey: "faq.3.q",
    aKey: "faq.3.a",
  },
];

export function ServicesFaq() {
  const { t, isRTL } = useLanguage();
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
  });

  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="band band--navy" id="faq">
      <div className="shell">
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("faq.eyebrow")}</p>
            <h2 className="d2">{t("faq.h")}</h2>
          </div>
          <p className="lede sh-aside">
            {isRTL
              ? "إجابات مباشرة على أكثر الأسئلة طرحاً حول نماذج التعاقد، تراخيص الأعمال المنظمة، ومسارات التغطية الجغرافية."
              : "Clear answers to the most common questions regarding engagement models, licensing routes, and geographic coverage."}
          </p>
        </div>

        <div className="rv" style={{ maxWidth: "860px", marginInline: "0 auto" }}>
          {FAQ_ITEMS.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                style={{
                  paddingBlock: "var(--s3)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.11)",
                  transition: "background-color 0.2s ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    padding: "4px 0",
                    cursor: "pointer",
                    textAlign: isRTL ? "right" : "left",
                    color: "var(--paper)",
                    fontFamily: "inherit",
                  }}
                >
                  <h3
                    className="d3"
                    style={{
                      margin: 0,
                      fontSize: "1.18rem",
                      fontWeight: 600,
                      color: isOpen ? "var(--gold)" : "var(--paper)",
                      transition: "color 0.2s",
                    }}
                  >
                    {t(item.qKey)}
                  </h3>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: isOpen ? "rgba(240, 201, 137, 0.15)" : "rgba(255, 255, 255, 0.05)",
                      color: isOpen ? "var(--gold)" : "var(--muted-inv)",
                      fontSize: "1.1rem",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "all 0.25s ease",
                      flexShrink: 0,
                      marginInlineStart: "16px",
                    }}
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      paddingTop: "12px",
                      paddingBottom: "4px",
                      animation: "fadeIn 0.25s ease-in-out",
                    }}
                  >
                    <p
                      style={{
                        color: "var(--muted-inv)",
                        fontSize: "0.96rem",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {t(item.aKey)}
                    </p>
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
