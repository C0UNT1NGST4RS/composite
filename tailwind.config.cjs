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
                about: "linear-gradient(to bottom,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.70)),url(../src/media/images/SACAdmin.jpg)",
                royal: "linear-gradient(to bottom,rgba(0, 0, 0, 0.30),rgba(0, 0, 0, 0.30)),url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fFBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
                siril: "linear-gradient(to bottom,rgba(0, 0, 0, 0.30),rgba(0, 0, 0, 0.30)),url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8UG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
                neha: "linear-gradient(to bottom,rgba(0, 0, 0, 0.30),rgba(0, 0, 0, 0.30)),url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
            },
        },
    },
    plugins: [],
};
