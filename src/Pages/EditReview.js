import { Button, Card, CardHeader, Input, Textarea, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SetTitle from "../Components/Common/SetTitle";

const EditReview = () => {
    SetTitle("Edit Review");
    const [myReview, setMyReview] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    // Get Previous Review Data
    useEffect(() => {
        fetch(`https://photographer-server.vercel.app/reviewbyid/${id}`)
            .then((res) => res.json())
            .then((data) => setMyReview(data))
            .catch((error) => console.log(error));
    }, [id]);
    const { name, work, img, review } = myReview;

    const handelEdit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const work = form.work.value;
        const img = form.img.value;
        const review = form.review.value;
        const userreview = { name, work, img, review };

        // Edit Review
        fetch(`https://photographer-server.vercel.app/reviewedit/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userreview),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success(data.message);
                form.reset();
                navigate("/my-review");
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <section className="pt-6">
            <Card className="max-w-md mx-auto px-6 section-gap">
                <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                    <Typography variant="h3" color="white" className="uppercase">
                        Edit Review
                    </Typography>
                </CardHeader>
                <form onSubmit={handelEdit} className="flex flex-col gap-4 p-4 pb-10">
                    <Input name="name" label="Name" size="lg" defaultValue={name} />
                    <Input name="work" label="Work" size="lg" defaultValue={work} />
                    <Input name="img" label="Img" size="lg" defaultValue={img} />
                    <Textarea name="review" label="Review" size="lg" defaultValue={review} />
                    <Button type="submit" variant="gradient" fullWidth className="mt-2">
                        Submit
                    </Button>
                </form>
            </Card>
        </section>
    );
};

export default EditReview;
