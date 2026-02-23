import GalleriaClient from "@/components/GalleriaClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Galleria Torte Artigianali | Cris Cakes Carbonia",
    description: "Sfoglia la nostra galleria di torte personalizzate e creazioni di cake design a Carbonia. Lasciati ispirare per il tuo prossimo evento speciale.",
    keywords: ["foto torte carbonia", "gallery cake design sardegna", "immagini torte compleanno", "torte artistiche sulcis"],
};

const allGalleryImages = [
    { src: "/video-bg.mp4", alt: "Creazione Torta Artigianale Carbonia" },
    { src: "/images/media__1771871540600.jpg", alt: "Torta Pietro Viola Fabry compleanno Carbonia" },
    { src: "/images/media__1771871540566.jpg", alt: "Torta Minnie Mouse cake design" },
    { src: "/images/media__1771871540618.jpg", alt: "Torta Leopardata eventi Sulcis" },
    { src: "/images/media__1771871540580.jpg", alt: "Torta Cuore Leopardato personalizzata" },
    { src: "/images/media__1771871540641.jpg", alt: "Torta Battesimo elegante Sardegna" },
];

export default function GalleriaPage() {
    return <GalleriaClient images={allGalleryImages} />;
}
