"use client";

import { useRef, useState, useEffect } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectDetails from "./projectDetails";
import { useTranslation } from "react-i18next";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl
}: ProjectProps) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const { t, i18n } = useTranslation();

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClosePopup();
        }
    };

    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isPopupOpen]);

    const colorVariants = {
        Shuvani: "bg-gradient-to-r from-lime-950 via-emerald-950 to-emerald-900",
        "Nautiloose Club": "bg-gradient-to-r from-sky-900 via-sky-950 to-sky-950",
        "Correfoom": "bg-gradient-to-r from-red-950 via-red-950 to-red-900",
        "Neutrum": "bg-gradient-to-r from-yellow-900 via-yellow-950 to-yellow-950",
        "Parking Booking": "bg-gradient-to-r from-blue-950 via-blue-950 to-blue-800"
    }

    return (
        <>
            {isPopupOpen && <ProjectDetails
                projectData={{ title, description }} // Pasa los datos del proyecto
                isPopupOpen={isPopupOpen} // Estado del popup
                onClose={handleClosePopup} // Función para cerrar el popup
                handleOverlayClick={handleOverlayClick}
            />}
            <motion.div
                ref={ref}
                style={{
                    scale: scaleProgess,
                    opacity: opacityProgess,
                }}
                className="group mb-3 sm:mb-8 last:mb-0"
            >
                <section id={title} className={`max-w-[42rem] border border-[#ffd864] rounded-lg overflow-hidden sm:pr-8 relative sm:h-[23rem] transition sm:group-even:pl-8 text-white ${colorVariants[title]}`}>
                    <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] max-sm:pt-[15rem]">
                        <h3 className="text-2xl font-semibold text-[#ffd864]">{title}</h3>
                        <p className="mt-2 leading-relaxed text-white">
                            {t(description)}
                        </p>
                        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                            {tags.map((tag, index) => (
                                <li
                                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full text-white"
                                    key={index}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                        <button className="border border-[#ffd864] mt-2 block text-whit focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#111827] hover:bg-[#111827]/70 focus:ring-[#ffd864]" type="button" onClick={handleOpenPopup}>
                            {t("More Info")}
                        </button>

                    </div>

                    <Image
                        src={imageUrl}
                        alt="Project I worked on"
                        quality={95}
                        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl max-sm:block max-sm:top-[-5rem] max-sm:right-0 
                    transition 
                    group-hover:scale-[1.04]
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2

                    group-even:group-hover:translate-x-3
                    group-even:group-hover:translate-y-3
                    group-even:group-hover:rotate-2

                    group-even:right-[initial] group-even:-left-40 group-even:max-sm:left-0"
                    />

                </section>
            </motion.div>
        </>
    );
}