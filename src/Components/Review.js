import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Review = ({ reviewObj }) => {
    const { img, name, work, review } = reviewObj;
    return (
        <div className="w-[448px] rounded-lg py-8 xs:py-10 md:py-12 px-6 sm:px-8 space-y-4 shadow-md">
            <FaQuoteRight className=" text-5xl mx-auto text-gray-500" />
            <blockquote>
                <h5>{review}</h5>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
                <img className="w-6 h-6 rounded-full" src={img} alt="" />
                <div className="flex flex-col md:flex-row items-center md:divide-x-2 divide-gray-700">
                    <div className="pr-3 font-bold">{name}</div>
                    <div className="pl-3 text-sm font-light text-base-content/50">{work}</div>
                </div>
            </figcaption>
        </div>
    );
};

export default Review;
