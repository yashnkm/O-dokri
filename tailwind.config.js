/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF6A2A',
        'soft-pink': '#FFF3F0',
        'cream': '#FFF8F3',
        'dark-text': '#181311',
        'muted-text': '#886f63',
        'vintage-brown': '#a38560',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'kristi': ['Kristi', 'cursive'],
      },
    },
  },
  plugins: [],
}

