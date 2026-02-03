import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecentWorks from "@/components/RecentWorks";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AgencyTextReveal from "@/components/AgencyTextReveal";
import LetsConnect from "@/components/LetsConnect";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <AgencyTextReveal />
      <Testimonials />
      <RecentWorks />
      <Services />
      <FAQ />
      <LetsConnect />
      <Footer />
    </main>
  );
}
