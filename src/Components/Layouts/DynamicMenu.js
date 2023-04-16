import { Button, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { FiLogOut } from "react-icons/fi";
import NoPhoto from "../../Assets/icon/NoPhoto.png";
import { useRouter } from "../../Hooks/useRoutes";
import { useAuth } from "../../Hooks/useAuth";

// profile menu component

const DynamicMenu = ({ className, position }) => {
    const { user, loading, signout } = useAuth();
    const routers = useRouter();

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
                            <img src={user?.avatar ? user.avatar : NoPhoto} alt="" className="absolute inset-0 w-10 h-10 rounded-full" />
                            <span className="pl-8">{user?.name ? user.name : "No Name"}</span>
                        </Button>
                    </MenuHandler>
                    <MenuList className="p-1">
                        {routers.map(({ to, icon, label }, idx) => (
                            <MenuItem key={idx}>
                                <Link to={to} className="icon px-3 py-2">
                                    {icon}
                                    {label}
                                </Link>
                            </MenuItem>
                        ))}
                        <hr className="my-1" />
                        <MenuItem className="hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10">
                            <button onClick={signout} className="text-red-500 icon px-3 py-2">
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
