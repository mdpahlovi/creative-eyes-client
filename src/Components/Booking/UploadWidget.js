import { useRef, useEffect } from "react";
import { Button } from "@material-tailwind/react";

const UploadWidget = ({ children, media, bookingData, handleUploadMedia }) => {
    const widgetRef = useRef();
    const cloudinaryRef = useRef();

    const { _id, name, userId } = bookingData;

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: "dikezpkeg",
                uploadPreset: "creative-eyes",
            },
            function (error, result) {
                const { image = [], audio = [], video = [] } = media;
                if (result.event === "success") {
                    if (result.info.resource_type === "image") {
                        image.push(result.info.url);
                    } else if (result.info.resource_type === "video" && result.info.video.bit_rate) {
                        video.push(result.info.url);
                    } else {
                        audio.push(result.info.url);
                    }
                } else if ((image.length || audio.length || video.length) && result.event === "close") {
                    handleUploadMedia({ media, booking: { id: _id, name }, userId: userId._id });
                }
            }
        );
    }, [_id, handleUploadMedia, media, name, userId]);

    return (
        <Button variant="outlined" size="sm" onClick={() => widgetRef.current.open()}>
            {children}
        </Button>
    );
};

export default UploadWidget;
