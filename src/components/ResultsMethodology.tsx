"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ResultsMethodology() {
  const { t, isRTL } = useLanguage();

  const principles = [
    {
      num: "01",
      title: t("results.method.1.t"),
      desc: t("results.method.1.p"),
      color: "var(--gold)",
    },
    {
      num: "02",
      title: t("results.method.2.t"),
      desc: t("results.method.2.p"),
      color: "var(--beam)",
    },
    {
      num: "03",
      title: t("results.method.3.t"),
      desc: t("results.method.3.p"),
      color: "var(--gold-2)",
    },
  ];

  return (
    <section className="band band--lead" style={{ position: "relative" }}>
      <div className="shell">
        <div className="sec-head rv">
          <p className="mono eyebrow">{t("results.method.eyebrow")}</p>
          <h2 className="d2">{t("results.method.h")}</h2>
          <p className="lede">{t("results.method.lede")}</p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "var(--s3)",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            marginBlockStart: "var(--s4)",
          }}
        >
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="rv"
              style={{
                background: "linear-gradient(165deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.015))",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "var(--r-lg)",
                padding: "var(--s4)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "all 0.3s var(--ease)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: p.color,
                  }}
                >
                  {p.num}
                </span>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: p.color,
                    boxShadow: `0 0 10px ${p.color}`,
                  }}
                />
              </div>

              <h3 style={{ fontSize: "1.15rem", margin: 0, color: "#fff" }}>{p.title}</h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--muted-inv)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
