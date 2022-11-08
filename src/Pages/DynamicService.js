import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

const DynamicService = () => {
    const [category, setCategory] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://photographer-server.vercel.app/service/${id}`)
            .then((res) => res.json())
            .then((data) => setCategory(data))
            .catch((error) => console.log(error));
    }, [id]);
    const { img, name, about, price, ratings } = category;
    return (
        <>
            <Header title={name}>
                <Link to="/service" className="opacity-60">
                    Services
                </Link>
                <Link>{name}</Link>
            </Header>
            <section className="my-container section-gap grid grid-cols-2 items-center gap-12">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                    <h3>{name}</h3>
                    <h4>Price: {price}$</h4>
                    <h4>Rating: {ratings}</h4>
                    <p>
                        <span className="text-xl font-bold">Description: </span>
                        {about}
                    </p>
                    <Button className="mt-2" variant="gradient" fullWidth>
                        Book This Services
                    </Button>
                </div>
            </section>
        </>
    );
};

export default DynamicService;
