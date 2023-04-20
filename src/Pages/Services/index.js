import Header from "../../Components/Common/Header";
import { Link } from "react-router-dom";
import Service from "../../Components/Common/Service";

const Services = () => {
    return (
        <>
            <Header title={"Explore our service"}>
                <Link to="/services">Services</Link>
            </Header>
            <section className="container section-gap space-y-6">
                <Service />
            </section>
        </>
    );
};

export default Services;
