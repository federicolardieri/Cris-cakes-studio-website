"use client";

import { motion } from "framer-motion";

const steps = [
    {
        step: "01",
        title: "Il Primo Contatto",
        description: "Scrivici su WhatsApp o contattaci telefonicamente condividendo le tue idee, la data dell'evento e il numero di porzioni desiderate."
    },
    {
        step: "02",
        title: "Consulenza e Design",
        description: "Insieme sceglieremo il design, i gusti e i dettagli personalizzati per rendere la tua torta esattamente come l'hai immaginata."
    },
    {
        step: "03",
        title: "La Creazione",
        description: "Ci mettiamo all'opera nel nostro laboratorio, preparando basi fresche e decorazioni artigianali con la massima cura."
    },
    {
        step: "04",
        title: "Il Ritiro",
        description: "La tua torta sarà pronta per essere ritirata presso il nostro studio, confezionata in modo elegante e sicuro."
    }
];

export default function HowItWorks() {
    return (
        <section className="py-32 bg-[var(--color-cr-background)]">
            <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
                <motion.div
                    className="mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Come Funziona</h2>
                    <div className="w-16 h-[1px] bg-[var(--color-cr-gold-dark)] mx-auto mb-8 opacity-60" />
                    <p className="text-[#5a5a5a] font-light text-lg">Quattro semplici passi per trasformare i tuoi desideri in dolcezza.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1.5, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="text-7xl font-serif text-[var(--color-cr-gold)] absolute -top-8 -right-4 opacity-30 z-20 select-none pointer-events-none transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-110 group-hover:opacity-50 cursor-default">
                                {item.step}
                            </div>
                            <div className="relative z-10 text-left bg-white/40 p-8 rounded-sm backdrop-blur-sm border border-[var(--color-cr-gold-dark)]/5 shadow-sm group-hover:shadow-xl transition-all duration-700 ease-[0.22,1,0.36,1] h-full group-hover:-translate-y-2">
                                <h3 className="font-serif text-xl text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-[#5a5a5a] font-light leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
