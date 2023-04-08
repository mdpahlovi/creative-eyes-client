import React, { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import DynamicMenu from "./DynamicMenu";
import Logo from "../../Assets/Logo.png";
import { CgMenuRight, CgClose } from "react-icons/cg";

const NavigationBar = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navLink = ({ isActive }) => (isActive ? "font-bold underline text-base" : "text-base");

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" color="blue-gray">
                <NavLink className={navLink} to="/">
                    Home
                </NavLink>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray">
                <NavLink className={navLink} to="/about">
                    About Us
                </NavLink>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray">
                <NavLink className={navLink} to="/services">
                    Services
                </NavLink>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray">
                <NavLink className={navLink} to="/blogs">
                    Blogs
                </NavLink>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="py-2 shadow">
            <div className="container px-0 flex items-center justify-between text-black">
                <Link to="/" className="mr-4 py-1">
                    <img className="w-32" src={Logo} alt="" />
                </Link>
                <div className="hidden lg:block">{navList}</div>
                <button className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
                    {openNav ? <CgClose className="text-3xl" /> : <CgMenuRight className="text-3xl" />}
                </button>
                <DynamicMenu position={"bottom-end"} className={"hidden lg:block"} />
            </div>
            <MobileNav open={openNav}>
                {navList}
                <DynamicMenu position={"bottom-start"} />
            </MobileNav>
        </Navbar>
    );
};

export default NavigationBar;
