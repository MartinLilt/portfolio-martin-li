import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
      textColor: {
        'primary': 'var(--text-color)',
        'primary-op': 'var(--text-op-color)',
        'second': 'var(--second-text-color)',
        'second-op': 'var(--second-text-op-color)',
        'accent': 'var(--accent-text-color)',
      },

      borderColor: {
        'primary': 'var(--border-color)',
        'primary-op': 'var(--border-op-color)',
        'second': 'var(--second-border-color)',
        'second-op': 'var(--second-border-op-color)',
        'accent': 'var(--accent-border-color)',
      },

      backgroundColor: {
        'primary': 'var(--bg-color)',
        'primary-op': 'var(--bg-op-color)',
        'second': 'var(--second-bg-color)',
        'second-op': 'var(--second-bg-op-color)',
        'accent': 'var(--accent-bg-color)',
      },

      boxShadow: {
        'custom': '0 0 10px var(--shadow-color)',
      },

      borderRadius: {
        'custom': 'var(--border-radius)',
      },

      borderWidth: {
        'light': '0.05rem',
      },

      inset: {
        'slice': '0.05rem',
      },

      lineHeight: {
        "extra-lg": "82px",
        "extra-base": "68px",
        "extra-sm": "48px",
      },

      screens: {
        "2sm": "408px",
        "3sm": "480px",
        "4sm": "612px",
        "2md": "824px",
        "3md": "900px",
      },

      width: {
        "x1/2": "49.5%",
        "2x1/2": "49.25%",
        "3x2/2": "calc(100% / 2 - 1.5rem)",
      },

      height: {
        "3x2/2": "calc(100% - 73px)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }: { addComponents: Function }) {
      addComponents({
        ".title": {
          color: "var(--text-color)",
          lineHeight: "2.25rem",
          fontSize: "1.5rem",
          fontWeight: "400",
          "@media (min-width: 408px)": {
            fontSize: "1.875rem",
            lineHeight: "normal",
          },
          "@media (min-width: 768px)": {
            fontSize: "3rem",
          },
          "@media (min-width: 1280px)": {
            fontSize: "3.75rem",
          },
        },
        ".text": {
          color: "var(--text-color)",
          fontSize: '1.125rem',
          lineHeight: '1.85rem',
          fontWeight: "300",
          "@media (min-width: 768px)": {
            fontSize: "1.25rem",
            lineHeight: "2.25rem",
          },
        },
        ".desc": {
          color: "var(--text-color)",
          lineHeight: '1.4rem',
          fontSize: "0.875rem",
          fontWeight: "300",
          "@media (min-width: 1280px)": {
            fontSize: "1rem",
            lineHeight: "1.6rem",
          },
        },
        ".up-title": {
          color: "var(--text-color)",
          lineHeight: "2.25rem",
          fontSize: "1.875rem",
          fontWeight: "300",
          textTransform: "uppercase",
        },
        ".up-text": {
          color: "var(--text-color)",
          lineHeight: "1.25rem",
          fontSize: "0.875rem",
          fontWeight: "300",
          textTransform: "uppercase",
        },
        ".up-desc": {
          color: "var(--text-color)",
          lineHeight: "2.25rem",
          fontSize: "1.25rem",
          fontWeight: "300",
          textTransform: "uppercase",
        },
        ".border-wrap": {
          border: "0.05rem solid var(--border-op-color)",
          borderRadius: "var(--border-radius)",
          padding: "1rem",
        },
        ".icon-button": {
          border: "0.05rem solid var(--border-color)",
          padding: "1rem",
          borderRadius: "var(--border-radius)",
          color: "var(--text-color)",
          backgroundColor: "var(--second-bg-color)",
          cursor: "pointer",
          display: "flex",
          width: "min-content",
          "&:hover": {
            color: "var(--second-text-color)",
            transform: "scale(1.1)",
            backgroundColor: "var(--bg-color)",
          },
        },
        ".back-shadow": {
          boxShadow:
            "inset 1px 1px 0 0 hsla(0,0%,100%,0.5),0 3px 8px 0 var(--shadow-color)",
        },
        ".input": {
          border: "0.05rem solid var(--border-op-color)",
          padding: "1rem",
          borderRadius: "var(--border-radius)",
          width: "100%",
          background: "transparent",
        },
        ".btn": {
          border: "0.05rem solid var(--border-color)",
          padding: "1rem",
          borderRadius: "var(--border-radius)",
          display: "flex",
          alignItems: "center",
          maxHeight: '53px',
          "@media (min-width: 768px)": {
            padding: "1rem 2rem",
          },
        },
        ".p-hover": {
          "&:hover": {
            background: "var(--bg-color)",
            color: "var(--second-text-color)",
            border: "0.05rem solid var(--border-color)",
            cursor: "pointer",
            transform: "scale(1.1)",
          },
        },
        ".s-hover": {
          "&:hover": {
            background: "var(--second-bg-color)",
            color: "var(--text-color)",
            border: "0.05rem solid var(--accent-border-color)",
            cursor: "pointer",
            transform: "scale(1.1)",
          },
        },
        ".center": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        ".border-after": {
          "&::after": {
            content: `''`,
            display: "block",
            width: "100%",
            height: "0.05rem",
            background: "var(--bg-op-color)",
          },
        },
        ".tag": {
          color: "var(--text-color)",
          display: "flex",
          padding: "0.5rem 1rem",
          borderRadius: "var(--border-radius)",
          border: "0.05rem solid var(--border-op-color)",
          maxWidth: "max-content",
          fontWeight: "300",
          fontSize: '0.875rem',
          lineHeight: '1.4rem',
          textTransform: "capitalize",
          margin: "0.25rem",
        },
        '.flex-full': {
          flex: '0 0 100%',
        },
        '.flex-half': {
          flex: '0 0 50%',
        }
      });
    }),
  ],
};

export default config;
