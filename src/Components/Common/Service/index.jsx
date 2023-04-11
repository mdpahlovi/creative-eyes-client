import axios from "axios";
import { useQuery } from "react-query";
import { Button } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import ServicesCard from "./Card";

const Service = ({ initialLimit }) => {
    const location = useLocation();

    const { isLoading, data: services } = useQuery("service", () => axios("/service").then((res) => res.data));

    if (isLoading) {
        return (
            <div className="w-full h-[400px] flex justify-center items-center">
                <HashLoader color="#3388FF" size={100} />
            </div>
        );
    } else {
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
    }
};

export default Service;
