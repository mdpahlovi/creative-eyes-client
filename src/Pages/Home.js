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
            <section className="flex justify-center mb-12 sm:mb-14 lg:mb-16">
                <div className="flex flex-col md:flex-row w-max h-max shadow rounded-lg">
                    <div className="p-6">
                        <div className="text-sm text-black/50 mb-2">Project Completed</div>
                        <h3>126+</h3>
                    </div>
                    <div className="border-y md:border-x md:border-y-0 border-black/10 p-6">
                        <div className="text-sm text-black/50 mb-2">Commercial Project</div>
                        <h3>36+</h3>
                    </div>
                    <div className="border-b md:border-r md:border-b-0 border-black/10 p-6">
                        <div className="text-sm text-black/50 mb-2">Satisfaction Rate</div>
                        <h3>97%</h3>
                    </div>
                    <div className="p-6">
                        <div className="text-sm text-black/50 mb-2">Success Rate</div>
                        <h3>96%</h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
