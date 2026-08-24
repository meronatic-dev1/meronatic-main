"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Markets() {
  const { t } = useLanguage();

  return (
    <section className="band band--navy" id="markets">
      <div className="shell">
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("markets.eyebrow")}</p>
            <h2 className="d2">{t("markets.h")}</h2>
          </div>
          <p className="lede sh-aside">{t("markets.lede")}</p>
        </div>

        <div className="markets rv">
          <article className="market">
            <div className="mk-stage" aria-hidden="true">
              <div className="mk-planes">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="mk-code">KSA</span>
            </div>
            <div className="mk-body">
              <span className="tag">{t("mk.1.tag")}</span>
              <h3>{t("mk.1.t")}</h3>
              <p>{t("mk.1.p")}</p>
            </div>
          </article>

          <article className="market">
            <div className="mk-stage" aria-hidden="true">
              <div className="mk-planes">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="mk-code">UAE</span>
            </div>
            <div className="mk-body">
              <span className="tag">{t("mk.2.tag")}</span>
              <h3>{t("mk.2.t")}</h3>
              <p>{t("mk.2.p")}</p>
            </div>
          </article>

          <article className="market">
            <div className="mk-stage" aria-hidden="true">
              <div className="mk-planes">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="mk-code">EU</span>
            </div>
            <div className="mk-body">
              <span className="tag">{t("mk.3.tag")}</span>
              <h3>{t("mk.3.t")}</h3>
              <p>{t("mk.3.p")}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
