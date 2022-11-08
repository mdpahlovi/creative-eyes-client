import React from "react";
import { useParams } from "react-router-dom";

const DynamicService = () => {
    const { id } = useParams();
    return <div>{id}</div>;
};

export default DynamicService;
