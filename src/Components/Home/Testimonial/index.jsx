import { useCallback, useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../Common/FakeData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { IconButton } from "@material-tailwind/react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Testimonial = () => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);
    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <section className="container section-gap space-y-6">
            <h1>Client Testimonial</h1>
            <Swiper
                ref={sliderRef}
                autoHeight={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={32}
                slidesPerView={1}
                modules={[Autoplay]}
                breakpoints={{
                    1024: {
                        slidesPerView: 2,
                    },
                }}
            >
                {testimonials.map((testimonial, idx) => (
                    <SwiperSlide key={idx}>
                        <TestimonialCard testimonial={testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-end gap-4">
                <IconButton onClick={handlePrev}>
                    <RiArrowLeftSLine size={24} />
                </IconButton>
                <IconButton onClick={handleNext}>
                    <RiArrowRightSLine size={24} />
                </IconButton>
            </div>
        </section>
    );
};

export default Testimonial;
