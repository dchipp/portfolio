import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
    colors: {
      'text': '#0a070e',
      'text-inactive': '#514363',
      'background': '#f8f5fa',
      'background-dark': '#f3e6fc',
      'primary': '#8762b5',
      'secondary': '#cf98c3',
      'accent': '#be75a3',
     }
  },
  plugins: [],
};
export default config;
