module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'Spartan': ['Spartan', 'Helvitica', 'sans-serif'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
