"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const events = [
    {
        number: "01",
        title: "Matrimoni & Unioni",
        description: "Buffet eleganti e finger food raffinati per il giorno più importante della vostra vita.",
    },
    {
        number: "02",
        title: "Compleanni & Anniversari",
        description: "Preparazioni su misura per celebrare ogni traguardo con stile e sapori indimenticabili.",
    },
    {
        number: "03",
        title: "Battesimi & Comunioni",
        description: "Dolcezze e salato artigianale per accogliere i vostri ospiti con cura e calore.",
    },
    {
        number: "04",
        title: "Feste Private",
        description: "Dal piccolo aperitivo alla grande festa, organizziamo tutto noi con passione.",
    },
    {
        number: "05",
        title: "Eventi Aziendali",
        description: "Professionalità e qualità per inaugurazioni, cene di gala e meeting esclusivi.",
    },
    {
        number: "06",
        title: "Cerimonie & Ricorrenze",
        description: "Ogni momento speciale merita un catering all'altezza delle aspettative.",
    },
];

const menuItems = [
    "60 Panini imbottiti",
    "60 Tramezzini",
    "50 Pizzette sfoglia",
    "Salatini assortiti",
    "2 Taglieri salsiccia e olive",
    "45 Spiedini caprese (pomodorini, olive nere e mozzarella)",
    "50 Cubetti di frittata con cipolla",
    "48 Coni con mini polpette fritte",
    "45 Barchette con insalata di riso",
    "20 Crostini paté olive",
    "20 Crostini paté carciofi",
    "10 Ichnusa (in omaggio)",
];

export default function CateringClient() {
    return (
        <main className="min-h-screen bg-[var(--color-cr-background)] overflow-x-hidden">
            {/* Hero */}
            <section className="relative bg-gray-900 py-40 flex items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(45deg, var(--color-cr-gold) 0px, var(--color-cr-gold) 1px, transparent 1px, transparent 60px)",
                    }}
                />
                <motion.div
                    className="relative z-10 px-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="text-[var(--color-cr-gold)] uppercase tracking-[0.4em] text-xs font-medium mb-6">
                        Cris Cakes
                    </p>
                    <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Catering Artigianale</h1>
                    <div className="w-16 h-[1px] bg-[var(--color-cr-gold)] mx-auto mb-8 opacity-60" />
                    <p className="text-white/70 font-light text-lg md:text-xl max-w-xl mx-auto">
                        Ogni evento merita un tocco artigianale
                    </p>
                </motion.div>
            </section>

            {/* Intro */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">
                            La stessa cura delle torte, portata al tuo evento
                        </h2>
                        <div className="w-16 h-[1px] bg-[var(--color-cr-gold-dark)] mx-auto mb-8 opacity-60" />
                        <p className="text-[#5a5a5a] font-light text-lg leading-relaxed">
                            Il servizio catering di Cris Cakes porta a casa tua o nella tua sala la stessa cura
                            artigianale che mettiamo in ogni torta. Preparazioni fresche, ingredienti di qualità
                            e un&apos;attenzione ai dettagli che si sente in ogni boccone. Per ogni occasione a
                            Carbonia e nel Sulcis Iglesiente.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Griglia eventi */}
            <section className="py-20 md:py-32 bg-[var(--color-cr-background)]">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <motion.div
                        className="text-center mb-16 md:mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Per ogni occasione</h2>
                        <div className="w-16 h-[1px] bg-[var(--color-cr-gold-dark)] mx-auto opacity-60" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                className="relative group bg-white/60 p-8 rounded-sm border border-[var(--color-cr-gold)]/15 shadow-sm hover:shadow-xl transition-all duration-700 ease-[0.22,1,0.36,1] hover:-translate-y-2"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 1.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="text-7xl font-serif text-[var(--color-cr-gold)] absolute -top-4 -right-2 opacity-20 select-none pointer-events-none">
                                    {event.number}
                                </div>
                                <h3 className="font-serif text-xl text-gray-900 mb-4 relative z-10">{event.title}</h3>
                                <div className="w-8 h-[1px] bg-[var(--color-cr-gold-dark)] mb-4 opacity-60 transition-all duration-700 group-hover:w-16" />
                                <p className="text-[#5a5a5a] font-light leading-relaxed text-sm relative z-10">
                                    {event.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* La nostra proposta */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">La nostra proposta</h2>
                        <div className="w-16 h-[1px] bg-[var(--color-cr-gold-dark)] mx-auto opacity-60" />
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Immagine */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="border border-[var(--color-cr-gold)]/30 p-2">
                                <Image
                                    src="/images/catering.jpg"
                                    alt="Menù Catering Cris Cakes Carbonia"
                                    width={600}
                                    height={600}
                                    className="w-full object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* Contenuto */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-4">
                                Un esempio di quello che possiamo preparare
                            </h3>
                            <div className="w-8 h-[1px] bg-[var(--color-cr-gold-dark)] mb-6 opacity-60" />
                            <p className="text-[#5a5a5a] font-light leading-relaxed mb-8">
                                Questa è una delle nostre configurazioni standard. Ogni menu è personalizzabile
                                in base alle tue esigenze e al numero di ospiti.
                            </p>
                            <ul className="space-y-3 mb-10">
                                {menuItems.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[#5a5a5a] font-light text-sm">
                                        <span className="text-[var(--color-cr-gold)] mt-0.5 shrink-0">—</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://wa.me/393484223249"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-10 py-4 bg-gray-900 text-white uppercase tracking-widest text-sm font-medium hover:bg-[var(--color-cr-gold)] transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-1"
                            >
                                Richiedi un preventivo
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-gray-900 text-center">
                <motion.div
                    className="max-w-2xl mx-auto px-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Hai in mente un evento?</h2>
                    <div className="w-16 h-[1px] bg-[var(--color-cr-gold)] mx-auto mb-8 opacity-60" />
                    <p className="text-white/70 font-light text-lg mb-10">
                        Scrivici su WhatsApp e costruiamo insieme il menu perfetto per la tua occasione speciale.
                    </p>
                    <a
                        href="https://wa.me/393484223249"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-12 py-5 bg-[var(--color-cr-gold)] text-white uppercase tracking-widest text-sm font-medium hover:bg-[var(--color-cr-gold-dark)] transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Scrivici su WhatsApp
                    </a>
                </motion.div>
            </section>
        </main>
    );
}
