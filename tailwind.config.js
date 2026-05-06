/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0A1F44', 2: '#1C2E54' },
        muted: { DEFAULT: '#5B6B85', 2: '#8794AE' },
        line: { DEFAULT: '#E3EAF4', 2: '#D2DCEC' },
        bg: { soft: '#F5F8FC', tint: '#EEF4FB' },
        brand: {
          50: '#EAF3FF',
          100: '#D6E7FF',
          300: '#6EA8FF',
          500: '#1670F0',
          600: '#0F5ED4',
          700: '#0B4AAB',
          800: '#093d8f',
          900: '#082B66',
        },
        accent: '#00C2FF',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft-1': '0 1px 2px rgba(10,31,68,.06), 0 4px 12px rgba(10,31,68,.04)',
        'soft-2': '0 8px 24px rgba(10,31,68,.08), 0 2px 6px rgba(10,31,68,.05)',
        'soft-3': '0 24px 60px -20px rgba(10,31,68,.25), 0 8px 20px rgba(10,31,68,.06)',
        'soft-inset': 'inset 0 1px 0 rgba(255,255,255,.55)',
        hairline: '0 0 0 1px rgba(10,31,68,.06), 0 1px 2px rgba(10,31,68,.04)',
        'premium': '0 32px 64px -24px rgba(8,43,102,.18), 0 12px 28px -8px rgba(10,31,68,.08), inset 0 1px 0 rgba(255,255,255,.4)',
      },
      borderRadius: { 'xl-2': '22px', '3xl': '28px' },
      transitionDuration: {
        350: '350ms',
        500: '500ms',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
        'in-out-soft': 'cubic-bezier(0.45, 0, 0.15, 1)',
      },
      maxWidth: { container: '1240px' },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
