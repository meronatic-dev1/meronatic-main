"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface CredentialItem {
  tagKey: string;
  numKey: string;
  descKey: string;
  jurisdiction: string;
}

const CREDENTIALS: CredentialItem[] = [
  {
    tagKey: "cred.1.tag",
    numKey: "cred.1.num",
    descKey: "cred.1.desc",
    jurisdiction: "KSA",
  },
  {
    tagKey: "cred.2.tag",
    numKey: "cred.2.num",
    descKey: "cred.2.desc",
    jurisdiction: "UAE",
  },
  {
    tagKey: "cred.3.tag",
    numKey: "cred.3.num",
    descKey: "cred.3.desc",
    jurisdiction: "EU",
  },
  {
    tagKey: "cred.4.tag",
    numKey: "cred.4.num",
    descKey: "cred.4.desc",
    jurisdiction: "GLOBAL",
  },
];

export function Credentials() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="band band--ink" id="credentials">
      <div className="shell">
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("cred.eyebrow")}</p>
            <h2 className="d2">{t("cred.h")}</h2>
          </div>
          <p className="lede sh-aside">{t("cred.lede")}</p>
        </div>

        <div className="nums rv" style={{ marginTop: "var(--s4)" }}>
          {CREDENTIALS.map((item, index) => (
            <div
              key={index}
              className="num"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "4px",
                }}
              >
                <span className="tag" style={{ margin: 0 }}>
                  {t(item.tagKey)}
                </span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontFamily: "var(--mono)",
                    color: "var(--cyan)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {item.jurisdiction}
                </span>
              </div>

              <b
                style={{
                  fontSize: "1.08rem",
                  fontFamily: "var(--mono)",
                  WebkitTextFillColor: "var(--ivory)",
                  color: "var(--ivory)",
                  letterSpacing: "0.02em",
                  wordBreak: "break-word",
                }}
              >
                {t(item.numKey)}
              </b>

              <span
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted-inv)",
                  lineHeight: "1.4",
                }}
              >
                {t(item.descKey)}
              </span>
            </div>
          ))}
        </div>

        {/* Verification note */}
        <div
          style={{
            marginTop: "var(--s3)",
            padding: "12px 18px",
            borderRadius: "var(--r)",
            background: "rgba(79, 209, 232, 0.04)",
            border: "1px solid rgba(79, 209, 232, 0.15)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--cyan)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{ flexShrink: 0 }}
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <p
            style={{
              margin: 0,
              fontSize: "0.8rem",
              color: "var(--muted-inv)",
              lineHeight: "1.45",
            }}
          >
            {isRTL
              ? "يتم تزويد جهات التدقيق وإدارات المشتريات بحزم التوثيق الرسمية كاملة والشهادات المعتمدة عند طلب تقديم العروض أو بدء التعاقد."
              : "Procurement and compliance verification packs with certificates of incorporation and policy schedules are provided on engagement."}
          </p>
        </div>
      </div>
    </section>
  );
}
