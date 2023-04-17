import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "..//Contexts/UserContext";
import Loader from "../Components/Common/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loader />;
    }
    if (user && user?._id) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
