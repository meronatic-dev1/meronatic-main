"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CmdKModal } from "./CmdKModal";

export function Header() {
  const { lang, toggleLang, t, isRTL } = useLanguage();
  const [isStuck, setIsStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cmdkOpen, setCmdkOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsStuck(window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  // Global ⌘K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdkOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        if (cmdkOpen) setCmdkOpen(false);
        if (menuOpen) setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [cmdkOpen, menuOpen]);

  return (
    <>
      <a className="skip" href="#main">
        {t("a11y.skip")}
      </a>

      {/* Topbar */}
      <div className="topbar">
        <div className="inner shell">
          <span className="mono">{t("top.tag")}</span>
          <div className="topbar-links">
            <a href="/#partners">{t("top.licensing")}</a>
            <a href="/#contact">{t("top.contact")}</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`hdr ${isStuck ? "is-stuck" : ""}`} id="hdr">
        <div className="inner shell">
          <a className="brand" href="/" aria-label="Meronatic Solutions Group — home">
            <svg className="brand-mark" viewBox="0 0 44 44" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
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
                stroke="url(#bg1)"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="13" cy="16" r="2.6" fill="#4FD1E8" />
              <circle cx="31" cy="16" r="2.6" fill="#4FD1E8" />
              <circle cx="22" cy="24" r="2.2" fill="url(#bg1)" />
            </svg>
            <span className="brand-txt">
              <b>Meronatic</b>
              <small>{t("brand.sub")}</small>
            </span>
          </a>

          <nav aria-label="Primary">
            <ul className="nav">
              <li><a href="/about">{t("nav.about")}</a></li>
              <li><a href="/services">{t("nav.services")}</a></li>
              <li><a href="/markets">{t("nav.markets")}</a></li>
              <li><a href="/tools">{t("nav.tools")}</a></li>
              <li><a href="/how-we-work">{t("nav.method")}</a></li>
              <li><a href="/results">{t("nav.results")}</a></li>
            </ul>
          </nav>

          <div className="hdr-actions">
            <button
              className="cmdk-btn"
              id="cmdkBtn"
              type="button"
              aria-label={t("cmdk.btn")}
              onClick={() => setCmdkOpen(true)}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.7" />
                <path d="M10.8 10.8L14 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <span>{t("cmdk.btn")}</span>
              <span className="kbd" id="cmdkKey">⌘K</span>
            </button>

            <button
              className="lang"
              id="lang"
              type="button"
              onClick={toggleLang}
              aria-label={isRTL ? "Switch language to English" : "Switch language to Arabic"}
            >
              <span>{isRTL ? "English" : "العربية"}</span>
            </button>

            <a className="btn btn--gold hdr-cta" href="/#contact">
              <span>{t("cta.primary")}</span>
              <span className="arw" aria-hidden="true">{isRTL ? "←" : "→"}</span>
            </a>

            <button
              className="burger"
              id="burger"
              aria-expanded={menuOpen}
              aria-controls="drawer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className="drawer"
        id="drawer"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) {
            setMenuOpen(false);
          }
        }}
      >
        <div className="shell">
          <a href="/about">{t("nav.about")}</a>
          <a href="/services">{t("nav.services")}</a>
          <a href="/markets">{t("nav.markets")}</a>
          <a href="/tools">{t("nav.tools")}</a>
          <a href="/how-we-work">{t("nav.method")}</a>
          <a href="/results">{t("nav.results")}</a>
          <a href="/#industries">{t("nav.industries")}</a>
          <a href="/#partners">{t("nav.partners")}</a>
          <a href="/#contact">{t("top.contact")}</a>
          <a className="btn btn--gold" href="/#contact">
            <span>{t("cta.primary")}</span>
            <span className="arw" aria-hidden="true">{isRTL ? "←" : "→"}</span>
          </a>
        </div>
      </div>

      {/* CmdK Search Modal */}
      <CmdKModal isOpen={cmdkOpen} onClose={() => setCmdkOpen(false)} />
    </>
  );
}
