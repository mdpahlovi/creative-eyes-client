/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "448px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1600px",
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        extend: {
            backgroundImage: {
                hero: "url('/src/Assets/hero.jpg')",
                header: "url('/src/Assets/header.jpg')",
                about: "url('/src/Assets/Profile.jpg')",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
});
