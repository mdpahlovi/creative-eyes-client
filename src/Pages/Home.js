import React from "react";
import AboutMe from "../Components/AboutMe";
import Hero from "../Components/Hero";
import ServicesCategories from "../Components/ServicesCategories";

const Home = () => {
    return (
        <>
            <Hero />
            <AboutMe />
            <section className="my-container section-gap">
                <h1 className="text-center mb-10">My Services</h1>
                <ServicesCategories initialLimit={3} btnStatus={""} />
            </section>
        </>
    );
};

export default Home;
