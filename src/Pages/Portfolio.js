import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Common/Header";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { PhotoProvider } from "react-photo-view";
import ImageCard from "../Components/Portfolio/ImageCard";
import { portfolio_data } from "../Components/Common/FakeData";

const Portfolio = () => {
    const tabs = useRef();

    useEffect(() => {
        tabs.current.childNodes[0].classList.add("overflow-x-auto");
    }, []);

    const all_images = [].concat(...portfolio_data.map((data) => data.images));

    return (
        <>
            <Header title={"Let's see our works"}>
                <Link to="/portfolio">Portfolio</Link>
            </Header>
            <main className="container section-gap">
                <Tabs ref={tabs} value="All">
                    <TabsHeader className="w-max whitespace-nowrap mx-auto">
                        <Tab value="All">All</Tab>
                        {portfolio_data.map(({ label }, i) => (
                            <Tab key={i} value={label}>
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        <TabPanel value="All">
                            <PhotoProvider>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {all_images.map((url) => (
                                        <ImageCard url={url} />
                                    ))}
                                </div>
                            </PhotoProvider>
                        </TabPanel>
                        {portfolio_data.map(({ label, images }, i) => (
                            <TabPanel key={i} value={label}>
                                <PhotoProvider>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {images.map((url) => (
                                            <ImageCard url={url} />
                                        ))}
                                    </div>
                                </PhotoProvider>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </main>
        </>
    );
};

export default Portfolio;
