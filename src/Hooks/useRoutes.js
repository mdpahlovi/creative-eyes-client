import { useAuth } from "./useAuth";
import { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsJournalBookmark } from "react-icons/bs";
import { MdOutlinePermMedia } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { useLocation } from "react-router-dom";

export const useRouter = () => {
    const { user } = useAuth();
    const { pathname } = useLocation();
    const [routers, setRouters] = useState([]);

    useEffect(() => {
        if (user?.isAdmin) {
            setRouters([
                { to: "/all-user", icon: <FaUsers size={16} />, label: "All User" },
                { to: "/all-service", icon: <HiViewGridAdd size={18} />, label: "All Service" },
                { to: "/all-booking", icon: <TbBrandBooking size={18} />, label: "All Booking" },
            ]);
        } else {
            setRouters([
                { to: "/profile", icon: <BiUserCircle size={18} />, label: "Profile" },
                { to: "/media", icon: <MdOutlinePermMedia size={16} />, label: "Media" },
                { to: "/booking", icon: <BsJournalBookmark />, label: "Booking" },
            ]);
        }
    }, [user?.isAdmin, pathname]);

    return routers;
};
