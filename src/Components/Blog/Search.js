import { Button, IconButton } from "@material-tailwind/react";
import { ImSearch } from "react-icons/im";
import { useAuth } from "../../Hooks/useAuth";

const Search = ({ setQuery }) => {
    const { user } = useAuth();

    return (
        <div className={`flex flex-wrap gap-6 ${user?._id ? "justify-between" : "justify-center"} items-center`}>
            <div className="relative flex items-center w-max h-max group">
                <input
                    type="search"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search"
                    className="w-full sm:w-auto border rounded-full py-3 pl-5 pr-12 peer"
                />
                <IconButton color="gray" className="!absolute right-[5px] peer-focus:bg-blue-500">
                    <ImSearch />
                </IconButton>
            </div>
            {user?._id && <Button className="w-full sm:w-auto">Add Blog</Button>}
        </div>
    );
};

export default Search;
