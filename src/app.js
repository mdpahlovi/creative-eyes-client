import React from "react";
import { router } from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider, useTheme } from "@material-tailwind/react";

const App = () => {
    const theme = {
        button: {
            styles: {
                base: { initial: { textTransform: "", fontWeight: "" } },
                sizes: {
                    sm: { fontSize: "text-base", borderRadius: "rounded-full" },
                    md: { fontSize: "text-base", borderRadius: "rounded-full" },
                    lg: { fontSize: "text-base", borderRadius: "rounded-full" },
                },
                variants: { outlined: { gray: { border: "border border-black", color: "" } } },
            },
        },
        iconButton: {
            styles: {
                base: { initial: { textTransform: "", fontWeight: "" } },
                sizes: {
                    sm: { fontSize: "text-base", borderRadius: "rounded-full" },
                    md: { fontSize: "text-base", borderRadius: "rounded-full" },
                    lg: { fontSize: "text-base", borderRadius: "rounded-full" },
                },
                variants: { outlined: { gray: { border: "border border-black", color: "" } } },
            },
        },
        menu: { styles: { base: { item: { initial: { borderRadius: "rounded", color: "", pb: "", pt: "", px: "" } }, menu: { color: "" } } } },
        navbar: { styles: { base: { navbar: { initial: { px: "", py: "py-[8.35px]" } } }, variants: { filled: { white: { color: "" } } } } },
        card: { styles: { variants: { filled: { white: { color: "" } } } } },
        cardHeader: { styles: { base: { shadow: { boxShadow: "shadow" } } } },
        cardBody: { styles: { base: { p: "px-6 pt-4 pb-[1.125rem]" } } },
        cardFooter: { styles: { base: { initial: { p: "px-6 py-4" } } } },
        input: { styles: { base: { label: { color: "peer-placeholder-shown:text-gray-400" } } } },
        textarea: { styles: { base: { label: { color: "peer-placeholder-shown:text-gray-400" } } } },
        tabPanel: { styles: { base: { color: "", p: "pt-6" } } },
    };
    console.log(useTheme());
    return (
        <ThemeProvider value={theme}>
            <RouterProvider router={router} />
            <ToastContainer position="top-right" autoClose={1500} />
        </ThemeProvider>
    );
};

export default App;
