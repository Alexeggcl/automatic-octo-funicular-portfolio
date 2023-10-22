import { projectsDataMoreInfo } from "@/lib/data";
import React from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai"
import { Carousel } from 'flowbite-react';


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

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm ${isPopupOpen ? "block" : "hidden"}`}
            onClick={handleOverlayClick}
        >
            <div className="relative max-w-screen-sm w-full">
                <div className="relative rounded-lg shadow bg-gray-700 overflow-y-auto max-h-[85vh]">
                    <div className="sticky top-0 bg-gray-700 z-10 flex items-start justify-between p-4 border-b-2 rounded-t border-gray-600">
                        <h3 className="text-xl font-semibold text-white">
                            {projectDataInfo?.title}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                            onClick={onClose}
                        >
                            <AiOutlineClose />
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        {projectDataInfo?.video && <iframe
                            width="100%"
                            height="315"
                            src={`https://www.youtube.com/embed/${projectDataInfo?.video}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />}
                        <h3 className="text-[#ffd864]">About</h3>
                        {projectDataInfo?.about}
                        <h3 className="text-[#ffd864]">Details</h3>
                        {projectDataInfo?.details}
                        {projectDataInfo?.gif && <Image
                            src={projectDataInfo!.gif}
                            alt="GIF Image"
                            className="rounded-xl w-full"
                        />}
                        <h3 className="text-[#ffd864]">Tasks</h3>
                        {projectDataInfo?.myTasks}
                        <Carousel style={{ height: "350px" }} theme={themeCarousel}>
                            {projectDataInfo!.imgages.map((elem, index) => {
                                return <Image src={elem} alt="" key={index} quality={95} style={{ objectFit: 'fill', width: '100%', height: '100%' }} />
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
