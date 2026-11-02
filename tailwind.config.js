/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#FDFBF7',
          100: '#F5EBE1',
          200: '#E8D8C8',
          300: '#D7BEA8',
          400: '#B88658',
          500: '#94582E',
          600: '#7B4420',
          700: '#603316',
          800: '#432310',
          900: '#2C170A',
          950: '#1A0C06',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FAF6EE',
          200: '#F4ECE0',
          300: '#EDE0CF',
        },
        gold: {
          400: '#E5A93C',
          500: '#D4A373',
          600: '#C28952',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'cafe': '0 10px 30px -5px rgba(67, 35, 16, 0.08)',
        'cafe-hover': '0 20px 40px -10px rgba(67, 35, 16, 0.16)',
        'cafe-glow': '0 0 25px rgba(212, 163, 115, 0.35)',
      }
    },
  },
  plugins: [],
}
