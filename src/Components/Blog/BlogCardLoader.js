import { Card, CardBody, CardFooter, CardHeader } from "@material-tailwind/react";

const BlogCardLoader = () => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((a, i) => (
                <Card key={i} className="overflow-hidden border animate-pulse">
                    <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none aspect-video">
                        <div className="w-full h-full bg-black/10" />
                    </CardHeader>
                    <CardBody className="space-y-4">
                        <div className="w-full h-14 rounded bg-black/10" />
                        <div className="w-full h-24 rounded bg-black/10" />
                    </CardBody>
                    <CardFooter divider className="mt-auto flex items-center justify-between">
                        <div className="w-9 h-9 rounded-full bg-black/10" />
                        <div className="w-[6.5rem] h-10 rounded-full bg-black/10" />
                        <div className="w-9 h-9 rounded-full bg-black/10" />
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default BlogCardLoader;
