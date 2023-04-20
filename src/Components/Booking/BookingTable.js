import { differenceInCalendarDays } from "date-fns";
import NoPhoto from "../../Assets/icon/NoPhoto.png";
import { Avatar, Button, Checkbox, Chip, Tooltip } from "@material-tailwind/react";
import UploadWidget from "./UploadWidget";
import { Link } from "react-router-dom";

const BookingTable = ({ bookingData, handleComplete, handleUploadMedia, handleUploadMore, media }) => {
    const { _id, userId, phone, service, name, location, date, details, isComplete, isMediaUpdated } = bookingData;
    const dayLeft = differenceInCalendarDays(new Date(date.startDate), new Date());

    return (
        <tr>
            <td className="w-max flex items-center gap-x-3">
                <Avatar src={userId?.avatar ? userId.avatar : NoPhoto} />
                <div>
                    <p className="font-medium">{userId?.name}</p>
                    <p className="-mt-1 text-xs">{phone}</p>
                    <p className="text-xs">{userId.email}</p>
                </div>
            </td>
            <td>
                <p className="font-medium">{name}</p>
                <p className="-mt-1 text-xs">{service.name}</p>
                <Tooltip content={details} className="max-w-lg">
                    <p className="text-xs text-blue-500 underline">View Details</p>
                </Tooltip>
            </td>
            <td>{location}</td>
            <td>{`${date.startDate} to ${date.endDate}`}</td>
            <td className="pl-3">
                {isComplete ? <Chip value="Completed" className="ml-3" /> : <Checkbox onClick={() => handleComplete(_id)} label={`${dayLeft} Days Left`} />}
            </td>
            <td>
                {isComplete ? (
                    <UploadWidget media={media} bookingData={bookingData} handleUploadMedia={handleUploadMedia} handleUploadMore={handleUploadMore}>
                        {isMediaUpdated ? "Upload More" : "Upload Media"}
                    </UploadWidget>
                ) : (
                    <Chip value="inCompleted" />
                )}
            </td>
            <td className="pr-6">
                <Link to={isMediaUpdated && `/media/${_id}`}>
                    <Button size="sm" disabled={isMediaUpdated ? false : true}>
                        Show
                    </Button>
                </Link>
            </td>
        </tr>
    );
};

export default BookingTable;
