import GalleriaClient from "@/components/GalleriaClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Galleria Torte Artigianali | Cris Cakes Carbonia",
    description: "Sfoglia la nostra galleria di torte personalizzate e creazioni di cake design a Carbonia. Lasciati ispirare per il tuo prossimo evento speciale.",
    keywords: ["foto torte carbonia", "gallery cake design sardegna", "immagini torte compleanno", "torte artistiche sulcis"],
};

const allGalleryImages = [
    { src: "/video-bg.mp4", alt: "Creazione Torta Artigianale Carbonia" },
    { src: "/images/media__1771871540600.avif", alt: "Torta Pietro Viola Fabry compleanno Carbonia" },
    { src: "/images/media__1771871540566.avif", alt: "Torta Minnie Mouse cake design" },
    { src: "/images/media__1771871540618.avif", alt: "Torta Leopardata eventi Sulcis" },
    { src: "/images/media__1771871540580.avif", alt: "Torta Cuore Leopardato personalizzata" },
    { src: "/images/media__1771871540641.avif", alt: "Torta Battesimo elegante Sardegna" },
];

export default function GalleriaPage() {
    return <GalleriaClient images={allGalleryImages} />;
}
