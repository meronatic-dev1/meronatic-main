"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Tools() {
  const { t } = useLanguage();

  return (
    <section className="band band--navy" id="tools">
      <div className="shell">
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("tools.eyebrow")}</p>
            <h2 className="d2">{t("tools.h")}</h2>
          </div>
          <p className="lede sh-aside">{t("tools.lede")}</p>
        </div>

        <div className="lic-grid rv" style={{ "--edge": "1px solid rgba(255,255,255,.13)" } as React.CSSProperties}>
          <a
            className="lic lic--dark"
            href="/tools#planner"
            style={{
              background: "linear-gradient(165deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
              borderColor: "rgba(255,255,255,.14)",
              color: "var(--ivory)",
            }}
          >
            <div className="tool-card-head">
              <span className="tool-tag">01 · PLANNER</span>
            </div>
            <h3>{t("tools.1.t")}</h3>
            <p style={{ color: "var(--muted-inv)" }}>{t("tools.1.p")}</p>
            <span className="link-arrow">
              {t("tools.1.btn")}
              <i aria-hidden="true">→</i>
            </span>
          </a>

          <a
            className="lic lic--dark"
            href="/tools#calculator"
            style={{
              background: "linear-gradient(165deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
              borderColor: "rgba(255,255,255,.14)",
              color: "var(--ivory)",
            }}
          >
            <div className="tool-card-head">
              <span className="tool-tag">02 · CALCULATOR</span>
            </div>
            <h3>{t("tools.2.t")}</h3>
            <p style={{ color: "var(--muted-inv)" }}>{t("tools.2.p")}</p>
            <span className="link-arrow">
              {t("tools.2.btn")}
              <i aria-hidden="true">→</i>
            </span>
          </a>

          <a
            className="lic lic--dark"
            href="/tools#calendar"
            style={{
              background: "linear-gradient(165deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
              borderColor: "rgba(255,255,255,.14)",
              color: "var(--ivory)",
            }}
          >
            <div className="tool-card-head">
              <span className="tool-tag">03 · CALENDAR</span>
            </div>
            <h3>{t("tools.3.t")}</h3>
            <p style={{ color: "var(--muted-inv)" }}>{t("tools.3.p")}</p>
            <span className="link-arrow">
              {t("tools.3.btn")}
              <i aria-hidden="true">→</i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
