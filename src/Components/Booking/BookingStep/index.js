import { differenceInCalendarDays, format, parseISO } from "date-fns";
import Step from "./Step";
import { Link } from "react-router-dom";

const ConditionalStep = ({ project }) => {
    const { _id, date, isComplete, isMediaUpdated } = project;
    const dayLeft = differenceInCalendarDays(new Date(date.startDate), new Date());

    if (!isComplete && !isMediaUpdated) {
        return (
            <>
                <Step no={2} heading={`${dayLeft} Day Left for Project Start : `} end>
                    <p>
                        Please Make sure you have everything you need to make the project successfully. Communicate with us about any specific requests or ideas
                        you have, and prepare any props or wardrobe items you need.
                    </p>
                </Step>
            </>
        );
    } else if (isComplete && !isMediaUpdated) {
        return (
            <>
                <Step no={2} heading="Project Completed Successfully : " done>
                    <p>It's a great experience working with you. Hope you also enjoyed.</p>
                </Step>
                <Step no={3} heading="Please wait for the Media : " end>
                    <p>We are working on your media. Please with for our mail. If you have any specific requests or ideas communicate with us.</p>
                </Step>
            </>
        );
    } else {
        return (
            <>
                <Step no={2} heading="Project Completed Successfully :" done>
                    <p> It's a great experience working with you. Hope you also enjoyed.</p>
                </Step>
                <Step no={3} heading="Receive and Review Your Media : " done end>
                    <p>
                        You can see and download all of your media from
                        <Link to={`/media/${_id}`} className="text-blue-500 underline">
                            here
                        </Link>
                        . Please take time to review those carefully and communicate with us if you have any issues or concerns. If you're happy with the
                        results, Please leave a positive review and recommend us to others!
                    </p>
                </Step>
            </>
        );
    }
};

const BookingStep = ({ project }) => {
    const { createdAt } = project;
    const bookingDate = format(parseISO(createdAt), "PPp");

    return (
        <>
            <Step no={1} heading="Project Booked Successfully : " done>
                <p>Thank you for choosing us. You have booked this on {bookingDate}</p>
            </Step>
            <ConditionalStep project={project} />
        </>
    );
};

export default BookingStep;
