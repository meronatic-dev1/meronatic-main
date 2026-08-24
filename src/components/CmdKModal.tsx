"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface SearchItem {
  category: string;
  title: string;
  desc: string;
  href: string;
}

export function CmdKModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { t, isRTL } = useLanguage();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: SearchItem[] = [
    {
      category: isRTL ? "عن ميروناتيك" : "About",
      title: isRTL ? "عن ميروناتيك — الهيكل وفريق العمل" : "About Meronatic — Team & Structure",
      desc: isRTL ? "فريق واحد مسؤول، مستشارون في الرياض ودبي وريغا، وسجل الاعتمادات" : "One accountable partner, named consultants in Riyadh, Dubai, Riga, and credentials",
      href: "/about",
    },
    {
      category: isRTL ? "منهجية العمل" : "How We Work",
      title: isRTL ? "منهجية العمل — مسار التنفيذ من ٤ مراحل" : "How We Work — 4-Stage Phased Method",
      desc: isRTL ? "خطة مكتوبة معتمدة لمجلس الإدارة ومدير حساب مسمى يمتلك العملية" : "A method you can plan a board decision around, with one point of accountability",
      href: "/how-we-work",
    },
    {
      category: isRTL ? "منهجية العمل" : "How We Work",
      title: isRTL ? "شبكة الشركاء والتراخيص المنظمة" : "Partner Network & Regulated Delivery",
      desc: isRTL ? "مسارات التنفيذ المباشرة والأنشطة المنظمة عبر الشركاء المرخصين" : "Direct Meronatic delivery and vetted licensed partners confirmed in writing",
      href: "/how-we-work#partners",
    },
    {
      category: isRTL ? "الخدمات" : "Services",
      title: isRTL ? "دخول السوق وتأسيس الشركة" : "Market entry & company setup coordination",
      desc: isRTL ? "الهيكلة ومسارات الترخيص والتأسيس القانوني" : "Structuring decisions, licensing pathways and company setup",
      href: "/services",
    },
    {
      category: isRTL ? "الخدمات" : "Services",
      title: isRTL ? "التوظيف وحلول الكوادر" : "Recruitment & people solutions",
      desc: isRTL ? "التوظيف المحلي والدولي وتعبئة القوى العاملة" : "Local and international hiring, workforce mobilisation",
      href: "/services",
    },
    {
      category: isRTL ? "الخدمات" : "Services",
      title: isRTL ? "الخدمات المؤسسية وتنسيق الامتثال" : "Corporate services & compliance coordination",
      desc: isRTL ? "الحوكمة والتجديدات والتقاويم النظامية" : "Corporate housekeeping, renewals and statutory calendars",
      href: "/services",
    },
    {
      category: isRTL ? "الخدمات" : "Services",
      title: isRTL ? "الدعم المالي والخدمات الخلفية" : "Finance & back-office support",
      desc: isRTL ? "إدارة الرواتب والمحاسبة وتقارير المركز الرئيسي" : "Bookkeeping coordination, payroll administration support",
      href: "/services",
    },
    {
      category: isRTL ? "الخدمات" : "Services",
      title: isRTL ? "الرقمنة والتقنية" : "Digital & technology",
      desc: isRTL ? "الأنظمة والمواقع وأتمتة العمليات" : "Core systems, websites, workflow automation and data hygiene",
      href: "/services",
    },
    {
      category: isRTL ? "الخدمات" : "Services",
      title: isRTL ? "استشارات العمليات وإدارة المرافق" : "Operations & facilities management advisory",
      desc: isRTL ? "نماذج مكان العمل والمواقع وتشغيل العمليات" : "Workplace, site and service delivery models",
      href: "/services",
    },
    {
      category: isRTL ? "الخدمات" : "Services",
      title: isRTL ? "المشتريات وإدارة الموردين" : "Procurement & vendor management",
      desc: isRTL ? "استقطاب الموردين المحليين وتأهيلهم" : "Sourcing, qualification and management of local suppliers",
      href: "/services",
    },
    {
      category: isRTL ? "الأدوات" : "Tools",
      title: isRTL ? "التوأم التشغيلي ومخطط الدخول" : "Entry Planner & Twin Simulator",
      desc: isRTL ? "محاكاة ثلاثية الأبعاد لبناء العملية أسبوعاً بأسبوع وخطة دخول استرشادية" : "Interactive operational schedule timeline and entry vehicle planner",
      href: "/tools#planner",
    },
    {
      category: isRTL ? "الأدوات" : "Tools",
      title: isRTL ? "حاسبة تكلفة التوظيف" : "Cost to Employ Calculator",
      desc: isRTL ? "حاسبة تكلفة الموظف الشاملة في الرياض، دبي، ريغا مع المقارنة المعيارية" : "What one hire actually costs including permits, GOSI, and gratuity",
      href: "/tools#calculator",
    },
    {
      category: isRTL ? "الأدوات" : "Tools",
      title: isRTL ? "تقويم الامتثال والالتزامات" : "Compliance Calendar",
      desc: isRTL ? "التقويم السنوي للالتزامات النظامية والضريبية المتكررة عبر الأسواق" : "Rolling year of recurring statutory obligations across KSA, UAE, and EU",
      href: "/tools#calendar",
    },
    {
      category: isRTL ? "الأدوات" : "Tools",
      title: isRTL ? "جميع النماذج والأدوات" : "All Tools & Models Hub",
      desc: isRTL ? "استكشف النماذج التي نستخدمها في مشاريعنا، مفتوحة بين يديك" : "Explore our working engagement models open to you",
      href: "/tools",
    },
    {
      category: isRTL ? "الأسواق" : "Markets",
      title: isRTL ? "المملكة العربية السعودية (KSA)" : "Saudi Arabia (KSA)",
      desc: isRTL ? "متطلبات التوطين وتخطيط القوى العاملة" : "Regional scale, giga-projects, localisation requirements",
      href: "/markets",
    },
    {
      category: isRTL ? "الأسواق" : "Markets",
      title: isRTL ? "الإمارات العربية المتحدة (UAE)" : "United Arab Emirates (UAE)",
      desc: isRTL ? "المقر الإقليمي، داخل البلاد والمناطق الحرة" : "Regional headquarters, mainland and free zone options",
      href: "/markets",
    },
    {
      category: isRTL ? "الأسواق" : "Markets",
      title: isRTL ? "لاتفيا والاتحاد الأوروبي (EU)" : "Latvia & European Union (EU)",
      desc: isRTL ? "بوابة السوق الأوروبية بتكلفة تشغيل رشيقة" : "EU single market access with lean operating cost",
      href: "/markets",
    },
    {
      category: isRTL ? "النتائج" : "Results",
      title: isRTL ? "النتائج وسجل الإنجازات" : "Results — Mandates & Track Record",
      desc: isRTL ? "مخرجات المشاريع المنفذة في السعودية والإمارات وأوروبا بمقاييس دقيقة" : "Verified mandates across Saudi Arabia, the UAE, and the EU with measurable outcomes",
      href: "/results",
    },
    {
      category: isRTL ? "النتائج" : "Results",
      title: isRTL ? "دراسات الحالة والتعاقدات المنجزة" : "Case Studies — Infrastructure, Tech & Manufacturing",
      desc: isRTL ? "الهدف، مسار الترخيص، المواعيد النظامية، ونتائج تعبئة الكوادر" : "Mandate scope, delivery routes, timelines, and mobilised workforce metrics",
      href: "/results#cases",
    },
    {
      category: isRTL ? "التواصل" : "Contact",
      title: isRTL ? "ناقش دخولك إلى السوق" : "Discuss your market entry",
      desc: isRTL ? "تواصل مع مستشار السوق واحصل على خطة الدخول" : "Bring us your objective, get a tailored entry model",
      href: "/#contact",
    },
  ];

  const filteredItems = items.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const navigateTo = (href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.substring(1);
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    } else {
      window.location.href = href;
    }
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      navigateTo(filteredItems[selectedIndex].href);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="cmdk open"
      id="cmdk"
      role="dialog"
      aria-modal="true"
      aria-label={t("cmdk.btn")}
      onClick={(e) => {
        if ((e.target as HTMLElement).classList.contains("cmdk")) {
          onClose();
        }
      }}
    >
      <div className="cmdk-panel" onKeyDown={handleKeyDown}>
        <div className="cmdk-input-wrap">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="cmdk-search-ic"
          >
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.7" />
            <path
              d="M10.8 10.8L14 14"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
          <input
            ref={inputRef}
            className="cmdk-input"
            id="cmdkInput"
            type="text"
            autoComplete="off"
            spellCheck="false"
            placeholder={t("cmdk.ph")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="cmdk-list" id="cmdkList" role="listbox">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <div
                key={idx}
                className={`cmdk-item ${idx === selectedIndex ? "active" : ""}`}
                role="option"
                aria-selected={idx === selectedIndex}
                onClick={() => {
                  navigateTo(item.href);
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className="cmdk-item-header">
                  <span className="cmdk-item-title">{item.title}</span>
                  <span className="cmdk-item-cat">{item.category}</span>
                </div>
                <p className="cmdk-item-desc">{item.desc}</p>
              </div>
            ))
          ) : (
            <div className="cmdk-empty">
              {isRTL ? "لم يتم العثور على نتائج" : "No results found"}
            </div>
          )}
        </div>

        <div className="cmdk-foot">
          <span>
            <b>↑↓</b> <span>{t("cmdk.nav")}</span>
          </span>
          <span>
            <b>↵</b> <span>{t("cmdk.open")}</span>
          </span>
          <span>
            <b>esc</b> <span>{t("cmdk.close")}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
