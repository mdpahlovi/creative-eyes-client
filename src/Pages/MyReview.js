import { Button } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyReviewCard from "../Components/MyReviewCard";
import { AuthContext } from "../Contexts/UserContext";
import Header from "../Components/Header";
import { toast } from "react-toastify";
import SetTitle from "../Components/SetTitle";

const MyReview = () => {
    SetTitle("My Review");
    const { user } = useContext(AuthContext);
    const [reviews, setreviews] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const email = user.email;

    // Corrent User Review load
    useEffect(() => {
        fetch(`https://photographer-server.vercel.app/reviewsbyemail?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("my-token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setreviews(data))
            .catch((error) => console.log(error));
    }, [email, refresh]);

    // Delete Review
    const handelDelete = (id) => {
        fetch(`https://photographer-server.vercel.app/reviewdelete/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success(data.message);
                setRefresh(!refresh);
            })
            .catch((err) => console.log(err.message));
    };

    if (reviews.length) {
        return (
            <>
                <Header title={"Your Review"}>
                    <Link to="/my-review">My review</Link>
                </Header>
                <section className="my-container section-gap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {reviews.map((review) => (
                        <MyReviewCard key={review._id} handelDelete={handelDelete} myreview={review} />
                    ))}
                </section>
            </>
        );
    } else {
        return (
            <div className="my-container h-[300px] flex justify-center items-center">
                <Button variant="gradient">No review added by user</Button>
            </div>
        );
    }
};

export default MyReview;
