/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C97B82',      // Dusty Rose
        secondary: '#F9D5D3',    // Soft Blush Pink
        accent: '#8A9A5B',       // Muted Sage Green
      },
      screens: {
        sm: '640px',   // small devices like phones
        md: '768px',   // medium devices like tablets
        lg: '1024px',  // large devices like laptops
        xl: '1280px',  // extra large devices
        '2xl': '1536px',
      },
        fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
