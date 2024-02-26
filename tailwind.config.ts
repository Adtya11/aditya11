import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
  },
  fontFamily: {
    poppins: ["Poppins", "sans-serif"],
    oswald: ["Oswald", "sans-serif"],
  },
  plugins: [],
}
export default config
