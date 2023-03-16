/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppy: ["Poppins", "sans-serif"],
                "poppy-bold": ["Poppins", "sans-serif"],
                digital: ["Digital", "sans-serif"],
            },
            backgroundImage: {
                home: "url(../src/media/images/bgHome.webp)",
                "foot-blu": "url(../src/media/images/footBlu.png)",
                about: "linear-gradient(to bottom,rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.60)),url(../src/media/images/SACAdmin.jpg)",
                royal: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Royal.jpg)",
                praveen:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Praveen.jpg)",
                kenneth:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Kenneth.jpg)",
                siril: "linear-gradient(to bottom,rgba(0, 0, 0,0),rgba(0, 0, 0, 0.40)),url(../src/media/images/Heads/SirilJoseph.jpg)",
                maya: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Maya.jpg)",
                delbin: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/DelbinGeorge.jpg)",
                anvisha:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Anvisha.jpg)",
                ashwin: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/AshwinKV.jpeg)",
                iyola: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Iyola.jpg)",
                joel: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/JoelJames.jpg)",
                sonal: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Sonal.jpg)",
                nihal: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Nihal.jpg)",
                lishma: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Lishma.jpg)",
                laniel: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Laniel.jpg)",
                frank: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.6)),url(../src/media/images/Heads/Frank.jpg)",
                deepak: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Deepak.jpg)",
                jaslyn: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Jaslyn.jpg)",
                bushan: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Bushan.jpg)",
                mahima: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Mahima.jpg)",
                neha: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Neha.jpg)",
                elkan: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Elkan.jpg)",
                kavya: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Kavya.jpg)",
                vivian: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Vivian.png)",
                pragathi:
                    "linear-gradient(to bottom,rgba(0, 0, 0,0),rgba(0, 0, 0, 0.6)),url(../src/media/images/Heads/Pragathi.jpg)",
                web: "linear-gradient(to bottom,rgba(0, 0, 0, 0.0),rgba(0, 0, 0,1)),url(../src/media/images/Web.png)",
                code: "linear-gradient(to bottom,rgba(0, 0, 0, 0.0),rgba(0, 0, 0,1)),url(../src/media/images/Coding.jpg)",
                quiz: "linear-gradient(to bottom,rgba(0, 0, 0, 0.0),rgba(0, 0, 0,1)),url(../src/media/images/Quiz.jpg)",
                game: "linear-gradient(to bottom,rgba(0, 0, 0, 0.0),rgba(0, 0, 0,1)),url(../src/media/images/GamingOpen.jpg)",
                expo: "linear-gradient(to bottom,rgba(0, 0, 0, 0.0),rgba(0, 0, 0,1)),url(../src/media/images/Expo.jpg)",
                closed: "linear-gradient(to bottom,rgba(0, 0, 0, 0.0),rgba(0, 0, 0,1)),url(../src/media/images/GamingClosed.jpg)",
                inco: "linear-gradient(to bottom,rgba(0, 0, 0, 0.0),rgba(0, 0, 0,1)),url(../src/media/images/inco.png)",
                man: "linear-gradient(to bottom,rgba(0, 0, 0, 0.0),rgba(0, 0, 0,1)),url(../src/media/images/ITMan.jpeg)",
            },
        },
    },
    plugins: [],
};
