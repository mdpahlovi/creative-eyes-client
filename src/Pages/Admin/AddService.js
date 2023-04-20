import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, Typography, Button, Input, Textarea } from "@material-tailwind/react";

export default function AddService() {
    const [isUploading, setIsUploading] = useState(false);

    const navigate = useNavigate();
    const handelSubmit = (event) => {
        setIsUploading(true);
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const price = form.price.value;
        const details = form.details.value;
        const service = { name, image, price, details };

        // ADD Service
        axios.post("/service", service).then((res) => {
            if (res?.data?.acknowledge) {
                form.reset();
                setIsUploading(false);
                toast.success("Service Added Successfully");
                navigate("/services");
            }
        });
    };
    return (
        <main className="container section-gap">
            <Card className="form-container mt-6">
                <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                    <Typography className="uppercase text-center" variant="h3" color="white">
                        Add Service
                    </Typography>
                </CardHeader>
                <form onSubmit={handelSubmit} className="flex flex-col gap-4 p-6 pt-2">
                    <Input type="text" name="name" label="Name" />
                    <Input type="text" name="image" label="Image URL" />
                    <Input type="number" name="price" label="Price" />
                    <Textarea name="details" label="Description" />
                    <Button type="submit" variant="gradient" fullWidth className="mt-2">
                        {isUploading ? "Uploading" : "Submit"}
                    </Button>
                </form>
            </Card>
        </main>
    );
}
