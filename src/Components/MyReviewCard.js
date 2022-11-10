import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function MyReviewCard({ myreview, handelDelete }) {
    const { _id, name, work, serviceName, img, review } = myreview;
    return (
        <Card className="pt-6 justify-between">
            <CardHeader color="gray" className="relative h-56">
                <img src={img} alt="img-blur-shadow" className="h-full w-full" />
            </CardHeader>
            <CardBody className="text-center">
                <div>
                    <Typography variant="h5" className="mb-2">
                        {name}
                    </Typography>
                    <Typography variant="h5" className="mb-2">
                        {work}
                    </Typography>
                </div>
                <Typography variant="h5" className="mb-2">
                    Service: {serviceName}
                </Typography>
                <Typography className="line-clamp-4 hover:overflow-y-scroll">{review}</Typography>
            </CardBody>
            <CardFooter divider className="flex items-end justify-between py-4">
                <Link to={`/edit-review/${_id}`}>
                    <Button variant="gradient" size="sm">
                        Edit
                    </Button>
                </Link>
                <Button onClick={() => handelDelete(_id)} variant="gradient" size="sm">
                    Delete
                </Button>
            </CardFooter>
        </Card>
    );
}
