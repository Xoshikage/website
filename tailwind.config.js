/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      // added some stuff for an effect on projects page, don't worry about it! 
      // if this causes an issue with anything you do, let @4ubiks know in discord!
      keyframes:{
        typing:{
          "0%":{
            width:"0%",
            visibility:"hidden"
          },
          "100%":{
            width:"100%"
          }
        },
        blink:{
          "50%":{
            borderColor:"transparent"
          },
          "100%":{
            borderColor:"white"
          }
        }
      },
      animation:{
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      },
      // end of projects page stuff
    
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}
