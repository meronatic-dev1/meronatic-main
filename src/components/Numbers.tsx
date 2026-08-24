"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Numbers() {
  const { t } = useLanguage();

  return (
    <section className="band band--ink">
      <div className="shell">
        <div className="nums rv">
          <div className="num">
            <span className="tag">{t("n.1.t")}</span>
            <b>3</b>
            <span>{t("n.1.s")}</span>
          </div>

          <div className="num">
            <span className="tag">{t("n.2.t")}</span>
            <b>7</b>
            <span>{t("n.2.s")}</span>
          </div>

          <div className="num">
            <span className="tag">{t("n.3.t")}</span>
            <b>3</b>
            <span>{t("n.3.s")}</span>
          </div>

          <div className="num">
            <span className="tag">{t("n.4.t")}</span>
            <b>1</b>
            <span>{t("n.4.s")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
