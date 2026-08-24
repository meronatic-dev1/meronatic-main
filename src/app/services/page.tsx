"use client";

import React from "react";
import { Header } from "@/components/Header";
import { ServicesHero } from "@/components/ServicesHero";
import { Services } from "@/components/Services";
import { ServicesFaq } from "@/components/ServicesFaq";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import { SvgGfxDefs } from "@/components/SvgGfxDefs";
import { ProgressBar } from "@/components/ProgressBar";
import { CookieBanner } from "@/components/CookieBanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ServicesPage() {
  useScrollReveal();

  return (
    <>
      <SvgGfxDefs />
      <ProgressBar />
      <Header />
      <main id="main">
        <ServicesHero />
        <Services />
        <ServicesFaq />
        <EnquiryForm />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
