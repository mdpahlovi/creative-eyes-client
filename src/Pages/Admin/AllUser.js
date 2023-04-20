import axios from "axios";
import { useQuery } from "react-query";
import NoPhoto from "../../Assets/icon/NoPhoto.png";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Loader from "../../Components/Common/Loader";
import { Avatar } from "@material-tailwind/react";

const AllUser = () => {
    const { isLoading, data: users = [] } = useQuery("user", () => axios(`/user`).then((res) => res.data));

    return (
        <main className="container section-gap overflow-x-auto">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="table-rounded">
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Service</th>
                                <th className="pr-6">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(({ name, email, avatar }, idx) => (
                                <tr key={idx}>
                                    <td>{`${idx < 9 ? "0" : ""}${idx + 1}`}</td>
                                    <td className="w-max flex items-center gap-x-3">
                                        <Avatar src={avatar ? avatar : NoPhoto} size="sm" />
                                        <p>{name}</p>
                                    </td>
                                    <td>{email}</td>
                                    <td>No Service</td>
                                    <td className="pr-6">
                                        <button className="icon-button">
                                            <RiDeleteBin5Fill />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
};

export default AllUser;
