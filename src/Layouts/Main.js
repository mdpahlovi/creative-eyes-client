import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import NavigationBar from "./Components/Navbar";

const Main = () => {
    return (
        <>
            <NavigationBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;
