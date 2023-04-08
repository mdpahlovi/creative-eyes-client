import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import UserContext from "./Contexts/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <UserContext>
            <RouterProvider router={router} />
        </UserContext>
        <ToastContainer position="top-right" autoClose={1500} />
    </>
);
