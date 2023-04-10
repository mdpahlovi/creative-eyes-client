import React, { useContext } from "react";
import { Card, CardHeader, Typography, Button, Checkbox, Input } from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";
import { toast } from "react-toastify";
import SetTitle from "../Components/Common/SetTitle";
import axios from "axios";
import { api_url } from "../Api/api_url";

const Login = () => {
    SetTitle("Creative Eyes | Login");

    const { setUser, setLoading, signIn, signInByGoogle, signInByFacebook, signInByGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handelSubmit = (event) => {
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(({ user }) => {
                const authUser = { email: user?.email };
                axios.post(`${api_url}/user`, authUser).then((res) => {
                    setUser(res.data);
                    setLoading(false);
                    toast.success("User Signin Done");
                    navigate(from, { replace: true });
                });
            })
            .catch((error) => console.error(error.message));
    };

    // Social Signin
    const handelGoogleSignIn = () => {
        signInByGoogle()
            .then(({ user }) => {
                const authUser = { name: user?.displayName, email: user?.email, avatar: user?.photoURL };
                axios.post(`${api_url}/user`, authUser).then((res) => {
                    setUser(res.data);
                    setLoading(false);
                    toast.success("Google Signin Done");
                    navigate(from, { replace: true });
                });
            })
            .catch((error) => console.error(error.message));
    };
    const handelFacebookSignIn = () => {
        signInByFacebook()
            .then(({ user }) => {
                const authUser = { name: user?.displayName, email: user?.email, avatar: user?.photoURL };
                axios.post(`${api_url}/user`, authUser).then((res) => {
                    setUser(res.data);
                    setLoading(false);
                    toast.success("Facebook Signin Done");
                    navigate(from, { replace: true });
                });
            })
            .catch((error) => console.error(error.message));
    };
    const handelGithubSignIn = () => {
        signInByGithub()
            .then(({ user }) => {
                const authUser = { name: user?.displayName, email: user?.email, avatar: user?.photoURL };
                axios.post(`${api_url}/user`, authUser).then((res) => {
                    setUser(res.data);
                    setLoading(false);
                    toast.success("Github Signin Done");
                    navigate(from, { replace: true });
                });
            })
            .catch((error) => console.error(error.message));
    };

    return (
        <Card className="form-container section-gap card-top-m">
            <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                <Typography className="uppercase" variant="h3" color="white">
                    Login
                </Typography>
            </CardHeader>
            <div className="line-x px-4">
                <p className="mx-2">Login with</p>
            </div>
            <div className="p-4 grid grid-cols-1 xs:grid-cols-3 gap-4">
                <Button onClick={handelGoogleSignIn} variant="outlined">
                    Google
                </Button>
                <Button onClick={handelFacebookSignIn} variant="outlined">
                    Facebook
                </Button>
                <Button onClick={handelGithubSignIn} variant="outlined">
                    Github
                </Button>
            </div>
            <div className="line-x px-4">
                <p className="mx-2">Or</p>
            </div>
            <form onSubmit={handelSubmit} className="flex flex-col gap-4 p-4">
                <Input type="email" name="email" label="Email" size="lg" />
                <Input type="password" name="password" label="Password" size="lg" />
                <div className="flex justify-between items-center">
                    <Checkbox label="Remember Me" />
                    <Link className="font-bold underline">Forget Password</Link>
                </div>
                <Button type="submit" variant="gradient" fullWidth>
                    Login
                </Button>
                <Typography variant="small" className="my-2 flex justify-center">
                    Don't have an account?
                    <Link to="/registration" className="ml-1 font-bold underline">
                        Registration
                    </Link>
                </Typography>
            </form>
        </Card>
    );
};

export default Login;
