import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import { IconButton } from "@material-tailwind/react";
import { ImTwitter, ImFacebook, ImDribbble, ImLinkedin2 } from "react-icons/im";

const Footer = () => {
    return (
        <footer className="pt-8 border-t border-t-gray-300">
            <div className="container divide-y divide-gray-300">
                <div className="grid md:grid-cols-[auto_auto] text-center md:text-left">
                    <div className="">
                        <Link to="/">
                            <img className="w-32 mb-2 mx-auto md:mx-0" src={Logo} alt="" />
                        </Link>
                        <h3 className="mb-2">Let's keep in touch!</h3>
                        <div className="my-6 md:my-0 space-x-4 flex flex-wrap justify-center md:justify-start">
                            <IconButton variant="outlined" color="gray">
                                <ImTwitter className="text-lg" />
                            </IconButton>
                            <IconButton variant="outlined" color="gray">
                                <ImFacebook className="text-lg" />
                            </IconButton>
                            <IconButton variant="outlined" color="gray">
                                <ImDribbble className="text-lg" />
                            </IconButton>
                            <IconButton variant="outlined" color="gray">
                                <ImLinkedin2 className="text-lg" />
                            </IconButton>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-end mb-6 gap-y-5">
                        <div className="px-4">
                            <h6 className="uppercase md:mb-2">Useful Links</h6>
                            <div className="flex flex-wrap justify-center gap-x-6 md:flex-col">
                                <Link to="about">About Me</Link>
                                <Link to="blog">Blogs</Link>
                                <Link to="">Github</Link>
                                <Link to="">Free Products</Link>
                            </div>
                        </div>
                        <div className="px-4">
                            <h6 className="uppercase md:mb-2 whitespace-nowrap">Other Resources</h6>
                            <div className="flex flex-wrap justify-center gap-x-6 md:flex-col">
                                <Link>MIT License</Link>
                                <Link>Terms &amp; Conditions</Link>
                                <Link>Privacy Policy</Link>
                                <Link>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 className="py-6 text-base text-center">Copyright © 2021 resolved by Creative Eyes .</h5>
            </div>
        </footer>
    );
};

export default Footer;
