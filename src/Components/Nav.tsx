import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <nav>
            <div className="container mx-auto flex justify-between my-4 items-center">
                <img src={Logo} alt="" />

                <ul className="flex gap-4 items-center">
                    <li className="text-[#D91B7E]">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className="flex gap-2">
                    <button>Sign In</button>
                    <button className="btn btn-secondary rounded-3xl">Sign Up</button>
                </div>

            </div>
        </nav>
    );
};

export default Nav;