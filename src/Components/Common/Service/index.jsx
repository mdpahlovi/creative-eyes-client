import axios from "axios";
import Loader from "../Loader";
import ServicesCard from "./Card";
import { useQuery } from "react-query";
import { Button } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

const Service = ({ initialLimit }) => {
    const location = useLocation();

    const { isLoading, data: services = [] } = useQuery("service", () => axios("/service").then((res) => res.data));

    if (isLoading) return <Loader />;

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.slice(0, initialLimit ? initialLimit : services.length).map((service) => (
                    <ServicesCard key={service._id} service={service} />
                ))}
            </div>
            {location?.pathname === "/" && (
                <Link to="/services" className="flex justify-center">
                    <Button variant="gradient">See All</Button>
                </Link>
            )}
        </>
    );
};

export default Service;
