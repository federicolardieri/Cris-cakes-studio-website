"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="chi-siamo" className="py-20 md:py-32 px-6 md:px-12 bg-[var(--color-cr-background)] relative overflow-hidden text-[var(--color-cr-text)]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
                <motion.div
                    className="w-full md:w-1/2 relative h-[400px] sm:h-[500px] md:h-[600px]"
                    initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="absolute inset-0 rounded-sm shadow-2xl overflow-hidden">
                        <Image
                            src="/images/media__1771871540641.jpg"
                            alt="Laboratorio artigianale di cake design a Carbonia"
                            fill
                            className="object-cover transition-transform duration-[20s] hover:scale-105"
                            sizes="(max-w-768px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2 flex flex-col justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Chi Siamo</h2>
                    <div className="w-24 h-[1px] bg-[var(--color-cr-gold-dark)] mb-8 md:mb-10 opacity-60" />

                    <div className="space-y-6 text-gray-700 font-light leading-relaxed text-base md:text-lg">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <strong className="font-medium text-[var(--color-cr-gold-dark)]">Cris Cakes</strong> nasce a Carbonia dall&apos;amore incondizionato per la pasticceria artigianale e per i dettagli che fanno la differenza.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Nel nostro laboratorio, ogni dolce racconta una storia. Selezioniamo meticolosamente ingredienti di altissima qualità per creare torte che non siano solo bellissime da vedere, ma capaci di regalare un&apos;esperienza di gusto indimenticabile per i tuoi eventi in tutto il Sulcis.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Non crediamo nei compromessi: dedichiamo a ogni singola creazione il tempo e la cura necessari affinché il risultato finale sia sempre un&apos;opera d&apos;arte unica, pensata esclusivamente per te e per la tua occasione speciale.
                        </motion.p>
                    </div>

                    <motion.div
                        className="mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                    >
                        <p className="font-serif text-3xl text-[var(--color-cr-gold-dark)] italic">Cristiano</p>
                        <p className="text-sm uppercase tracking-widest text-[#5a5a5a] mt-2">Cake Designer & Founder</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
