"use client";

import Image from 'next/image'
import React from 'react'
import faceImg from "@/public/Face.png";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className='flex items-center justify-center'>
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <motion.div
                            className='border-[0.35rem] border-[#ffd864] overflow-hidden'
                            initial={{ borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" }}
                            animate={{ borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"] }}
                            transition={{
                                repeat: Infinity, repeatType: "loop", duration: 5,
                            }}>
                            <Image src={faceImg} alt="Alejandro portrait" width={512} height={512} quality={95} priority={true}
                                className='h-80 w-80 object-cover shadow-xl' />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">
                    Hello, I'm Alejandro. I'm a
                    <span className="text-[#ffd864]"> full-stack developer </span>
                    with three years of experience and a one-year journey into the world of
                    <span className="text-[#ffd864]"> game programmer</span>.
                </span>
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 hover:text-[#ffd864] py-3 flex items-center gap-2 border border-[#ffd864] rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition bg-white/10"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                    aria-label='Contact me here Link'
                >
                    Contact me here{" "}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>
                <a
                    className="group bg-white px-7 py-3 flex items-center hover:text-[#ffd864] gap-2 border border-[#ffd864] rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer bg-white/10"
                    href="/CV.pdf"
                    download
                    aria-label='download CV'
                >
                    Download CV{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 hover:text-[#ffd864] flex items-center gap-2 border border-[#ffd864] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer bg-white/10 text-white/60"
                    href="https://www.linkedin.com/in/alejandroegg/"
                    target="_blank"
                    aria-label='LinkeIn page'
                >
                    <BsLinkedin />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] border border-[#ffd864] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-[#ffd864] active:scale-105 transition cursor-pointer bg-white/10 text-white/60"
                    href="https://github.com/Alexeggcl"
                    target="_blank"
                    aria-label='Github page'
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}
