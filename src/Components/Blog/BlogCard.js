import { Card, CardHeader, CardBody, Typography, Avatar } from "@material-tailwind/react";

const BlogCard = () => {
    return (
        <Card className="overflow-hidden border hover:shadow-none transition">
            <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="ui/ux review check"
                    className="aspect-[4_/_3]"
                />
            </CardHeader>
            <CardBody>
                <h5 className="mb-1">UI/UX Review Check</h5>
                <p>Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.</p>
                <div className="mt-3 flex items-center justify-between">
                    <Avatar
                        size="sm"
                        variant="circular"
                        alt=""
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                    />
                    <Typography className="font-normal">January 10</Typography>
                </div>
            </CardBody>
        </Card>
    );
};

export default BlogCard;
