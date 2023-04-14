import { differenceInCalendarDays } from "date-fns";
import NoPhoto from "../../Assets/icon/NoPhoto.png";
import { Avatar, Checkbox, Chip, Tooltip } from "@material-tailwind/react";
import UploadWidget from "./UploadWidget";

const BookingTable = ({ bookingData, handleComplete, handleUploadMedia, media }) => {
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
                <Tooltip content={details}>
                    <p className="text-xs text-blue-500 underline">View Details</p>
                </Tooltip>
            </td>
            <td>{location}</td>
            <td>{`${date.startDate} to ${date.endDate}`}</td>
            <td className="pl-3">
                {isComplete ? <Chip value="Completed" className="ml-3" /> : <Checkbox onClick={() => handleComplete(_id)} label={`${dayLeft} Days Left`} />}
            </td>
            <td className="pr-6">
                {isComplete ? (
                    <UploadWidget media={media} bookingData={bookingData} handleUploadMedia={handleUploadMedia}>
                        {isMediaUpdated ? "Upload More" : "Upload Media"}
                    </UploadWidget>
                ) : (
                    <Chip value="inCompleted" />
                )}
            </td>
        </tr>
    );
};

export default BookingTable;
