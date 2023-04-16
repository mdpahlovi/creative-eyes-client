import axios from "axios";
import { useQuery } from "react-query";
import { useAuth } from "../../../Hooks/useAuth";
import { HashLoader } from "react-spinners";
import { Button } from "@material-tailwind/react";
import Header from "../../../Components/Common/Header";
import { Link } from "react-router-dom";

export default function Media() {
    const { user, loading } = useAuth();
    const { isLoading, data: media = [] } = useQuery(["media", user?._id], () => axios(`/media/user/${user?._id}`).then((res) => res.data));

    if (loading || isLoading) {
        return (
            <div className="w-full h-[calc(100vh-4.5rem)] flex justify-center items-center">
                <HashLoader color="#3388FF" size={100} />
            </div>
        );
    } else if (media.length === 0) {
        return (
            <div className="container section-gap h-[calc(100vh-4.5rem)] flex items-center justify-center text-center">
                <h3>Sorry! You didn't book any service.</h3>
            </div>
        );
    } else {
        return (
            <>
                <Header title="Completed Project">
                    <Link to="/media">Media</Link>
                </Header>
                <div className="container section-gap flex flex-wrap gap-6">
                    {media.map(({ booking }) => (
                        <Link to={`/media/${booking?.id}`}>
                            <Button>{booking?.name}</Button>
                        </Link>
                    ))}
                </div>
            </>
        );
    }
}
