"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function HowWeWorkPartners() {
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
          {/* Card 1: Delivered by Meronatic */}
          <div className="lic">
            <svg className="ic ico3d" viewBox="0 0 64 64" fill="none" aria-hidden="true" style={{ width: "56px", height: "56px", marginBottom: "1.25rem" }}>
              <ellipse cx="32.0" cy="56.0" rx="24.0" ry="6.0" fill="url(#shdL)" />
              <path d="M7.8 30.0 L32.0 44.0 L32.0 62.0 L7.8 48.0 Z" fill="url(#gL)" />
              <path d="M56.2 30.0 L32.0 44.0 L32.0 62.0 L56.2 48.0 Z" fill="url(#gR)" />
              <path d="M32.0 16.0 L56.2 30.0 L32.0 44.0 L7.8 30.0 Z" fill="url(#gT)" />
              <path d="M22 26.4 L29 33.4 L44 18" stroke="#FBE7BF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 30 L32 15 L58 30" stroke="#8A6024" strokeWidth="1.2" opacity=".45" fill="none" />
            </svg>
            <h3>{t("pt.1.t")}</h3>
            <p>{t("pt.1.p")}</p>
          </div>

          {/* Card 2: Delivered by licensed partners */}
          <div className="lic">
            <svg className="ic ico3d" viewBox="0 0 64 64" fill="none" aria-hidden="true" style={{ width: "56px", height: "56px", marginBottom: "1.25rem" }}>
              <ellipse cx="32.0" cy="56.0" rx="26.0" ry="6.0" fill="url(#shdL)" />
              <path d="M1.7 37.0 L19.0 47.0 L19.0 60.0 L1.7 50.0 Z" fill="url(#nL)" />
              <path d="M36.3 37.0 L19.0 47.0 L19.0 60.0 L36.3 50.0 Z" fill="url(#nR)" />
              <path d="M19.0 27.0 L36.3 37.0 L19.0 47.0 L1.7 37.0 Z" fill="url(#nT)" />
              <path d="M27.7 29.0 L45.0 39.0 L45.0 52.0 L27.7 42.0 Z" fill="url(#gL)" />
              <path d="M62.3 29.0 L45.0 39.0 L45.0 52.0 L62.3 42.0 Z" fill="url(#gR)" />
              <path d="M45.0 19.0 L62.3 29.0 L45.0 39.0 L27.7 29.0 Z" fill="url(#gT)" />
              <path d="M27 30 C33 24 33 24 38 20" stroke="#B9863F" strokeWidth="2.4" strokeLinecap="round" fill="none" />
              <circle cx="27" cy="30" r="3" fill="url(#nT)" />
              <circle cx="38" cy="20" r="3" fill="url(#gT)" />
            </svg>
            <h3>{t("pt.2.t")}</h3>
            <p>{t("pt.2.p")}</p>
          </div>

          {/* Card 3: Confirmed per engagement */}
          <div className="lic">
            <svg className="ic ico3d" viewBox="0 0 64 64" fill="none" aria-hidden="true" style={{ width: "56px", height: "56px", marginBottom: "1.25rem" }}>
              <ellipse cx="32.0" cy="58.0" rx="22.0" ry="6.0" fill="url(#shdL)" />
              <path d="M7.8 48.4 L32.0 62.4 L32.0 66.0 L7.8 52.0 Z" fill="url(#nL)" />
              <path d="M56.2 48.4 L32.0 62.4 L32.0 66.0 L56.2 52.0 Z" fill="url(#nR)" />
              <path d="M32.0 34.4 L56.2 48.4 L32.0 62.4 L7.8 48.4 Z" fill="url(#nT)" />
              <path d="M7.8 39.4 L32.0 53.4 L32.0 57.0 L7.8 43.0 Z" fill="url(#nL)" />
              <path d="M56.2 39.4 L32.0 53.4 L32.0 57.0 L56.2 43.0 Z" fill="url(#nR)" />
              <path d="M32.0 25.4 L56.2 39.4 L32.0 53.4 L7.8 39.4 Z" fill="url(#nT)" />
              <path d="M7.8 30.4 L32.0 44.4 L32.0 48.0 L7.8 34.0 Z" fill="url(#nL)" />
              <path d="M56.2 30.4 L32.0 44.4 L32.0 48.0 L56.2 34.0 Z" fill="url(#nR)" />
              <path d="M32.0 16.4 L56.2 30.4 L32.0 44.4 L7.8 30.4 Z" fill="url(#nT)" />
              <circle cx="44" cy="16" r="10" fill="url(#sphG)" />
              <circle cx="44" cy="16" r="10" fill="none" stroke="#8A6024" strokeWidth="1.1" opacity=".6" />
              <path d="M39.4 16.4 L42.8 19.8 L48.8 12.8" stroke="#33240B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3>{t("pt.3.t")}</h3>
            <p>{t("pt.3.p")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
