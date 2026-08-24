"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function HowWeWorkGovernance() {
  const { t, isRTL } = useLanguage();

  const rows = [1, 2, 3, 4, 5];

  return (
    <section className="band band--ink" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
      <div className="shell">
        <div className="sec-head rv">
          <p className="mono eyebrow">{t("hww.gov.eyebrow")}</p>
          <h2 className="d2">{t("hww.gov.h")}</h2>
          <p className="lede" style={{ maxWidth: "760px", marginBlockStart: "0.5rem" }}>
            {t("hww.gov.lede")}
          </p>
        </div>

        {/* Comparison Table / Cards Container */}
        <div
          className="rv"
          style={{
            marginBlockStart: "var(--s4)",
            background: "rgba(10, 18, 32, 0.7)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 16px 36px rgba(0, 0, 0, 0.35)",
          }}
        >
          {/* Table Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 2fr 2fr",
              background: "rgba(20, 36, 56, 0.6)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "1rem 1.5rem",
              fontWeight: 600,
              fontSize: "0.85rem",
              fontFamily: "var(--mono)",
              color: "var(--paper)",
            }}
          >
            <div>{t("hww.gov.col1")}</div>
            <div style={{ color: "var(--muted-inv)" }}>{t("hww.gov.col2")}</div>
            <div style={{ color: "var(--gold)", display: "flex", alignItems: "center", gap: "6px" }}>
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "var(--gold)",
                }}
              />
              {t("hww.gov.col3")}
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, idx) => (
            <div
              key={row}
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 2fr 2fr",
                padding: "1.25rem 1.5rem",
                borderBottom: idx < rows.length - 1 ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
                background: idx % 2 === 1 ? "rgba(255, 255, 255, 0.015)" : "transparent",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  color: "var(--paper)",
                }}
              >
                {t(`hww.gov.r${row}.dim`)}
              </div>

              <div
                style={{
                  fontSize: "0.88rem",
                  lineHeight: 1.5,
                  color: "var(--muted-inv)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <span style={{ color: "#E06C75", fontWeight: 700, minWidth: "14px" }}>✕</span>
                <span>{t(`hww.gov.r${row}.trad`)}</span>
              </div>

              <div
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                  color: "var(--paper)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  fontWeight: 500,
                  background: "rgba(240, 201, 137, 0.04)",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(240, 201, 137, 0.15)",
                }}
              >
                <span style={{ color: "var(--gold)", fontWeight: 700, minWidth: "14px" }}>✓</span>
                <span>{t(`hww.gov.r${row}.mero`)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
