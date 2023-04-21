import { Card, CardHeader, CardBody, Typography, Dialog, Input, Button } from "@material-tailwind/react";
import { useAuth } from "../../Hooks/useAuth";
import NoPhoto from "../../Assets/icon/NoPhoto.png";
import { format, parseISO } from "date-fns";
import { FaUserEdit } from "react-icons/fa";
import { useState } from "react";
import { readFileAsBase64 } from "../../Utilities/readFile";
import Loader from "../../Components/Common/Loader";
import axios from "axios";
import { toast } from "react-toastify";

export default function Profile() {
    const { loading, user, userRefetch, setUserRefetch } = useAuth();
    const [imageURL, setImageURL] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [open, setOpen] = useState(false);
    const { _id, name, createdAt, avatar, email } = user;
    const date = format(parseISO(createdAt), "PPp");

    const handleAddMedia = async (event) => {
        const file = event.target.files[0];
        setImageFile(file);
        setImageURL(await readFileAsBase64(file));
    };
    const handleDrag = async (event) => {
        event.preventDefault();
        const draggedFile = event?.dataTransfer?.files[0];
        setImageFile(draggedFile);
        setImageURL(await readFileAsBase64(draggedFile));
    };

    const handleSubmit = (event) => {
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;

        if (!imageFile) {
            axios.patch(`/user/${_id}`, { name }).then((res) => {
                if (res.data.acknowledge) {
                    setUserRefetch(!userRefetch);
                    setOpen(false);
                    toast.success("Profile Updated Successfully");
                }
            });
        } else {
            const formData = new FormData();
            formData.append("file", imageFile);
            formData.append("upload_preset", "creative-eyes");
            axios.post("https://api.cloudinary.com/v1_1/dikezpkeg/image/upload", formData).then((res) => {
                axios.patch(`/user/${_id}`, { name, avatar: res?.data?.url }).then((res) => {
                    if (res.data.acknowledge) {
                        setUserRefetch(!userRefetch);
                        setOpen(false);
                        toast.success("Profile Updated Successfully");
                    }
                });
            });
        }
    };

    if (loading) return <Loader />;

    return (
        <section className="form-container section-gap px-6">
            <Card className="relative border pt-10 pb-4">
                <button onClick={() => setOpen(true)} className="absolute icon-button top-6 right-6">
                    <FaUserEdit />
                </button>
                <CardHeader floated={false} className="w-56 h-56 mx-auto rounded-full">
                    <img src={avatar ? avatar : NoPhoto} alt="" className="w-full h-full" />
                </CardHeader>
                <CardBody className="text-center space-y-0.5">
                    <h3>{name ? name : "No Name"}</h3>
                    <p>{email}</p>
                    <p>{date}</p>
                </CardBody>
            </Card>
            <Dialog open={open} handler={() => setOpen(false)} className="overflow-visible">
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
                        <Typography variant="h3" color="white">
                            Edit Profile
                        </Typography>
                    </CardHeader>
                    <form onSubmit={handleSubmit} className="p-6 pt-0 flex flex-col gap-4">
                        <label className="flex items-center rounded-lg border border-blue-gray-200 aspect-[4_/_3] overflow-hidden">
                            {imageURL ? (
                                <img src={imageURL} alt="" className="w-full h-full object-cover object-center" />
                            ) : (
                                <div
                                    onDragOver={(event) => {
                                        event.preventDefault();
                                    }}
                                    onDrop={handleDrag}
                                    className="mx-auto text-center p-6"
                                >
                                    <h6>
                                        Drag and drop avatar here <br /> or <span className="font-bold text-blue-500 hover:underline mr-1">select a file</span>
                                        from your device
                                    </h6>
                                </div>
                            )}
                            <input type="file" className="hidden" onChange={(event) => handleAddMedia(event)} />
                        </label>
                        <Input name="name" label="Name" defaultValue={name} />
                        <div className="ml-auto flex gap-4">
                            <Button type="submit">Submit</Button>
                            <Button color="red" onClick={() => setOpen(false)}>
                                Close
                            </Button>
                        </div>
                    </form>
                </Card>
            </Dialog>
        </section>
    );
}
