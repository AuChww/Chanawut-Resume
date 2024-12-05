import React from "react";
import './Navbar.css';
import Link from "next/link";
import { BiMobileLandscape } from "react-icons/bi";
import { useState } from "react";

function Navbar() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
        // Automatically hide the alert after 3 seconds
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };

    return (
        <nav className="sticky">
            <div className="items-center">
                <div className=" flex space-x-4 justify-between">
                    <div className="pr-4 mr-2"></div>
                    <Link href="#main" className="text-white rounded-lg">
                        <div className="font-semibold pl-4 mt-1 lg:text-5xl md:text-4xl text-xl">
                            AU
                        </div>
                    </Link>
                    <div className="flex">
                        {showAlert && (
                            <div className="animate-fade-left mt-2 mr-2">
                                Please Adjust to Horizontal
                            </div>
                        )}
                        <p className="text-4xl text-white pr-4 mr-2" onClick={handleClick}>
                            <BiMobileLandscape />
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
