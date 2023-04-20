import { Link } from "react-router-dom";
import Header from "../Components/Common/Header";

const Portfolio = () => {
    return (
        <>
            <Header title={"Get in touch with us"}>
                <Link to="/portfolio">Portfolio</Link>
            </Header>
            <main className="container section-gap"></main>
        </>
    );
};

export default Portfolio;
