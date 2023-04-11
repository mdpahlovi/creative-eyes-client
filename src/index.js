import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import UserContext from "./Contexts/UserContext";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "swiper/css";

const queryClient = new QueryClient();
axios.defaults.baseURL = "https://photographer-server.vercel.app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={queryClient}>
        <UserContext>
            <RouterProvider router={router} />
            <ToastContainer position="top-right" autoClose={1500} />
        </UserContext>
    </QueryClientProvider>
);
