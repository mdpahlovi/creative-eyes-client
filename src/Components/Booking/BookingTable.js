import { differenceInCalendarDays } from "date-fns";
import NoPhoto from "../../Assets/icon/NoPhoto.png";
import { Avatar, Checkbox, Tooltip } from "@material-tailwind/react";

const BookingTable = ({ bookingData }) => {
    const { userId, phone, service, name, location, date, details } = bookingData;
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
                <Checkbox label={`${dayLeft} Days Left`} />
            </td>
            <td className="pl-3 pr-6">
                <Checkbox label="Remember Me" />
            </td>
        </tr>
    );
};

export default BookingTable;
