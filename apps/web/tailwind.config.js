/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        strive: {
          canvas: 'var(--strive-canvas)',
          ink: 'var(--strive-ink)',
          'true-ink': 'var(--strive-true-ink)',
          dark: 'var(--strive-dark)',
          muted: 'var(--strive-muted)',
          inverse: 'var(--strive-inverse-muted)',
          signal: 'var(--strive-signal)',
          support: 'var(--strive-support)',
          echo: 'var(--strive-echo)',
        },
      },
      fontFamily: {
        sans: ['var(--strive-ui)'],
        display: ['var(--strive-display)'],
      },
    },
  },
  plugins: [],
}
