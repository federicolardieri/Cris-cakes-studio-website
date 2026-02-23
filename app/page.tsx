import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

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
