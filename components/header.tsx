"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import LanguageSwitcher from "./languageSelector";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { i18n, t } = useTranslation();

  return (
    <header className="z-[49] relative">
      <motion.div
        className={`fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] ${i18n.language === 'es' ? "sm:w-[41rem]" : "sm:w-[37rem]"} sm:rounded-full bg-gray-950 border-[#ffd864]/40 bg-opacity-70`}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 transition text-gray-50 hover:text-[#ffd864]",
                  {
                    "text-gray-50":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {t(link.name)}

                {link.name === activeSection && (
                  <motion.span
                    className="rounded-full absolute inset-0 -z-10 bg-[#ffd864]/20"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            key="langselectorjey"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <LanguageSwitcher />
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}