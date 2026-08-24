"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type MarketFilter = "all" | "ksa" | "uae" | "eu";

interface CaseItem {
  id: string;
  market: "ksa" | "uae" | "eu";
  tagKey: string;
  titleKey: string;
  descKey: string;
  mandateKey: string;
  ranKey: string;
  routeKey: string;
  durationKey: string;
  outcomes: {
    valKey: string;
    labelKey: string;
  }[];
}

const CASES: CaseItem[] = [
  {
    id: "ksa-infrastructure",
    market: "ksa",
    tagKey: "results.case.1.tag",
    titleKey: "results.case.1.title",
    descKey: "results.case.1.desc",
    mandateKey: "results.case.1.mandate",
    ranKey: "results.case.1.ran",
    routeKey: "results.case.1.route",
    durationKey: "results.case.1.duration",
    outcomes: [
      { valKey: "results.case.1.out.1.v", labelKey: "results.case.1.out.1.l" },
      { valKey: "results.case.1.out.2.v", labelKey: "results.case.1.out.2.l" },
      { valKey: "results.case.1.out.3.v", labelKey: "results.case.1.out.3.l" },
    ],
  },
  {
    id: "uae-tech-rhq",
    market: "uae",
    tagKey: "results.case.2.tag",
    titleKey: "results.case.2.title",
    descKey: "results.case.2.desc",
    mandateKey: "results.case.2.mandate",
    ranKey: "results.case.2.ran",
    routeKey: "results.case.2.route",
    durationKey: "results.case.2.duration",
    outcomes: [
      { valKey: "results.case.2.out.1.v", labelKey: "results.case.2.out.1.l" },
      { valKey: "results.case.2.out.2.v", labelKey: "results.case.2.out.2.l" },
      { valKey: "results.case.2.out.3.v", labelKey: "results.case.2.out.3.l" },
    ],
  },
  {
    id: "eu-manufacturer",
    market: "eu",
    tagKey: "results.case.3.tag",
    titleKey: "results.case.3.title",
    descKey: "results.case.3.desc",
    mandateKey: "results.case.3.mandate",
    ranKey: "results.case.3.ran",
    routeKey: "results.case.3.route",
    durationKey: "results.case.3.duration",
    outcomes: [
      { valKey: "results.case.3.out.1.v", labelKey: "results.case.3.out.1.l" },
      { valKey: "results.case.3.out.2.v", labelKey: "results.case.3.out.2.l" },
      { valKey: "results.case.3.out.3.v", labelKey: "results.case.3.out.3.l" },
    ],
  },
  {
    id: "fintech-crossborder",
    market: "uae",
    tagKey: "results.case.4.tag",
    titleKey: "results.case.4.title",
    descKey: "results.case.4.desc",
    mandateKey: "results.case.4.mandate",
    ranKey: "results.case.4.ran",
    routeKey: "results.case.4.route",
    durationKey: "results.case.4.duration",
    outcomes: [
      { valKey: "results.case.4.out.1.v", labelKey: "results.case.4.out.1.l" },
      { valKey: "results.case.4.out.2.v", labelKey: "results.case.4.out.2.l" },
      { valKey: "results.case.4.out.3.v", labelKey: "results.case.4.out.3.l" },
    ],
  },
];

export function ResultsList() {
  const { t, isRTL } = useLanguage();
  const [filter, setFilter] = useState<MarketFilter>("all");

  const filteredCases = CASES.filter((c) => {
    if (filter === "all") return true;
    if (c.id === "fintech-crossborder" && (filter === "uae" || filter === "eu")) return true;
    return c.market === filter;
  });

  return (
    <section className="band band--ink" id="cases" style={{ paddingBlockStart: "var(--s4)" }}>
      <div className="shell">
        {/* Section Header */}
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("results.hero.eyebrow")}</p>
            <h2 className="d2">{t("results.hero.h1")}</h2>
          </div>
          <p className="lede sh-aside">{t("results.hero.lede")}</p>
        </div>

        {/* Operating Proof Banner */}
        <div className="proof-banner rv">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0, marginTop: "2px" }}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <div>
            <b>{t("results.note.title")}</b>
            <p>{t("results.note.desc")}</p>
          </div>
        </div>

        {/* Market Filter Bar */}
        <div className="results-filter-bar rv">
          <button
            type="button"
            className={`filter-btn ${filter === "all" ? "is-active" : ""}`}
            onClick={() => setFilter("all")}
          >
            <span>{t("results.filter.all")}</span>
            <span
              style={{
                background: filter === "all" ? "var(--gold)" : "rgba(255,255,255,0.1)",
                color: filter === "all" ? "#060b14" : "var(--muted-inv)",
                padding: "1px 6px",
                borderRadius: "999px",
                fontSize: "0.68rem",
                fontWeight: 600,
              }}
            >
              4
            </span>
          </button>

          <button
            type="button"
            className={`filter-btn ${filter === "ksa" ? "is-active" : ""}`}
            onClick={() => setFilter("ksa")}
          >
            <span>🇸🇦 {t("results.filter.ksa")}</span>
          </button>

          <button
            type="button"
            className={`filter-btn ${filter === "uae" ? "is-active" : ""}`}
            onClick={() => setFilter("uae")}
          >
            <span>🇦🇪 {t("results.filter.uae")}</span>
          </button>

          <button
            type="button"
            className={`filter-btn ${filter === "eu" ? "is-active" : ""}`}
            onClick={() => setFilter("eu")}
          >
            <span>🇪🇺 {t("results.filter.eu")}</span>
          </button>
        </div>

        {/* Case Cards */}
        <div style={{ display: "grid", gap: "var(--s3)" }}>
          {filteredCases.map((c) => (
            <article key={c.id} className="case rv" id={c.id}>
              <div className="case-head">
                <span className="tag">{t(c.tagKey)}</span>
                <h3>{t(c.titleKey)}</h3>
                <p>{t(c.descKey)}</p>
              </div>

              <div className="case-grid">
                <div className="case-cell">
                  <span>{t("results.cell.mandate")}</span>
                  <p>{t(c.mandateKey)}</p>
                </div>
                <div className="case-cell">
                  <span>{t("results.cell.ran")}</span>
                  <p>{t(c.ranKey)}</p>
                </div>
                <div className="case-cell">
                  <span>{t("results.cell.route")}</span>
                  <p>{t(c.routeKey)}</p>
                </div>
                <div className="case-cell">
                  <span>{t("results.cell.duration")}</span>
                  <p>{t(c.durationKey)}</p>
                </div>
              </div>

              <div className="case-out">
                {c.outcomes.map((out, idx) => (
                  <div key={idx}>
                    <b>{t(out.valKey)}</b>
                    <span>{t(out.labelKey)}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="rv" style={{ marginBlockStart: "var(--s5)", textAlign: "center" }}>
          <a className="btn btn--gold" href="/#contact">
            <span>{t("results.hero.cta.discuss")}</span>
            <span className="arw" aria-hidden="true">
              {isRTL ? "←" : "→"}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
