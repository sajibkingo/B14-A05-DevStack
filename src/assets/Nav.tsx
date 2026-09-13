import Logo from "./logo-text.png"

const Nav = () => {
    return (
        <nav className="flex">
            <div className="container mx-auto flex justify-between my-2 items-center">
                <img src={Logo} alt="" />

                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <button>Sign In</button>
                <button>Sign Up</button>

            </div>
        </nav>
    );
};

export default Nav;