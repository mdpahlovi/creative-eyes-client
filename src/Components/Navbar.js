import React, { useState, useEffect, useContext } from "react";
import { Navbar, MobileNav, Typography, Button, Avatar, Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { AuthContext } from "../Contexts/UserContext";

const UserPopup = ({ children, name }) => {
    return (
        <Popover placement="bottom-end">
            <PopoverHandler>{children}</PopoverHandler>
            <PopoverContent>
                <span>{name}</span>
            </PopoverContent>
        </Popover>
    );
};

const Navigationbar = () => {
    const { user, loading, signout } = useContext(AuthContext);
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
        <Navbar className="py-2 shadow">
            <div className="my-container px-0 flex items-center justify-between text-black">
                <Link to="/" className="mr-4 py-1">
                    <h3>Pahlovi</h3>
                </Link>
                <div className="hidden lg:block">{navList}</div>
                {loading ? (
                    <Button variant="gradient" size="sm">
                        Loding...
                    </Button>
                ) : user?.uid ? (
                    <div className="space-x-6">
                        {user.photoURL ? (
                            <UserPopup name={user.displayName ? user.displayName : "No Name"}>
                                <Avatar src={user.photoURL} alt="avatar" variant="circular" size="sm" />
                            </UserPopup>
                        ) : (
                            <UserPopup name={user.displayName}>
                                <Button variant="gradient" size="sm">
                                    NoPhoto
                                </Button>
                            </UserPopup>
                        )}
                        <Button onClick={() => signout()} variant="gradient" size="sm">
                            LogOut
                        </Button>
                    </div>
                ) : (
                    <Link to="login" className="hidden lg:block">
                        <Button variant="gradient" size="sm">
                            Login
                        </Button>
                    </Link>
                )}
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
    );
};

export default Navigationbar;
