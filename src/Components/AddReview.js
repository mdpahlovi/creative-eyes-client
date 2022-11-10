import { Button, Card, CardHeader, Input, Textarea, Typography } from "@material-tailwind/react";
import { toast } from "react-toastify";
import SetTitle from "./SetTitle";

export default function AddReview({ serviceId, serviceName, email, refresh, setRefresh }) {
    SetTitle("Add Review");
    const handelSubmit = (event) => {
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const work = form.work.value;
        const img = form.img.value;
        const review = form.review.value;
        const userreview = { serviceId, serviceName, email, name, work, img, review };

        // Add Review
        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userreview),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success(data.message);
                form.reset();
                setRefresh(!refresh);
            })
            .catch((err) => console.log(err.message));
    };
    return (
        <section className="pt-6">
            <Card className="max-w-md mx-auto px-6 section-gap">
                <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                    <Typography variant="h3" color="white" className="uppercase">
                        Add review
                    </Typography>
                </CardHeader>
                <form onSubmit={handelSubmit} className="flex flex-col gap-4 p-4 pb-10">
                    <Input name="name" label="Name" size="lg" />
                    <Input name="work" label="Work" size="lg" />
                    <Input name="img" label="Img" size="lg" />
                    <Textarea name="review" label="review" size="lg" />
                    <Button type="submit" variant="gradient" fullWidth className="mt-2">
                        Submit
                    </Button>
                </form>
            </Card>
        </section>
    );
}
