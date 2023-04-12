import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import SetTitle from "../Components/Common/SetTitle";
import { Card, CardHeader, Typography, Button, Checkbox, Input } from "@material-tailwind/react";

const Registration = () => {
    SetTitle("Creative Eyes | Registration");

    const { createUser, setUser, setLoading } = useAuth();

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
            toast.error("Password should be 6 character or more");
            return;
        }
        if (password !== confirmPass) {
            toast.error("Your password didn't match");
            return;
        }

        // Create New User
        createUser(email, password)
            .then(({ user }) => {
                const authUser = { name: name, email: user?.email };
                axios.post(`/user`, authUser).then((res) => {
                    form.reset();
                    setUser(res.data);
                    setLoading(false);
                });
            })
            .catch((error) => console.error(error));
    };
    return (
        <main className="container section-gap">
            <Card className="form-container mt-6">
                <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                    <Typography className="uppercase text-center" variant="h3" color="white">
                        Registration
                    </Typography>
                </CardHeader>
                <form onSubmit={handelSubmit} className="flex flex-col gap-4 px-6 py-4">
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
        </main>
    );
};

export default Registration;
