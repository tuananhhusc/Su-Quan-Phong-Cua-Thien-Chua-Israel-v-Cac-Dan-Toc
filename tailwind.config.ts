import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                parchment: "#F9F7F1",
                ink: "#2D3748",
                burgundy: "#742A2A",
                gold: "#C5A059",
            },
            fontFamily: {
                serif: ["var(--font-crimson-pro)", "Georgia", "serif"],
                heading: ["var(--font-playfair)", "Trajan Pro", "serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
