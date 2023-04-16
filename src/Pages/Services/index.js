import Header from "../../Components/Common/Header";
import { Link } from "react-router-dom";
import SetTitle from "../../Components/Common/SetTitle";
import Service from "../../Components/Common/Service";

const Services = () => {
    SetTitle("Creative Eyes | Services");
    return (
        <>
            <Header title={"Explore Our Service"}>
                <Link to="/services">Services</Link>
            </Header>
            <section className="container section-gap space-y-6">
                <Service />
            </section>
        </>
    );
};

export default Services;
