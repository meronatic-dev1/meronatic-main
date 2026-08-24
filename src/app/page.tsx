"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Rail } from "@/components/Rail";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { EntryTwin } from "@/components/EntryTwin";
import { Tools } from "@/components/Tools";
import { Numbers } from "@/components/Numbers";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import { SvgGfxDefs } from "@/components/SvgGfxDefs";
import { ProgressBar } from "@/components/ProgressBar";
import { CookieBanner } from "@/components/CookieBanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <SvgGfxDefs />
      <ProgressBar />
      <Header />
      <main id="main">
        <Hero />
        <Rail />
        <About />
        <Services />
        <EntryTwin />
        <Tools />
        <Numbers />
        <EnquiryForm />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
