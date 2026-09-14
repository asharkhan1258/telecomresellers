/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F8FA",
        ink: "#16202B",
        steel: {
          DEFAULT: "#1F4E79",
          dark: "#163A5A",
          light: "#3D6B95",
        },
        amber: {
          DEFAULT: "#E8A33D",
          dark: "#C7842A",
        },
        line: "#D8DEE4",
        moss: "#2F7A5D",
      },
      fontFamily: {
        display: ["var(--font-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};
