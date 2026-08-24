"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { GlobeCanvas } from "./GlobeCanvas";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="shell">
        <div className="hero-copy">
          <p className="mono hero-eyebrow">
            <span className="pulse" aria-hidden="true"></span>
            <span>{t("hero.eyebrow")}</span>
          </p>
          <h1 className="d1">
            <span>{t("hero.h1a")}</span> <em>{t("hero.h1b")}</em>
          </h1>
          <p className="lede hero-lede">{t("hero.lede")}</p>
          <div className="hero-cta">
            <a className="btn btn--gold" href="#contact">
              <span>{t("cta.primary")}</span>
              <span className="arw" aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost" href="#services">
              <span>{t("cta.secondary")}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="globe-wrap" aria-hidden="true">
        <GlobeCanvas />
        <ul className="globe-legend">
          <li><span className="d"></span>Riyadh</li>
          <li><span className="d"></span>Dubai</li>
          <li><span className="d"></span>Riga · EU</li>
        </ul>
      </div>
    </section>
  );
}
