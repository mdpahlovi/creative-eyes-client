import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function ServicesCard({ category }) {
    const { _id, img, name, about, price, ratings } = category;
    return (
        <Card className="mt-6">
            <CardHeader color="gray" className="relative h-56">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="Services Category" className="h-full w-full" />
                    </PhotoView>
                </PhotoProvider>
            </CardHeader>
            <CardBody className="text-center">
                <h5 className="mb-2">{name}</h5>
                <p className="line-clamp-4">{about}</p>
            </CardBody>
            <CardFooter divider className="mt-auto flex items-center justify-between py-3">
                <Typography variant="h5">${price}</Typography>
                <Link to={`/service/${_id}`}>
                    <Button variant="gradient" fullWidth>
                        View Details
                    </Button>
                </Link>
                <Typography variant="h5" color="blue" className="flex items-center gap-1">
                    {ratings}
                    <FaStar className="text-base" />
                </Typography>
            </CardFooter>
        </Card>
    );
}
