import { Link } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import { ImTwitter, ImFacebook, ImDribbble, ImLinkedin2 } from "react-icons/im";

const Footer = () => {
    return (
        <footer className="pt-8 border-t border-t-gray-300">
            <div className="container divide-y-2 divide-gray-300">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 text-center lg:text-left">
                        <h3 className="mb-2">Let's keep in touch!</h3>
                        <p className="text-lg mt-0 mb-2">Find us on any of these platforms, I respond 1-2 business days.</p>
                        <div className="my-6 lg:mb-0 space-x-4 flex flex-wrap justify-center lg:justify-start">
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
                    <div className="w-full lg:w-6/12">
                        <div className="flex flex-wrap mb-6 gap-y-5">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <h6 className="uppercase font-bold text-center lg:text-left lg:mb-2">Useful Links</h6>
                                <div className="flex flex-wrap justify-center gap-x-6 lg:flex-col">
                                    <Link to="about">About Me</Link>
                                    <Link to="blog">Blogs</Link>
                                    <Link to="">Github</Link>
                                    <Link to=""> Free Products</Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <h6 className="uppercase font-bold text-center lg:text-left lg:mb-2 whitespace-nowrap">Other Resources</h6>
                                <div className="flex flex-wrap justify-center gap-x-6 lg:flex-col">
                                    <Link> MIT License</Link>
                                    <Link>Terms &amp; Conditions</Link>
                                    <Link> Privacy Policy</Link>
                                    <Link> Contact Us</Link>
                                </div>
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
