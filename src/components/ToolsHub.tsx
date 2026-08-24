"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ToolsHub() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="band band--light on-light" style={{ paddingBlock: "var(--s5)" }}>
      <div className="shell">
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("tools.hub.eyebrow")}</p>
            <h2 className="d2">{t("tools.hub.h")}</h2>
          </div>
          <p className="lede sh-aside">{t("tools.hub.lede")}</p>
        </div>

        <div className="lic-grid rv">
          {/* Card 1: Entry Planner & Digital Twin */}
          <a className="lic" href="#planner">
            <div className="tool-card-head" style={{ marginBottom: "12px" }}>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#96692a",
                  fontWeight: 600,
                  display: "inline-block",
                  padding: "3px 8px",
                  background: "rgba(217, 168, 92, 0.18)",
                  borderRadius: "4px",
                }}
              >
                01 · {isRTL ? "مخطط الدخول والتوأم الرقمي" : "ENTRY SIMULATOR"}
              </span>
            </div>
            <h3 style={{ fontSize: "1.35rem", marginBottom: "8px" }}>{t("tools.1.t")}</h3>
            <p style={{ color: "#455468", lineHeight: 1.6, fontSize: "0.92rem", marginBottom: "16px" }}>
              {t("tools.1.p")}
            </p>
            <span className="link-arrow">
              {t("tools.1.btn")}
              <i aria-hidden="true">{isRTL ? "←" : "→"}</i>
            </span>
          </a>

          {/* Card 2: Cost to Employ */}
          <a className="lic" href="#calculator">
            <div className="tool-card-head" style={{ marginBottom: "12px" }}>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#0c4a5c",
                  fontWeight: 600,
                  display: "inline-block",
                  padding: "3px 8px",
                  background: "rgba(79, 209, 232, 0.2)",
                  borderRadius: "4px",
                }}
              >
                02 · {isRTL ? "حاسبة تكلفة التوظيف" : "COST CALCULATOR"}
              </span>
            </div>
            <h3 style={{ fontSize: "1.35rem", marginBottom: "8px" }}>{t("tools.2.t")}</h3>
            <p style={{ color: "#455468", lineHeight: 1.6, fontSize: "0.92rem", marginBottom: "16px" }}>
              {t("tools.2.p")}
            </p>
            <span className="link-arrow">
              {t("tools.2.btn")}
              <i aria-hidden="true">{isRTL ? "←" : "→"}</i>
            </span>
          </a>

          {/* Card 3: Compliance Calendar */}
          <a className="lic" href="#calendar">
            <div className="tool-card-head" style={{ marginBottom: "12px" }}>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#273d57",
                  fontWeight: 600,
                  display: "inline-block",
                  padding: "3px 8px",
                  background: "rgba(66, 96, 127, 0.18)",
                  borderRadius: "4px",
                }}
              >
                03 · {isRTL ? "تقويم الالتزامات النظامية" : "COMPLIANCE CALENDAR"}
              </span>
            </div>
            <h3 style={{ fontSize: "1.35rem", marginBottom: "8px" }}>{t("tools.3.t")}</h3>
            <p style={{ color: "#455468", lineHeight: 1.6, fontSize: "0.92rem", marginBottom: "16px" }}>
              {t("tools.3.p")}
            </p>
            <span className="link-arrow">
              {t("tools.3.btn")}
              <i aria-hidden="true">{isRTL ? "←" : "→"}</i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
