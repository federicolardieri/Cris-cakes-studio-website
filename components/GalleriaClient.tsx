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

function VideoHero() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Video fullscreen */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/video-bg.mp4" type="video/mp4" />
            </video>

            {/* Overlay gradiente dal basso */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Contenuto centrato */}
            <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[var(--color-cr-gold-dark)] mb-6">
                    L&apos;Archivio delle Emozioni
                </h1>
                <div className="w-24 h-px bg-[var(--color-cr-gold)] opacity-60 mb-6" />
                <p className="font-serif italic text-white/75 text-base sm:text-lg md:text-xl max-w-2xl">
                    Una raccolta di tutte le nostre creazioni. Clicca su una foto per visualizzarla a schermo intero.
                </p>
            </motion.div>

            {/* Scroll arrow con bounce */}
            <motion.div
                className="absolute bottom-8 left-0 right-0 flex justify-center"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown size={32} className="text-[var(--color-cr-gold)] opacity-80" strokeWidth={1.5} />
            </motion.div>
        </section>
    );
}

function GalleryCard({
    image,
    index,
    isDesktop,
    onClick,
}: {
    image: GalleryImage;
    index: number;
    isDesktop: boolean;
    onClick: () => void;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });
    const yParallax = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

    const isLeft = index % 2 === 0;

    return (
        <motion.div
            ref={cardRef}
            className={`relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3] w-full md:w-[80%] mb-8 md:mb-14 ${
                isLeft ? "mr-auto" : "ml-auto"
            }`}
            style={{
                background:
                    "linear-gradient(135deg, rgba(182,151,104,0.15) 0%, rgba(182,151,104,0.04) 100%)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderWidth: "1.5px",
                borderStyle: "solid",
                borderColor: "rgba(182,151,104,0.7)",
                boxShadow:
                    "0 0 30px rgba(182,151,104,0.18), 0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(182,151,104,0.25)",
            }}
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
                scale: 1.02,
                boxShadow:
                    "0 0 50px rgba(182,151,104,0.35), 0 16px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(182,151,104,0.4)",
                borderColor: "#B69768",
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }}
            onClick={onClick}
        >
            {/* Riflesso diagonale glass */}
            <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)",
                }}
            />

            {/* next/image incompatibile con y-transform parallax — usato motion.img */}
            <motion.img
                src={image.src}
                alt={image.alt}
                className="absolute w-full object-cover"
                style={isDesktop
                    ? { y: yParallax, height: "112%", top: "-6%" }
                    : { height: "100%", top: 0 }
                }
                loading="lazy"
            />
        </motion.div>
    );
}

export default function GalleriaClient({ images }: GalleriaClientProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const isDesktop = useIsDesktop();

    useEffect(() => {
        if (!selectedImage) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImage(null);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [selectedImage]);

    useEffect(() => {
        document.body.style.overflow = selectedImage ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [selectedImage]);

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
                <VideoHero />
                <section className="pt-16 pb-16 px-4 md:px-6 max-w-[1200px] mx-auto">
                    {cardImages.map((image, index) => (
                        <GalleryCard
                            key={image.src}
                            image={image}
                            index={index}
                            isDesktop={isDesktop}
                            onClick={() => setSelectedImage(image.src)}
                        />
                    ))}
                </section>
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Galleria immagine ingrandita"
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="relative w-full max-w-6xl h-full max-h-[90vh] rounded-sm shadow-2xl flex items-center justify-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {selectedImage.endsWith(".mp4") ? (
                                    <video
                                        src={selectedImage}
                                        autoPlay
                                        controls
                                        className="max-w-full max-h-full object-contain rounded-sm"
                                    />
                                ) : (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={selectedImage}
                                        alt="Visualizzazione opera"
                                        className="max-w-full max-h-full object-contain rounded-sm"
                                    />
                                )}
                            </motion.div>

                            <button
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors duration-300 bg-white/10 p-3 rounded-full backdrop-blur-md"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(null);
                                }}
                                title="Chiudi galleria"
                            >
                                <X size={28} strokeWidth={1.5} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
                <Footer />
                <FloatingWhatsApp />
            </div>
        </main>
    );
}
