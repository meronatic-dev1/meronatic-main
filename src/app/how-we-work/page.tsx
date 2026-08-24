"use client";

import React from "react";
import { Header } from "@/components/Header";
import { HowWeWorkHero } from "@/components/HowWeWorkHero";
import { HowWeWorkMethod } from "@/components/HowWeWorkMethod";
import { HowWeWorkStages } from "@/components/HowWeWorkStages";
import { HowWeWorkPartners } from "@/components/HowWeWorkPartners";
import { HowWeWorkGovernance } from "@/components/HowWeWorkGovernance";
import { HowWeWorkFaq } from "@/components/HowWeWorkFaq";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import { SvgGfxDefs } from "@/components/SvgGfxDefs";
import { ProgressBar } from "@/components/ProgressBar";
import { CookieBanner } from "@/components/CookieBanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function HowWeWorkPage() {
  useScrollReveal();

  return (
    <>
      <SvgGfxDefs />
      <ProgressBar />
      <Header />
      <main id="main">
        <HowWeWorkHero />
        <HowWeWorkMethod />
        <HowWeWorkStages />
        <HowWeWorkPartners />
        <HowWeWorkGovernance />
        <HowWeWorkFaq />
        <EnquiryForm />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
