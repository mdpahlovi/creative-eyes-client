import React from "react";
import ServicesCategories from "../Components/ServicesCategories";

const Services = () => {
    return (
        <section className="my-container section-gap">
            <div className="line-x max-w-xl mx-auto">
                <p className="mx-2 uppercase text-gray-700 font-bold">what i will provide</p>
            </div>
            <h1 className="text-center mb-10">My Services</h1>
            <ServicesCategories />
        </section>
    );
};

export default Services;
