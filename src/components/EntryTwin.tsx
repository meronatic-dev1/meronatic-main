"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface MarketConfig {
  code: string;
  currency: string;
  totalWeeks: number;
  baseCost: number;
  currencySymbol: string;
  phases: {
    weekRange: [number, number];
    titleEn: string;
    titleAr: string;
    spendSubEn: string;
    spendSubAr: string;
  }[];
  complianceMilestones: {
    week: number;
    titleEn: string;
    titleAr: string;
  }[];
  opsDeliverables: {
    week: number;
    titleEn: string;
    titleAr: string;
  }[];
}

const MARKET_DATA: Record<string, MarketConfig> = {
  KSA: {
    code: "KSA",
    currency: "USD",
    currencySymbol: "$",
    totalWeeks: 16,
    baseCost: 65000,
    phases: [
      {
        weekRange: [1, 4],
        titleEn: "Phase 1: Investment License & Articles of Association",
        titleAr: "المرحلة الأولى: ترخيص الاستثمار وعقد التأسيس",
        spendSubEn: "MISA License $12k · Legal Counsel $10k",
        spendSubAr: "ترخيص الاستثمار ١٢ ألف $ · الاستشارات القانونية ١٠ آلاف $",
      },
      {
        weekRange: [5, 8],
        titleEn: "Phase 2: Commercial Registration & Corporate Banking",
        titleAr: "المرحلة الثانية: السجل التجاري والحساب البنكي",
        spendSubEn: "CR & Chamber $5k · Bank Opening $8k · Office Lease $15k",
        spendSubAr: "السجل والغرفة ٥ آلاف $ · فتح الحساب ٨ آلاف $ · عقد المكتب ١٥ ألف $",
      },
      {
        weekRange: [9, 12],
        titleEn: "Phase 3: Workforce Mobilisation & Qiwa Setup",
        titleAr: "المرحلة الثالثة: استقطاب الكوادر ومنصة قوى",
        spendSubEn: "Work Visas $8k · Executive Search $12k · Medical $4k",
        spendSubAr: "تأشيرات العمل ٨ آلاف $ · البحث التنفيذي ١٢ ألف $ · التأمين ٤ آلاف $",
      },
      {
        weekRange: [13, 16],
        titleEn: "Phase 4: Statutory Compliance & Steady-State Launch",
        titleAr: "المرحلة الرابعة: الامتثال النظامي والتشغيل المستقر",
        spendSubEn: "GOSI / ZATCA Setup $3k · Muqeem & WPS $2k",
        spendSubAr: "التأمينات وهيئة الزكاة ٣ آلاف $ · مقيم ونظام حماية الأجور ٢ ألف $",
      },
    ],
    complianceMilestones: [
      { week: 3, titleEn: "MISA Investment License issued", titleAr: "إصدار ترخيص الاستثمار من وزارة الاستثمار" },
      { week: 6, titleEn: "Commercial Registration (CR) active", titleAr: "السجل التجاري سارٍ لدى وزارة التجارة" },
      { week: 9, titleEn: "Qiwa & Ministry of HR file opened", titleAr: "فتح ملف المنشأة في منصة قوى والموارد البشرية" },
      { week: 12, titleEn: "GOSI & ZATCA tax registration complete", titleAr: "التسجيل في التأمينات وهيئة الزكاة والضريبة والجمارك" },
      { week: 15, titleEn: "WPS Wage Protection System active", titleAr: "تفعيل نظام حماية الأجور والامتثال المالي" },
    ],
    opsDeliverables: [
      { week: 6, titleEn: "Physical / Serviced office leased in Riyadh", titleAr: "استئجار وتجهيز المكتب في الرياض" },
      { week: 8, titleEn: "Multi-currency corporate bank operational", titleAr: "تفعيل الحساب البنكي التجاري للشركات" },
      { week: 12, titleEn: "Key leadership team on-boarded & permitted", titleAr: "انضمام الفريق القيادي وإصدار الإقامات" },
      { week: 16, titleEn: "Local vendor & supplier SLAs finalized", titleAr: "اعتماد اتفاقيات الموردين ومقدمي الخدمات المحليين" },
    ],
  },
  UAE: {
    code: "UAE",
    currency: "USD",
    currencySymbol: "$",
    totalWeeks: 12,
    baseCost: 52000,
    phases: [
      {
        weekRange: [1, 3],
        titleEn: "Phase 1: Free Zone / Mainland Jurisdiction Selection",
        titleAr: "المرحلة الأولى: اختيار الاختصاص القضائي والموافقة الأولية",
        spendSubEn: "Name Reservation & Initial Approval $8k",
        spendSubAr: "حجز الاسم والموافقة المبدئية ٨ آلاف $",
      },
      {
        weekRange: [4, 7],
        titleEn: "Phase 2: Trade License & Lease Agreement (Ejari)",
        titleAr: "المرحلة الثانية: الرخصة التجارية وعقد الإيجار (توثيق/إيجاري)",
        spendSubEn: "Trade License $14k · Flexi/Leased Space $12k",
        spendSubAr: "الرخصة التجارية ١٤ ألف $ · المساحة الإيجارية ١٢ ألف $",
      },
      {
        weekRange: [8, 10],
        titleEn: "Phase 3: Corporate Bank Account & Residence Visas",
        titleAr: "المرحلة الثالثة: الحساب البنكي وتأشيرات الإقامة",
        spendSubEn: "Bank Setup $6k · Visas & Emirates IDs $7k",
        spendSubAr: "الحساب البنكي ٦ آلاف $ · التأشيرات والهوية ٧ آلاف $",
      },
      {
        weekRange: [11, 12],
        titleEn: "Phase 4: Corporate Tax, VAT & Operational Handover",
        titleAr: "المرحلة الرابعة: ضريبة الشركات وضريبة القيمة المضافة والتشغيل",
        spendSubEn: "FTA Registration $3k · Operating Systems $2k",
        spendSubAr: "التسجيل في الهيئة الاتحادية للضرائب ٣ آلاف $",
      },
    ],
    complianceMilestones: [
      { week: 2, titleEn: "Initial Approval & Name clearance", titleAr: "الموافقة المبدئية والاسم التجاري" },
      { week: 5, titleEn: "Trade License & MoHRE file active", titleAr: "صدور الرخصة التجارية وملف وزارة العمل" },
      { week: 8, titleEn: "Emirates ID & Medical fitness cleared", titleAr: "إصدار الهوية الإماراتية والفحص الطبي" },
      { week: 11, titleEn: "FTA Corporate Tax & VAT configured", titleAr: "تسجيل ضريبة الشركات والقيمة المضافة" },
    ],
    opsDeliverables: [
      { week: 5, titleEn: "Dubai / ADGM workspace secured", titleAr: "تأمين مساحة العمل في دبي أو أبوظبي" },
      { week: 9, titleEn: "Primary corporate banking channels live", titleAr: "تفعيل قنوات الدفع والخدمات المصرفية" },
      { week: 12, titleEn: "Payroll & local insurance active", titleAr: "بدء تشغيل الرواتب والتأمين الصحي الإلزامي" },
    ],
  },
  EU: {
    code: "EU",
    currency: "EUR",
    currencySymbol: "€",
    totalWeeks: 10,
    baseCost: 38000,
    phases: [
      {
        weekRange: [1, 2],
        titleEn: "Phase 1: Legal Structuring & Articles Filing",
        titleAr: "المرحلة الأولى: الهيكلة القانونية وإيداع النظام الأساسي",
        spendSubEn: "Register of Enterprises Filing €6k · Legal Drafting €4k",
        spendSubAr: "سجل المنشآت ٦ آلاف € · الصياغة القانونية ٤ آلاف €",
      },
      {
        weekRange: [3, 5],
        titleEn: "Phase 2: Incorporation, VAT & Digital Identity (eID)",
        titleAr: "المرحلة الثانية: التأسيس والتسجيل الضريبي والهوية الرقمية",
        spendSubEn: "State Fee & Capital €5k · eID / Digital Signatures €3k",
        spendSubAr: "رسوم الدولة ورأس المال ٥ آلاف € · الهوية الرقمية ٣ آلاف €",
      },
      {
        weekRange: [6, 8],
        titleEn: "Phase 3: EU Bank / EMI Setup & Talent Contracts",
        titleAr: "المرحلة الثالثة: الحساب البنكي الأوروبي وعقود الكفاءات",
        spendSubEn: "EU Banking €6k · Multilingual Recruitment €8k",
        spendSubAr: "الحساب البنكي الأوروبي ٦ آلاف € · التوظيف ٨ آلاف €",
      },
      {
        weekRange: [9, 10],
        titleEn: "Phase 4: Statutory Accounting & GDPR Framework",
        titleAr: "المرحلة الرابعة: المحاسبة النظامية وحوكمة البيانات (GDPR)",
        spendSubEn: "Accounting Setup €3k · Governance Audit €3k",
        spendSubAr: "إعداد المحاسبة ٣ آلاف € · تدقيق الحوكمة ٣ آلاف €",
      },
    ],
    complianceMilestones: [
      { week: 2, titleEn: "Articles filed with Register of Enterprises", titleAr: "إيداع عقد التأسيس لدى سجل المؤسسات" },
      { week: 4, titleEn: "EU Single Market VAT Registration active", titleAr: "تفعيل الرقم الضريبي للاتحاد الأوروبي" },
      { week: 7, titleEn: "Corporate EMI / IBAN operational", titleAr: "تفعيل الحساب المصرفي ورقم الآيبان الأوروبي" },
      { week: 10, titleEn: "GDPR Compliance & statutory reporting set", titleAr: "اعتماد معايير حماية البيانات والتقارير المالية" },
    ],
    opsDeliverables: [
      { week: 4, titleEn: "Registered office & virtual HQ in Riga", titleAr: "تسجيل المقر القانوني في ريغا" },
      { week: 7, titleEn: "SEPA payment gateway configured", titleAr: "ربط بوابة المدفوعات الأوروبية (SEPA)" },
      { week: 10, titleEn: "Multilingual development / ops team live", titleAr: "بدء عمل الفريق التقني والتشغيلي" },
    ],
  },
};

export function EntryTwin() {
  const { t, isRTL } = useLanguage();
  const [marketKey, setMarketKey] = useState<"KSA" | "UAE" | "EU">("KSA");
  const [currentWeek, setCurrentWeek] = useState(6);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState<1 | 2>(1);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const market = MARKET_DATA[marketKey];
  const maxWeeks = market.totalWeeks;

  // Auto-play animation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentWeek((prev) => {
        if (prev >= maxWeeks) {
          setIsPlaying(false);
          return maxWeeks;
        }
        return prev + 1;
      });
    }, 1200 / speed);

    return () => clearInterval(interval);
  }, [isPlaying, maxWeeks, speed]);

  // When changing market, cap currentWeek
  useEffect(() => {
    setCurrentWeek((prev) => Math.min(prev, MARKET_DATA[marketKey].totalWeeks));
  }, [marketKey]);

  // Current Phase
  const currentPhase =
    market.phases.find(
      (p) => currentWeek >= p.weekRange[0] && currentWeek <= p.weekRange[1]
    ) || market.phases[market.phases.length - 1];

  // Spend calculation
  const progressRatio = Math.min(1, currentWeek / maxWeeks);
  const currentSpend = Math.round(market.baseCost * Math.pow(progressRatio, 0.85));

  // Canvas Drawing for 3D Isometric building visualization
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = cv.getBoundingClientRect();
    const w = rect.width || 480;
    const h = rect.height || 320;

    cv.width = Math.round(w * dpr);
    cv.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.clearRect(0, 0, w, h);

    const cx = w * 0.5;
    const cy = h * 0.58;

    // Draw isometric grid ground plane
    ctx.save();
    ctx.strokeStyle = "rgba(79, 209, 232, 0.12)";
    ctx.lineWidth = 1;
    for (let i = -5; i <= 5; i++) {
      // Diagonals 1
      const x1 = cx + i * 28 - 5 * 28;
      const y1 = cy + i * 14 + 5 * 14;
      const x2 = cx + i * 28 + 5 * 28;
      const y2 = cy + i * 14 - 5 * 14;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Diagonals 2
      const x3 = cx - 5 * 28 + i * 28;
      const y3 = cy - 5 * 14 - i * 14;
      const x4 = cx + 5 * 28 + i * 28;
      const y4 = cy + 5 * 14 - i * 14;
      ctx.beginPath();
      ctx.moveTo(x3, y3);
      ctx.lineTo(x4, y4);
      ctx.stroke();
    }
    ctx.restore();

    // Draw 4 Isometric Modular Blocks that rise as currentWeek progresses
    const blocks = [
      { id: 1, x: 0, y: 0, zH: 36, unlockWeek: 1, label: "01 Structure", color: "#4FD1E8" },
      { id: 2, x: -50, y: -25, zH: 48, unlockWeek: 4, label: "02 Licensing", color: "#D9A85C" },
      { id: 3, x: 50, y: -25, zH: 56, unlockWeek: 8, label: "03 Operations", color: "#8FA8FF" },
      { id: 4, x: 0, y: -50, zH: 70, unlockWeek: 12, label: "04 Steady-State", color: "#F0C989" },
    ];

    blocks.forEach((b) => {
      const active = currentWeek >= b.unlockWeek;
      const progress = Math.min(1, Math.max(0, (currentWeek - b.unlockWeek + 1) / 3));
      const currentH = active ? b.zH * progress : 6;
      const bx = cx + b.x;
      const by = cy + b.y;

      ctx.save();

      // Base footprint shadow
      ctx.fillStyle = active ? "rgba(79, 209, 232, 0.18)" : "rgba(255, 255, 255, 0.04)";
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(bx + 34, by + 17);
      ctx.lineTo(bx, by + 34);
      ctx.lineTo(bx - 34, by + 17);
      ctx.closePath();
      ctx.fill();

      // Left face
      ctx.fillStyle = active ? "rgba(18, 36, 56, 0.92)" : "rgba(10, 20, 36, 0.5)";
      ctx.beginPath();
      ctx.moveTo(bx - 34, by + 17);
      ctx.lineTo(bx, by + 34);
      ctx.lineTo(bx, by + 34 - currentH);
      ctx.lineTo(bx - 34, by + 17 - currentH);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = active ? b.color : "rgba(255,255,255,0.15)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Right face
      ctx.fillStyle = active ? "rgba(39, 65, 95, 0.95)" : "rgba(15, 28, 48, 0.5)";
      ctx.beginPath();
      ctx.moveTo(bx, by + 34);
      ctx.lineTo(bx + 34, by + 17);
      ctx.lineTo(bx + 34, by + 17 - currentH);
      ctx.lineTo(bx, by + 34 - currentH);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Top face
      ctx.fillStyle = active ? b.color : "rgba(255, 255, 255, 0.08)";
      ctx.beginPath();
      ctx.moveTo(bx, by - currentH);
      ctx.lineTo(bx + 34, by + 17 - currentH);
      ctx.lineTo(bx, by + 34 - currentH);
      ctx.lineTo(bx - 34, by + 17 - currentH);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Beacon on top when active
      if (active && progress >= 0.8) {
        ctx.fillStyle = "#fff";
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(bx, by + 17 - currentH, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.restore();
    });
  }, [currentWeek, marketKey]);

  // Export Snapshot PNG
  const handleExportPNG = () => {
    const cv = canvasRef.current;
    if (!cv) return;
    const link = document.createElement("a");
    link.download = `meronatic-entry-twin-${marketKey}-week${currentWeek}.png`;
    link.href = cv.toDataURL("image/png");
    link.click();
  };

  return (
    <section className="band band--navy" id="twin">
      <div className="shell">
        <div className="sec-head sec-head--split rv">
          <div>
            <p className="mono eyebrow">{t("tw.eyebrow")}</p>
            <h2 className="d2">{t("tw.h")}</h2>
          </div>
          <p className="lede sh-aside">{t("tw.lede")}</p>
        </div>

        <div className="twin rv">
          <div>
            <div className="tw-stage">
              <div className="tw-dims" id="twDims">
                <span>3D Shape</span>
                <span>4D Time</span>
                <span>5D Cost</span>
                <span>6D Compliance</span>
                <span>7D Steady-State</span>
              </div>

              {/* Market Badge Buttons */}
              <div className="tw-market-toggles">
                {(["KSA", "UAE", "EU"] as const).map((code) => (
                  <button
                    key={code}
                    type="button"
                    className={`tw-badge-btn ${marketKey === code ? "active" : ""}`}
                    onClick={() => {
                      setMarketKey(code);
                      setIsPlaying(false);
                    }}
                  >
                    {code}
                  </button>
                ))}
              </div>

              <canvas className="tw-canvas" id="twCanvas" ref={canvasRef} />

              <div className="tw-legend" id="twLegend">
                <span>
                  <i style={{ background: "#4FD1E8" }}></i> {isRTL ? "الهيكلة" : "Structure"}
                </span>
                <span>
                  <i style={{ background: "#D9A85C" }}></i> {isRTL ? "التراخيص" : "Licensing"}
                </span>
                <span>
                  <i style={{ background: "#8FA8FF" }}></i> {isRTL ? "العمليات" : "Operations"}
                </span>
                <span>
                  <i style={{ background: "#F0C989" }}></i> {isRTL ? "الامتثال" : "Compliance"}
                </span>
              </div>

              <div className="tw-bar">
                <div className="tw-ctrls">
                  <button
                    className="tw-play"
                    id="twPlay"
                    type="button"
                    aria-label={isPlaying ? "Pause" : "Play timeline"}
                    onClick={() => {
                      if (currentWeek >= maxWeeks) setCurrentWeek(1);
                      setIsPlaying(!isPlaying);
                    }}
                  >
                    {isPlaying ? (
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="currentColor">
                        <rect x="2" y="2" width="3.5" height="11" rx="1" />
                        <rect x="8.5" y="2" width="3.5" height="11" rx="1" />
                      </svg>
                    ) : (
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="currentColor">
                        <path d="M2 1.5v12l11-6-11-6Z" />
                      </svg>
                    )}
                  </button>

                  <span className="tw-week" id="twWeek">
                    WEEK {String(currentWeek).padStart(2, "0")} / {String(maxWeeks).padStart(2, "0")}
                  </span>

                  <input
                    className="tw-scrub"
                    id="twScrub"
                    type="range"
                    min="1"
                    max={maxWeeks}
                    value={currentWeek}
                    onChange={(e) => {
                      setIsPlaying(false);
                      setCurrentWeek(Number(e.target.value));
                    }}
                    aria-label="Scrub the timeline"
                  />

                  <button
                    className="tw-mini"
                    id="twSpeed"
                    type="button"
                    onClick={() => setSpeed(speed === 1 ? 2 : 1)}
                  >
                    {speed}×
                  </button>

                  <button
                    className="tw-mini"
                    id="twShot"
                    type="button"
                    onClick={handleExportPNG}
                  >
                    {t("tw.shot")}
                  </button>
                </div>

                <p className="tw-phase" id="twPhase">
                  {isRTL ? currentPhase.titleAr : currentPhase.titleEn}
                </p>
              </div>
            </div>
          </div>

          {/* Side Multi-D Panels */}
          <div className="tw-side">
            {/* 5D Cost Panel */}
            <div className="panel" id="pCost">
              <h4>
                <span>{t("tw.cost")}</span>
                <em id="twCur">{market.currency}</em>
              </h4>
              <div className="spend" id="twSpend">
                {market.currencySymbol}
                {currentSpend.toLocaleString()}
              </div>
              <div className="spend-sub" id="twSpendSub">
                {isRTL ? currentPhase.spendSubAr : currentPhase.spendSubEn}
              </div>

              {/* Dynamic Cost Curve */}
              <svg className="curve" id="twCurve" viewBox="0 0 300 76" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4FD1E8" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#4FD1E8" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d={`M0 70 Q 120 55, ${Math.max(10, progressRatio * 300)} ${Math.max(
                    12,
                    70 - progressRatio * 58
                  )} L ${Math.max(10, progressRatio * 300)} 76 L 0 76 Z`}
                  fill="url(#curveGrad)"
                />
                <path
                  d="M0 70 Q 120 55, 300 12"
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d={`M0 70 Q 120 55, ${Math.max(10, progressRatio * 300)} ${Math.max(
                    12,
                    70 - progressRatio * 58
                  )}`}
                  fill="none"
                  stroke="#4FD1E8"
                  strokeWidth="2.5"
                />
                <circle
                  cx={Math.max(10, progressRatio * 300)}
                  cy={Math.max(12, 70 - progressRatio * 58)}
                  r="4"
                  fill="#F0C989"
                  stroke="#122036"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* 6D Compliance Panel */}
            <div className="panel" id="pComp">
              <h4>
                <span>{t("tw.comp")}</span>
              </h4>
              <ul className="comp-list" id="twComp">
                {market.complianceMilestones.map((m, idx) => {
                  const done = currentWeek >= m.week;
                  return (
                    <li key={idx} className={done ? "done" : ""}>
                      <span className="chk">{done ? "✓" : "○"}</span>
                      <span>{isRTL ? m.titleAr : m.titleEn}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="gauge">
                <i
                  id="twGauge"
                  style={{ width: `${Math.min(100, Math.round(progressRatio * 100))}%` }}
                />
              </div>
            </div>

            {/* 7D Operations Panel */}
            <div className={`panel ${currentWeek >= 8 ? "" : "off"}`} id="pOps">
              <h4>
                <span>{t("tw.ops")}</span>
              </h4>
              <div className="ops" id="twOps">
                {market.opsDeliverables.map((o, idx) => {
                  const live = currentWeek >= o.week;
                  return (
                    <div key={idx} className={`ops-item ${live ? "live" : ""}`}>
                      <span className="dot"></span>
                      <span>{isRTL ? o.titleAr : o.titleEn}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
