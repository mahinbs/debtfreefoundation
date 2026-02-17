/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#008080', // Teal Green
                    light: '#339999',
                    dark: '#006666',
                }
            }
        },
    },
    plugins: [],
}
