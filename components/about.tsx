"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "react-i18next";

export default function About() {
  const { ref } = useSectionInView("About");
  const { t, i18n } = useTranslation();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t("About me")}</SectionHeading>
      {i18n.language === 'es' ?
        <p className="mb-3">
          Tras licenciarme como <span className="font-medium text-[#ffd864]">ingeniero informático</span> decidí dedicarme a mi verdadera pasión, el <span className="font-medium text-[#ffd864]">desarrollo de videojuegos</span>.
          Me matriculé en un máster en desarrollo de videojuegos, donde adquirí una sólida base en el sector.
          A lo largo de este viaje, perfeccioné mis habilidades en <span className="font-medium text-[#ffd864]">Unreal Engine y C++</span>, asi como <span className="font-medium text-[#ffd864]">Unity y C#</span>.
          Mi aspecto favorito de la programación es la búsqueda constante de soluciones creativas a los retos.
        </p>
        :
        <p className="mb-3">
          After graduating as a <span className="font-medium text-[#ffd864]">computer engineer</span>,
          I decided to pursue my true passion for <span className="font-medium text-[#ffd864]">video game development</span>.
          I enrolled in a master's program in game development, where I gained a solid foundation in the industry.
          Throughout this journey, I honed my skills in <span className="font-medium text-[#ffd864]">Unreal Engine and C++</span>,
          as well as <span className="font-medium text-[#ffd864]">Unity and C#</span>.
          My favorite aspect of programming is the constant quest for creative solutions to challenges.
        </p>
      }
      {i18n.language === 'es' ?
        <p className="mb-3">
          Mientras tanto, también amplié mi experiencia en <span className="font-medium text-[#ffd864]">desarrollo full-stack</span> y
          <span className="font-medium text-[#ffd864]"> gestión de proyectos</span>.
          Me adentré en tecnologías como <span className="font-medium text-[#ffd864]">Java, React, JavaScript, and SQL Server</span>.
          Además, adquirí experiencia en <span className="font-medium text-[#ffd864]">interacción con el cliente, metodologías ágiles y trabajo en equipo eficaz</span>.
        </p>
        :
        <p className="mb-3">
          Meanwhile, I also expanded my expertise in <span className="font-medium text-[#ffd864]">full-stack development</span> and
          <span className="font-medium text-[#ffd864]">project management</span>.
          I delved into technologies like <span className="font-medium text-[#ffd864]">Java, React, JavaScript, and SQL Server</span>.
          Additionally, I acquired experience in <span className="font-medium text-[#ffd864]">client interaction, agile methodologies, and effective teamwork</span>.
        </p>
      }
      <p className="mb-3">
        {t("When I'm not immersed in code, I enjoy playing video games, from popular titles to indie gems, always on the lookout for hidden treasures. ")}
        {t("I'm also a cinema enthusiast, having completed a small course in filmmaking. However, when I seek a break from technology, ")}
        {t("I find solace in reading and exploring the worlds of fantasy and science fiction, or simply spending quality time with my cat.")}
      </p>
    </motion.section>
  );
}