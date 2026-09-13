import React, { useState } from "react";
import Logo from "../assets/logo-text.png";

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className="w-full bg-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <img src={Logo} alt="DevStack Logo" className="h-8 md:h-10 object-contain" />

                <ul className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-700">
                    <li className="text-[#D91B7E] font-semibold cursor-pointer">Home</li>
                    <li className="hover:text-[#D91B7E] transition-colors cursor-pointer">Technologies</li>
                    <li className="hover:text-[#D91B7E] transition-colors cursor-pointer">Projects</li>
                    <li className="hover:text-[#D91B7E] transition-colors cursor-pointer">About</li>
                    <li className="hover:text-[#D91B7E] transition-colors cursor-pointer">Contact</li>
                </ul>

                <div className="hidden md:flex items-center gap-3">
                    <button type="button" className="btn btn-ghost btn-sm normal-case text-sm font-semibold cursor-pointer">
                        Sign In
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm rounded-3xl normal-case text-sm font-semibold px-5 cursor-pointer">
                        Sign Up
                    </button>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden btn btn-ghost btn-circle btn-sm"
                    aria-label="Toggle Navigation Menu"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden px-4 pb-5 pt-2 border-t border-gray-100 flex flex-col gap-4 bg-white">
                    <ul className="flex flex-col gap-3 text-sm font-medium text-gray-700">
                        <li className="text-[#D91B7E] font-semibold">Home</li>
                        <li className="hover:text-[#D91B7E] transition-colors">Technologies</li>
                        <li className="hover:text-[#D91B7E] transition-colors">Projects</li>
                        <li className="hover:text-[#D91B7E] transition-colors">About</li>
                        <li className="hover:text-[#D91B7E] transition-colors">Contact</li>
                    </ul>

                    <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
                        <button type="button" className="btn btn-ghost btn-sm w-full normal-case text-sm font-semibold">
                            Sign In
                        </button>
                        <button type="button" className="btn btn-secondary btn-sm w-full rounded-3xl normal-case text-sm font-semibold">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}

            <div className="divider my-0"></div>
        </nav>
    );
};

export default Nav;