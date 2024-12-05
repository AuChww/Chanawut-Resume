import React from "react";
import './Navbar.css';
import Link from "next/link";

function Navbar() {
    return (
        <nav className="sticky">
            <div className="items-center">
                <div className=" flex space-x-4 justify-between">
                    <Link href="#main" className="text-white rounded-lg">
                        <div className="font-semibold pl-4 lg:text-5xl md:text-4xl text-xl">
                            AU
                        </div>
                    </Link>
                    <div>
                    <p className="text-sm text-zinc-500 mt-2 pr-4">Adjust to Horizontal</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
