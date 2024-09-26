
import React from "react";
import './Navbar.css';
import Link from "next/link";

function Navbar() {
    return (
        <nav className="sticky bg-gradient-to-r from-transparent
        via-black to-transparent background-animate border-b py-8 md:py-6 top-0 z-50">
            <div className="flex justify-between items-center">
                <div className="font-semibold ml-6 text-xl">
                    <div className="relative mx-auto animate-bounce">
                        <div className="mx-auto md:h-10 md:w-10 h-8 w-8 animate-pulse rounded-full bg-white"></div>
                        <span className="absolute flex md:h-6 md:w-6 h-5 w-5 animate-spin">
                            <span className="md:h-4 md:w-4 h-3 w-3 rounded-full animate-pulse bg-green-400"></span>
                        </span>
                    </div>
                </div>
                <div className="mx-auto flex space-x-4 ">
                    <Link href="/" className="inline-flex mx-auto text-white rounded-lg">
                        <div className="font-semibold lg:text-6xl md:text-5xl text-4xl ">
                            AU
                        </div>
                    </Link>
                </div>
                <Link href="/project" className=" text-white mr-6 rounded-lg hover:animate-pulse">
                    <div className="font-semibold lg:text-4xl md:text-3xl text-xl" >
                        <svg
                            className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 mx-1 text-white dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path
                                d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                        </svg>
                    </div>
                </Link>
            </div>

        </nav >
    )
}

export default Navbar;