/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {
      lineHeight: {
        l1: "2.75rem",
        l2: "3rem",
        l3: "3.25rem",
        l4: "3.5rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
        
      },
      animation: {
        fadeOut: 'fadeOut 1s ease-in-out',
        fadeIn: 'fadeIn 1s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.black') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
        fadeIn: {
          '0%': { backgroundColor: theme('colors.transparent') },
          '100%': { backgroundColor: theme('colors.black') },
        },
      }),
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        "green-light": "#c4c5ba",
        "dark-blue": "#000071",
        "warm_white": "#fef8ea",
        transparent : colors.transparent,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: `${theme("colors.primary.600")}`,
              },
              code: { color: theme("colors.primary.400") },
            },
            "h1,h2": {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
            },
            h3: {
              fontWeight: "600",
            },
            code: {
              color: theme("colors.indigo.500"),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: `${theme("colors.primary.400")}`,
              },
              code: { color: theme("colors.primary.400") },
            },
            "h1,h2,h3,h4,h5,h6": {
              color: theme("colors.gray.100"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms"), require("@tailwindcss/typography"),
    function ({ addUtilities }) {
      const newUtilities = {
        '.cool-underline': {
          position: 'relative',
          display: 'inline-block',
          textDecoration: 'none',
        },
        '.cool-underline::after': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '2px',
          bottom: '0',
          left: '0',
          backgroundColor: 'white',
          transform: 'scaleX(0)',
          transformOrigin: 'bottom right',
          transition: 'transform 0.4s ease-in-out',
        },
        '.cool-underline:hover::after': {
          transform: 'scaleX(1)',
          transformOrigin: 'bottom left',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
