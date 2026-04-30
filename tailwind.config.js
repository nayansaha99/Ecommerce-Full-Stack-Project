/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // For your components
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // If you use a src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}