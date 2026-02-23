"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? "bg-[var(--color-cr-background)]/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Navigation Links - Left */}
                <nav className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
                    <a href="/#contatti" className="hover:text-[var(--color-cr-gold)] transition-colors">Contattaci</a>
                    <a href="/#le-nostre-torte" className="hover:text-[var(--color-cr-gold)] transition-colors">Creazioni</a>
                </nav>

                {/* Logo - Center/Left on mobile */}
                <a href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2 flex flex-col items-center">
                    <span className="font-serif text-[1.35rem] sm:text-2xl md:text-3xl lg:text-4xl text-[var(--color-cr-gold-dark)] tracking-[0.2em] uppercase whitespace-nowrap">
                        Cris Cakes
                    </span>
                </a>

                {/* Navigation Links - Right */}
                <nav className="flex gap-6 md:gap-8 items-center text-sm font-medium tracking-widest uppercase ml-auto">
                    <a href="/galleria" className="hidden md:block hover:text-[var(--color-cr-gold)] transition-colors">Galleria</a>
                    <a href="https://wa.me/393454168350" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[var(--color-cr-gold)] text-white hover:bg-[var(--color-cr-gold-dark)] transition-colors rounded-sm shadow-sm hover:shadow-md">
                        Preventivo
                    </a>
                </nav>
            </div>
        </motion.header>
    );
}
