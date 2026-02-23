"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when clicking a link
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: "Contattaci", href: "/#contatti" },
        { name: "Creazioni", href: "/#le-nostre-torte" },
        { name: "Galleria", href: "/galleria" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled || isOpen ? "bg-[var(--color-cr-background)]/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">

                {/* Mobile Menu Button - Left */}
                <button
                    className="md:hidden text-[var(--color-cr-gold-dark)] hover:text-[var(--color-cr-gold)] transition-colors p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                </button>

                {/* Navigation Links - Left (Desktop) */}
                <nav className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
                    <Link href="/#contatti" className="hover:text-[var(--color-cr-gold)] transition-colors">Contattaci</Link>
                    <Link href="/#le-nostre-torte" className="hover:text-[var(--color-cr-gold)] transition-colors">Creazioni</Link>
                </nav>

                {/* Logo - Center */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
                >
                    <span className="font-serif text-[1.4rem] sm:text-2xl md:text-3xl lg:text-4xl text-[var(--color-cr-gold-dark)] tracking-[0.2em] uppercase whitespace-nowrap">
                        Cris Cakes
                    </span>
                </Link>

                {/* Navigation Links - Right (Desktop) */}
                <nav className="flex gap-6 md:gap-8 items-center text-sm font-medium tracking-widest uppercase ml-auto">
                    <Link href="/galleria" className="hidden md:block hover:text-[var(--color-cr-gold)] transition-colors">Galleria</Link>
                    <a href="https://wa.me/393454168350" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[var(--color-cr-gold)] text-white hover:bg-[var(--color-cr-gold-dark)] transition-colors rounded-sm shadow-sm hover:shadow-md hidden sm:block">
                        Preventivo
                    </a>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden bg-[var(--color-cr-background)] border-t border-[var(--color-cr-gold)]/10 overflow-hidden"
                    >
                        <nav className="flex flex-col items-center py-10 gap-8 uppercase tracking-[0.3em] font-medium text-sm">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="hover:text-[var(--color-cr-gold)] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/393454168350"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 px-10 py-4 bg-[var(--color-cr-gold)] text-white hover:bg-[var(--color-cr-gold-dark)] transition-colors rounded-sm shadow-md"
                            >
                                Richiedi Preventivo
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
