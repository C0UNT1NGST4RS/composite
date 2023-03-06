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
                "poppy-bold": ["Poppins", "sans-serif"],
                queen: ["Quinland", "sans-serif"],
            },
            backgroundImage: {
                home: "url(../src/media/images/bgHome.webp)",
                "foot-blu": "url(../src/media/images/footBlu.png)",
                about: "linear-gradient(to bottom,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.70)),url(../src/media/images/SACAdmin.jpg)",
                royal: "linear-gradient(to bottom,rgba(0, 0, 0, 0.40),rgba(0, 0, 0, 0.40)),url(http://www.staloysius.edu.in/storage/files/faculty-images/UG-ComputerScience/Mr-Royal-Praveen-DSouza.jpg)",
                siril: "linear-gradient(to bottom,rgba(0, 0, 0, 0.30),rgba(0, 0, 0, 0.30)),url(../src/media/images/SirilJoseph.jpg)",
                delbin: "linear-gradient(to bottom,rgba(0, 0, 0, 0.30),rgba(0, 0, 0, 0.30)),url(../src/media/images/DelbinGeorge.jpg)",
                ashwin: "linear-gradient(to bottom,rgba(0, 0, 0, 0.30),rgba(0, 0, 0, 0.30)),url(../src/media/images/AshwinKV.jpeg)",
                neha: "linear-gradient(to bottom,rgba(0, 0, 0, 0.40),rgba(0, 0, 0, 0.40)),url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
                web: "linear-gradient(to bottom,rgba(0, 0, 0, 0.40),rgba(0, 0, 0, 0.40)),url(https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
                code: "linear-gradient(to bottom,rgba(0, 0, 0, 0.50),rgba(0, 0, 0, 0.50)),url(https://wallpapers.com/images/featured/avfu043y2kv52wha.jpg)",
                quiz: "linear-gradient(to bottom,rgba(0, 0, 0, 0.50),rgba(0, 0, 0, 0.50)),url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHeruTs2hbGCOv8ecsUyy3sI2XmcY1pifxQ&usqp=CAU)",
                game: "linear-gradient(to bottom,rgba(0, 0, 0, 0.50),rgba(0, 0, 0, 0.50)),url(https://asset.vg247.com/valorant_keyart_new_black_1.jpg/BROK/thumbnail/1200x1200/quality/100/valorant_keyart_new_black_1.jpg)",
                expo: "linear-gradient(to bottom,rgba(0, 0, 0, 0.50),rgba(0, 0, 0, 0.50)),url(https://www.baesystems.com/en-media/webImage/20221010163004/1573683453684.jpg)",
                closed: "linear-gradient(to bottom,rgba(0, 0, 0, 0.50),rgba(0, 0, 0, 0.50)),url(https://www.xtrafondos.com/wallpapers/vertical/codm-dame-shot-caller-9400.jpg)",
                inco: "linear-gradient(to bottom,rgba(0, 0, 0, 0.50),rgba(0, 0, 0, 0.50)),url(https://images.unsplash.com/photo-1592576712964-43b32e031cae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80)",
                man: "linear-gradient(to bottom,rgba(0, 0, 0, 0.50),rgba(0, 0, 0, 0.50)),url(https://www.michaelpage.com.sg/sites/michaelpage.com.sg/files/2021-11/IT%20Director.jpeg)",
            },
        },
    },
    plugins: [],
};
