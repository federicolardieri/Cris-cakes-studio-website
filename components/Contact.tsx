"use client";

import { motion } from "framer-motion";
import { Instagram, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contatti" className="py-20 md:py-32 px-6 md:px-12 bg-white text-[var(--color-cr-text)] border-t border-[var(--color-cr-background)]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-16">

                <motion.div
                    className="w-full md:w-1/2 space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div>
                        <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-cr-gold-dark)] mb-6">Contattaci</h2>
                        <div className="w-16 h-[1px] bg-[var(--color-cr-gold-dark)] mb-8 opacity-60" />
                        <p className="text-[#5a5a5a] font-light leading-relaxed max-w-md text-base md:text-lg">
                            Siamo a tua disposizione per trasformare la tua idea in realtà. <br className="hidden md:block" />
                            <span className="text-[var(--color-cr-gold-dark)] font-medium mt-2 block tracking-wide">Prenota la tua torta con almeno 5 giorni di anticipo.</span>
                        </p>
                    </div>

                    <div className="space-y-6 text-[#5a5a5a] font-light pt-4 border-t border-[var(--color-cr-background)] w-full md:w-3/4">
                        <a href="https://wa.me/393454168350" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[var(--color-cr-gold)] transition-colors duration-500 group">
                            <Phone className="text-[var(--color-cr-gold-dark)] flex-shrink-0 group-hover:scale-110 transition-transform duration-500" size={20} />
                            <span className="text-sm sm:text-base">+39 345 416 8350 <span className="text-xs sm:text-sm text-gray-400 ml-1 sm:ml-2 group-hover:text-[var(--color-cr-gold)]/70 transition-colors">(WhatsApp)</span></span>
                        </a>
                        <div className="flex items-center gap-4 hover:text-[var(--color-cr-gold)] transition-colors duration-500 group">
                            <Phone className="text-[var(--color-cr-gold-dark)] flex-shrink-0 group-hover:scale-110 transition-transform duration-500" size={20} />
                            <span className="text-sm sm:text-base">0781 64469 <span className="text-xs sm:text-sm text-gray-400 ml-1 sm:ml-2 transition-colors">(Fisso)</span></span>
                        </div>
                        <a href="https://instagram.com/criscakesstudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[var(--color-cr-gold)] transition-colors duration-500 group">
                            <Instagram className="text-[var(--color-cr-gold-dark)] flex-shrink-0 group-hover:scale-110 transition-transform duration-500" size={20} />
                            <span className="text-sm sm:text-base">@criscakesstudio</span>
                        </a>
                        <div className="flex items-center gap-4 hover:text-[var(--color-cr-gold)] transition-colors duration-500 group cursor-default">
                            <MapPin className="text-[var(--color-cr-gold-dark)] flex-shrink-0 group-hover:scale-110 transition-transform duration-500" size={20} />
                            <span className="text-sm sm:text-base">Laboratorio Artigianale (Su Appuntamento)</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/3 flex flex-col justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="bg-[var(--color-cr-background)] p-8 md:p-12 rounded-sm border border-[var(--color-cr-gold-dark)]/10 text-center shadow-lg transition-transform duration-700 ease-[0.22,1,0.36,1] hover:-translate-y-2 hover:shadow-xl">
                        <h3 className="font-serif text-2xl mb-4 md:mb-6 text-[var(--color-cr-gold-dark)]">Hai un evento in arrivo?</h3>
                        <p className="text-[#5a5a5a] text-sm md:text-base font-light mb-8 md:mb-10 leading-relaxed">
                            Richiedi subito un preventivo gratuito e personalizzato per la tua torta e assicurati la tua data.
                        </p>
                        <a
                            href="https://wa.me/393454168350"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full py-4 md:py-5 bg-[var(--color-cr-gold)] text-white uppercase tracking-widest text-sm font-medium hover:bg-[var(--color-cr-gold-dark)] transition-all duration-500 shadow-sm hover:shadow-lg"
                        >
                            Richiedi Preventivo
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
