import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";

const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ВЕЛЬВЕТ, салон красоты в центре Москвы | Запись онлайн",
  description:
    "Салон красоты ВЕЛЬВЕТ на Большой Дмитровке: волосы, ногтевой сервис, косметология, брови и ресницы, макияж и SPA. Мастера с опытом от 7 лет. Онлайн-запись.",
  keywords: ["салон красоты", "Москва", "маникюр", "окрашивание", "SPA", "запись онлайн"],
  openGraph: {
    title: "ВЕЛЬВЕТ, салон красоты в центре Москвы",
    description:
      "Полный спектр бьюти-услуг: волосы, ногти, косметология, брови, макияж, SPA. Запись онлайн.",
    type: "website",
    locale: "ru_RU",
  },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#211d1c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable}`}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
