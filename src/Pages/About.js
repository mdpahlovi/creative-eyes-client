import { Link } from "react-router-dom";
import AboutUs from "../Components/About";
import Header from "../Components/Common/Header";
import TeamCard from "../Components/About/TeamCard";
import { team } from "../Components/Common/FakeData";

const About = () => {
    return (
        <>
            <Header title={"More about us"}>
                <Link to="/about">About</Link>
            </Header>
            <AboutUs />
            <section className="container space-y-6 mb-12 sm:mb-14 lg:mb-16">
                <div>
                    <h1>Our Team</h1>
                </div>
                <div className="flex flex-wrap gap-x-32 xl:gap-x-40 gap-y-12 sm:gap-y-4 justify-center pt-4">
                    {team.map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default About;
