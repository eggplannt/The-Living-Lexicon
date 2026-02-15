import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        onbackground: 'var(--color-onbackground)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'alternative-background': 'var(--color-alternative-background)',
      },
    },
  },
  plugins: [],
} satisfies Config
