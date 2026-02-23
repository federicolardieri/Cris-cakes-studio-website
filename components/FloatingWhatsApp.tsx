"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
        >
            <a
                href="https://wa.me/393454168350"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(37,211,102,0.4)] hover:-translate-y-1 transition-all duration-300 animate-pulse-slow"
                aria-label="Contattaci su WhatsApp"
            >
                <MessageCircle size={28} />
            </a>
        </motion.div>
    );
}
