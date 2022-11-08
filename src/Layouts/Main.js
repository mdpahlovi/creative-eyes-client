import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navigationbar from "../Components/Navbar";

const Main = () => {
    return (
        <>
            <Navigationbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;
