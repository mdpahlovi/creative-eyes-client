import React from "react";
import { Link } from "react-router-dom";
import AboutMe from "../Components/AboutMe";
import Header from "../Components/Header";
import SetTitle from "../Components/SetTitle";

const About = () => {
    SetTitle("Creative Eyes | About");

    return (
        <>
            <Header title={"More About Me"}>
                <Link to="/about">About Me</Link>
            </Header>
            <AboutMe />
        </>
    );
};

export default About;
