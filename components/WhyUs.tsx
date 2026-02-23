"use client";

import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, Leaf, ChefHat, Medal, Palette } from "lucide-react";

const reasons = [
    {
        title: "Artigianalità Pura",
        description: "Ogni torta è un pezzo unico, realizzato interamente a mano curando ogni minimo dettaglio decorativo.",
        icon: ChefHat
    },
    {
        title: "Ingredienti Premium",
        description: "Selezioniamo materie prime di altissima qualità, fresche e genuine, senza compromessi sul sapore.",
        icon: Leaf
    },
    {
        title: "Design su Misura",
        description: "Ascoltiamo i tuoi desideri per progettare un'estetica che rispecchi perfettamente il tema del tuo evento.",
        icon: Palette
    },
    {
        title: "Passione & Creatività",
        description: "Amiamo il nostro lavoro. Questo amore si vede in ogni sfumatura, in ogni petalo, in ogni sorriso dei nostri clienti.",
        icon: HeartHandshake
    },
    {
        title: "Qualità Garantita",
        description: "Rispettiamo elevati standard di igiene e preparazione per garantirti un prodotto eccellente e sicuro.",
        icon: Medal
    },
    {
        title: "Attenzione ai Dettagli",
        description: "Crediamo che la bellezza risieda nelle piccole cose. Niente è lasciato al caso nelle nostre creazioni.",
        icon: Sparkles
    }
];

export default function WhyUs() {
    return (
        <section className="py-20 md:py-32 bg-white relative">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <motion.div
                    className="text-center mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Perché Sceglierci</h2>
                    <div className="w-16 h-[1px] bg-[var(--color-cr-gold-dark)] mx-auto opacity-60" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 text-center lg:text-left">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <motion.div
                                key={index}
                                className="group flex flex-col items-center lg:items-start"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="w-16 h-16 rounded-full bg-[var(--color-cr-background)] border border-[var(--color-cr-gold)]/20 flex items-center justify-center mb-6 text-[var(--color-cr-text)] transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:scale-110 group-hover:bg-[var(--color-cr-gold)] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(182,151,104,0.4)]">
                                    <Icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-serif text-2xl text-gray-900 mb-4">{reason.title}</h3>
                                <p className="text-[#5a5a5a] font-light leading-relaxed">
                                    {reason.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
