"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "react-i18next";

export default function Experience() {
    const { ref } = useSectionInView("Experience");
    const { t } = useTranslation();

    return (
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>{t("My experience")}</SectionHeading>
            <VerticalTimeline lineColor="#ffd864">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid #ffd864",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                                borderRadius: "20px"
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #ffd864",
                            }}
                            date={t(item.date)}
                            icon={item.icon}
                            iconStyle={{
                                background: "#111827",
                                color: "#ffd864",
                                fontSize: "1.5rem",
                                boxShadow: "0 0 0 4px #ffd864, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"
                            }}
                        >
                            <h3 className="font-semibold capitalize text-[#ffd864]">{t(item.title)}</h3>
                            <p className="font-normal !mt-0 text-[#ffd864]">{t(item.location)}</p>
                            <p className="!mt-1 !font-normal text-white">
                                {t(item.description)}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}