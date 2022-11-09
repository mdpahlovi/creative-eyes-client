import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Blogs from "../Pages/Blogs";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import DynamicService from "../Pages/DynamicService";
import AddFeedBack from "../Pages/AddFeedBack";
import AddService from "../Pages/AddService";

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
                element: <AddService />,
            },
            {
                path: "/service/:id",
                element: <DynamicService />,
            },
            {
                path: "/add-feedback",
                element: <AddFeedBack />,
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
