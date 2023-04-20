import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import { Button } from "@material-tailwind/react";
import Header from "../../../Components/Common/Header";
import Loader from "../../../Components/Common/Loader";

export default function Media() {
    const { user, loading } = useAuth();
    const { isLoading, data: media = [] } = useQuery(["media", user?._id], () => axios(`/media/user/${user?._id}`).then((res) => res.data));

    if (loading || isLoading) {
        return <Loader />;
    } else if (media.length === 0) {
        return (
            <div className="container section-gap h-[calc(100vh-4.5rem)] flex items-center justify-center text-center">
                <h3>Sorry! You didn't have any media.</h3>
            </div>
        );
    } else {
        return (
            <>
                <Header title="Completed Projects">
                    <Link to="/media">Media</Link>
                </Header>
                <div className="container section-gap flex flex-wrap gap-6">
                    {media.map(({ _id, booking }) => (
                        <Link key={_id} to={`/media/${booking?.id}`}>
                            <Button>{booking?.name}</Button>
                        </Link>
                    ))}
                </div>
            </>
        );
    }
}
