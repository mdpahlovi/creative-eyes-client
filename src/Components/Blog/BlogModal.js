import { Avatar, Dialog, CardHeader, CardBody, CardFooter, Button, IconButton } from "@material-tailwind/react";
import { format, parseISO } from "date-fns";
import { CgClose } from "react-icons/cg";
import NoPhoto from "../../Assets/icon/NoPhoto.png";

const BlogModal = ({ blog, setBlog }) => {
    const { _id, author, title, description, image, createdAt } = blog;
    const date = format(parseISO(createdAt), "PP");

    return (
        <Dialog open={_id ? true : false} handler={() => setBlog(null)}>
            <CardHeader floated={false} shadow={false} color="transparent" className="relative m-0 rounded-none aspect-video">
                <img src={image} alt="" />
                <button onClick={() => setBlog(null)} className="absolute top-4 right-4 xs:hidden">
                    <IconButton color="red">
                        <CgClose />
                    </IconButton>
                </button>
            </CardHeader>
            <CardBody>
                <h5 className="mb-1">{title}</h5>
                <p>{description}</p>
            </CardBody>
            <CardFooter divider className="mt-auto flex items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <Avatar variant="circular" alt="" src={author?.avatar ? author.avatar : NoPhoto} />
                    <div>
                        <h6>{author?.name}</h6>
                        <p className="-mt-0.5 text-sm">{date}</p>
                    </div>
                </div>
                <Button onClick={() => setBlog(null)} color="red" className="hidden xs:block">
                    Close
                </Button>
            </CardFooter>
        </Dialog>
    );
};

export default BlogModal;
