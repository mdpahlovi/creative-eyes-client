import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "../Components/About/AboutUs";
import Header from "../Components/Common/Header";
import SetTitle from "../Components/Common/SetTitle";
import TeamCard from "../Components/About/TeamCard";

const About = () => {
    SetTitle("Creative Eyes | About");

    return (
        <>
            <Header title={"More About US"}>
                <Link to="/about">About Me</Link>
            </Header>
            <AboutUs />
            <section className="container space-y-6 mb-12 sm:mb-14 lg:mb-16">
                <div>
                    <h1>Our Team</h1>
                </div>
                <div className="flex flex-wrap gap-x-32 xl:gap-x-40 gap-y-12 sm:gap-y-4 justify-center pt-4">
                    {[...Array(3)].map((team, index) => (
                        <TeamCard key={index} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default About;
