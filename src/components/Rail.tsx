"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Rail() {
  const { t } = useLanguage();

  return (
    <div className="rail">
      <ul className="shell">
        <li>
          <b>{t("rail.1.v")}</b>
          <span>{t("rail.1.l")}</span>
        </li>
        <li>
          <b>{t("rail.2.v")}</b>
          <span>{t("rail.2.l")}</span>
        </li>
        <li>
          <b>{t("rail.3.v")}</b>
          <span>{t("rail.3.l")}</span>
        </li>
        <li>
          <b>{t("rail.4.v")}</b>
          <span>{t("rail.4.l")}</span>
        </li>
      </ul>
    </div>
  );
}
