"use client"

import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en_translation.json";
import translationES from "../locales/es_translation.json";
import React from "react";

// Solo inicializa una vez
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: translationEN },
        es: { translation: translationES },
      },
      lng: "en",
      fallbackLng: "en",
      interpolation: { escapeValue: false },
    });
}

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
