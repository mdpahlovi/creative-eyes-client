import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Header from "../../Components/Common/Header";
import Search from "../../Components/Blog/Search";
import BlogCard from "../../Components/Blog/BlogCard";
import BlogModal from "../../Components/Blog/BlogModal";
import Pagination from "../../Components/Common/Pagination";
import BlogCardLoader from "../../Components/Blog/BlogCardLoader";

export default function Blogs() {
    const [page, setPage] = useState(0);
    const [query, setQuery] = useState("");
    const [blogData, setBlogData] = useState(null);

    const { isLoading, refetch, data } = useQuery(["blog", query, page], () => axios(`/blog?search=${query}&page=${page}`).then((res) => res.data));

    const handleDelete = (id) => {
        axios.delete(`/blog/${id}`).then((res) => {
            if (res.data.acknowledge) {
                refetch();
                toast.success("Blog Remove Successfully");
            }
        });
    };

    return (
        <>
            <Header title={"Explore our blogs"}>
                <Link to="/blogs">Blogs</Link>
            </Header>
            <section className="container section-gap space-y-6">
                <Search setPage={setPage} setQuery={setQuery} />
                {isLoading ? (
                    <BlogCardLoader />
                ) : (
                    <>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data?.blogs
                                .filter((blog) => blog?.isVerify)
                                .map((blog) => (
                                    <BlogCard key={blog?._id} blog={blog} setBlogData={setBlogData} handleDelete={handleDelete} />
                                ))}
                        </div>
                        <Pagination length={data?.total_blogs} page={page} setPage={setPage} />
                    </>
                )}
            </section>
            {blogData && <BlogModal blog={blogData} setBlog={setBlogData} />}
        </>
    );
}
