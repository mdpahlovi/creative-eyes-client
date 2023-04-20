import { Avatar } from "@material-tailwind/react";
import { BsStar, BsStarFill } from "react-icons/bs";
import Rating from "react-rating";

export default function TestimonialCard({ testimonial }) {
    const { avatar, name, occupation, detail, review } = testimonial;

    return (
        <div>
            <div className="flex items-center gap-4 pb-4">
                <Avatar variant="circular" src={avatar} alt="" />
                <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                        <h5>{name}</h5>
                        <h5 className="text-blue-500 xs:hidden flex items-center gap-0.5">
                            <BsStarFill size={18} />
                            {`(${review})`}
                        </h5>
                        <div className="hidden xs:block">
                            <Rating
                                initialRating={parseFloat(review)}
                                fullSymbol={<BsStarFill size={18} className="text-blue-500" />}
                                emptySymbol={<BsStar size={18} className="text-blue-500" />}
                                readonly
                            />
                        </div>
                    </div>
                    <p>{occupation}</p>
                </div>
            </div>
            <p>{detail}</p>
        </div>
    );
}
