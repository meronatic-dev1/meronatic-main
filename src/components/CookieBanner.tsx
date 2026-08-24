"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("msg_cookie_consent");
    if (!consent) {
      // Small delay before showing
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("msg_cookie_consent", JSON.stringify({ necessary: true, analytics }));
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("msg_cookie_consent", JSON.stringify({ necessary: true, analytics: false }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="cc"
      id="cc"
      role="dialog"
      aria-modal="false"
      aria-label="Cookie choices"
    >
      <div className="cc-panel">
        <h3>{t("cc.h")}</h3>
        <p>{t("cc.p")}</p>

        <label className="cc-opt">
          <input type="checkbox" id="ccNec" checked disabled />
          <span>
            <b>{t("cc.nec.t")}</b> {t("cc.nec.d")}
          </span>
        </label>

        <label className="cc-opt">
          <input
            type="checkbox"
            id="ccAna"
            checked={analytics}
            onChange={(e) => setAnalytics(e.target.checked)}
          />
          <span>
            <b>{t("cc.ana.t")}</b> {t("cc.ana.d")}
          </span>
        </label>

        <div className="cc-actions">
          <button
            className="btn btn--gold"
            type="button"
            id="ccAccept"
            onClick={handleAccept}
          >
            {t("cc.accept")}
          </button>
          <button
            className="btn btn--ghost"
            type="button"
            id="ccReject"
            onClick={handleReject}
          >
            {t("cc.reject")}
          </button>
        </div>
      </div>
    </div>
  );
}
