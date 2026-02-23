"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
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

export default function GalleriaClient({ images }: GalleriaClientProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="relative min-h-screen bg-[var(--color-cr-background)] text-[var(--color-cr-text)] selection:bg-[var(--color-cr-gold)] selection:text-white">
            {/* Video Background Globale per la Galleria */}
            <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-15"
                >
                    <source src="/video-bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-cr-background)]/80 via-[var(--color-cr-background)]/50 to-[var(--color-cr-background)]" />
                <div className="absolute inset-0 opacity-30 mix-blend-multiply"
                    style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} />
            </div>

            <div className="relative z-10">
                <Navbar />

                <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-6 max-w-[1600px] mx-auto min-h-[80vh]">
                    <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[var(--color-cr-gold-dark)] mb-6">L&apos;Archivio Delle Emozioni</h1>
                        <div className="w-24 h-[1px] bg-[var(--color-cr-gold)] mx-auto mb-6 md:mb-8 opacity-60" />
                        <p className="text-[#5a5a5a] font-serif text-base sm:text-lg md:text-xl max-w-3xl mx-auto italic px-2">
                            Una raccolta completa di tutte le nostre creazioni passate. Clicca su una foto per visualizzarla a schermo intero e lasciati ispirare dai dettagli minuziosi di ognuna.
                        </p>
                    </motion.div>

                    {/* Masonry CSS Layout */}
                    <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
                        {images.map((img, index) => (
                            <motion.div
                                key={index}
                                className="relative group overflow-hidden bg-white/50 rounded-sm cursor-pointer shadow-md inline-block w-full"
                                style={{ breakInside: 'avoid' }}
                                initial={{ opacity: 0, filter: "blur(5px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                onClick={() => setSelectedImage(img.src)}
                            >
                                {img.src.endsWith('.mp4') ? (
                                    <video
                                        src={img.src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-auto object-cover transition-transform duration-[15s] ease-out group-hover:scale-105"
                                    />
                                ) : (
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-auto object-cover transition-transform duration-[15s] ease-out group-hover:scale-105"
                                        loading="lazy"
                                    />
                                )}
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/40 transition-colors duration-700 ease-[0.22,1,0.36,1] flex items-center justify-center">
                                    <motion.div
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-y-4 group-hover:translate-y-0"
                                    >
                                        <span className="text-white font-serif italic text-lg drop-shadow-lg px-6 py-2 border border-white/50 bg-white/10 backdrop-blur-md rounded-full">
                                            + Ingrandisci
                                        </span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Lightbox Modal Globale */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors duration-300 z-50 bg-white/10 p-3 rounded-full backdrop-blur-md"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(null);
                                }}
                                title="Chiudi galleria"
                            >
                                <X size={28} strokeWidth={1.5} />
                            </button>

                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="relative w-full max-w-6xl h-full max-h-[90vh] rounded-sm shadow-2xl flex items-center justify-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {selectedImage.endsWith('.mp4') ? (
                                    <video
                                        src={selectedImage}
                                        autoPlay
                                        controls
                                        className="max-w-full max-h-full object-contain rounded-sm"
                                    />
                                ) : (
                                    <img
                                        src={selectedImage}
                                        alt="Visualizzazione opera"
                                        className="max-w-full max-h-full object-contain rounded-sm"
                                    />
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <Footer />
                <FloatingWhatsApp />
            </div>
        </main>
    );
}
