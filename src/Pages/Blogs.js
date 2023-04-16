import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Header from "../Components/Common/Header";
import SetTitle from "../Components/Common/SetTitle";
import BlogCard from "../Components/Blog/BlogCard";
import { toast } from "react-toastify";
import { useState } from "react";
import BlogModal from "../Components/Blog/BlogModal";

export default function Blogs() {
    SetTitle("Creative Eyes | Blogs");
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

    if (isLoading) {
        return (
            <div className="w-full h-[calc(100vh-4.5rem)] flex justify-center items-center">
                <HashLoader color="#3388FF" size={100} />
            </div>
        );
    } else {
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
}
