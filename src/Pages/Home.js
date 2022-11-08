import React from "react";
import Hero from "../Components/Hero";
import ServicesCategories from "../Components/ServicesCategories";

const Home = () => {
    return (
        <>
            <Hero />
            <section className="my-container section-gap">
                <div className="line-x max-w-xl mx-auto">
                    <p className="mx-2 uppercase text-gray-700 font-bold">what i will provide</p>
                </div>
                <h1 className="text-center mb-10">My Services</h1>
                <ServicesCategories initialLimit={3} btnStatus={""} />
            </section>
        </>
    );
};

export default Home;
