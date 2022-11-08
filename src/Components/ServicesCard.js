import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";

export default function ServicesCard({ category }) {
    const { img, name, about, price, ratings } = category;
    return (
        <Card className="mt-6">
            <CardHeader color="gray" className="relative h-56">
                <img src={img} alt="Services Category" className="h-full w-full" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    {name}
                </Typography>
                <Typography className="line-clamp-4">{about}</Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                <Typography variant="small">${price}</Typography>
                <Typography variant="small" color="blue" className="flex gap-1">
                    {ratings}
                </Typography>
            </CardFooter>
        </Card>
    );
}
