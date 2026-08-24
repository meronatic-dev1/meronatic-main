"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Partners() {
  const { t } = useLanguage();

  return (
    <section className="band band--light on-light" id="partners">
      <div className="shell">
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("pt.eyebrow")}</p>
            <h2 className="d2">{t("pt.h")}</h2>
          </div>
          <p className="lede sh-aside">{t("pt.lede")}</p>
        </div>

        <div className="lic-grid rv">
          <div className="lic">
            <svg className="ic" viewBox="0 0 38 38" fill="none" aria-hidden="true">
              <path d="M19 4l14 6.5v10c0 8-6 13.7-14 15.5-8-1.8-14-7.5-14-15.5v-10L19 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M13 19.5l4.2 4.2L26 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3>{t("pt.1.t")}</h3>
            <p>{t("pt.1.p")}</p>
          </div>

          <div className="lic">
            <svg className="ic" viewBox="0 0 38 38" fill="none" aria-hidden="true">
              <circle cx="13" cy="14" r="5.5" stroke="currentColor" strokeWidth="2" />
              <circle cx="26" cy="14" r="5.5" stroke="currentColor" strokeWidth="2" />
              <path d="M4 31c0-4.4 4-8 9-8s9 3.6 9 8M17 31c0-4.4 4-8 9-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h3>{t("pt.2.t")}</h3>
            <p>{t("pt.2.p")}</p>
          </div>

          <div className="lic">
            <svg className="ic" viewBox="0 0 38 38" fill="none" aria-hidden="true">
              <rect x="6" y="7" width="26" height="26" rx="3" stroke="currentColor" strokeWidth="2" />
              <path d="M13 16h12M13 22h12M13 28h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M13 4v6M25 4v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h3>{t("pt.3.t")}</h3>
            <p>{t("pt.3.p")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
