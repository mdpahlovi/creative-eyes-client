import React from "react";
import { Link } from "react-router-dom";
import AboutMe from "../Components/AboutMe";
import Header from "../Components/Header";

const About = () => {
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
