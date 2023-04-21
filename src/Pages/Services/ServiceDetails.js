import axios from "axios";
import { useQuery } from "react-query";
import { Button } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../Components/Common/Header";
import Loader from "../../Components/Common/Loader";
import { TbCurrencyTaka } from "react-icons/tb";
import Review from "../../Components/Common/Review";

const ServiceDetails = () => {
    const { id } = useParams();

    const { isLoading: serviceLoading, data: service } = useQuery(["service", id], () => axios(`/service/${id}`).then((res) => res.data));

    const { isLoading: reviewLoading, data: reviews = [] } = useQuery(["review", id], () => axios(`/review/service/${id}`).then((res) => res.data));

    if (serviceLoading || reviewLoading) return <Loader />;

    const { _id, image, name, details, price, ratings } = service;
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
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="flex flex-col gap-2 p-6 xl:px-8 xl:py-10">
                    <h3 className="p-4 shadow rounded-md mb-2">{name}</h3>
                    <h5 className="flex gap-1">
                        Price :
                        <span className="inline-flex items-center">
                            {price}
                            <TbCurrencyTaka className="-ml-1" />
                            <span className="text-sm font-normal">(Per Day)</span>
                        </span>
                    </h5>
                    <h5>Rating : {ratings}</h5>
                    <div>
                        <h5>Description : </h5>
                        <p>{details}</p>
                    </div>
                    <Link to={`/book?service=${name}&id=${_id}`}>
                        <Button className="mt-2" variant="gradient" fullWidth>
                            Book This Services
                        </Button>
                    </Link>
                </div>
            </section>
            <section className="container space-y-6 mb-12 sm:mb-14 lg:mb-16">
                <h1 className="text-center">Customer Review</h1>
                <div className="flex flex-wrap justify-center gap-6">
                    {reviews.length ? reviews.map((review) => <Review key={review._id} reviewObj={review} />) : <Button variant="gradient">No Review</Button>}
                </div>
            </section>
        </>
    );
};

export default ServiceDetails;
