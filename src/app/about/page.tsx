"use client";

import React from "react";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Credentials } from "@/components/Credentials";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import { SvgGfxDefs } from "@/components/SvgGfxDefs";
import { ProgressBar } from "@/components/ProgressBar";
import { CookieBanner } from "@/components/CookieBanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutPage() {
  useScrollReveal();

  return (
    <>
      <SvgGfxDefs />
      <ProgressBar />
      <Header />
      <main id="main">
        <AboutHero />
        <About />
        <Team />
        <Credentials />
        <EnquiryForm />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
