import { Link } from "react-router-dom";
import Header from "../Components/Common/Header";
import SetTitle from "../Components/Common/SetTitle";
import BlogCard from "../Components/Blog/BlogCard";

export default function Blogs() {
    SetTitle("Creative Eyes | Blogs");

    return (
        <>
            <Header title={"Explore Our Blogs"}>
                <Link to="/blogs">Blogs</Link>
            </Header>
            <section className="container section-gap">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </section>
        </>
    );
}
