/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'hsl(0, 100%, 67%)',
        'secondary':'hsl(39, 100%, 56%)',
        'tertiary':'hsl(166, 100%, 37%)',
        'quater':'hsl(234, 85%, 45%)',
        'gradient_1':'hsl(252, 100%, 67%)',
        'gradient_2':'hsl(241, 81%, 54%)',
        'gradient_3':'hsla(256, 72%, 46%, 1)',
        'gradient_4':'hsla(241, 72%, 46%, 0)',
        'pale_blue':'hsl(221, 100%, 96%)',
        'lavender':'hsl(241, 100%, 89%)',
        'gray_blue':'hsl(224, 30%, 27%)'
      },
      backgroundImage:{
        'desk': "url('../src/assets/assets/images/bg-sidebar-desktop.svg')",
      }
    },
  },
  plugins: [],
}