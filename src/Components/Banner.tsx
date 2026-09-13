import BannerLogo from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className='container mx-auto min-h-120 my-4 flex justify-center items-center mb-15'>
            <div className="flex flex-col justify-between  space-y-6">
                <h2 className='font-bold text-5xl'>Build Your Ideal <br />
                    <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] via-50% to-[#7C3AED] bg-clip-text text-transparent">
                        Development Stack
                    </span></h2>

                <p className="text-lg font-mono">Explore frontend, backend, database, and tooling options, <br />
                    compare them side by side, and put together the stack that fits your <br />
                    next project.</p>

                <div className="flex gap-4 mt-8">
                    <button className="bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white font-medium px-6 rounded-lg shadow-sm hover:opacity-95 transition-opacity">
                        Explore Technologies
                    </button>
                    <button className="btn font-normal px-12 rounded-lg shadow-sm hover:opacity-95 transition-opacity">Learn More</button>
                </div>
            </div>
            <div>
                <img src={BannerLogo} alt="" className="w-[480px] 
                h-[420px] object-cover"/>
            </div>
        </div>
    );
};

export default Banner;