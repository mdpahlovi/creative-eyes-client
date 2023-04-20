import { SiMaildotru } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const TeamCard = ({ member }) => {
    const { name, title, avatar, linkedin, mail, facebook, instagram } = member;

    return (
        <div className="group text-center">
            <div className="mx-auto mt-4 h-52 w-52 rotate-45 overflow-hidden rounded-[4rem] shadow-md">
                <img className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]" src={avatar} alt="" />
            </div>
            <div className="pt-6 pb-2">
                <h5>{name}</h5>
                <p>{title}</p>
            </div>
            <h5 className="flex justify-center space-x-4 text-2xl">
                <a href={linkedin}>
                    <FaLinkedin />
                </a>
                <a href={mail}>
                    <SiMaildotru />
                </a>
                <a href={facebook}>
                    <FaFacebookSquare />
                </a>
                <a href={instagram}>
                    <RiInstagramFill />
                </a>
            </h5>
        </div>
    );
};

export default TeamCard;
