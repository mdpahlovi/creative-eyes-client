import React from "react";
import TeamCard from "../../Components/TeamCard";

const OurTeam = () => {
    return (
        <>
            <div>
                <h1>Our Team</h1>
            </div>
            <div className="flex flex-wrap gap-x-32 xl:gap-x-40 gap-y-12 sm:gap-y-4 justify-center pt-4">
                {[...Array(3)].map((team, index) => (
                    <TeamCard key={index} />
                ))}
            </div>
        </>
    );
};

export default OurTeam;
