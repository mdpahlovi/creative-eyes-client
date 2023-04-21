import { Button, IconButton } from "@material-tailwind/react";
import { ImSearch } from "react-icons/im";
import { useAuth } from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const Search = ({ setPage, setQuery }) => {
    const { user } = useAuth();

    return (
        <div className={`flex flex-wrap gap-6 ${user?._id ? "justify-between" : "justify-center"} items-center`}>
            <div className="relative flex items-center w-max h-max group">
                <input
                    type="search"
                    onChange={(e) => {
                        setPage(0);
                        setQuery(e.target.value);
                    }}
                    placeholder="Search"
                    className="w-full sm:w-auto border rounded-full py-3 pl-5 pr-12 peer"
                />
                <IconButton color="gray" className="!absolute right-[5px] peer-focus:bg-blue-500">
                    <ImSearch />
                </IconButton>
            </div>
            {user?._id && (
                <Link to="/add-blog">
                    <Button className="w-full sm:w-auto">Add Blog</Button>
                </Link>
            )}
        </div>
    );
};

export default Search;
