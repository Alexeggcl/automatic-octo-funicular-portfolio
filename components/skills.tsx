"use client";

import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import SkillsContent from "./skillsContent";
import { useTranslation } from "react-i18next";

export default function Skills() {
    const { ref } = useSectionInView("Skills");
    const { t } = useTranslation();
    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>{t("My skills")}</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <SkillsContent
                        skill={skill}
                        index={index}
                        key={skill.name}
                    />
                ))}
            </ul>
        </section>
    );
}