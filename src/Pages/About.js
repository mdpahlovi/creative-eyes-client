import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Header from "../Components/Header";
import SetTitle from "../Components/SetTitle";

const About = () => {
    SetTitle("Creative Eyes | About");

    return (
        <>
            <Header title={"More About US"}>
                <Link to="/about">About Me</Link>
            </Header>
            <AboutUs />
        </>
    );
};

export default About;
