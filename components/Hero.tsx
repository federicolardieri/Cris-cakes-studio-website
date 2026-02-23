"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[70vh] md:min-h-[85vh] w-full flex flex-col items-center pt-32 pb-16 px-6 overflow-hidden bg-[var(--color-cr-background)] text-[var(--color-cr-text)]">

            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 z-0 w-full h-full object-cover scale-[1.02] opacity-15 pointer-events-none"
            >
                <source src="/video-bg.mp4" type="video/mp4" />
            </video>

            {/* Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-multiply"
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} />

            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 mt-10 md:mt-20">

                {/* Left Text Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--color-cr-gold-dark)] mb-4 tracking-wide leading-tight">
                            Torte artigianali personalizzate a Carbonia
                        </h1>
                    </motion.div>

                    <motion.div
                        className="w-16 md:w-24 h-[1px] bg-[var(--color-cr-gold)] mb-8 opacity-60"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        style={{ transformOrigin: "left" }}
                    />

                    <motion.p
                        className="font-serif text-lg md:text-xl leading-relaxed mb-6 text-[#5a5a5a] max-w-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Cake design per compleanni, anniversari, battesimi ed eventi speciali in tutto il Sulcis.
                    </motion.p>

                    <motion.p
                        className="font-sans text-sm text-[var(--color-cr-gold-dark)] font-medium mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                    >
                        * Prenotazione consigliata con almeno 5 giorni di anticipo
                    </motion.p>

                    <motion.ul
                        className="font-sans text-base mb-12 space-y-3 text-[#4A4A4A]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                    >
                        <li className="flex items-center justify-center md:justify-start gap-3"><div className="w-1.5 h-1.5 bg-[var(--color-cr-gold-dark)] rounded-full" /> Design esclusivo su misura</li>
                        <li className="flex items-center justify-center md:justify-start gap-3"><div className="w-1.5 h-1.5 bg-[var(--color-cr-gold-dark)] rounded-full" /> Gusto autentico</li>
                        <li className="flex items-center justify-center md:justify-start gap-3"><div className="w-1.5 h-1.5 bg-[var(--color-cr-gold-dark)] rounded-full" /> Decorazioni eleganti</li>
                    </motion.ul>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 1 }}
                        className="w-full sm:w-auto"
                    >
                        <a href="#contatti" className="block w-full text-center sm:inline-block sm:w-auto px-8 sm:px-10 py-4 bg-[var(--color-cr-gold)] text-white uppercase tracking-widest text-sm font-medium hover:bg-[var(--color-cr-gold-dark)] transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                            Richiedi Preventivo
                        </a>
                    </motion.div>

                </div>

                {/* Right Image Content */}
                <motion.div
                    className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] md:h-[600px] flex items-center justify-center mt-10 md:mt-0"
                    initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                >
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-[var(--color-cr-gold)]/40 flex items-center justify-center bg-white/50 backdrop-blur-md shadow-2xl transition-transform duration-[10s] ease-linear hover:scale-105">
                        <div className="absolute inset-2 md:inset-4 rounded-full border border-[var(--color-cr-gold-dark)]/10" />
                        <div className="relative w-full h-full p-6 md:p-12 flex flex-col items-center justify-center text-center">
                            <span className="font-serif text-2xl sm:text-3xl md:text-5xl text-[var(--color-cr-gold-dark)] tracking-[0.15em] uppercase leading-none mb-4">
                                Cris Cakes
                            </span>
                            <div className="w-3/4 h-[1px] bg-[var(--color-cr-gold)] opacity-70 mb-4" />
                            <span className="font-sans text-xs sm:text-sm md:text-base text-[#5a5a5a] tracking-[0.3em] uppercase font-light">
                                Cake Studio
                            </span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
