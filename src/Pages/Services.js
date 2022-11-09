import React from "react";
import ServicesCategories from "../Components/ServicesCategories";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import SetTitle from "../Components/SetTitle";

const Services = () => {
    SetTitle("My Services");
    return (
        <>
            <Header title={"Explore My Services"}>
                <Link to="/services">Services</Link>
            </Header>
            <section className="my-container section-gap">
                <ServicesCategories initialLimit={0} seeAllBtnStatus={"hidden"} />
            </section>
        </>
    );
};

export default Services;
