import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'blue-gradient': '#0081FF',
      }),
      linearGradientColors: theme => ({
        'blue-gradient': ['to top', '#0081FF', '#FFFFFF'],
      }),
      colors: {
        background: "#0D1520",
        backgroundPrimary: "#3B9EFF",
        navbar: "#104D87",
        primary: "#0081FF",
        secondary: "#104D87",
        paragraph: "#FFFFFF"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
