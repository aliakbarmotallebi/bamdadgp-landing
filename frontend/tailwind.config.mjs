/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/section/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yekanbakh: ["yekanbakh"],
      },
      blur: {
        '4xl': '128px',
        '5xl': '192px'
      },
      direction: {
        left: 'ltr',
        right: 'rtl',
      },
      colors: {
        primary: {
          100: "#ffdad1",
          200: "#feb4a3",
          300: "#fe8f75",
          400: "#fd6947",
          500: "#fd4419",
          600: "#ca3614",
          700: "#98290f",
          800: "#651b0a",
          900: "#330e05"
        },
      },
      keyframes: {
        fadeInOut: {
          "20%": { opacity: "0.4" },
          "100%": { opacity: "1" },
        },
        fadeOutIn: {
          "20%": { opacity: "0.4" },
          "100%": { opacity: "1" },
        },
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'marquee-left': 'marquee-left 20s linear infinite',
        fadeInOut: "fadeInOut 0.5s ease-in-out",
        fadeOutIn: "fadeOutIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
