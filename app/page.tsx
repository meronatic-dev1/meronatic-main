import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AgencyTextReveal from "@/components/AgencyTextReveal";
import MarketReality from "@/components/MarketReality";
import Testimonials from "@/components/Testimonials";
import MeronaticDifference from "@/components/MeronaticDifference";
import AscendFramework from "@/components/AscendFramework";
import Services from "@/components/Services";
import Outcomes from "@/components/Outcomes";
import RecentWorks from "@/components/RecentWorks";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import BrandSummary from "@/components/BrandSummary";
import LetsConnect from "@/components/LetsConnect";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meronatic Solutions | Architecture of Growth",
  description: "Identify market gaps, deploy high-impact systems, and scale revenue. Meronatic is your partner for performance-based business transformation.",
};

export default function Home() {
  return (
    <main className="min-h-screen relative bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <AgencyTextReveal />
      <MarketReality />
      <Testimonials />
      <MeronaticDifference />
      <AscendFramework />
      <Services />
      <Outcomes />
      <RecentWorks />
      <WhoWeWorkWith />
      <BrandSummary />
      <LetsConnect />
      <Footer />
    </main>
  );
}
