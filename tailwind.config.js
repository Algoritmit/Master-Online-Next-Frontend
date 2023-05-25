/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {},
  daisyui: {
    themes: [
      {
        light: {
          primary: "#c1bb01",
          secondary: "#63f295",
          accent: "#dd82b4",
          neutral: "#291A2E",
          "base-100": "#F7F7F8",
          info: "#AECBE5",
          success: "#2EE0AE",
          warning: "#B48608",
          error: "#ED5D40",
        },
      },
      "halloween"
    ],
    darkTheme: "halloween",
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
