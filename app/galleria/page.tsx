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
    { src: "/images/0ad99866-e0fd-4ca1-99f8-2a2430bbeb8a.JPG", alt: "Torta compleanno ombré rosa con farfalle di carta e perle oro Carbonia" },
    { src: "/images/51703543-1729-480c-ab84-7116c7ac8a61.JPG", alt: "Torta compleanno rosa con decorazioni tropicali dorate e sfere Sulcis" },
    { src: "/images/66a8b2c1-51de-45fc-8739-e4c7d6dee6f6.JPG", alt: "Torta compleanno bianca con rose rosse e foglie palma dorate Carbonia" },
    { src: "/images/6aa884f1-ddbb-4e31-a01b-ab8aeb492b7e.JPG", alt: "Torta luxury nera e oro con sfere metallizzate cake design Sardegna" },
    { src: "/images/86643b3c-c45f-4970-a495-01b23a369320.JPG", alt: "Torta compleanno bianca con rose rosse e farfalla iridescente Carbonia" },
    { src: "/images/c900d545-71e1-4e56-bd79-9dbc52244ff7.JPG", alt: "Torta compleanno bianca e oro con rosa dorata premium Carbonia" },
    { src: "/images/cad67245-e7b9-4be4-ab2d-e1033fa91097.JPG", alt: "Torta 80° compleanno elegante con corona argento e decorazioni oro Carbonia" },
    { src: "/images/e8b61893-fbec-4c77-91f4-2cab0c07275c.JPG", alt: "Torta compleanno motivo leopardato con cuore dorato cake design Carbonia" },
];

export default function GalleriaPage() {
    return <GalleriaClient images={allGalleryImages} />;
}
