import { Button, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import { PulseLoader } from "react-spinners";
import twoWord from "../../Utilities/twoWord";
import { FiLogOut } from "react-icons/fi";
import NoPhoto from "../../Assets/icon/NoPhoto.png";
import { profileRoutes } from "../../Hooks/useRoutes";

// profile menu component

const DynamicMenu = ({ className, position }) => {
    const { user, loading, signout } = useContext(AuthContext);

    return (
        <div className={`${className} mb-4 lg:mb-0`}>
            {loading ? (
                <Button variant="outlined" color="gray" size="sm" className="flex items-center">
                    Loading <PulseLoader color="#000000" size={10} />
                </Button>
            ) : user?._id ? (
                <Menu placement={position}>
                    <MenuHandler>
                        <Button variant="outlined" color="gray" size="sm" className="relative">
                            <img src={user?.avatar ? user.avatar : NoPhoto} alt="" className="absolute inset-0 w-8 h-8 rounded-lg" />
                            <span className="pl-6">{user?.name ? twoWord(user.name) : "No Name"}</span>
                        </Button>
                    </MenuHandler>
                    <MenuList className="p-1">
                        {profileRoutes.map(({ to, icon, label }, idx) => (
                            <MenuItem key={idx}>
                                <Link to={to} className="icon">
                                    {icon}
                                    {label}
                                </Link>
                            </MenuItem>
                        ))}
                        <hr className="my-1" />
                        <MenuItem className="hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10">
                            <button onClick={signout} className="text-red-500 icon">
                                <FiLogOut size={16} />
                                Logout
                            </button>
                        </MenuItem>
                    </MenuList>
                </Menu>
            ) : (
                <Link to="login">
                    <Button variant="outlined" color="gray" size="sm">
                        Login
                    </Button>
                </Link>
            )}
        </div>
    );
};

export default DynamicMenu;
