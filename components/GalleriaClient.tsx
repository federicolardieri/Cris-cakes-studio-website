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

const HERO_INTERVAL = 7; // 1 hero + 6 grid per blocco

function HeroBlock({
    image,
    blockIdx,
    onClick,
}: {
    image: GalleryImage;
    blockIdx: number;
    onClick: () => void;
}) {
    const isVideo = image.src.endsWith(".mp4");
    const xEnd = blockIdx % 2 === 0 ? -20 : 20;

    return (
        <motion.div
            className="relative overflow-hidden w-full max-w-2xl mx-auto cursor-pointer group rounded-sm shadow-xl mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={onClick}
        >
            {isVideo ? (
                <video
                    src={image.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto block"
                />
            ) : (
                <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto block"
                    loading="lazy"
                    animate={{ scale: [1, 1.04], x: [0, xEnd] }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                />
            )}

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 text-white font-serif italic text-lg px-6 py-2 border border-white/50 bg-white/10 backdrop-blur-md rounded-full">
                    + Ingrandisci
                </span>
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 pointer-events-none">
                <span className="inline-block text-[var(--color-cr-gold)] border border-[var(--color-cr-gold)]/60 text-[9px] md:text-[10px] tracking-[2.5px] uppercase font-sans px-3 py-1 rounded-full mb-2 md:mb-3">
                    Creazione in Evidenza
                </span>
                <p className="text-white/75 font-serif italic text-xs md:text-sm leading-relaxed max-w-xl">
                    {image.alt}
                </p>
            </div>
        </motion.div>
    );
}

function GridItem({
    image,
    gridIdx,
    onClick,
}: {
    image: GalleryImage;
    gridIdx: number;
    onClick: () => void;
}) {
    const isVideo = image.src.endsWith(".mp4");

    return (
        <motion.div
            className="relative overflow-hidden cursor-pointer group rounded-md aspect-[3/4]"
            style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "rgba(255,255,255,0.15)",
                boxShadow: "0 4px 22px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration: 0.7,
                delay: gridIdx * 0.07,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
                y: -5,
                borderColor: "rgba(182,151,104,0.55)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(182,151,104,0.3), inset 0 1px 0 rgba(255,255,255,0.18)",
                transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
            }}
            onClick={onClick}
        >
            {isVideo ? (
                <video
                    src={image.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
            ) : (
                <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-[1.07]"
                    loading="lazy"
                />
            )}

            {/* Riflesso diagonale glass */}
            <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 55%)" }}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 z-20 flex items-end justify-end p-3">
                <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 text-white font-serif italic text-xs md:text-sm px-3 md:px-4 py-1.5 border border-[rgba(182,151,104,0.6)] bg-black/40 backdrop-blur-sm rounded-full">
                    + Ingrandisci
                </span>
            </div>
        </motion.div>
    );
}

export default function GalleriaClient({ images }: GalleriaClientProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const blocks = [];
    for (let i = 0; i < images.length; i += HERO_INTERVAL) {
        blocks.push({
            hero: images[i],
            grid: images.slice(i + 1, i + HERO_INTERVAL),
        });
    }

    return (
        <main className="relative min-h-screen bg-[var(--color-cr-background)] text-[var(--color-cr-text)] selection:bg-[var(--color-cr-gold)] selection:text-white overflow-x-hidden">
            {/* Video Background */}
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
                <div
                    className="absolute inset-0 opacity-30 mix-blend-multiply"
                    style={{
                        backgroundImage:
                            "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
                    }}
                />
            </div>

            <div className="relative z-10">
                <Navbar />

                <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-6 max-w-[1200px] mx-auto min-h-[80vh]">
                    {/* Titolo */}
                    <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[var(--color-cr-gold-dark)] mb-6">
                            L&apos;Archivio Delle Emozioni
                        </h1>
                        <div className="w-24 h-[1px] bg-[var(--color-cr-gold)] mx-auto mb-6 md:mb-8 opacity-60" />
                        <p className="text-[#5a5a5a] font-serif text-base sm:text-lg md:text-xl max-w-3xl mx-auto italic px-2">
                            Una raccolta completa di tutte le nostre creazioni passate. Clicca su una foto per
                            visualizzarla a schermo intero e lasciati ispirare dai dettagli minuziosi di ognuna.
                        </p>
                    </motion.div>

                    {/* Layout Editoriale */}
                    <div className="flex flex-col">
                        {blocks.map((block, blockIdx) => (
                            <div key={blockIdx}>
                                <HeroBlock
                                    image={block.hero}
                                    blockIdx={blockIdx}
                                    onClick={() => setSelectedImage(block.hero.src)}
                                />
                                {block.grid.length > 0 && (
                                    <div
                                        className="relative rounded-md p-3 md:p-4 mb-10 md:mb-14 overflow-hidden"
                                        style={{ background: "linear-gradient(135deg, #2a1f16, #1a1208)" }}
                                    >
                                        {/* Gold radial glow */}
                                        <div
                                            className="absolute inset-0 pointer-events-none"
                                            style={{ background: "radial-gradient(circle at 30% 40%, rgba(182,151,104,0.08) 0%, transparent 65%)" }}
                                        />
                                        <div className="relative grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {block.grid.map((img, gridIdx) => (
                                                <GridItem
                                                    key={gridIdx}
                                                    image={img}
                                                    gridIdx={gridIdx}
                                                    onClick={() => setSelectedImage(img.src)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Lightbox */}
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
                                {selectedImage.endsWith(".mp4") ? (
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
