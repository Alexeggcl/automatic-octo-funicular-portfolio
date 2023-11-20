"use client"
import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="mb-10 px-4 text-center text-[#ffd864]">
            <small className="mb-2 block text-xs">
                Alejandro Esteban Gonzalez Gatica
            </small>
            <p className="text-xs">
                <span className="font-semibold">{t("About this website: ")}</span>
                {t("built with React & Next.js , TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.")}
            </p>
        </footer>
    );
}