import { Button, IconButton } from "@material-tailwind/react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Pagination = ({ length, page, setPage }) => {
    const total_pages = Math.ceil(parseInt(length) / 6);

    return (
        <div className="flex flex-wrap justify-center gap-2">
            <Button size="sm" className="icon" disabled={page === 0} onClick={() => setPage(page - 1)}>
                <RiArrowLeftSLine />
                Previous
            </Button>
            {[...Array(total_pages)].map((a, idx) => (
                <IconButton key={idx} variant={page !== idx ? "outlined" : "filled"} onClick={() => setPage(idx)}>
                    {idx + 1}
                </IconButton>
            ))}
            <Button size="sm" className="icon" disabled={page === total_pages - 1} onClick={() => setPage(page + 1)}>
                Next
                <RiArrowRightSLine />
            </Button>
        </div>
    );
};

export default Pagination;
