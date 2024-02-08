/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'PriceColor':"#F2A851",
        'red':"#FF0336",
        'gold':"#F6AE4F",
        'heroBgColor':"#0C1114",
        'bgColor1':"#111317",
        'bgColor2':"#1F2125",
        'boxHoverColor':"#35373B",
        'text1':"#F3F0EC",
        'text2':"#ADB0B6",
      },
      backgroundImage:{
        // 'heroBg': 'url("./src/Images/young-fitness-man-studio.jpg")',
        // 'aboutcardbg':"url('./src/Images/home-2/background.jpg')",
        // 'aboutcardbgcange':"url('./src/Images/home-2/info-card-bg.jpg')",
        // 'textbg':"url('./src/Images/who-we-are/title-bg.svg')",
        // 'ci1':"url('./src/Images/classes/cycling.jpg')",
        // 'bg2':"url('./src/Images/backgorund_image.jpg')",
        // 'BMIbg':"url('./src/Images/BMI/bmi.jpg')",
        // 'addpage':"url('./src/Images/pagesStart/background.jpg')",
      }
    },
  },
  plugins: [],
}

