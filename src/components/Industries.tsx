"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Industries() {
  const { t } = useLanguage();

  return (
    <section className="band band--navy" id="industries">
      <div className="shell">
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("ind.eyebrow")}</p>
            <h2 className="d2">{t("ind.h")}</h2>
          </div>
          <p className="lede sh-aside">{t("ind.lede")}</p>
        </div>

        <div className="inds rv">
          <div className="ind">
            <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M6 25V9l8-5v21M14 25V13l8 4v8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M3 25h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <b>{t("in.1")}</b>
          </div>

          <div className="ind">
            <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M3 25h22M6 25V12l8-6 8 6v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11 25v-6h6v6" stroke="currentColor" strokeWidth="2" />
            </svg>
            <b>{t("in.2")}</b>
          </div>

          <div className="ind">
            <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="22" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M9 24h10M14 20v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <b>{t("in.3")}</b>
          </div>

          <div className="ind">
            <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M14 24S4 18 4 11a5.6 5.6 0 0110-3.4A5.6 5.6 0 0124 11c0 7-10 13-10 13z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <b>{t("in.4")}</b>
          </div>

          <div className="ind">
            <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect x="2" y="8" width="15" height="12" rx="1.6" stroke="currentColor" strokeWidth="2" />
              <path d="M17 12h5l4 4v4h-9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="8" cy="21.5" r="2.2" stroke="currentColor" strokeWidth="2" />
              <circle cx="21" cy="21.5" r="2.2" stroke="currentColor" strokeWidth="2" />
            </svg>
            <b>{t("in.5")}</b>
          </div>

          <div className="ind">
            <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M3 11l11-6 11 6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M6 11v10M12 11v10M16 11v10M22 11v10M3 24h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <b>{t("in.6")}</b>
          </div>

          <div className="ind">
            <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M4 9h20l-1.6 15H5.6L4 9z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M10 12V7a4 4 0 018 0v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <b>{t("in.7")}</b>
          </div>

          <div className="ind">
            <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M14 3l3.2 6.6 7.3 1-5.3 5.1 1.3 7.2L14 19.5 7.5 22.9l1.3-7.2-5.3-5.1 7.3-1L14 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <b>{t("in.8")}</b>
          </div>
        </div>
      </div>
    </section>
  );
}
