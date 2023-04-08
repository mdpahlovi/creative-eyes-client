import React, { useEffect, useState } from "react";
import SetTitle from "../Components/Common/SetTitle";
import Hero from "../Components/Home/Hero";
import AboutUs from "../Components/About/AboutUs";
import ServiceCategory from "../Components/Common/Service/Category";
import TestimonialCard from "../Components/Home/TestimonialCard";

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
            <section className="container section-gap space-y-6">
                <h1>Our Services</h1>
                <ServiceCategory initialLimit={size} />
            </section>
            <section className="container section-gap space-y-6">
                <h1>Client Testimonial</h1>
                <div className="grid grid-cols-2 gap-8">
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
            </section>
        </>
    );
};

export default Home;
