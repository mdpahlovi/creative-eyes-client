import { Card, CardHeader, Typography, Button, Input, Textarea } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SetTitle from "../Components/SetTitle";

export default function AddService() {
    SetTitle("Add Service");
    const navigate = useNavigate();
    const handelSubmit = (event) => {
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const img = form.img.value;
        const name = form.name.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const about = form.about.value;
        const addService = { img, name, price, ratings, about };

        // Add Service
        fetch("http://localhost:5000/services", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addService),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success(data.message);
                form.reset();
                navigate("/services");
            })
            .catch((err) => console.log(err.message));
    };
    return (
        <section className="pt-6">
            <Card className="max-w-md mx-auto px-6 section-gap">
                <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                    <Typography className="uppercase" variant="h3" color="white">
                        Add Service
                    </Typography>
                </CardHeader>
                <form onSubmit={handelSubmit} className="flex flex-col gap-4 p-4 pb-10">
                    <Input name="img" label="Img" size="lg" />
                    <Input name="name" label="Name" size="lg" />
                    <Input name="price" label="Price" size="lg" />
                    <Input name="ratings" label="Ratings" size="lg" />
                    <Textarea name="about" label="Description" size="lg" />
                    <Button type="submit" variant="gradient" fullWidth className="mt-2">
                        Submit
                    </Button>
                </form>
            </Card>
        </section>
    );
}
