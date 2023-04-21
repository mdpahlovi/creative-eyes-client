import React, { useState, useEffect } from "react";
import { Navbar, MobileNav } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import DynamicMenu from "./DynamicMenu";
import Logo from "../../Assets/Logo.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { nav_links } from "../Common/FakeData";

const NavigationBar = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
        <div className="my-4 flex flex-col gap-2 lg:my-0 lg:flex-row lg:items-center lg:gap-6">
            {nav_links.map(({ link, text }, idx) => (
                <NavLink key={idx} className={({ isActive }) => (isActive ? "font-bold underline" : "")} to={link}>
                    {text}
                </NavLink>
            ))}
        </div>
    );

    return (
        <Navbar className="shadow sticky inset-0 z-50">
            <div className="container flex items-center justify-between">
                <Link to="/">
                    <img className="w-32" src={Logo} alt="" />
                </Link>
                <div className="hidden lg:block">{navList}</div>
                <button className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
                    {openNav ? <CgClose className="text-3xl" /> : <CgMenuRight className="text-3xl" />}
                </button>
                <DynamicMenu position={"bottom-end"} className={"hidden lg:block"} />
            </div>
            <MobileNav open={openNav} className="container">
                {navList}
                <DynamicMenu position={"bottom-start"} />
            </MobileNav>
        </Navbar>
    );
};

export default NavigationBar;
