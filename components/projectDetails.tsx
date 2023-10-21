import React from "react";
import { AiOutlineClose } from "react-icons/ai"


type ProjectDetailsProps = {
    projectData: {
        title: string;
        description: string;
    };
    isPopupOpen: boolean;
    onClose: () => void;
    handleOverlayClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

function ProjectDetails({ projectData, isPopupOpen, onClose, handleOverlayClick }: ProjectDetailsProps) {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm ${isPopupOpen ? "block" : "hidden"}`}
            onClick={handleOverlayClick}
        >
            <div className="relative max-w-screen-sm w-full">
                <div className="relative rounded-lg shadow bg-gray-700 overflow-y-auto max-h-96 p-2">
                    <div className="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
                        <h3 className="text-xl font-semibold text-white">
                            Shuvani
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
                        <p className="text-base leading-relaxed text-gray-400">
                            With less than a month to go before the European Union enacts new
                            consumer privacy laws for its citizens, companies around the
                            world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.)
                            goes into effect on May 25 and is meant to ensure a common set of
                            data rights in the European Union. It requires organizations to
                            notify users as soon as possible of high-risk data breaches that
                            could personally affect them.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
