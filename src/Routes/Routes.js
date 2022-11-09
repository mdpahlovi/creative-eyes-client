import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Blogs from "../Pages/Blogs";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import DynamicService from "../Pages/DynamicService";
import AddService from "../Pages/AddService";
import MyReview from "../Pages/MyReview";
import PrivateRoute from "./PrivateRoute";
import EditReview from "../Pages/EditReview";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/add-service",
                element: (
                    <PrivateRoute>
                        <AddService />
                    </PrivateRoute>
                ),
            },
            {
                path: "/service/:id",
                element: <DynamicService />,
            },
            {
                path: "/my-review",
                element: (
                    <PrivateRoute>
                        <MyReview />
                    </PrivateRoute>
                ),
            },
            {
                path: "/edit-review/:id",
                element: (
                    <PrivateRoute>
                        <EditReview />
                    </PrivateRoute>
                ),
            },
            {
                path: "/blogs",
                element: <Blogs />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "registration",
                element: <Registration />,
            },
        ],
    },
]);

export { router };
