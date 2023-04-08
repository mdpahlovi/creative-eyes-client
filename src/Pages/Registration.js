import React, { useContext } from "react";
import { Card, CardHeader, Typography, Button, Checkbox, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";
import { toast } from "react-toastify";
import SetTitle from "../Components/Common/SetTitle";

const Registration = () => {
    SetTitle("Creative Eyes | Registration");

    const { createUser } = useContext(AuthContext);

    const handelSubmit = (event) => {
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.pass.value;
        const confirmPass = form.confirmPass.value;

        // Check Password
        if (password.length < 6) {
            toast.error("Password sould be 6 cherecter or more");
            return;
        }
        if (password !== confirmPass) {
            toast.error("Your password didn't match");
            return;
        }

        // Create New User
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                user.displayName = name;
                const currentUser = {
                    email: user.email,
                };
                // get jwt token
                fetch("https://photographer-server.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        localStorage.setItem("my-token", data.token);
                        toast.success("Account Created");
                        form.reset();
                    });
            })
            .catch((error) => console.error(error));
    };
    return (
        <Card className="form-container section-gap card-top-m">
            <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                <Typography className="uppercase" variant="h3" color="white">
                    Registration
                </Typography>
            </CardHeader>
            <form onSubmit={handelSubmit} className="flex flex-col gap-4 p-4">
                <Input type="text" name="name" label="Name" size="lg" />
                <Input type="email" name="email" label="Email" size="lg" />
                <Input type="password" name="pass" label="Password" size="lg" />
                <Input type="password" name="confirmPass" label="Confirm Password" size="lg" />
                <Checkbox label="Terms & Conditions" />
                <Button type="submit" variant="gradient" fullWidth>
                    Registration
                </Button>
                <Typography variant="small" className="my-2 flex justify-center">
                    If already have an account?
                    <Link to="/login" className="ml-1 font-bold underline">
                        Login
                    </Link>
                </Typography>
            </form>
        </Card>
    );
};

export default Registration;
