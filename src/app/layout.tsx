import type { Metadata, Viewport } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://soluciones-delta.com";

export const viewport: Viewport = {
  themeColor: "#1a8c3c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Soluciones Delta C.A. | Servicios Petroleros Zulia",
    template: "%s | Soluciones Delta C.A.",
  },

  description:
    "Servicios petroleros en Zulia: bombeo de crudo, vacuum, Frac Tanks 500 Bbl e inyección de vapor. Operación 24/7. RIF J-50735393-1.",

  keywords: [
    "bombeo de crudo Venezuela",
    "trasegado con vacuum Zulia",
    "frac tanks 500 barriles",
    "vacuum truck Venezuela",
    "manejo de desechos industriales petrolero",
    "limpieza de tanques de crudo",
    "borras asfálticas",
    "lodos de perforación",
    "Soluciones Delta CA",
    "servicios petroleros Zulia",
    "San Francisco Zulia petroleo",
    "semirremolque vacuum 160 barriles",
    "bombas desplazamiento positivo crudo pesado",
    "fluidos perforación Venezuela",
    "high vacuum units oil gas Venezuela",
    "crudo extrapesado bombeo",
    "tanques de almacenamiento crudo",
    "gestión ambiental petrolera Venezuela",
    "Decreto 2635 desechos peligrosos",
    "vacuum truck services oil gas",
  ],

  authors: [{ name: "Soluciones Delta, C.A.", url: BASE_URL }],

  creator: "Soluciones Delta, C.A.",
  publisher: "Soluciones Delta, C.A.",

  category: "Servicios Industriales Petroleros",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
    languages: {
      "es": BASE_URL,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_VE",
    url: BASE_URL,
    siteName: "Soluciones Delta, C.A.",
    title: "Soluciones Delta C.A. | Servicios Petroleros · Zulia, Venezuela",
    description:
      "Especialistas en bombeo de crudo pesado, trasegado con vacuum, Frac Tanks 500 Bbl y gestión de desechos industriales. Operamos 24/7 en el Estado Zulia y regiones adyacentes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Soluciones Delta C.A. — Servicios Industriales Petroleros Zulia Venezuela",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Soluciones Delta C.A. | Servicios Petroleros Zulia",
    description:
      "Bombeo de crudo pesado, trasegado vacuum, Frac Tanks 500 Bbl y manejo de desechos industriales. Zulia, Venezuela. Tel: +58 424-6472446",
    images: ["/og-image.png"],
    creator: "@SolucionesDelta",
  },

  verification: {
    google: "google-site-verification-placeholder",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.png",
    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="VE-V" />
        <meta name="geo.placename" content="San Francisco, Estado Zulia, Venezuela" />
        <meta name="geo.position" content="10.6544;-71.6469" />
        <meta name="ICBM" content="10.6544, -71.6469" />
        <meta name="contact" content="solucionesdeltaca@gmail.com" />
        <meta name="reply-to" content="solucionesdeltaca@gmail.com" />
        <link rel="alternate" hrefLang="x-default" href={BASE_URL} />
      </head>
      <body className={`${montserrat.variable} ${dmSans.variable} antialiased`}>
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "SolucionesDelta", "version": "1.0.0"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
