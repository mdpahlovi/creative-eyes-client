import { Card, CardHeader, CardBody, Avatar, CardFooter, Button } from "@material-tailwind/react";
import { MdEditNote } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useAuth } from "../../Hooks/useAuth";

const BlogCard = ({ blog, handleDelete, setBlogData }) => {
    const { user } = useAuth();
    const { _id, author, title, description, image } = blog;

    return (
        <Card className="overflow-hidden border hover:shadow-none transition">
            <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none aspect-video">
                <img src={image} alt="" />
            </CardHeader>
            <CardBody>
                <h5 className="mb-1 line-clamp-2">{title}</h5>
                <p className="line-clamp-4">{description}</p>
            </CardBody>
            <CardFooter divider className="mt-auto flex items-center justify-between">
                <Avatar size="sm" variant="circular" alt="" src={author?.avatar} />
                <Button onClick={() => setBlogData(blog)} size="sm" className="hover:shadow-none">
                    See More
                </Button>
                {(user?.isAdmin || user?._id === author?._id) && (
                    <div className="flex gap-2.5">
                        <button className="icon-button">
                            <MdEditNote size={18} />
                        </button>
                        {user?.isAdmin && (
                            <button onClick={() => handleDelete(_id)} className="icon-button">
                                <RiDeleteBin5Fill />
                            </button>
                        )}
                    </div>
                )}
            </CardFooter>
        </Card>
    );
};

export default BlogCard;
