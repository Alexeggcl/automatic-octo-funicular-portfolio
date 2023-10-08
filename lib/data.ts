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
    title: "Bachelor Degree in Computer Engineering",
    location: "Universidad Politécnica de Madrid",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Full-Stack Developer - Project Manager",
    location: "Archibus Solution Center",
    description:
      "During my internship, I played a crucial role in managing multiple client projects, overseeing effective communication, leading weekly progress meetings, providing technical support for incidents, and documenting new requirements as my responsibilities expanded within the team.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "Master Degree in Video Game Development",
    location: "Universidad Complutense de madrid",
    description:
      "I graduated after one year of studying. Made Shuvani as a Master's Thesis.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Game Developer",
    location: "Raging Games",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaGamepad),
    date: "2022 - present",
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
  { name: "Unreal Engine", icon: FaGamepad, pctg: "85" },
  { name: "Unity", icon: FaUnity, pctg: "60" },
  { name: "Perforce", icon: FaCodeBranch, pctg: "85" },
  { name: "Git", icon: FaGit, pctg: "90" },
  { name: "Jenkins", icon: FaJenkins, pctg: "60" },
  { name: "JavaScript", icon: FaJsSquare, pctg: "85" },
  { name: "React", icon: FaReact, pctg: "85" },
  { name: "Java", icon: FaJava, pctg: "75" },
  { name: "SQL Server", icon: FaDatabase, pctg: "75" },
  { name: "HTML", icon: FaHtml5, pctg: "75" },
  { name: "CSS", icon: FaCss3, pctg: "75" },
  { name: "Node.js", icon: FaNodeJs, pctg: "75" },
  { name: "Framer Motion", icon: FaArrowAltCircleRight, pctg: "60" },
] as const;