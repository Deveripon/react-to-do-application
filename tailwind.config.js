/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                heading: ["Rajdhani", "sans-serif"],
                paragraph: ["Quicksand", " sans-serif"],
                subHeading: ["Play", "sans-ser"],
            },
            cursor: {
                fancy: "url(hand.cur), pointer",
            },
        },
    },
    plugins: [],
};
