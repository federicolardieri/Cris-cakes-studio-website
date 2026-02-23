"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";

// Simulated image list. In a real scenario this might come from a CMS or folder.
const galleryImages = [
    { src: "/video-bg.mp4", alt: "Video Creazione Torta Artigianale" },
    { src: "/images/media__1771871540600.jpg", alt: "Torta Compleanno Pietro Viola Fabry personalizzata Carbonia" },
    { src: "/images/media__1771871540566.jpg", alt: "Torta Minnie Mouse cake design Carbonia" },
    { src: "/images/media__1771871540618.jpg", alt: "Torta Leopardata eventi speciali Sulcis" },
    { src: "/images/media__1771871540580.jpg", alt: "Torta Cuore Leopardato artigianale Sardegna" },
    { src: "/images/media__1771871540641.jpg", alt: "Torta Battesimo elegante Carbonia" },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="galleria" className="py-20 md:py-32 bg-[var(--color-cr-background)] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                <motion.div
                    className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="text-left max-w-2xl px-2">
                        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">La Nostra Arte</h2>
                        <div className="w-16 h-[1px] bg-[var(--color-cr-gold-dark)] mb-6 opacity-60" />
                        <p className="text-[#5a5a5a] font-serif text-base md:text-lg">
                            Dettagli fatti a mano, texture delicate e colori armoniosi. Assapora l&apos;eleganza di ogni singola creazione sfogliando il nostro carosello.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[var(--color-cr-gold)] flex items-center justify-center text-[var(--color-cr-gold-dark)] hover:bg-[var(--color-cr-gold)] hover:text-white transition-all duration-300 bg-white/50 backdrop-blur-sm"
                            aria-label="Precedente"
                        >
                            <ChevronLeft size={20} strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[var(--color-cr-gold)] flex items-center justify-center text-[var(--color-cr-gold-dark)] hover:bg-[var(--color-cr-gold)] hover:text-white transition-all duration-300 bg-white/50 backdrop-blur-sm"
                            aria-label="Successivo"
                        >
                            <ChevronRight size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative -mx-4 md:-mx-8 px-4 md:px-8">
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-4 sm:gap-8 pb-12 snap-x snap-mandatory hide-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {galleryImages.map((item, index) => {
                            const isVideo = item.src.endsWith('.mp4');
                            return (
                                <motion.div
                                    key={index}
                                    className="relative flex-none w-[85vw] sm:w-[350px] md:w-[450px] h-[400px] sm:h-[450px] md:h-[600px] group overflow-hidden bg-white/50 rounded-sm cursor-pointer snap-center shadow-lg"
                                    initial={{ opacity: 0, x: 50, filter: "blur(5px)" }}
                                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    onClick={() => setSelectedImage(item.src)}
                                >
                                    {isVideo ? (
                                        <video
                                            src={item.src}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover transition-transform duration-[15s] ease-out group-hover:scale-110"
                                        />
                                    ) : (
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            className="object-cover transition-transform duration-[15s] ease-out group-hover:scale-110"
                                            sizes="(max-w-768px) 85vw, 450px"
                                        />
                                    )}
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gray-900/0 md:group-hover:bg-gray-900/30 transition-colors duration-700 ease-[0.22,1,0.36,1] flex items-center justify-center">
                                        <motion.div
                                            className="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 transform md:translate-y-4 md:group-hover:translate-y-0 absolute bottom-6 right-6 md:relative md:bottom-auto md:right-auto opacity-100"
                                        >
                                            <span className="text-white font-serif italic text-sm md:text-xl md:drop-shadow-lg md:tracking-widest px-4 py-2 md:px-8 md:py-3 border border-white/50 backdrop-blur-sm bg-black/40 md:bg-white/10 rounded-full shadow-lg">
                                                {isVideo ? "+ Riproduci" : "+ Ingrandisci"}
                                            </span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* View All Card */}
                        <motion.div
                            className="relative flex-none w-[85vw] sm:w-[350px] md:w-[450px] h-[400px] sm:h-[450px] md:h-[600px] group overflow-hidden bg-[var(--color-cr-gold)]/10 border border-[var(--color-cr-gold)]/30 rounded-sm cursor-pointer snap-center flex flex-col items-center justify-center text-center p-6 md:p-8 transition-colors hover:bg-[var(--color-cr-gold)]/20"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1.2, delay: galleryImages.length * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Link href="/galleria" className="absolute inset-0 z-10" aria-label="Visita la galleria completa"></Link>
                            <h3 className="font-serif text-3xl text-[var(--color-cr-gold-dark)] mb-4">Scopri l&apos;intera collezione</h3>
                            <p className="text-[#5a5a5a] mb-8 max-w-xs">Sfoglia tutte le nostre creazioni e lasciati ispirare per il tuo prossimo evento.</p>
                            <span className="inline-block px-8 py-4 bg-[var(--color-cr-gold)] text-white uppercase tracking-widest text-sm font-medium hover:bg-[var(--color-cr-gold-dark)] transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:-translate-y-1">
                                Visita la Galleria
                            </span>
                        </motion.div>

                    </div>
                </div>

                {/* Mobile Hint: Swipe to Explore */}
                <motion.div
                    className="flex md:hidden items-center justify-center gap-2 mt-4 text-[var(--color-cr-gold-dark)] opacity-60 text-xs tracking-widest uppercase font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    viewport={{ once: true }}
                >
                    <ChevronLeft size={14} />
                    <span>Scorri per esplorare</span>
                    <ChevronRight size={14} />
                </motion.div>

                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <Link href="/galleria" className="inline-block border-b border-[var(--color-cr-gold)] pb-1 text-[var(--color-cr-gold-dark)] font-serif italic text-lg hover:text-[var(--color-cr-gold)] hover:border-transparent transition-all duration-300">
                        O visualizza tutto l&apos;archivio &rarr;
                    </Link>
                </motion.div>

            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors duration-300 z-50 bg-black/20 p-2 rounded-full backdrop-blur-md"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X size={32} strokeWidth={1.5} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full max-w-5xl h-full max-h-[90vh] rounded-sm overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedImage.endsWith('.mp4') ? (
                                <video
                                    src={selectedImage}
                                    autoPlay
                                    controls
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <Image
                                    src={selectedImage}
                                    alt="Dettaglio opera d'arte"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
