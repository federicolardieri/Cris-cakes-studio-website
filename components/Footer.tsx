export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] py-8 md:py-12 text-center text-[#F4EFEA]">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                <div className="text-center md:text-left">
                    <p className="text-[var(--color-cr-gold)] text-sm font-medium tracking-widest uppercase font-sans mb-1">
                        Cris Cakes
                    </p>
                    <p className="text-gray-500 text-xs font-light">
                        Cake Design & Pasticceria Artigianale a Carbonia
                    </p>
                </div>
                <p className="text-gray-400 text-sm font-light">
                    © {new Date().getFullYear()} Cris Cakes Studio. Tutti i diritti riservati.
                </p>
            </div>
        </footer>
    );
}
