"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface Obligation {
  id: string;
  market: "ksa" | "uae" | "eu";
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  type: "m" | "q" | "a" | "v"; // monthly, quarterly, annual, variable anniversary
  activeMonths: number[]; // 0-indexed months: 0 = Jan, 11 = Dec
  deadlineEn: string;
  deadlineAr: string;
}

const OBLIGATIONS_DATA: Obligation[] = [
  // Saudi Arabia
  {
    id: "ksa-wps",
    market: "ksa",
    titleEn: "WPS & Mudad Salary Compliance File",
    titleAr: "ملف حماية الأجور والرواتب عبر منصة مدد",
    descEn: "Monthly payroll processing, WPS file generation, and compliance score monitoring on Mudad / Qiwa.",
    descAr: "معالجة مسيرات الرواتب الشهرية ورفع ملف حماية الأجور ومراقبة نسبة الالتزام عبر مدد وقوى.",
    type: "m",
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    deadlineEn: "By the 10th of every calendar month",
    deadlineAr: "بحلول اليوم العاشر من كل شهر ميلادي",
  },
  {
    id: "ksa-gosi",
    market: "ksa",
    titleEn: "GOSI Social Insurance Contributions",
    titleAr: "اشتراكات التأمينات الاجتماعية (GOSI)",
    descEn: "Monthly submission and payment of occupational hazards and pension contributions for all registered staff.",
    descAr: "سداد اشتراكات التأمينات الاجتماعية للأخطار المهنية والمعاشات لجميع الموظفين المسجلين.",
    type: "m",
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    deadlineEn: "By the 15th of every calendar month",
    deadlineAr: "بحلول اليوم الخامس عشر من كل شهر ميلادي",
  },
  {
    id: "ksa-vat",
    market: "ksa",
    titleEn: "ZATCA VAT Return & E-Invoicing",
    titleAr: "إقرار ضريبة القيمة المضافة والفوترة الإلكترونية (ZATCA)",
    descEn: "Quarterly or monthly VAT filing and Phase 2 FATOORAH platform synchronization.",
    descAr: "تقديم إقرار ضريبة القيمة المضافة ومزامنة منصة فاتورة المرحلة الثانية لهيئة الزكاة والضريبة والجمارك.",
    type: "q",
    activeMonths: [0, 3, 6, 9], // Jan, Apr, Jul, Oct
    deadlineEn: "By the end of the month following the quarter",
    deadlineAr: "بنهاية الشهر الذي يلي الربع الضريبي",
  },
  {
    id: "ksa-zakat",
    market: "ksa",
    titleEn: "Zakat & Corporate Income Tax Return",
    titleAr: "إقرار الزكاة وضريبة الدخل مع القوائم المدققة",
    descEn: "Annual return filing with audited financial statements submitted through the ERAD portal.",
    descAr: "تقديم الإقرار السنوي للزكاة وضريبة الدخل مرفقاً بالقوائم المالية المدققة عبر بوابة إيراد.",
    type: "a",
    activeMonths: [3], // April (120 days from Dec 31)
    deadlineEn: "Within 120 days of fiscal year end (April 30)",
    deadlineAr: "خلال ١٢٠ يوماً من نهاية السنة المالية (٣٠ أبريل)",
  },
  {
    id: "ksa-renew",
    market: "ksa",
    titleEn: "MISA Investment Licence & CR Renewal",
    titleAr: "تجديد رخصة الاستثمار (MISA) والسجل التجاري",
    descEn: "Annual statutory validation, chamber certificate renewal, and address verification via National Address portal.",
    descAr: "التجديد السنوي لرخصة الاستثمار والسجل التجاري واشتراك الغرفة التجارية والعنوان الوطني.",
    type: "v",
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    deadlineEn: "On the exact anniversary of licence issuance",
    deadlineAr: "في تاريخ ذكرى إصدار الرخصة السنوي",
  },

  // UAE
  {
    id: "uae-wps",
    market: "uae",
    titleEn: "MOHRE Wages Protection System (WPS)",
    titleAr: "نظام حماية الأجور لوزارة الموارد البشرية (WPS)",
    descEn: "Monthly electronic salary disbursement via authorized UAE exchange houses or commercial banks.",
    descAr: "صرف الرواتب الإلكتروني الشهري عبر البنوك المعتمدة ومحلات الصرافة المسجلة لدى الوزارة.",
    type: "m",
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    deadlineEn: "Within 14 days from salary due date",
    deadlineAr: "خلال ١٤ يوماً من تاريخ استحقاق الراتب",
  },
  {
    id: "uae-vat",
    market: "uae",
    titleEn: "Federal Tax Authority (FTA) VAT Return",
    titleAr: "إقرار ضريبة القيمة المضافة للهيئة الاتحادية للضرائب",
    descEn: "Quarterly submission of output and input VAT declarations via the EmaraTax digital portal.",
    descAr: "تقديم إقرارات ضريبة القيمة المضافة الفصلية عبر بوابة إمارات تاكس الرقمية.",
    type: "q",
    activeMonths: [0, 3, 6, 9], // Jan, Apr, Jul, Oct
    deadlineEn: "Within 28 days following the tax period end",
    deadlineAr: "خلال ٢٨ يوماً من نهاية الفترة الضريبية",
  },
  {
    id: "uae-cit",
    market: "uae",
    titleEn: "Corporate Tax Return Filing",
    titleAr: "إقرار ضريبة الشركات (Corporate Tax 9%)",
    descEn: "Annual corporate tax return calculation and settlement for mainland and free zone taxable persons.",
    descAr: "حساب وسداد ضريبة الشركات السنوية للأشخاص الخاضعين للضريبة في البر الرئيسي والمناطق الحرة.",
    type: "a",
    activeMonths: [8], // September (9 months from Dec 31)
    deadlineEn: "Within 9 months of financial year end (September 30)",
    deadlineAr: "خلال ٩ أشهر من نهاية السنة المالية (٣٠ سبتمبر)",
  },
  {
    id: "uae-renew",
    market: "uae",
    titleEn: "Trade Licence & Establishment Card Renewal",
    titleAr: "تجديد الرخصة التجارية وبطاقة المنشأة والـ Ejari",
    descEn: "Annual economic department / free zone licence renewal, lease registration, and immigration card update.",
    descAr: "التجديد السنوي لرخصة الدائرة الاقتصادية أو المنطقة الحرة وتوثيق إيجاري وتحديث بطاقة المنشأة.",
    type: "v",
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    deadlineEn: "On the annual licence renewal date",
    deadlineAr: "في موعد التجديد السنوي للرخصة",
  },

  // EU / Latvia
  {
    id: "eu-payroll",
    market: "eu",
    titleEn: "State Revenue Service (VID) Payroll Report",
    titleAr: "تقرير الرواتب الشهري لهيئة الإيرادات الحكومية (VID)",
    descEn: "Monthly declaration of social contributions (VSAOI) and personal income tax (IIN) on gross wages.",
    descAr: "الإقرار الشهري لاشتراكات التأمين الاجتماعي الإلزامي وضريبة الدخل الفردي على الرواتب الإجمالية.",
    type: "m",
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    deadlineEn: "By the 15th of the following month",
    deadlineAr: "بحلول اليوم الخامس عشر من الشهر التالي",
  },
  {
    id: "eu-vat",
    market: "eu",
    titleEn: "EU VAT Declaration & EC Sales List",
    titleAr: "إقرار ضريبة القيمة المضافة وبيان مبيعات الاتحاد الأوروبي",
    descEn: "Monthly cross-border VAT reconciliation, OSS filings, and intra-community transaction summaries.",
    descAr: "التسوية الشهرية لضريبة القيمة المضافة وكشوف المعاملات البينية بين دول الاتحاد الأوروبي.",
    type: "m",
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    deadlineEn: "By the 20th of the following month",
    deadlineAr: "بحلول اليوم العشرين من الشهر التالي",
  },
  {
    id: "eu-annual",
    market: "eu",
    titleEn: "Enterprise Register Annual Financial Report",
    titleAr: "التقرير المالي السنوي لسجل المنشآت (Gada Pārskats)",
    descEn: "Comprehensive financial statements with balance sheet, profit/loss and management report.",
    descAr: "القوائم المالية السنوية الشاملة مع الميزانية العمومية وحساب الأرباح والخسائر وتقرير الإدارة.",
    type: "a",
    activeMonths: [3], // April
    deadlineEn: "Within 4 months of year end (April 30)",
    deadlineAr: "خلال ٤ أشهر من نهاية السنة المالية (٣٠ أبريل)",
  },
];

const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  ar: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
};

const MARKET_TAGS = {
  ksa: { en: "Saudi Arabia", ar: "السعودية", code: "KSA" },
  uae: { en: "United Arab Emirates", ar: "الإمارات", code: "UAE" },
  eu: { en: "Latvia / EU", ar: "الاتحاد الأوروبي / لاتفيا", code: "EU" },
};

export function ComplianceCalendar() {
  const { t, isRTL } = useLanguage();
  const currentMonthIdx = new Date().getMonth(); // 0-indexed (e.g. August = 7)

  const [activeMarket, setActiveMarket] = useState<string>("all");
  const [selectedObligation, setSelectedObligation] = useState<Obligation | null>(null);

  const filteredObligations = useMemo(() => {
    if (activeMarket === "all") return OBLIGATIONS_DATA;
    return OBLIGATIONS_DATA.filter((o) => o.market === activeMarket);
  }, [activeMarket]);

  return (
    <section className="band band--navy" id="calendar" style={{ position: "relative" }}>
      <div className="shell">
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("cal.eyebrow")}</p>
            <h2 className="d2">{t("cal.h")}</h2>
          </div>
          <p className="lede sh-aside">{t("cal.lede")}</p>
        </div>

        <div className="rv">
          {/* Market Filtering Chips */}
          <div className="cal-top">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--muted-inv)", fontWeight: 500 }}>
                {t("cal.filter")}
              </span>
              <div className="chips" role="group" aria-label="Filter markets">
                <button
                  className={`chip ${activeMarket === "all" ? "active" : ""}`}
                  type="button"
                  aria-pressed={activeMarket === "all"}
                  onClick={() => setActiveMarket("all")}
                >
                  {isRTL ? "جميع الأسواق (١٢ التزاماً)" : "All Jurisdictions (12 Obligations)"}
                </button>
                <button
                  className={`chip ${activeMarket === "ksa" ? "active" : ""}`}
                  type="button"
                  aria-pressed={activeMarket === "ksa"}
                  onClick={() => setActiveMarket("ksa")}
                >
                  {isRTL ? "المملكة العربية السعودية (KSA)" : "Saudi Arabia (KSA)"}
                </button>
                <button
                  className={`chip ${activeMarket === "uae" ? "active" : ""}`}
                  type="button"
                  aria-pressed={activeMarket === "uae"}
                  onClick={() => setActiveMarket("uae")}
                >
                  {isRTL ? "الإمارات العربية المتحدة (UAE)" : "United Arab Emirates (UAE)"}
                </button>
                <button
                  className={`chip ${activeMarket === "eu" ? "active" : ""}`}
                  type="button"
                  aria-pressed={activeMarket === "eu"}
                  onClick={() => setActiveMarket("eu")}
                >
                  {isRTL ? "الاتحاد الأوروبي (Latvia / EU)" : "Latvia & EU"}
                </button>
              </div>
            </div>

            <span
              className="mono"
              style={{
                fontSize: "0.78rem",
                color: "var(--gold-2)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "var(--gold)",
                  display: "inline-block",
                }}
              />
              {isRTL
                ? `الشهر الحالي: ${MONTHS.ar[currentMonthIdx]}`
                : `Current Month: ${MONTHS.en[currentMonthIdx]}`}
            </span>
          </div>

          {/* Interactive Calendar Matrix */}
          <div className="cal">
            <div className="cal-scroll">
              <div className="cal-inner">
                {/* Header Row */}
                <div className="cal-row head">
                  <div>{t("cal.oblCol")}</div>
                  {(isRTL ? MONTHS.ar : MONTHS.en).map((monthName, idx) => (
                    <div
                      key={idx}
                      style={idx === currentMonthIdx ? { color: "var(--gold)", fontWeight: 700 } : {}}
                    >
                      {monthName}
                    </div>
                  ))}
                </div>

                {/* Data Rows */}
                {filteredObligations.map((obl) => {
                  const mTag = MARKET_TAGS[obl.market];
                  return (
                    <div
                      key={obl.id}
                      className="cal-row"
                      style={{ cursor: "pointer", transition: "background 0.2s" }}
                      onClick={() => setSelectedObligation(obl)}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)")
                      }
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <div className="cal-lab">
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span
                            style={{
                              fontSize: "0.62rem",
                              fontFamily: "var(--mono)",
                              padding: "2px 6px",
                              borderRadius: "3px",
                              background:
                                obl.market === "ksa"
                                  ? "rgba(217, 168, 92, 0.2)"
                                  : obl.market === "uae"
                                  ? "rgba(79, 209, 232, 0.2)"
                                  : "rgba(66, 96, 127, 0.3)",
                              color:
                                obl.market === "ksa"
                                  ? "var(--gold-2)"
                                  : obl.market === "uae"
                                  ? "var(--cyan)"
                                  : "#A6BBD1",
                            }}
                          >
                            {mTag.code}
                          </span>
                          <b>{isRTL ? obl.titleAr : obl.titleEn}</b>
                        </div>
                        <small>{isRTL ? obl.deadlineAr : obl.deadlineEn}</small>
                      </div>

                      {/* 12 Month Cells */}
                      {Array.from({ length: 12 }).map((_, mIdx) => {
                        const isNow = mIdx === currentMonthIdx;
                        let dotClass = "";
                        const isActive = obl.activeMonths.includes(mIdx);

                        if (isActive) {
                          if (obl.type === "m") dotClass = "due";
                          else if (obl.type === "q") dotClass = "quarterly";
                          else if (obl.type === "a") dotClass = "ann";
                          else if (obl.type === "v") dotClass = "var";
                        }

                        return (
                          <div key={mIdx} className={`cal-cell ${isNow ? "now" : ""}`}>
                            {isActive && <i className={`dot ${dotClass}`} />}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Calendar Legend / Key */}
            <div className="cal-key">
              <span>
                <i className="dot due"></i>
                <span>{t("cal.k1")}</span>
              </span>
              <span>
                <i className="dot quarterly"></i>
                <span>{t("cal.k4")}</span>
              </span>
              <span>
                <i className="dot ann"></i>
                <span>{t("cal.k2")}</span>
              </span>
              <span>
                <i className="dot var"></i>
                <span>{t("cal.k3")}</span>
              </span>
            </div>
          </div>

          {/* Selected Obligation Modal / Detail Box if clicked */}
          {selectedObligation && (
            <div
              style={{
                marginBlockStart: "var(--s3)",
                padding: "var(--s3)",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(217, 168, 92, 0.4)",
                borderRadius: "var(--r-lg)",
                position: "relative",
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedObligation(null)}
                style={{
                  position: "absolute",
                  top: "14px",
                  right: isRTL ? "auto" : "16px",
                  left: isRTL ? "16px" : "auto",
                  background: "transparent",
                  border: "none",
                  color: "var(--muted-inv)",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "0.72rem",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    background: "var(--gold)",
                    color: "#060B14",
                    fontWeight: 700,
                  }}
                >
                  {MARKET_TAGS[selectedObligation.market].code}
                </span>
                <h4 style={{ margin: 0, color: "var(--ivory)", fontSize: "1.1rem" }}>
                  {isRTL ? selectedObligation.titleAr : selectedObligation.titleEn}
                </h4>
              </div>
              <p style={{ color: "var(--muted-inv)", fontSize: "0.9rem", margin: "6px 0 10px" }}>
                {isRTL ? selectedObligation.descAr : selectedObligation.descEn}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  fontSize: "0.82rem",
                  color: "var(--gold-2)",
                  fontFamily: "var(--mono)",
                }}
              >
                <span>
                  <strong>{isRTL ? "الموعد النهائي: " : "Statutory Deadline: "}</strong>
                  {isRTL ? selectedObligation.deadlineAr : selectedObligation.deadlineEn}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
