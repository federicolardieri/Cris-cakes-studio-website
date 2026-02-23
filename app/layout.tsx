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
  title: "Torte personalizzate a Carbonia | Cris Cakes Cake Studio",
  description: "Realizziamo torte artigianali personalizzate per compleanni, eventi e battesimi a Carbonia. Contattaci per un preventivo su misura.",
  openGraph: {
    title: "Torte personalizzate a Carbonia | Cris Cakes Cake Studio",
    description: "Realizziamo torte artigianali personalizzate per compleanni, eventi e battesimi a Carbonia. Contattaci per un preventivo su misura.",
    type: "website",
    locale: "it_IT",
    siteName: "Cris Cakes Cake Studio",
  }
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
    "description": "Cake studio artigianale specializzato in torte personalizzate, cake design, torte per compleanni, battesimi ed eventi a Carbonia e in tutto il Sulcis.",
    "telephone": "+390000000000", /* Segnaposto, aggiornare con numero effettivo */
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Carbonia",
      "addressRegion": "SU",
      "addressCountry": "IT"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.1672,
        "longitude": 8.5222
      },
      "geoRadius": "50000" /* 50km raggio */
    },
    "sameAs": [
      "https://www.instagram.com/criscakes_" /* Inserire IG effettivo se noto */
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
