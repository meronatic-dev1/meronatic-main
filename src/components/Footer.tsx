"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface OfficeClock {
  cityKey: string;
  addrKey: string;
  timeZone: string;
  openHour: number;
  closeHour: number;
}

const OFFICES: OfficeClock[] = [
  {
    cityKey: "off.1.c",
    addrKey: "off.1.a",
    timeZone: "Asia/Riyadh",
    openHour: 8,
    closeHour: 18,
  },
  {
    cityKey: "off.2.c",
    addrKey: "off.2.a",
    timeZone: "Asia/Dubai",
    openHour: 8,
    closeHour: 18,
  },
  {
    cityKey: "off.3.c",
    addrKey: "off.3.a",
    timeZone: "Europe/Riga",
    openHour: 9,
    closeHour: 18,
  },
];

function LiveOfficeCard({
  office,
}: {
  office: OfficeClock;
}) {
  const { t, isRTL } = useLanguage();
  const [timeStr, setTimeStr] = useState("--:--");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: office.timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        const formatted = formatter.format(now);
        setTimeStr(formatted);

        // Check if office is currently open (Monday - Friday, during working hours)
        const dayFormatter = new Intl.DateTimeFormat("en-US", {
          timeZone: office.timeZone,
          weekday: "short",
        });
        const weekday = dayFormatter.format(now);
        const [hours] = formatted.split(":").map(Number);
        const isWeekend =
          office.timeZone.includes("Riyadh") || office.timeZone.includes("Dubai")
            ? weekday === "Fri" || weekday === "Sat"
            : weekday === "Sat" || weekday === "Sun";

        const open = !isWeekend && hours >= office.openHour && hours < office.closeHour;
        setIsOpen(open);
      } catch (err) {
        // Fallback
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, [office]);

  return (
    <div className="office">
      <b>{t(office.cityKey)}</b>
      <p dangerouslySetInnerHTML={{ __html: t(office.addrKey) }} />
      <div className="live" data-open={isOpen}>
        <span className="pip"></span>
        <span className="t">{timeStr}</span>
        <span className="st">
          {isOpen
            ? isRTL
              ? "مفتوح الآن"
              : "Open now"
            : isRTL
            ? "مغلق الآن"
            : "Closed now"}
        </span>
      </div>
    </div>
  );
}

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot-top">
          <div className="foot-brand">
            <a className="brand" href="/" aria-label="Meronatic Solutions Group — home">
              <svg className="brand-mark" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#F0C989" />
                    <stop offset="1" stopColor="#C08F3F" />
                  </linearGradient>
                </defs>
                <path
                  d="M22 3.5 38.5 13v19L22 41.5 5.5 32V13L22 3.5Z"
                  stroke="currentColor"
                  strokeOpacity=".28"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 30V16l9 8 9-8v14"
                  stroke="url(#bg2)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="13" cy="16" r="2.6" fill="#4FD1E8" />
                <circle cx="31" cy="16" r="2.6" fill="#4FD1E8" />
                <circle cx="22" cy="24" r="2.2" fill="url(#bg2)" />
              </svg>
              <span className="brand-txt">
                <b>Meronatic</b>
                <small>{t("brand.sub")}</small>
              </span>
            </a>
            <p>{t("foot.blurb")}</p>
            <div className="socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M3.6 5.8H1.2V15h2.4V5.8zM2.4 1A1.4 1.4 0 100 2.4 1.4 1.4 0 002.4 1zM15 9.6c0-2.6-1.4-3.9-3.3-3.9a2.9 2.9 0 00-2.6 1.4V5.8H6.7V15h2.4v-5c0-1.3.6-2 1.6-2s1.5.7 1.5 2v5H15z" />
                </svg>
              </a>
              <a href="/#contact" aria-label="Email">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="1" y="3" width="14" height="10" rx="1.6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M1.6 4L8 8.6 14.4 4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>{t("foot.company")}</h4>
            <ul>
              <li><a href="/about">{t("nav.about")}</a></li>
              <li><a href="/how-we-work">{t("nav.method")}</a></li>
              <li><a href="/results">{t("nav.results")}</a></li>
              <li><a href="/how-we-work#partners">{t("nav.partners")}</a></li>
              <li><a href="/#contact">{t("top.contact")}</a></li>
            </ul>
          </div>

          <div>
            <h4>{t("foot.caps")}</h4>
            <ul>
              <li><a href="/services">{t("nav.services")}</a></li>
              <li><a href="/markets">{t("nav.markets")}</a></li>
              <li><a href="/tools">{t("nav.tools")}</a></li>
              <li><a href="/tools#planner">{t("tools.1.t")}</a></li>
              <li><a href="/tools#calculator">{t("tools.2.t")}</a></li>
              <li><a href="/tools#calendar">{t("tools.3.t")}</a></li>
            </ul>
          </div>

          <div>
            <h4>{t("foot.coverage")}</h4>
            <ul>
              <li><a href="/markets">{t("mk.1.t")}</a></li>
              <li><a href="/markets">{t("mk.2.t")}</a></li>
              <li><a href="/markets">{t("foot.eu")}</a></li>
            </ul>
          </div>
        </div>

        {/* Live Clocks Offices */}
        <div className="offices">
          {OFFICES.map((off, idx) => (
            <LiveOfficeCard key={idx} office={off} />
          ))}
        </div>

        <div className="foot-bottom">
          <span>{t("foot.copy")}</span>
          <ul>
            <li><a href="#">{t("foot.privacy")}</a></li>
            <li><a href="#">{t("foot.terms")}</a></li>
            <li><a href="#">{t("foot.cookies")}</a></li>
            <li><a href="#">{t("foot.accessibility")}</a></li>
          </ul>
        </div>
        <p className="disclaimer">{t("foot.disclaimer")}</p>
      </div>
    </footer>
  );
}
