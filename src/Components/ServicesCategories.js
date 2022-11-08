import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const ServicesCategories = ({ children }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
                <ServicesCard category={category} />
            ))}
        </div>
    );
};

export default ServicesCategories;
