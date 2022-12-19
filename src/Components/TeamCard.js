import React from "react";
import Img from "../Assets/Pahlovi.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const TeamCard = () => {
    return (
        <div className="group text-center">
            <div className="mx-auto h-52 w-52 rotate-45 overflow-hidden rounded-[4rem] shadow-md">
                <img
                    className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                    src={Img}
                    alt="woman"
                    loading="lazy"
                    width="640"
                    height="805"
                />
            </div>
            <div className="pt-6 pb-4">
                <h3>Hentoni Doe</h3>
                <h5>CEO-Founder</h5>
            </div>
            <h5 className="flex justify-center space-x-4 text-2xl">
                <a href="/">
                    <FaFacebookSquare />
                </a>
                <a href="/">
                    <RiInstagramFill />
                </a>
                <a href="/">
                    <FaTwitterSquare />
                </a>
                <a href="/">
                    <FaLinkedin />
                </a>
            </h5>
        </div>
    );
};

export default TeamCard;
