import React from "react";

const Stats = () => {
    return (
        <div className="grid xs:grid-cols-2 md:flex md:flex-row md:w-max md:h-max shadow rounded-lg [&>div]:border-gray-300 [&>div]:p-6 [&>p]:mb-2 divide-y xs:divide-y-0 md:divide-x">
            <div>
                <h5>Project Completed</h5>
                <h3>126+</h3>
            </div>
            <div>
                <h5>Commercial Project</h5>
                <h3>36+</h3>
            </div>
            <div className="">
                <h5>Satisfaction Rate</h5>
                <h3>97%</h3>
            </div>
            <div className="">
                <h5>Success Rate</h5>
                <h3>96%</h3>
            </div>
        </div>
    );
};

export default Stats;
