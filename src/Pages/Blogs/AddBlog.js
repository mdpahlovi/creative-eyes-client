import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { Card, CardHeader, Typography, Button, Input, Textarea } from "@material-tailwind/react";

export default function AddBlog() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isUploading, setIsUploading] = useState(false);

    const handelSubmit = (event) => {
        setIsUploading(true);
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const title = form.title.value;
        const description = form.description.value;
        const blog = { author: user?._id, title, description, image, isVerify: true };

        // ADD Service
        axios.post("/blog", blog).then((res) => {
            if (res?.data?.acknowledge) {
                form.reset();
                setIsUploading(false);
                toast.success("Blog Added Successfully");
                navigate("/blogs");
            }
        });
    };
    return (
        <main className="container section-gap">
            <Card className="form-container mt-6">
                <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                    <Typography className="uppercase text-center" variant="h3" color="white">
                        Add Blog
                    </Typography>
                </CardHeader>
                <form onSubmit={handelSubmit} className="flex flex-col gap-4 p-6 pt-2">
                    <Input type="text" name="image" label="Image URL" />
                    <Input type="text" name="title" label="Title" />
                    <Textarea name="description" label="Description" />
                    <Button type="submit" variant="gradient" fullWidth className="mt-2">
                        {isUploading ? "Uploading" : "Submit"}
                    </Button>
                </form>
            </Card>
        </main>
    );
}
