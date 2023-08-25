import type {Config} from 'tailwindcss';

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      'xs': '480px',
      's': '738px',
      'm': '1200px',
      'l': '1800px',
      'no-hover': {'raw': '(hover: hover) and (pointer: fine)'}
    },
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      white: '#fffaee',
      grey: {
        50: '#BEBEBE',
        100: '#9a9696',
        300: '#494949',
        500: '#313030',
        700: '#1E1E1E',
        900: '#131312'
      },
      orange: {
        100: '#F68757',
        200: '#CC4F29'
      }
    },
    extend: {
      boxShadow: {
        'custom-ondark': "2px 5px 18px rgba(0, 0, 0, 0.40)",
      },
      fontSize: {
        'xxs': ['.625rem', '2.1em'],
        'lg2': ['1.125rem', '2.25rem'],
        'lg3': ['1.125rem', '1.68rem'],
        '2.25xl': ['1.5rem', '1.625rem'],
        '2.5xl': ['1.5rem', '2.25rem'],
        '3.5xl': ['2rem','2.25rem'],
        '3.75xl': ['2rem','3rem'],
        '4.5xl': ['2.5rem','3.75rem'],
        '5.5xl': ['3rem', '3.5rem'],
        '5.75xl': ['3.5rem', '5.25rem'],
        '6.5xl': ['4rem', '6rem'],
        '7.5xl': ['4.5rem', '6.75rem'],
      },
      fontFamily: {
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],
        'monument': ['Monument Extended', 'sans-serif'],
      },
      padding: {
        xs: '30px',
        s: '35px',
        m: '60px',
        l: '62px',
        '30%': '30%'
      },
    },
  },
  plugins: [
    require('./tailwind-utils/plugins/layout.js'),
  ],
} as Config;
