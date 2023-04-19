import { useParams } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { Button, Tab, TabsHeader } from "@material-tailwind/react";

const tabs_name = ["image", "video", "audio"];

const TabHeader = ({ isSelect, setIsSelect, handleDelete, media }) => {
    const { id } = useParams();
    const { user } = useAuth();

    return (
        <div className={`flex flex-row-reverse ${user?.isAdmin ? "justify-between" : "justify-center"} items-center gap-6 overflow-x-auto`}>
            {user?.isAdmin && (
                <div className="flex gap-4">
                    <Button size="sm" onClick={() => setIsSelect(!isSelect)}>
                        {isSelect ? "DeSelect" : "Select"}
                    </Button>
                    <Button size="sm" disabled={isSelect ? false : true} onClick={() => handleDelete(id, media)}>
                        Delete
                    </Button>
                </div>
            )}
            <TabsHeader className="w-max whitespace-nowrap">
                {tabs_name.map((tab, idx) => (
                    <Tab key={idx} value={tab}>
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </Tab>
                ))}
            </TabsHeader>
        </div>
    );
};

export default TabHeader;
