import Step from "./Step";
import { differenceInCalendarDays, format, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import { Button, Input, Textarea } from "@material-tailwind/react";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";

const BookingStep = ({ project, handelReview, isUploading, setReview }) => {
    const { _id, date, isComplete, isMediaUpdated, isReview, createdAt, service } = project;
    const bookingDate = format(parseISO(createdAt), "PPp");
    const dayLeft = differenceInCalendarDays(new Date(date.startDate), new Date());

    return (
        <>
            <Step no={1} heading="Project Booked Successfully : " done>
                <p>Thank you for choosing us. You have booked this on {bookingDate}</p>
            </Step>
            {!isComplete ? (
                <Step no={2} heading={`${dayLeft} Day Left for Project Start : `} end>
                    <p>
                        Please Make sure you have everything you need to make the project successfully. Communicate with us about any specific requests or ideas
                        you have, and prepare any props or wardrobe items you need.
                    </p>
                </Step>
            ) : (
                <>
                    <Step no={2} heading="Project Completed Successfully : " done>
                        <p>It's a great experience working with you. Hope you also enjoyed.</p>
                    </Step>
                    {!isMediaUpdated ? (
                        <Step no={3} heading="Please wait for the Media : " end>
                            <p>We are working on your media. Please with for our mail. If you have any specific requests or ideas communicate with us.</p>
                        </Step>
                    ) : (
                        <>
                            <Step no={3} heading="Receive and Review Your Media : " done>
                                <p>
                                    You can see and download all of your media from
                                    <Link to={`/media/${_id}`} className="ml-1 text-blue-500 underline">
                                        here
                                    </Link>
                                    . Please take time to review those carefully and communicate with us if you have any issues or concerns. If you're happy
                                    with the results, Please leave a positive review and recommend us to others!
                                </p>
                            </Step>
                            {!isReview ? (
                                <Step no={4} heading="Please give us a Review : " end>
                                    <form onSubmit={(e) => handelReview(e, service?.id, _id)} className="flex flex-col gap-4">
                                        <div className="mt-2 flex items-center">
                                            <h6>Ratting : </h6>
                                            <Rating
                                                className="ml-2 -mb-1.5"
                                                onChange={(value) => setReview(value)}
                                                fullSymbol={<BsStarFill size={18} className="text-blue-500" />}
                                                emptySymbol={<BsStar size={18} className="text-blue-500" />}
                                            />
                                        </div>
                                        <Input type="text" name="occupation" label="Occupation" />
                                        <Textarea name="detail" label="Description" />
                                        <Button type="submit" variant="gradient" fullWidth className="mt-2">
                                            {isUploading ? "Uploading" : "Submit"}
                                        </Button>
                                    </form>
                                </Step>
                            ) : (
                                <Step no={4} heading="Thanks for the Review : " done end />
                            )}
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default BookingStep;
