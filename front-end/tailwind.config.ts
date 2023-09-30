import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        primary: "#fff",
        "op-primary": "#ffffff5c",
        secondary: "#000",
        'op-secondary': "#0000005c",
        accent: 'rgb(85, 230, 165)'
      },

      lineHeight: {
        'extra-lg': '82px',
        'extra-base': '68px',
        'extra-sm': '48px',
      },

      screens: {
        '2sm': '408px',
        '3sm': "480px",
        '4sm': "612px",
        '2md': "824px",
      },

      width: {
        'x1/2': '49.5%',
      }
    },
  },
  plugins: [],
}
export default config
