import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Torte Personalizzate Carbonia | Cris Cakes Cake Studio",
  description: "Il miglior Cake Studio per torte artigianali e personalizzate a Carbonia. Creazioni uniche per compleanni, battesimi ed eventi speciali nel Sulcis. Prenota la tua torta su misura.",
  keywords: ["torte carbonia", "cake design carbonia", "torte personalizzate carbonia", "pasticceria carbonia", "torte compleanno carbonia", "torte battesimo carbonia", "cake studio sardegna"],
  authors: [{ name: "Cris Cakes" }],
  openGraph: {
    title: "Torte Personalizzate Carbonia | Cris Cakes Cake Studio",
    description: "Realizziamo torte artigianali uniche a Carbonia. Scopri le nostre creazioni per ogni occasione speciale.",
    url: "https://criscakes.it", // Assunto, aggiornare se necessario
    siteName: "Cris Cakes Cake Studio",
    images: [
      {
        url: "/images/media__1771871540600.jpg", // Immagine rappresentativa
        width: 1200,
        height: 630,
        alt: "Torte artigianali Cris Cakes Carbonia",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Torte Personalizzate Carbonia | Cris Cakes Cake Studio",
    description: "Torte artigianali e cake design per i tuoi eventi a Carbonia.",
    images: ["/images/media__1771871540600.jpg"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Configurazione JSON-LD Schema (Local Business) per SEO Locale
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Cris Cakes Cake Studio",
    "image": "https://criscakes.it/images/media__1771871540600.jpg", // Update with absolute URL
    "@id": "https://criscakes.it",
    "url": "https://criscakes.it",
    "telephone": "+393454168350",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Gramsci", // Esempio, completa se noto
      "addressLocality": "Carbonia",
      "postalCode": "09013",
      "addressRegion": "SU",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.1672,
      "longitude": 8.5222
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "areaServed": "Carbonia e Sulcis Iglesiente",
    "description": "Cake studio artigianale specializzato in torte personalizzate, cake design, torte per compleanni, battesimi ed eventi a Carbonia e in tutto il Sulcis.",
    "sameAs": [
      "https://www.instagram.com/criscakes_"
    ]
  };

  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
