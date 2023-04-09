import { Button } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../../../Contexts/UserContext";
import ServicesCard from "./Card";

const Service = ({ initialLimit }) => {
    const { user } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    // Get Services by limit
    useEffect(() => {
        fetch("https://photographer-server.vercel.app/services")
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

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
                    {categories.slice(0, initialLimit ? initialLimit : categories.length).map((category) => (
                        <ServicesCard key={category._id} category={category} />
                    ))}
                </div>
                {location?.pathname === "/" ? (
                    <Link to="/services" className="flex justify-center">
                        <Button variant="gradient">See All</Button>
                    </Link>
                ) : user?.uid ? (
                    <Link to="/add-service" className="flex justify-center">
                        <Button variant="gradient">Add Service</Button>
                    </Link>
                ) : (
                    ""
                )}
            </>
        );
    }
};

export default Service;
