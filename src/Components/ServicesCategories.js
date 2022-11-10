import { Button } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../Contexts/UserContext";
import ServicesCard from "./ServicesCard";

const ServicesCategories = ({ initialLimit, seeAllBtnStatus, addServicesBtnStatus }) => {
    const { user } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(initialLimit);

    // Get Services by limit
    useEffect(() => {
        fetch(`http://localhost:5000/services?limit=${limit}`)
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, [limit]);

    if (loading) {
        return (
            <div className="w-full h-[400px] flex justify-center items-center">
                <HashLoader color="#3388FF" size={100} />
            </div>
        );
    } else {
        return (
            <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <ServicesCard key={category._id} category={category} />
                    ))}
                </div>
                {user?.uid ? (
                    <Link to="/add-service" className={`mt-8 md:mt-10 flex justify-center ${addServicesBtnStatus}`}>
                        <Button variant="gradient">Add Service</Button>
                    </Link>
                ) : (
                    ""
                )}
                <Link to="/services" className={`mt-8 md:mt-10 flex justify-center ${seeAllBtnStatus}`}>
                    <Button onClick={() => setLimit(0)} variant="gradient">
                        See All
                    </Button>
                </Link>
            </>
        );
    }
};

export default ServicesCategories;
