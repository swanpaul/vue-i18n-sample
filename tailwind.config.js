/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        screens: {
            md: '790px',
            xl: '1280px',
        },
        corePlugins: {
            preflight: false,
        },
        extend: {
            colors: {
                info: '#FFE56C',
                focus: '#F85E9F',
                primary: {
                    50: '#F9FDFF',
                    100: '#EEFBFC',
                    200: '#DFF6F7',
                    300: '#B0DEEC',
                    400: '#7DCFE1',
                    500: '#47BCD6',
                    600: '#15ADCE',
                    700: '#00A0B6',
                    800: '#007C87',
                },
            },
        },
    },
    plugins: [],
}
