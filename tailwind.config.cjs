/** @type {import('tailwindcss').Config} */


module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'purple': '#4F46E5',
                "lite-gray": "#EDEDED",
            },
            fontFamily: {
                Poppins: ['"Poppins"'],
            }
        },

    },
    plugins: [],
};