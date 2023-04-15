import axios from "axios";
import { useQuery } from "react-query";
import { HashLoader } from "react-spinners";
import { useEffect, useRef } from "react";
import { SiAudiomack } from "react-icons/si";
import { Link, useParams } from "react-router-dom";
import Header from "../../../Components/Common/Header";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

const tabs_name = ["image", "video", "audio"];

export default function MediaDetails() {
    const tabs = useRef();
    const { id } = useParams();
    const { isLoading, data: mediaData = {} } = useQuery(["media", id], () => axios(`/media/book/${id}`).then((res) => res.data));

    useEffect(() => {
        if (mediaData?._id) {
            tabs.current.childNodes[0].classList.add("overflow-x-auto");
        }
    }, [mediaData?._id]);

    if (isLoading) {
        return (
            <div className="w-full h-[calc(100vh-4.5rem)] flex justify-center items-center">
                <HashLoader color="#3388FF" size={100} />
            </div>
        );
    } else {
        const { media, bookingId } = mediaData;
        const { image = [], audio = [], video = [] } = media;
        return (
            <>
                <Header title={bookingId?.name}>
                    <Link to="/media" className="opacity-60">
                        Media
                    </Link>
                    <Link>{bookingId?.name}</Link>
                </Header>
                <Tabs ref={tabs} value="image" className="container section-gap">
                    <TabsHeader className="w-max whitespace-nowrap mx-auto">
                        {tabs_name.map((tab) => (
                            <Tab value={tab} className="px-6 py-2.5 text-lg font-semibold">
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        <TabPanel value="image" className="media-container">
                            <PhotoProvider>
                                {image.map((url) => (
                                    <PhotoView src={url}>
                                        <img src={url} alt="" className="media-box" />
                                    </PhotoView>
                                ))}
                            </PhotoProvider>
                        </TabPanel>
                        <TabPanel value="video" className="media-container">
                            {video.map((url) => (
                                <video src={url} className="aspect-video media-box" controls></video>
                            ))}
                        </TabPanel>
                        <TabPanel value="audio" className="media-container">
                            {audio.map((url) => (
                                <div className="relative aspect-video media-box flex justify-center items-center">
                                    <SiAudiomack size={56} className="-mt-4 absolute" />
                                    <audio src={url} className="w-full h-full rounded-lg" controls></audio>
                                </div>
                            ))}
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </>
        );
    }
}
