"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CateringTeaser() {
    return (
        <section className="py-20 md:py-32 bg-gray-900">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="text-[var(--color-cr-gold)] uppercase tracking-[0.4em] text-xs font-medium mb-6">
                        Nuovo servizio
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                        Catering &amp; Buffet Artigianale
                    </h2>
                    <div className="w-16 h-[1px] bg-[var(--color-cr-gold)] mx-auto mb-8 opacity-60" />
                    <p className="text-white/70 font-light text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        Dalla torta al buffet: portiamo la nostra artigianalità a casa tua o nella tua sala,
                        per matrimoni, compleanni, battesimi e ogni occasione speciale nel Sulcis Iglesiente.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/catering"
                            className="inline-block px-10 py-4 bg-[var(--color-cr-gold)] text-white uppercase tracking-widest text-sm font-medium hover:bg-[var(--color-cr-gold-dark)] transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-1"
                        >
                            Scopri il servizio
                        </Link>
                        <a
                            href="https://wa.me/393484223249"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-4 border border-[var(--color-cr-gold)]/50 text-white uppercase tracking-widest text-sm font-medium hover:border-[var(--color-cr-gold)] hover:text-[var(--color-cr-gold)] transition-all duration-500 hover:-translate-y-1"
                        >
                            Richiedi un preventivo
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
