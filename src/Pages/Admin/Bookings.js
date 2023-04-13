import axios from "axios";
import { useQuery } from "react-query";
import { HashLoader } from "react-spinners";
import BookingTable from "../../Components/Booking/BookingTable";

const Bookings = () => {
    const { isLoading, data: bookings = [] } = useQuery("book", () => axios(`/book`).then((res) => res.data));
    console.log(bookings);

    return (
        <main className="container section-gap overflow-x-auto">
            {isLoading ? (
                <div className="w-full h-[calc(100vh-4.5rem)] flex justify-center items-center">
                    <HashLoader color="#3388FF" size={100} />
                </div>
            ) : (
                <table className="w-full table-auto border text-left">
                    <thead className="bg-gray-300 border-b">
                        <tr>
                            <th>User Data</th>
                            <th>Project</th>
                            <th>Location</th>
                            <th>Duration</th>
                            <th>isComplete</th>
                            <th className="pr-6">isMediaUpdated</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {bookings.map((bookingData) => (
                            <BookingTable key={bookingData._id} bookingData={bookingData} />
                        ))}
                    </tbody>
                </table>
            )}
        </main>
    );
};

export default Bookings;
