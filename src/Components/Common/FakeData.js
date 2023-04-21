import { BsDribbble, BsYoutube } from "react-icons/bs";
import { FaUnsplash } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import { TbMessageCircle2 } from "react-icons/tb";

export const nav_links = [
    { link: "/", text: "Home" },
    { link: "/about", text: "About" },
    { link: "/portfolio", text: "Portfolio" },
    { link: "/services", text: "Services" },
    { link: "/blogs", text: "Blogs" },
    { link: "/contact", text: "Contact" },
];

export const testimonials = [
    {
        name: "Sabila Nur",
        occupation: "Actress",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        review: 4.5,
        detail: "I am so glad that I stumbled across Creative Eyes. I can’t say enough about how professional Creative Eyes is and the quality of work that he provides. I was so pleased with my session and final photographs, that I will continue to use him in the future.",
    },
    {
        name: "Josim Uddin",
        occupation: "Director",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        review: 4,
        detail: "Creative Eyes was the best photographers agency I have ever hired. On time. Followed through on everything he said he would do. Would highly recommend him to family, friends and business associates",
    },
    {
        name: "Hasan Fahad",
        occupation: "CEO of PluggedIn",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        review: 3.5,
        detail: "Great photographer to work with. Creative Eyes was energetic, engaging, and a lot of fun! We love our wedding pictures!",
    },
    {
        name: "Rakib Rayhan",
        occupation: "Dancer",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        review: 5,
        detail: "Creative Eyes is an extremely personable individual, with an artistic eye, he will make your experience memorable!!",
    },
];

export const stats = [
    { title: "Project Completed", value: "126+" },
    { title: "Commercial Project", value: "36+" },
    { title: "Satisfaction Rate", value: "97%" },
    { title: "Successfully Rate", value: "96%" },
];

export const team = [
    {
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Lyssa Santiago",
        title: "Head of Designer",
        linkedin: "/",
        mail: "/",
        facebook: "/",
        instagram: "",
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "Vicky Hanson",
        title: "Product Manager",
        linkedin: "/",
        mail: "/",
        facebook: "/",
        instagram: "",
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "Martian Dianna",
        title: "Product Designer",
        linkedin: "/",
        mail: "/",
        facebook: "/",
        instagram: "",
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/14.jpg",
        name: "Micheal Colorant",
        title: "Photographer",
        linkedin: "/",
        mail: "/",
        facebook: "/",
        instagram: "",
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        name: "Brown Luis",
        title: "Photographer",
        linkedin: "/",
        mail: "/",
        facebook: "/",
        instagram: "",
    },

    {
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "Daniel Martin",
        title: "Jr Photographer",
        linkedin: "/",
        mail: "/",
        facebook: "/",
        instagram: "",
    },
];

export const featured = [
    { link: "/", source: "Youtube", icon: <BsYoutube /> },
    { link: "/", source: "Dribble", icon: <BsDribbble /> },
    { link: "/", source: "Unsplash", icon: <FaUnsplash /> },
];

export const contacts = [
    { icon: <IoMailOpenOutline size={28} className="text-secondary" />, title: "Email us", details: "mdpahlovi07@gmail.com" },
    { icon: <TfiHeadphoneAlt size={28} className="text-secondary" />, title: "Chat with an agent", details: "Lorem ipsum dolor sit amet" },
    { icon: <TbMessageCircle2 size={28} className="text-secondary" />, title: "WhatsApp", details: "+880-1736817612" },
    { icon: <IoCallOutline size={28} className="text-secondary" />, title: "Call us", details: "+880-1736817612" },
];

export const portfolio_data = [
    {
        label: "Wedding",
        images: [
            "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1622278413071-8c57275cafd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1273&q=80",
            "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            "https://images.unsplash.com/photo-1634729108541-516d16ddceec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        ],
    },
    {
        label: "Product",
        images: [
            "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
        ],
    },
    {
        label: "Travel",
        images: [
            "https://images.unsplash.com/photo-1489258205848-4b9651de165b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1548103981-34316e50b924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80",
        ],
    },
    {
        label: "Event",
        images: [
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1578559284795-c9e0d7f3198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        ],
    },
];
