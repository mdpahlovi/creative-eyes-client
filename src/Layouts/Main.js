import { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography, Button } from "@material-tailwind/react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";

const Main = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navLink = ({ isActive }) => (isActive ? "font-bold underline" : "");

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <NavLink className={navLink} to="/">
                    Home
                </NavLink>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <NavLink className={navLink} to="/about">
                    About Me
                </NavLink>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <NavLink className={navLink} to="/services">
                    Services
                </NavLink>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <NavLink className={navLink} to="/blogs">
                    Blogs
                </NavLink>
            </Typography>
        </ul>
    );

    return (
        <>
            <Navbar className="py-2 shadow">
                <div className="my-container px-0 flex items-center justify-between text-black">
                    <Typography as="a" href="#" variant="small" className="mr-4 py-1">
                        <h3>Pahlovi</h3>
                    </Typography>
                    <div className="hidden lg:block">{navList}</div>
                    <Link to="login" className="hidden lg:block">
                        <Button variant="gradient" size="sm">
                            Login
                        </Button>
                    </Link>
                    <button className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
                        {openNav ? <CgClose className="text-3xl" /> : <CgMenuRight className="text-3xl" />}
                    </button>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <Link to="login">
                        <Button variant="gradient" size="sm" className="mb-2">
                            Login
                        </Button>
                    </Link>
                </MobileNav>
            </Navbar>
            <Outlet />
        </>
    );
};

export default Main;
