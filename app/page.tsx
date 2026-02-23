import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

// Caricamento dinamico delle sezioni pesanti o sotto la piega
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: true });
const WhyUs = dynamic(() => import("@/components/WhyUs"), { ssr: true });
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-cr-gold)] selection:text-white overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <WhyUs />
      <HowItWorks />
      <Contact />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
