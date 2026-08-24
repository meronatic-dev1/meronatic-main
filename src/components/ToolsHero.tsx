"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ToolsHero() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="band band--ink" style={{ position: "relative", overflow: "hidden" }}>
      {/* Glow backgrounds */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20%",
          right: isRTL ? "auto" : "-10%",
          left: isRTL ? "-10%" : "auto",
          width: "550px",
          height: "550px",
          background: "radial-gradient(circle, rgba(223, 168, 92, 0.08) 0%, rgba(6, 11, 20, 0) 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-10%",
          left: isRTL ? "auto" : "15%",
          right: isRTL ? "15%" : "auto",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(79, 209, 232, 0.07) 0%, rgba(6, 11, 20, 0) 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="shell" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "820px" }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1.25rem" }}>
            <ol
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "0.82rem",
                fontFamily: "var(--mono)",
                color: "var(--muted-inv)",
              }}
            >
              <li>
                <a
                  href="/"
                  style={{
                    color: "var(--muted-inv)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-inv)")}
                >
                  {isRTL ? "الرئيسية" : "Home"}
                </a>
              </li>
              <li aria-hidden="true" style={{ opacity: 0.5 }}>
                {isRTL ? "←" : "→"}
              </li>
              <li style={{ color: "var(--gold)", fontWeight: 500 }}>
                {t("tools.hero.eyebrow")}
              </li>
            </ol>
          </nav>

          <p className="mono eyebrow">{t("tools.hero.eyebrow")}</p>
          <h1 className="d1" style={{ marginBlock: "var(--s2) var(--s3)" }}>
            {t("tools.hero.h1")}
          </h1>
          <p className="lede">{t("tools.hero.lede")}</p>

          <div
            className="hero-cta"
            style={{
              marginBlockStart: "var(--s4)",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <a className="btn btn--gold" href="#planner">
              <span>{t("tools.1.t")}</span>
              <span className="arw" aria-hidden="true">
                {isRTL ? "←" : "→"}
              </span>
            </a>
            <a className="btn btn--ghost" href="#calculator">
              <span>{t("tools.2.t")}</span>
            </a>
            <a className="btn btn--ghost" href="#calendar">
              <span>{t("tools.3.t")}</span>
            </a>
          </div>

          {/* Highlights tag bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBlockStart: "var(--s4)",
              paddingTop: "var(--s3)",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 12px",
                borderRadius: "999px",
                background: "rgba(240, 201, 137, 0.08)",
                border: "1px solid rgba(240, 201, 137, 0.2)",
                color: "var(--gold)",
                fontSize: "0.75rem",
                fontFamily: "var(--mono)",
                letterSpacing: "0.04em",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "var(--gold)",
                }}
              />
              {t("tools.hero.badge1")}
            </span>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 12px",
                borderRadius: "999px",
                background: "rgba(79, 209, 232, 0.08)",
                border: "1px solid rgba(79, 209, 232, 0.2)",
                color: "var(--cyan)",
                fontSize: "0.75rem",
                fontFamily: "var(--mono)",
                letterSpacing: "0.04em",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "var(--cyan)",
                }}
              />
              {t("tools.hero.badge2")}
            </span>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 12px",
                borderRadius: "999px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "var(--muted-inv)",
                fontSize: "0.75rem",
                fontFamily: "var(--mono)",
                letterSpacing: "0.04em",
              }}
            >
              {t("tools.hero.badge3")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
