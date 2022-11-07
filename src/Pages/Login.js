import React from "react";
import { Card, CardHeader, CardFooter, Typography, Button, Checkbox, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Card className="form-container section-gap card-top-m">
            <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                <Typography variant="h3" color="white">
                    Login
                </Typography>
            </CardHeader>
            <div className="line-x px-4">
                <p className="mx-2">Login with</p>
            </div>
            <div className="p-4 grid grid-cols-1 xs:grid-cols-3 gap-4">
                <Button variant="outlined">Google</Button>
                <Button variant="outlined">Facebook</Button>
                <Button variant="outlined">Github</Button>
            </div>
            <div className="line-x px-4">
                <p className="mx-2">Or</p>
            </div>
            <form className="flex flex-col gap-4 p-4">
                <Input label="Email" size="lg" />
                <Input label="Password" size="lg" />
                <Checkbox label="Remember Me" />
            </form>
            <CardFooter className="px-4 pt-0 pb-6">
                <Button variant="gradient" fullWidth>
                    Login
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                    Don't have an account?
                    <Link to="/registration">
                        <Typography variant="small" color="blue" className="ml-1 font-bold">
                            Registration
                        </Typography>
                    </Link>
                </Typography>
            </CardFooter>
        </Card>
    );
};

export default Login;
