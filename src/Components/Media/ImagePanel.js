import { Checkbox } from "@material-tailwind/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import setMediaUrl from "../../Utilities/setMediaUrl";

const ImagePanel = ({ image = [], isSelect, imageArr = [] }) => {
    return (
        <PhotoProvider>
            {image.map((url, idx) => (
                <div key={idx} className="relative">
                    {isSelect && (
                        <div className="select-check-bg">
                            <Checkbox onClick={() => setMediaUrl(url, imageArr)} />
                        </div>
                    )}
                    <PhotoView src={url}>
                        <img src={url} alt="" className="media-box" />
                    </PhotoView>
                </div>
            ))}
        </PhotoProvider>
    );
};

export default ImagePanel;
