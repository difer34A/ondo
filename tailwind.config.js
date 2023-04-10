/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
            colors: {
                bg: "#101219",
                Primary: {
                    100: "#ffcceb",
                    200: "#ff99d6",
                    300: "#ff66c2",
                    400: "#ff33ad",
                    500: "#ff0099",
                    600: "#cc007a",
                    700: "#99005c",
                    800: "#66003d",
                    900: "#33001f"
                },
            }
        },
    },
    plugins: [],
}