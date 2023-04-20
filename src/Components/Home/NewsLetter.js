import { Button, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const NewsLetter = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100 section-gap px-6 space-y-6">
            <div>
                <h1>Get the latest updates</h1>
                <p className="mt-2 text-center text-gray-700">Sign up for our newsletter</p>
            </div>
            <form className="flex gap-2">
                <Input type="email" label="Email" />
                <Button size="sm" className="rounded">
                    <span className="pl-1 pr-4">Send</span>
                </Button>
            </form>
            <p className="text-center text-sm text-gray-500">
                By signing up to our newsletter you agree to our{" "}
                <Link to="/" className="underline transition hover:text-blue-500 mr-1">
                    Term of Service
                </Link>
                and
                <Link to="/" className="underline transition hover:text-blue-500 ml-1">
                    Privacy Policy
                </Link>
                .
            </p>
        </div>
    );
};

export default NewsLetter;
