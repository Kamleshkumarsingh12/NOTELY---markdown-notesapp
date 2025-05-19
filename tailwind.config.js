// tailwind.config.js
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            /* your existing overrides */
            h1: { fontSize: '2rem' },
            h2: { fontSize: '1.5rem' },
            h3: { fontSize: '1.17rem' },
            pre: {
              backgroundColor: '#0000FF',
            },
            'code::before, code::after': {
              content: 'none',
            },
            code: {
              color: '#f7d0e9',
              backgroundColor: '#f5f5f5',
            },
            'pre code': {
              color: '#f7d0e9',
              backgroundColor: 'transparent',
            },

            /* new: style the outer wrapper */
            '.code-block': {
              '@apply relative rounded-lg overflow-hidden border border-gray-500': {},
              // give a subtle shadow & dark bg
              backgroundColor: '#1e1e2e',
              padding: '1 rem',
            },
            /* style the <pre> inside code-block */
            '.code-block pre': {
              '@apply m-0': {},
              backgroundColor: 'transparent',
              fontFamily: 'Menlo, Consolas, monospace',
            },

            /* and finally the language tab */
            '.language-tab': {
              '@apply absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-md': {},
              backgroundColor: '#3b82f6',   // Tailwind’s blue-500
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            },
          }
        }
      }
    }
  },
  plugins: [
    typography,
  ],
}
