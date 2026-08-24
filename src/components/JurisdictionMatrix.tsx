"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type MarketKey = "ksa" | "uae" | "eu";

interface RowData {
  titleKey: string;
  ksaKey: string;
  uaeKey: string;
  euKey: string;
  highlight?: MarketKey;
}

const ROWS: RowData[] = [
  {
    titleKey: "cmp.r1.title",
    ksaKey: "cmp.r1.ksa",
    uaeKey: "cmp.r1.uae",
    euKey: "cmp.r1.eu",
  },
  {
    titleKey: "cmp.r2.title",
    ksaKey: "cmp.r2.ksa",
    uaeKey: "cmp.r2.uae",
    euKey: "cmp.r2.eu",
  },
  {
    titleKey: "cmp.r3.title",
    ksaKey: "cmp.r3.ksa",
    uaeKey: "cmp.r3.uae",
    euKey: "cmp.r3.eu",
  },
  {
    titleKey: "cmp.r4.title",
    ksaKey: "cmp.r4.ksa",
    uaeKey: "cmp.r4.uae",
    euKey: "cmp.r4.eu",
  },
  {
    titleKey: "cmp.r5.title",
    ksaKey: "cmp.r5.ksa",
    uaeKey: "cmp.r5.uae",
    euKey: "cmp.r5.eu",
  },
  {
    titleKey: "cmp.r6.title",
    ksaKey: "cmp.r6.ksa",
    uaeKey: "cmp.r6.uae",
    euKey: "cmp.r6.eu",
  },
  {
    titleKey: "cmp.r7.title",
    ksaKey: "cmp.r7.ksa",
    uaeKey: "cmp.r7.uae",
    euKey: "cmp.r7.eu",
  },
  {
    titleKey: "cmp.r8.title",
    ksaKey: "cmp.r8.ksa",
    uaeKey: "cmp.r8.uae",
    euKey: "cmp.r8.eu",
  },
  {
    titleKey: "cmp.r9.title",
    ksaKey: "cmp.r9.ksa",
    uaeKey: "cmp.r9.uae",
    euKey: "cmp.r9.eu",
  },
];

export function JurisdictionMatrix() {
  const { t } = useLanguage();
  const [selectedMarkets, setSelectedMarkets] = useState<Record<MarketKey, boolean>>({
    ksa: true,
    uae: true,
    eu: true,
  });

  const toggleMarket = (market: MarketKey) => {
    setSelectedMarkets((prev) => {
      const next = { ...prev, [market]: !prev[market] };
      // Ensure at least one market remains selected
      if (!next.ksa && !next.uae && !next.eu) {
        return prev;
      }
      return next;
    });
  };

  const selectAll = () => {
    setSelectedMarkets({ ksa: true, uae: true, eu: true });
  };

  const isAllSelected = selectedMarkets.ksa && selectedMarkets.uae && selectedMarkets.eu;

  const marketNames: Record<MarketKey, string> = {
    ksa: t("mk.1.t"),
    uae: t("mk.2.t"),
    eu: t("mk.3.t"),
  };

  const activeMarkets: MarketKey[] = (["ksa", "uae", "eu"] as MarketKey[]).filter(
    (k) => selectedMarkets[k]
  );

  return (
    <section className="band band--ink" id="matrix" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
      <div className="shell">
        <div className="rv" style={{ marginBlockEnd: "var(--s4)" }}>
          <div className="cal-top">
            <div>
              <p className="mono eyebrow">{t("cmp.eyebrow")}</p>
              <h2 className="d2" style={{ marginBlockStart: "6px" }}>
                {t("cmp.h")}
              </h2>
              <p className="lede" style={{ maxWidth: "700px", marginBlockStart: "8px" }}>
                {t("cmp.lede")}
              </p>
            </div>

            {/* Filter Chips */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
              <span className="mono" style={{ fontSize: "0.72rem", color: "var(--muted-inv)" }}>
                {t("cmp.filter")}
              </span>
              <div className="chips" role="group" aria-label="Filter markets">
                <button
                  className={`chip ${isAllSelected ? "active" : ""}`}
                  type="button"
                  aria-pressed={isAllSelected}
                  onClick={selectAll}
                >
                  {t("cmp.all")}
                </button>
                <button
                  className={`chip ${selectedMarkets.ksa ? "active" : ""}`}
                  type="button"
                  data-m="ksa"
                  aria-pressed={selectedMarkets.ksa}
                  onClick={() => toggleMarket("ksa")}
                >
                  {marketNames.ksa}
                </button>
                <button
                  className={`chip ${selectedMarkets.uae ? "active" : ""}`}
                  type="button"
                  data-m="uae"
                  aria-pressed={selectedMarkets.uae}
                  onClick={() => toggleMarket("uae")}
                >
                  {marketNames.uae}
                </button>
                <button
                  className={`chip ${selectedMarkets.eu ? "active" : ""}`}
                  type="button"
                  data-m="eu"
                  aria-pressed={selectedMarkets.eu}
                  onClick={() => toggleMarket("eu")}
                >
                  {marketNames.eu}
                </button>
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="cmp-wrap">
            <div className="cmp-scroll">
              <table className="cmp" id="cmpTable">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: "24%", color: "var(--gold)" }}>
                      {t("cmp.eyebrow")}
                    </th>
                    {activeMarkets.map((marketKey) => (
                      <th
                        key={marketKey}
                        scope="col"
                        style={{
                          width: `${76 / activeMarkets.length}%`,
                          color: marketKey === "ksa" ? "#FBE7BF" : marketKey === "uae" ? "#BAF3FD" : "#E6EEF7",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span
                            style={{
                              display: "inline-block",
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              backgroundColor:
                                marketKey === "ksa" ? "#DFA85C" : marketKey === "uae" ? "#57D0E7" : "#A6BBD1",
                            }}
                          />
                          {marketNames[marketKey]}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row, idx) => (
                    <tr key={idx}>
                      <th scope="row">
                        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span
                            className="mono"
                            style={{
                              fontSize: "0.7rem",
                              color: "var(--gold)",
                              opacity: 0.8,
                            }}
                          >
                            0{idx + 1}
                          </span>
                          {t(row.titleKey)}
                        </span>
                      </th>
                      {activeMarkets.map((marketKey) => {
                        const cellKey =
                          marketKey === "ksa" ? row.ksaKey : marketKey === "uae" ? row.uaeKey : row.euKey;
                        return (
                          <td key={marketKey}>
                            <span>{t(cellKey)}</span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footnote */}
            <div className="cmp-foot">
              <span>{t("cmp.note")}</span>
              <span className="mono">{t("cmp.rev")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
