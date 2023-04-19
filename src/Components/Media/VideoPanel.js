import { Checkbox } from "@material-tailwind/react";
import setMediaUrl from "../../Utilities/setMediaUrl";

const VideoPanel = ({ video = [], isSelect, videoArr = [] }) => {
    return (
        <>
            {video.map((url, idx) => (
                <div key={idx} className="relative">
                    {isSelect && (
                        <div className="select-check-bg">
                            <Checkbox onClick={() => setMediaUrl(url, videoArr)} />
                        </div>
                    )}
                    <video src={url} className="aspect-video media-box" controls></video>
                </div>
            ))}
        </>
    );
};

export default VideoPanel;
