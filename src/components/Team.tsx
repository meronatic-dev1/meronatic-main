"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface TeamMember {
  initialsKey: string;
  nameKey: string;
  roleKey: string;
  bioKey: string;
  location: string;
  tagEn: string;
  tagAr: string;
  linkedin: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    initialsKey: "team.1.initials",
    nameKey: "team.1.name",
    roleKey: "team.1.role",
    bioKey: "team.1.bio",
    location: "Riyadh, KSA",
    tagEn: "MISA & RHQ Advisory",
    tagAr: "تراخيص الاستثمار والمقرات",
    linkedin: "https://linkedin.com",
  },
  {
    initialsKey: "team.2.initials",
    nameKey: "team.2.name",
    roleKey: "team.2.role",
    bioKey: "team.2.bio",
    location: "Dubai, UAE",
    tagEn: "Corporate & Mainland / FZ",
    tagAr: "الهيكلة والمناطق الحرة",
    linkedin: "https://linkedin.com",
  },
  {
    initialsKey: "team.3.initials",
    nameKey: "team.3.name",
    roleKey: "team.3.role",
    bioKey: "team.3.bio",
    location: "Riga, Latvia (EU)",
    tagEn: "EU Gateway & Compliance",
    tagAr: "بوابة الاتحاد الأوروبي والامتثال",
    linkedin: "https://linkedin.com",
  },
];

export function Team() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="band band--navy" id="team">
      <div className="shell">
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("team.eyebrow")}</p>
            <h2 className="d2">{t("team.h")}</h2>
          </div>
          <p className="lede sh-aside">{t("team.lede")}</p>
        </div>

        <div className="lic-grid rv" style={{ marginTop: "var(--s4)" }}>
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="lic lic--dark"
              style={{
                background: "linear-gradient(180deg, rgba(16, 28, 48, 0.95) 0%, rgba(10, 18, 32, 0.95) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--r-lg)",
                padding: "var(--s4) var(--s3)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "18px",
                position: "relative",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    className="avatar"
                    style={{
                      width: "58px",
                      height: "58px",
                      fontSize: "1.15rem",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        index === 0
                          ? "linear-gradient(135deg, rgba(223, 168, 92, 0.25), rgba(185, 134, 63, 0.45))"
                          : index === 1
                          ? "linear-gradient(135deg, rgba(79, 209, 232, 0.25), rgba(27, 124, 147, 0.45))"
                          : "linear-gradient(135deg, rgba(230, 238, 247, 0.2), rgba(66, 96, 127, 0.45))",
                      border:
                        index === 0
                          ? "1.5px solid rgba(223, 168, 92, 0.6)"
                          : index === 1
                          ? "1.5px solid rgba(79, 209, 232, 0.6)"
                          : "1.5px solid rgba(166, 187, 209, 0.6)",
                      color: index === 0 ? "var(--gold)" : index === 1 ? "var(--cyan)" : "#E6EEF7",
                      fontWeight: 700,
                      fontFamily: "var(--mono)",
                      boxShadow: "0 8px 24px -6px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    {t(member.initialsKey)}
                  </div>

                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "var(--mono)",
                      padding: "3px 10px",
                      borderRadius: "6px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "var(--muted-inv)",
                    }}
                  >
                    {member.location}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.2rem",
                    color: "var(--ivory)",
                    marginBottom: "4px",
                    fontWeight: 600,
                  }}
                >
                  {t(member.nameKey)}
                </h3>

                <p
                  style={{
                    fontSize: "0.86rem",
                    fontWeight: 600,
                    color: "var(--gold)",
                    marginBottom: "12px",
                    fontFamily: "var(--mono)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {t(member.roleKey)}
                </p>

                <p
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: "1.55",
                    color: "var(--muted-inv)",
                  }}
                >
                  {t(member.bioKey)}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "14px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  marginTop: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--cyan)",
                    fontFamily: "var(--mono)",
                  }}
                >
                  {isRTL ? member.tagAr : member.tagEn}
                </span>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn profile for ${t(member.nameKey)}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    color: "var(--muted-inv)",
                    fontSize: "0.75rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-inv)")}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M3.6 5.8H1.2V15h2.4V5.8zM2.4 1A1.4 1.4 0 100 2.4 1.4 1.4 0 002.4 1zM15 9.6c0-2.6-1.4-3.9-3.3-3.9a2.9 2.9 0 00-2.6 1.4V5.8H6.7V15h2.4v-5c0-1.3.6-2 1.6-2s1.5.7 1.5 2v5H15z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
