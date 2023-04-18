import { Checkbox } from "@material-tailwind/react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ImagePanel = ({ image = [], isSelect }) => {
    return (
        <PhotoProvider>
            {image.map((url, idx) => (
                <div key={idx} className="relative">
                    {isSelect && (
                        <div className="select-check-bg">
                            <Checkbox />
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
