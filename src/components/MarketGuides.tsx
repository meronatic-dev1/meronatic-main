"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type GuideTab = "ksa" | "uae" | "eu";

export function MarketGuides() {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<GuideTab>("ksa");

  return (
    <section className="band band--navy" id="guides" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
      <div className="shell">
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("mg.eyebrow")}</p>
            <h2 className="d2">{t("mg.h")}</h2>
          </div>
          <p className="lede sh-aside">{t("mg.lede")}</p>
        </div>

        {/* Tab Navigation */}
        <div
          className="rv"
          style={{
            display: "flex",
            gap: "10px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: "16px",
            marginBottom: "32px",
            overflowX: "auto",
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab("ksa")}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              background: activeTab === "ksa" ? "rgba(240, 201, 137, 0.15)" : "transparent",
              border: activeTab === "ksa" ? "1px solid rgba(240, 201, 137, 0.4)" : "1px solid transparent",
              color: activeTab === "ksa" ? "var(--gold-2)" : "var(--muted-inv)",
              fontWeight: activeTab === "ksa" ? 600 : 400,
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#DFA85C",
              }}
            />
            {t("mg.ksa.tab")}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("uae")}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              background: activeTab === "uae" ? "rgba(79, 209, 232, 0.15)" : "transparent",
              border: activeTab === "uae" ? "1px solid rgba(79, 209, 232, 0.4)" : "1px solid transparent",
              color: activeTab === "uae" ? "var(--cyan)" : "var(--muted-inv)",
              fontWeight: activeTab === "uae" ? 600 : 400,
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#57D0E7",
              }}
            />
            {t("mg.uae.tab")}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("eu")}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              background: activeTab === "eu" ? "rgba(166, 187, 209, 0.15)" : "transparent",
              border: activeTab === "eu" ? "1px solid rgba(166, 187, 209, 0.4)" : "1px solid transparent",
              color: activeTab === "eu" ? "var(--ivory)" : "var(--muted-inv)",
              fontWeight: activeTab === "eu" ? 600 : 400,
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#A6BBD1",
              }}
            />
            {t("mg.eu.tab")}
          </button>
        </div>

        {/* Tab Content Panes */}
        <div className="rv">
          {activeTab === "ksa" && (
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(240, 201, 137, 0.2)",
                borderRadius: "var(--r-lg)",
                padding: "clamp(24px, 4vw, 40px)",
                display: "grid",
                gap: "28px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="tag" style={{ background: "rgba(240, 201, 137, 0.12)", color: "var(--gold-2)", border: "1px solid rgba(240, 201, 137, 0.3)" }}>
                    {t("mg.ksa.tag")}
                  </span>
                  <h3 style={{ fontSize: "1.75rem", marginBlockStart: "12px", color: "var(--ivory)" }}>
                    {t("mg.ksa.title")}
                  </h3>
                </div>
                <a className="btn btn--gold" href="/#contact">
                  <span>{t("cta.primary")}</span>
                  <span className="arw" aria-hidden="true">{isRTL ? "←" : "→"}</span>
                </a>
              </div>

              <p style={{ fontSize: "1.05rem", color: "var(--muted-inv)", lineHeight: "1.6" }}>
                {t("mg.ksa.p1")}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                <div style={{ background: "rgba(0, 0, 0, 0.25)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <h4 style={{ fontSize: "0.95rem", color: "var(--gold)", marginBottom: "10px", fontFamily: "var(--mono)" }}>
                    {t("mg.ksa.auth.t")}
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--ivory)", lineHeight: "1.6" }}>
                    {t("mg.ksa.auth.list")}
                  </p>
                </div>

                <div style={{ background: "rgba(0, 0, 0, 0.25)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <h4 style={{ fontSize: "0.95rem", color: "var(--gold)", marginBottom: "10px", fontFamily: "var(--mono)" }}>
                    {t("mg.ksa.struct.t")}
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--ivory)", lineHeight: "1.6" }}>
                    {t("mg.ksa.struct.list")}
                  </p>
                </div>

                <div style={{ background: "rgba(0, 0, 0, 0.25)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <h4 style={{ fontSize: "0.95rem", color: "var(--gold)", marginBottom: "10px", fontFamily: "var(--mono)" }}>
                    {t("mg.ksa.ops.t")}
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--ivory)", lineHeight: "1.6" }}>
                    {t("mg.ksa.ops.list")}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "uae" && (
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(79, 209, 232, 0.2)",
                borderRadius: "var(--r-lg)",
                padding: "clamp(24px, 4vw, 40px)",
                display: "grid",
                gap: "28px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="tag" style={{ background: "rgba(79, 209, 232, 0.12)", color: "var(--cyan)", border: "1px solid rgba(79, 209, 232, 0.3)" }}>
                    {t("mg.uae.tag")}
                  </span>
                  <h3 style={{ fontSize: "1.75rem", marginBlockStart: "12px", color: "var(--ivory)" }}>
                    {t("mg.uae.title")}
                  </h3>
                </div>
                <a className="btn btn--gold" href="/#contact">
                  <span>{t("cta.primary")}</span>
                  <span className="arw" aria-hidden="true">{isRTL ? "←" : "→"}</span>
                </a>
              </div>

              <p style={{ fontSize: "1.05rem", color: "var(--muted-inv)", lineHeight: "1.6" }}>
                {t("mg.uae.p1")}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                <div style={{ background: "rgba(0, 0, 0, 0.25)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <h4 style={{ fontSize: "0.95rem", color: "var(--cyan)", marginBottom: "10px", fontFamily: "var(--mono)" }}>
                    {t("mg.uae.auth.t")}
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--ivory)", lineHeight: "1.6" }}>
                    {t("mg.uae.auth.list")}
                  </p>
                </div>

                <div style={{ background: "rgba(0, 0, 0, 0.25)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <h4 style={{ fontSize: "0.95rem", color: "var(--cyan)", marginBottom: "10px", fontFamily: "var(--mono)" }}>
                    {t("mg.uae.struct.t")}
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--ivory)", lineHeight: "1.6" }}>
                    {t("mg.uae.struct.list")}
                  </p>
                </div>

                <div style={{ background: "rgba(0, 0, 0, 0.25)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <h4 style={{ fontSize: "0.95rem", color: "var(--cyan)", marginBottom: "10px", fontFamily: "var(--mono)" }}>
                    {t("mg.uae.ops.t")}
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--ivory)", lineHeight: "1.6" }}>
                    {t("mg.uae.ops.list")}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "eu" && (
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(166, 187, 209, 0.2)",
                borderRadius: "var(--r-lg)",
                padding: "clamp(24px, 4vw, 40px)",
                display: "grid",
                gap: "28px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="tag" style={{ background: "rgba(166, 187, 209, 0.12)", color: "#E6EEF7", border: "1px solid rgba(166, 187, 209, 0.3)" }}>
                    {t("mg.eu.tag")}
                  </span>
                  <h3 style={{ fontSize: "1.75rem", marginBlockStart: "12px", color: "var(--ivory)" }}>
                    {t("mg.eu.title")}
                  </h3>
                </div>
                <a className="btn btn--gold" href="/#contact">
                  <span>{t("cta.primary")}</span>
                  <span className="arw" aria-hidden="true">{isRTL ? "←" : "→"}</span>
                </a>
              </div>

              <p style={{ fontSize: "1.05rem", color: "var(--muted-inv)", lineHeight: "1.6" }}>
                {t("mg.eu.p1")}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                <div style={{ background: "rgba(0, 0, 0, 0.25)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <h4 style={{ fontSize: "0.95rem", color: "var(--gold)", marginBottom: "10px", fontFamily: "var(--mono)" }}>
                    {t("mg.eu.auth.t")}
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--ivory)", lineHeight: "1.6" }}>
                    {t("mg.eu.auth.list")}
                  </p>
                </div>

                <div style={{ background: "rgba(0, 0, 0, 0.25)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <h4 style={{ fontSize: "0.95rem", color: "var(--gold)", marginBottom: "10px", fontFamily: "var(--mono)" }}>
                    {t("mg.eu.struct.t")}
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--ivory)", lineHeight: "1.6" }}>
                    {t("mg.eu.struct.list")}
                  </p>
                </div>

                <div style={{ background: "rgba(0, 0, 0, 0.25)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <h4 style={{ fontSize: "0.95rem", color: "var(--gold)", marginBottom: "10px", fontFamily: "var(--mono)" }}>
                    {t("mg.eu.ops.t")}
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--ivory)", lineHeight: "1.6" }}>
                    {t("mg.eu.ops.list")}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
