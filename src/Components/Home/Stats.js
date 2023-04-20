import { Card } from "@material-tailwind/react";
import React from "react";
import { stats } from "../Common/FakeData";

const Stats = () => {
    return (
        <Card color="blue" variant="gradient" className="rounded-none section-gap space-y-6">
            <h1>Why choose us?</h1>
            <div className="container grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x">
                {stats.map(({ title, value }, idx) => (
                    <div key={idx} className="py-6">
                        <h1 className="text-center mb-3">{value}</h1>
                        <h5 className="text-center">{title}</h5>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default Stats;
