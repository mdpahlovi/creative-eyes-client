import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import Loader from "../../Components/Common/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardHeader, Typography, Button, Input, Textarea } from "@material-tailwind/react";

export default function EditService() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isUploading, setIsUploading] = useState(false);

    const { isLoading, data: service } = useQuery(["service", id], () => axios(`/service/${id}`).then((res) => res.data));

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
        axios.patch(`/service/${id}`, service).then((res) => {
            if (res?.data?.acknowledge) {
                form.reset();
                setIsUploading(false);
                toast.success("Service Updated Successfully");
                navigate("/services");
            }
        });
    };

    if (isLoading) return <Loader />;

    return (
        <main className="container section-gap">
            <Card className="form-container mt-6">
                <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                    <Typography className="uppercase text-center" variant="h3" color="white">
                        Add Service
                    </Typography>
                </CardHeader>
                <form onSubmit={handelSubmit} className="flex flex-col gap-4 p-6 pt-2">
                    <Input type="text" name="name" label="Name" defaultValue={service?.name} />
                    <Input type="text" name="image" label="Image URL" defaultValue={service?.image} />
                    <Input type="number" name="price" label="Price" defaultValue={service?.price} />
                    <Textarea name="details" label="Description" defaultValue={service?.details} />
                    <Button type="submit" variant="gradient" fullWidth className="mt-2">
                        {isUploading ? "Uploading" : "Submit"}
                    </Button>
                </form>
            </Card>
        </main>
    );
}
