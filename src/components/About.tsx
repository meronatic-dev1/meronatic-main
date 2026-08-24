"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section className="band band--light on-light" id="about">
      <div className="shell">
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("about.eyebrow")}</p>
            <h2 className="d2">{t("about.h")}</h2>
          </div>
          <p className="lede sh-aside">{t("about.lede")}</p>
        </div>

        <div className="pillars rv">
          <div className="pillar">
            <svg className="ic ico3d" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <ellipse cx="32.0" cy="56.0" rx="26.0" ry="7.0" fill="url(#shdL)" />
              <path d="M1.6 32.0 L12.0 38.0 L12.0 46.0 L1.6 40.0 Z" fill="url(#nL)" />
              <path d="M22.4 32.0 L12.0 38.0 L12.0 46.0 L22.4 40.0 Z" fill="url(#nR)" />
              <path d="M12.0 26.0 L22.4 32.0 L12.0 38.0 L1.6 32.0 Z" fill="url(#nT)" />
              <path d="M41.6 32.0 L52.0 38.0 L52.0 46.0 L41.6 40.0 Z" fill="url(#nL)" />
              <path d="M62.4 32.0 L52.0 38.0 L52.0 46.0 L62.4 40.0 Z" fill="url(#nR)" />
              <path d="M52.0 26.0 L62.4 32.0 L52.0 38.0 L41.6 32.0 Z" fill="url(#nT)" />
              <path d="M21.6 50.0 L32.0 56.0 L32.0 64.0 L21.6 58.0 Z" fill="url(#nL)" />
              <path d="M42.4 50.0 L32.0 56.0 L32.0 64.0 L42.4 58.0 Z" fill="url(#nR)" />
              <path d="M32.0 44.0 L42.4 50.0 L32.0 56.0 L21.6 50.0 Z" fill="url(#nT)" />
              <path d="M18 34 L30 28 M46 34 L34 28 M32 48 L32 38" stroke="#B9863F" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M16.4 18.0 L32.0 27.0 L32.0 39.0 L16.4 30.0 Z" fill="url(#gL)" />
              <path d="M47.6 18.0 L32.0 27.0 L32.0 39.0 L47.6 30.0 Z" fill="url(#gR)" />
              <path d="M32.0 9.0 L47.6 18.0 L32.0 27.0 L16.4 18.0 Z" fill="url(#gT)" />
            </svg>
            <h3>{t("ab.1.t")}</h3>
            <p>{t("ab.1.p")}</p>
          </div>

          <div className="pillar">
            <svg className="ic ico3d" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <ellipse cx="32.0" cy="56.0" rx="24.0" ry="6.0" fill="url(#shdL)" />
              <ellipse cx="32" cy="32" rx="27" ry="11" fill="none" stroke="#B9863F" strokeWidth="2" opacity=".55" />
              <circle cx="32" cy="32" r="17" fill="url(#sphN)" />
              <path d="M15 32 h34 M32 15 c5.4 5.6 8 10.9 8 17 s-2.6 11.4-8 17 c-5.4-5.6-8-10.9-8-17 s2.6-11.4 8-17Z" stroke="#8FB6DA" strokeWidth="1.3" opacity=".55" fill="none" />
              <circle cx="59" cy="32" r="4" fill="url(#gT)" />
              <circle cx="5" cy="32" r="4" fill="url(#gT)" />
            </svg>
            <h3>{t("ab.2.t")}</h3>
            <p>{t("ab.2.p")}</p>
          </div>

          <div className="pillar">
            <svg className="ic ico3d" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <ellipse cx="32.0" cy="58.0" rx="22.0" ry="6.0" fill="url(#shdL)" />
              <path d="M32 6 L52 14 v16 c0 12-9 19.6-20 22.6 C21 49.6 12 42 12 30 V14 Z" fill="url(#nL)" />
              <path d="M32 6 L52 14 v16 c0 12-9 19.6-20 22.6 Z" fill="url(#nR)" />
              <path d="M32 10.6 L47.6 16.8 v13 c0 9.4-6.8 15.6-15.6 18.2 Z" fill="url(#nT)" opacity=".55" />
              <path d="M23.6 30.4 L29.6 36.4 L41.6 22.6" stroke="url(#gT)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3>{t("ab.3.t")}</h3>
            <p>{t("ab.3.p")}</p>
          </div>

          <div className="pillar">
            <svg className="ic ico3d" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <ellipse cx="32.0" cy="58.0" rx="26.0" ry="7.0" fill="url(#shdL)" />
              <path d="M1.7 44.0 L13.0 50.5 L13.0 58.5 L1.7 52.0 Z" fill="url(#nL)" />
              <path d="M24.3 44.0 L13.0 50.5 L13.0 58.5 L24.3 52.0 Z" fill="url(#nR)" />
              <path d="M13.0 37.5 L24.3 44.0 L13.0 50.5 L1.7 44.0 Z" fill="url(#nT)" />
              <path d="M20.7 36.0 L32.0 42.5 L32.0 58.5 L20.7 52.0 Z" fill="url(#nL)" />
              <path d="M43.3 36.0 L32.0 42.5 L32.0 58.5 L43.3 52.0 Z" fill="url(#nR)" />
              <path d="M32.0 29.5 L43.3 36.0 L32.0 42.5 L20.7 36.0 Z" fill="url(#nT)" />
              <path d="M39.7 27.0 L51.0 33.5 L51.0 58.5 L39.7 52.0 Z" fill="url(#gL)" />
              <path d="M62.3 27.0 L51.0 33.5 L51.0 58.5 L62.3 52.0 Z" fill="url(#gR)" />
              <path d="M51.0 20.5 L62.3 27.0 L51.0 33.5 L39.7 27.0 Z" fill="url(#gT)" />
              <path d="M12 30 L30 22 L50 10" stroke="#B9863F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M43.6 9.2 L51.4 8 L50.6 15.8 Z" fill="url(#gT)" />
            </svg>
            <h3>{t("ab.4.t")}</h3>
            <p>{t("ab.4.p")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
