import nautilooseImg from "@/public/Nautiloose.png";
import neutrumImg from "@/public/Neutrum.png";
import shuvaniImg from "@/public/Shuvani_cover.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaArrowAltCircleRight, FaCodeBranch, FaCss3, FaDatabase, FaGamepad, FaGit, FaHtml5, FaJava, FaJenkins, FaJsSquare, FaNodeJs, FaReact, FaUnity } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Shuvani",
    description:
      "Shuvani is an Isometric Single Player Roguelike where action and strategy complement each other in a unique combat system based on magic and music.",
    tags: ["Unreal Engine", "C++", "Perforce", "Jenkins"],
    imageUrl: shuvaniImg,
  },
  {
    title: "Nautiloose Club",
    description:
      "Customer, employee and material management in an underwater club. I was a programmer. Created for the IndieSpainJam in one week.",
    tags: ["Unity", "Github", "C#", "IndieSpainJam", "Desing"],
    imageUrl: nautilooseImg,
  },
  {
    title: "Neutrum",
    description:
      "Real-time sensor management and monitoring. I was the full-stack developer. It has features like filtering, sorting and paging, as well as a Rest API.",
    tags: ["React", "DevExtreme", "SQL Server", "Java", "Spring"],
    imageUrl: neutrumImg,
  },
] as const;

export const skillsData = [
  { name: "Unreal Engine", icon: FaGamepad },
  { name: "Unity", icon: FaUnity },
  { name: "Perforce", icon: FaCodeBranch },
  { name: "Git", icon: FaGit },
  { name: "Jenkins", icon: FaJenkins },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React", icon: FaReact },
  { name: "Java", icon: FaJava },
  { name: "SQL Server", icon: FaDatabase },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3 },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Framer Motion", icon: FaArrowAltCircleRight },
] as const;