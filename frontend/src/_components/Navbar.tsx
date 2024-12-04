import React from "react";
import './Navbar.css';
import Link from "next/link";

function Navbar() {
    return (
        <nav className="sticky">
            <div className="flex justify-between items-center">
                <div className="mx-auto flex space-x-4 ">
                    <Link href="/" className="inline-flex mx-auto text-white rounded-lg">
                        <div className="font-semibold lg:text-6xl md:text-5xl text-4xl">
                            AU
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
