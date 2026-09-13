import React from "react";
import BannerLogo from "../assets/banner-stack.png";

const Banner: React.FC = () => {
    return (
        <div className="container mx-auto px-4 my-6 lg:my-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-8 mb-16">
            <div className="flex flex-col justify-between space-y-6 text-center lg:text-left items-center lg:items-start max-w-2xl">
                <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                    Build Your Ideal <br className="hidden sm:inline" />
                    <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] via-50% to-[#7C3AED] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h2>

                <p className="text-sm sm:text-base lg:text-lg font-mono text-gray-600 leading-relaxed">
                    Explore frontend, backend, database, and tooling options, compare them
                    side by side, and put together the stack that fits your next project.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                    <button
                        type="button"
                        className="bg-linear-to-r from-[#F97316] to-[#EC4899] text-white font-medium px-6 rounded-lg shadow-sm hover:opacity-95 transition-opacity cursor-pointer text-sm sm:text-base"
                    >
                        Explore Technologies
                    </button>
                    <button
                        type="button"
                        className="btn font-normal px-8 sm:px-12 rounded-lg shadow-sm hover:opacity-95 transition-opacity text-sm sm:text-base"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center">
                <img
                    src={BannerLogo}
                    alt="Banner Stack Illustration"
                    className="w-full h-auto max-h-95 lg:max-h-105 object-contain"
                />
            </div>
        </div>
    );
};

export default Banner;