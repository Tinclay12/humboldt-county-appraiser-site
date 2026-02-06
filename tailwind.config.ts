import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Humboldt-inspired palette
        forest: {
          charcoal: '#0d1419',
          dark: '#141d24',
          medium: '#1e2a35',
          light: '#273642',
        },
        fog: {
          50: '#e8ecf0',
          100: '#d1d9e1',
          200: '#a8b5c2',
          300: '#8a9aab',
          400: '#6b7d92',
          500: '#5c6b78',
          600: '#4d5a66',
          700: '#3d4f5c',
          800: '#2e3d48',
          900: '#1f2b34',
        },
        amber: {
          50: '#fdf6eb',
          100: '#f9e9cc',
          200: '#f2d399',
          300: '#eabb66',
          400: '#e3a333',
          500: '#c4913c',
          600: '#a37832',
          700: '#825f28',
          800: '#61461e',
          900: '#412d14',
        },
        sage: {
          50: '#e8f0ea',
          100: '#c5d9cb',
          200: '#9fbfa8',
          300: '#4a5d4f',
        },
        // Alias for backward compatibility
        gold: {
          50: '#fdf6eb',
          100: '#f9e9cc',
          200: '#f2d399',
          300: '#eabb66',
          400: '#e3a333',
          500: '#c4913c',
          600: '#a37832',
          700: '#825f28',
          800: '#61461e',
          900: '#412d14',
        },
        // Semantic backgrounds
        dark: {
          background: {
            primary: '#0d1419',
            secondary: '#141d24',
            tertiary: '#1e2a35',
          },
          navy: {
            50: '#e8ecf0',
            100: '#d1d9e1',
            200: '#a8b5c2',
            300: '#8a9aab',
            400: '#6b7d92',
            500: '#5c6b78',
            600: '#4d5a66',
            700: '#3d4f5c',
            800: '#2e3d48',
            900: '#1f2b34',
            950: '#0d1419',
          },
        },
        // Legacy aliases for backward compatibility
        primary: {
          50: '#e8ecf0',
          100: '#d1d9e1',
          200: '#a8b5c2',
          300: '#8a9aab',
          400: '#6b7d92',
          500: '#5c6b78',
          600: '#4d5a66',
          700: '#3d4f5c',
          800: '#2e3d48',
          900: '#1f2b34',
          950: '#0d1419',
        },
        secondary: {
          50: '#e8ecf0',
          100: '#d1d9e1',
          200: '#a8b5c2',
          300: '#8a9aab',
          400: '#6b7d92',
          500: '#5c6b78',
          600: '#4d5a66',
          700: '#3d4f5c',
          800: '#2e3d48',
          900: '#1f2b34',
          950: '#0d1419',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #0d1419 0%, #141d24 50%, #1e2a35 100%)',
        'gradient-accent': 'linear-gradient(135deg, #c4913c 0%, #e3a333 100%)',
      },
      boxShadow: {
        premium: '0 20px 60px -15px rgba(0, 0, 0, 0.4)',
        'premium-lg': '0 25px 80px -20px rgba(0, 0, 0, 0.5)',
        accent: '0 10px 40px -10px rgba(196, 145, 60, 0.25)',
        glass: '0 8px 32px 0 rgba(13, 20, 25, 0.4)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
