"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating as a <span className="font-medium text-[#ffd864]">computer engineer</span>,
        I decided to pursue my true passion for <span className="font-medium text-[#ffd864]">video game development</span>.
        I enrolled in a master's program in game development, where I gained a solid foundation in the industry.
        Throughout this journey, I honed my skills in <span className="font-medium text-[#ffd864]">Unreal Engine and C++</span>,
        as well as <span className="font-medium text-[#ffd864]">Unity and C#</span>.
        My favorite aspect of programming is the constant quest for creative solutions to challenges.
      </p>
      <p className="mb-3">
        Meanwhile, I also expanded my expertise in <span className="font-medium text-[#ffd864]">full-stack development</span> and 
        <span className="font-medium text-[#ffd864]">project management</span>. 
        I delved into technologies like <span className="font-medium text-[#ffd864]">Java, React, JavaScript, and SQL Server</span>. 
        Additionally, I acquired experience in <span className="font-medium text-[#ffd864]">client interaction, agile methodologies, and effective teamwork</span>.
      </p>
      <p className="mb-3">
        When I'm not immersed in code, I enjoy playing video games, from popular titles to indie gems, always on the lookout for hidden treasures. 
        I'm also a cinema enthusiast, having completed a small course in filmmaking. However, when I seek a break from technology, 
        I find solace in reading and exploring the worlds of fantasy and science fiction, or simply spending quality time with my cat.
      </p>
    </motion.section>
  );
}