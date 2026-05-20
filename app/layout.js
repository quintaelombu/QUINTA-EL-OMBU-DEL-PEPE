import "./globals.css";

export const metadata = {
  title: "Quinta El Ombú del Pepe",
  description:
    "El mejor lugar para tus mejores momentos. Quinta El Ombú del Pepe en Pocito, San Juan: salón de eventos, pileta, parque arbolado y alojamiento.",
  // IMPORTANTE: poné acá tu URL DE PRODUCCIÓN DE VERCEL (la que usás para compartir)
  metadataBase: new URL("https://quinta-el-ombu-del-pepe-8m7c9ne4v-dr-emilios-projects.vercel.app"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Quinta El Ombú del Pepe",
    description:
      "El mejor lugar para tus mejores momentos. Salón de eventos, pileta, parque arbolado y alojamiento en Pocito, San Juan.",
    url: "/",
    siteName: "Quinta El Ombú del Pepe",
    images: [
      {
        url: "/favicon.png", // usamos el mismo logo como imagen de vista previa
        width: 512,
        height: 512,
        alt: "Quinta El Ombú del Pepe",
      },
    ],
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quinta El Ombú del Pepe",
    description:
      "El mejor lugar para tus mejores momentos en Pocito, San Juan.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Forzar favicon en todos los navegadores */}
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="bg-slate-950 text-slate-50">{children}</body>
    </html>
  );
}
