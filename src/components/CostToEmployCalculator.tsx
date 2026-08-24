"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface MarketConfig {
  cur: string;
  basicDefault: number;
  statuses: Record<
    string,
    {
      nameEn: string;
      nameAr: string;
      social: number;
      cap: number;
      base: "gosi" | "gross" | "none";
    }
  >;
  eosb: number;
  eosbBase: "basic" | "wage" | "none";
  insurance: number;
  levy: number;
  levyExpatOnly: boolean;
  permit: number;
  permitExpatOnly: boolean;
  pit: {
    employee: number;
    bands: [number, number][];
    allowance: number;
  } | null;
  notesEn: string;
  notesAr: string;
}

const FX: Record<string, number> = {
  SAR: 3.75,
  AED: 3.6725,
  EUR: 0.92,
};

const MARKETS_DATA: Record<string, MarketConfig> = {
  ksa: {
    cur: "SAR",
    basicDefault: 60,
    statuses: {
      expat: {
        nameEn: "Expatriate",
        nameAr: "مقيم",
        social: 0.02,
        cap: 45000,
        base: "gosi",
      },
      saudiA: {
        nameEn: "Saudi national — pre-Jul 2024 registration",
        nameAr: "سعودي — مسجّل قبل يوليو ٢٠٢٤",
        social: 0.1175,
        cap: 45000,
        base: "gosi",
      },
      saudiB: {
        nameEn: "Saudi national — new social insurance system",
        nameAr: "سعودي — النظام الجديد للتأمينات",
        social: 0.1275,
        cap: 45000,
        base: "gosi",
      },
    },
    eosb: 0.0417,
    eosbBase: "wage",
    insurance: 300,
    levy: 800,
    levyExpatOnly: true,
    permit: 55,
    permitExpatOnly: true,
    pit: null,
    notesEn:
      "GOSI is charged on basic salary plus housing allowance only, capped at SAR 45,000 a month. End-of-service accrues at 15 days of wage per year for the first five years. The expatriate labour levy and iqama costs are shown amortised monthly.",
    notesAr:
      "تُحتسب التأمينات على الراتب الأساسي مع بدل السكن فقط، بحد أقصى ٤٥٬٠٠٠ ريال شهرياً. تستحق مكافأة نهاية الخدمة بواقع ١٥ يوماً عن كل سنة في السنوات الخمس الأولى. تظهر رسوم العمالة الوافدة والإقامة موزَّعة شهرياً.",
  },
  uae: {
    cur: "AED",
    basicDefault: 60,
    statuses: {
      expat: {
        nameEn: "Expatriate",
        nameAr: "مقيم",
        social: 0,
        cap: 0,
        base: "none",
      },
      national: {
        nameEn: "UAE national (GPSSA)",
        nameAr: "مواطن إماراتي (المعاشات)",
        social: 0.15,
        cap: 70000,
        base: "gross",
      },
    },
    eosb: 0.0583,
    eosbBase: "basic",
    insurance: 300,
    levy: 0,
    levyExpatOnly: false,
    permit: 210,
    permitExpatOnly: true,
    pit: null,
    notesEn:
      "There is no social security for expatriate employees. Gratuity accrues at 21 days of basic salary per year for the first five years. The employer rate for UAE nationals follows the pension law applicable to that hire — confirm the rate for your case.",
    notesAr:
      "لا يوجد تأمين اجتماعي للموظفين الوافدين. تستحق مكافأة نهاية الخدمة بواقع ٢١ يوماً من الراتب الأساسي عن كل سنة في السنوات الخمس الأولى. تخضع نسبة صاحب العمل للمواطنين لقانون المعاشات المطبَّق على التعيين — تأكّد من النسبة في حالتك.",
  },
  eu: {
    cur: "EUR",
    basicDefault: 100,
    statuses: {
      resident: {
        nameEn: "Latvian tax resident",
        nameAr: "مقيم ضريبي في لاتفيا",
        social: 0.2359,
        cap: 8775,
        base: "gross",
      },
    },
    eosb: 0,
    eosbBase: "none",
    insurance: 0,
    levy: 0,
    levyExpatOnly: false,
    permit: 35,
    permitExpatOnly: true,
    pit: {
      employee: 0.105,
      bands: [
        [8775, 0.255],
        [Infinity, 0.33],
      ],
      allowance: 550,
    },
    notesEn:
      "Employer social contributions are 23.59% of gross, capped at EUR 105,300 a year. Employees pay 10.5% plus progressive income tax of 25.5% and 33%, with a fixed monthly allowance of EUR 550. There is no end-of-service accrual; statutory severance applies on termination only.",
    notesAr:
      "اشتراكات صاحب العمل ٢٣٫٥٩٪ من الإجمالي، بحد أقصى ١٠٥٬٣٠٠ يورو سنوياً. يدفع الموظف ١٠٫٥٪ إضافةً إلى ضريبة دخل تصاعدية ٢٥٫٥٪ و٣٣٪، مع إعفاء ثابت ٥٥٠ يورو شهرياً. لا توجد مكافأة نهاية خدمة متراكمة؛ تُستحق التعويضات النظامية عند إنهاء الخدمة فقط.",
  },
};

function formatCurrency(val: number, cur: string): string {
  if (cur === "EUR") {
    return `€${Math.round(val).toLocaleString("en-US")}`;
  }
  return `${cur} ${Math.round(val).toLocaleString("en-US")}`;
}

function formatUSD(val: number, cur: string): string {
  const fxRate = FX[cur] || 1;
  const inUSD = Math.round(val / fxRate);
  return `$${inUSD.toLocaleString("en-US")}`;
}

function calculateCost(
  marketKey: string,
  statusKey: string,
  gross: number,
  basicPct: number,
  includeIns: boolean,
  includePermits: boolean
) {
  const m = MARKETS_DATA[marketKey];
  const st = m.statuses[statusKey] || Object.values(m.statuses)[0];
  const basic = gross * (basicPct / 100);

  // Social contribution base
  let socialBase = 0;
  if (st.base === "gosi") {
    socialBase = Math.min(basic + gross * 0.25, st.cap);
  } else if (st.base === "gross") {
    socialBase = st.cap ? Math.min(gross, st.cap) : gross;
  }
  const social = socialBase * st.social;

  // End of service benefit / Gratuity
  let eosb = 0;
  if (m.eosbBase === "basic") {
    eosb = basic * m.eosb;
  } else if (m.eosbBase === "wage") {
    eosb = gross * m.eosb;
  }

  const isExpat = statusKey === "expat" || statusKey === "resident";
  const insurance = includeIns ? m.insurance : 0;
  const levy = m.levyExpatOnly && !isExpat ? 0 : includePermits ? m.levy : 0;
  const permit = includePermits && (!m.permitExpatOnly || isExpat) ? m.permit : 0;

  // Employee deductions (PIT and social for EU)
  let eeSocial = 0;
  let eePit = 0;
  if (m.pit) {
    eeSocial = Math.min(gross, st.cap) * m.pit.employee;
    const taxable = Math.max(0, gross - eeSocial - m.pit.allowance);
    let left = taxable;
    let prev = 0;
    let pit = 0;
    m.pit.bands.forEach((b) => {
      const slice = Math.max(0, Math.min(left, b[0] - prev));
      pit += slice * b[1];
      left -= slice;
      prev = b[0];
    });
    eePit = pit;
  }

  const total = gross + social + eosb + insurance + levy + permit;
  const uplift = gross > 0 ? ((total - gross) / gross) * 100 : 0;
  const net = gross - eeSocial - eePit;

  return {
    cur: m.cur,
    gross,
    basic,
    social,
    eosb,
    insurance,
    levy,
    permit,
    total,
    net,
    eeSocial,
    eePit,
    uplift,
    notesEn: m.notesEn,
    notesAr: m.notesAr,
  };
}

export function CostToEmployCalculator() {
  const { t, isRTL } = useLanguage();

  const [market, setMarket] = useState<string>("ksa");
  const [status, setStatus] = useState<string>("expat");
  const [gross, setGross] = useState<number>(20000);
  const [basicPct, setBasicPct] = useState<number>(60);
  const [includeIns, setIncludeIns] = useState<boolean>(true);
  const [includePermits, setIncludePermits] = useState<boolean>(true);

  // Switch status and defaults when market changes
  const handleMarketChange = (newMarket: string) => {
    setMarket(newMarket);
    const m = MARKETS_DATA[newMarket];
    const firstStatus = Object.keys(m.statuses)[0];
    setStatus(firstStatus);
    setBasicPct(m.basicDefault);
    if (newMarket === "eu" && gross > 10000) {
      setGross(4500);
    } else if (newMarket !== "eu" && gross < 5000) {
      setGross(20000);
    }
  };

  const currentResult = useMemo(() => {
    return calculateCost(market, status, gross, basicPct, includeIns, includePermits);
  }, [market, status, gross, basicPct, includeIns, includePermits]);

  // Cross-market comparison (normalised in USD using current base salary equivalent)
  const comparisonData = useMemo(() => {
    const usdEquivalent = gross / (FX[MARKETS_DATA[market].cur] || 1);

    const ksaCost = calculateCost(
      "ksa",
      "expat",
      usdEquivalent * FX.SAR,
      60,
      includeIns,
      includePermits
    );
    const uaeCost = calculateCost(
      "uae",
      "expat",
      usdEquivalent * FX.AED,
      60,
      includeIns,
      includePermits
    );
    const euCost = calculateCost(
      "eu",
      "resident",
      usdEquivalent * FX.EUR,
      100,
      includeIns,
      includePermits
    );

    const ksaUSD = ksaCost.total / FX.SAR;
    const uaeUSD = uaeCost.total / FX.AED;
    const euUSD = euCost.total / FX.EUR;

    const maxUSD = Math.max(ksaUSD, uaeUSD, euUSD, 1);

    return [
      {
        key: "ksa",
        name: isRTL ? "المملكة العربية السعودية (الرياض)" : "Saudi Arabia (Riyadh)",
        usdVal: ksaUSD,
        pct: (ksaUSD / maxUSD) * 100,
        localVal: formatCurrency(ksaCost.total, "SAR"),
        isCurrent: market === "ksa",
      },
      {
        key: "uae",
        name: isRTL ? "الإمارات العربية المتحدة (دبي)" : "United Arab Emirates (Dubai)",
        usdVal: uaeUSD,
        pct: (uaeUSD / maxUSD) * 100,
        localVal: formatCurrency(uaeCost.total, "AED"),
        isCurrent: market === "uae",
      },
      {
        key: "eu",
        name: isRTL ? "الاتحاد الأوروبي (ريغا / لاتفيا)" : "Latvia & EU (Riga)",
        usdVal: euUSD,
        pct: (euUSD / maxUSD) * 100,
        localVal: formatCurrency(euCost.total, "EUR"),
        isCurrent: market === "eu",
      },
    ];
  }, [market, gross, includeIns, includePermits, isRTL]);

  const currentMarketConfig = MARKETS_DATA[market];

  return (
    <section className="band band--ink" id="calculator" style={{ position: "relative" }}>
      <div className="shell">
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("calc.eyebrow")}</p>
            <h2 className="d2">{t("calc.h")}</h2>
          </div>
          <p className="lede sh-aside">{t("calc.lede")}</p>
        </div>

        <div className="calc rv" id="calcRoot">
          {/* Inputs Column */}
          <div className="calc-in">
            {/* Market Selection */}
            <div className="field">
              <label>{t("calc.market")}</label>
              <div className="chips" role="group" aria-label={t("calc.market")}>
                <button
                  className={`chip ${market === "ksa" ? "active" : ""}`}
                  type="button"
                  aria-pressed={market === "ksa"}
                  onClick={() => handleMarketChange("ksa")}
                >
                  {isRTL ? "السعودية" : "Saudi Arabia"}
                </button>
                <button
                  className={`chip ${market === "uae" ? "active" : ""}`}
                  type="button"
                  aria-pressed={market === "uae"}
                  onClick={() => handleMarketChange("uae")}
                >
                  {isRTL ? "الإمارات" : "United Arab Emirates"}
                </button>
                <button
                  className={`chip ${market === "eu" ? "active" : ""}`}
                  type="button"
                  aria-pressed={market === "eu"}
                  onClick={() => handleMarketChange("eu")}
                >
                  {isRTL ? "الاتحاد الأوروبي / لاتفيا" : "Latvia / EU"}
                </button>
              </div>
            </div>

            {/* Employee Status Selection */}
            <div className="field">
              <label>{t("calc.status")}</label>
              <div className="chips" role="group" aria-label={t("calc.status")}>
                {Object.entries(currentMarketConfig.statuses).map(([stKey, stObj]) => (
                  <button
                    key={stKey}
                    className={`chip ${status === stKey ? "active" : ""}`}
                    type="button"
                    aria-pressed={status === stKey}
                    onClick={() => setStatus(stKey)}
                  >
                    {isRTL ? stObj.nameAr : stObj.nameEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Gross Salary Input */}
            <div className="field">
              <label htmlFor="cGross">
                <span>{t("calc.gross")}</span>
                <span className="mono" style={{ color: "var(--gold-2)", fontSize: "0.85rem" }}>
                  {formatUSD(gross, currentMarketConfig.cur)} equiv.
                </span>
              </label>
              <input
                id="cGross"
                type="number"
                min="0"
                step="500"
                value={gross}
                inputMode="numeric"
                onChange={(e) => setGross(Math.max(0, Number(e.target.value) || 0))}
              />
            </div>

            {/* Basic Salary Share Range (KSA / UAE) */}
            {market !== "eu" && (
              <div className="field rangebox" id="cBasicWrap">
                <label htmlFor="cBasic">
                  <span>{t("calc.basicShare")}</span>
                  <span className="mono" style={{ color: "var(--gold-2)" }}>
                    {basicPct}% ({formatCurrency(gross * (basicPct / 100), currentMarketConfig.cur)})
                  </span>
                </label>
                <input
                  id="cBasic"
                  type="range"
                  min="40"
                  max="100"
                  step="5"
                  value={basicPct}
                  onChange={(e) => setBasicPct(Number(e.target.value))}
                  style={
                    {
                      "--pct": `${((basicPct - 40) / 60) * 100}%`,
                    } as React.CSSProperties
                  }
                />
              </div>
            )}

            {/* Additional Cost Toggles */}
            <div className="field">
              <label>{t("calc.include")}</label>
              <div className="toggles">
                {market !== "eu" && (
                  <label id="cInsRow">
                    <input
                      type="checkbox"
                      id="cIns"
                      checked={includeIns}
                      onChange={(e) => setIncludeIns(e.target.checked)}
                    />
                    <span>
                      {t("calc.medical")} (
                      {formatCurrency(currentMarketConfig.insurance, currentMarketConfig.cur)}/mo)
                    </span>
                  </label>
                )}
                <label>
                  <input
                    type="checkbox"
                    id="cPermits"
                    checked={includePermits}
                    onChange={(e) => setIncludePermits(e.target.checked)}
                  />
                  <span>
                    {t("calc.permits")} (
                    {formatCurrency(
                      currentMarketConfig.levy + currentMarketConfig.permit,
                      currentMarketConfig.cur
                    )}
                    /mo)
                  </span>
                </label>
              </div>
            </div>

            {/* Regulatory context notes */}
            <p
              style={{
                fontSize: "0.82rem",
                color: "#8A9BA8",
                lineHeight: 1.6,
                padding: "14px 16px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--r)",
              }}
            >
              <strong style={{ color: "var(--gold)", display: "block", marginBottom: "4px" }}>
                {isRTL ? "الملاحظات النظامية:" : "Statutory Guidance:"}
              </strong>
              {isRTL ? currentResult.notesAr : currentResult.notesEn}
            </p>
          </div>

          {/* Results Output Column */}
          <div>
            <div className="calc-out">
              {/* Big Header Total */}
              <div className="calc-total">
                <span>{t("calc.totalEmployer")}</span>
                <b>{formatCurrency(currentResult.total, currentResult.cur)}</b>
                <em>
                  <span>{formatUSD(currentResult.total, currentResult.cur)}</span>
                  <span className="uplift-badge">
                    +{currentResult.uplift.toFixed(1)}% {t("calc.monthlyUplift")}
                  </span>
                </em>
              </div>

              {/* Itemised Breakdown Table */}
              <div className="brk">
                <div className="brk-row">
                  <span>{t("calc.grossSal")}</span>
                  <i>{isRTL ? "الراتب الأساسي المتفق عليه" : "Contracted base gross"}</i>
                  <b>{formatCurrency(currentResult.gross, currentResult.cur)}</b>
                </div>

                {currentResult.social > 0 && (
                  <div className="brk-row">
                    <span>{t("calc.socialContrib")}</span>
                    <i>
                      {market === "ksa"
                        ? isRTL
                          ? "أخطار مهنية ومعاشات التأمينات"
                          : "GOSI occupational hazards & pension"
                        : market === "uae"
                        ? isRTL
                          ? "الهيئة العامة للمعاشات والتأمينات"
                          : "GPSSA national pension contribution"
                        : isRTL
                        ? "اشتراكات التأمين الاجتماعي للدولة ٢٣٫٥٩٪"
                        : "State social insurance (23.59%)"}
                    </i>
                    <b>+{formatCurrency(currentResult.social, currentResult.cur)}</b>
                  </div>
                )}

                {currentResult.eosb > 0 && (
                  <div className="brk-row">
                    <span>{t("calc.eosbGratuity")}</span>
                    <i>
                      {market === "ksa"
                        ? isRTL
                          ? "استحقاق ١٥ يوماً من الراتب سنوياً"
                          : "15 days wage accrual per year"
                        : isRTL
                        ? "استحقاق ٢١ يوماً من الراتب الأساسي سنوياً"
                        : "21 days basic salary accrual per year"}
                    </i>
                    <b>+{formatCurrency(currentResult.eosb, currentResult.cur)}</b>
                  </div>
                )}

                {currentResult.insurance > 0 && (
                  <div className="brk-row">
                    <span>{t("calc.medCost")}</span>
                    <i>{isRTL ? "تأمين طبي فئة معتمدة" : "Mandatory policy benchmark"}</i>
                    <b>+{formatCurrency(currentResult.insurance, currentResult.cur)}</b>
                  </div>
                )}

                {currentResult.levy + currentResult.permit > 0 && (
                  <div className="brk-row">
                    <span>{t("calc.permitCost")}</span>
                    <i>
                      {market === "ksa"
                        ? isRTL
                          ? "المقابل المالي وتجديد الإقامة ورخصة العمل"
                          : "Labour levy, Iqama and work permit fees"
                        : isRTL
                        ? "بطاقة المنشأة والتأشيرة وتصريح العمل"
                        : "Establishment card, visa & work permit"}
                    </i>
                    <b>
                      +
                      {formatCurrency(
                        currentResult.levy + currentResult.permit,
                        currentResult.cur
                      )}
                    </b>
                  </div>
                )}

                {/* Net Employee Take Home */}
                {market === "eu" && (
                  <div className="brk-row neg">
                    <span>{t("calc.eeDeductions")}</span>
                    <i>{isRTL ? "ضريبة الدخل وتأمينات الموظف" : "Personal income tax & employee social"}</i>
                    <b>-{formatCurrency(currentResult.eeSocial + currentResult.eePit, currentResult.cur)}</b>
                  </div>
                )}

                <div className="brk-row tot">
                  <span>{t("calc.netTakeHome")}</span>
                  <i>{isRTL ? "الراتب الصافي في حساب الموظف" : "Take-home pay into employee account"}</i>
                  <b>{formatCurrency(currentResult.net, currentResult.cur)}</b>
                </div>
              </div>
            </div>

            {/* 3-Market Comparison Panel */}
            <div className="panel" style={{ marginBlockStart: "var(--s3)" }}>
              <h4>
                <span>{t("calc.compTitle")}</span>
              </h4>
              <div className="cmpbars">
                {comparisonData.map((item) => (
                  <div key={item.key} className="cmpbar" data-me={item.isCurrent}>
                    <div className="cmpbar-top">
                      <span style={{ fontWeight: item.isCurrent ? 600 : 400, color: item.isCurrent ? "var(--gold)" : "var(--ivory)" }}>
                        {item.name} {item.isCurrent ? (isRTL ? "(المحدد)" : "(Selected)") : ""}
                      </span>
                      <b>
                        ${Math.round(item.usdVal).toLocaleString("en-US")} / mo ({item.localVal})
                      </b>
                    </div>
                    <div className="cmpbar-track">
                      <i style={{ width: `${Math.max(5, item.pct)}%` }}></i>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "0.78rem", color: "#6C7C90", marginBlockStart: "12px" }}>
                {t("calc.compNote")}
              </p>
            </div>

            <p className="out-note">{t("calc.disclaimer")}</p>

            <div className="out-actions">
              <a className="btn btn--gold" href="/#contact">
                <span>{t("calc.ctaModel")}</span>
                <span className="arw" aria-hidden="true">
                  {isRTL ? "←" : "→"}
                </span>
              </a>
              <a className="btn btn--ghost" href="#planner">
                <span>{t("calc.ctaPlan")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
