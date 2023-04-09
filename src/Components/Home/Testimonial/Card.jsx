import { Avatar } from "@material-tailwind/react";
import { HiStar } from "react-icons/hi2";

export default function TestimonialCard({ testimonial }) {
    const { avatar, name, occupation, detail, review } = testimonial;

    return (
        <div>
            <div className="flex items-center gap-4 pb-4">
                <Avatar size="lg" variant="circular" src={avatar} alt="" />
                <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                        <h5>{name}</h5>
                        <h5 className="text-yellow-700 xs:hidden flex items-center gap-1.5">
                            <HiStar size={20} />
                            {`(${review})`}
                        </h5>
                        <div className="hidden xs:flex items-center gap-0">
                            <HiStar size={20} className="text-yellow-700" />
                            <HiStar size={20} className="text-yellow-700" />
                            <HiStar size={20} className="text-yellow-700" />
                            <HiStar size={20} className="text-yellow-700" />
                            <HiStar size={20} className="text-yellow-700" />
                        </div>
                    </div>
                    <p>{occupation}</p>
                </div>
            </div>
            <p>{detail}</p>
        </div>
    );
}
