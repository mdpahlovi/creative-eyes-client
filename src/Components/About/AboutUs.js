import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../Assets/Profile.jpg";
import Stats from "./Stats";

const AboutUs = () => {
    return (
        <section className="container section-gap grid grid-cols-1 lg:grid-cols-[5fr_7fr] xl:grid-cols-[4fr_8fr] gap-x-10 gap-y-2 xl:items-center">
            <h1 className="lg:hidden mb-4">About Us</h1>
            <img className="w-full xs:max-w-sm mx-auto object-cover rounded-lg" src={Profile} alt="" />
            <div className="space-y-4">
                <h1 className="hidden lg:block text-left">About Us</h1>
                <p>
                    Hi I'm Pahlovi! I have loved photography since I was a teenager growing up in the San Francisco Bay Area, plastering fashion spreads from W
                    Magazine all over my bedroom walls. I went on to work in the fashion industry in Milan, Italy for several years and then lived in Paris,
                    France, before coming to Montana in the early 90’s to settle down and raise a family. I love to play tennis, travel and enjoy everything
                    beautiful Montana has to offer with my family.
                </p>
                <Stats />
                <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-4">
                    <Link>
                        <Button variant="gradient" className="w-full xs:w-auto">
                            Contact Me
                        </Button>
                    </Link>
                    <Link>
                        <Button variant="gradient" className="w-full xs:w-auto">
                            See Portfolio
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
