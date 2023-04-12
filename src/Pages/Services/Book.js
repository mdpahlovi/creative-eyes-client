import { Button, Card, CardHeader, Input, Textarea, Typography } from "@material-tailwind/react";
import { useSearchParams } from "react-router-dom";

const Book = () => {
    const [query] = useSearchParams();
    const service_id = query.get("id");
    const service_name = query.get("service");

    return (
        <main className="container section-gap">
            <Card className="form-container mt-6">
                <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                    <Typography className="uppercase text-center" variant="h3" color="white">
                        Book {service_name}
                    </Typography>
                </CardHeader>
                <form className="flex flex-col gap-4 p-6 pt-2">
                    <Input type="text" name="name" label="Project Name" size="lg" />
                    <Input type="text" name="image" label="Location" size="lg" />
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Input type="date" name="price" label="From" size="lg" containerProps={{ className: "min-w-[192px]" }} />
                        <Input type="date" name="price" label="To" size="lg" containerProps={{ className: "min-w-[192px]" }} />
                    </div>
                    <Input type="text" name="image" label="Phone" size="lg" />
                    <Textarea name="details" label="Description" size="lg" />
                    <Button type="submit" variant="gradient" fullWidth className="mt-2">
                        Submit
                    </Button>
                </form>
            </Card>
        </main>
    );
};

export default Book;
