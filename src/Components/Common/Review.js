import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Review = ({ reviewObj }) => {
    const { author, occupation, detail } = reviewObj;
    return (
        <div className="max-w-md border rounded-lg p-6 space-y-4 shadow-md">
            <FaQuoteRight className=" text-5xl mx-auto text-gray-500" />
            <blockquote>
                <p className="text-center">{detail}</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
                <img className="w-10 xs:w-6 h-10 xs:h-6 rounded-full" src={author?.avatar} alt="" />
                <div className="flex flex-col xs:flex-row xs:items-center xs:divide-x-2 divide-gray-900">
                    <h6 className="xs:pr-3 font-bold">{author?.name}</h6>
                    <div className="xs:pl-3 text-sm font-light">{occupation}</div>
                </div>
            </figcaption>
        </div>
    );
};

export default Review;
