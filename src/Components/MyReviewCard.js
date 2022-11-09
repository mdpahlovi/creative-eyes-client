import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

export default function MyReviewCard({ myfeedback, handelDelete }) {
    const { _id, serviceName, img, feedback } = myfeedback;
    return (
        <Card className="pt-6 justify-between">
            <CardHeader color="gray" className="relative h-56">
                <img src={img} alt="img-blur-shadow" className="h-full w-full" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    {serviceName}
                </Typography>
                <Typography className="line-clamp-4 hover:overflow-y-scroll">{feedback}</Typography>
            </CardBody>
            <CardFooter divider className="flex items-end justify-between py-4">
                <Button variant="gradient" size="sm">
                    Edit
                </Button>
                <Button onClick={() => handelDelete(_id)} variant="gradient" size="sm">
                    Delete
                </Button>
            </CardFooter>
        </Card>
    );
}
