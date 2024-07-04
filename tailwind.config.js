/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(647.71% 142.52% at 80% 80%, rgb(2, 0, 67), rgba(2, 0, 67, 0.3) 80%)',
      },
      fontFamily: {
        Inter: "'Inter', sans-serif"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

