/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './source/**/*.{html,js}',
        './app/**/*.{php}',
        "./**/*.php",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
