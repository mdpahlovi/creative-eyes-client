import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Blogs from "../Pages/Blogs";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AddService from "../Pages/Admin/AddService";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import AllUser from "../Pages/Admin/AllUser";
import ServiceBook from "../Pages/Services/ServiceBook";
import Booking from "../Pages/User/Booking";
import AllBooking from "../Pages/Admin/AllBooking";
import MediaDetails from "../Pages/User/Media/Details";
import Media from "../Pages/User/Media";
import AddBlog from "../Pages/Blogs/AddBlog";
import EditBlog from "../Pages/Blogs/EditBlog";
import AllService from "../Pages/Admin/AllService";
import EditService from "../Pages/Admin/EditService";
import Contact from "../Pages/Contact";
import Portfolio from "../Pages/Portfolio";
import Profile from "../Pages/User/Profile";

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
                path: "/all-service",
                element: (
                    <PrivateRoute>
                        <AllService />
                    </PrivateRoute>
                ),
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
                path: "/edit-service/:id",
                element: (
                    <PrivateRoute>
                        <EditService />
                    </PrivateRoute>
                ),
            },
            {
                path: "/service/:id",
                element: <ServiceDetails />,
            },
            {
                path: "/book",
                element: (
                    <PrivateRoute>
                        <ServiceBook />
                    </PrivateRoute>
                ),
            },
            {
                path: "/blogs",
                element: <Blogs />,
            },
            {
                path: "/add-blog",
                element: (
                    <PrivateRoute>
                        <AddBlog />
                    </PrivateRoute>
                ),
            },
            {
                path: "/edit-blog/:id",
                element: (
                    <PrivateRoute>
                        <EditBlog />
                    </PrivateRoute>
                ),
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "registration",
                element: <Registration />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/profile",
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                ),
            },
            {
                path: "/all-user",
                element: (
                    <PrivateRoute>
                        <AllUser />
                    </PrivateRoute>
                ),
            },
            {
                path: "/booking",
                element: (
                    <PrivateRoute>
                        <Booking />
                    </PrivateRoute>
                ),
            },
            {
                path: "/all-booking",
                element: (
                    <PrivateRoute>
                        <AllBooking />
                    </PrivateRoute>
                ),
            },
            {
                path: "/media",
                element: (
                    <PrivateRoute>
                        <Media />
                    </PrivateRoute>
                ),
            },
            {
                path: "/media/:id",
                element: (
                    <PrivateRoute>
                        <MediaDetails />
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

export { router };
