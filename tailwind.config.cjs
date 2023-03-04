/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppy: ["Poppins", "sans-serif"],
                queen: ["Quinland", "sans-serif"],
            },
            backgroundImage: {
                home: "url(../src/media/images/bgHome.webp)",
                // home: "url(https://eatables.vercel.app/_next/static/media/BgCover.4732120d.webp)",
            },
        },
    },
    plugins: [],
};
