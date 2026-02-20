import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import FormbricksProvider from "@/components/FormbricksProvider";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agência Juri - Maximize seus Honorários",
  description: "Estratégias de automação e captação para advogados.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${montserrat.variable} font-sans antialiased bg-gray-50 text-gray-900`}
      >
        <FormbricksProvider />
        {children}
      </body>
    </html>
  );
}
