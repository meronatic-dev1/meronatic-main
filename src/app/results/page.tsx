"use client";

import React from "react";
import { Header } from "@/components/Header";
import { ResultsHero } from "@/components/ResultsHero";
import { ResultsList } from "@/components/ResultsList";
import { ResultsMethodology } from "@/components/ResultsMethodology";
import { ResultsFaq } from "@/components/ResultsFaq";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import { SvgGfxDefs } from "@/components/SvgGfxDefs";
import { ProgressBar } from "@/components/ProgressBar";
import { CookieBanner } from "@/components/CookieBanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ResultsPage() {
  useScrollReveal();

  return (
    <>
      <SvgGfxDefs />
      <ProgressBar />
      <Header />
      <main id="main">
        <ResultsHero />
        <ResultsList />
        <ResultsMethodology />
        <ResultsFaq />
        <EnquiryForm />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
