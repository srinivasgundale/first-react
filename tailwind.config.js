/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Make sure your paths are correct
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#2792B9",
          secondary: "#F472B6",
        },
      },
      "dim",
      // Other themes can be added here
      "dark", // Predefined DaisyUI theme
      "cupcake", // Predefined DaisyUI theme
      "cyberpunk", // Predefined DaisyUI theme
      // More DaisyUI predefined themes if needed
    ],
  },
};
