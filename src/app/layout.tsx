import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { AnalyticsConsent } from "./analytics-consent";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://konsu.it"),
  title: "Konsu Parrucchieri Estetica | Salone a Campodarsego",
  description:
    "Capelli, estetica, ricostruzione unghie e trattamenti a Campodarsego. Scopri Konsu Parrucchieri Estetica e prenota il tuo appuntamento.",
  alternates: { canonical: "/" },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": "https://konsu.it/#salone",
  name: "Konsu Parrucchieri Estetica",
  url: "https://konsu.it/",
  image: "https://konsu.it/konsu/konsu-staff-campodarsego.jpg",
  telephone: "+390499201171",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Bassa III, 75",
    postalCode: "35011",
    addressLocality: "Campodarsego",
    addressRegion: "PD",
    addressCountry: "IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${montserrat.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>
        {children}
        <AnalyticsConsent />
        <Script
          src="https://hairflow.it/embed/booking-widget.js"
          data-hairflow-booking=""
          data-slug="konsu"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
