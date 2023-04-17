import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Header from "../Components/Common/Header";
import BlogCard from "../Components/Blog/BlogCard";
import BlogModal from "../Components/Blog/BlogModal";
import Loader from "../Components/Common/Loader";

export default function Blogs() {
    const [blogData, setBlogData] = useState(null);

    const { isLoading, refetch, data: blogs = [] } = useQuery("service", () => axios("/blog").then((res) => res.data));

    const handleDelete = (id) => {
        axios.delete(`/blog/${id}`).then((res) => {
            if (res.data.acknowledge) {
                refetch();
                toast.success("Blog Remove Successfully");
            }
        });
    };

    if (isLoading) return <Loader />;

    return (
        <>
            <Header title={"Explore Our Blogs"}>
                <Link to="/blogs">Blogs</Link>
            </Header>
            <section className="container section-gap">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs
                        .filter((blog) => blog?.isVerify)
                        .map((blog) => (
                            <BlogCard key={blog?._id} blog={blog} setBlogData={setBlogData} handleDelete={handleDelete} />
                        ))}
                </div>
            </section>
            {blogData && <BlogModal blog={blogData} setBlog={setBlogData} />}
        </>
    );
}
