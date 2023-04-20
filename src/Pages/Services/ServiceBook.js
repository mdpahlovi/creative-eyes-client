import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Datepicker from "react-tailwindcss-datepicker";
import { useAuth } from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { Button, Card, CardHeader, Input, Textarea, Typography } from "@material-tailwind/react";

const ServiceBook = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [query] = useSearchParams();
    const [date, setDate] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Get inCompleteDates to disable
    const { data: bookings = [] } = useQuery("book", () => axios(`/book`).then((res) => res.data));
    const inCompleteDates = bookings.filter((book) => !book.isComplete).map((book) => book.date);

    // Get  bookingData and store on data base
    const handleSubmit = (event) => {
        setIsSubmitting(true);
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const details = form.details.value;

        if (!date.startDate || !date.endDate) {
            return toast.error("Please Select Date");
        }

        const booking_data = { name, location, phone, details, date, userId: user?._id, service: { id: query.get("id"), name: query.get("service") } };
        axios.post("/book", booking_data).then((res) => {
            form.reset();
            setIsSubmitting(false);
            toast.success("Project Successfully Booked");
            navigate(`/booking`);
        });
    };

    return (
        <main className="container section-gap">
            <Card className="form-container mt-6">
                <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                    <Typography className="uppercase text-center" variant="h3" color="white">
                        Book {query.get("service")}
                    </Typography>
                </CardHeader>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 pt-2">
                    <Input type="text" name="name" label="Name" />
                    <Input type="text" name="location" label="Location" />
                    <Datepicker
                        useRange={false}
                        placeholder="Select Date"
                        popoverDirection="down"
                        disabledDates={inCompleteDates}
                        value={date}
                        onChange={(date) => setDate(date)}
                        inputClassName="w-full h-[44px] text-blue-gray-700 focus:outline-none border focus:border-2 text-sm px-3 rounded-md border-blue-gray-200 focus:border-blue-500"
                    >
                        <div>Pahlovi</div>
                    </Datepicker>
                    <Input type="text" name="phone" label="Phone" />
                    <Textarea name="details" label="Description" />
                    <Button type="submit" variant="gradient" fullWidth className="mt-2">
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                </form>
            </Card>
        </main>
    );
};

export default ServiceBook;
