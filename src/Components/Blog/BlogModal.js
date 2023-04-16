import { Avatar, Dialog, CardHeader, CardBody, CardFooter, Button } from "@material-tailwind/react";
import { format, parseISO } from "date-fns";

const BlogModal = ({ blog, setBlog }) => {
    const { _id, author, title, description, image, createdAt } = blog;
    const date = format(parseISO(createdAt), "PP");

    return (
        <Dialog size="md" open={_id ? true : false} handler={() => setBlog(null)}>
            <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none aspect-video">
                <img src={image} alt="" />
            </CardHeader>
            <CardBody>
                <h5 className="mb-1 line-clamp-2">{title}</h5>
                <p className="line-clamp-4">{description}</p>
            </CardBody>
            <CardFooter divider className="mt-auto flex items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <Avatar variant="circular" alt="" src={author?.avatar} />
                    <div>
                        <h6>{author?.name}</h6>
                        <p className="-mt-0.5 text-sm">{date}</p>
                    </div>
                </div>
                <Button onClick={() => setBlog(null)} color="red">
                    Close
                </Button>
            </CardFooter>
        </Dialog>
    );
};

export default BlogModal;
