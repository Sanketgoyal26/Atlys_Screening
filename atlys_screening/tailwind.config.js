/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      customGray: '#27292D',
      customGraySecond: '#191920',
      textGrey: '#6B6C70',
      registerText: '#7F8084',
      labelText: '#C5C7CA',
      inputBorderColor: '#35373B',
    }},
  },
  plugins: [],
}

