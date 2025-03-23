"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import University from "../Border/University";
import Intern from "../Border/Intern";
import Stack from "../Border/Stack";
import { FaUniversity } from "react-icons/fa";
import { GiJourney } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";
import { MdSwipeDown } from "react-icons/md";

export default function Main() {

    // State for hover effects
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    // Set up state to track visibility of each section
    const [visibleSections, setVisibleSections] = useState({
        Internship: false,
        University: false,
        Stack: false,
    });

    // Create an intersection observer to detect when sections become visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Set the visibility of each section based on intersection
                    if (entry.isIntersecting) {
                        setVisibleSections((prevState) => ({
                            ...prevState,
                            [entry.target.id]: true,
                        }));
                    } else {
                        setVisibleSections((prevState) => ({
                            ...prevState,
                            [entry.target.id]: false,
                        }));
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        // List of section IDs
        const sectionIds = ["Internship", "University", "Stack"];
        sectionIds.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => {
            sectionIds.forEach((id) => {
                const section = document.getElementById(id);
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false); // Hide after the animation
        }, 2500); // Match animation duration (1.5s)

        return () => clearTimeout(timeout); // Cleanup on component unmount
    }, []);

    return (
        <div className="relative h-screen bg-gradient-to-b from-gray-800 to-black text-white snap-y snap-mandatory overflow-y-scroll">
            {/* Main Section */}
            <section id="main" className="h-screen grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center snap-start flex">
                <div className={`text-center lg:mt-8 md:mt-8 mt-80 z-10 `}
                >
                    <h1 className="text-4xl font-bold">Chanawut Wuttinun (Au)</h1>
                    <p className="mt-4">Full Stack Developer | Passionate Learner</p>
                    <div className="flex justify-center space-x-4 mt-6">
                        <Link href="https://github.com/AuChww"
                            className="text-gray-300 hover:text-white hover:scale-110 transition bg-zinc-800 flex px-2 py-1">
                            <span className="[&>svg]:h-4 [&>svg]:w-4 mt-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 496 512">
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
                            </span>
                            <div className="pl-2">
                                GitHub
                            </div>
                        </Link>
                        <Link href="https://www.linkedin.com/in/chanawut/"
                            className="text-gray-300 hover:text-white hover:scale-110 transition bg-blue-900 flex px-2 py-1">
                            <span className="[&>svg]:h-4 [&>svg]:w-4 mt-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 496 512">
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
                            </span>
                            <div className="pl-2">
                                LinkedIn
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="h-full md:relative absolute items-center justify-center flex lg:relative">
                    <Image
                        src="/images/Profile/Profile.jpg"
                        alt="Profile"
                        width={2000}
                        height={2000}
                        className="h-full w-auto object-cover"
                    />
                    <div
                        className={`z-50 absolute text-[150px] text-white flex items-end ${isVisible ? "animate-fade-up duration-1000 animate-infinite" : "opacity-0"
                            }`}
                    >
                        <MdSwipeDown />
                    </div>
                </div>
            </section>

            {/* Stack Section */}
            <section id="Stack" className="h-screen grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 justify-center snap-start flex">
                <div
                    className={`lg:relative md:relative absolute h-screen transition-opacity duration-700`}
                >
                    <Image
                        src="https://pbs.twimg.com/media/FVVrqWCUcAASp31.jpg:large"
                        alt="Profile"
                        width={2000}
                        height={2000}
                        className={`h-2/3 w-full object-cover ${visibleSections.Stack ? "opacity-100 animate-fade-right" : "opacity-0"}`}
                    />
                    <Image
                        src="https://kuic.ku.ac.th/wp-content/uploads/2022/10/about-kuic-photo-1.jpg"
                        alt="Profile"
                        width={2000}
                        height={2000}
                        className={`h-1/3 w-full object-cover ${visibleSections.Stack ? "opacity-100 animate-fade-left" : "opacity-0"}`}
                    />
                </div>
                <Stack />
                <div
                    className={`lg:relative md:relative absolute h-screen transition-opacity duration-700`}
                >
                    <Image
                        src="/images/linkin.png"
                        alt="Profile"
                        width={2000}
                        height={2000}
                        className={`h-1/3 w-full object-cover ${visibleSections.Stack ? "opacity-100 animate-fade-left" : "opacity-0"}`}
                    />
                    <Image
                        src="/images/Resume.png"
                        alt="Profile"
                        width={2000}
                        height={2000}
                        className={`h-2/3 w-full object-cover ${visibleSections.Stack ? "opacity-100 animate-fade-up" : "opacity-0"}`}
                    />
                </div>
            </section>

            {/* University Section */}
            <section id="University" className="h-screen grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 justify-center snap-start flex">
                <div
                    className={`lg:relative md:relative absolute h-screen transition-opacity duration-700`}
                >
                    <Image
                        src="/images/work/image2.png"
                        alt="Profile"
                        width={2000}
                        height={2000}
                        className={`h-1/3 w-full object-cover ${visibleSections.University ? "opacity-100 animate-fade-left" : "opacity-0"}`}
                    />
                    <Image
                        src="/images/work/image1.png"
                        alt="Profile"
                        width={2000}
                        height={2000}
                        className={`h-2/3 w-full object-cover ${visibleSections.University ? "opacity-100 animate-fade-right" : "opacity-0"}`}
                    />

                </div>
                <University />
                <div
                    className={`lg:relative md:relative absolute h-screen transition-opacity duration-700`}
                >
                    <Image
                        src="/images/University/Byenior1.jpg"
                        alt="Profile"
                        width={2000}
                        height={2000}
                        className={`h-1/3 w-full object-cover ${visibleSections.University ? "opacity-100 animate-fade-right" : "opacity-0"}`}
                    />
                    <Image
                        src="/images/University/Freshy2.jpg"
                        alt="Profile"
                        width={2000}
                        height={2000}
                        className={`h-1/3 w-full object-cover ${visibleSections.University ? "opacity-100 animate-fade-left" : "opacity-0"}`}
                    />
                    <Image
                        src="/images/University/Jimjoom1.jpg"
                        alt="Profile"
                        width={2000}
                        height={2000}
                        className={`h-1/3 w-full object-cover ${visibleSections.University ? "opacity-100 animate-fade-right" : "opacity-0"}`}
                    />
                </div>
            </section>

            {/* Intern Section */}
            <section id="Internship" className="h-screen grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 justify-center snap-start flex">
                <div
                    className={`lg:relative md:relative absolute h-screen transition-opacity duration-700 ${visibleSections.Internship ? "opacity-100 animate-fade-up" : "opacity-0"
                        }`}
                >
                    <Image
                        src="/images/Intern/Intern1.jpg"
                        alt="Profile"
                        width={2000}
                        height={2000}
                        className="h-full w-full object-cover"
                    />
                </div>
                <Intern />
                <div
                    className={`lg:relative md:relative absolute h-screen transition-opacity duration-700 
                        `}
                >
                    <Image
                        src="https://moneyandbanking.co.th/wp-content/uploads/2023/04/tcc.jpg"
                        alt="Profile"
                        width={2000}
                        height={2000}
                        className={`h-2/5 w-full object-cover ${visibleSections.Internship ? "opacity-100 animate-fade-right" : "opacity-0"}`}
                    />
                    <Image
                        src="/images/Intern/Intern2.jpg"
                        alt="Profile"
                        width={2000}
                        height={2000}
                        className={`h-3/5 w-full object-cover ${visibleSections.Internship ? "opacity-100 animate-fade-left" : "opacity-0"}`}
                    />
                </div>
            </section>

            {/* Side Navigation */}
            <div className="fixed top-1/3 right-6 z-50 flex flex-col space-y-4">
                {["Stack", "University", "Internship"].map((section) => (
                    <div
                        key={section}
                        className="relative group"
                        onMouseEnter={() => setHoveredButton(section)}
                        onMouseLeave={() => setHoveredButton(null)}
                        onClick={() => scrollToSection(section)}>
                        {/* Button */}
                        <button className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-600 opacity-60 transition shadow-lg flex items-center justify-center">
                            {/* Set icon based on section */}
                            {section === "Stack" && <FaBookOpen className="h-6 w-6 text-white opacity-100" />}
                            {section === "University" && <FaUniversity className="h-6 w-6 text-white opacity-100" />}
                            {section === "Internship" && <GiJourney className="h-6 w-6 text-white opacity-100" />}
                        </button>
                        {/* Hover Content */}
                        {hoveredButton === section && (
                            <motion.div
                                className="absolute right-16 top-1 transform -translate-y-1/2 bg-gray-900 p-4 rounded-lg shadow-lg animate-fade-left"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}>
                                <h3 className="text-lg font-semibold">{section}</h3>
                                <p className="text-sm mt-2">
                                    {section === "Stack"
                                        ? "Explore my tech stack."
                                        : section === "University"
                                            ? "Learn about my university journey."
                                            : "Discover my internship experience."}
                                </p>
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
