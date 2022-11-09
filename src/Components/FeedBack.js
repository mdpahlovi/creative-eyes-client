import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const FeedBack = ({ feedbackObj }) => {
    const { img, name, work, feedback } = feedbackObj;
    return (
        <div className="bg-black/5 rounded-lg py-8 xs:py-10 md:py-12 px-6 sm:px-8">
            <FaQuoteRight className=" text-5xl mx-auto mb-5 text-black/50" />
            <blockquote>
                <p>{feedback}</p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img className="w-6 h-6 rounded-full" src={img} alt="" />
                <div className="flex flex-col md:flex-row items-center md:divide-x-2 divide-base-content/50">
                    <div className="pr-3 font-medium">{name}</div>
                    <div className="pl-3 text-sm font-light text-base-content/50">{work}</div>
                </div>
            </figcaption>
        </div>
    );
};

export default FeedBack;
