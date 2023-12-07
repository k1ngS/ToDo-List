/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: {
        100: "#F2F2F2",
        200: "#D9D9D9",
        300: "#808080",
        400: "#333333",
        500: "#262626",
        600: "#1A1A1A",
        700: "#0D0D0D",
      },
      purple: "#8284FA",
      purpleDark: "#5E60CE",
      blue: "#4EA8DE",
      blueDark: "#1E6F9F",
      danger: "#E25858",
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      spacing: {
        inputHeight: "3.375rem", //54px
        headerHeight: "12.5rem", //200px
        emptyTasksContainer: "15.25rem", //244px
        inputWidth: "39.875rem", // 638px
        container: "46rem", // 736px
      },
    },
  },
  plugins: [],
};
