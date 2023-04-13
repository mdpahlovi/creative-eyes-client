import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import axios from "axios";
import { useQuery } from "react-query";
import { useAuth } from "../../Hooks/useAuth";
import { HashLoader } from "react-spinners";
import BookingStep from "../../Components/Booking/BookingStep";
import { useEffect, useRef } from "react";

export default function Booking() {
    const tabs = useRef();
    const { user, loading } = useAuth();
    const { isLoading, data: bookingData = [] } = useQuery(["book", user?._id], () => axios(`/book/user/${user?._id}`).then((res) => res.data));

    useEffect(() => {
        if (bookingData.length) {
            tabs.current.childNodes[0].classList.add("overflow-x-auto");
        }
    }, [bookingData.length]);

    if (loading || isLoading) {
        return (
            <div className="w-full h-[calc(100vh-4.5rem)] flex justify-center items-center">
                <HashLoader color="#3388FF" size={100} />
            </div>
        );
    } else if (bookingData.length === 0) {
        return (
            <div className="container section-gap h-[calc(100vh-4.5rem)] flex items-center justify-center text-center">
                <h5>Sorry! You didn't book any service.</h5>
            </div>
        );
    } else {
        return (
            <Tabs ref={tabs} value={bookingData[0]?._id} className="container section-gap ">
                <TabsHeader className="w-max whitespace-nowrap mx-auto">
                    {bookingData.map(({ _id, name }) => (
                        <Tab key={_id} value={_id} className="px-6 py-2.5 text-lg font-semibold">
                            {name}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {bookingData.map((project) => (
                        <TabPanel key={project._id} value={project._id} className="mt-6 p-0 text-black">
                            <BookingStep project={project} />
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        );
    }
}
