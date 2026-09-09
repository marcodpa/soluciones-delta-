import type { Metadata, Viewport } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { SITE_URL, HOME_DESCRIPTION } from "@/lib/seo";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

const BASE_URL = SITE_URL;

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Servicios petroleros en Venezuela | Soluciones Delta",
    template: "%s | Soluciones Delta C.A.",
  },

  description: HOME_DESCRIPTION,

  authors: [{ name: "Soluciones Delta, C.A.", url: BASE_URL }],

  creator: "Soluciones Delta, C.A.",
  publisher: "Soluciones Delta, C.A.",

  category: "Servicios Industriales Petroleros",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
        url: "/opengraph-image",
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
    images: ["/opengraph-image"],
  },

  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "512x512" },
    ],
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
        <meta name="contact" content="solucionesdeltaca@gmail.com" />
        <meta name="reply-to" content="solucionesdeltaca@gmail.com" />
        {/* Preload hero frames — first frame shown immediately */}
        <link rel="preload" as="image" href="/frames/frame_0000.webp" type="image/webp" />
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
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
