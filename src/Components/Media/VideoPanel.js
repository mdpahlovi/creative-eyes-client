import { Checkbox } from "@material-tailwind/react";

const VideoPanel = ({ video = [], isSelect }) => {
    return (
        <>
            {video.map((url, idx) => (
                <div key={idx} className="relative">
                    {isSelect && (
                        <div className="select-check-bg">
                            <Checkbox />
                        </div>
                    )}
                    <video src={url} className="aspect-video media-box" controls></video>
                </div>
            ))}
        </>
    );
};

export default VideoPanel;
