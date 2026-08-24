"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function HowWeWorkStages() {
  const { t, isRTL } = useLanguage();
  const [selectedStage, setSelectedStage] = useState<number>(1);

  const stages = [1, 2, 3, 4];

  return (
    <section className="band band--ink" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)", position: "relative" }}>
      <div className="shell">
        <div className="sec-head rv">
          <p className="mono eyebrow">{isRTL ? "تفاصيل المراحل" : "Stage Breakdown"}</p>
          <h2 className="d2">
            {isRTL
              ? "استكشف ما يحدث في كل مرحلة من مراحل المشروع"
              : "What actually happens in each stage"}
          </h2>
          <p className="lede" style={{ maxWidth: "760px", marginBlockStart: "0.5rem" }}>
            {isRTL
              ? "مواعيد واضحة ومخرجات ملموسة محددة مسبقاً، حتى تكون قرارات مجلس الإدارة وفرق التنفيذ مبنية على حقائق."
              : "Definite dates, transparent deliverables, and predictable milestones so leadership teams can plan commitments with confidence."}
          </p>
        </div>

        {/* Stage selection tabs */}
        <div
          role="tablist"
          aria-label="Stages detailed tabs"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "12px",
            marginBlock: "var(--s4) var(--s4)",
          }}
        >
          {stages.map((stg) => {
            const isActive = selectedStage === stg;
            return (
              <button
                key={stg}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedStage(stg)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  textAlign: isRTL ? "right" : "left",
                  padding: "1.25rem 1.4rem",
                  background: isActive ? "rgba(240, 201, 137, 0.08)" : "var(--navy-sub)",
                  border: `1px solid ${
                    isActive ? "var(--gold)" : "rgba(255, 255, 255, 0.08)"
                  }`,
                  borderRadius: "14px",
                  cursor: "pointer",
                  transition: "all 0.25s var(--ease)",
                  boxShadow: isActive ? "0 8px 24px rgba(223, 168, 92, 0.12)" : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: isActive ? "var(--gold)" : "var(--cyan)",
                    }}
                  >
                    0{stg}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "0.72rem",
                      padding: "2px 8px",
                      borderRadius: "999px",
                      background: isActive ? "rgba(240, 201, 137, 0.15)" : "rgba(255, 255, 255, 0.06)",
                      color: isActive ? "var(--gold)" : "var(--muted-inv)",
                    }}
                  >
                    {t(`hww.stage.${stg}.timeline`)}
                  </span>
                </div>
                <h4
                  style={{
                    margin: 0,
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: isActive ? "var(--paper)" : "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  {t(`hww.stage.${stg}.title`)}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Panel */}
        <div
          className="rv"
          style={{
            background: "linear-gradient(180deg, rgba(20, 36, 56, 0.8) 0%, rgba(9, 21, 36, 0.95) 100%)",
            border: "1px solid rgba(240, 201, 137, 0.25)",
            borderRadius: "20px",
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2.5rem",
              alignItems: "start",
            }}
          >
            {/* Left Col: Overview & Core Focus */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  background: "rgba(240, 201, 137, 0.12)",
                  color: "var(--gold)",
                  fontFamily: "var(--mono)",
                  fontSize: "0.78rem",
                  marginBottom: "1rem",
                }}
              >
                <span>Stage 0{selectedStage}</span>
                <span>·</span>
                <span>{t(`hww.stage.${selectedStage}.timeline`)}</span>
              </div>

              <h3
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  margin: "0 0 1rem 0",
                  color: "var(--paper)",
                }}
              >
                {t(`hww.stage.${selectedStage}.title`)}
              </h3>

              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.6,
                  color: "rgba(255, 255, 255, 0.85)",
                  marginBottom: "1.5rem",
                }}
              >
                {t(`hww.stage.${selectedStage}.summary`)}
              </p>

              <div
                style={{
                  padding: "1rem 1.25rem",
                  background: "rgba(79, 209, 232, 0.06)",
                  borderInlineStart: "3px solid var(--cyan)",
                  borderRadius: "0 8px 8px 0",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--mono)",
                    fontSize: "0.72rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--cyan)",
                    marginBottom: "4px",
                  }}
                >
                  {isRTL ? "التركيز الاستراتيجي" : "Core Objective"}
                </span>
                <span style={{ fontSize: "0.95rem", color: "var(--paper)", fontWeight: 500 }}>
                  {t(`hww.stage.${selectedStage}.focus`)}
                </span>
              </div>

              {/* Primary Output Callout */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 16px",
                  background: "rgba(240, 201, 137, 0.1)",
                  border: "1px dashed rgba(240, 201, 137, 0.35)",
                  borderRadius: "10px",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "var(--gold)",
                    fontFamily: "var(--mono)",
                  }}
                >
                  {t(`hww.stage.${selectedStage}.out`)}
                </span>
              </div>
            </div>

            {/* Right Col: Activities & Deliverables Checklist */}
            <div
              style={{
                background: "rgba(6, 11, 20, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "14px",
                padding: "1.5rem",
              }}
            >
              <h4
                style={{
                  margin: "0 0 1.25rem 0",
                  fontSize: "0.82rem",
                  fontFamily: "var(--mono)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--muted-inv)",
                }}
              >
                {isRTL ? "المخرجات والأنشطة الرئيسية" : "Key Activities & Deliverables"}
              </h4>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[1, 2, 3].map((delivNum) => (
                  <li
                    key={delivNum}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        minWidth: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        background: "rgba(79, 209, 232, 0.15)",
                        border: "1px solid var(--cyan)",
                        color: "var(--cyan)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        marginTop: "2px",
                        fontWeight: 600,
                      }}
                    >
                      ✓
                    </div>
                    <div>
                      <span style={{ fontSize: "0.95rem", color: "var(--paper)", lineHeight: 1.5 }}>
                        {t(`hww.stage.${selectedStage}.deliv.${delivNum}`)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  marginTop: "1.75rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "0.82rem", color: "var(--muted-inv)", fontFamily: "var(--mono)" }}>
                  {isRTL ? "مسؤولية تسليم واحدة" : "1 Named Delivery Lead"}
                </span>
                <a
                  href="/#contact"
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--gold)",
                    fontFamily: "var(--mono)",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  {isRTL ? "استفسر عن هذه المرحلة ←" : "Inquire about this stage →"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
