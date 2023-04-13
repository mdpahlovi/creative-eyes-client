import React from "react";
import { HiShieldCheck } from "react-icons/hi";

const Step = ({ children, heading, end, no, done }) => {
    return (
        <div className="flex">
            <div
                className={`flex flex-col items-center mr-4 after:content-[''] after:w-px ${
                    end ? "after:h-max" : "after:h-full"
                } after:border-l-2 after:border-blue-500`}
            >
                <div
                    className={`min-w-[48px] min-h-[48px] border-2 border-blue-500 rounded-full ${
                        done ? "bg-blue-500 text-white" : "text-blue-500"
                    } flex items-center justify-center`}
                >
                    {done ? <HiShieldCheck size={20} /> : <h6>0{no}</h6>}
                </div>
            </div>
            <div className={`pt-2.5 ${end ? "" : "pb-6"}`}>
                <h5>{heading}</h5>
                {children}
            </div>
        </div>
    );
};

export default Step;
