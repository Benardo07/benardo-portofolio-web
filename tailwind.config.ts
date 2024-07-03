import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        swipeUp: {
          '0%': { transform: 'translateY(100px)', opacity: "0" },
          '100%': { transform: 'translateY(0)', opacity: "1" },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' }
        },
        blinkCaret: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' }
        }
      },
      animation: {
        swipeUp: 'swipeUp 0.5s ease-out forwards',
        typing: 'typing 2s steps(30, end)',
        blinkCaret: 'blinkCaret 0.75s step-end infinite'
      },
      
    },
  },
  plugins: [],
};
export default config;
