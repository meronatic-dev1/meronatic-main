"use client";

import React from "react";
import { Header } from "@/components/Header";
import { MarketsHero } from "@/components/MarketsHero";
import { MarketsOverview } from "@/components/MarketsOverview";
import { JurisdictionMatrix } from "@/components/JurisdictionMatrix";
import { MarketGuides } from "@/components/MarketGuides";
import { MarketsFaq } from "@/components/MarketsFaq";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import { SvgGfxDefs } from "@/components/SvgGfxDefs";
import { ProgressBar } from "@/components/ProgressBar";
import { CookieBanner } from "@/components/CookieBanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function MarketsPage() {
  useScrollReveal();

  return (
    <>
      <SvgGfxDefs />
      <ProgressBar />
      <Header />
      <main id="main">
        <MarketsHero />
        <MarketsOverview />
        <JurisdictionMatrix />
        <MarketGuides />
        <MarketsFaq />
        <EnquiryForm />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
