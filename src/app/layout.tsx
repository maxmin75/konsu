import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
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
  title: "Konsu | Hair salon & beauty studio",
  description:
    "Sito Next.js e React ricreato dal progetto WordPress Konsu con immagini, struttura e animazioni ispirate al tema originale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body>
        {children}
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
