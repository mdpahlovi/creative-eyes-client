import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loader from "../../Components/Common/Loader";
import BookingTable from "../../Components/Booking/BookingTable";

const AllBooking = () => {
    const [media, setMedia] = useState({ image: [], audio: [], video: [] });

    const { isLoading, refetch, data: bookings = [] } = useQuery("book", () => axios(`/book`).then((res) => res.data));

    const handleComplete = (id) => {
        axios.patch(`/book/${id}`, { isComplete: true }).then((res) => {
            if (res.data.acknowledge) {
                refetch();
                toast.success("Project Completed Successfully");
            }
        });
    };
    const handleUploadMedia = (mediaObj) => {
        axios.post("/media", mediaObj).then((res) => {
            if (res.data.acknowledge) {
                setMedia({ image: [], audio: [], video: [] });
                axios.patch(`/book/${mediaObj.bookingId}`, { isMediaUpdated: true }).then((res) => {
                    if (res.data.acknowledge) {
                        refetch();
                        toast.success("Media Updated Successfully");
                    }
                });
            }
        });
    };
    const handleUploadMore = (id, media) => {
        axios.patch(`/media/update/${id}`, media).then((res) => {
            if (res.data.acknowledge) {
                setMedia({ image: [], audio: [], video: [] });
                refetch();
                toast.success("More Media Uploaded");
            }
        });
    };

    return (
        <main className="container section-gap overflow-x-auto">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="table-rounded">
                    <table>
                        <thead>
                            <tr>
                                <th>User Data</th>
                                <th>Project</th>
                                <th>Location</th>
                                <th>Duration</th>
                                <th>isComplete</th>
                                <th>isMediaUpdated</th>
                                <th className="pr-6">Media</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((bookingData) => (
                                <BookingTable
                                    media={media}
                                    key={bookingData._id}
                                    bookingData={bookingData}
                                    handleComplete={handleComplete}
                                    handleUploadMore={handleUploadMore}
                                    handleUploadMedia={handleUploadMedia}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
};

export default AllBooking;
