/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-green":
          "radial-gradient(var(--tw-gradient-stops))",
        avatar: "url('https://avatars.githubusercontent.com/c4slu')",
      },
      colors: {
        50: "#ecfdf3",
        100: "#d1fae1",
        200: "#a7f3c9",
        300: "#6ee7ac",
        400: "#34d38b",
        500: "#0fa968",
        600: "#05965c",
        700: "#04784c",
        800: "#065f3e",
        900: "#064e34",
        950: "#022c1e",
        black: "#000",
        "linkedin": "#0A66C2",
        "instagram": "#E4405F",
        "mail": "#1877F2",
        "github": "#333",
      },
    },
  },
  plugins: [],
};
