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
                about: "linear-gradient(to bottom,rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.60)),url(../src/media/images/SACAdmin.jpeg)",
                royal: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Royal.webp)",
                praveen:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Praveen.webp)",
                kenneth:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Kenneth.jpg)",
                siril: "linear-gradient(to bottom,rgba(0, 0, 0,0),rgba(0, 0, 0, 0.40)),url(../src/media/images/Heads/SirilJoseph.webp)",
                maya: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Maya.webp)",
                delbin: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/DelbinGeorge.webp)",
                anvisha:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Anvisha.webp)",
                ashwin: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/ashwin.webp)",
                iyola: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Iyola.webp)",
                joel: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/JoelJames.webp)",
                sonal: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Sonal.webp)",
                nihal: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Nihal.webp)",
                lishma: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Lishma.webp)",
                laniel: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Laniel.webp)",
                frank: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.6)),url(../src/media/images/Heads/Frank.webp)",
                deepak: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Deepak.webp)",
                jaslyn: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Jaslyn.webp)",
                bushan: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Bushan.webp)",
                mahima: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Mahima.webp)",
                neha: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Neha.webp)",
                elkan: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Elkan.webp)",
                kavya: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Kavya.webp)",
                vivian: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/Vivian.webp)",
                varshit:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/varshit.webp)",
                amy: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/amy.webp)",
                sayhan: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/sayhan.webp)",
                shaina: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/shaina.webp)",
                swasthi:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/swasthi.webp)",
                maithri:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/maithri.webp)",
                varshitha:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/varshitha.webp)",
                geethika:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/geethika.webp)",
                prenisha:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/prenisha.webp)",
                charan: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/charan.webp)",
                vignesh:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/vignesh.webp)",
                robin: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/robin.webp)",
                brian: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/brian.webp)",
                shibin: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/shibin.webp)",
                praneeth: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/praneeth.jpg)",
                rohan: "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/rohan.webp)",
                suprath:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/suprath.webp)",
                vaishnavi:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.60)),url(../src/media/images/Heads/vaishnavi.webp)",
                pragathi:
                    "linear-gradient(to bottom,rgba(0, 0, 0,0),rgba(0, 0, 0, 0.6)),url(../src/media/images/Heads/Pragathi.webp)",
                web: "linear-gradient(to bottom,rgba(0, 0, 0, 0.0),rgba(0, 0, 0,1)),url(../src/media/images/Web.webp)",
                code: "linear-gradient(to bottom,rgba(0, 0, 0, 0.0),rgba(0, 0, 0,1)),url(../src/media/images/Coding.webp)",
                quiz: "linear-gradient(to bottom,rgba(0, 0, 0, 0.0),rgba(0, 0, 0,1)),url(../src/media/images/Quiz.webp)",
                closed: "linear-gradient(to bottom,rgba(0, 0, 0, 0.0),rgba(0, 0, 0,1)),url(../src/media/images/GamingOpen.jpg)",
                expo: "linear-gradient(to bottom,rgba(0, 0, 0, 0.0),rgba(0, 0, 0,1)),url(../src/media/images/Expo.webp)",
                game: "linear-gradient(to bottom,rgba(0, 0, 0, 0.0),rgba(0, 0, 0,1)),url(../src/media/images/GamingClosed.webp)",
                inco: "linear-gradient(to bottom,rgba(0, 0, 0, 0.0),rgba(0, 0, 0,1)),url(../src/media/images/inco.webp)",
                man: "linear-gradient(to bottom,rgba(0, 0, 0, 0.0),rgba(0, 0, 0,1)),url(../src/media/images/ITMan.webp)",
            },
        },
    },
    plugins: [],
};
