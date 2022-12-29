/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#64748b',
        dark: '#334155',
      },

      fontFamily: {
        'inter': ['Inter'],
        'poppins': ['Poppins'],
      }
    },
  },
  plugins: [],
}
