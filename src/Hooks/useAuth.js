import { useContext } from "react";
import { AuthContext } from "../Contexts/UserContext";

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};
