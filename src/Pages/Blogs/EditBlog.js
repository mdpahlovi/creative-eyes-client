import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import Loader from "../../Components/Common/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardHeader, Typography, Button, Input, Textarea } from "@material-tailwind/react";

export default function EditBlog() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isUploading, setIsUploading] = useState(false);

    const { isLoading: blogLoading, data: blog } = useQuery(["blog", id], () => axios(`/blog/${id}`).then((res) => res.data));

    const handelSubmit = (event) => {
        setIsUploading(true);
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const title = form.title.value;
        const description = form.description.value;
        const blog = { title, description, image };

        // ADD Service
        axios.patch(`/blog/${id}`, blog).then((res) => {
            if (res?.data?.acknowledge) {
                form.reset();
                setIsUploading(false);
                toast.success("Blog Updated Successfully");
                navigate("/blogs");
            }
        });
    };

    if (blogLoading) <Loader />;

    return (
        <main className="container section-gap">
            <Card className="form-container mt-6">
                <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                    <Typography className="uppercase text-center" variant="h3" color="white">
                        Edit Blog
                    </Typography>
                </CardHeader>
                <form onSubmit={handelSubmit} className="flex flex-col gap-4 p-6 pt-2">
                    <Input type="text" name="image" label="Image URL" defaultValue={blog?.image} />
                    <Input type="text" name="title" label="Title" defaultValue={blog?.title} />
                    <Textarea name="description" label="Description" defaultValue={blog?.description} />
                    <Button type="submit" variant="gradient" fullWidth className="mt-2">
                        {isUploading ? "Uploading" : "Submit"}
                    </Button>
                </form>
            </Card>
        </main>
    );
}
