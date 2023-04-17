import { useEffect, useState } from "react";
import Hero from "../Components/Home/Hero";
import Stats from "../Components/Home/Stats";
import Service from "../Components/Common/Service";
import Testimonial from "../Components/Home/Testimonial";
import NewsLetter from "../Components/Home/NewsLetter";

const Home = () => {
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
            <section className="container section-gap space-y-6">
                <h1>Our Services</h1>
                <Service initialLimit={size} />
            </section>
            <Stats />
            <Testimonial />
            <NewsLetter />
        </>
    );
};

export default Home;
