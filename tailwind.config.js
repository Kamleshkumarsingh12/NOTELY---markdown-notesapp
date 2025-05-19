


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: { fontSize: '2rem' },  // # Heading
            h2: { fontSize: '1.5rem' }, // ## Heading
            h3: { fontSize: '1.17rem' }, // ### Heading
              pre: { 
        backgroundColor: '#0000FF', // Your blue bg
      },
      'code::before, code::after': { // Remove backticks color
        content: 'none', 
      },
      code: {
        color: '#f7d0e9', // Your red text
        backgroundColor: '#f5f5f5', // Optional: different bg for inline code
      },
      'pre code': {
        color: '#f7d0e9', // Force text color inside <pre>
        backgroundColor: 'transparent', // Use pre's bg
      }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography') // 🔥 Add this plugin
  ],
}