import { useState, Fragment } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

export default function Blogs() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    return (
        <>
            <Header title={"Explore My Blogs"}>
                <Link to="/blogs">Blogs</Link>
            </Header>
            <section className="my-container md:max-w-2xl section-gap">
                <Fragment>
                    <Accordion open={open === 1} animate={customAnimation}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="text-left">
                            Difference between SQL and NoSQL?
                        </AccordionHeader>
                        <AccordionBody>
                            SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and
                            tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.SQL databases
                            are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} animate={customAnimation}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="text-left">
                            What is JWT, and how does it work?
                        </AccordionHeader>
                        <AccordionBody>
                            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT
                            contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims
                            cannot be altered after the token is issued.WTs differ from other web tokens in that they contain a set of claims. Claims are used
                            to transmit information between two parties. What these claims are depends on the use case at hand.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} animate={customAnimation}>
                        <AccordionHeader onClick={() => handleOpen(3)} className="text-left">
                            What is the difference between javascript and NodeJS?
                        </AccordionHeader>
                        <AccordionBody>
                            Javascript is a programming language that is used for writing scripts on the website.It can only be run in the browsers.It is used
                            in frontend development.Besides NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help
                            of NodeJS. It Use V8 enginne to run .It is used in server-side development.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} animate={customAnimation}>
                        <AccordionHeader onClick={() => handleOpen(4)} className="text-left">
                            How does NodeJS handle multiple requests at the same time?
                        </AccordionHeader>
                        <AccordionBody>
                            NodeJS receives multiple client requests and places them into EventQueue. It is built with the concept of event-driven architecture.
                            It has its own EventLoop which is an infinite loop that receives requests and processes them.
                        </AccordionBody>
                    </Accordion>
                </Fragment>
            </section>
        </>
    );
}
