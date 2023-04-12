/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
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
                hero: "url('/src/Assets/images/hero.jpg')",
                header: "url('/src/Assets/images/header.jpg')",
                about: "url('/src/Assets/images/Profile.jpg')",
            },
        },
    },
    plugins: [],
});
