"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useAnimation } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView("Skills");
    const controlsArray = skillsData.map(() => useAnimation());

    const handleHoverStart = (index: number) => {
        controlsArray[index].start({
            translateY: -50,
        });
    };

    const handleHoverEnd = (index: number) => {
        controlsArray[index].start({
            translateY: 0,
        });
    };


    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>My skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                        className="border rounded-xl border-[#ffd864] px-5 py-3 bg-white/10 text-white/80 flex items-center gap-2 group transition-opacity duration-300 ease-in-out hover:opacity-0 overflow-hidden"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                        onHoverStart={() => handleHoverStart(index)}
                        onHoverEnd={() => handleHoverEnd(index)}
                    >
                        {skill.icon && <skill.icon size={24} style={{ color: '#ffd864' }} />}
                        <div className="text-center grid place-items-center relative">
                            <motion.div animate={controlsArray[index]}>
                                <motion.span >{skill.name}</motion.span>
                                <motion.span className="absolute top-[50px] left-0 w-full h-full opacity-100" >
                                    {skill.pctg + "%"}
                                </motion.span>
                            </motion.div>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}