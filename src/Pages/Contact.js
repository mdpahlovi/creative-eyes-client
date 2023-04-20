import { Link } from "react-router-dom";
import Header from "../Components/Common/Header";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { contacts } from "../Components/Common/FakeData";

const Contact = () => {
    return (
        <>
            <Header title={"Get in touch with us"}>
                <Link to="/contact">Contact</Link>
            </Header>
            <div className="container section-gap flex flex-col-reverse md:flex-row gap-x-10 gap-y-4">
                <div className="p-6 border rounded-xl shadow space-y-4 md:w-3/5 xl:w-1/2">
                    <Input label="Full Name" />
                    <Input type="email" label="Email" />
                    <Input label="Subject" />
                    <Textarea label="Message"></Textarea>
                    <Button fullWidth>Submit</Button>
                </div>
                <div className="divide-y md:w-2/5 xl:w-1/2">
                    {contacts.map(({ icon, title, details }, i) => (
                        <div key={i} className="py-5 flex gap-4">
                            {icon}
                            <div className="space-y-0.5">
                                <h5>{title}</h5>
                                <p>{details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Contact;
