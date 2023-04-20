import { PhotoView } from "react-photo-view";
import { SlSizeFullscreen } from "react-icons/sl";

export default function ImageCard({ url }) {
    return (
        <PhotoView src={url}>
            <div className="relative group aspect-[4_/_3] media-box overflow-hidden flex justify-center items-center">
                <SlSizeFullscreen size={36} className="absolute z-10 text-white opacity-0 group-hover:opacity-75 transition" />
                <img src={url} alt="" className="absolute w-full h-full object-cover object-center group-hover:scale-125 transition" />
                <div className="absolute w-full h-full top-0 bg-black opacity-0 group-hover:opacity-75 transition"></div>
            </div>
        </PhotoView>
    );
}
