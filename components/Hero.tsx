"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[70vh] md:min-h-[85vh] w-full flex flex-col items-center pt-32 pb-16 px-6 overflow-hidden bg-[var(--color-cr-background)] text-[var(--color-cr-text)]">

            {/* Video Background – desktop only, risparmia banda su mobile */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                poster="/images/media__1771871540600.avif"
                className="hidden md:block absolute inset-0 z-0 w-full h-full object-cover scale-[1.02] opacity-15 pointer-events-none"
            >
                <source src="/video-bg.mp4" type="video/mp4" />
            </video>
            {/* Mobile: immagine statica al posto del video */}
            <div
                className="md:hidden absolute inset-0 z-0 opacity-10 pointer-events-none bg-cover bg-center scale-[1.02]"
                style={{ backgroundImage: "url('/images/media__1771871540600.avif')" }}
            />

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
                            Torte Personalizzate e Cake Design a Carbonia
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
                        Cris Cakes è il tuo studio creativo per torte artigianali indimenticabili. Esperti in cake design per ogni evento nel Sulcis Iglesiente.
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
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <a href="#contatti" className="block w-full text-center sm:inline-block sm:w-auto px-8 sm:px-10 py-4 bg-[var(--color-cr-gold)] text-white uppercase tracking-widest text-sm font-medium hover:bg-[var(--color-cr-gold-dark)] transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                            Richiedi Preventivo
                        </a>
                        <a href="tel:+393454168350" className="block w-full text-center sm:inline-block sm:w-auto px-8 sm:px-10 py-4 border border-[var(--color-cr-gold)] text-[var(--color-cr-gold-dark)] bg-white/50 backdrop-blur-sm uppercase tracking-widest text-sm font-medium hover:bg-[var(--color-cr-gold)] hover:text-white transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                            Chiama Ora
                        </a>
                    </motion.div>

                </div>

                {/* Right Image Content */}
                <motion.div
                    className="w-full md:w-1/2 relative flex items-center justify-center mt-10 md:mt-0 pb-6"
                    initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                >
                    <div className="relative">
                        {/* Cornice decorativa offset */}
                        <div className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 border border-[var(--color-cr-gold)]/40" />
                        {/* Foto torta */}
                        <div className="relative w-[200px] sm:w-[260px] md:w-[340px] h-[260px] sm:h-[330px] md:h-[430px] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/86643b3c-c45f-4970-a495-01b23a369320.JPG"
                                alt="Torta compleanno artigianale con rose rosse e farfalla – Cris Cakes Carbonia"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 640px) 200px, (max-width: 768px) 260px, 340px"
                            />
                            {/* Vignettatura oro sottile */}
                            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(182,151,104,0.12)]" />
                        </div>
                        {/* Label in basso */}
                        <div className="absolute -bottom-5 left-0 right-0 flex justify-center">
                            <span className="bg-[var(--color-cr-background)] px-4 py-1 font-sans text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[var(--color-cr-gold-dark)] border-b border-[var(--color-cr-gold)]/40">
                                Creazione Artigianale
                            </span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
