/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["cupcake","aqua",],
  },
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '6xl': ['60px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'], // Add your font here
      },
      animation: {
        'bounce': 'bounce 1s infinite',
        'spin': 'spin 5s linear infinite',
        'pulse': 'pulse 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'blink': 'blink 0.6s steps(5, start) ',
        'fadeIn': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },},
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // 'primary': "#ECEEFF",
        "primary-blue":'#007BFF',
        "secondary-red":'#DC3545',
        "accent-orange":'#FF7F00',
        "background-gray":'#F8F9FA',
        'txt-black':'#343A40',
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      }},
  },
  plugins: [require('daisyui'),],
}

