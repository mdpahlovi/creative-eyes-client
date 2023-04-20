import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Card, CardHeader, Typography, Button, Checkbox, Input } from "@material-tailwind/react";

const Login = () => {
    const { setUser, setLoading, signIn, signInByGoogle, signInByFacebook, signInByGithub } = useAuth();

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
                axios.get(`/user/${user?.email}`).then((res) => {
                    form.reset();
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
                axios.post(`/user`, authUser).then((res) => {
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
                axios.post(`/user`, authUser).then((res) => {
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
                axios.post(`/user`, authUser).then((res) => {
                    setUser(res.data);
                    setLoading(false);
                    toast.success("Github Signin Done");
                    navigate(from, { replace: true });
                });
            })
            .catch((error) => console.error(error.message));
    };

    return (
        <main className="container section-gap">
            <Card className="form-container mt-6 space-y-4">
                <CardHeader variant="gradient" color="blue" className="grid h-28 place-items-center">
                    <Typography className="uppercase text-center" variant="h3" color="white">
                        Login
                    </Typography>
                </CardHeader>
                <div className="line-x px-6">
                    <p className="mx-2">Login With</p>
                </div>
                <div className="px-6 grid grid-cols-1 xs:grid-cols-3 gap-4">
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
                <div className="line-x px-6">
                    <p className="mx-2">Or Use Email</p>
                </div>
                <form onSubmit={handelSubmit} className="flex flex-col gap-4 px-6">
                    <Input type="email" name="email" label="Email" />
                    <Input type="password" name="password" label="Password" />
                    <div className="flex justify-between items-center">
                        <Checkbox label="Remember Me" />
                        <Link className="font-bold underline">Forget Password</Link>
                    </div>
                    <Button type="submit" variant="gradient" fullWidth>
                        Login
                    </Button>
                    <Typography variant="small" className="my-2 flex justify-center mb-6">
                        Don't have an account?
                        <Link to="/registration" className="ml-1 font-bold underline">
                            Registration
                        </Link>
                    </Typography>
                </form>
            </Card>
        </main>
    );
};

export default Login;
