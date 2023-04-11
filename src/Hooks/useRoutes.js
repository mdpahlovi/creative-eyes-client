import { useAuth } from "./useAuth";
import { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsJournalBookmark } from "react-icons/bs";
import { MdOutlinePermMedia } from "react-icons/md";
import { useLocation } from "react-router-dom";

export const useRouter = () => {
    const { user } = useAuth();
    let routers;

    if (user?.isAdmin) {
        routers = [
            { to: "/bookings", icon: <BiUserCircle size={18} />, label: "Profile" },
            { to: "/users", icon: <MdOutlinePermMedia size={16} />, label: "Media" },
            { to: "/add-service", icon: <BsJournalBookmark />, label: "Add Service" },
        ];
    } else {
        routers = [
            { to: "/profile", icon: <BiUserCircle size={18} />, label: "Profile" },
            { to: "/media", icon: <MdOutlinePermMedia size={16} />, label: "Media" },
            { to: "/booking", icon: <BsJournalBookmark />, label: "Booking" },
        ];
    }

    return routers;
};
