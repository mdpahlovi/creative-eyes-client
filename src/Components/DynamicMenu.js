import { Button, Menu, MenuHandler, MenuItem, MenuList, Avatar, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";
import { PulseLoader } from "react-spinners";

const DynamicMenu = ({ className, position }) => {
    const { user, loading, signout } = useContext(AuthContext);

    const UserPopup = ({ children, name }) => {
        return (
            <Popover placement={position}>
                <PopoverHandler>{children}</PopoverHandler>
                <PopoverContent>
                    <span>{name}</span>
                </PopoverContent>
            </Popover>
        );
    };

    return (
        <div className={className}>
            {loading ? (
                <Button variant="gradient" size="sm" className="flex items-center">
                    Loading <PulseLoader color="#ffffff" size={10} />
                </Button>
            ) : user?.uid ? (
                <div className="space-x-6">
                    {user.photoURL ? (
                        <UserPopup name={user.displayName ? user.displayName : "No Name"}>
                            <Avatar src={user.photoURL} alt="avatar" variant="circular" size="sm" />
                        </UserPopup>
                    ) : (
                        <UserPopup name={user.displayName}>
                            <Button variant="gradient" size="sm">
                                NoPhoto
                            </Button>
                        </UserPopup>
                    )}
                    <Menu placement={position}>
                        <MenuHandler>
                            <Button variant="gradient" size="sm">
                                Click Me
                            </Button>
                        </MenuHandler>
                        <MenuList>
                            <Link to="/my-review">
                                <MenuItem>My Review</MenuItem>
                            </Link>
                            <Link to="/add-service">
                                <MenuItem>Add Service</MenuItem>
                            </Link>
                            <MenuItem onClick={() => signout()}>LogOut</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            ) : (
                <Link to="login">
                    <Button variant="gradient" size="sm">
                        Login
                    </Button>
                </Link>
            )}
        </div>
    );
};

export default DynamicMenu;
