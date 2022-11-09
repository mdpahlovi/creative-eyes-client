import { Button, Card, CardHeader, Input, Textarea, Typography } from "@material-tailwind/react";
import { toast } from "react-toastify";
import SetTitle from "../Components/SetTitle";

export default function AddFeedBack({ serviceId, email }) {
    SetTitle("Add Feedback");
    const handelSubmit = (event) => {
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const work = form.work.value;
        const img = form.img.value;
        const feedback = form.feedback.value;
        const userFeedBack = { serviceId, email, name, work, img, feedback };

        // Add Service
        fetch("http://localhost:5000/feedbackes", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userFeedBack),
        })
            .then((res) => res.json())
            .then((data) => {
                data.success ? toast.success(data.message) : toast.error(data.error);
            })
            .catch((err) => console.log(err.message));
    };
    return (
        <section className="pt-6">
            <Card className="max-w-md mx-auto px-6 section-gap">
                <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                    <Typography variant="h3" color="white">
                        Add FeedBack
                    </Typography>
                </CardHeader>
                <form onSubmit={handelSubmit} className="flex flex-col gap-4 p-4 pb-10">
                    <Input name="name" label="Name" size="lg" />
                    <Input name="work" label="Work" size="lg" />
                    <Input name="img" label="Img" size="lg" />
                    <Textarea name="feedback" label="Feedback" size="lg" />
                    <Button type="submit" variant="gradient" fullWidth className="mt-2">
                        Submit
                    </Button>
                </form>
            </Card>
        </section>
    );
}
