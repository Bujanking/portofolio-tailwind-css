/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center:true,
      padding:'16px'
    },
    extend: {
      colors : {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark : '#0f172a',
      },
      screens: {
        '2xl' : '1320px'
      },
      fontFamily:{
        poppins: ['"Poppins"',"sans-serif"]
      }
    },
  },
  plugins: [],
}
