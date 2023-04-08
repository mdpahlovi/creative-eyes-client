import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function MyBreadcrumb({ title, children }) {
    return (
        <>
            <section className="relative">
                <div className="py-12 sm:py-14 lg:py-16 container">
                    <h1 className="mb-6 text-left">{title}</h1>
                    <Breadcrumbs>
                        <Link to="/home" className="opacity-60">
                            Home
                        </Link>
                        {children}
                    </Breadcrumbs>
                </div>
                <div className="absolute w-full h-full bg-header bg-cover bg-left top-0 left-0 -z-[2]"></div>
                <div className="absolute w-full h-full bg-black/10 top-0 left-0 -z-[1]"></div>
            </section>
        </>
    );
}
