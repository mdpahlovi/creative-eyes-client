import React from "react";
import { Card, CardHeader, CardFooter, Typography, Button, Checkbox, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <Card className="form-container section-gap card-top-m">
            <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                <Typography variant="h3" color="white">
                    Registration
                </Typography>
            </CardHeader>
            <form className="flex flex-col gap-4 p-4">
                <Input label="Name" size="lg" />
                <Input label="Email" size="lg" />
                <Input label="Password" size="lg" />
                <Input label="Confirm Password" size="lg" />
                <Checkbox label="Terms & Conditions" />
            </form>
            <CardFooter className="px-4 pt-0 pb-6">
                <Button variant="gradient" fullWidth>
                    Registration
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                    If already have an account?
                    <Link to="/login">
                        <Typography variant="small" color="blue" className="ml-1 font-bold">
                            Login
                        </Typography>
                    </Link>
                </Typography>
            </CardFooter>
        </Card>
    );
};

export default Registration;
