import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import SetTitle from "../Components/SetTitle";
import FeedBack from "../Components/FeedBack";

const DynamicService = () => {
    const [category, setCategory] = useState({});
    const { id } = useParams();

    // Data Load by Id
    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then((res) => res.json())
            .then((data) => setCategory(data))
            .catch((error) => console.log(error));
    }, [id]);
    const { img, name, about, price, ratings } = category;

    SetTitle(name);

    return (
        <>
            <Header title={name}>
                <Link to="/service" className="opacity-60">
                    Services
                </Link>
                <Link>{name}</Link>
            </Header>
            <section className="my-container section-gap grid grid-cols-1 lg:grid-cols-2 items-center gap-6 xs:gap-10 xl:gap-12">
                <div className="w-full sm:max-w-md mx-auto lg:max-w-none">
                    <img className="rounded-lg bg-black/5" src={img} alt="" />
                </div>
                <div className="flex flex-col gap-2 bg-black/5 p-6 xl:px-8 xl:py-10 rounded-lg">
                    <h3 className="p-4 shadow rounded-md mb-2">{name}</h3>
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
            <section className="my-container mb-12 sm:mb-14 lg:mb-16">
                <h1 className="text-center mb-10">Customer Feedback</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-10 xl:gap-12">
                    <FeedBack
                        name={"MD Rofiq"}
                        work={"Web DeveLoper At Facebook"}
                        feedback={
                            "My experience at Madroos is great and memorable. Huge respect, love and devotion for entire faculty members and department. It's their efforts that make me to count myself into better professionals."
                        }
                    />
                    <FeedBack
                        name={"MD Rofiq"}
                        work={"Web DeveLoper At Facebook"}
                        feedback={
                            "My experience at Madroos is great and memorable. Huge respect, love and devotion for entire faculty members and department. It's their efforts that make me to count myself into better professionals."
                        }
                    />
                    <FeedBack
                        name={"MD Rofiq"}
                        work={"Web DeveLoper At Facebook"}
                        feedback={
                            "My experience at Madroos is great and memorable. Huge respect, love and devotion for entire faculty members and department. It's their efforts that make me to count myself into better professionals."
                        }
                    />
                </div>
                <Link className="flex justify-center mt-10">
                    <Button variant="gradient">Add Your FeedBack</Button>
                </Link>
            </section>
        </>
    );
};

export default DynamicService;
