import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Profile from "../../Assets/images/Profile.jpg";

const AboutUs = () => {
    return (
        <section className="container section-gap grid grid-cols-1 md:grid-cols-[5fr_7fr] xl:grid-cols-[4fr_8fr] gap-x-10 gap-y-2 items-center">
            <h1 className="md:hidden mb-4">About Us</h1>
            <img className="w-full xs:max-w-sm object-cover rounded-lg" src={Profile} alt="" />
            <div className="space-y-4">
                <h1 className="hidden md:block text-left">About Us</h1>
                <p>
                    Hi I'm Pahlovi! I have loved photography since I was a teenager growing up in the San Francisco Bay Area, plastering fashion spreads from W
                    Magazine all over my bedroom walls. I went on to work in the fashion industry in Milan, Italy for several years and then lived in Paris,
                    France, before coming to Montana in the early 90’s to settle down and raise a family. I love to play tennis, travel and enjoy everything
                    beautiful Montana has to offer with my family.
                </p>
                <div className="flex flex-col xs:flex-row gap-4">
                    <Link to="/contact">
                        <Button className="w-full xs:w-auto">Contact Us</Button>
                    </Link>
                    <Link to="portfolio">
                        <Button className="w-full xs:w-auto">See Portfolio</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
