import axios from "axios";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { useState, useEffect, useRef } from "react";
import Header from "../../Components/Common/Header";
import Loader from "../../Components/Common/Loader";
import BookingStep from "../../Components/Booking/BookingStep";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

export default function Booking() {
    const tabs = useRef();
    const { user, loading } = useAuth();
    const [review, setReview] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const { isLoading, refetch, data: bookingData = [] } = useQuery(["book", user?._id], () => axios(`/book/user/${user?._id}`).then((res) => res.data));

    useEffect(() => {
        if (bookingData.length) {
            tabs.current.childNodes[0].classList.add("overflow-x-auto");
        }
    }, [bookingData.length]);

    const handelReview = (event, serviceId, bookingId) => {
        setIsUploading(true);
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const occupation = form.occupation.value;
        const detail = form.detail.value;
        const review_data = { author: user?._id, occupation, detail, review, serviceId };

        if (!review) {
            setIsUploading(false);
            return toast.error("Please Add Ratting");
        }

        axios.post("/review", review_data).then((res) => {
            if (res.data.acknowledge) {
                setReview(0);
                axios.patch(`/book/${bookingId}`, { isReview: true }).then((res) => {
                    if (res.data.acknowledge) {
                        refetch();
                        toast.success("Review Updated Successfully");
                    }
                });
            }
        });
    };

    if (loading || isLoading) {
        return <Loader />;
    } else if (bookingData.length === 0) {
        return (
            <div className="container section-gap h-[calc(100vh-4.5rem)] flex items-center justify-center text-center">
                <h3>Sorry! You didn't book any service.</h3>
            </div>
        );
    } else {
        return (
            <>
                <Header title="Booked Projects">
                    <Link to="/booking">Booking</Link>
                </Header>
                <Tabs ref={tabs} value={bookingData[0]?._id} className="container section-gap ">
                    <TabsHeader className="w-max whitespace-nowrap mx-auto">
                        {bookingData.map(({ _id, name }) => (
                            <Tab key={_id} value={_id}>
                                {name}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {bookingData.map((project) => (
                            <TabPanel key={project._id} value={project._id}>
                                <BookingStep project={project} handelReview={handelReview} isUploading={isUploading} setReview={setReview} />
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </>
        );
    }
}
