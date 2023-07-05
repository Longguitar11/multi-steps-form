const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "pages/**/*.{ts,tsx}",
    "stories/**/*.{ts,tsx}",
    "index.html",
  ],
  theme: {
    screens: {
      mobile: "400px",
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  extend: {
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
      "slide-right": {
        from: { transform: "translateX(-1000px)" },
        to: { transform: "translateX(0px)" },
      },
      slide: {
        from: {
          transform: "var(--origin)",
          opacity: 0,
        },
        to: {
          transform: "translateY(0)",
          opacity: 1,
        },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "slide-right": "slide-right 0.2s ease-out",
      slide: "slide 200ms",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
