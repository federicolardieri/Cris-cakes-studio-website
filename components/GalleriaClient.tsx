"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

interface GalleryImage {
    src: string;
    alt: string;
}

interface GalleriaClientProps {
    images: GalleryImage[];
}

function useIsDesktop(): boolean {
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isDesktop;
}

export default function GalleriaClient({ images }: GalleriaClientProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const isDesktop = useIsDesktop();

    // images[0] è il video hero, images[1..] sono le card immagini
    const cardImages = images.slice(1);

    return (
        <main className="relative min-h-screen bg-[var(--color-cr-background)] text-[var(--color-cr-text)] selection:bg-[var(--color-cr-gold)] selection:text-white overflow-x-hidden">
            {/* Video Background fisso (invariato) */}
            <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-15">
                    <source src="/video-bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-cr-background)]/80 via-[var(--color-cr-background)]/50 to-[var(--color-cr-background)]" />
                <div
                    className="absolute inset-0 opacity-30 mix-blend-multiply"
                    style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}
                />
            </div>

            <div className="relative z-10">
                <Navbar />
                <p className="text-center pt-40 text-[var(--color-cr-gold)]">Scaffold — Task 1 completo</p>
                <Footer />
                <FloatingWhatsApp />
            </div>
        </main>
    );
}
