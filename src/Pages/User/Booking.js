import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import axios from "axios";
import { useQuery } from "react-query";
import { useAuth } from "../../Hooks/useAuth";
import { HashLoader } from "react-spinners";

export default function Booking() {
    const { user, loading } = useAuth();
    const { isLoading, data: bookingData = [] } = useQuery(["book", user?._id], () => axios(`/book/user/${user?._id}`).then((res) => res.data));

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
            <main className="container section-gap">
                <Tabs value={bookingData[0]?._id}>
                    <TabsHeader className="w-max whitespace-nowrap mx-auto">
                        {bookingData.map(({ _id, name }) => (
                            <Tab key={_id} value={_id} className="px-6 py-2.5 text-lg font-semibold">
                                {name}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {bookingData.map(({ _id, details }) => (
                            <TabPanel key={_id} value={_id} className="mt-4 p-0">
                                {details}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </main>
        );
    }
}
