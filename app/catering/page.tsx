import CateringClient from "@/components/CateringClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Catering Artigianale | Cris Cakes Carbonia",
    description:
        "Servizio catering artigianale a Carbonia e nel Sulcis Iglesiente. Finger food, buffet e preparazioni per matrimoni, compleanni, battesimi ed eventi aziendali.",
    keywords: [
        "catering carbonia",
        "buffet sardegna",
        "catering matrimoni sulcis",
        "finger food carbonia",
        "catering eventi sulcis iglesiente",
    ],
    openGraph: {
        title: "Catering Artigianale | Cris Cakes Carbonia",
        description:
            "Servizio catering artigianale a Carbonia e nel Sulcis Iglesiente per ogni tipo di evento.",
        url: "https://criscakes.it/catering",
    },
};

export default function CateringPage() {
    return (
        <>
            <Navbar />
            <CateringClient />
            <FloatingWhatsApp />
            <Footer />
        </>
    );
}
