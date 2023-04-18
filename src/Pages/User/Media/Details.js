import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Header from "../../../Components/Common/Header";
import Loader from "../../../Components/Common/Loader";
import TabHeader from "../../../Components/Media/TabHeader";
import ImagePanel from "../../../Components/Media/ImagePanel";
import VideoPanel from "../../../Components/Media/VideoPanel";
import AudioPanel from "../../../Components/Media/AudioPanel";
import { Tabs, TabsBody, TabPanel } from "@material-tailwind/react";

export default function MediaDetails() {
    const { id } = useParams();
    const [isSelect, setIsSelect] = useState(false);
    const { isLoading, data: mediaData = {} } = useQuery(["media", id], () => axios(`/media/book/${id}`).then((res) => res.data));

    if (isLoading) return <Loader />;

    return (
        <>
            <Header title={mediaData?.booking?.name}>
                <Link to="/media" className="opacity-60">
                    Media
                </Link>
                <Link>{mediaData?.booking?.name}</Link>
            </Header>
            <Tabs value="image" className="container section-gap">
                <TabHeader isSelect={isSelect} setIsSelect={setIsSelect} />
                <TabsBody>
                    <TabPanel value="image" className="media-container">
                        <ImagePanel image={mediaData?.media?.image} isSelect={isSelect} />
                    </TabPanel>
                    <TabPanel value="video" className="media-container">
                        <VideoPanel video={mediaData?.media?.video} isSelect={isSelect} />
                    </TabPanel>
                    <TabPanel value="audio" className="media-container">
                        <AudioPanel audio={mediaData?.media?.audio} isSelect={isSelect} />
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </>
    );
}
