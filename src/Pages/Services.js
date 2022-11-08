import React from "react";
import ServicesCategories from "../Components/ServicesCategories";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <>
            <Header title={"Explore My Services"}>
                <Link to="/services">Services</Link>
            </Header>
            <section className="my-container section-gap">
                <ServicesCategories initialLimit={0} btnStatus={"hidden"} />
            </section>
        </>
    );
};

export default Services;
