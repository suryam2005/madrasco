/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#000000',
                primary: '#8B5CF6',
                'primary-dark': '#7C3AED',
            },
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
