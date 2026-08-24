"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTilt } from "@/hooks/useTilt";

interface ServiceItemProps {
  n: string;
  titleKey: string;
  descKey: string;
  icon: React.ReactNode;
}

function ServiceCard({ n, titleKey, descKey, icon }: ServiceItemProps) {
  const { t } = useLanguage();
  const tiltRef = useTilt<HTMLElement>();

  return (
    <article className="svc tilt" ref={tiltRef}>
      {icon}
      <span className="svc-n">{n}</span>
      <h3>{t(titleKey)}</h3>
      <p>{t(descKey)}</p>
      <a className="link-arrow" href="#contact">
        <span>{t("cta.view")}</span>
        <i aria-hidden="true">→</i>
      </a>
    </article>
  );
}

export function Services() {
  const { t } = useLanguage();

  return (
    <section className="band band--ink" id="services">
      <div className="shell">
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("services.eyebrow")}</p>
            <h2 className="d2">{t("services.h")}</h2>
          </div>
          <p className="lede sh-aside">{t("services.lede")}</p>
        </div>

        <div className="svc-grid rv" id="svcGrid">
          <ServiceCard
            n="01"
            titleKey="s.1.t"
            descKey="s.1.p"
            icon={
              <svg className="svc-ic ico3d" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <ellipse cx="32.0" cy="56.0" rx="24.0" ry="7.0" fill="url(#glowC)" />
                <path d="M6.0 35.0 L32.0 50.0 L32.0 59.0 L6.0 44.0 Z" fill="url(#mL)" />
                <path d="M58.0 35.0 L32.0 50.0 L32.0 59.0 L58.0 44.0 Z" fill="url(#mR)" />
                <path d="M32.0 20.0 L58.0 35.0 L32.0 50.0 L6.0 35.0 Z" fill="url(#mT)" />
                <path d="M18.1 21.0 L32.0 29.0 L32.0 43.0 L18.1 35.0 Z" fill="url(#cL)" />
                <path d="M45.9 21.0 L32.0 29.0 L32.0 43.0 L45.9 35.0 Z" fill="url(#cR)" />
                <path d="M32.0 13.0 L45.9 21.0 L32.0 29.0 L18.1 21.0 Z" fill="url(#cT)" />
                <path d="M30.5 21 L30.5 12 L40 14.6 L30.5 17.2 Z" fill="url(#gT)" />
                <rect x="29.6" y="10" width="1.9" height="14" rx=".9" fill="url(#gR)" />
                <path d="M40 30 L45.9 26.6 M40 34.6 L45.9 31.2" stroke="url(#gT)" strokeWidth="1.6" strokeLinecap="round" opacity=".8" />
              </svg>
            }
          />

          <ServiceCard
            n="02"
            titleKey="s.2.t"
            descKey="s.2.p"
            icon={
              <svg className="svc-ic ico3d" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <ellipse cx="32.0" cy="54.0" rx="26.0" ry="7.0" fill="url(#glowC)" />
                <g transform="translate(16.0 44.0) scale(0.72)">
                  <path d="M-7.5 2 L-7.5 -10 Q-7.5 -18 0 -18 Q7.5 -18 7.5 -10 L7.5 2 Q0 5.4 -7.5 2 Z" fill="url(#mR)" />
                  <path d="M-7.5 -10 Q-7.5 -18 0 -18 L0 4.2 Q-4.2 3.6 -7.5 2 Z" fill="url(#mL)" />
                  <circle cx="0" cy="-25" r="6.2" fill="url(#mT)" />
                  <circle cx="-2" cy="-27" r="2.2" fill="#fff" opacity=".28" />
                </g>
                <g transform="translate(48.0 44.0) scale(0.72)">
                  <path d="M-7.5 2 L-7.5 -10 Q-7.5 -18 0 -18 Q7.5 -18 7.5 -10 L7.5 2 Q0 5.4 -7.5 2 Z" fill="url(#mR)" />
                  <path d="M-7.5 -10 Q-7.5 -18 0 -18 L0 4.2 Q-4.2 3.6 -7.5 2 Z" fill="url(#mL)" />
                  <circle cx="0" cy="-25" r="6.2" fill="url(#mT)" />
                  <circle cx="-2" cy="-27" r="2.2" fill="#fff" opacity=".28" />
                </g>
                <g transform="translate(32.0 54.0) scale(1.00)">
                  <path d="M-7.5 2 L-7.5 -10 Q-7.5 -18 0 -18 Q7.5 -18 7.5 -10 L7.5 2 Q0 5.4 -7.5 2 Z" fill="url(#gR)" />
                  <path d="M-7.5 -10 Q-7.5 -18 0 -18 L0 4.2 Q-4.2 3.6 -7.5 2 Z" fill="url(#gL)" />
                  <circle cx="0" cy="-25" r="6.2" fill="url(#gT)" />
                  <circle cx="-2" cy="-27" r="2.2" fill="#fff" opacity=".28" />
                </g>
              </svg>
            }
          />

          <ServiceCard
            n="03"
            titleKey="s.3.t"
            descKey="s.3.p"
            icon={
              <svg className="svc-ic ico3d" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <ellipse cx="32.0" cy="58.0" rx="24.0" ry="6.0" fill="url(#glowC)" />
                <path d="M6.0 48.5 L32.0 63.5 L32.0 67.0 L6.0 52.0 Z" fill="url(#mL)" />
                <path d="M58.0 48.5 L32.0 63.5 L32.0 67.0 L58.0 52.0 Z" fill="url(#mR)" />
                <path d="M32.0 33.5 L58.0 48.5 L32.0 63.5 L6.0 48.5 Z" fill="url(#mT)" />
                <path d="M6.0 40.5 L32.0 55.5 L32.0 59.0 L6.0 44.0 Z" fill="url(#mL)" />
                <path d="M58.0 40.5 L32.0 55.5 L32.0 59.0 L58.0 44.0 Z" fill="url(#mR)" />
                <path d="M32.0 25.5 L58.0 40.5 L32.0 55.5 L6.0 40.5 Z" fill="url(#mT)" />
                <path d="M6.0 32.5 L32.0 47.5 L32.0 51.0 L6.0 36.0 Z" fill="url(#cL)" />
                <path d="M58.0 32.5 L32.0 47.5 L32.0 51.0 L58.0 36.0 Z" fill="url(#cR)" />
                <path d="M32.0 17.5 L58.0 32.5 L32.0 47.5 L6.0 32.5 Z" fill="url(#cT)" />
                <circle cx="46" cy="17" r="11" fill="url(#sphG)" />
                <circle cx="46" cy="17" r="11" fill="none" stroke="#FBE7BF" strokeWidth="1.2" opacity=".55" />
                <path d="M41 17.4 L44.6 21 L51.2 13.6" stroke="#33240B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />

          <ServiceCard
            n="04"
            titleKey="s.4.t"
            descKey="s.4.p"
            icon={
              <svg className="svc-ic ico3d" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <ellipse cx="32.0" cy="56.0" rx="25.0" ry="7.0" fill="url(#glowC)" />
                <path d="M6.0 46.0 L32.0 61.0 L32.0 65.0 L6.0 50.0 Z" fill="url(#mL)" />
                <path d="M58.0 46.0 L32.0 61.0 L32.0 65.0 L58.0 50.0 Z" fill="url(#mR)" />
                <path d="M32.0 31.0 L58.0 46.0 L32.0 61.0 L6.0 46.0 Z" fill="url(#mT)" />
                <path d="M6 42.5 L32 27.5 L58 42.5" stroke="url(#cT)" strokeWidth="1.6" opacity=".5" fill="none" />
                <ellipse cx="38.0" cy="27.4" rx="12.0" ry="6.0" fill="url(#gL)" />
                <rect x="26.0" y="24.0" width="24.0" height="3.4" fill="url(#gL)" />
                <ellipse cx="38.0" cy="24.0" rx="12.0" ry="6.0" fill="url(#gT)" />
                <ellipse cx="38.0" cy="20.4" rx="12.0" ry="6.0" fill="url(#gL)" />
                <rect x="26.0" y="17.0" width="24.0" height="3.4" fill="url(#gL)" />
                <ellipse cx="38.0" cy="17.0" rx="12.0" ry="6.0" fill="url(#gT)" />
                <ellipse cx="38.0" cy="13.4" rx="12.0" ry="6.0" fill="url(#gL)" />
                <rect x="26.0" y="10.0" width="24.0" height="3.4" fill="url(#gL)" />
                <ellipse cx="38.0" cy="10.0" rx="12.0" ry="6.0" fill="url(#gT)" />
                <ellipse cx="34" cy="9" rx="4" ry="2" fill="#fff" opacity=".3" />
              </svg>
            }
          />

          <ServiceCard
            n="05"
            titleKey="s.5.t"
            descKey="s.5.p"
            icon={
              <svg className="svc-ic ico3d" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <ellipse cx="32.0" cy="54.0" rx="22.0" ry="6.0" fill="url(#glowC)" />
                <path d="M12.9 47.0 L32.0 58.0 L32.0 61.0 L12.9 50.0 Z" fill="url(#mL)" />
                <path d="M51.1 47.0 L32.0 58.0 L32.0 61.0 L51.1 50.0 Z" fill="url(#mR)" />
                <path d="M32.0 36.0 L51.1 47.0 L32.0 58.0 L12.9 47.0 Z" fill="url(#mT)" />
                <path d="M21.6 10 L42.4 22 L42.4 42 L21.6 30 Z" fill="url(#cL)" />
                <path d="M23.6 13.6 L40.4 23.3 L40.4 38.6 L23.6 28.9 Z" fill="url(#cR)" opacity=".92" />
                <path d="M23.6 13.6 L40.4 23.3 L23.6 24.4 Z" fill="#BAF3FD" opacity=".22" />
                <path d="M32 41 L32 47" stroke="url(#mR)" strokeWidth="3" strokeLinecap="round" />
                <path d="M40.2 -3.0 L48.0 1.5 L48.0 8.5 L40.2 4.0 Z" fill="url(#gL)" />
                <path d="M55.8 -3.0 L48.0 1.5 L48.0 8.5 L55.8 4.0 Z" fill="url(#gR)" />
                <path d="M48.0 -7.5 L55.8 -3.0 L48.0 1.5 L40.2 -3.0 Z" fill="url(#gT)" />
                <path d="M42.4 26 L46 20" stroke="url(#gT)" strokeWidth="1.4" strokeDasharray="2 2.6" opacity=".8" />
              </svg>
            }
          />

          <ServiceCard
            n="06"
            titleKey="s.6.t"
            descKey="s.6.p"
            icon={
              <svg className="svc-ic ico3d" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <ellipse cx="32.0" cy="56.0" rx="26.0" ry="7.0" fill="url(#glowC)" />
                <path d="M9.5 39.0 L37.2 55.0 L37.2 63.0 L9.5 47.0 Z" fill="url(#mL)" />
                <path d="M54.5 45.0 L37.2 55.0 L37.2 63.0 L54.5 53.0 Z" fill="url(#mR)" />
                <path d="M26.8 29.0 L54.5 45.0 L37.2 55.0 L9.5 39.0 Z" fill="url(#mT)" />
                <ellipse cx="20.0" cy="34.0" rx="8.0" ry="4.0" fill="url(#cR)" />
                <rect x="12.0" y="19.0" width="16.0" height="15.0" fill="url(#cR)" />
                <ellipse cx="20.0" cy="19.0" rx="8.0" ry="4.0" fill="url(#cT)" />
                <ellipse cx="38.0" cy="30.0" rx="7.0" ry="3.5" fill="url(#cR)" />
                <rect x="31.0" y="17.0" width="14.0" height="13.0" fill="url(#cR)" />
                <ellipse cx="38.0" cy="17.0" rx="7.0" ry="3.5" fill="url(#cT)" />
                <path d="M43.8 15.0 L50.0 18.6 L50.0 33.6 L43.8 30.0 Z" fill="url(#gL)" />
                <path d="M56.2 15.0 L50.0 18.6 L50.0 33.6 L56.2 30.0 Z" fill="url(#gR)" />
                <path d="M50.0 11.4 L56.2 15.0 L50.0 18.6 L43.8 15.0 Z" fill="url(#gT)" />
                <ellipse cx="20" cy="19" rx="8" ry="4" fill="#BAF3FD" opacity=".25" />
              </svg>
            }
          />

          <ServiceCard
            n="07"
            titleKey="s.7.t"
            descKey="s.7.p"
            icon={
              <svg className="svc-ic ico3d" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <ellipse cx="32.0" cy="56.0" rx="26.0" ry="7.0" fill="url(#glowC)" />
                <path d="M0.1 41.0 L14.0 49.0 L14.0 60.0 L0.1 52.0 Z" fill="url(#mL)" />
                <path d="M27.9 41.0 L14.0 49.0 L14.0 60.0 L27.9 52.0 Z" fill="url(#mR)" />
                <path d="M14.0 33.0 L27.9 41.0 L14.0 49.0 L0.1 41.0 Z" fill="url(#mT)" />
                <path d="M36.1 43.0 L50.0 51.0 L50.0 60.0 L36.1 52.0 Z" fill="url(#mL)" />
                <path d="M63.9 43.0 L50.0 51.0 L50.0 60.0 L63.9 52.0 Z" fill="url(#mR)" />
                <path d="M50.0 35.0 L63.9 43.0 L50.0 51.0 L36.1 43.0 Z" fill="url(#mT)" />
                <path d="M14.7 30.0 L32.0 40.0 L32.0 54.0 L14.7 44.0 Z" fill="url(#gL)" />
                <path d="M49.3 30.0 L32.0 40.0 L32.0 54.0 L49.3 44.0 Z" fill="url(#gR)" />
                <path d="M32.0 20.0 L49.3 30.0 L32.0 40.0 L14.7 30.0 Z" fill="url(#gT)" />
                <circle cx="32" cy="14" r="8.6" fill="url(#sphG)" />
                <path d="M28.2 14.2 L31.2 17.2 L36 11.4" stroke="#33240B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
