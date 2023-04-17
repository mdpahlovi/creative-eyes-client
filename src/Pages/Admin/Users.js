import axios from "axios";
import { useQuery } from "react-query";
import NoPhoto from "../../Assets/icon/NoPhoto.png";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Loader from "../../Components/Common/Loader";
import { Avatar, IconButton } from "@material-tailwind/react";

const Users = () => {
    const { isLoading, data: users = [] } = useQuery("user", () => axios(`/user`).then((res) => res.data));

    return (
        <main className="container section-gap overflow-x-auto">
            {isLoading ? (
                <Loader />
            ) : (
                <table className="w-full table-auto border text-left">
                    <thead className="bg-gray-300 border-b">
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th className="pr-6">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
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
                                    <IconButton variant="outlined" size="sm" color="gray">
                                        <RiDeleteBin5Fill size={16} />
                                    </IconButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </main>
    );
};

export default Users;
