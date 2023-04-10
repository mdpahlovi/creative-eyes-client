import { BiUserCircle } from "react-icons/bi";
import { BsJournalBookmark } from "react-icons/bs";
import { MdOutlinePermMedia } from "react-icons/md";

export const profileRoutes = [
    { to: "/profile", icon: <BiUserCircle size={18} />, label: "Profile" },
    { to: "/media", icon: <MdOutlinePermMedia size={16} />, label: "Media" },
    { to: "/booking", icon: <BsJournalBookmark />, label: "Booking" },
];
