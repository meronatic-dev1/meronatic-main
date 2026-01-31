import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Stats from "@/components/Stats";
import RecentWorks from "@/components/RecentWorks";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <LogoTicker />
      <Stats />
      <RecentWorks />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
