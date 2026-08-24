"use client";

import React from "react";
import { Header } from "@/components/Header";
import { ToolsHero } from "@/components/ToolsHero";
import { ToolsHub } from "@/components/ToolsHub";
import { EntryTwin } from "@/components/EntryTwin";
import { CostToEmployCalculator } from "@/components/CostToEmployCalculator";
import { ComplianceCalendar } from "@/components/ComplianceCalendar";
import { ToolsFaq } from "@/components/ToolsFaq";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import { SvgGfxDefs } from "@/components/SvgGfxDefs";
import { ProgressBar } from "@/components/ProgressBar";
import { CookieBanner } from "@/components/CookieBanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ToolsPage() {
  useScrollReveal();

  return (
    <>
      <SvgGfxDefs />
      <ProgressBar />
      <Header />
      <main id="main">
        <ToolsHero />
        <ToolsHub />
        <div id="planner">
          <EntryTwin />
        </div>
        <CostToEmployCalculator />
        <ComplianceCalendar />
        <ToolsFaq />
        <EnquiryForm />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
