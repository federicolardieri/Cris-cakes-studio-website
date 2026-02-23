"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
    {
        title: "Battesimi & Nascite",
        image: "/images/media__1771871540641.jpg"
    },
    {
        title: "Compleanni Bimbi",
        image: "/images/media__1771871540566.jpg"
    },
    {
        title: "Feste a Tema",
        image: "/images/media__1771871540618.jpg"
    },
    {
        title: "Anniversari & Cuori",
        image: "/images/media__1771871540580.jpg"
    }
];

export default function Products() {
    return (
        <section id="le-nostre-torte" className="py-20 md:py-32 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Le Nostre Creazioni</h2>
                    <div className="w-16 h-[1px] bg-[var(--color-cr-gold-dark)] mx-auto mb-8 opacity-60" />
                    <p className="text-[#5a5a5a] font-serif text-base md:text-lg max-w-2xl mx-auto px-4 md:px-0">
                        Ogni occasione speciale merita un dolce unico. Scopri le nostre creazioni pensate per accompagnare i tuoi momenti più belli, realizzate a mano con passione.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="relative group h-[350px] sm:h-[400px] md:h-[450px] overflow-hidden bg-[var(--color-cr-background)] rounded-sm cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-700"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1.5, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Immagine inserita dall'utente o fallback */}
                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover transition-transform duration-[15s] ease-linear group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:-translate-y-3">
                                <h3 className="font-serif text-2xl text-white mb-4 drop-shadow-md">{category.title}</h3>
                                <div className="w-8 h-[1px] bg-[var(--color-cr-gold-dark)] transition-all duration-700 group-hover:w-16 group-hover:bg-white" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                >
                    <a href="https://wa.me/393454168350" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-gray-900 text-white uppercase tracking-widest text-sm font-medium hover:bg-[var(--color-cr-gold)] transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-1 mb-4">
                        Richiedi la tua Torta
                    </a>
                    <br />
                    <a href="/galleria" className="inline-block border-b border-[var(--color-cr-gold)] text-[var(--color-cr-gold-dark)] font-medium uppercase tracking-widest text-sm hover:text-gray-900 hover:border-gray-900 transition-colors pb-1 mt-4">
                        Sfoglia la galleria completa
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
