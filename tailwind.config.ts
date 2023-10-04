import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

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
        '3md': "900px",
      },

      width: {
        'x1/2': '49.5%',
        '2x1/2': '49.25%',
        '3x2/2': 'calc(100% / 2 - 1.5rem)',
      },

      height: {
        '3x2/2': 'calc(100% - 73px)',
      }
    },
  },
  plugins: [
    plugin(function ({ addComponents }: { addComponents: Function }) {
      addComponents({
        '.title': {
          color: '#fff',
          lineHeight: 'normal',
          fontSize: '1.875rem',
          fontWeight: '400',
          '@media (min-width: 768px)': {
            fontSize: '3rem',
          },
          '@media (min-width: 1280px)': {
            fontSize: '3.75rem',
          }
        },
        '.text': {
          color: '#fff',
          lineHeight: '2.25rem',
          fontSize: '1.25rem',
          fontWeight: '300',
        },
        '.desc': {
          color: '#fff',
          lineHeight: 'normal',
          fontSize: '1rem',
          fontWeight: '300',
        },
        '.up-title': {
          color: '#fff',
          lineHeight: '2.25rem',
          fontSize: '1.875rem',
          fontWeight: '300',
          textTransform: 'uppercase',
        },
        '.up-text': {
          color: '#fff',
          lineHeight: '1.25rem',
          fontSize: '0.875rem',
          fontWeight: '300',
          textTransform: 'uppercase',
        },
        '.up-desc': {
          color: '#fff',
          lineHeight: '2.25rem',
          fontSize: '1.25rem',
          fontWeight: '300',
          textTransform: 'uppercase',
        },
        '.border-wrap': {
          border: '0.05rem solid #ffffff5c',
          borderRadius: '0.75rem',
          padding: '1rem',
        }
      });
    }),
  ],
}
export default config;