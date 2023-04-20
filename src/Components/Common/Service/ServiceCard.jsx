import { Link } from "react-router-dom";
import { PhotoView } from "react-photo-view";
import { TbCurrencyTaka } from "react-icons/tb";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Card, CardHeader, CardBody, CardFooter } from "@material-tailwind/react";

export default function ServiceCard({ service }) {
    const { _id, image, name, details, price } = service;
    return (
        <Link to={`/service/${_id}`}>
            <Card className="mt-6 border group hover:shadow-none transition">
                <CardHeader color="gray" className="relative h-56">
                    <PhotoView src={image}>
                        <img src={image} alt="Services Category" className="h-full w-full" />
                    </PhotoView>
                </CardHeader>
                <CardBody>
                    <h5 className="mb-1 flex justify-between gap-6 group-hover:text-blue-500 transition">
                        {name}
                        <span className="inline-flex items-center">
                            {price}
                            <TbCurrencyTaka className="-ml-1" />
                        </span>
                    </h5>
                    <p className="line-clamp-4 text-justify">{details}</p>
                </CardBody>
                <CardFooter divider className="mt-auto flex items-center justify-between group-hover:text-blue-500 transition">
                    <span>Read more</span>
                    <HiOutlineArrowRight size={20} className="-translate-x-4 text-2xl opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                </CardFooter>
            </Card>
        </Link>
    );
}
