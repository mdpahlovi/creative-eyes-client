import { HashLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="w-full h-[calc(100vh-4.5rem)] flex justify-center items-center">
            <HashLoader color="#3388FF" size={100} />
        </div>
    );
};

export default Loader;
