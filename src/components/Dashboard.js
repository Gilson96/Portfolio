import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import Me from '../assets/me.jpg'
import Mern from '../assets/mern.png'
import About from './About'
import AnimatedName from "./animatedName";
import { Link } from 'react-router-dom';
import { ScreenFitText } from "./AnimatedText";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import useScreenSize from "./useScreenSize";

export const HoverImageLinks = () => {
    const screenSize = useScreenSize()

    return (
        <div className="bg-neutral-950 h-screen w-screen py-[2%] px-[5%]">
            <div className="h-[50%] p-[5%]">
                <p className={`${screenSize.width < 700 ? 'mb-[20%]' : 'mb-[2%]'} text-[2rem] font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl `}>Hi <span className="text-white">I'm Gilson de Almeida</span></p>
                
                <MyLink
                    heading="About"
                    subheading="A brief description about me"
                    imgSrc={Me}
                    link='/about'
                />
                <MyLink
                    heading="Projects"
                    subheading="See what I built do far"
                    imgSrc={Mern}
                    link="/project"
                />
            </div>
            <div className="h-[50%] flex flex-col justify-center items-center gap-5 mt-[2%]">
                <p className="text-[3rem] font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl">Contact <span className='text-white'>Me</span></p>
                <div className="flex gap-4">
                    <Link to={'https://github.com/Gilson96'}>
                        <button className=" font-medium text-neutral-50 w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:text-neutral-300 hover:translate-x-[3px] hover:translate-y-[3px]">
                            <FaGithub className="text-[3rem]" />
                        </button>
                    </Link>
                    <Link to={'https://www.linkedin.com/in/gilson-de-almeida-a51ba1194/'}>
                        <button className=" font-medium text-blue-500 w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:text-blue-600 hover:translate-x-[3px] hover:translate-y-[3px]">
                            <FaLinkedin className="text-[3rem]" />
                        </button>
                    </Link>
                    <Link to={'mailto:grafael99@gmail.com'}>
                        <button className=" font-medium text-red-500 w-fit transition-all shadow-[3px_3px_0px_black] hover:text-red-600 hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                            <SiGmail className="text-[3rem]" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const MyLink = ({ heading, imgSrc, subheading, link }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <>
            <Link className="w-full h-full" to={link}>
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    initial="initial"
                    whileHover="whileHover"
                    className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
                >

                    <div>
                        <motion.span
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: -16 },
                            }}
                            transition={{
                                type: "spring",
                                staggerChildren: 0.075,
                                delayChildren: 0.25,
                            }}
                            className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
                        >
                            {heading.split("").map((l, i) => (
                                <motion.span
                                    variants={{
                                        initial: { x: 0 },
                                        whileHover: { x: 16 },
                                    }}
                                    transition={{ type: "spring" }}
                                    className="inline-block"
                                    key={i}
                                >
                                    {l}
                                </motion.span>
                            ))}
                        </motion.span>
                        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
                            {subheading}
                        </span>
                    </div>

                    <motion.img
                        style={{
                            top,
                            left,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                        variants={{
                            initial: { scale: 0, rotate: "-12.5deg" },
                            whileHover: { scale: 1, rotate: "12.5deg" },
                        }}
                        transition={{ type: "spring" }}
                        src={imgSrc}
                        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
                        alt={`Image representing a link for ${heading}`}
                    />

                    <motion.div
                        variants={{
                            initial: {
                                x: "25%",
                                opacity: 0,
                            },
                            whileHover: {
                                x: "0%",
                                opacity: 1,
                            },
                        }}
                        transition={{ type: "spring" }}
                        className="relative z-10 p-4"
                    >
                        <FiArrowRight className="text-5xl text-neutral-50" />
                    </motion.div>

                </motion.div>
            </Link>
            <AnimatedName />
        </>
    );
};