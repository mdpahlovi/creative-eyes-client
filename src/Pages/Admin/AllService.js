import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loader from "../../Components/Common/Loader";
import { Button, Tooltip } from "@material-tailwind/react";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdEditNote } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { toast } from "react-toastify";

const AllService = () => {
    const { isLoading, refetch, data: services = [] } = useQuery("service", () => axios("/service").then((res) => res.data));

    const handelDelete = (id) => {
        axios.delete(`/service/${id}`).then((res) => {
            if (res?.data?.acknowledge) {
                refetch();
                toast.success("Service Deleted Successfully");
            }
        });
    };

    if (isLoading) return <Loader />;

    return (
        <main className="container section-gap space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="hidden xs:block">All Service</h3>
                <Link to="/add-service">
                    <Button>Add New Service</Button>
                </Link>
            </div>
            <div className="table-rounded">
                <table>
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Name</th>
                            <th>Details</th>
                            <th>Price</th>
                            <th className="pr-6">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map(({ _id, name, details, price }, idx) => (
                            <tr key={idx}>
                                <td>{`${idx < 9 ? "0" : ""}${idx + 1}`}</td>
                                <td>{name}</td>
                                <td>
                                    <Tooltip content={details} className="max-w-lg">
                                        <Button size="sm" variant="outlined">
                                            Details
                                        </Button>
                                    </Tooltip>
                                </td>
                                <td>
                                    <h5 className="inline-flex items-center">
                                        {price}
                                        <TbCurrencyTaka className="-ml-1" />
                                        <span className="text-sm font-normal">(Per Day)</span>
                                    </h5>
                                </td>
                                <td className="pr-6">
                                    <div className="flex gap-4">
                                        <Link to={`/edit-service/${_id}`}>
                                            <button className="icon-button">
                                                <MdEditNote size={18} />
                                            </button>
                                        </Link>
                                        <button onClick={() => handelDelete(_id)} className="icon-button">
                                            <RiDeleteBin5Fill />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default AllService;
