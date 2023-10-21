"use client";

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

type Skill = {
    name: string;
    icon: React.ComponentType<{ size: number; style: React.CSSProperties }>; // Tipo para componentes de iconos
    pctg: string;
  };

interface SkillsContentProps {
    index: number;
    skill: Skill;
}

export default function SkillsContent({
    index,
    skill
}: SkillsContentProps) {
    const controls = useAnimation();

    const handleHoverStart = (index: number) => {
        controls.start({
            translateY: -50,
        });
    };

    const handleHoverEnd = (index: number) => {
        controls.start({
            translateY: 0,
        });
    };


    return (
        <motion.li
            className="border rounded-xl border-[#ffd864] px-5 py-3 bg-white/10 text-white flex items-center gap-2 group transition-opacity duration-300 ease-in-out hover:opacity-0 overflow-hidden min-w-[120px]"
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
                <motion.div animate={controls}>
                    <motion.span >{skill.name}</motion.span>
                    <motion.span className="absolute top-[50px] left-0 w-full h-full opacity-100" >
                        {skill.pctg}
                    </motion.span>
                </motion.div>
            </div>
        </motion.li>
    );
}