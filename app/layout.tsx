"use client"

import Header from '@/components/header'
import './globals.css'
import { Comfortaa } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import i18next from "i18next";
import translationEN from "../locales/en_translation.json";
import translationES from "../locales/es_translation.json";

const inter = Comfortaa({ subsets: ['latin'] })

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      es: {
        translation: translationES,
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative pt-28 sm:pt-36 bg-gray-900 text-gray-50 text-opacity-90`}
      >
        <div className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#d17983]"></div>
        <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#6e5f35]"></div>

        <I18nextProvider i18n={i18next}>
          <ActiveSectionContextProvider>
            <Header />
            {children}
          </ActiveSectionContextProvider>
        </I18nextProvider>
      </body>
    </html>
  );
}