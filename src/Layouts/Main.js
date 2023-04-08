import { Outlet } from "react-router-dom";
import Footer from "../Components/Layouts/Footer";
import NavigationBar from "../Components/Layouts/Navbar";

const Main = () => {
    return (
        <>
            <NavigationBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;
