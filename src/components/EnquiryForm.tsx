"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  market: string;
  service: string;
  time: string;
  msg: string;
  consent: boolean;
}

interface FormErrors {
  name?: boolean;
  email?: boolean;
  company?: boolean;
  market?: boolean;
  service?: boolean;
  consent?: boolean;
}

export function EnquiryForm() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    phone: "",
    market: "",
    service: "",
    time: "Within 3 months",
    msg: "",
    consent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const name = target.id.replace("f-", "");
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for that field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {
      name: formData.name.trim().length <= 1,
      email: !validateEmail(formData.email),
      company: formData.company.trim().length <= 1,
      market: formData.market === "",
      service: formData.service === "",
      consent: !formData.consent
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (!hasError) {
      setSubmitted(true);
      const card = document.getElementById("formCard");
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <section className="band band--navy" id="contact">
      <div className="shell cta-grid">
        <div className="rv">
          <p className="mono eyebrow">{t("ct.eyebrow")}</p>
          <h2 className="d2">{t("ct.h")}</h2>
          <p className="lede" style={{ marginBlockStart: "var(--s2)" }}>
            {t("ct.lede")}
          </p>

          <div className="cta-points">
            <div className="cta-point">
              <span className="n">01</span>
              <div>
                <b>{t("ct.1.t")}</b>
                <p>{t("ct.1.p")}</p>
              </div>
            </div>

            <div className="cta-point">
              <span className="n">02</span>
              <div>
                <b>{t("ct.2.t")}</b>
                <p>{t("ct.2.p")}</p>
              </div>
            </div>

            <div className="cta-point">
              <span className="n">03</span>
              <div>
                <b>{t("ct.3.t")}</b>
                <p>{t("ct.3.p")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`form-card rv ${submitted ? "sent" : ""}`} id="formCard">
          {!submitted ? (
            <form id="leadform" noValidate onSubmit={handleSubmit}>
              <div className="form-rows">
                <div className={`field ${errors.name ? "invalid" : ""}`}>
                  <label htmlFor="f-name">{t("f.name")}</label>
                  <input
                    id="f-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <span className="err">{t("f.err.name")}</span>
                </div>

                <div className={`field ${errors.email ? "invalid" : ""}`}>
                  <label htmlFor="f-email">{t("f.email")}</label>
                  <input
                    id="f-email"
                    type="email"
                    required
                    autoComplete="email"
                    dir="ltr"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <span className="err">{t("f.err.email")}</span>
                </div>

                <div className={`field ${errors.company ? "invalid" : ""}`}>
                  <label htmlFor="f-company">{t("f.company")}</label>
                  <input
                    id="f-company"
                    type="text"
                    required
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <span className="err">{t("f.err.company")}</span>
                </div>

                <div className="field">
                  <label htmlFor="f-phone">{t("f.phone")}</label>
                  <input
                    id="f-phone"
                    type="tel"
                    autoComplete="tel"
                    dir="ltr"
                    placeholder="+966"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className={`field ${errors.market ? "invalid" : ""}`}>
                  <label htmlFor="f-market">{t("f.market")}</label>
                  <select
                    id="f-market"
                    required
                    value={formData.market}
                    onChange={handleChange}
                  >
                    <option value="">{t("f.select")}</option>
                    <option value="saudi">{t("mk.1.t")}</option>
                    <option value="uae">{t("mk.2.t")}</option>
                    <option value="eu">{t("f.opt.eu")}</option>
                    <option value="multi">{t("f.opt.multi")}</option>
                    <option value="undecided">{t("f.opt.undecided")}</option>
                  </select>
                  <span className="err">{t("f.err.market")}</span>
                </div>

                <div className={`field ${errors.service ? "invalid" : ""}`}>
                  <label htmlFor="f-service">{t("f.service")}</label>
                  <select
                    id="f-service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">{t("f.select")}</option>
                    <option value="s1">{t("s.1.short")}</option>
                    <option value="s2">{t("s.2.short")}</option>
                    <option value="s3">{t("s.3.short")}</option>
                    <option value="s4">{t("s.4.short")}</option>
                    <option value="s5">{t("s.5.short")}</option>
                    <option value="s6">{t("s.6.short")}</option>
                    <option value="s7">{t("s.7.short")}</option>
                    <option value="full">{t("f.opt.full")}</option>
                  </select>
                  <span className="err">{t("f.err.service")}</span>
                </div>

                <div className="field full">
                  <label htmlFor="f-time">{t("f.time")}</label>
                  <select
                    id="f-time"
                    value={formData.time}
                    onChange={handleChange}
                  >
                    <option>{t("f.t.1")}</option>
                    <option>{t("f.t.2")}</option>
                    <option>{t("f.t.3")}</option>
                    <option>{t("f.t.4")}</option>
                  </select>
                </div>

                <div className="field full">
                  <label htmlFor="f-msg">{t("f.msg")}</label>
                  <textarea
                    id="f-msg"
                    placeholder={t("f.msg.ph")}
                    value={formData.msg}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <label className="consent">
                <input
                  type="checkbox"
                  id="f-consent"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                />
                <span>{t("f.consent")}</span>
              </label>
              {errors.consent && (
                <span className="err" id="consentErr" style={{ display: "block", marginTop: "6px" }}>
                  {t("f.err.consent")}
                </span>
              )}

              <button className="btn btn--gold" type="submit">
                <span>{t("f.submit")}</span>
                <span className="arw" aria-hidden="true">→</span>
              </button>
            </form>
          ) : (
            <div className="form-done" role="status">
              <svg width="46" height="46" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2.5" />
                <path d="M14 24.5l6.5 6.5L34 17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>{t("f.done.h")}</h3>
              <p>{t("f.done.p")}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
