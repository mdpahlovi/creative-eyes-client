import { useRef, useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";

const UploadWidget = ({ children, bookingData, handleUploadMedia }) => {
    const widgetRef = useRef();
    const cloudinaryRef = useRef();
    const [media] = useState([]);
    const { _id, userId } = bookingData;

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: "dikezpkeg",
                uploadPreset: "creative-eyes",
            },
            function (error, result) {
                if (result.event === "success") {
                    media.push({ type: result.info.resource_type, url: result.info.url });
                } else if (media.length && result.event === "close") {
                    handleUploadMedia({ bookingId: _id, userId: userId._id, media });
                }
            }
        );
    }, [_id, handleUploadMedia, media, userId]);

    return (
        <Button variant="outlined" size="sm" onClick={() => widgetRef.current.open()}>
            {children}
        </Button>
    );
};

export default UploadWidget;
