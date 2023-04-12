import { Avatar, IconButton } from "@material-tailwind/react";
import axios from "axios";
import { useQuery } from "react-query";
import { HashLoader } from "react-spinners";
import NoPhoto from "../../Assets/icon/NoPhoto.png";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Users = () => {
    const { isLoading, data: users = [] } = useQuery("user", () => axios(`/user`).then((res) => res.data));

    return (
        <main className="container section-gap overflow-x-auto">
            {isLoading ? (
                <div className="w-full h-[400px] flex justify-center items-center">
                    <HashLoader color="#3388FF" size={100} />
                </div>
            ) : (
                <table className="w-full table-auto border text-left">
                    <thead className="bg-gray-300 text-lg font-semibold border-b">
                        <tr>
                            <th className="py-3 px-6">No</th>
                            <th className="py-3 px-6">Name</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Service</th>
                            <th className="py-3 px-6">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {users.map(({ name, email, avatar }, idx) => (
                            <tr key={idx}>
                                <td className="py-3 px-6">{`${idx < 9 ? "0" : ""}${idx + 1}`}</td>
                                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                    <Avatar src={avatar ? avatar : NoPhoto} size="sm" />
                                    <p>{name}</p>
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">{email}</td>
                                <td className="py-3 px-6 whitespace-nowrap">No Service</td>
                                <td className="py-3 px-6 whitespace-nowrap">
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
