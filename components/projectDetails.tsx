import { projectsDataMoreInfo } from "@/lib/data";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai"
import { Carousel } from 'flowbite-react';
import { useTranslation } from "react-i18next";


type ProjectDetailsProps = {
    projectData: {
        title: string;
        description: string;
    };
    isPopupOpen: boolean;
    onClose: () => void;
    handleOverlayClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const themeCarousel = {
    "root": {
        "base": "relative h-full w-full",
        "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
        "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
    },
    "indicators": {
        "active": {
            "off": "bg-[#9C6A07] border border-[#111827] border-2",
            "on": "bg-[#ffd864] border border-[#111827] border-2"
        },
        "base": "h-3 w-3 rounded-full",
        "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    "item": {
        "base": "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
        "wrapper": "w-full flex-shrink-0 transform cursor-grab snap-center"
    },
    "control": {
        "base": "border border-[#111827] border-2 inline-flex h-8 w-8 items-center justify-center rounded-full group-focus:outline-none group-focus:ring-white bg-[#ffd864]/80 group-hover:bg-[#ffd864]/80 group-focus:ring-[#ffd864]/70 sm:h-10 sm:w-10",
        "icon": "h-5 w-5 text-[#111827] sm:h-6 sm:w-6"
    },
    "scrollContainer": {
        "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
        "snap": "snap-x"
    }
}

function ProjectDetails({ projectData, isPopupOpen, onClose, handleOverlayClick }: ProjectDetailsProps) {
    const projectDataInfo = projectsDataMoreInfo.find(e => e.title == projectData.title)
    const { t } = useTranslation();
    const closeBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (isPopupOpen) {
            closeBtnRef.current?.focus();
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; }
    }, [isPopupOpen]);

    if (!isPopupOpen || !projectDataInfo) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm"
            onClick={handleOverlayClick}
            aria-modal="true"
            role="dialog"
            aria-labelledby="project-title"
            tabIndex={-1}
        >
            <div className="relative max-w-screen-sm w-full" onClick={e => e.stopPropagation()}>
                <div className="relative rounded-lg shadow bg-gray-700 overflow-y-auto max-h-[85vh]">
                    <header className="sticky top-0 bg-gray-700 z-10 flex items-start justify-between p-4 border-b-2 rounded-t border-gray-600">
                        <h2 className="text-xl font-semibold text-white" id="project-title">
                            {projectDataInfo.title}
                        </h2>
                        <button
                            type="button"
                            ref={closeBtnRef}
                            aria-label={t("Close")}
                            className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ffd864]"
                            onClick={onClose}
                        >
                            <AiOutlineClose />
                        </button>
                    </header>
                    <div className="p-6 space-y-6">
                        {projectDataInfo.video && (
                            <div className="aspect-video w-full rounded-xl overflow-hidden">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${projectDataInfo.video}`}
                                    title={projectDataInfo.title + " video"}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                    className="w-full h-full"
                                />
                            </div>
                        )}
                        <h3 className="text-[#ffd864] text-lg font-semibold">{t("AboutProject")}</h3>
                        <p className="text-white">{projectDataInfo.about}</p>
                        <h3 className="text-[#ffd864] text-lg font-semibold">{t("Details")}</h3>
                        <p className="text-white">{projectDataInfo.details}</p>
                        {projectDataInfo.gif && (
                            <Image
                                src={projectDataInfo.gif}
                                alt={projectDataInfo.title + " demo GIF"}
                                className="rounded-xl w-full"
                                loading="lazy"
                                width={577}
                                height={325}
                                priority={false}
                            />
                        )}
                        <h3 className="text-[#ffd864] text-lg font-semibold">{t("Tasks")}</h3>
                        <p className="text-white">{projectDataInfo.myTasks}</p>
                        {projectDataInfo.images && projectDataInfo.images.length > 0 && (
                            <Carousel style={{ height: "350px" }} theme={themeCarousel}>
                                {projectDataInfo.images.map((elem, index) => (
                                    <Image
                                        src={elem}
                                        alt={`${projectDataInfo.title} screenshot ${index + 1}`}
                                        key={index}
                                        quality={85}
                                        width={577}
                                        height={325}
                                        className="rounded-xl"
                                        loading="lazy"
                                        priority={false}
                                    />
                                ))}
                            </Carousel>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
