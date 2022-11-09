import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesCard from "./ServicesCard";

const ServicesCategories = ({ initialLimit, btnStatus }) => {
    const [categories, setCategories] = useState([]);
    const [limit, setLimit] = useState(initialLimit);
    useEffect(() => {
        fetch(`http://localhost:5000/services?limit=${limit}`)
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.log(error));
    }, [limit]);
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <ServicesCard key={category._id} category={category} />
                ))}
            </div>
            <Link to="/services" className={`mt-8 md:mt-10 flex justify-center ${btnStatus}`}>
                <Button onClick={() => setLimit(0)} variant="gradient">
                    See All
                </Button>
            </Link>
        </>
    );
};

export default ServicesCategories;
