import BannerLogo from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className='container mx-auto min-h-120 bg-[#828CE4] rounded-3xl my-4 flex justify-center items-center mb-15'>
            <div className="flex flex-col justify-between items-center space-y-4 text-white">
                <h2 className='font-bold text-5xl'>Build Your Ideal
                    Development Stack</h2>
                <p className="text-xl font-mono">Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <button className="btn">Explore Technologies</button>
                <button className="btn">Learn More</button>
            </div>
            <div>
                <img src={BannerLogo} alt="" />
            </div>
        </div>
    );
};

export default Banner;