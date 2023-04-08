import { Button } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Components/Common/Header";
import SetTitle from "../Components/Common/SetTitle";
import Review from "../Components/Review";
import { AuthContext } from "../Contexts/UserContext";
import AddReview from "../Components/AddReview";

const DynamicService = () => {
    const { user } = useContext(AuthContext);
    const [category, setCategory] = useState({});
    const [reviews, setreviews] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const location = useLocation();
    const { id } = useParams();

    // Service Data Load by Id
    useEffect(() => {
        fetch(`https://photographer-server.vercel.app/service/${id}`)
            .then((res) => res.json())
            .then((data) => setCategory(data))
            .catch((error) => console.log(error));
    }, [id]);
    const { _id, img, name, about, price, ratings } = category;

    SetTitle(name);

    // review data loadby id
    useEffect(() => {
        fetch(`https://photographer-server.vercel.app/review/${id}`)
            .then((res) => res.json())
            .then((data) => setreviews(data))
            .catch((error) => console.log(error));
    }, [id, refresh]);

    const ConditionalReview = ({ reviews }) => {
        if (reviews.length) {
            return reviews.map((review) => <Review key={review._id} reviewObj={review} />);
        } else {
            return <Button variant="gradient">No review</Button>;
        }
    };

    return (
        <>
            <Header title={name}>
                <Link to="/service" className="opacity-60">
                    Services
                </Link>
                <Link>{name}</Link>
            </Header>
            <section className="container section-gap grid grid-cols-1 lg:grid-cols-2 items-center gap-6 xs:gap-10 xl:gap-12 [&>div]:rounded-lg [&>div]:shadow-md">
                <div
                    className="w-full sm:w-[448px] h-60 lg:w-full lg:h-full mx-auto bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${img})` }}
                ></div>
                <div className="flex flex-col gap-2 p-6 xl:px-8 xl:py-10">
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
            <section className="container space-y-6 mb-12 sm:mb-14 lg:mb-16">
                <h1 className="text-center">Customer Review</h1>
                <div className="flex flex-wrap justify-center gap-6 xs:gap-10 xl:gap-12">
                    <ConditionalReview reviews={reviews} />
                </div>
                {user?.uid ? (
                    <AddReview refresh={refresh} setRefresh={setRefresh} serviceId={_id} serviceName={name} email={user.email} />
                ) : (
                    <Link to="/login" className="flex justify-center" state={{ from: location }} replace>
                        <Button variant="gradient">Login To Add Review</Button>
                    </Link>
                )}
            </section>
        </>
    );
};

export default DynamicService;
