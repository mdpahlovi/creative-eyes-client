import React, { useEffect, useState } from "react";
import AboutUs from "../Components/AboutUs";
import Hero from "./Hero";
import OurTeam from "../Components/OurTeam";
import ServicesCategories from "../Components/ServicesCategories";
import SetTitle from "../../Components/SetTitle";

const Home = () => {
    SetTitle("Creative Eyes Photography");
    const [width, setWidth] = useState(window.innerWidth);
    const [size, setSize] = useState(3);

    // Set different size for Different Screen
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        if (width <= 1024 || width >= 1600) {
            setSize(4);
        } else {
            setSize(3);
        }
        return () => {
            window.removeEventListener("resize", () => setWidth(window.innerWidth));
        };
    }, [width]);

    return (
        <>
            <Hero />
            <AboutUs />
            <section className="my-container section-gap space-y-6">
                <h1>Our Services</h1>
                <ServicesCategories initialLimit={size} />
            </section>
            <section className="my-container space-y-6 mb-12 sm:mb-14 lg:mb-16">
                <OurTeam />
            </section>
        </>
    );
};

export default Home;
