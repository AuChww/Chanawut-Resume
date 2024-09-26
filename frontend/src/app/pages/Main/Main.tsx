"use client"
import University from "../Border/University"
import Stack from "../Border/Stack"
import Intern from "../Border/Intern"
import Intern2 from "../Border/Intern2"
import Image from "next/image"
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation"
import { motion } from "framer-motion";

const LoadingAnimation = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-900">
      <div className="animate-spin rounded-full h-60 w-60 border-t-4 border-b-4 border-white text black"></div>
      <div className="absolute animate-fade-left animate-once animate-duration-[1500ms] animate-ease-linear text-4xl">Chanawut</div>
    </div>
  );

export default function Main(){
    const [isLoading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const delayTimer = setTimeout(() => {
        setLoading(false);
        }, 1500);

        return () => clearTimeout(delayTimer);
    }, []);

    const handleStackClick = () => {
        router.push('/pages/Stack'); // Navigate to /Stack
    };

    const handleUniversityClick = () => {
        router.push('/pages/University'); // Navigate to /Stack
    };

    const handleInternClick = () => {
        router.push('/pages/Intern'); // Navigate to /Stack
    };

    return(
        <div className="relative w-full h-screen">
            {isLoading && <LoadingAnimation />} {/* Show loading animation */}

            <div className={`transition-opacity absolute duration-1000 z-10 ${isLoading ? 'opacity-0' : 'opacity-100'} h-full w-full bg-zinc-600`}>
                <div className="flex h-full">
                    <div className="w-1/3 relative">
                        <Image
                            src="/images/Profile/Profile.jpg" 
                            alt="Profile Image"
                            layout="fill"
                            objectFit="cover"
                            className="animate-fade-right animate-once animate-duration-[2000ms] animate-delay-[1000ms] animate-ease-in-out"
                        />
                    </div>
                    <div className="relative w-2/3 flex items-center justify-center">
                        <div className="absolute inset-0 flex w-full">
                            <div className={`h-full w-1/5 bg-zinc-900 animate-fade-left animate-once animate-duration-[1000ms] animate-delay-[1800ms]`}></div>
                            <div className={`h-full w-1/5 bg-zinc-900 animate-fade-left animate-once animate-duration-[1000ms] animate-delay-[2100ms]`}></div>
                            <div className={`h-full w-1/5 bg-zinc-900 animate-fade-left animate-once animate-duration-[1000ms] animate-delay-[2400ms]`}></div>
                            <div className={`h-full w-1/5 bg-zinc-900 animate-fade-left animate-once animate-duration-[1000ms] animate-delay-[2700ms]`}></div>
                            <div className={`h-full w-1/5 bg-zinc-900 animate-fade-left animate-once animate-duration-[1000ms] animate-delay-[3000ms]`}></div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 z-10 w-full grid grid-cols-4 gap-20">
                    <div className="mt-80 mx-auto">
                        <div className="mt-60 mx-auto bg-zinc-900 text-white px-6 py-2 rounded-3xl animate-wiggle animate-infinite animate-ease-in-out ml-4 text-4xl">
                            <div>Chanawut</div>
                            <div>Wuttinun</div>
                        </div>
                        <div className="bg-zinc-700 px-6 py-2 rounded-3xl animate-wiggle animate-delay-500 animate-infinite animate-ease-in-out ml-4 text-md">
                            <div className="text-3xl mb-2">Contact</div>
                            <div className="flex">
                            <div>
                            <button
                            type="button"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                            className="mb-2 inline-block rounded bg-[#333] p-1 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                            <span className="[&>svg]:h-4 [&>svg]:w-4">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 496 512">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
                            </span>
                            </button>
                            </div>
                            <div className="pl-2 mt-0.5">AuChww</div>
                        </div>
                        <div className="flex">
                            <div>
                            <button
                            type="button"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                            className="mb-2 inline-block rounded bg-[#0077b5] p-1 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                            <span className="[&>svg]:h-4 [&>svg]:w-4">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512">
                                <path
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                </svg>
                            </span>
                            </button>
                            </div>
                            <div className="pl-2 mt-0.5">Chanawut (Au) Wuttinun</div>
                        </div>
                        <div className="flex">
                            <div>
                            <button
                                type="button"
                                data-twe-ripple-init
                                data-twe-ripple-color="light"
                                className="mb-2 inline-block rounded bg-[#1877f2] p-1 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                <span className="[&>svg]:h-4 [&>svg]:w-4">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 320 512"><path
                                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                    </svg>
                                </span>
                            </button>
                            </div>
                            <div className="pl-2 mt-0.5">Chanawut Wuttinun</div>
                        </div>
                    </div>
                </div>
                <button className="mt-20 h-[800px] animate-wiggle-more animate-once animate-duration-[2600ms] animate-ease-in-out ml-4 text-4xl" onClick={handleStackClick}>
                    <div className=" hover:scale-110 duration-300 h-full">
                        <Stack />
                    </div>
                </button>
                <button className="mt-20 h-[800px] animate-wiggle-more animate-once animate-duration-[2300ms] animate-ease-in-out ml-4 text-4xl ">
                    <div className=" hover:scale-110 duration-300 h-full">
                        <University />
                    </div>
                </button>
                <button className="mt-20 h-[800px] animate-wiggle-more animate-once animate-duration-[2000ms] animate-ease-in-out ml-4 text-4xl ">
                    <div className=" hover:scale-110 duration-300 h-full">
                        <Intern2 />
                    </div>
                </button>
            </div>
        </div>
        </div>
    )
}