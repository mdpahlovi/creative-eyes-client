import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import Profile from "../Assets/Profile.jpg";

const AboutMe = () => {
    return (
        <section className="my-container section-gap grid grid-cols-1 lg:grid-cols-[5fr_7fr] xl:grid-cols-[4fr_8fr] gap-12 items-center">
            <div>
                <img className="w-full xs:max-w-sm mx-auto rounded-lg" src={Profile} alt="" />
            </div>
            <div className="space-y-6">
                <h1>About Me</h1>
                <p className="lg:line-clamp-5">
                    Hi I'm Pahlovi! I have loved photography since I was a teenager growing up in the San Francisco Bay Area, plastering fashion spreads from W
                    Magazine all over my bedroom walls. I went on to work in the fashion industry in Milan, Italy for several years and then lived in Paris,
                    France, before coming to Montana in the early 90’s to settle down and raise a family. I love to play tennis, travel and enjoy everything
                    beautiful Montana has to offer with my family.
                </p>
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="font-bold">Name :</span> MD Pahlovi
                    </p>
                    <p>
                        <span className="font-bold">Email :</span> mdpahlovi07@gmail.com
                    </p>
                    <p>
                        <span className="font-bold">Phone :</span> 01736817612
                    </p>
                </div>
                <div className="flex flex-col xs:flex-row gap-4">
                    <Link>
                        <Button variant="gradient" className="w-full xs:w-auto">
                            Contact Me
                        </Button>
                    </Link>
                    <Link>
                        <Button variant="gradient" className="w-full xs:w-auto">
                            Download CV
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
