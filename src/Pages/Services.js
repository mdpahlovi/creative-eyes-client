import Header from "../Components/Common/Header";
import { Link } from "react-router-dom";
import SetTitle from "../Components/Common/SetTitle";
import ServiceCategory from "../Components/Common/Service/Category";

const Services = () => {
    SetTitle("Creative Eyes | Services");
    return (
        <>
            <Header title={"Explore My Services"}>
                <Link to="/services">Services</Link>
            </Header>
            <section className="container section-gap space-y-6">
                <ServiceCategory />
            </section>
        </>
    );
};

export default Services;
