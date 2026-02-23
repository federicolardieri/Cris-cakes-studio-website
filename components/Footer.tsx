export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] py-8 md:py-12 text-center text-[#F4EFEA]">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                <p className="text-gray-400 text-sm font-light">
                    © {new Date().getFullYear()} Cris Cakes Studio. Tutti i diritti riservati.
                </p>
                <p className="text-[var(--color-cr-gold)] text-sm font-medium tracking-widest uppercase font-sans">
                    Cris Cakes
                </p>
            </div>
        </footer>
    );
}
