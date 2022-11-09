import { Button } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyReviewCard from "../Components/MyReviewCard";
import { AuthContext } from "../Contexts/UserContext";
import Header from "../Components/Header";
import { toast } from "react-toastify";

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [feedbacks, setFeedbacks] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const email = user.email;
    useEffect(() => {
        fetch(`http://localhost:5000/feedbacksbyemail?email=${email}`)
            .then((res) => res.json())
            .then((data) => setFeedbacks(data))
            .catch((error) => console.log(error));
    }, [email, refresh]);

    // Delete Review
    const handelDelete = (id) => {
        fetch(`http://localhost:5000/feedbackdelete/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    toast.success(data.message);
                    setRefresh(!refresh);
                } else toast.error(data.error);
            })
            .catch((err) => console.log(err.message));
    };

    if (feedbacks.length) {
        return (
            <>
                <Header title={"Your Reedback"}>
                    <Link to="/my-feedback">My Feedback</Link>
                </Header>
                <section className="my-container section-gap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {feedbacks.map((feedback) => (
                        <MyReviewCard key={feedback._id} handelDelete={handelDelete} myfeedback={feedback} />
                    ))}
                </section>
            </>
        );
    } else {
        return (
            <div className="my-container h-[300px] flex justify-center items-center">
                <Button variant="gradient">No feedback added by user</Button>
            </div>
        );
    }
};

export default MyReview;
