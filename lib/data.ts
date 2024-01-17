import ShuvaniAbout, { CorrefoomAbout, CorrefoomDetails, CorrefoomTasks, NautilooseAbout, NautilooseDetails, NautilooseTasks, NeutrumAbout, NeutrumDetails, NeutrumTasks, ParkingAbout, ParkingDetails, ParkingTasks, ShuvaniDetails, ShuvaniTasks } from "@/components/projectsData";
import nautilooseImg from "@/public/Nautiloose.png";
import neutrumImg from "@/public/Neutrum.png";
import shuvaniImg from "@/public/Shuvani_cover.png";
import shuvaniReward from "@/public/ShuvaniImages/RewardPedestal.png";
import SPickables from "@/public/ShuvaniImages/SPickables.png";
import SLaser from "@/public/ShuvaniImages/SLaser.png";
import SEmemies from "@/public/ShuvaniImages/SEnemies.png";
import SBoss from "@/public/ShuvaniImages/SBoss.png";
import shuvaniGIF from "@/public/ShuvaniImages/ShuvaniGIF.gif";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaArrowAltCircleRight, FaCodeBranch, FaCss3, FaDatabase, FaGamepad, FaGit, FaHtml5, FaJava, FaJenkins, FaJsSquare, FaNodeJs, FaReact, FaUnity } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import NInGame from "@/public/NautilooseImages/NInGame.png";
import NMainMenu from "@/public/NautilooseImages/NMainMenu.png";
import NRawPurchase from "@/public/NautilooseImages/NRawPurchase.png";
import NStuff from "@/public/NautilooseImages/NStuff.png";
import NTable from "@/public/NautilooseImages/NTable.png";
import NGIF from "@/public/NautilooseImages/NGIF.gif";

import NEAggregated from "@/public/NeutrumImages/NEAggregated.png";
import NELocations from "@/public/NeutrumImages/NELocations.png";
import NEMap from "@/public/NeutrumImages/NEMap.png";
import NESensorForm from "@/public/NeutrumImages/NESensorForm.png";
import NESensors from "@/public/NeutrumImages/NESensors.png";

import PACard from "@/public/ParkingBooking/ParkingBookingCard.png";
import PACalendar from "@/public/ParkingBooking/ParkingBookingCalendar.png";
import PAFloorList from "@/public/ParkingBooking/ParkingBookingFloorList.png";
import PAFloorPlan from "@/public/ParkingBooking/ParkingBookingFloorPlan.png";
import PAStart from "@/public/ParkingBooking/ParkingBookingStart.png";
import PASummary from "@/public/ParkingBooking/ParkingBookingSummary.png";

import CFCover from "@/public/CorrefoomImages/CorrefoomCover.png"
import CF1 from "@/public/CorrefoomImages/CF1.png"
import CF2 from "@/public/CorrefoomImages/CF2.png"
import CF3 from "@/public/CorrefoomImages/CF3.png"
import CF4 from "@/public/CorrefoomImages/CF4.png"
import CFGIF from "@/public/CorrefoomImages/CFGIF.gif";

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
  }
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
    bgColor: "bg-gradient-to-r from-lime-950 via-emerald-950 to-emerald-900"
  },
  {
    title: "Nautiloose Club",
    description:
      "Customer, employee and material management in an underwater club. I was a programmer. Created for the IndieSpainJam in one week.",
    tags: ["Unity", "Github", "C#", "IndieSpainJam", "Desing"],
    imageUrl: nautilooseImg,
    bgColor: "bg-gradient-to-r from-sky-900 via-sky-950 to-sky-950"
  },
  {
    title: "Correfoom",
    description:
      "Embark on a fiery journey in Valencia as the Fallera Mayor battles demons for the Holy Grail in this explosive 2.5D FPS odyssey.",
    tags: ["Unreal Engine", "C++", "Github", "VFX"],
    imageUrl: CFCover,
    bgColor: "bg-gradient-to-r from-red-950 via-red-950 to-red-900",
  },
  {
    title: "Neutrum",
    description:
      "Real-time sensor management and monitoring. I was the full-stack developer. It has features like filtering, sorting and paging, as well as a Rest API.",
    tags: ["React", "DevExtreme", "SQL Server", "Java", "Spring"],
    imageUrl: neutrumImg,
    bgColor: "bg-gradient-to-r from-yellow-900 via-yellow-950 to-yellow-950"
  },
  {
    title: "Parking Booking",
    description:
      "Manage the use and reseravtion of parking spaces in your office, easily and efficiently.",
    tags: ["Archibus", "React", "SQL Server", "Java"],
    imageUrl: PACard,
    bgColor: "bg-gradient-to-r from-blue-950 via-blue-950 to-blue-900"
  }
] as const;

export const projectsDataMoreInfo = [
  {
    title: "Shuvani",
    video: "w0lvPH7C1Uk",
    about: React.createElement(ShuvaniAbout),
    details: React.createElement(ShuvaniDetails),
    gif: shuvaniGIF,
    myTasks: React.createElement(ShuvaniTasks),
    imgages: [
      shuvaniReward,
      SPickables,
      SLaser,
      SEmemies,
      SBoss
    ]
  },
  {
    title: "Nautiloose Club",
    video: "KTFEDOM31Ys",
    about: React.createElement(NautilooseAbout),
    details: React.createElement(NautilooseDetails),
    gif: NGIF,
    myTasks: React.createElement(NautilooseTasks),
    imgages: [
      NInGame,
      NMainMenu,
      NRawPurchase,
      NStuff,
      NTable
    ]
  },
  {
    title: "Correfoom",
    video: "XAonbE875gw",
    about: React.createElement(CorrefoomAbout),
    details: React.createElement(CorrefoomDetails),
    gif: CFGIF,
    myTasks: React.createElement(CorrefoomTasks),
    imgages: [
      CF1,
      CF2,
      CF3,
      CF4
    ]
  },
  {
    title: "Neutrum",
    video: null,
    about: React.createElement(NeutrumAbout),
    details: React.createElement(NeutrumDetails),
    gif: null,
    myTasks: React.createElement(NeutrumTasks),
    imgages: [
      NEAggregated,
      NELocations,
      NEMap,
      NESensorForm,
      NESensors
    ]
  },
  {
    title: "Parking Booking",
    video: null,
    about: React.createElement(ParkingAbout),
    details: React.createElement(ParkingDetails),
    gif: null,
    myTasks: React.createElement(ParkingTasks),
    imgages: [
      PAStart,
      PAFloorPlan,
      PAFloorList,
      PACalendar,
      PASummary
    ]
  }
] as const

export const skillsData = [
  { name: "Unreal Engine", icon: FaGamepad, pctg: "Great" },
  { name: "Unity", icon: FaUnity, pctg: "Ok" },
  { name: "Perforce", icon: FaCodeBranch, pctg: "Great" },
  { name: "Git", icon: FaGit, pctg: "Great" },
  { name: "Jenkins", icon: FaJenkins, pctg: "Ok" },
  { name: "JavaScript", icon: FaJsSquare, pctg: "Great" },
  { name: "React", icon: FaReact, pctg: "Great" },
  { name: "Java", icon: FaJava, pctg: "Good" },
  { name: "SQL Server", icon: FaDatabase, pctg: "Good" },
  { name: "HTML", icon: FaHtml5, pctg: "Good" },
  { name: "CSS", icon: FaCss3, pctg: "Good" },
  { name: "Node.js", icon: FaNodeJs, pctg: "Good" },
  { name: "Framer Motion", icon: FaArrowAltCircleRight, pctg: "Ok" },
] as const;
