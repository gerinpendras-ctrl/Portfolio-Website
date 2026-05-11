/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Core brand colours ──────────────────────────────────
        'bg-base':    '#071a1a',   // deepest background
        'bg-card':    '#0d2e2e',   // card / panel background
        'bg-panel':   '#0f3838',   // lighter panel

        'teal':       '#3BDE97',   // primary accent (cyan-teal)
        'teal-dim':   '#022213',   // hover/dim variant
        'teal-light': '#73ffc2',
        'gold':       '#f5c840',   // golden accent
        'gold-dim':   '#d4a820',   // hover/dim variant

        'text-main':  '#e8f5f0',   // primary text
        'text-muted': '#7ab5a8',   // muted / secondary text
      },
      fontFamily: {
        display: ['"Fredoka One"', 'cursive'],
        title: ['alro-bold', 'sans-serif'],
        body:    ['elms-light',      'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, #0f4040 0%, #071a1a 65%)',
        'card-gradient': 'linear-gradient(135deg, #0d2e2e 0%, #071a1a 100%)',
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'float-slow':  'float 9s ease-in-out infinite',
        'glow-pulse':  'glowPulse 3s ease-in-out infinite',
        'spin-slow':   'spin 20s linear infinite',
        'slide-up':    'slideUp 0.6s ease-out forwards',
        'fade-in':     'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px #2ee8c640' },
          '50%':      { boxShadow: '0 0 40px #2ee8c680, 0 0 80px #2ee8c630' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
