import { Checkbox } from "@material-tailwind/react";
import { SiAudiomack } from "react-icons/si";
import setMediaUrl from "../../Utilities/setMediaUrl";

const AudioPanel = ({ audio = [], isSelect, audioArr = [] }) => {
    return (
        <>
            {audio.map((url, idx) => (
                <div key={idx} className="relative aspect-video media-box flex justify-center items-center">
                    {isSelect && (
                        <div className="select-check-bg">
                            <Checkbox onClick={() => setMediaUrl(url, audioArr)} />
                        </div>
                    )}
                    <SiAudiomack size={56} className="-mt-4 absolute" />
                    <audio src={url} className="w-full h-full rounded-lg" controls></audio>
                </div>
            ))}
        </>
    );
};

export default AudioPanel;
