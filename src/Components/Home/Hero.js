import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { isBrowser } from "react-device-detect";
import { featured } from "../Common/FakeData";

const Hero = () => {
    return (
        <section
            className={`relative bg-hero bg-cover bg-center ${
                isBrowser ? "md:h-[calc(100vh-4.5rem)]" : ""
            } section-gap md:min-h-[34rem] flex justify-center items-center`}
        >
            <div className="relative z-[1] container text-center text-white">
                <Link
                    to="/"
                    className="hidden xs:inline-flex justify-between items-center gap-2 py-1 px-1 pr-4 mb-7 text-sm rounded-full bg-white/20"
                    role="alert"
                >
                    <Button size="sm">New</Button>
                    <span className="text-sm font-medium flex items-center">
                        LPRO album is out! See what's new
                        <BsArrowRightShort className="ml-2 text-xl" />
                    </span>
                </Link>
                <h1 className="mb-6 text-[40px] leading-10 sm:text-5xl font-extrabold tracking-tight">Capture the moments in time</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
                    Serving photo shots for various events, both for private, state and commercial events. We can make the photograph work more presentable and
                    memorable.
                </p>
                <div className="flex flex-col mb-10 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link to="/services">
                        <Button>Book Service</Button>
                    </Link>
                    <Link to="/portfolio">
                        <Button variant="outlined">See Portfolio</Button>
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-semibold text-white/75 uppercase">FEATURED PROJECT IN</span>
                    <div className="mt-4 flex flex-col md:flex-row">
                        {featured.map(({ link, source, icon }, idx) => (
                            <Link key={idx} to={link}>
                                <Button className="text-3xl flex items-center gap-4" color="gray" variant="text">
                                    {icon}
                                    {source}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute w-full h-full bg-black/75 top-0 left-0"></div>
        </section>
    );
};

export default Hero;
