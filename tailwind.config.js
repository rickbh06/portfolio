/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Barlow"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        /* Dark hero zone */
        space: {
          DEFAULT: '#0A0B0D',
          900: '#0E0F12',
          800: '#141518',
          700: '#1C1D21',
          600: '#26272C',
        },
        /* Light content zone */
        field: {
          DEFAULT: '#F7F6F4',
          100: '#EFEDEA',
          200: '#E2DED9',
          300: '#C8C3BC',
        },
        /* Primary text on light bg */
        ground: {
          DEFAULT: '#111111',
          60: '#555555',
          40: '#888888',
          20: '#BBBBBB',
        },
        /* Primary text on dark bg */
        cloud: {
          DEFAULT: '#F0F0EE',
          60: '#AAAAAA',
          40: '#666666',
        },
        /* Single accent — deep aerospace blue */
        thrust: {
          DEFAULT: '#1A3A6E',
          light: '#2B5BA8',
          bright: '#60A5FA', // Bright blue for high contrast on dark backgrounds
          pale: '#E8EEF8',
        },
      },
      maxWidth: {
        content: '1160px',
        narrow: '760px',
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
      },
    },
  },
  plugins: [],
}
